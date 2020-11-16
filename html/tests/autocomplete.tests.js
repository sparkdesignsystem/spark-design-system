/* global document describe beforeEach afterEach it  window  */
import { bindUIEvents } from '../components/autocomplete';

describe('Autocomplete tests', () => {
  let container;
  let input;
  let filteredList;

  beforeEach(() => {
    container = document.createElement('div');
    container.setAttribute('data-sprk-autocomplete', 'container');

    input = document.createElement('input');

    filteredList.setAttribute('data-sprk-autocomplete', 'filtered');
    filteredList.classList.add('sprk-u-Display--none');

    container.appendChild(input);
    container.appendChild(filteredList);
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('should generate an id if needed', () => {
    expect(filteredList.getAttribute('id')).toBe(null);
    expect(input.getAttribute('aria-controls')).toBe(null);

    bindUIEvents(container);
    expect(filteredList.hasAttribute('id')).toBeTruthy();
    expect(input.hasAttribute('aria-controls')).toBeTruthy();
    expect(filteredList.getAttribute('id')).toEqual(
      input.getAttribute('aria-controls'),
    );
  });

  // it('should not generate an id if one is provided', () => {
  //   const testString = 'test_string';
  //   filteredList.setAttribute('id', testString);

  //   bindUIEvents(container);

  //   expect(input.getAttribute('aria-controls')).toEqual(testString);
  //   expect(filteredList.id).toEqual(testString);
  // });

  // it('should display recent searches when it gets focus', () => {
  //   expect(recentsList.classList.contains('sprk-u-Display--none')).toBe(true);
  //   bindUIEvents(container);
  //   input.dispatchEvent(new window.Event('focusin'));
  //   expect(recentsList.classList.contains('sprk-u-Display--none')).toBe(false);
  // });

  // it('should close the search results if escape is pressed', () => {
  //   bindUIEvents(container);
  //   input.dispatchEvent(new window.Event('focusin'));
  //   expect(recentsList.classList.contains('sprk-u-Display--none')).toBe(false);

  //   const escKeyEvent = new window.Event('keydown');
  //   escKeyEvent.keyCode = 27;
  //   document.dispatchEvent(escKeyEvent);

  //   expect(recentsList.classList.contains('sprk-u-Display--none')).toBe(true);
  // });

  // it('should close the search results if document is clicked', () => {
  //   bindUIEvents(container);
  //   input.dispatchEvent(new window.Event('focusin'));
  //   expect(recentsList.classList.contains('sprk-u-Display--none')).toBe(false);

  //   document.dispatchEvent(new window.Event('click'));

  //   expect(recentsList.classList.contains('sprk-u-Display--none')).toBe(true);
  // });

  // it('it should not close the search results if search results are clicked', () => {
  //   bindUIEvents(container);
  //   input.dispatchEvent(new window.Event('focusin'));
  //   expect(recentsList.classList.contains('sprk-u-Display--none')).toBe(false);

  //   recentsList.dispatchEvent(new window.Event('click'));

  //   expect(recentsList.classList.contains('sprk-u-Display--none')).toBe(false);
  // });

  // it('it should not close the search results if input is clicked', () => {
  //   bindUIEvents(container);
  //   input.dispatchEvent(new window.Event('focusin'));
  //   expect(recentsList.classList.contains('sprk-u-Display--none')).toBe(false);

  //   input.dispatchEvent(new window.Event('click'));

  //   expect(recentsList.classList.contains('sprk-u-Display--none')).toBe(false);
  // });

  // it('should move visual focus with down arrow', () => {
  //   const item = document.createElement('li');
  //   item.id = 'one';
  //   item.value = 'One';
  //   filteredList.appendChild(item);

  //   bindUIEvents(container);
  //   // input.dispatchEvent("Down???"); //todo

  //   // expect item to have active class
  // });

  // it('should skip non-results when moving visual focus with down arrow', () => {
  //   const item1 = document.createElement('li');
  //   item1.id = 'one';
  //   item1.value = 'One';
  //   const item2 = document.createElement('li');
  //   item2.id = 'two';
  //   item2.value = 'Two';
  //   // TODO better way to write this line
  //   item2.setAttribute('data-sprk-autocomplete-no-results-found', 'true');

  //   const item3 = document.createElement('li');
  //   item3.id = 'three';
  //   item3.value = 'Three';
  //   // TODO better way to write this line
  //   item3.setAttribute('data-sprk-autocomplete-pinned', 'true');

  //   const item4 = document.createElement('li');
  //   item4.id = 'four';
  //   item4.value = 'Four';
  //   item4.addClass('hidden class asdf');

  //   const item5 = document.createElement('li');
  //   item5.id = 'five';
  //   item5.value = 'Five';

  //   filteredList.appendChild(item1);
  //   filteredList.appendChild(item2);
  //   filteredList.appendChild(item3);
  //   filteredList.appendChild(item4);
  //   filteredList.appendChild(item5);

  //   bindUIEvents(container);
  //   // input.dispatchEvent("Down???"); //todo

  //   // expect item1 to have active class

  //   // input.dispatchEvent("Down???"); //todo

  //   // expect item5 to have active class
  // });
});
