import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkIconComponent } from '../sprk-icon/sprk-icon.component';
import { SprkCarouselComponent } from './sprk-carousel.component';

describe('SparkCarouselComponent', () => {
  let component: SprkCarouselComponent;
  let fixture: ComponentFixture<SprkCarouselComponent>;
  let carouselElement: HTMLElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SprkCarouselComponent, SprkIconComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SprkCarouselComponent);
    component = fixture.componentInstance;
    carouselElement = fixture.nativeElement.querySelector('ul');
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });
});
