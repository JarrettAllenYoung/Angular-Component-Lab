import { Component, signal } from '@angular/core';

import {
  PwlOfferSelectorComponent,
  type Flavor,
  type AddToCartPayload,
} from '../../../components/pwl/pwl-offer-selector/pwl-offer-selector';

import {
  PwlCartDetailDrawerComponent,
  type PwlCartItem,
} from '../../../components/pwl/pwl-cart-detail-drawer/pwl-cart-detail-drawer';

@Component({
  selector: 'app-pwl-product-detail',
  standalone: true,
  imports: [PwlOfferSelectorComponent, PwlCartDetailDrawerComponent],
  templateUrl: './pwl-product-detail.html',
  styleUrl: './pwl-product-detail.css',
})
export class PwlProductDetailComponent {
  // image on the left
  selectedFlavorImgSrc = signal('images/pwl/PWL_PlantProteinChocolate.webp');
  selectedFlavorImgAlt = signal('Chocolate');
  product = {
    brand: 'Power Life',
    title: 'High Impact Plant Protein †',
    description:
      'A unique blend of powerful plant proteins, HMB, vitamin D3, and digestive enzymes designed to nourish your muscles, support your strength, and support the preservation of lean muscle.',
  };

  // drawer state
  drawerOpen = signal(false);
  cartItem = signal<PwlCartItem | null>(null);

  onFlavorChange(f: Flavor) {
    this.selectedFlavorImgSrc.set(f.imgSrc);
    this.selectedFlavorImgAlt.set(f.imgAlt);
  }

  onAddToCart(payload: AddToCartPayload) {
    // payload.item matches the drawer’s expected shape
    this.cartItem.set(payload.item);
    this.drawerOpen.set(true);
  }

  closeDrawer() {
    this.drawerOpen.set(false);
  }
}
