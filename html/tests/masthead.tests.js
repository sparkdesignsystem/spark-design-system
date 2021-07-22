/* global window beforeEach afterEach document describe it sinon */
import {
  masthead,
  bindUIEvents,
  focusTrap,
  toggleMobileNav,
  hideMobileNavs,
  addClassOnScroll,
  toggleMenu,
  toggleScrollEvent,
} from '../components/masthead';
import { dropdowns } from '../components/dropdown';

const mockDOMSliderStub = {};

jest.mock('dom-slider', () => mockDOMSliderStub);

describe('masthead init', () => {
  let main;
  let nav;
  let mastheadDiv;
  let iconContainer;
  let iconContainerDiv;

  beforeEach(() => {
    main = document.createElement('div');
    main.setAttribute('data-sprk-main', null);

    // Create the main Masthead element
    mastheadDiv = document.createElement('div');
    mastheadDiv.classList.add('sprk-c-Masthead');
    mastheadDiv.setAttribute('data-sprk-masthead', null);

    // Create narrow nav
    nav = document.createElement('nav');
    nav.classList.add('sprk-c-Masthead__nav-collapsible--is-collapsed');
    nav.classList.add('sprk-c-Masthead__nav-collapsible');
    nav.setAttribute('data-sprk-mobile-nav', 'mobileNav');

    // Add nav to masthead
    mastheadDiv.appendChild(nav);

    // Create a menu button container for icon
    iconContainer = document.createElement('button');
    iconContainer.setAttribute('data-sprk-mobile-nav-trigger', 'mobileNav');

    // Create a container div for icon
    iconContainerDiv = document.createElement('div');
    iconContainerDiv.classList.add('sprk-c-Masthead__menu');

    // Add iconContainer to iconContainerDiv
    iconContainerDiv.appendChild(iconContainer);

    // Add iconContainerDiv to mastheadDiv
    mastheadDiv.appendChild(iconContainerDiv);
    main.appendChild(mastheadDiv);
    document.body.appendChild(main);
  });

  afterEach(() => {
    if (document.querySelectorAll.restore) {
      document.querySelectorAll.restore();
    }

    document.body.innerHTML = '';
  });

  it('should call getElements once with the correct selector', () => {
    sinon.spy(document, 'querySelectorAll');
    masthead();
    expect(document.querySelectorAll.getCall(0).args[0]).toBe(
      '[data-sprk-mobile-nav-trigger]',
    );
  });

  it('should init aria-expanded as closed correctly', () => {
    expect(iconContainer.getAttribute('aria-expanded')).toBe(null);

    masthead();

    expect(iconContainer.hasAttribute('aria-expanded')).toBeTruthy();
    expect(iconContainer.getAttribute('aria-expanded')).toEqual('false');
  });

  it('should init aria-expanded as open correctly', () => {
    expect(iconContainer.getAttribute('aria-expanded')).toBe(null);
    nav.classList.remove('sprk-c-Masthead__nav-collapsible--is-collapsed');

    masthead();

    expect(iconContainer.hasAttribute('aria-expanded')).toBeTruthy();
    expect(iconContainer.getAttribute('aria-expanded')).toEqual('true');
  });

  it(`should generate a content id and add it to aria-controls
      when both values are missing`, () => {
    expect(nav.getAttribute('id')).toBe(null);
    expect(iconContainer.getAttribute('aria-controls')).toBe(null);

    masthead();

    expect(nav.hasAttribute('id')).toBeTruthy();
    expect(iconContainer.hasAttribute('aria-controls')).toBeTruthy();
    expect(nav.getAttribute('id')).toEqual(
      iconContainer.getAttribute('aria-controls'),
    );
  });

  it(`should NOT override aria-controls if the value
      doesn't match the id on the content`, () => {
    nav.setAttribute('id', 'foo');
    iconContainer.setAttribute('aria-controls', 'bar');

    masthead();

    // it should NOT make them match
    expect(nav.getAttribute('id')).toEqual('foo');
    expect(iconContainer.getAttribute('aria-controls')).toEqual('bar');
  });

  it(`should log a console warning if aria-controls has a
      value but content ID is blank`, () => {
    nav.removeAttribute('id');
    iconContainer.setAttribute('aria-controls', 'bar');

    masthead();

    expect(nav.getAttribute('id')).toEqual(null);
    expect(iconContainer.getAttribute('aria-controls')).toEqual('bar');
  });

  it(`should use the provided content id for aria-controls when
      aria-controls is missing and the id is available`, () => {
    nav.setAttribute('id', 'foo');
    expect(iconContainer.getAttribute('aria-conrols')).toBe(null);

    masthead();

    expect(iconContainer.getAttribute('aria-controls')).toEqual('foo');
  });

  it('should not change content id or aria-controls if both are valid', () => {
    nav.setAttribute('id', 'foo');
    iconContainer.setAttribute('aria-controls', 'foo');

    expect(nav.getAttribute('id')).toEqual('foo');
    expect(iconContainer.getAttribute('aria-controls')).toEqual('foo');

    masthead();

    expect(nav.getAttribute('id')).toEqual('foo');
    expect(iconContainer.getAttribute('aria-controls')).toEqual('foo');
  });
});

