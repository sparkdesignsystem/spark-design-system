import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkIconComponent } from '../sprk-icon/sprk-icon.component';
import { SparkCarouselComponent } from './sprk-carousel.component';

describe('SparkCarouselComponent', () => {
  let component: SparkCarouselComponent;
  let fixture: ComponentFixture<SparkCarouselComponent>;
  let carouselElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SparkCarouselComponent, SparkIconComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkCarouselComponent);
    component = fixture.componentInstance;
    carouselElement = fixture.nativeElement.querySelector('ul');
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });
});
