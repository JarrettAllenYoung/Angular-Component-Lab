import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export type Product = {
  id: string;
  title: string;
  price: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  category: 'botanical' | 'tincture' | 'elixir';
  tags: string[]; // e.g. ['botanical', 'banishing']
};

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;
}
