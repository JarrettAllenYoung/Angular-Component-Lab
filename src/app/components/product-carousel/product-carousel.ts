import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';

type CarouselItem = {
  id: string;
  title: string;
  reviewCount: number;
  rating: number; // 0..5
};

@Component({
  selector: 'app-product-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-carousel.html',
  styleUrl: './product-carousel.css',
})
export class ProductCarouselComponent implements AfterViewInit {
  title = 'Website Exclusive Formulas';
  subtitle =
    'While you’ll find something special in stores, our main collection (including many bestsellers) is available exclusively on our website.';

  items: CarouselItem[] = [
    { id: '1', title: 'Ultimate H2™', rating: 4.2, reviewCount: 686 },
    { id: '2', title: 'Omni Slim™', rating: 4.0, reviewCount: 541 },
    { id: '3', title: 'Nitro Pulse®', rating: 4.4, reviewCount: 240 },
    { id: '4', title: 'Phyto Collagen Complex™', rating: 4.1, reviewCount: 488 },
    { id: '5', title: 'Polyphenol Dark Spot Diminisher™', rating: 4.0, reviewCount: 112 },
    { id: '6', title: 'Polyphenol-Rich Olive Oil™', rating: 4.0, reviewCount: 112 },
    { id: '7', title: '24 Strain Probiotic™', rating: 4.0, reviewCount: 112 },
    { id: '8', title: 'MCT Wellness™', rating: 4.0, reviewCount: 112 },
    { id: '9', title: 'Lectin Shield®', rating: 4.0, reviewCount: 112 },
    { id: '10', title: 'ProPlant Complete Shake™', rating: 4.0, reviewCount: 112 },
    { id: '11', title: 'Gundry MD PrebioThrive™', rating: 4.0, reviewCount: 112 },
    { id: '12', title: 'Vital Reds®', rating: 4.0, reviewCount: 112 },
  ];

  @ViewChild('track', { static: true }) trackRef!: ElementRef<HTMLDivElement>;

  canPrev = false;
  canNext = true;

  private stepPx = 0;

  ngAfterViewInit() {
    this.measureStep();
    this.updateNavState();
  }

  @HostListener('window:resize')
  onResize() {
    this.measureStep();
    this.updateNavState();
  }

  onTrackScroll() {
    this.updateNavState();
  }

  private getCards() {
    return Array.from(
      this.trackRef.nativeElement.querySelectorAll<HTMLElement>('article')
    );
  }

  private getScrollPadLeft(el: HTMLElement) {
    const v = getComputedStyle(el).scrollPaddingLeft || '0px';
    const n = parseFloat(v);
    return Number.isFinite(n) ? n : 0;
  }

  private scrollToIndex(index: number) {
    const el = this.trackRef.nativeElement;
    const cards = this.getCards();
    if (!cards.length) return;

    const clamped = Math.max(0, Math.min(cards.length - 1, index));
    const sp = this.getScrollPadLeft(el);

    // IMPORTANT: offsetLeft is the snap anchor. subtract scroll-padding-left.
    const left = Math.max(0, cards[clamped].offsetLeft - sp);

    el.scrollTo({ left, behavior: 'smooth' });
  }

  private getClosestIndex() {
    const el = this.trackRef.nativeElement;
    const cards = this.getCards();
    const sp = this.getScrollPadLeft(el);
    const x = el.scrollLeft + sp;

    let best = 0;
    let bestDist = Infinity;

    cards.forEach((c, i) => {
      const d = Math.abs(c.offsetLeft - x);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    });

    return best;
  }

  prev() {
    const i = this.getClosestIndex();
    this.scrollToIndex(i - 1);
  }

  next() {
    const i = this.getClosestIndex();
    this.scrollToIndex(i + 1);
  }

  private measureStep() {
    const el = this.trackRef.nativeElement;
    const cards = el.querySelectorAll<HTMLElement>('article');

    if (cards.length >= 2) {
      this.stepPx = Math.round(cards[1].offsetLeft - cards[0].offsetLeft);
      return;
    }

    if (cards.length === 1) {
      this.stepPx = Math.round(cards[0].getBoundingClientRect().width);
      return;
    }

    this.stepPx = Math.round(el.clientWidth * 0.9);
  }

  private updateNavState() {
    const cards = this.getCards();
    if (!cards.length) {
      this.canPrev = false;
      this.canNext = false;
      return;
    }

    const i = this.getClosestIndex();
    this.canPrev = i > 0;
    this.canNext = i < cards.length - 1;
  }

  starsArray(rating: number) {
    const full = Math.round(rating);
    return Array.from({ length: 5 }, (_, i) => i < full);
  }

  trackById(_i: number, item: CarouselItem) {
    return item.id;
  }
}
