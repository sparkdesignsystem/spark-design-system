import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SparkIconComponent } from '../sprk-icon/sprk-icon.component';
import { SparkAccordionItemComponent } from './sprk-accordion-item.component';

describe('SparkAccordionItemComponent', () => {
  let component: SparkAccordionItemComponent;
  let fixture: ComponentFixture<SparkAccordionItemComponent>;
  let accordionItemElement: HTMLElement;
  let accordionItemLinkElement: HTMLElement;
  let accordionHeadingElement: HTMLElement;
  let accordionDetailsElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
      declarations: [SparkAccordionItemComponent, SparkIconComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkAccordionItemComponent);
    component = fixture.componentInstance;
    accordionItemElement = fixture.nativeElement.querySelector('li');
    accordionItemLinkElement = fixture.nativeElement.querySelector('a');
    accordionHeadingElement = fixture.nativeElement.querySelector(
      '.sprk-c-Accordion__heading'
    );
    accordionDetailsElement = fixture.nativeElement.querySelector('div');
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add classes if additionalClasses has a value', () => {
    component.additionalClasses = 'sprk-u-man';
    fixture.detectChanges();
    expect(accordionItemElement.classList.toString()).toContain(
      'sprk-c-Accordion__item sprk-u-man'
    );
  });

  it('should add an analytics data attribute if analyticsString has a value', () => {
    component.analyticsString = 'Link Action';
    fixture.detectChanges();
    expect(accordionItemLinkElement.getAttribute('data-analytics')).toEqual(
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
    accordionItemLinkElement.click();
    expect(component.isOpen).toEqual(true);
    accordionItemLinkElement.click();
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
    expect(accordionDetailsElement.style.display).toEqual('none');
  });

  it('should add data-id when idString has a value', () => {
    const testString = 'element-id';
    component.idString = testString;
    fixture.detectChanges();
    expect(accordionItemLinkElement.getAttribute('data-id')).toEqual(
      testString
    );
  });

  it('should not add data-id when idString has no value', () => {
    component.idString = null;
    fixture.detectChanges();
    expect(accordionItemElement.getAttribute('data-id')).toBeNull();
  });
});
