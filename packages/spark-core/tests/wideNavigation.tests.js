/* global before document describe it */
import { expect } from 'chai';
import { showDropDown } from '../components/wide-navigation';

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
    subNav1.classList.add('sprk-c-WideNavigation--sub', 'sprk-u-Hide');

    subNav2 = document.createElement('ul');
    subNav2.classList.add('sprk-c-WideNavigation--sub', 'sprk-u-Hide');

    navItem1.appendChild(subNav1);
    navItem3.appendChild(subNav2);

    nav.appendChild(navItem1);
    nav.appendChild(navItem2);
    nav.appendChild(navItem3);
  });

  it('should remove the hidden class from the subNav inside', () => {
    showDropDown(navItem1);
    expect(subNav1.classList.contains('sprk-u-Hide')).eql(false);
  });
});
