import { Component, EventEmitter, Output, computed, signal } from '@angular/core';
import type { RhpCartItem } from '../rhp-cart-detail-drawer/rhp-cart-detail-drawer';

type Flavor = 'strawberry' | 'watermelon';
type PackageType = 'otp' | 'sub';
type Qty = 1 | 2;

type OfferRow = {
  qty: Qty;
  saveLabel?: string; // "Save 10%"
  price: number; // display price
  cadence?: string; // "Monthly", "Every 3 Months"
  memberLine?: string; // "Or $134.85 with a free account"
};

@Component({
  selector: 'app-rhp-offer-selector',
  standalone: true,
  templateUrl: './rhp-offer-selector.html',
  styleUrl: './rhp-offer-selector.css',
})
export class RhpOfferSelectorComponent {
  flavor = signal<Flavor>('strawberry');
  packageType = signal<PackageType>('otp');
  selectedQty = signal<Qty>(2);
  strawberryQty = signal<number>(1);
  watermelonQty = signal<number>(1);

  otpOffers = signal<OfferRow[]>([
    { qty: 1, price: 79.95, memberLine: 'Or $49.95 with a free account' },
    { qty: 2, price: 143.91, saveLabel: 'Save 10%', memberLine: 'Or $89.91 with a free account' },
  ]);

  subOffers = signal<OfferRow[]>([
    { qty: 1, price: 44.95, saveLabel: 'Save 44%', cadence: 'Monthly' },
    { qty: 2, price: 119.85, saveLabel: 'Save 50%', cadence: 'Monthly' },
  ]);

  @Output() addToCart = new EventEmitter<RhpCartItem>();

  onAddToCart() {
    const offer = this.selectedOffer();
    if (!offer) return;

    const flavorLabel =
      this.flavor() === 'strawberry' ? 'Strawberry Lemonade' : 'Watermelon Mint';

    const packageLabel =
      this.packageType() === 'otp' ? 'One-time purchase' : 'Subscribe and save';

    const isTwoPeople = this.selectedQty() === 2;

    const peopleLabel = isTwoPeople ? 'Two people' : 'One person';

    let finalFlavorLabel = flavorLabel;

    if (isTwoPeople) {
      finalFlavorLabel = `Strawberry Lemonade x${this.strawberryQty()}, Watermelon Mint x${this.watermelonQty()}`;
    }

    this.addToCart.emit({
      productName: 'Morning Kick',
      flavorLabel: finalFlavorLabel,
      packageLabel,
      peopleLabel,
      price: offer.price,
    });
  }

  offers = computed(() => (this.packageType() === 'otp' ? this.otpOffers() : this.subOffers()));

  selectedOffer = computed(() => {
    const found = this.offers().find((o) => o.qty === this.selectedQty());
    return found ?? this.offers()[0];
  });

  ctaLabel = computed(() => {
    const price = this.selectedOffer()?.price ?? 0;
    return `ADD TO CART - $${price.toFixed(2)}`;
  });

  setFlavor(f: Flavor) {
    this.flavor.set(f);
  }

  setPackageType(t: PackageType) {
    this.packageType.set(t);

    // Keep selection valid when switching tabs
    const valid = this.offers().some((o) => o.qty === this.selectedQty());
    if (!valid) this.selectedQty.set(2);
  }

  selectQty(qty: Qty) {
    this.selectedQty.set(qty);

    if (qty === 2) {
      this.syncTwoPeopleDefaults();
    }
  }

  private syncTwoPeopleDefaults() {
    // If the user selects "Two people" and the mix is invalid, default to 1 + 1
    const total = this.strawberryQty() + this.watermelonQty();
    if (total !== 2) {
      this.strawberryQty.set(1);
      this.watermelonQty.set(1);
    }
  }

  setFlavorQty(flavor: Flavor, next: number) {
    // clamp 0..2
    const clamped = Math.max(0, Math.min(2, next));

    const other = flavor === 'strawberry' ? this.watermelonQty() : this.strawberryQty();
    // enforce total <= 2
    const allowed = Math.min(clamped, 2 - other);

    if (flavor === 'strawberry') this.strawberryQty.set(allowed);
    else this.watermelonQty.set(allowed);
  }

  incFlavor(flavor: Flavor) {
    const current = flavor === 'strawberry' ? this.strawberryQty() : this.watermelonQty();
    this.setFlavorQty(flavor, current + 1);
  }

  decFlavor(flavor: Flavor) {
    const current = flavor === 'strawberry' ? this.strawberryQty() : this.watermelonQty();
    this.setFlavorQty(flavor, current - 1);
  }
}
