import { AcyLoggedOutMessageContainerComponent } from '../acy-logged-out-message-container/acy-logged-out-message-container';

import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
} from '@angular/core';

export type AcyCartItem = {
  productName: string;
  packageLabel: string;
  flavors?: Array<{ flavorLabel: string; qty: number }>;
  totalQtyLabel: string;
  price: number;
  vipTotalPriceLabel: string;
};

@Component({
  selector: 'app-acy-cart-detail-drawer',
  standalone: true,
  imports: [AcyLoggedOutMessageContainerComponent],
  templateUrl: './acy-cart-detail-drawer.html',
  styleUrl: './acy-cart-detail-drawer.css',
})
export class AcyCartDetailDrawerComponent implements OnChanges, OnDestroy {
  @Input() open = false;
  @Input() item: AcyCartItem | null = null;

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
