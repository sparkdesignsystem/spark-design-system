import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SprkLinkDirectiveModule } from '../../directives/sprk-link/sprk-link.module';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkCardComponent } from './sprk-card.component';

describe('SparkCardComponent', () => {
  let component: SprkCardComponent;
  let fixture: ComponentFixture<SprkCardComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SprkLinkDirectiveModule, SprkIconModule, RouterTestingModule],
      declarations: [SprkCardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprkCardComponent);
    component = fixture.componentInstance;
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('getClassesCard should match what gets set on the card', () => {
    fixture.detectChanges();
    element = fixture.nativeElement.querySelector('div');
    expect(element.classList.toString()).toEqual(component.getClassesCard());
  });

  it('should set href on img link if imgHref set', () => {
    component.cardType = 'teaser';
    component.media = 'img';
    component.imgHref = 'https://www.sparkdesignsystem.com';
    fixture.detectChanges();
    element = fixture.nativeElement.querySelector('div');
    const el = element.querySelector('a');
    expect(el.getAttribute('href')).toEqual(
      'https://www.sparkdesignsystem.com',
    );
  });

  it('should add standout style selector if isStandout is true', () => {
    component.isStandout = true;
    fixture.detectChanges();
    element = fixture.nativeElement.querySelector('div');
    expect(element.classList).toContain('sprk-c-Card--standout');
  });

  it('should not add standout style selector if isStandout is false', () => {
    component.isStandout = false;
    fixture.detectChanges();
    element = fixture.nativeElement.querySelector('div');
    expect(element.classList.contains('sprk-c-Card--standout')).toBe(false);
  });

  it('should set href on img link if imgRouterLink set', () => {
    component.cardType = 'teaser';
    component.media = 'img';
    component.imgRouterLink = '/router-test';
    fixture.detectChanges();
    element = fixture.nativeElement.querySelector('div');
    const el = element.querySelector('a');
    expect(el.getAttribute('href')).toEqual('/router-test');
  });

  it('should set href on icon link if iconRouterLink set', () => {
    component.cardType = 'teaser';
    component.media = 'icon';
    component.iconRouterLink = '/router-test-icon';
    fixture.detectChanges();
    element = fixture.nativeElement.querySelector('div');
    const el = element.querySelector('a');
    expect(el.getAttribute('href')).toEqual('/router-test-icon');
  });

  it('should set href on cta link if ctaRouterLink set', () => {
    component.cardType = 'teaser';
    component.media = 'img';
    component.ctaRouterLink = '/router-test-cta';
    fixture.detectChanges();
    element = fixture.nativeElement.querySelector('div.sprk-o-Stack__item');
    const el = element.querySelector('a');
    expect(el.getAttribute('href')).toEqual('/router-test-cta');
  });

  it('should add the correct classes if additionalClassesCta is set on cta link', () => {
    component.additionalCtaClasses = 'sprk-u-pam';
    fixture.detectChanges();
    expect(component.getClassesCta()).toEqual('sprk-b-Link sprk-u-pam');
  });

  it('should add the correct class if cardType is not set', () => {
    fixture.detectChanges();
    expect(component.getClassesCard()).toEqual('sprk-c-Card sprk-o-Stack');
  });

  it('should add the img if cardType is set as teaser', () => {
    component.cardType = 'teaser';
    component.media = 'img';
    component.ctaType = 'button';
    component.ctaText = 'teaser';
    component.body = 'Some body copy.';
    component.title = 'Title!';
    component.imgAlt = 'Alt!';
    fixture.detectChanges();
    element = fixture.nativeElement.querySelector('div');
    const el = element.querySelector('a img');
    expect(el).toBeTruthy();
  });

  it('should add the correct classes if cardType has no value, but additionalClasses does', () => {
    component.body = 'Some body copy.';
    component.title = 'Title!';
    component.additionalClasses = 'sprk-u-pam sprk-u-man';
    fixture.detectChanges();
    expect(component.getClassesCard()).toEqual(
      'sprk-c-Card sprk-o-Stack sprk-u-pam sprk-u-man',
    );
  });

  it('should add the correct classes if ctaIcon is set and ctaType is set to link', () => {
    component.cardType = 'teaser';
    component.body = 'Some body copy.';
    component.title = 'Title!';
    component.ctaIcon = 'bell';
    component.ctaType = 'link';
    fixture.detectChanges();
    expect(component.getClassesCta()).toEqual(
      'sprk-b-Link sprk-b-Link--simple sprk-b-Link--has-icon',
    );
  });

  it('should not add the ctaIcon classes if the ctaType is button', () => {
    component.cardType = 'teaser';
    component.body = 'Some body copy.';
    component.title = 'Title!';
    component.ctaIcon = 'bell';
    component.ctaType = 'button';
    fixture.detectChanges();
    expect(component.getClassesCta()).toEqual('sprk-c-Button');
  });

  it('should add the correct classes if cardType and additionalClasses have values', () => {
    component.cardType = 'teaser';
    component.media = 'img';
    component.ctaType = 'button';
    component.ctaText = 'Link text';
    component.body = 'Some body copy.';
    component.title = 'Title!';
    component.imgAlt = 'Alt!';
    component.additionalClasses = 'sprk-u-pam sprk-u-man';
    fixture.detectChanges();
    expect(component.getClassesCard()).toEqual(
      'sprk-c-Card sprk-o-Stack sprk-u-pam sprk-u-man',
    );
  });

  it('should set the data-analytics attribute given a value in the ctaAnalytics Input on the teaser card', () => {
    component.cardType = 'teaser';
    component.media = 'img';
    component.ctaText = 'Link text';
    component.ctaAnalytics = 'One';
    fixture.detectChanges();
    element = fixture.nativeElement.querySelector('div');
    const el = element.querySelector('div.sprk-c-Card__content a');
    expect(el.getAttribute('data-analytics')).toEqual('One');
  });

  it('should set the data-analytics attribute given a value in the ctaAnalytics Input on the teaser heading card', () => {
    component.cardType = 'teaserHeading';
    component.ctaText = 'Link text';
    component.ctaAnalytics = 'Test';
    fixture.detectChanges();
    element = fixture.nativeElement.querySelector('div');
    const el = element.querySelector('div.sprk-c-Card__content a');
    expect(el.getAttribute('data-analytics')).toEqual('Test');
  });

  it('should set the data-analytics attribute on the img given a value in the imgLinkAnalytics Input on the teaser heading card', () => {
    component.cardType = 'teaserHeading';
    component.media = 'img';
    component.ctaText = 'Link text';
    component.imgLinkAnalytics = 'Test';
    fixture.detectChanges();
    element = fixture.nativeElement.querySelector('div');
    const el = element.querySelector('a');
    expect(el.getAttribute('data-analytics')).toEqual('Test');
  });

  it('should set the data-analytics attribute on the img given a value in the imgLinkAnalytics Input on the teaser card', () => {
    component.cardType = 'teaser';
    component.ctaText = 'Link text';
    component.media = 'img';
    component.imgLinkAnalytics = 'Test';
    fixture.detectChanges();
    element = fixture.nativeElement.querySelector('div');
    const el = element.querySelector('a');
    expect(el.getAttribute('data-analytics')).toEqual('Test');
  });

  it('should add data-id when idString has a value', () => {
    const testString = 'element-id';
    component.cardType = 'base';
    component.idString = testString;
    fixture.detectChanges();
    element = fixture.nativeElement.querySelector('div');
    expect(element.getAttribute('data-id')).toEqual(testString);
  });

  it('should not add data-id when idString has no value', () => {
    component.idString = null;
    fixture.detectChanges();
    element = fixture.nativeElement.querySelector('div');
    expect(element.getAttribute('data-id')).toBeNull();
  });
});
