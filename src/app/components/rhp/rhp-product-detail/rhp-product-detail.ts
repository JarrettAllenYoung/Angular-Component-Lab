import { Component, EventEmitter, Output } from '@angular/core';
import { RhpOfferSelectorComponent } from '../rhp-offer-selector/rhp-offer-selector';
import type { RhpCartItem } from '../rhp-cart-detail-drawer/rhp-cart-detail-drawer';

@Component({
  selector: 'app-rhp-product-detail',
  standalone: true,
  imports: [RhpOfferSelectorComponent],
  templateUrl: './rhp-product-detail.html',
  styleUrl: './rhp-product-detail.css',
})
export class RhpProductDetailComponent {
  @Output() addToCart = new EventEmitter<RhpCartItem>();
}
