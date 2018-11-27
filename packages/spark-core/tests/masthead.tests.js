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
import {
  showDropDown,
  hideAllDropDowns,
  SecondaryNavigation,
} from '../components/secondary-navigation';


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
  let iconContainer;
  let event;

  beforeEach(() => {
    main = document.createElement('div');
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
    main.appendChild(nav);
    main.appendChild(iconContainer);
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
    expect(nav.classList.contains('sprk-u-Display--none')).eql(false);
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

  before(() => {
    main = document.createElement('div');
    nav = document.createElement('div');
    nav.classList.add('sprk-u-Display--none');
    nav.setAttribute('data-sprk-mobile-nav', 'mobileNav');
    iconContainer = document.createElement('div');
    icon = document.createElement('svg');
    iconContainer.appendChild(icon);
    main.appendChild(nav);
    main.appendChild(iconContainer);
    document.getElementsByTagName('body')[0].appendChild(main);
  });

  it('should toggle the class sprk-u-Display--none on the nav element and the open class on the icon', () => {
    toggleMobileNav(iconContainer, nav);
    expect(nav.classList.contains('sprk-u-Display--none')).eql(false);
    expect(icon.classList.contains('sprk-c-Menu__icon--open')).eql(true);
    expect(document.getElementsByTagName('body')[0].classList.contains('sprk-u-Overflow--hidden')).eql(true);
    toggleMobileNav(iconContainer, nav);
    expect(document.getElementsByTagName('body')[0].classList.contains('sprk-u-Overflow--hidden')).eql(false);
    expect(nav.classList.contains('sprk-u-Display--none')).eql(true);
    expect(icon.classList.contains('sprk-c-Menu__icon--open')).eql(false);
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

describe('secondary nav tests', () => {
  let nav;
  let navItem1;
  let navItem2;
  let navItem3;
  let subNav1;
  let subNavContainer1;
  let subNav2;
  let subNavContainer2;
  let event;

  beforeEach(() => {
    nav = document.createElement('ul');
    nav.setAttribute('data-sprk-navigation', 'secondary');

    navItem1 = document.createElement('li');
    navItem2 = document.createElement('li');
    navItem3 = document.createElement('li');

    sinon.spy(navItem1, 'addEventListener');
    sinon.spy(navItem2, 'addEventListener');
    sinon.spy(navItem3, 'addEventListener');
    sinon.spy(document, 'querySelectorAll');

    subNavContainer1 = document.createElement('div');
    subNavContainer1.classList.add('sprk-c-SecondaryNavigation__sub-menu-container');
    subNavContainer1.classList.add('sprk-u-Display--none');

    subNavContainer2 = document.createElement('div');
    subNavContainer2.classList.add('sprk-c-SecondaryNavigation__sub-menu-container');
    subNavContainer2.classList.add('sprk-u-Display--none');

    subNav1 = document.createElement('ul');
    subNav1.classList.add('sprk-c-SecondaryNavigation--sub');

    subNav2 = document.createElement('ul');
    subNav2.classList.add('sprk-c-SecondaryNavigation--sub', 'sprk-u-Display--none');

    subNavContainer1.appendChild(subNav1);
    subNavContainer2.appendChild(subNav2);

    navItem1.appendChild(subNavContainer1);
    navItem3.appendChild(subNavContainer2);

    nav.appendChild(navItem1);
    nav.appendChild(navItem2);
    nav.appendChild(navItem3);

    document.body.appendChild(nav);
  });

  afterEach(() => {
    document.querySelectorAll.restore();
  });

  it('should remove the hidden class from the subNav inside', () => {
    showDropDown(navItem1);
    expect(subNav1.classList.contains('sprk-u-Display--none')).eql(false);
  });

  it('should do nothing if theres no subnav', () => {
    showDropDown(navItem2);
    expect(subNavContainer1.classList.contains('sprk-u-Display--none')).eql(true);
    expect(subNavContainer2.classList.contains('sprk-u-Display--none')).eql(true);
  });

  it('should bind the focusin event', () => {
    bindUIEvents(navItem1);
    expect(navItem1.addEventListener.getCall(0).args[0]).eql('focusin');
  });

  it('should hide all navs and show one on focusin', () => {
    bindUIEvents(navItem1);
    bindUIEvents(navItem2);
    bindUIEvents(navItem3);

    event = new window.Event('focusin');
    navItem3.dispatchEvent(event);

    expect(subNavContainer1.classList.contains('sprk-u-Display--none')).eql(true);
    expect(subNavContainer2.classList.contains('sprk-u-Display--none')).eql(false);
  });

  it('should do nothing if theres no sub nav on focusin', () => {
    bindUIEvents(navItem2);

    event = new window.Event('focusin');
    navItem2.dispatchEvent(event);
    expect(navItem2.classList.contains('sprk-c-SecondaryNavigation__item--open')).eql(false);
  });

  it('should bind the mouseenter event', () => {
    bindUIEvents(navItem1);
    expect(navItem1.addEventListener.getCall(1).args[0]).eql('mouseenter');
  });

  it('should do nothing if theres no sub nav on mouseenter', () => {
    bindUIEvents(navItem2);

    event = new window.Event('mouseenter');
    navItem2.dispatchEvent(event);
    expect(navItem2.classList.contains('sprk-c-SecondaryNavigation__item--open')).eql(false);
  });

  it('should hide all navs and show one on mouseenter', () => {
    bindUIEvents(navItem1);
    bindUIEvents(navItem2);
    bindUIEvents(navItem3);

    event = new window.Event('mouseenter');
    navItem3.dispatchEvent(event);

    expect(subNavContainer1.classList.contains('sprk-u-Display--none')).eql(true);
    expect(subNavContainer2.classList.contains('sprk-u-Display--none')).eql(false);
  });

  it('should bind the mouseleave event', () => {
    bindUIEvents(navItem1);
    expect(navItem1.addEventListener.getCall(2).args[0]).eql('mouseleave');
  });

  it('should do nothing if theres no sub nav on mouseleave', () => {
    bindUIEvents(navItem2);

    event = new window.Event('mouseleave');
    navItem2.dispatchEvent(event);
    expect(navItem2.classList.contains('sprk-c-SecondaryNavigation__item--open')).eql(false);
  });

  it('should hide all navs and show one on mouseleave', () => {
    bindUIEvents(navItem1);
    bindUIEvents(navItem2);
    bindUIEvents(navItem3);

    event = new window.Event('mouseleave');
    navItem3.dispatchEvent(event);

    expect(subNavContainer1.classList.contains('sprk-u-Display--none')).eql(true);
    expect(subNavContainer2.classList.contains('sprk-u-Display--none')).eql(true);
  });

  it('should call getElements once with the correct selector', () => {
    SecondaryNavigation();
    expect(document.querySelectorAll.getCall(0).args[0]).eql('[data-sprk-navigation="secondary"] > .sprk-c-SecondaryNavigation__item');
  });
});

describe('hide all navigation tests', () => {
  let nav;
  let navItem1;
  let navItem2;
  let navItem3;
  let subNav1;
  let subNav2;

  before(() => {
    nav = document.createElement('ul');
    navItem1 = document.createElement('li');
    navItem1.setAttribute('aria-expanded', 'true');
    navItem2 = document.createElement('li');
    navItem2.setAttribute('aria-expanded', 'true');
    navItem3 = document.createElement('li');

    subNav1 = document.createElement('ul');
    subNav1.classList.add('sprk-c-SecondaryNavigation--sub');

    subNav2 = document.createElement('ul');
    subNav2.classList.add('sprk-c-SecondaryNavigation--sub');

    navItem1.appendChild(subNav1);
    navItem3.appendChild(subNav2);

    nav.appendChild(navItem1);
    nav.appendChild(navItem2);
    nav.appendChild(navItem3);

    hideAllDropDowns(
      nav.querySelectorAll('.sprk-c-SecondaryNavigation--sub'),
      nav.querySelectorAll('[aria-expanded]'),
    );
  });

  it('should add the hidden class to the sub navs and set aria-expanded', () => {
    expect(subNav1.classList.contains('sprk-u-Display--none')).eql(true);
    expect(subNav2.classList.contains('sprk-u-Display--none')).eql(true);
  });

  it('should set aria-expanded on nav items to false', () => {
    expect(navItem1.getAttribute('aria-expanded') === 'false').eql(true);
    expect(navItem2.getAttribute('aria-expanded') === 'false').eql(true);
  });
});
y
