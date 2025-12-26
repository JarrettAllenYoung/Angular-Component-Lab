import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselDemo } from './carousel-demo';

describe('CarouselDemo', () => {
  let component: CarouselDemo;
  let fixture: ComponentFixture<CarouselDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
