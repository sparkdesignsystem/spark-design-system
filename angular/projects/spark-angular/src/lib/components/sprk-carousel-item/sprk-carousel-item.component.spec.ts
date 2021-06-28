import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkCarouselItemComponent } from './sprk-carousel-item.component';

describe('SprkCarouselItemComponent', () => {
  let component: SprkCarouselItemComponent;
  let fixture: ComponentFixture<SprkCarouselItemComponent>;
  let carouselElement: HTMLElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SprkCarouselItemComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SprkCarouselItemComponent);
    component = fixture.componentInstance;
    carouselElement = fixture.nativeElement.querySelector('ul');
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });
});
