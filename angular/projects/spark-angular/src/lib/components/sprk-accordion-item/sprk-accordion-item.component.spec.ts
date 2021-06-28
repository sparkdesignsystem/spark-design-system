import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
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
  let accordionContentsElement: HTMLElement;
  let accordionSvgElement: HTMLElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [BrowserAnimationsModule],
        declarations: [
          SprkAccordionItemComponent,
          SprkIconComponent,
          SprkLinkDirective,
        ],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SprkAccordionItemComponent);
    component = fixture.componentInstance;
    accordionItemElement = fixture.nativeElement.querySelector('li');
    accordionItemTriggerElement = fixture.nativeElement.querySelector('button');
    accordionHeadingElement = fixture.nativeElement.querySelector('span');
    accordionDetailsElement = fixture.nativeElement.querySelector('div');
    accordionContentsElement = accordionDetailsElement.querySelector('div');
    accordionSvgElement = fixture.nativeElement.querySelector('svg');
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add classes if additionalClasses has a value', () => {
    component.additionalClasses = 'sprk-u-man';
    fixture.detectChanges();
    expect(accordionItemElement.classList.toString()).toContain(
      'sprk-c-Accordion__item sprk-u-man',
    );
  });

  // TODO - Remove as part of Issue 3597
  it('should add classes if additionalHeadingClasses has a value', () => {
    component.additionalHeadingClasses = 'sprk-u-man';
    fixture.detectChanges();
    expect(accordionHeadingElement.classList.contains('sprk-u-man')).toEqual(
      true,
    );
  });

  it('should add classes if headingAdditionalClasses has a value', () => {
    component.headingAdditionalClasses = 'sprk-u-man';
    fixture.detectChanges();
    expect(accordionHeadingElement.classList.contains('sprk-u-man')).toEqual(
      true,
    );
  });

  // TODO - Remove as part of Issue 3597
  it('should prefer headingAdditionalClasses over additionalHeadingClasses', () => {
    component.headingAdditionalClasses = 'should-add';
    component.additionalHeadingClasses = 'should-not-add';
    fixture.detectChanges();
    expect(accordionHeadingElement.classList.contains('should-add')).toEqual(
      true,
    );
    expect(
      accordionHeadingElement.classList.contains('should-not-add'),
    ).toEqual(false);
  });

  it('should add an analytics data attribute if analyticsString has a value', () => {
    component.analyticsString = 'Link Action';
    fixture.detectChanges();
    expect(accordionItemTriggerElement.getAttribute('data-analytics')).toEqual(
      'Link Action',
    );
  });

  it('should be closed if isOpen is false', () => {
    component.isOpen = false;
    fixture.detectChanges();
    expect(
      accordionItemElement.classList.contains('sprk-c-Accordion__item--open'),
    ).toEqual(false);
  });

  it('should be open if isOpen is true', () => {
    component.isOpen = true;
    fixture.detectChanges();
    expect(
      accordionItemElement.classList.contains('sprk-c-Accordion__item--open'),
    ).toEqual(true);
  });

  it('clicking should toggle isOpen', () => {
    accordionItemTriggerElement.click();
    expect(component.isOpen).toEqual(true);
    accordionItemTriggerElement.click();
    expect(component.isOpen).toEqual(false);
  });

  // TODO - Remove as part of Issue 3597
  it('should set the heading to title', () => {
    component.title = 'This is a title';
    fixture.detectChanges();
    expect(accordionHeadingElement.textContent.trim()).toEqual(
      'This is a title',
    );
  });

  it('should set the heading to heading', () => {
    component.heading = 'This is a title';
    fixture.detectChanges();
    expect(accordionHeadingElement.textContent.trim()).toEqual(
      'This is a title',
    );
  });

  // TODO - Remove as part of Issue 3597
  it('should prefer heading over title', () => {
    component.heading = 'heading';
    component.title = 'title';
    fixture.detectChanges();
    expect(accordionHeadingElement.textContent.trim()).toEqual('heading');
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
      testString,
    );
  });

  it('should not add data-id when idString has no value', () => {
    component.idString = null;
    fixture.detectChanges();
    expect(accordionItemElement.getAttribute('data-id')).toBeNull();
  });

  // TODO - Remove as part of Issue 3597
  it('should set the active class if isActive is true', () => {
    component.isActive = true;
    fixture.detectChanges();
    expect(
      accordionItemElement.classList.contains('sprk-c-Accordion__item--active'),
    ).toEqual(true);
  });

  it('should render with a button element', () => {
    fixture.detectChanges();
    expect(accordionItemTriggerElement).toBeTruthy();
  });

  it('should have the aria-controls attribute', () => {
    fixture.detectChanges();

    const ariaControls = accordionItemTriggerElement.getAttribute(
      'aria-controls',
    );

    expect(ariaControls).toBeTruthy();

    const contentId = fixture.nativeElement
      .querySelector('.sprk-c-Accordion__content')
      .getAttribute('id');
    expect(contentId).toBeTruthy();

    expect(ariaControls).toEqual(contentId);
  });

  it('should have the aria-expanded attribute', () => {
    component.isOpen = false;
    fixture.detectChanges();

    expect(accordionItemTriggerElement.getAttribute('aria-expanded')).toEqual(
      'false',
    );

    accordionItemTriggerElement.click();
    fixture.detectChanges();

    expect(accordionItemTriggerElement.getAttribute('aria-expanded')).toEqual(
      'true',
    );

    accordionItemTriggerElement.click();
    fixture.detectChanges();

    expect(accordionItemTriggerElement.getAttribute('aria-expanded')).toEqual(
      'false',
    );
  });

  it('should render with correct default heading classes', () => {
    fixture.detectChanges();
    expect(
      accordionHeadingElement.classList.contains('sprk-c-Accordion__heading'),
    ).toEqual(true);
    expect(
      accordionHeadingElement.classList.contains('sprk-b-TypeDisplaySeven'),
    ).toEqual(true);
  });

  it('should correctly add default classes to the svg', () => {
    fixture.detectChanges();

    expect(accordionSvgElement.classList.length).toBe(4);
    expect(accordionSvgElement.classList.toString()).toContain('sprk-c-Icon');
    expect(accordionSvgElement.classList.toString()).toContain(
      'sprk-c-Accordion__icon',
    );
    expect(accordionSvgElement.classList.toString()).toContain(
      'sprk-c-Icon--xl',
    );
    expect(accordionSvgElement.classList.toString()).toContain(
      'sprk-c-Icon--toggle',
    );
  });

  it('should correctly add additional classes to the svg', () => {
    const testString = 'test';
    component.iconAdditionalClasses = testString;
    fixture.detectChanges();
    expect(accordionSvgElement.classList.toString()).toContain(testString);
  });

  it('should correctly add default classes to the content container', () => {
    fixture.detectChanges();

    expect(accordionContentsElement.classList.toString()).toContain(
      'sprk-c-Accordion__content',
    );
  });

  it('should correctly add additional classes to the content container', () => {
    const testString = 'test';
    component.contentAdditionalClasses = testString;
    fixture.detectChanges();
    expect(accordionContentsElement.classList.toString()).toContain(testString);
  });

  // TODO - Remove as part of Issue 3597
  it('should add closed icon from iconTypeClosed', () => {
    component.isOpen = false;
    component.iconTypeClosed = 'exclamation';
    fixture.detectChanges();
    expect(
      accordionSvgElement.querySelector('use').getAttribute('xlink:href'),
    ).toEqual('#exclamation');
  });

  it('should add closed icon from iconNameClosed', () => {
    component.isOpen = false;
    component.iconNameClosed = 'exclamation';
    fixture.detectChanges();
    expect(
      accordionSvgElement.querySelector('use').getAttribute('xlink:href'),
    ).toEqual('#exclamation');
  });

  // TODO - Remove as part of Issue 3597
  it('should prefer iconNameClosed over iconTypeClosed', () => {
    component.isOpen = false;
    component.iconTypeClosed = 'message';
    component.iconNameClosed = 'exclamation';
    fixture.detectChanges();
    expect(
      accordionSvgElement.querySelector('use').getAttribute('xlink:href'),
    ).toEqual('#exclamation');
  });

  // TODO - Remove as part of Issue 3597
  it('should add open icon from iconTypeOpen', () => {
    component.isOpen = true;
    component.iconTypeOpen = 'exclamation';
    fixture.detectChanges();
    expect(
      accordionSvgElement.querySelector('use').getAttribute('xlink:href'),
    ).toEqual('#exclamation');
  });

  it('should add open icon from iconNameOpen', () => {
    component.isOpen = true;
    component.iconNameOpen = 'exclamation';
    fixture.detectChanges();
    expect(
      accordionSvgElement.querySelector('use').getAttribute('xlink:href'),
    ).toEqual('#exclamation');
  });

  // TODO - Remove as part of Issue 3597
  it('should prefer iconNameOpen over iconTypeOpen', () => {
    component.isOpen = true;
    component.iconTypeOpen = 'message';
    component.iconNameOpen = 'exclamation';
    fixture.detectChanges();
    expect(
      accordionSvgElement.querySelector('use').getAttribute('xlink:href'),
    ).toEqual('#exclamation');
  });

  it('should emit open and closed events when toggled', (done) => {
    let openEventEmitted = false;
    let closedEventEmitted = false;

    component.openedEvent.subscribe((g) => {
      openEventEmitted = true;
      done();
    });
    component.closedEvent.subscribe((g) => {
      closedEventEmitted = true;
      done();
    });

    accordionItemTriggerElement.click();
    expect(openEventEmitted).toEqual(true);
    expect(closedEventEmitted).toEqual(false);

    accordionItemTriggerElement.click();
    expect(closedEventEmitted).toEqual(true);
  });

  it('should correctly add leading icon', () => {
    component.leadingIcon = 'exclamation';
    fixture.detectChanges();
    expect(
      fixture.nativeElement
        .querySelector('svg')
        .querySelector('use')
        .getAttribute('xlink:href'),
    ).toEqual('#exclamation');
  });

  it('should correctly add additional classes to the leading icon', () => {
    const testString = 'test';
    component.leadingIcon = 'exclamation';
    component.leadingIconAdditionalClasses = testString;
    fixture.detectChanges();
    expect(
      fixture.nativeElement.querySelector('svg').classList.toString(),
    ).toContain(testString);
  });
});
