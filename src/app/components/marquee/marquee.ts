import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-marquee',
  standalone: true,
  templateUrl: './marquee.html',
  styleUrls: ['./marquee.css'],

  // IMPORTANT: keeps your CSS (including :root) un-scoped so it behaves exactly like your snippet
  encapsulation: ViewEncapsulation.None,
})
export class MarqueeComponent {}
