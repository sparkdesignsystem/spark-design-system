/* global describe it document before */

import { expect } from 'chai';
import {
  hideMobileNav,
  focusTrap,
  mobileNav,
} from '../src/assets/drizzle/scripts/navigation/mobileNav';

describe('hideMobileNav tests', () => {
  let nav;

  before(() => {
    document.body.classList.add('sprk-u-Overflow--hidden');
    nav = document.createElement('div');
    nav.classList.add('is-active');
  });

  it('should remove the overflow hidden class and the active class', () => {
    hideMobileNav(nav);
    expect(document.body.classList.contains('sprk-u-Overflow--hidden')).eql(false);
    expect(nav.classList.contains('is-active')).eql(false);
  });
});

describe('focusTrap tests', () => {
  let nav;
  let mainNav;
  let input;

  before(() => {
    mainNav = document.createElement('div');
    input = document.createElement('input');
    mainNav.appendChild(input);
    nav = document.createElement('div');
    nav.classList.add('is-active');
  });
  it('should focus the first element in the nav if nav has is-active', () => {
    focusTrap(nav, mainNav);
    const active = document.activeElement;
    expect(input === active).eql(true);
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
