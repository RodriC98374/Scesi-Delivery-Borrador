import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselComponent } from './carousel.component';
//import { M } from 'materialize-css';

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
/* document.addEventListener('DOMContentLoaded', () => {
  const carouselElements = document.querySelectorAll('.carousel');
  M.Carousel.init(carouselElements, {
      duration: 300, 
      dist: -30,
      shift: 5,
      padding: 5,
      numVisible: 3
  });
}); */