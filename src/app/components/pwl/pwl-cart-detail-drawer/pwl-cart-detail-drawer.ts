import { PwlLoggedOutMessageContainerComponent } from '../pwl-logged-out-message-container/pwl-logged-out-message-container';

import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
} from '@angular/core';

export type PwlCartItem = {
  productName: string;
  packageLabel: string;
  flavors?: Array<{ flavorLabel: string; qty: number }>;
  totalQtyLabel: string;
  price: number;
  vipTotalPriceLabel: string;
  deliveryCadenceLabel?: string;
};

@Component({
  selector: 'app-pwl-cart-detail-drawer',
  standalone: true,
  imports: [PwlLoggedOutMessageContainerComponent],
  templateUrl: './pwl-cart-detail-drawer.html',
  styleUrl: './pwl-cart-detail-drawer.css',
})
export class PwlCartDetailDrawerComponent implements OnChanges, OnDestroy {
  @Input() open = false;
  @Input() item: PwlCartItem | null = null;

  @Output() close = new EventEmitter<void>();

  private onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') this.close.emit();
  };

  ngOnChanges(changes: SimpleChanges): void {
    if ('open' in changes) {
      if (this.open) {
        document.addEventListener('keydown', this.onKeyDown);
      } else {
        document.removeEventListener('keydown', this.onKeyDown);
      }
    }
  }

  ngOnDestroy(): void {
    document.removeEventListener('keydown', this.onKeyDown);
  }

  onOverlayClick() {
    this.close.emit();
  }

  onPanelClick(e: MouseEvent) {
    e.stopPropagation();
  }
}
