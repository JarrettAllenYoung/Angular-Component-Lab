import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rhp-logged-out-message-container',
  standalone: true,
  templateUrl: './rhp-logged-out-message-container.html',
  styleUrl: './rhp-logged-out-message-container.css',
})
export class RhpLoggedOutMessageContainerComponent {
  @Input({ required: true }) vipTotalPriceLabel!: string;

  // keep these as plain hrefs for now (same as your current markup)
  @Input() signUpHref: string = '';
  @Input() loginHref: string = '';
}
