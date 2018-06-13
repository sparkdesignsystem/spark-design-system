/* global window describe it document before beforeEach afterEach */
import sinon from 'sinon';
import { expect } from 'chai';
import {
  hideMobileNav,
  focusTrap,
  mobileNav,
} from '../src/assets/drizzle/scripts/navigation/mobileNav';

describe('mobileNav init', () => {
  let nav;
  let mainNav;
  let item1;
  let mainLayout;
  let event;

  beforeEach(() => {
    sinon.spy(document, 'querySelector');
    sinon.spy(window, 'addEventListener');
    document.body.classList.add('sprk-u-Overflow--hidden');
    nav = document.createElement('div');
    nav.classList.add('drizzle-o-Layout__nav');
    mainNav = document.createElement('div');
    mainNav.classList.add('drizzle-c-Navigation__main');
    sinon.spy(nav, 'addEventListener');
    item1 = document.createElement('input');
    nav.classList.add('is-active');
    mainLayout = document.createElement('div');
    mainLayout.classList.add('drizzle-o-Layout__main');
    sinon.spy(mainLayout, 'addEventListener');

    mainNav.appendChild(item1);
    nav.appendChild(mainNav);
    document.body.appendChild(nav);
    document.body.appendChild(mainLayout);
  });

  afterEach(() => {
    document.querySelector.restore();
    window.addEventListener.restore();
    nav.addEventListener.restore();
    mainLayout.addEventListener.restore();
    document.body.innerHTML = '';
  });

  it('should call getElements once with the correct selector', () => {
    mobileNav();
    expect(document.querySelector.getCall(0).args[0]).eql('.drizzle-o-Layout__nav');
  });

  it('should return early if theres no nav', () => {
    document.body.innerHTML = '';
    expect(window.addEventListener.called).eql(false);
  });

  it('should hide the nav on resize', () => {
    mobileNav();
    nav.classList.add('is-active');
    event = new window.Event('resize');
    window.dispatchEvent(event);
    expect(nav.classList.contains('is-active')).eql(false);
  });

  it('should cycle the focus on focusin', () => {
    mobileNav();
    nav.classList.add('is-active');
    event = new window.Event('focusin');
    mainLayout.dispatchEvent(event);
    expect(document.activeElement).eql(item1);
  });
});

describe('hideMobileNav tests', () => {
  let nav;

  before(() => {
    document.body.classList.add('sprk-u-Overflow--hidden');
    nav = document.createElement('div');
    nav.classList.add('is-active');
  });

  it('should remove the overflow hidden class and the active class', () => {
    hideMobileNav(nav);
    expect(document.body.classList.contains('drizzle-u-Overflow--hidden')).eql(false);
    expect(nav.classList.contains('is-active')).eql(false);
  });
});

describe('focusTrap tests', () => {
  let nav;
  let mainNav;
  let input;
  let outsideInput;

  beforeEach(() => {
    mainNav = document.createElement('div');
    input = document.createElement('input');
    mainNav.appendChild(input);
    nav = document.createElement('div');
    nav.classList.add('is-active');
    outsideInput = document.createElement('input');

    document.body.appendChild(mainNav);
    document.body.appendChild(nav);
    document.body.appendChild(outsideInput);
  });

  it('should focus the first element in the nav if nav has is-active', () => {
    focusTrap(nav, mainNav);
    const active = document.activeElement;
    expect(input === active).eql(true);
  });

  it('should do nothing if the nav is not active', () => {
    outsideInput.focus();
    nav.classList.remove('is-active');
    focusTrap(nav, mainNav);
    expect(document.activeElement).eql(outsideInput);
  });
});

describe('mobile nav tests', () => {
  let nav;

  before(() => {
    nav = document.createElement('nav');
    nav.classList.add('is-active');
  });
  it('should not do anything if nav is not found with the nav CSS class', () => {
    mobileNav();
    expect(nav.classList.contains('is-active')).eql(true);
  });
});
