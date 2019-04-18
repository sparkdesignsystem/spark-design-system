import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkCarouselComponent } from './sprk-carousel.component';

describe('SparkAccordionComponent', () => {
  let component: SparkCarouselComponent;
  let fixture: ComponentFixture<SparkCarouselComponent>;
  let accordionElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SparkCarouselComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkCarouselComponent);
    component = fixture.componentInstance;
    accordionElement = fixture.nativeElement.querySelector('ul');
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });
});
