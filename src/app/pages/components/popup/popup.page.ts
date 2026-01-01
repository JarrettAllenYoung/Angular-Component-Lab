import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PopupModalComponent } from '../../../components/popup-modal/popup-modal.component';

@Component({
  selector: 'app-popup-page',
  standalone: true,
  imports: [PopupModalComponent, RouterLink],
  templateUrl: './popup.page.html',
  styleUrl: './popup.page.css',
})
export class PopupPageComponent {
  isOpen = signal(false);

  open() {
    this.isOpen.set(true);
  }

  setOpen(next: boolean) {
    this.isOpen.set(next);
  }
}