describe('masthead UI Events tests', () => {
  let main;
  let nav;
  let navItem;
  let icon;
  let mastheadDiv;
  let iconContainer;
  let event;
  let maskDiv;
  let selector;
  let selectorWide;
  let selectorDropdown;
  let selectorDropdownWide;
  let selectorTriggerInDropdown;
  let selectorTriggerInDropdownWide;
  let choice1;
  let iconContainerDiv;

  beforeEach(() => {
    main = document.createElement('div');
    main.setAttribute('data-sprk-main', null);

    // Create the main Masthead element
    mastheadDiv = document.createElement('div');
    mastheadDiv.classList.add('sprk-c-Masthead');
    mastheadDiv.setAttribute('data-sprk-masthead', null);

    // Create the narrow selector
    selector = document.createElement('a');
    selector.setAttribute('data-sprk-dropdown-trigger', 'dropdown-selector');

    // Create the narrow selector
    selectorWide = document.createElement('a');
    selectorWide.setAttribute(
      'data-sprk-dropdown-trigger',
      'dropdown-selector-wide',
    );

    // Create the narrow selector's dropdown
    selectorDropdown = document.createElement('div');
    selectorDropdown.setAttribute('data-sprk-dropdown', 'dropdown-selector');
    selectorDropdown.classList.add('sprk-c-Dropdown');

    // Create the narrow selector's dropdown trigger element inside the dropdown
    selectorTriggerInDropdown = document.createElement('a');
    selectorTriggerInDropdown.setAttribute(
      'data-sprk-selector-dropdown-trigger',
      'dropdown-selector',
    );

    // Create a selector trigger for wide
    selectorDropdownWide = document.createElement('div');
    selectorDropdownWide.setAttribute(
      'data-sprk-dropdown',
      'dropdown-selector-wide',
    );
    selectorDropdownWide.classList.add('sprk-c-Dropdown');

    // Create the narrow selector's dropdown trigger element inside the dropdown
    selectorTriggerInDropdownWide = document.createElement('a');
    selectorTriggerInDropdownWide.setAttribute(
      'data-sprk-selector-dropdown-trigger',
      'dropdown-selector-wide',
    );

    // Create choice in dropdown
    choice1 = document.createElement('a');
    choice1.setAttribute('data-sprk-dropdown-choice', 'choice1');

    // Create div for the selector dropdown mask
    maskDiv = document.createElement('div');
    maskDiv.setAttribute('data-sprk-masthead-mask', null);

    // Create narrow nav
    nav = document.createElement('div');
    // Create nav item
    navItem = document.createElement('button');
    // Add navItem to nav
    nav.appendChild(navItem);
    nav.classList.add('sprk-c-Masthead__nav-collapsible--is-collapsed');
    nav.setAttribute('data-sprk-mobile-nav', 'mobileNav');

    // Add nav to masthead
    mastheadDiv.appendChild(nav);

    // Create an svg icon
    icon = document.createElement('svg');

    // Create a menu button container for icon
    iconContainer = document.createElement('button');
    iconContainer.setAttribute('data-sprk-mobile-nav-trigger', 'mobileNav');

    // Create a container div for icon
    iconContainerDiv = document.createElement('div');
    iconContainerDiv.classList.add('sprk-c-Masthead__menu');

    // Add mobile menu icon to container
    iconContainer.appendChild(icon);

    // Add iconContainer to iconContainerDiv
    iconContainerDiv.appendChild(iconContainer);

    // Add iconContainerDiv to mastheadDiv
    mastheadDiv.appendChild(iconContainerDiv);

    sinon.spy(nav, 'addEventListener');
    sinon.spy(iconContainer, 'addEventListener');

    mastheadDiv.appendChild(selector);
    mastheadDiv.appendChild(selectorWide);
    selectorDropdown.appendChild(selectorTriggerInDropdown);
    selectorDropdown.appendChild(choice1);
    mastheadDiv.appendChild(selectorDropdown);
    selectorDropdownWide.appendChild(selectorTriggerInDropdownWide);
    mastheadDiv.appendChild(selectorDropdownWide);
    mastheadDiv.appendChild(maskDiv);
    main.appendChild(mastheadDiv);
    document.body.appendChild(main);
    bindUIEvents();
    dropdowns();
  });

  afterEach(() => {
    document.body.innerHTML = '';
    nav.addEventListener.restore();
    iconContainer.addEventListener.restore();
  });

  it('should bind the change event', () => {
    expect(iconContainer.addEventListener.getCall(0).args[0]).toBe('click');
  });

  it('should open the nav when clicked', () => {
    event = new window.Event('click');
    iconContainer.dispatchEvent(event);
    expect(mastheadDiv.classList.contains('sprk-c-Masthead--open')).toBe(true);
    expect(nav.classList.contains('sprk-c-Masthead__nav-collapsible--is-collapsed')).toBe(false);
  });

  it(`should close the dropdown box when selector
      is clicked and its opened already`, () => {
    selectorDropdown.classList.add('sprk-c-Dropdown--open');
    selector.dispatchEvent(new window.Event('click'));
    expect(selectorDropdown.classList.contains('sprk-c-Dropdown--open')).toBe(
      false,
    );
  });

  it('should open the dropdown box when selector is clicked', () => {
    selector.dispatchEvent(new window.Event('click'));
    expect(selectorDropdown.classList.contains('sprk-c-Dropdown--open')).toBe(
      true,
    );
  });

  it('should open the wide dropdown box when selector is clicked', () => {
    selectorTriggerInDropdownWide.dispatchEvent(new window.Event('click'));
    expect(
      selectorDropdownWide.classList.contains('sprk-c-Dropdown--open'),
    ).toBe(true);
    selectorTriggerInDropdownWide.dispatchEvent(new window.Event('click'));
    expect(
      selectorDropdownWide.classList.contains('sprk-c-Dropdown--open'),
    ).toBe(false);
  });

  it(`should open the dropdown box when
      selector in dropdown is clicked`, () => {
    selectorTriggerInDropdown.dispatchEvent(new window.Event('click'));
    expect(selectorDropdown.classList.contains('sprk-c-Dropdown--open')).toBe(
      true,
    );
    selectorTriggerInDropdown.dispatchEvent(new window.Event('click'));
    expect(selectorDropdown.classList.contains('sprk-c-Dropdown--open')).toBe(
      false,
    );
  });

  it('should hide the masthead mask when esc is pressed', () => {
    selector.click();
    const escKeyEvent = new window.Event('keydown');
    escKeyEvent.keyCode = 27;
    document.dispatchEvent(escKeyEvent);
    expect(maskDiv.classList.contains('sprk-c-MastheadMask')).toBe(false);
  });

  it('should hide the masthead mask when a choice is pressed', () => {
    choice1.click();
    expect(maskDiv.classList.contains('sprk-c-MastheadMask')).toBe(false);
  });

  it('should add class to masthead when page scrolled', () => {
    event = new window.Event('scroll');
    window.dispatchEvent(event);
    addClassOnScroll(mastheadDiv, 200, 150, 'sprk-c-Masthead--scroll');
    expect(mastheadDiv.classList.contains('sprk-c-Masthead--scroll')).toBe(
      true,
    );
  });

  it('should add class to masthead when the scrollDirection is down', () => {
    event = new window.Event('scroll');
    window.dispatchEvent(event);
    toggleMenu('down');
    expect(mastheadDiv.classList.contains('sprk-c-Masthead--is-hidden')).toBe(
      true,
    );
  });

  it('should remove class to masthead when the scrollDirection is down', () => {
    event = new window.Event('scroll');
    window.dispatchEvent(event);
    toggleMenu('up');
    expect(mastheadDiv.classList.contains('sprk-c-Masthead--is-hidden')).toBe(
      false,
    );
  });

  it(`should add checkScrollDirection event
      listener if menu is visible`, () => {
    const attached = toggleScrollEvent(true);
    expect(attached).toBe(true);
  });

  it(`should not add checkScrollDirection event listener
      if menu is not visible`, () => {
    const attached = toggleScrollEvent(false);
    expect(attached).toBe(false);
  });

  it(`should checkScrollDirection on resize and
      return true if menu visible`, () => {
    event = new window.Event('resize');
    window.dispatchEvent(event);
    const newMenuVisibility = true;
    expect(toggleScrollEvent(newMenuVisibility)).toBe(true);
  });

  it(`should not close the dropdown if a key that
      is not esc is pressed`, () => {
    selector.click();
    const escKeyEvent = new window.Event('keydown');
    escKeyEvent.keyCode = 26;
    document.dispatchEvent(escKeyEvent);
    expect(selectorDropdown.classList.contains('sprk-c-Dropdown--open')).toBe(
      true,
    );
  });

  it(`should close the dropdown if an element
      outside the dropdown is focused`, () => {
    selectorWide.click();
    document.dispatchEvent(new window.Event('focusin'));
    expect(
      selectorDropdownWide.classList.contains('sprk-c-Dropdown--open'),
    ).toBe(false);
  });

  it(`should not close the dropdown if an element
      inside the dropdown is focused`, () => {
    selector.click();
    nav.focus();
    expect(selectorDropdown.classList.contains('sprk-c-Dropdown--open')).toBe(
      true,
    );
  });

  it('should remove class from masthead when scrolled to the top', () => {
    event = new window.Event('scroll');
    window.dispatchEvent(event);
    addClassOnScroll(mastheadDiv, 0, 150, 'sprk-c-Masthead--scroll');
    expect(mastheadDiv.classList.contains('sprk-c-Masthead--scroll')).toBe(
      false,
    );
  });

  it('should close the nav when clicked and the nav is already open', () => {
    nav.classList.remove('sprk-c-Masthead__nav-collapsible--is-collapsed');
    event = new window.Event('click');
    iconContainer.dispatchEvent(event);
    expect(nav.classList.contains('sprk-c-Masthead__nav-collapsible--is-collapsed')).toBe(true);
  });

  it(`should do nothing when focusin is triggered on a narrow
      viewport when the nav is closed`, () => {
    iconContainer.focus();
    nav.classList.add('sprk-c-Masthead__nav-collapsible');
    nav.classList.add('sprk-u-HideWhenJs');
    event = new window.Event('focusin');
    main.dispatchEvent(event);
    expect(document.activeElement).toEqual(iconContainer);
  });

  it(`should focus on the first nav item when focusin is triggered
      on a narrow viewport when the nav is open`, () => {
    iconContainer.focus();
    nav.classList.add('sprk-c-Masthead__nav-collapsible');
    event = new window.Event('focusin');
    main.dispatchEvent(event);
    expect(document.activeElement).toEqual(navItem);
  });

  it('should hide the navs if orientationchange is fired', () => {
    nav.classList.remove('sprk-c-Masthead__nav-collapsible--is-collapsed');
    event = new window.Event('orientationchange');
    window.dispatchEvent(event);
    expect(nav.classList.contains('sprk-c-Masthead__nav-collapsible--is-collapsed')).toBe(true);
  });
});

