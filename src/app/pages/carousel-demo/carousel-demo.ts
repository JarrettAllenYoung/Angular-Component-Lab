import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductCarouselComponent } from '../../components/product-carousel/product-carousel';

@Component({
  selector: 'app-carousel-demo',
  standalone: true,
  imports: [RouterLink, ProductCarouselComponent],
  templateUrl: './carousel-demo.html',
  styleUrl: './carousel-demo.css',
})
export class CarouselDemoComponent {}
