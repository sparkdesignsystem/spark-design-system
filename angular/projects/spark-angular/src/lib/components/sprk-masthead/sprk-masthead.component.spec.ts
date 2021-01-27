import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SprkIconComponent } from '../sprk-icon/sprk-icon.component';
import { SprkLinkComponent } from '../sprk-link/sprk-link.component';
import { SprkMastheadAccordionComponent } from './sprk-masthead-accordion/sprk-masthead-accordion.component';
import { SprkMastheadAccordionItemComponent } from './sprk-masthead-accordion-item/sprk-masthead-accordion-item.component';
import { SprkMastheadComponent } from './sprk-masthead.component';
import { SprkDropdownComponent } from '../sprk-dropdown/sprk-dropdown.component';
describe('SprkMastheadComponent', () => {
  let component: SprkMastheadComponent;
  let fixture: ComponentFixture<SprkMastheadComponent>;
  let mastheadElement: HTMLElement;
  let hamburgerIcon: HTMLElement;
  let narrowNavElement: HTMLElement;
  let secondaryNavElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        SprkMastheadComponent,
        SprkIconComponent,
        SprkLinkComponent,
        SprkDropdownComponent,
        SprkMastheadAccordionComponent,
        SprkMastheadAccordionItemComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprkMastheadComponent);
    component = fixture.componentInstance;
    mastheadElement = fixture.nativeElement.querySelector('header');
    hamburgerIcon = mastheadElement.querySelector('.sprk-c-Menu');
  });

  afterEach(() => {
    component.scrollDirection = 'up';
    component.isHidden = false;
    component.isNarrowLayout = false;
    component.isNarrowOnResize = false;
    window.document.body.style.minHeight = '800px';
    window.document.body.style.minWidth = '1024px';
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add classes when additionalClasses has a value', () => {
    component.additionalClasses = 'sprk-u-man';
    fixture.detectChanges();
    expect(mastheadElement.classList.toString()).toEqual(
      'sprk-c-Masthead sprk-o-Stack sprk-u-man',
    );
  });

  it('should set the logo link and text to provided values', () => {
    component.logoHref = '/alert';
    component.logoLinkScreenReaderText = 'Go to the alerts page.';
    fixture.detectChanges();
    const logoElement: HTMLElement = mastheadElement.querySelector(
      '.sprk-c-Masthead__branding a',
    );
    expect(logoElement.getAttribute('href')).toEqual('/alert');
    expect(logoElement.textContent.trim()).toEqual('Go to the alerts page.');
  });

  it('should add the aria-expanded attribute and show the narrow nav when the icon is clicked', () => {
    expect(hamburgerIcon.getAttribute('aria-expanded')).toEqual(null);
    expect(component.isNarrowNavOpen).toEqual(false);
    hamburgerIcon.click();
    fixture.detectChanges();
    expect(hamburgerIcon.getAttribute('aria-expanded')).toEqual('true');
    expect(component.isNarrowNavOpen).toEqual(true);
  });

  it('should add a class to body and show the narrow nav when the icon is clicked', () => {
    expect(component.isNarrowNavOpen).toEqual(false);
    hamburgerIcon.click();
    fixture.detectChanges();
    expect(document.body.classList.contains('sprk-u-Overflow--hidden')).toEqual(
      true,
    );
    expect(component.isNarrowNavOpen).toEqual(true);
    hamburgerIcon.click();
    fixture.detectChanges();
    expect(document.body.classList.contains('sprk-u-Overflow--hidden')).toEqual(
      false,
    );
    expect(component.isNarrowNavOpen).toEqual(false);
  });

  it('should close the narrow nav on orientationchange', () => {
    component.isNarrowNavOpen = true;
    fixture.detectChanges();
    window.dispatchEvent(new Event('orientationchange'));
    fixture.detectChanges();
    expect(component.isNarrowNavOpen).toEqual(false);
  });

  it('should add data-id when idString has a value', () => {
    const testString = 'element-id';
    component.idString = testString;
    fixture.detectChanges();
    expect(mastheadElement.getAttribute('data-id')).toEqual(testString);
  });

  it('should not add data-id when idString has no value', () => {
    component.idString = null;
    fixture.detectChanges();
    expect(mastheadElement.getAttribute('data-id')).toBeNull();
  });

  it('should add classes if additionalNarrowNavClasses has a value', () => {
    component.additionalNarrowNavClasses = 'sprk-u-man';
    component.isNarrowNavOpen = true;
    fixture.detectChanges();
    narrowNavElement = fixture.nativeElement.querySelector(
      '.sprk-c-Masthead__narrow-nav .sprk-c-MastheadAccordion',
    );
    expect(narrowNavElement.classList.contains('sprk-u-man')).toEqual(true);
  });

  it('should add classes if additionalBigNavClasses has a value', () => {
    component.bigNavLinks = [{ text: 'Item 1', href: '#nogo' }];
    component.additionalBigNavClasses = 'sprk-u-man';
    fixture.detectChanges();
    secondaryNavElement = fixture.nativeElement.querySelector(
      '.sprk-c-Masthead__big-nav-items',
    );
    expect(secondaryNavElement.classList.contains('sprk-u-man')).toEqual(true);
  });

  it('should not add classes if additionalBigNavClasses has no value', () => {
    component.bigNavLinks = [{ text: 'Item 1', href: '#nogo' }];
    component.additionalBigNavClasses = '';
    fixture.detectChanges();
    secondaryNavElement = fixture.nativeElement.querySelector(
      '.sprk-c-Masthead__big-nav-items',
    );
    expect(secondaryNavElement.classList.toString()).toEqual(
      'sprk-c-Masthead__big-nav-items sprk-o-Stack sprk-o-Stack--misc-a sprk-o-Stack--center-row sprk-o-Stack--split@xxs sprk-b-List sprk-b-List--bare',
    );
  });

  it('should add the scroll class when state isScrolled is true', () => {
    component.isScrolled = true;
    fixture.detectChanges();
    expect(
      mastheadElement.classList.contains('sprk-c-Masthead--scroll'),
    ).toEqual(true);
  });

  it('should add the hidden class when state isHidden is true', () => {
    component.isHidden = true;
    fixture.detectChanges();
    expect(
      mastheadElement.classList.contains('sprk-c-Masthead--hidden'),
    ).toEqual(true);
  });

  it('should update state isHidden to true when scrollDirection is equal to down', () => {
    // Scroll down the page
    const scrollEvent = document.createEvent('CustomEvent');
    scrollEvent.initCustomEvent('scroll', false, false, null);
    Object.defineProperty(window, 'scrollY', { value: 456, writable: true });
    fixture.detectChanges();
    window.dispatchEvent(scrollEvent);
    fixture.detectChanges();
    expect(component.isHidden).toBe(true);
    expect(component.scrollDirection).toBe('down');
  });

  it('should show masthead when going from small to large screen', () => {
    component.isNarrowOnResize = false;
    component.isNarrowLayout = true;
    fixture.detectChanges();
    component.throttledUpdateLayoutState();

    expect(component.isHidden).toBe(false);
    expect(component.isNarrowLayout).toBe(false);
  });

  it('should call throttledUpdateLayoutState to be called on resize', () => {
    const spyOnResize = jest.spyOn(component, 'throttledUpdateLayoutState');
    const resizeEvent = document.createEvent('CustomEvent');
    resizeEvent.initCustomEvent('resize', false, false, null);
    window.dispatchEvent(resizeEvent);
    expect(spyOnResize).toHaveBeenCalled();
  });

  it('should add aria-controls and id to narrowNav if narrowNavId is not passed', () => {
    component.isNarrowNavOpen = true;
    fixture.detectChanges();
    narrowNavElement = fixture.nativeElement.querySelector(
      '.sprk-c-Masthead__narrow-nav',
    );
    expect(narrowNavElement.getAttribute('id')).toMatch(
      /sprk_masthead_narrow_nav_\d/,
    );
    expect(hamburgerIcon.getAttribute('aria-controls')).toEqual(
      narrowNavElement.getAttribute('id'),
    );
  });

  it('should add correct aria-controls and id to narrowNav if narrowNavId is passed', () => {
    component.isNarrowNavOpen = true;
    component.narrowNavId = 'test_controls';
    fixture.detectChanges();
    narrowNavElement = fixture.nativeElement.querySelector(
      '.sprk-c-Masthead__narrow-nav',
    );
    expect(narrowNavElement.getAttribute('id')).toEqual('test_controls');
    expect(hamburgerIcon.getAttribute('aria-controls')).toEqual(
      narrowNavElement.getAttribute('id'),
    );
  });
});
