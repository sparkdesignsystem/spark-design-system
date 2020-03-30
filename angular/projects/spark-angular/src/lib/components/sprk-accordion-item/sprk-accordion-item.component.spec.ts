import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SprkIconComponent } from '../sprk-icon/sprk-icon.component';
import { SprkLinkDirective } from '../../directives/sprk-link/sprk-link.directive';
import { SprkAccordionItemComponent } from './sprk-accordion-item.component';

describe('SprkAccordionItemComponent', () => {
  let component: SprkAccordionItemComponent;
  let fixture: ComponentFixture<SprkAccordionItemComponent>;
  let accordionItemElement: HTMLElement;
  let accordionItemTriggerElement: HTMLElement;
  let accordionHeadingElement: HTMLElement;
  let accordionDetailsElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
      declarations: [
        SprkAccordionItemComponent,
        SprkIconComponent,
        SprkLinkDirective
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprkAccordionItemComponent);
    component = fixture.componentInstance;
    accordionItemElement = fixture.nativeElement.querySelector('li');
    accordionItemTriggerElement = fixture.nativeElement.querySelector('button');
    accordionHeadingElement = fixture.nativeElement.querySelector('span');
    accordionDetailsElement = fixture.nativeElement.querySelector('div');
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add classes if additionalClasses has a value', () => {
    component.additionalClasses = 'sprk-u-man';
    fixture.detectChanges();
    expect(accordionItemElement.classList.toString()).toContain(
      'sprk-c-Accordion__item sprk-u-Overflow--hidden sprk-u-man'
    );
  });

  it('should add classes if additionalHeadingClasses has a value', () => {
    component.additionalHeadingClasses = 'sprk-u-man';
    fixture.detectChanges();
    expect(accordionHeadingElement.classList.contains('sprk-u-man')).toEqual(
      true
    );
  });

  it('should add an analytics data attribute if analyticsString has a value', () => {
    component.analyticsString = 'Link Action';
    fixture.detectChanges();
    expect(accordionItemTriggerElement.getAttribute('data-analytics')).toEqual(
      'Link Action'
    );
  });

  it('should be closed if isOpen is false', () => {
    component.isOpen = false;
    fixture.detectChanges();
    expect(
      accordionItemElement.classList.contains('sprk-c-Accordion__item--open')
    ).toEqual(false);
  });

  it('should be open if isOpen is true', () => {
    component.isOpen = true;
    fixture.detectChanges();
    expect(
      accordionItemElement.classList.contains('sprk-c-Accordion__item--open')
    ).toEqual(true);
  });

  it('clicking should toggle isOpen', () => {
    accordionItemTriggerElement.click();
    expect(component.isOpen).toEqual(true);
    accordionItemTriggerElement.click();
    expect(component.isOpen).toEqual(false);
  });

  it('should set the heading to title', () => {
    component.title = 'This is a title';
    fixture.detectChanges();
    expect(accordionHeadingElement.textContent.trim()).toEqual(
      'This is a title'
    );
  });

  it('details should not be present if isOpen is false', () => {
    component.isOpen = false;
    fixture.detectChanges();
    expect(accordionDetailsElement.style.visibility).toEqual('hidden');
  });

  it('should add data-id when idString has a value', () => {
    const testString = 'element-id';
    component.idString = testString;
    fixture.detectChanges();
    expect(accordionItemTriggerElement.getAttribute('data-id')).toEqual(
      testString
    );
  });

  it('should not add data-id when idString has no value', () => {
    component.idString = null;
    fixture.detectChanges();
    expect(accordionItemElement.getAttribute('data-id')).toBeNull();
  });

  it('should set the active class if isActive is true', () => {
    component.isActive = true;
    fixture.detectChanges();
    expect(
      accordionItemElement.classList.contains('sprk-c-Accordion__item--active')
    ).toEqual(true);
  });

  it('should render with a button element', () => {
    fixture.detectChanges();
    expect(accordionItemTriggerElement).toBeTruthy();
  });

  it('should have the aria-controls attribute', () => {
    fixture.detectChanges();

    const ariaControls = accordionItemTriggerElement.getAttribute('aria-controls');

    expect(ariaControls).toBeTruthy();

    const contentId = fixture.nativeElement.querySelector('.sprk-c-Accordion__content').getAttribute('id');
    expect(contentId).toBeTruthy();

    expect(ariaControls).toEqual(contentId);
  });

  it('should have the aria-expanded attribute', () => {
    component.isOpen = false;
    fixture.detectChanges();

    expect(accordionItemTriggerElement.getAttribute('aria-expanded')).toEqual('false');

    accordionItemTriggerElement.click();
    fixture.detectChanges();

    expect(accordionItemTriggerElement.getAttribute('aria-expanded')).toEqual('true');

    accordionItemTriggerElement.click();
    fixture.detectChanges();

    expect(accordionItemTriggerElement.getAttribute('aria-expanded')).toEqual('false');
  });
});
