import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Product, ProductCardComponent } from '../../../components/product-card/product-card.component';
import { ProductGalleryComponent } from '../../../components/product-gallery/product-gallery.component';

type CategoryKey = 'all' | Product['category'];

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink, ProductGalleryComponent, ProductCardComponent],
  templateUrl: './product-gallery.page.html',
  styleUrl: './product-gallery.page.css',
  animations: [
    trigger('cardList', [
      transition('* => *', [
        // Instantly remove leaving items from layout so the remaining items
        // snap to the left immediately (prevents the "center flash").
        query(':leave', [style({ display: 'none' })], { optional: true }),

        // Prepare entering items (hidden)
        query(
          ':enter',
          [style({ opacity: 0, transform: 'translateY(10px) scale(0.98)' })],
          { optional: true }
        ),

        // Animate entering items
        query(
          ':enter',
          [
            stagger(60, [
              animate(
                '220ms ease',
                style({ opacity: 1, transform: 'translateY(0) scale(1)' })
              ),
            ]),
          ],
          { optional: true }
        ),
      ]),
    ]),

    // NEW: subtle fade on the whole grid when the filter changes
    trigger('gridFade', [
      transition('* => *', [
        style({ opacity: 0.6 }),
        animate('160ms ease-out', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class ProductGalleryPageComponent {
  categories: Array<{ key: CategoryKey; label: string }> = [
    { key: 'all', label: 'All' },
    { key: 'botanical', label: 'Botanical' },
    { key: 'tincture', label: 'Tincture' },
    { key: 'elixir', label: 'Elixir' },
  ];

  selectedCategory: CategoryKey = 'all';
  disableAnimations = false;

  constructor(private router: Router) {}

  onBack(e: Event) {
    e.preventDefault();
    this.disableAnimations = true;

    // let Angular apply [@.disabled] before navigating away
    requestAnimationFrame(() => {
      this.router.navigateByUrl('/components');
    });
  }

  products: Product[] = [
    {
      id: 'belladonna-1',
      title: 'belladonna leaf',
      price: '$18.00',
      description: 'Dried atropa belladonna for banishing and spirit work. Handle with care.',
      imageUrl: 'https://assets.codepen.io/406785/belladonna.webp',
      imageAlt: 'Belladonna',
      category: 'botanical',
      tags: ['botanical', 'banishing'],
    },
    {
      id: 'wormwood-1',
      title: 'wormwood tincture',
      price: '$24.00',
      description: 'Artemisia absinthium extract for divination and opening the third eye',
      imageUrl: 'https://assets.codepen.io/406785/tincture.jpg',
      imageAlt: 'Wormwood Tincture',
      category: 'tincture',
      tags: ['tincture', 'divination'],
    },
    {
      id: 'belladonna-2',
      title: 'belladonna leaf',
      price: '$18.00',
      description: 'Dried atropa belladonna for banishing and spirit work. Handle with care.',
      imageUrl: 'https://assets.codepen.io/406785/belladonna.webp',
      imageAlt: 'Belladonna',
      category: 'botanical',
      tags: ['botanical', 'banishing'],
    },
    {
      id: 'moon-water-1',
      title: 'full moon water',
      price: '$15.00',
      description: 'Spring water charged under the full moon for cleansing and renewal',
      imageUrl: 'https://assets.codepen.io/406785/water.jpg',
      imageAlt: 'Moon Water',
      category: 'elixir',
      tags: ['elixir', 'cleansing', 'lunar'],
    },
    {
      id: 'wormwood-2',
      title: 'wormwood tincture',
      price: '$24.00',
      description: 'Artemisia absinthium extract for divination and opening the third eye',
      imageUrl: 'https://assets.codepen.io/406785/tincture.jpg',
      imageAlt: 'Wormwood Tincture',
      category: 'tincture',
      tags: ['tincture', 'divination'],
    },
    {
      id: 'moon-water-2',
      title: 'full moon water',
      price: '$15.00',
      description: 'Spring water charged under the full moon for cleansing and renewal',
      imageUrl: 'https://assets.codepen.io/406785/water.jpg',
      imageAlt: 'Moon Water',
      category: 'elixir',
      tags: ['elixir', 'cleansing', 'lunar'],
    },
  ];

  setCategory(key: CategoryKey) {
    this.selectedCategory = key;
  }

  get filteredProducts(): Product[] {
    if (this.selectedCategory === 'all') return this.products;
    return this.products.filter((p) => p.category === this.selectedCategory);
  }

  isActive(key: CategoryKey) {
    return this.selectedCategory === key;
  }
  
  trackById(_: number, p: Product) {
    return p.id;
  }
}
