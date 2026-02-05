import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RhpProductDetailComponent } from '../../../../components/rhp/rhp-product-detail/rhp-product-detail';
import { RhpCartDetailDrawerComponent, type RhpCartItem } from '../../../../components/rhp/rhp-cart-detail-drawer/rhp-cart-detail-drawer';

@Component({
  selector: 'app-roundhouse-provisions-pdp-page',
  standalone: true,
  imports: [RouterLink, RhpProductDetailComponent, RhpCartDetailDrawerComponent],
  templateUrl: './roundhouse-provisions-pdp.page.html',
})
export class RoundhouseProvisionsPdpPageComponent {
  drawerOpen = signal(false);
  lastAddedItem = signal<RhpCartItem | null>(null);

  openDrawer(item: RhpCartItem) {
    this.lastAddedItem.set(item);
    this.drawerOpen.set(true);
  }

  closeDrawer() {
    this.drawerOpen.set(false);
  }
}