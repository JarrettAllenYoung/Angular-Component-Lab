
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
} from '@angular/core';

export type BhmdCartItem = {
  productName: string;
  packageLabel: string;
  flavors?: Array<{ flavorLabel: string; qty: number }>;
  totalQtyLabel: string;
  price: number;
  vipTotalPriceLabel: string;
  deliveryCadenceLabel?: string;
};

@Component({
  selector: 'app-bhmd-cart-detail-drawer',
  standalone: true,
  templateUrl: './bhmd-cart-detail-drawer.html',
  styleUrl: './bhmd-cart-detail-drawer.css',
})
export class BhmdCartDetailDrawerComponent implements OnChanges, OnDestroy {
  @Input() open = false;
  @Input() item: BhmdCartItem | null = null;

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
