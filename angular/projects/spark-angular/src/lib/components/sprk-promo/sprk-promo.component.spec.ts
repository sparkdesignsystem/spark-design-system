import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SprkIconComponent } from '../sprk-icon/sprk-icon.component';
import { SprkLinkDirective } from '../../directives/sprk-link/sprk-link.directive';
import { SprkPromoComponent } from './sprk-promo.component';

describe('SprkPromoComponent', () => {
  let component: SprkPromoComponent;
  let fixture: ComponentFixture<SprkPromoComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [SprkPromoComponent, SprkIconComponent, SprkLinkDirective],
    }).compileComponents();
  }));

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
      'sprk-c-Promo sprk-o-Stack sprk-o-Stack--split@s sprk-u-man',
    );
  });

  it('should add class when hasBorder is true', () => {
    component.hasBorder = true;
    fixture.detectChanges();
    expect(element.classList.contains('sprk-c-Promo--bordered')).toEqual(true);
  });

  it('should add additional classes to img link when additionalClassesImgLink has a value', () => {
    component.imgSrc = 'www.example.com/image.jpg';
    component.additionalClassesImgLink = 'sprk-u-man';
    fixture.detectChanges();
    expect(element.querySelector('a').classList.toString()).toEqual(
      'sprk-o-Stack__item sprk-o-Stack__item--half@s sprk-u-man',
    );
  });

  it('should not add additional classes to img link when additionalClassesImgLink has no value', () => {
    component.imgSrc = 'www.example.com/image.jpg';
    fixture.detectChanges();
    expect(element.querySelector('a').classList.toString()).toEqual(
      'sprk-o-Stack__item sprk-o-Stack__item--half@s',
    );
  });

  it('should add additional classes to the flag link when additionalClassesFlagLink has a value', () => {
    component.imgSrc = 'www.example.com/image.jpg';
    component.isFlag = true;
    component.additionalClassesFlagLink = 'sprk-u-man';
    fixture.detectChanges();
    expect(element.querySelector('a').classList.toString()).toEqual(
      'sprk-o-Stack__item--fourth@s sprk-o-Stack__item sprk-u-man',
    );
  });

  it('should not add additional classes to the flag link when additionalClassesFlagLink has no value', () => {
    component.imgSrc = 'www.example.com/image.jpg';
    component.isFlag = true;
    fixture.detectChanges();
    expect(element.querySelector('a').classList.toString()).toEqual(
      'sprk-o-Stack__item--fourth@s sprk-o-Stack__item',
    );
  });

  it('should add additional classes to content div when additionalClassesContent has a value', () => {
    component.additionalClassesContent = 'sprk-u-man';
    fixture.detectChanges();
    expect(
      element.querySelector('.sprk-c-Promo__content').classList.toString(),
    ).toEqual(
      'sprk-c-Promo__content sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--large sprk-u-man',
    );
  });

  it('should not add additional classes to content div when additionalClassesContent has no value', () => {
    fixture.detectChanges();
    expect(
      element.querySelector('.sprk-c-Promo__content').classList.toString(),
    ).toEqual(
      'sprk-c-Promo__content sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--large',
    );
  });

  it('should add correct additional class to button when buttonVariant is secondary', () => {
    component.cta = 'button';
    component.buttonVariant = 'secondary';
    fixture.detectChanges();
    expect(
      element.querySelector('.sprk-c-Button').classList.toString(),
    ).toEqual('sprk-c-Button sprk-c-Button--secondary');
  });

  it('should add correct additional class to button when buttonVariant is tertiary', () => {
    component.cta = 'button';
    component.buttonVariant = 'tertiary';
    fixture.detectChanges();
    expect(
      element.querySelector('.sprk-c-Button').classList.toString(),
    ).toEqual('sprk-c-Button sprk-c-Button--tertiary');
  });

  it('should add correct additional class to button when buttonVariant is quaternary', () => {
    component.cta = 'button';
    component.buttonVariant = 'quaternary';
    fixture.detectChanges();
    expect(
      element.querySelector('.sprk-c-Button').classList.toString(),
    ).toEqual('sprk-c-Button sprk-c-Button--quaternary');
  });

  it('should not add additional classes to button when buttonVariant has no value', () => {
    component.cta = 'button';
    fixture.detectChanges();
    expect(
      element.querySelector('.sprk-c-Button').classList.toString(),
    ).toEqual('sprk-c-Button');
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

  it('should set the href link of the img if imgHref is set', () => {
    component.imgSrc = 'www.example.com/image.jpg';
    component.imgHref = 'https://www.google.com';
    fixture.detectChanges();
    expect(element.querySelector('a').getAttribute('href')).toEqual(
      'https://www.google.com',
    );
  });

  it('should set the href link of the img if imgRouterLink is set', () => {
    component.imgSrc = 'www.example.com/image.jpg';
    component.imgRouterLink = '/router-test';
    fixture.detectChanges();
    expect(element.querySelector('a').getAttribute('href')).toEqual(
      '/router-test',
    );
  });

  it('should set the href link of the button if buttonHref is set', () => {
    component.cta = 'button';
    component.buttonHref = 'https://www.google.com';
    fixture.detectChanges();
    expect(
      element.querySelector('.sprk-c-Button').getAttribute('href'),
    ).toEqual('https://www.google.com');
  });

  it('should set the href link of the button if buttonRouterLink is set', () => {
    component.cta = 'button';
    component.buttonRouterLink = '/router-link';
    fixture.detectChanges();
    expect(
      element.querySelector('.sprk-c-Button').getAttribute('href'),
    ).toEqual('/router-link');
  });

  it('should set the href link of the button if ctaLinkHref is set', () => {
    component.cta = 'link';
    component.ctaLinkHref = 'https://www.google.com';
    fixture.detectChanges();
    expect(element.querySelector('.sprk-b-Link').getAttribute('href')).toEqual(
      'https://www.google.com',
    );
  });

  it('should set the href link of the button if ctaLinkRouterLink is set', () => {
    component.cta = 'link';
    component.ctaLinkRouterLink = '/router-link';
    fixture.detectChanges();
    expect(element.querySelector('.sprk-b-Link').getAttribute('href')).toEqual(
      '/router-link',
    );
  });
});
