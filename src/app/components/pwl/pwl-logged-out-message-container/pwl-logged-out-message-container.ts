import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pwl-logged-out-message-container',
  standalone: true,
  templateUrl: './pwl-logged-out-message-container.html',
  styleUrl: './pwl-logged-out-message-container.css',
})
export class PwlLoggedOutMessageContainerComponent {
  @Input({ required: true }) vipTotalPriceLabel!: string;

  // keep these as plain hrefs for now (same as your current markup)
  @Input() signUpHref: string = '';
  @Input() loginHref: string = '';
}
