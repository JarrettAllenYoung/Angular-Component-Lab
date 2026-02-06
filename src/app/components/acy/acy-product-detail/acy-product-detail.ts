import { Component, signal } from '@angular/core';

import {
  AcyOfferSelectorComponent,
  type Flavor,
  type AddToCartPayload,
} from '../../../components/acy/acy-offer-selector/acy-offer-selector';

import {
  AcyCartDetailDrawerComponent,
  type AcyCartItem,
} from '../../../components/acy/acy-cart-detail-drawer/acy-cart-detail-drawer';

@Component({
  selector: 'app-acy-product-detail',
  standalone: true,
  imports: [AcyOfferSelectorComponent, AcyCartDetailDrawerComponent],
  templateUrl: './acy-product-detail.html',
  styleUrl: './acy-product-detail.css',
})
export class AcyProductDetailComponent {
  // image on the left
  selectedFlavorImgSrc = signal('images/acy/ACY_MorningCompleteAppleCinnamon.webp');
  selectedFlavorImgAlt = signal('Apple Cinnamon');

  // drawer state
  drawerOpen = signal(false);
  cartItem = signal<AcyCartItem | null>(null);

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
