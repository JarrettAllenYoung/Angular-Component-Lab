import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
} from '@angular/core';

import { RhpLoggedOutMessageContainerComponent } from '../rhp-logged-out-message-container/rhp-logged-out-message-container';

export type RhpCartItem = {
  productName: string;
  flavorLabel: string;
  packageLabel: string;
  peopleLabel: string;
  price: number;

  // optional, so nothing else breaks
  vipTotalPriceLabel?: string;
  signUpHref?: string;
  loginHref?: string;
};

@Component({
  selector: 'app-rhp-cart-detail-drawer',
  standalone: true,
  imports: [RhpLoggedOutMessageContainerComponent],
  templateUrl: './rhp-cart-detail-drawer.html',
  styleUrl: './rhp-cart-detail-drawer.css',
})
export class RhpCartDetailDrawerComponent implements OnChanges, OnDestroy {
  @Input() open = false;
  @Input() item: RhpCartItem | null = null;

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
