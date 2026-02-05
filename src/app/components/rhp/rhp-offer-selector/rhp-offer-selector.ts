import { Component, EventEmitter, Output, computed, signal } from '@angular/core';
import type { RhpCartItem } from '../rhp-cart-detail-drawer/rhp-cart-detail-drawer';

type Flavor = 'strawberry' | 'watermelon';
type PackageType = 'otp' | 'sub';
type Qty = 1 | 2;

type OfferRow = {
  qty: Qty;
  saveLabel?: string;
  price: number;
  cadence?: string;
  memberLine?: string;
};

const FLAVOR_LABEL: Record<Flavor, string> = {
  strawberry: 'Strawberry Lemonade',
  watermelon: 'Watermelon Mint',
};

@Component({
  selector: 'app-rhp-offer-selector',
  standalone: true,
  templateUrl: './rhp-offer-selector.html',
  styleUrl: './rhp-offer-selector.css',
})
export class RhpOfferSelectorComponent {
  // Outputs
  @Output() addToCart = new EventEmitter<RhpCartItem>();

  // Base selection state
  flavor = signal<Flavor>('strawberry'); // used for One person only (tabs hidden for Two people)
  packageType = signal<PackageType>('otp');
  selectedQty = signal<Qty>(2);

  // Two-people mix state (0..2 each, total <= 2)
  strawberryQty = signal<number>(0);
  watermelonQty = signal<number>(0);

  // Offer data
  otpOffers = signal<OfferRow[]>([
    { qty: 1, price: 79.95, memberLine: 'Or $49.95 with a free account' },
    {
      qty: 2,
      price: 143.91,
      saveLabel: 'Save 10%',
      memberLine: 'Or $89.91 with a free account',
    },
  ]);

  subOffers = signal<OfferRow[]>([
    { qty: 1, price: 44.95, saveLabel: 'Save 44%', cadence: 'Monthly' },
    { qty: 2, price: 119.85, saveLabel: 'Save 50%', cadence: 'Monthly' },
  ]);

  // Derived
  offers = computed(() =>
    this.packageType() === 'otp' ? this.otpOffers() : this.subOffers()
  );

  selectedOffer = computed(() => {
    const list = this.offers();
    const found = list.find((o) => o.qty === this.selectedQty());
    return found ?? list[0];
  });

  ctaLabel = computed(() => {
    const price = this.selectedOffer()?.price ?? 0;
    return `ADD TO CART - $${price.toFixed(2)}`;
  });

  isTwoPeople = computed(() => this.selectedQty() === 2);

  mixTotal = computed(() => this.strawberryQty() + this.watermelonQty());

  canAddToCart = computed(() => {
    if (!this.isTwoPeople()) return true;
    return this.mixTotal() === 2;
  });

  // UI actions
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
  }

  incFlavor(flavor: Flavor) {
    const current = this.getFlavorQty(flavor);
    this.setFlavorQty(flavor, current + 1);
  }

  decFlavor(flavor: Flavor) {
    const current = this.getFlavorQty(flavor);
    this.setFlavorQty(flavor, current - 1);
  }

  onAddToCart() {
    if (!this.canAddToCart()) return;

    const offer = this.selectedOffer();
    if (!offer) return;

    const packageLabel =
      this.packageType() === 'otp' ? 'One-time purchase' : 'Subscribe and save';

    const peopleLabel = this.isTwoPeople() ? 'Two people' : 'One person';

    const flavorLabel = this.isTwoPeople()
      ? this.buildMixedFlavorLabel()
      : FLAVOR_LABEL[this.flavor()];

    this.addToCart.emit({
      productName: 'Morning Kick',
      flavorLabel,
      packageLabel,
      peopleLabel,
      price: offer.price,
    });
  }

  // Helpers
  private getFlavorQty(flavor: Flavor): number {
    return flavor === 'strawberry' ? this.strawberryQty() : this.watermelonQty();
  }

  private setFlavorQty(flavor: Flavor, next: number) {
    // clamp per-flavor 0..2
    const clamped = Math.max(0, Math.min(2, next));

    const other = flavor === 'strawberry' ? this.watermelonQty() : this.strawberryQty();

    // enforce total <= 2
    const allowed = Math.min(clamped, 2 - other);

    if (flavor === 'strawberry') this.strawberryQty.set(allowed);
    else this.watermelonQty.set(allowed);
  }

  private buildMixedFlavorLabel(): string {
    const parts: string[] = [];

    const s = this.strawberryQty();
    const w = this.watermelonQty();

    if (s > 0) parts.push(`${FLAVOR_LABEL.strawberry} x${s}`);
    if (w > 0) parts.push(`${FLAVOR_LABEL.watermelon} x${w}`);

    // If somehow called with no selections, return a safe label
    return parts.length ? parts.join(', ') : 'Flavor mix';
  }
}
