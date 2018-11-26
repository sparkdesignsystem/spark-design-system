/* global before beforeEach window document describe it afterEach */
import sinon from 'sinon';
import { expect } from 'chai';
import {
  showDropDown,
  hideAllDropDowns,
  bindUIEvents,
  SecondaryNavigation,
} from '../components/secondary-navigation';

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
