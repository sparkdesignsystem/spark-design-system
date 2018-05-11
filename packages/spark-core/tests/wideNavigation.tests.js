/* global before document describe it */
import { expect } from 'chai';
import { showDropDown, hideAllDropDowns } from '../components/wide-navigation';

describe('wide nav tests', () => {
  let nav;
  let navItem1;
  let navItem2;
  let navItem3;
  let subNav1;
  let subNav2;

  before(() => {
    nav = document.createElement('ul');
    navItem1 = document.createElement('li');
    navItem2 = document.createElement('li');
    navItem3 = document.createElement('li');

    subNav1 = document.createElement('ul');
    subNav1.classList.add('sprk-c-WideNavigation--sub', 'sprk-u-Display--none');

    subNav2 = document.createElement('ul');
    subNav2.classList.add('sprk-c-WideNavigation--sub', 'sprk-u-Display--none');

    navItem1.appendChild(subNav1);
    navItem3.appendChild(subNav2);

    nav.appendChild(navItem1);
    nav.appendChild(navItem2);
    nav.appendChild(navItem3);
  });

  it('should remove the hidden class from the subNav inside', () => {
    showDropDown(navItem1);
    expect(subNav1.classList.contains('sprk-u-Display--none')).eql(false);
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
    subNav1.classList.add('sprk-c-WideNavigation--sub');

    subNav2 = document.createElement('ul');
    subNav2.classList.add('sprk-c-WideNavigation--sub');

    navItem1.appendChild(subNav1);
    navItem3.appendChild(subNav2);

    nav.appendChild(navItem1);
    nav.appendChild(navItem2);
    nav.appendChild(navItem3);

    hideAllDropDowns(
      nav.querySelectorAll('.sprk-c-WideNavigation--sub'),
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
