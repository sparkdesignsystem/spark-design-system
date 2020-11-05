/* global document describe beforeEach afterEach it  window  */
import { bindUIEvents } from '../components/autocomplete';

describe('Autocomplete tests', () => {
  let container;
  let announcement;
  let input;
  let resultsList;

  beforeEach(() => {
    container = document.createElement('div');
    container.setAttribute('data-sprk-autocomplete', 'container');

    announcement = document.createElement('div');
    // announcement.setAttribute

    input = document.createElement('input');
    // input.setAttribute

    resultsList = document.createElement('ul');
    resultsList.classList.add('sprk-u-Display--none');
    // resultsList.setAttribute

    container.appendChild(announcement);
    container.appendChild(input);
    container.appendChild(resultsList);
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('should generate an id if needed', () => {
    expect(resultsList.getAttribute('id')).toBe(null);
    expect(input.getAttribute('aria-controls')).toBe(null);

    bindUIEvents(container);
    expect(resultsList.hasAttribute('id')).toBeTruthy();
    expect(input.hasAttribute('aria-controls')).toBeTruthy();
    expect(resultsList.getAttribute('id')).toEqual(
      input.getAttribute('aria-controls'),
    );
  });

  it('should not generate an id if one is provided', () => {
    const testString = 'test_string';
    resultsList.setAttribute('id', testString);

    bindUIEvents(container);

    expect(input.getAttribute('aria-controls')).toEqual(testString);
    expect(resultsList.id).toEqual(testString);
  });

  it('should display recent searches when it gets focus', () => {
    expect(resultsList.classList.contains('sprk-u-Display--none')).toBe(true);
    bindUIEvents(container);
    input.dispatchEvent(new window.Event('focusin'));
    expect(resultsList.classList.contains('sprk-u-Display--none')).toBe(false);
  });

  it('should close the search results if escape is pressed', () => {
    bindUIEvents(container);
    input.dispatchEvent(new window.Event('focusin'));
    expect(resultsList.classList.contains('sprk-u-Display--none')).toBe(false);

    const escKeyEvent = new window.Event('keydown');
    escKeyEvent.keyCode = 27;
    document.dispatchEvent(escKeyEvent);

    expect(resultsList.classList.contains('sprk-u-Display--none')).toBe(true);
  });

  it('should close the search results if document is clicked', () => {
    bindUIEvents(container);
    input.dispatchEvent(new window.Event('focusin'));
    expect(resultsList.classList.contains('sprk-u-Display--none')).toBe(false);

    document.dispatchEvent(new window.Event('click'));

    expect(resultsList.classList.contains('sprk-u-Display--none')).toBe(true);
  });

  it('it should not close the search results if search results are clicked', () => {
    bindUIEvents(container);
    input.dispatchEvent(new window.Event('focusin'));
    expect(resultsList.classList.contains('sprk-u-Display--none')).toBe(false);

    resultsList.dispatchEvent(new window.Event('click'));

    expect(resultsList.classList.contains('sprk-u-Display--none')).toBe(false);
  });

  it('it should not close the search results if input is clicked', () => {
    bindUIEvents(container);
    input.dispatchEvent(new window.Event('focusin'));
    expect(resultsList.classList.contains('sprk-u-Display--none')).toBe(false);

    input.dispatchEvent(new window.Event('click'));

    expect(resultsList.classList.contains('sprk-u-Display--none')).toBe(false);
  });
});
