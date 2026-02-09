import { Component, signal } from '@angular/core';

import {
  BhmdOfferSelectorComponent,
  type Flavor,
  type AddToCartPayload,
} from '../../../components/bhmd/bhmd-offer-selector/bhmd-offer-selector';

import {
  BhmdCartDetailDrawerComponent,
  type BhmdCartItem,
} from '../../../components/bhmd/bhmd-cart-detail-drawer/bhmd-cart-detail-drawer';



@Component({
  selector: 'app-bhmd-product-detail',
  standalone: true,
  imports: [
    BhmdOfferSelectorComponent,
    BhmdCartDetailDrawerComponent,
  ],
  templateUrl: './bhmd-product-detail.html',
  styleUrl: './bhmd-product-detail.css',
})
export class BhmdProductDetailComponent {
  // image on the left
  selectedFlavorImgSrc = signal('images/bhmd/BHMDStarterSet.webp');
  selectedFlavorImgAlt = signal('Chocolate');
  product = {
    brand: 'Beverly Hills MD',
    title: 'BHMD Starter Set',
    titleSup: '†',
    description:
      'Pave the way for a visibly younger look! This essential kit includes everything you need in a reliable, effective anti-aging routine, giving you the tools to tackle the look of fine lines and sagging head-on.',
  };

  // drawer state
  drawerOpen = signal(false);
  cartItem = signal<BhmdCartItem | null>(null);

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