describe('toggleMobileNav tests', () => {
  let main;
  let nav;
  let icon;
  let iconContainer;
  let mastheadDiv;

  beforeEach(() => {
    mastheadDiv = document.createElement('div');
    mastheadDiv.setAttribute('data-sprk-masthead', null);
    main = document.createElement('div');
    nav = document.createElement('div');
    main.setAttribute('data-sprk-masthead', null);
    nav.classList.add('sprk-c-Masthead__nav-collapsible--is-collapsed');
    nav.setAttribute('data-sprk-mobile-nav', 'mobileNav');
    iconContainer = document.createElement('div');
    icon = document.createElement('svg');
    iconContainer.appendChild(icon);
    mastheadDiv.appendChild(main);
    main.appendChild(nav);
    main.appendChild(iconContainer);
    document.body.appendChild(mastheadDiv);
  });

  afterEach(() => {
    document.body.innerHTML = '';
    document.documentElement.style.height = '';
    document.documentElement.classList.remove('sprk-u-Height--100');
    document.body.style.height = '';
    document.body.classList.remove('sprk-u-Height--100');
  });

  it(`should toggle the class sprk-c-Masthead__nav-collapsible--is-collapsed on the
      nav element and the open class on the icon`, () => {
    toggleMobileNav(iconContainer, nav, mastheadDiv);
    expect(nav.classList.contains('sprk-c-Masthead__nav-collapsible--is-collapsed')).toBe(false);
    expect(icon.classList.contains('sprk-c-Menu__icon--open')).toBe(true);
    expect(
      document
        .getElementsByTagName('body')[0]
        .classList.contains('sprk-u-Overflow--hidden'),
    ).toBe(true);
    toggleMobileNav(iconContainer, nav, mastheadDiv);
    expect(
      document
        .getElementsByTagName('body')[0]
        .classList.contains('sprk-u-Overflow--hidden'),
    ).toBe(false);
    expect(nav.classList.contains('sprk-c-Masthead__nav-collapsible--is-collapsed')).toBe(true);
    expect(icon.classList.contains('sprk-c-Menu__icon--open')).toBe(false);
  });

  it('should toggle the aria-expanded property on the trigger element', () => {
    iconContainer.setAttribute('aria-expanded', false);
    toggleMobileNav(iconContainer, nav, mastheadDiv);
    expect(iconContainer.getAttribute('aria-expanded')).toEqual('true');
    toggleMobileNav(iconContainer, nav, mastheadDiv);
    expect(iconContainer.getAttribute('aria-expanded')).toEqual('false');
  });

  it('should add sprk-u-Height--100 to the html element', () => {
    toggleMobileNav(iconContainer, nav, mastheadDiv);
    expect(
      document.documentElement.classList.contains('sprk-u-Height--100'),
    ).toBe(true);
  });

  it(`should not add sprk-u-Height--100 to the html
      element if its already set to 100%`, () => {
    document.documentElement.style.height = '100%';
    toggleMobileNav(iconContainer, nav, mastheadDiv);
    expect(
      document.documentElement.classList.contains('sprk-u-Height--100'),
    ).toBe(false);
  });

  it('should add sprk-u-Height--100 to the body element', () => {
    toggleMobileNav(iconContainer, nav, mastheadDiv);
    expect(document.body.classList.contains('sprk-u-Height--100')).toBe(true);
  });

  it(`should not add sprk-u-Height--100 to the body element
      if its already set to 100%`, () => {
    document.body.style.height = '100%';
    toggleMobileNav(iconContainer, nav, mastheadDiv);
    expect(document.body.classList.contains('sprk-u-Height--100')).toBe(false);
  });

  it(`should remove open class from masthead
      when hideMobileNavs is called`, () => {
    toggleMobileNav(iconContainer, nav, mastheadDiv);
    expect(mastheadDiv.classList.contains('sprk-c-Masthead--open')).toBe(true);
    hideMobileNavs();
    expect(mastheadDiv.classList.contains('sprk-c-Masthead--open')).toBe(false);
  });
});

