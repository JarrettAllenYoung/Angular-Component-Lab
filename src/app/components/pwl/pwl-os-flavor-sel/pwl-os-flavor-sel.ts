import { Component, EventEmitter, Input, Output } from '@angular/core';
import type { Flavor } from '../pwl-offer-selector/pwl-offer-selector';

@Component({
  selector: 'app-pwl-os-flavor-sel',
  standalone: true,
  templateUrl: './pwl-os-flavor-sel.html',
  styleUrl: './pwl-os-flavor-sel.css',
})
export class PwlOsFlavorSelComponent {
  @Input({ required: true }) flavor!: Flavor;

  @Input() qty = 0;
  @Input() max = 6;

  // Pass a preformatted label from the parent for now
  // Examples: "$69.95 / Jar" or "$44.95 / Jar"
  @Input() unitPriceLabel = '';

  @Input() callout = '';
  @Input() isSelected = false;

  @Output() select = new EventEmitter<void>();
  @Output() qtyChange = new EventEmitter<number>();

  onSelect() {
    this.select.emit();
  }

  dec() {
    const next = Math.max(0, this.qty - 1);
    this.qtyChange.emit(next);
  }

  inc() {
    const next = Math.min(this.max, this.qty + 1);
    this.qtyChange.emit(next);
  }

  onQtyInput(e: Event) {
    const raw = (e.target as HTMLInputElement).value;
    const parsed = Number(raw);

    if (!Number.isFinite(parsed)) {
      this.qtyChange.emit(this.qty);
      return;
    }

    const next = Math.max(0, Math.min(this.max, Math.trunc(parsed)));
    this.qtyChange.emit(next);
  }
}
