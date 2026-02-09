import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bhmd-logged-out-message-container',
  standalone: true,
  templateUrl: './bhmd-logged-out-message-container.html',
  styleUrl: './bhmd-logged-out-message-container.css',
})
export class BhmdLoggedOutMessageContainerComponent {
  @Input({ required: true }) vipTotalPriceLabel!: string;

  // keep these as plain hrefs for now (same as your current markup)
  @Input() signUpHref: string = '';
  @Input() loginHref: string = '';
}
