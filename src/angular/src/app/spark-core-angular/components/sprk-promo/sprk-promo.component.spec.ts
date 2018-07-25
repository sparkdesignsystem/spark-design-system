import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkPromoComponent } from './sprk-promo.component';

describe('SparkPromoComponent', () => {
  let component: SparkPromoComponent;
  let fixture: ComponentFixture<SparkPromoComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SparkPromoComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkPromoComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement.querySelector('div');
  })

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add classes when additionalClasses has a value', () => {
    component.additionalClasses = 'sprk-u-man';
    fixture.detectChanges();
    expect(element.classList.toString()).toEqual('sprk-c-Accordion sprk-o-VerticalList sprk-u-man');
  })
});
