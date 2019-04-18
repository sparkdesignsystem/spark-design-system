import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkCarouselItemComponent } from './sprk-carousel-item.component';

describe('SparkAccordionComponent', () => {
  let component: SparkCarouselItemComponent;
  let fixture: ComponentFixture<SparkCarouselItemComponent>;
  let accordionElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SparkCarouselItemComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkCarouselItemComponent);
    component = fixture.componentInstance;
    accordionElement = fixture.nativeElement.querySelector('ul');
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });
});
