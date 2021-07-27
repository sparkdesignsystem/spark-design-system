/* global document describe beforeEach afterEach it  window  */
import {
  dropdowns,
  hideDropDown,
  showDropDown,
  toggleDropDown,
} from '../components/dropdown';

describe('Dropdown tests', () => {
  let trigger;
  let triggerText;
  let dropdown;
  let choice1;
  let insideElement;
  let outsideElement;
  let trigger2;
  let triggerText2;
  let dropdown2;
  let choice2;

  beforeEach(() => {
    trigger = document.createElement('a');
    trigger.setAttribute('data-sprk-dropdown-trigger', '01');
    trigger.setAttribute('href', '#nogo');
    triggerText = document.createElement('span');
    triggerText.setAttribute('data-sprk-dropdown-trigger-text-container', '');
    triggerText.textContent = 'trigger';
    trigger.appendChild(triggerText);
    dropdown = document.createElement('div');
    dropdown.setAttribute('data-sprk-dropdown', '01');
    dropdown.classList.add('sprk-c-Dropdown--is-hidden');

    choice1 = document.createElement('a');
    choice1.setAttribute('data-sprk-dropdown-choice', 'choice1');

    dropdown.appendChild(choice1);

    insideElement = document.createElement('button');
    insideElement.tabIndex = 0;
    insideElement.innerHTML = 'Inside Button';
    outsideElement = document.createElement('button');
    insideElement.tabIndex = 0;
    outsideElement.innerHTML = 'Outside Button';

    dropdown.appendChild(insideElement);

    document.body.appendChild(trigger);
    document.body.appendChild(dropdown);
    document.body.appendChild(outsideElement);

    trigger2 = document.createElement('a');
    trigger2.setAttribute('data-sprk-dropdown-trigger', '02');
    trigger2.setAttribute('href', '#nogo');

    triggerText2 = document.createElement('span');
    triggerText2.textContent = 'trigger';
    trigger2.appendChild(triggerText2);

    dropdown2 = document.createElement('div');
    dropdown2.setAttribute('data-sprk-dropdown', '02');
    dropdown2.classList.add('sprk-c-Dropdown--is-hidden');

    choice2 = document.createElement('a');
    choice2.setAttribute('data-sprk-dropdown-choice', 'choice2');

    dropdown2.appendChild(choice2);

    document.body.appendChild(trigger2);
    document.body.appendChild(dropdown2);
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it(`should remove the hide class and add open
      class when show is called`, () => {
    dropdown.classList.add('sprk-c-Dropdown--is-hidden');
    showDropDown(dropdown);
    expect(dropdown.classList.contains('sprk-c-Dropdown--is-hidden')).toBe(
      false,
    );
    expect(dropdown.classList.contains('sprk-c-Dropdown--open')).toBe(true);
  });

  it(`should add the hide class and remove the
      open class when hide is called`, () => {
    hideDropDown(dropdown);
    expect(dropdown.classList.contains('sprk-c-Dropdown--is-hidden')).toBe(
      true,
    );
    expect(dropdown.classList.contains('sprk-c-Dropdown--open')).toBe(false);
  });

  it('toggle should toggle the hide class and open class', () => {
    toggleDropDown(dropdown);
    expect(dropdown.classList.contains('sprk-c-Dropdown--is-hidden')).toBe(
      false,
    );
    expect(dropdown.classList.contains('sprk-c-Dropdown--open')).toBe(true);
    toggleDropDown(dropdown);
    expect(dropdown.classList.contains('sprk-c-Dropdown--is-hidden')).toBe(
      true,
    );
    expect(dropdown.classList.contains('sprk-c-Dropdown--open')).toBe(false);
  });

  it('should toggle the dropdown on click', () => {
    dropdowns();
    trigger.dispatchEvent(new window.Event('click'));
    expect(dropdown.classList.contains('sprk-c-Dropdown--open')).toBe(true);
  });

  it('should close the open dropdown if the outsideElement is clicked', () => {
    dropdowns();
    trigger.click();
    expect(dropdown.classList.contains('sprk-c-Dropdown--open')).toBe(true);
    outsideElement.click();
    expect(dropdown.classList.contains('sprk-c-Dropdown--open')).toBe(false);
  });

  it('should update the trigger text if a choice is clicked', () => {
    dropdowns();
    trigger.click();
    choice1.click();
    expect(triggerText.textContent).toBe('choice1');
  });

  it(`should not update the trigger text if the trigger
      does not have a text-container and a choice is clicked`, () => {
    dropdowns();
    trigger2.click();
    choice2.click();
    expect(triggerText2.textContent).toBe('trigger');
  });

  it(`should not change the trigger text if something
      is clicked outside the dropdown`, () => {
    dropdowns();
    trigger.click();
    outsideElement.click();
    expect(triggerText.textContent).toBe('trigger');
  });

  it('should close the dropdown if esc is pressed', () => {
    dropdowns();
    trigger.click();
    const escKeyEvent = new window.Event('keydown');
    escKeyEvent.keyCode = 27;
    document.dispatchEvent(escKeyEvent);
    expect(dropdown.classList.contains('sprk-c-Dropdown--open')).toBe(false);
  });

  it(`should not close the dropdown if a key
      that is not esc is pressed`, () => {
    dropdowns();
    trigger.click();
    const escKeyEvent = new window.Event('keydown');
    escKeyEvent.keyCode = 26;
    document.dispatchEvent(escKeyEvent);
    expect(dropdown.classList.contains('sprk-c-Dropdown--open')).toBe(true);
  });

  it(`should close the dropdown if an element
      outside the dropdown is focused`, () => {
    dropdowns();
    trigger.click();
    document.dispatchEvent(new window.Event('focusin'));
    expect(dropdown.classList.contains('sprk-c-Dropdown--open')).toBe(false);
  });

  it(`should not close the dropdown if an element
      inside the dropdown is focused`, () => {
    dropdowns();
    trigger.click();
    insideElement.focus();
    expect(dropdown.classList.contains('sprk-c-Dropdown--open')).toBe(true);
  });
});
