import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ProductCarouselDemoComponent } from './product-carousel.page';

describe('ProductCarouselDemoComponent', () => {
  let component: ProductCarouselDemoComponent;
  let fixture: ComponentFixture<ProductCarouselDemoComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCarouselDemoComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductCarouselDemoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
