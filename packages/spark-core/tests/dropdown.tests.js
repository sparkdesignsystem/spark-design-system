/* global document describe beforeEach afterEach it  window  */
import { expect } from 'chai';
import {
  dropdowns,
  hideDropDown,
  showDropDown,
  toggleDropDown,
} from '../components/dropdown';

describe('Dropdown tests', () => {
  let trigger;
  let dropdown;
  let insideElement;
  let outsideElement;

  beforeEach(() => {
    trigger = document.createElement('a');
    trigger.setAttribute('data-sprk-dropdown-trigger', '01');
    trigger.setAttribute('href', '#nogo');
    trigger.textContent = 'trigger';
    dropdown = document.createElement('div');
    dropdown.setAttribute('data-sprk-dropdown', '01');
    dropdown.classList.add('sprk-u-Display--none');

    insideElement = document.createElement('button');
    outsideElement = document.createElement('button');

    dropdown.appendChild(insideElement);

    document.body.appendChild(trigger);
    document.body.appendChild(dropdown);
    document.body.appendChild(outsideElement);
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('should remove the hide class and add open class when show is called', () => {
    dropdown.classList.add('sprk-u-Display--none');
    showDropDown(dropdown);
    expect(dropdown.classList.contains('sprk-u-Display--none')).eql(false);
    expect(dropdown.classList.contains('sprk-c-Dropdown--open')).eql(true);
  });

  it('should add the hide class and remove the open class when hide is called', () => {
    hideDropDown(dropdown);
    expect(dropdown.classList.contains('sprk-u-Display--none')).eql(true);
    expect(dropdown.classList.contains('sprk-c-Dropdown--open')).eql(false);
  });

  it('toggle should toggle the hide class and open class', () => {
    toggleDropDown(dropdown);
    expect(dropdown.classList.contains('sprk-u-Display--none')).eql(false);
    expect(dropdown.classList.contains('sprk-c-Dropdown--open')).eql(true);
    toggleDropDown(dropdown);
    expect(dropdown.classList.contains('sprk-u-Display--none')).eql(true);
    expect(dropdown.classList.contains('sprk-c-Dropdown--open')).eql(false);
  });

  it('should toggle the dropdown on click', () => {
    dropdowns();
    trigger.dispatchEvent(new window.Event('click'));
    expect(dropdown.classList.contains('sprk-c-Dropdown--open')).eql(true);
  });

  it('should close the open dropdown if the outsideElement is clicked', () => {
    dropdowns();
    trigger.click();
    expect(dropdown.classList.contains('sprk-c-Dropdown--open')).eql(true);
    outsideElement.click();
    expect(dropdown.classList.contains('sprk-c-Dropdown--open')).eql(false);
  });
});