describe('hideMobileNavs tests', () => {
  let main;
  let nav;
  let icon;
  let iconContainer;

  beforeEach(() => {
    main = document.createElement('div');
    nav = document.createElement('div');
    nav.setAttribute('data-sprk-mobile-nav', 'mobileNav');
    iconContainer = document.createElement('div');
    icon = document.createElement('svg');
    icon.classList.add('sprk-c-Menu__icon--open');
    iconContainer.appendChild(icon);
    main.appendChild(nav);
    main.appendChild(iconContainer);
    document
      .getElementsByTagName('body')[0]
      .classList.add('sprk-u-Overflow--hidden');
    document.getElementsByTagName('body')[0].appendChild(main);
  });

  it(`should add the hide class to the nav element and
      remove the open class from the icon`, () => {
    hideMobileNavs();
    expect(
      document
        .getElementsByTagName('body')[0]
        .classList.contains('sprk-u-Overflow--hidden'),
    ).toBe(false);
    expect(nav.classList.contains('sprk-c-Masthead__nav-collapsible--is-collapsed')).toBe(true);
    expect(icon.classList.contains('sprk-c-Menu__icon--open')).toBe(false);
  });
});

describe('focus trap tests', () => {
  let container;
  let item1;
  let item2;

  beforeEach(() => {
    container = document.createElement('div');
    item1 = document.createElement('button');
    item1.textContent = 'Button1';
    item2 = document.createElement('button');
    item2.textContent = 'Button2';
    container.appendChild(item1);
    container.appendChild(item2);
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it(`should set focus to the first element,
      if the first param is true`, () => {
    item2.focus();
    focusTrap(true, container);
    expect(document.activeElement.textContent).toBe('Button1');
  });

  it('should do nothing if the first param is false', () => {
    item2.focus();
    focusTrap(false, container);
    expect(document.activeElement.textContent).toBe('Button2');
  });
});

describe('masthead no selector test', () => {
  let main;
  let nav;
  let navItem;
  let icon;
  let mastheadDiv;
  let iconContainer;

  beforeEach(() => {
    main = document.createElement('div');
    main.setAttribute('data-sprk-main', null);

    // Create the main Masthead element
    mastheadDiv = document.createElement('div');
    mastheadDiv.classList.add('sprk-c-Masthead');
    mastheadDiv.setAttribute('data-sprk-masthead', null);

    // Create narrow nav
    nav = document.createElement('div');
    // Create nav item
    navItem = document.createElement('button');
    // Add navItem to nav
    nav.appendChild(navItem);
    nav.classList.add('sprk-c-Masthead__nav-collapsible--is-collapsed');
    nav.setAttribute('data-sprk-mobile-nav', 'mobileNav');

    // Add nav to masthead
    mastheadDiv.appendChild(nav);

    // Create an svg icon
    icon = document.createElement('svg');

    // Create a menu button container for icon
    iconContainer = document.createElement('button');
    iconContainer.setAttribute('data-sprk-mobile-nav-trigger', 'mobileNav');

    // Add mobile menu icon to container
    iconContainer.appendChild(icon);

    // Add iconContainer to mastheadDiv
    mastheadDiv.appendChild(iconContainer);

    sinon.spy(nav, 'addEventListener');
    sinon.spy(iconContainer, 'addEventListener');
    main.appendChild(mastheadDiv);
    document.body.appendChild(main);
    bindUIEvents();
    dropdowns();
  });

  afterEach(() => {
    document.body.innerHTML = '';
    nav.addEventListener.restore();
    iconContainer.addEventListener.restore();
  });

  it('should not add event listener to selector if it does not exist', () => {
    const selectorTrigger = mastheadDiv.querySelector(
      '[data-sprk-dropdown-trigger="dropdown-selector"]',
    );
    expect(selectorTrigger).toBe(null);
  });
});
