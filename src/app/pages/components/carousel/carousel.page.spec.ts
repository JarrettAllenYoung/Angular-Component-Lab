import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { CarouselDemoComponent } from './carousel.page';

describe('CarouselDemoComponent', () => {
  let component: CarouselDemoComponent;
  let fixture: ComponentFixture<CarouselDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselDemoComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(CarouselDemoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
