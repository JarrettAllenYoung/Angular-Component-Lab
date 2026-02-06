import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-acy-logged-out-message-container',
  standalone: true,
  templateUrl: './acy-logged-out-message-container.html',
  styleUrl: './acy-logged-out-message-container.css',
})
export class AcyLoggedOutMessageContainerComponent {
  @Input({ required: true }) vipTotalPriceLabel!: string;

  // keep these as plain hrefs for now (same as your current markup)
  @Input() signUpHref: string = '';
  @Input() loginHref: string = '';
}
