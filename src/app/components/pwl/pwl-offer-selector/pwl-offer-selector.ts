
import { PwlLoggedOutMessageContainerComponent } from '../pwl-logged-out-message-container/pwl-logged-out-message-container';

import {
  Component,
  computed,
  signal,
  effect,
  EventEmitter,
  Output,
} from '@angular/core';

export type FlavorKey = 'chocolate' | 'vanilla' | 'strawberry-vanilla';

export type Flavor = {
  key: FlavorKey;
  label: string;
  imgAlt: string;
  imgSrc: string;
};

export type AddToCartPayload = {
  item: {
    productName: string;
    packageLabel: string;
    flavors: Array<{ flavorLabel: string; qty: number }>;
    totalQtyLabel: string;
    price: number;
    vipTotalPriceLabel: string;
  };
};

@Component({
  selector: 'app-pwl-offer-selector',
  standalone: true,
  imports: [PwlLoggedOutMessageContainerComponent],
  templateUrl: './pwl-offer-selector.html',
  styleUrl: './pwl-offer-selector.css',
})
export class PwlOfferSelectorComponent {
  // --- pricing (non-member for now) ---
  readonly unitPrice = 79.0;
  readonly maxTotalQty = 6;
  readonly servingsPerJar = 30;

  // --- OTP pricing matrix (bundle totals) ---
  readonly otpBundleTotals: Record<number, number> = {
    1: 69.95,
    2: 139.90,
    3: 188.85,
    4: 251.80,
    5: 314.75,
    6: 353.70,
  };

  readonly otpSavingsByQty: Record<number, number> = {
    1: 0,
    2: 0,
    3: 75,
    4: 100,
    5: 126,
    6: 165,
  };

  // --- VIP (logged-out message) pricing matrix ---
  readonly vipBundleTotals: Record<number, number> = {
    1: 49.95,
    2: 98,
    3: 134.85,
    4: 179,
    5: 223,
    6: 254.70,
  };

  // --- SUB (Subscribe and Save) pricing matrix (bundle totals) ---
  readonly subBundleTotals: Record<number, number> = {
    1: 44.95,
    2: 89.9,
    3: 119.85,
    4: 159.80,
    5: 199.75,
    6: 227.70,
  };

  readonly subSavingsByQty: Record<number, number> = {
    1: 25,
    2: 25,
    3: 90,
    4: 92,
    5: 115,
    6: 192,
  };

  // --- flavors ---
  readonly flavors: Flavor[] = [
    {
      key: 'chocolate',
      label: 'Chocolate',
      imgAlt: 'Chocolate',
      imgSrc: 'images/pwl/PWL_PlantProteinChocolate.webp',
    },
    {
      key: 'vanilla',
      label: 'Vanilla',
      imgAlt: 'Vanilla',
      imgSrc: 'images/pwl/PWL_PlantProteinVanilla.webp',
    },
    {
      key: 'strawberry-vanilla',
      label: 'Strawberry Vanilla',
      imgAlt: 'Strawberry Vanilla',
      imgSrc: 'images/pwl/PWL_PlantProteinStrawberryVanilla.webp',
    },
  ];

  // --- outputs (used by product detail page) ---
  @Output() flavorChange = new EventEmitter<Flavor>();
  @Output() addToCart = new EventEmitter<AddToCartPayload>();

  // --- state ---
  quantities = signal<Record<FlavorKey, number>>({
    chocolate: 0,
    vanilla: 0,
    'strawberry-vanilla': 0,
  });

  packageType = signal<'sub' | 'otp'>('sub');

  selectedFlavor = signal<FlavorKey>('chocolate');

  // --- selected flavor helpers ---
  selectedFlavorObj = computed(() => {
    const key = this.selectedFlavor();
    return this.flavors.find((f) => f.key === key) ?? this.flavors[0];
  });

  selectedFlavorImgSrc = computed(() => this.selectedFlavorObj().imgSrc);
  selectedFlavorImgAlt = computed(() => this.selectedFlavorObj().imgAlt);

  constructor() {
    // Emit the initial selected flavor once the component is live
    effect(() => {
      const f = this.selectedFlavorObj();
      this.flavorChange.emit(f);
    });
  }

  setSelectedFlavor(flavor: FlavorKey) {
    this.selectedFlavor.set(flavor);
}

  // --- derived ---
  totalQty = computed(() => {
    const q = this.quantities();
    return q.chocolate + q.vanilla + q['strawberry-vanilla'];
  });

  otpDisplayQty = computed(() => Math.max(1, this.totalQty()));
  vipDisplayQty = computed(() => Math.max(1, this.totalQty()));
  subDisplayQty = computed(() => Math.max(1, this.totalQty()));

