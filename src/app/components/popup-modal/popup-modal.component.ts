import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'lab-popup-modal',
  standalone: true,
  imports: [NgIf],
  templateUrl: './popup-modal.component.html',
  styleUrl: './popup-modal.component.css',
})
export class PopupModalComponent {
  @Input() title = '';
  @Input() open = false;

  @Output() openChange = new EventEmitter<boolean>();

  close() {
    this.openChange.emit(false);
  }

  // Close when clicking the dark overlay (but NOT when clicking inside the popup box)
  onOverlayClick(event: MouseEvent) {
    if (event.target === event.currentTarget) this.close();
  }

  @HostListener('document:keydown.escape')
  onEsc() {
    if (this.open) this.close();
  }
}
