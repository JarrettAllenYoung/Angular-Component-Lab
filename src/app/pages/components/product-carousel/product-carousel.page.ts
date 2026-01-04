import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductCarouselComponent } from '../../../components/product-carousel/product-carousel';

@Component({
  selector: 'app-carousel-demo',
  standalone: true,
  imports: [RouterLink, ProductCarouselComponent],
  templateUrl: './product-carousel.page.html',
  styleUrl: './product-carousel.page.css',
})
export class ProductCarouselDemoComponent {}
