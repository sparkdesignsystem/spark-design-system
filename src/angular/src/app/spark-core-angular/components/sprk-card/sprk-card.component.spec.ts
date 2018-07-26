import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SparkCardComponent } from './sprk-card.component';
import { SparkIconComponent } from '../sprk-icon/sprk-icon.component';

describe('SparkCardComponent', () => {
  let component: SparkCardComponent;
  let fixture: ComponentFixture<SparkCardComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [SparkCardComponent, SparkIconComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkCardComponent);
    component = fixture.componentInstance;
  })

  it('should create itself', () => {
    fixture.detectChanges();
    element = fixture.nativeElement.querySelector('div');
    expect(element).toBeTruthy();
  });

  it('getClassesCard should match what gets set on the card', () => {
    fixture.detectChanges();
    element = fixture.nativeElement.querySelector('div');
    expect(element.classList.toString()).toEqual(component.getClassesCard());
  });

  it('should show routerLink href on img link if set', () => {
    component.cardType = 'teaser';
    component.media = 'img';
    component.imgHref = "/sparkdesignsystem.com";
    fixture.detectChanges();
    element = fixture.nativeElement.querySelector('div');
    let el = element.querySelector('a');
    expect(el.getAttribute('href')).toEqual('/sparkdesignsystem.com');
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
    let el = element.querySelector('a img');
    expect(el).toBeTruthy();
  });

  it('should add the correct classes if cardType has no value, but additionalClasses does', () => {
    component.cardType = '';
    component.body = 'Some body copy.';
    component.title = 'Title!';
    component.additionalClasses = 'sprk-u-pam sprk-u-man';
    fixture.detectChanges();
    expect(component.getClassesCard()).toEqual('sprk-c-Card sprk-o-Stack sprk-u-pam sprk-u-man');
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
    expect(component.getClassesCard()).toEqual('sprk-c-Card sprk-o-Stack sprk-u-pam sprk-u-man');
  });

  it('should set the data-analytics attribute given a value in the ctaAnalytics Input on the teaser card', () => {
    component.cardType = 'teaser';
    component.media = 'img';
    component.ctaText = 'Link text';
    component.ctaAnalytics = 'One';
    fixture.detectChanges();
    element = fixture.nativeElement.querySelector('div');
    let el = element.querySelector('div.sprk-c-Card__content a');
    expect(el.getAttribute('data-analytics')).toEqual('One');
  });

  it('should set the data-analytics attribute given a value in the ctaAnalytics Input on the teaser heading card', () => {
    component.cardType = 'teaserHeading';
    component.ctaText = 'Link text';
    component.ctaAnalytics = 'Test';
    fixture.detectChanges();
    element = fixture.nativeElement.querySelector('div');
    let el = element.querySelector('div.sprk-c-Card__content a');
    expect(el.getAttribute('data-analytics')).toEqual('Test');
  });

  it('should set the data-analytics attribute on the img given a value in the imgLinkAnalytics Input on the teaser heading card', () => {
    component.cardType = 'teaserHeading';
    component.media = 'img';
    component.ctaText = 'Link text';
    component.imgLinkAnalytics = 'Test';
    fixture.detectChanges();
    element = fixture.nativeElement.querySelector('div');
    let el = element.querySelector('a');
    expect(el.getAttribute('data-analytics')).toEqual('Test');
  });

  it('should set the data-analytics attribute on the img given a value in the imgLinkAnalytics Input on the teaser card', () => {
    component.cardType = 'teaser';
    component.ctaText = 'Link text';
    component.media = 'img';
    component.imgLinkAnalytics = 'Test';
    fixture.detectChanges();
    element = fixture.nativeElement.querySelector('div');
    let el = element.querySelector('a');
    expect(el.getAttribute('data-analytics')).toEqual('Test');
  });
});
