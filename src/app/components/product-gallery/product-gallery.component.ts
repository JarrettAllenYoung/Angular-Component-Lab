import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product, ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-gallery',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-gallery.component.html',
  styleUrl: './product-gallery.component.css',
})
export class ProductGalleryComponent {
  @Input({ required: true }) products: Product[] = [];
}
