/* global document describe beforeEach afterEach it window sinon */
import { bindUIEvents, autocomplete } from '../components/autocomplete';

describe('Autocomplete tests', () => {
  let container;
  let input;
  let list;
  let listItem1;
  let listItem2;
  let listItem3;

  beforeEach(() => {
    container = document.createElement('div');
    container.setAttribute('data-sprk-autocomplete', 'container');

    input = document.createElement('input');

    list = document.createElement('ul');
    list.setAttribute('data-sprk-autocomplete', 'filtered');

    listItem1 = document.createElement('li');
    listItem2 = document.createElement('li');
    listItem3 = document.createElement('li');
    list.appendChild(listItem1);
    list.appendChild(listItem2);
    list.appendChild(listItem3);

    container.appendChild(input);
    container.appendChild(list);

    sinon.spy(document, 'querySelectorAll');
  });

  afterEach(() => {
    document.querySelectorAll.restore(); // Unwraps the spy
  });

  it('should generate an id if needed', () => {
    expect(list.getAttribute('id')).toBe(null);
    expect(input.getAttribute('aria-controls')).toBe(null);

    bindUIEvents(container);
    expect(list.hasAttribute('id')).toBeTruthy();
    expect(input.hasAttribute('aria-controls')).toBeTruthy();
    expect(list.getAttribute('id')).toEqual(
      input.getAttribute('aria-controls'),
    );
  });

  it('should not generate an id if one is provided', () => {
    const testString = 'test_string';
    list.setAttribute('id', testString);

    bindUIEvents(container);

    expect(input.getAttribute('aria-controls')).toEqual(testString);
    expect(list.id).toEqual(testString);
  });

  it('should set aria-expanded="false" when the list is closed', () => {
    bindUIEvents(container);
    expect(list.classList.contains('sprk-u-Display--none')).toBe(false);

    const escKeyEvent = new window.Event('keydown');
    escKeyEvent.keyCode = 27;
    document.dispatchEvent(escKeyEvent);

    expect(list.classList.contains('sprk-u-Display--none')).toBe(true);
    expect(input.parentNode.getAttribute('aria-expanded')).toEqual('false');
  });

  it('should close the search results if escape is pressed', () => {
    bindUIEvents(container);
    expect(list.classList.contains('sprk-u-Display--none')).toBe(false);

    const escKeyEvent = new window.Event('keydown');
    escKeyEvent.keyCode = 27;
    document.dispatchEvent(escKeyEvent);

    expect(list.classList.contains('sprk-u-Display--none')).toBe(true);
  });

  it('should close the search results if document is clicked', () => {
    bindUIEvents(container);
    expect(list.classList.contains('sprk-u-Display--none')).toBe(false);

    document.dispatchEvent(new window.Event('click'));

    expect(list.classList.contains('sprk-u-Display--none')).toBe(true);
  });

  it(`it should not close the search results if search
  results are clicked`, () => {
    bindUIEvents(container);
    expect(list.classList.contains('sprk-u-Display--none')).toBe(false);

    list.dispatchEvent(new window.Event('click'));

    expect(list.classList.contains('sprk-u-Display--none')).toBe(false);
  });

  it('it should not close the search results if input is clicked', () => {
    bindUIEvents(container);
    expect(list.classList.contains('sprk-u-Display--none')).toBe(false);

    input.dispatchEvent(new window.Event('click'));

    expect(list.classList.contains('sprk-u-Display--none')).toBe(false);
  });

  it('should move visual focus with down arrow', () => {
    bindUIEvents(container);

    expect(
      listItem1.classList.contains('sprk-c-Autocomplete__results--active'),
    ).toBe(false);

    const event = new window.Event('keydown');
    event.keyCode = 40;
    input.dispatchEvent(event);

    expect(
      listItem1.classList.contains('sprk-c-Autocomplete__results--active'),
    ).toBe(true);
  });

  it('should overflow visual focus with down arrow', () => {
    bindUIEvents(container);

    expect(
      listItem1.classList.contains('sprk-c-Autocomplete__results--active'),
    ).toBe(false);

    const event = new window.Event('keydown');
    event.keyCode = 40;
    input.dispatchEvent(event);

    expect(
      listItem1.classList.contains('sprk-c-Autocomplete__results--active'),
    ).toBe(true);

    input.dispatchEvent(event);
    input.dispatchEvent(event);
    input.dispatchEvent(event);

    expect(
      listItem1.classList.contains('sprk-c-Autocomplete__results--active'),
    ).toBe(true);
  });

  it(`should not move visual focus with down arrow if the
  list is hidden`, () => {
    bindUIEvents(container);

    list.classList.add('sprk-u-Display--none');

    expect(
      listItem1.classList.contains('sprk-c-Autocomplete__results--active'),
    ).toBe(false);

    const event = new window.Event('keydown');
    event.keyCode = 40;
    input.dispatchEvent(event);

    expect(
      listItem1.classList.contains('sprk-c-Autocomplete__results--active'),
    ).toBe(false);
  });

  it('should move visual focus with up arrow', () => {
    bindUIEvents(container);

    expect(
      listItem3.classList.contains('sprk-c-Autocomplete__results--active'),
    ).toBe(false);

    const event = new window.Event('keydown');
    event.keyCode = 38;
    input.dispatchEvent(event);

    expect(
      listItem3.classList.contains('sprk-c-Autocomplete__results--active'),
    ).toBe(true);
  });

  it('should overflow visual focus with up arrow', () => {
    bindUIEvents(container);

    expect(
      listItem3.classList.contains('sprk-c-Autocomplete__results--active'),
    ).toBe(false);

    const event = new window.Event('keydown');
    event.keyCode = 38;
    input.dispatchEvent(event);

    expect(
      listItem3.classList.contains('sprk-c-Autocomplete__results--active'),
    ).toBe(true);

    input.dispatchEvent(event);
    input.dispatchEvent(event);
    input.dispatchEvent(event);

    expect(
      listItem3.classList.contains('sprk-c-Autocomplete__results--active'),
    ).toBe(true);
  });

  it('should not move visual focus with up arrow if the list is hidden', () => {
    bindUIEvents(container);

    list.classList.add('sprk-u-Display--none');

    expect(
      listItem3.classList.contains('sprk-c-Autocomplete__results--active'),
    ).toBe(false);

    const event = new window.Event('keydown');
    event.keyCode = 38;
    input.dispatchEvent(event);

    expect(
      listItem3.classList.contains('sprk-c-Autocomplete__results--active'),
    ).toBe(false);
  });

  it('should skip non-results when moving visual focus with down arrow', () => {
    listItem2.setAttribute('data-sprk-autocomplete-no-select', 'true');

    bindUIEvents(container);

    const event = new window.Event('keydown');
    event.keyCode = 40;
    input.dispatchEvent(event);

    expect(
      listItem1.classList.contains('sprk-c-Autocomplete__results--active'),
    ).toBe(true);

    input.dispatchEvent(event);

    expect(
      listItem3.classList.contains('sprk-c-Autocomplete__results--active'),
    ).toBe(true);
  });

  it('should call getElements once with the correct selector', () => {
    autocomplete();
    expect(document.querySelectorAll.getCall(0).args[0]).toBe(
      '[data-sprk-autocomplete="container"]',
    );
  });

  it('should not break if you press other keys', () => {
    bindUIEvents(container);

    const event = new window.Event('keydown');
    event.keyCode = 111;
    input.dispatchEvent(event);

    document.dispatchEvent(event);
  });
});
