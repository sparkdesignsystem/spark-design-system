/* global document describe before it */
import { expect } from 'chai';
import { toggleMobileNav, hideMobileNavs } from '../components/masthead';

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
    expect(icon.classList.contains('sprk-c-Hamburger__icon--open')).eql(true);
    expect(document.getElementsByTagName('body')[0].classList.contains('sprk-u-Overflow--hidden')).eql(true);
    toggleMobileNav(iconContainer, nav);
    expect(document.getElementsByTagName('body')[0].classList.contains('sprk-u-Overflow--hidden')).eql(false);
    expect(nav.classList.contains('sprk-u-Display--none')).eql(true);
    expect(icon.classList.contains('sprk-c-Hamburger__icon--open')).eql(false);
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
    expect(icon.classList.contains('sprk-c-Hamburger__icon--open')).eql(false);
  });
});
