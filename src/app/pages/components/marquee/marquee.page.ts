import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MarqueeComponent } from '../../../components/marquee/marquee';

@Component({
  selector: 'app-marquee-page',
  standalone: true,
  imports: [RouterLink, MarqueeComponent],
  templateUrl: './marquee.page.html',
})
export class MarqueePageComponent {}
