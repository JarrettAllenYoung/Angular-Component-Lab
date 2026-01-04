import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export type ProductCarouselCardItem = {
  id: string;
  title: string;
  reviewCount: number;
  rating: number; // 0..5
};

@Component({
  selector: 'app-product-carousel-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-carousel-card.html',
  styleUrl: './product-carousel-card.css',
})
export class ProductCarouselCardComponent {
  @Input({ required: true }) item!: ProductCarouselCardItem;

  starsArray(rating: number) {
    const full = Math.round(rating);
    return Array.from({ length: 5 }, (_, i) => i < full);
  }

  prevent(e: Event) {
    e.preventDefault();
  }
}
