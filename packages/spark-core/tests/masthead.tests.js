/* global window beforeEach afterEach document describe before it */
import sinon from 'sinon';
import { expect } from 'chai';
import {
  masthead,
  bindUIEvents,
  focusTrap,
  toggleMobileNav,
  hideMobileNavs,
} from '../components/masthead';

describe('masthead init', () => {
  afterEach(() => {
    document.querySelectorAll.restore();
  });

  it('should call getElements once with the correct selector', () => {
    sinon.spy(document, 'querySelectorAll');
    masthead();
    expect(document.querySelectorAll.getCall(0).args[0]).eql('[data-sprk-mobile-nav-trigger]');
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

  beforeEach(() => {
    main = document.createElement('div');
    mastheadDiv = document.createElement('div');
    mastheadDiv.setAttribute('data-sprk-masthead', null);
    main.setAttribute('data-sprk-main', null);
    nav = document.createElement('div');
    navItem = document.createElement('button');
    nav.appendChild(navItem);
    sinon.spy(nav, 'addEventListener');
    nav.classList.add('sprk-u-Display--none');
    nav.setAttribute('data-sprk-mobile-nav', 'mobileNav');
    iconContainer = document.createElement('button');
    sinon.spy(iconContainer, 'addEventListener');
    iconContainer.setAttribute('data-sprk-mobile-nav-trigger', 'mobileNav');
    icon = document.createElement('svg');
    iconContainer.appendChild(icon);
    main.appendChild(mastheadDiv);
    mastheadDiv.appendChild(nav);
    mastheadDiv.appendChild(iconContainer);
    document.body.appendChild(main);
    bindUIEvents();
  });

  afterEach(() => {
    document.body.innerHTML = '';
    nav.addEventListener.restore();
    iconContainer.addEventListener.restore();
  });

  it('should bind the change event', () => {
    expect(iconContainer.addEventListener.getCall(0).args[0]).eql('click');
  });

  it('should open the nav when clicked', () => {
    event = new window.Event('click');
    iconContainer.dispatchEvent(event);
    expect(mastheadDiv.classList.contains('sprk-c-Masthead--open')).eql(true);
    expect(nav.classList.contains('sprk-u-Display--none')).eql(false);
  });

  it('should add class to masthead when the window is scrolled', () => {
    event = new window.Event('scroll');
    window.dispatchEvent(event);
    expect(mastheadDiv.classList.contains('sprk-c-Masthead--scroll')).eql(true);
  });

  // TODO: fix test
  it('should remove class from masthead when the window is scrolled to the top', () => {
    window.scrollY(0);
    event = new window.Event('scroll');
    window.dispatchEvent(event);
    expect(mastheadDiv.classList.contains('sprk-c-Masthead--scroll')).eql(false);
  });

  it('should close the nav when clicked and the nav is already open', () => {
    nav.classList.remove('sprk-u-Display--none');
    event = new window.Event('click');
    iconContainer.dispatchEvent(event);
    expect(nav.classList.contains('sprk-u-Display--none')).eql(true);
  });

  it('should do nothing when focusin is triggered on a narrow viewport when the nav is closed', () => {
    iconContainer.focus();
    nav.classList.add('sprk-c-Masthead__narrow-nav');
    nav.classList.add('sprk-u-HideWhenJs');
    event = new window.Event('focusin');
    main.dispatchEvent(event);
    expect(document.activeElement).eql(iconContainer);
  });

  it('should focus on the first nav item when focusin is triggered on a narrow viewport when the nav is open', () => {
    iconContainer.focus();
    nav.classList.add('sprk-c-Masthead__narrow-nav');
    event = new window.Event('focusin');
    main.dispatchEvent(event);
    expect(document.activeElement).eql(navItem);
  });

  it('should hide the navs if orientationchange is fired', () => {
    nav.classList.remove('sprk-u-Display--none');
    event = new window.Event('orientationchange');
    window.dispatchEvent(event);
    expect(nav.classList.contains('sprk-u-Display--none')).eql(true);
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
    nav.classList.add('sprk-u-Display--none');
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

  it('should toggle the class sprk-u-Display--none on the nav element and the open class on the icon', () => {
    toggleMobileNav(iconContainer, nav, mastheadDiv);
    expect(nav.classList.contains('sprk-u-Display--none')).eql(false);
    expect(icon.classList.contains('sprk-c-Menu__icon--open')).eql(true);
    expect(document.getElementsByTagName('body')[0].classList.contains('sprk-u-Overflow--hidden')).eql(true);
    toggleMobileNav(iconContainer, nav, mastheadDiv);
    expect(document.getElementsByTagName('body')[0].classList.contains('sprk-u-Overflow--hidden')).eql(false);
    expect(nav.classList.contains('sprk-u-Display--none')).eql(true);
    expect(icon.classList.contains('sprk-c-Menu__icon--open')).eql(false);
  });

  it('should add sprk-u-Height--100 to the html element', () => {
    toggleMobileNav(iconContainer, nav, mastheadDiv);
    expect(document.documentElement.classList.contains('sprk-u-Height--100')).eql(true);
  });

  it('should not add sprk-u-Height--100 to the html element if its already set to 100%', () => {
    document.documentElement.style.height = '100%';
    toggleMobileNav(iconContainer, nav, mastheadDiv);
    expect(document.documentElement.classList.contains('sprk-u-Height--100')).eql(false);
  });

  it('should add sprk-u-Height--100 to the body element', () => {
    toggleMobileNav(iconContainer, nav, mastheadDiv);
    expect(document.body.classList.contains('sprk-u-Height--100')).eql(true);
  });

  it('should not add sprk-u-Height--100 to the body element if its already set to 100%', () => {
    document.body.style.height = '100%';
    toggleMobileNav(iconContainer, nav, mastheadDiv);
    expect(document.body.classList.contains('sprk-u-Height--100')).eql(false);
  });

  it('should remove open class from masthead when hideMobileNavs is called', () => {
    toggleMobileNav(iconContainer, nav, mastheadDiv);
    expect(mastheadDiv.classList.contains('sprk-c-Masthead--open')).eql(true);
    hideMobileNavs();
    expect(mastheadDiv.classList.contains('sprk-c-Masthead--open')).eql(false);
  });
});

describe('hideMobileNavs tests', () => {
  let main;
  let nav;
  let icon;
  let iconContainer;

  before(() => {
    main = document.createElement('div');
    nav = document.createElement('div');
    nav.setAttribute('data-sprk-mobile-nav', 'mobileNav');
    iconContainer = document.createElement('div');
    icon = document.createElement('svg');
    icon.classList.add('sprk-c-Menu__icon--open');
    iconContainer.appendChild(icon);
    main.appendChild(nav);
    main.appendChild(iconContainer);
    document.getElementsByTagName('body')[0].classList.add('sprk-u-Overflow--hidden');
    document.getElementsByTagName('body')[0].appendChild(main);
  });

  it('should add the hide class to the nav element and remove the open class from the icon', () => {
    hideMobileNavs();
    expect(document.getElementsByTagName('body')[0].classList.contains('sprk-u-Overflow--hidden')).eql(false);
    expect(nav.classList.contains('sprk-u-Display--none')).eql(true);
    expect(icon.classList.contains('sprk-c-Menu__icon--open')).eql(false);
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

  it('should set focus to the first element, if the first param is true', () => {
    item2.focus();
    focusTrap(true, container);
    expect(document.activeElement.textContent).eql('Button1');
  });

  it('should do nothing if the first param is false', () => {
    item2.focus();
    focusTrap(false, container);
    expect(document.activeElement.textContent).eql('Button2');
  });
});