  // SUB
  subBundleTotal = computed(() => {
    const qty = this.subDisplayQty();
    return this.subBundleTotals[qty] ?? 0;
  });

  subUnitPrice = computed(() => {
    const qty = this.subDisplayQty();
    return this.subBundleTotal() / qty;
  });

  subSavingsPct = computed(() => {
    const qty = this.subDisplayQty();
    return this.subSavingsByQty[qty] ?? 0;
  });

  showSubSavings = computed(() => this.subSavingsPct() > 0);

  subUnitPriceLabel = computed(() => `$${this.subUnitPrice().toFixed(2)} / Jar`);

  subServingPriceLabel = computed(() => {
    const perServing = this.subUnitPrice() / this.servingsPerJar;
    return `$${perServing.toFixed(2)} / serving`;
  });

  // OTP
  otpBundleTotal = computed(() => {
    const qty = this.otpDisplayQty();
    return this.otpBundleTotals[qty] ?? 0;
  });

  otpUnitPrice = computed(() => {
    const qty = this.otpDisplayQty();
    return this.otpBundleTotal() / qty;
  });

  otpSavingsPct = computed(() => {
    const qty = this.otpDisplayQty();
    return this.otpSavingsByQty[qty] ?? 0;
  });

  showOtpSavings = computed(() => this.totalQty() >= 3 && this.otpSavingsPct() > 0);

  oneTimeUnitPriceLabel = computed(() => `$${this.otpUnitPrice().toFixed(2)} / Jar`);

  oneTimeServingPriceLabel = computed(() => {
    const perServing = this.otpUnitPrice() / this.servingsPerJar;
    return `$${perServing.toFixed(2)} / serving`;
  });

  // VIP (logged-out message uses TOTAL, not per jar)
  vipBundleTotal = computed(() => {
    const qty = this.vipDisplayQty();
    return this.vipBundleTotals[qty] ?? 0;
  });

  vipTotalPriceLabel = computed(() => `$${this.vipBundleTotal().toFixed(2)}`);

  // CTA + totals
  canAddToCart = computed(() => this.totalQty() > 0);

  totalPrice = computed(() => {
    const qty = this.totalQty();
    if (qty <= 0) return 0;

    if (this.packageType() === 'otp') return this.otpBundleTotals[qty] ?? 0;
    return this.subBundleTotals[qty] ?? 0;
  });

  ctaLabel = computed(() => {
    const qty = this.totalQty();
    if (qty === 0) return 'Add to Cart';
    return `Add to Cart - $${this.totalPrice().toFixed(2)}`;
  });

  oneTimeSubLabel = computed(() => {
    const jars = this.totalQty();
    if (jars <= 0) return 'Choose servings';

    const servings = jars * this.servingsPerJar;
    return servings === 1 ? '1 serving' : `${servings} servings`;
  });

  // --- handlers ---
  setPackageType(t: 'sub' | 'otp') {
    this.packageType.set(t);
  }

  setQty(flavor: FlavorKey, nextRaw: number) {
    const q = this.quantities();
    const current = q[flavor] ?? 0;

    const next = Math.max(0, Math.min(this.maxTotalQty, nextRaw));

    const otherTotal = this.totalQty() - current;
    const allowed = Math.max(0, Math.min(next, this.maxTotalQty - otherTotal));

    this.quantities.set({ ...q, [flavor]: allowed });
  }

  maxForFlavor(flavor: FlavorKey) {
    const q = this.quantities();
    const current = q[flavor] ?? 0;
    const otherTotal = this.totalQty() - current;
    return Math.max(0, this.maxTotalQty - otherTotal);
  }

  optionsForFlavor(flavor: FlavorKey) {
    const max = this.maxForFlavor(flavor);
    return Array.from({ length: max + 1 }, (_, i) => i);
  }

  lineItems = computed(() => {
    const q = this.quantities();

    return this.flavors
      .map((f) => ({
        flavorKey: f.key,
        flavorLabel: f.label,
        qty: q[f.key] ?? 0,
      }))
      .filter((x) => x.qty > 0);
  });

  onAddToCart() {
    if (!this.canAddToCart()) return;

    const qty = this.totalQty();

    this.addToCart.emit({
      item: {
        productName: 'Plant Protein',
        packageLabel:
          this.packageType() === 'sub'
            ? 'Subscribe and Save'
            : 'One-time purchase',
        flavors: this.lineItems().map((x) => ({
          flavorLabel: x.flavorLabel,
          qty: x.qty,
        })),
        totalQtyLabel: `${qty} jar${qty === 1 ? '' : 's'}`,
        price: this.totalPrice(),
        vipTotalPriceLabel: this.vipTotalPriceLabel(),
      },
    });
  }
}
