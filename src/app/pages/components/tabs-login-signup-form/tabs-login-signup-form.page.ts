import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TabsLoginSignupFormComponent } from '../../../components/tabs-login-signup-form/tabs-login-signup-form.component';
import { PopupModalComponent } from '../../../components/popup-modal/popup-modal.component';

@Component({
  standalone: true,
  imports: [RouterLink, TabsLoginSignupFormComponent, PopupModalComponent],
  templateUrl: './tabs-login-signup-form.page.html',
  styleUrl: './tabs-login-signup-form.page.css',
})
export class TabsLoginSignupFormPageComponent {
  isOpen = signal(false);

  open() {
    this.isOpen.set(true);
  }

  setOpen(next: boolean) {
    this.isOpen.set(next);
  }
}
