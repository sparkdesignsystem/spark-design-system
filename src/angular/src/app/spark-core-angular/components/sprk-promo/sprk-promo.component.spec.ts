import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SparkIconComponent } from '../sprk-icon/sprk-icon.component';
import { SparkPromoComponent } from './sprk-promo.component';

describe('SparkPromoComponent', () => {
  let component: SparkPromoComponent;
  let fixture: ComponentFixture<SparkPromoComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [SparkPromoComponent, SparkIconComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkPromoComponent);
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
      'sprk-o-Stack sprk-o-Stack--split@s sprk-o-Stack--medium sprk-u-man'
    );
  });

  it('should add additional classes to img link when additionalClassesImgLink has a value', () => {
    component.media = 'img';
    component.additionalClassesImgLink = 'sprk-u-man';
    fixture.detectChanges();
    expect(element.querySelector('a').classList.toString()).toEqual(
      'sprk-o-Stack__item sprk-u-man'
    );
  });

  it('should add additional classes to icon link when additionalClassesIconLink has a value', () => {
    component.media = 'icon';
    component.additionalClassesIconLink = 'sprk-u-man';
    fixture.detectChanges();
    expect(element.querySelector('a').classList.toString()).toEqual(
      'sprk-o-Stack__item sprk-u-man'
    );
  });

  it('should it show the correct icon when icon is chosen as media type and iconType input has a value', () => {
    component.media = 'icon';
    component.iconType = 'bell';
    fixture.detectChanges();
    expect(
      element
        .querySelector('a svg use')
        .getAttribute('xlink:href')
        .toString()
    ).toEqual('#' + 'bell');
  });
});
