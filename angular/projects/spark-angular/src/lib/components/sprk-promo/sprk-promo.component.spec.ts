import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SprkPromoComponent } from './sprk-promo.component';

describe('SprkPromoComponent', () => {
  let component: SprkPromoComponent;
  let fixture: ComponentFixture<SprkPromoComponent>;
  let element: HTMLElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [SprkPromoComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SprkPromoComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement.querySelector('div');
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add classes when additionalClasses has a value', () => {
    component.additionalClasses = 'sprk-u-man';
    fixture.detectChanges();
    expect(element.classList.toString()).toEqual(
      'sprk-c-Promo sprk-o-Stack sprk-u-man',
    );
  });

  it('should add class when hasBorder is true', () => {
    component.hasBorder = true;
    fixture.detectChanges();
    expect(element.classList.contains('sprk-c-Promo--bordered')).toEqual(true);
  });

  it('should not add class when hasBorder is false', () => {
    component.hasBorder = false;
    fixture.detectChanges();
    expect(element.classList.contains('sprk-c-Promo--bordered')).toEqual(false);
  });

  it('should add class when isFlag is true', () => {
    component.isFlag = true;
    fixture.detectChanges();
    expect(element.classList.contains('sprk-c-Promo--flag')).toEqual(true);
  });

  it('should not add class when isFlag is false', () => {
    component.isFlag = false;
    fixture.detectChanges();
    expect(element.classList.contains('sprk-c-Promo--flag')).toEqual(false);
  });

  it('should add data-id when idString has a value', () => {
    const testString = 'element-id';
    component.idString = testString;
    fixture.detectChanges();
    expect(element.getAttribute('data-id')).toEqual(testString);
  });

  it('should not add data-id when idString has no value', () => {
    component.idString = null;
    fixture.detectChanges();
    expect(element.getAttribute('data-id')).toBeNull();
  });
});
