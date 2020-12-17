/* global document describe beforeEach afterEach it window sinon */
import { bindUIEvents, autocomplete } from '../components/autocomplete';

describe('Autocomplete tests', () => {
  let container;
  let input;
  let list;
  let listItem1;
  let listItem2;
  let listItem3;
  let outsideElement;

  beforeEach(() => {
    container = document.createElement('div');
    container.setAttribute('data-sprk-autocomplete', 'container');

    input = document.createElement('input');
    input.setAttribute('data-sprk-autocomplete', 'input');

    list = document.createElement('ul');
    list.setAttribute('data-sprk-autocomplete', 'filtered');
    list.setAttribute('data-sprk-autocomplete', 'results');

    listItem1 = document.createElement('li');
    listItem1.setAttribute('data-sprk-autocomplete', 'result');

    listItem2 = document.createElement('li');
    listItem2.setAttribute('data-sprk-autocomplete', 'result');

    listItem3 = document.createElement('li');
    listItem3.setAttribute('data-sprk-autocomplete', 'result');

    list.appendChild(listItem1);
    list.appendChild(listItem2);
    list.appendChild(listItem3);

    container.appendChild(input);
    container.appendChild(list);

    outsideElement = document.createElement('button');
    outsideElement.innerHTML = 'Outside Button';
    document.body.appendChild(outsideElement);

    sinon.spy(document, 'querySelectorAll');
  });

  afterEach(() => {
    document.querySelectorAll.restore(); // Unwraps the spy
  });

  it('should generate an id if needed', () => {
    // The id on the list, aria-controls on the input, and aria-owns on the
    // input container should all match.

    expect(list.getAttribute('id')).toBe(null);
    expect(input.getAttribute('aria-controls')).toBe(null);
    expect(input.parentNode.getAttribute('aria-owns')).toBe(null);

    bindUIEvents(container);
    expect(list.hasAttribute('id')).toBeTruthy();
    expect(input.hasAttribute('aria-controls')).toBeTruthy();
    expect(input.parentNode.hasAttribute('aria-owns')).toBeTruthy();
    expect(list.getAttribute('id')).toEqual(
      input.getAttribute('aria-controls'),
    );
    expect(list.getAttribute('id')).toEqual(
      input.parentNode.getAttribute('aria-owns'),
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

  it('should close the search results if an outside element is clicked', () => {
    bindUIEvents(container);
    expect(list.classList.contains('sprk-u-Display--none')).toBe(false);

    outsideElement.click();
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
      listItem1.classList.contains('sprk-c-Autocomplete__result--active'),
    ).toBe(false);

    const event = new window.Event('keydown');
    event.keyCode = 40;
    input.dispatchEvent(event);

    expect(
      listItem1.classList.contains('sprk-c-Autocomplete__result--active'),
    ).toBe(true);
  });

  it('should overflow visual focus with down arrow', () => {
    bindUIEvents(container);

    expect(
      listItem1.classList.contains('sprk-c-Autocomplete__result--active'),
    ).toBe(false);

    const event = new window.Event('keydown');
    event.keyCode = 40;
    input.dispatchEvent(event);

    expect(
      listItem1.classList.contains('sprk-c-Autocomplete__result--active'),
    ).toBe(true);

    input.dispatchEvent(event);
    input.dispatchEvent(event);
    input.dispatchEvent(event);

    expect(
      listItem1.classList.contains('sprk-c-Autocomplete__result--active'),
    ).toBe(true);
  });

  it(`should not move visual focus with down arrow if the
  list is hidden`, () => {
    bindUIEvents(container);

    list.classList.add('sprk-u-Display--none');

    expect(
      listItem1.classList.contains('sprk-c-Autocomplete__result--active'),
    ).toBe(false);

    const event = new window.Event('keydown');
    event.keyCode = 40;
    input.dispatchEvent(event);

    expect(
      listItem1.classList.contains('sprk-c-Autocomplete__result--active'),
    ).toBe(false);
  });

  it('should move visual focus with up arrow', () => {
    bindUIEvents(container);

    expect(
      listItem3.classList.contains('sprk-c-Autocomplete__result--active'),
    ).toBe(false);

    const event = new window.Event('keydown');
    event.keyCode = 38;
    input.dispatchEvent(event);

    expect(
      listItem3.classList.contains('sprk-c-Autocomplete__result--active'),
    ).toBe(true);
  });

  it('should overflow visual focus with up arrow', () => {
    bindUIEvents(container);

    expect(
      listItem3.classList.contains('sprk-c-Autocomplete__result--active'),
    ).toBe(false);

    const event = new window.Event('keydown');
    event.keyCode = 38;
    input.dispatchEvent(event);

    expect(
      listItem3.classList.contains('sprk-c-Autocomplete__result--active'),
    ).toBe(true);

    input.dispatchEvent(event);
    input.dispatchEvent(event);
    input.dispatchEvent(event);

    expect(
      listItem3.classList.contains('sprk-c-Autocomplete__result--active'),
    ).toBe(true);
  });

  it('should not move visual focus with up arrow if the list is hidden', () => {
    bindUIEvents(container);

    list.classList.add('sprk-u-Display--none');

    expect(
      listItem3.classList.contains('sprk-c-Autocomplete__result--active'),
    ).toBe(false);

    const event = new window.Event('keydown');
    event.keyCode = 38;
    input.dispatchEvent(event);

    expect(
      listItem3.classList.contains('sprk-c-Autocomplete__result--active'),
    ).toBe(false);
  });

  it('should skip non-results when moving visual focus with down arrow', () => {
    listItem2.setAttribute('data-sprk-autocomplete-no-select', 'true');

    bindUIEvents(container);

    const event = new window.Event('keydown');
    event.keyCode = 40;
    input.dispatchEvent(event);

    expect(
      listItem1.classList.contains('sprk-c-Autocomplete__result--active'),
    ).toBe(true);

    input.dispatchEvent(event);

    expect(
      listItem3.classList.contains('sprk-c-Autocomplete__result--active'),
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

  it('should run functions on window resize', () => {
    bindUIEvents(container);
    const spy = jest.fn();
    window.addEventListener('resize', spy);
    const event = new window.Event('resize');
    window.resizeTo(3000, 3000);
    window.dispatchEvent(event);
    expect(spy).toHaveBeenCalled();
  });

  it('Should set the scrolltop to equal offsetTop if listItem top is less than list top', () => {
    bindUIEvents(container);

    const event = new window.Event('keydown');
    event.keyCode = 40;

    // Set window height & width
    window.innerWidth = 300;
    window.innerHeight = 300;

    // Set the top of the list
    listItem2.parentNode.getBoundingClientRect = () => {
      return { top: 25 };
    };

    // Set the top of the list item
    listItem2.getBoundingClientRect = () => {
      return { top: 24 };
    };
    input.dispatchEvent(event);
    expect(listItem2.parentNode.scrollTop).toEqual(listItem2.offsetTop);
  });

  it('Should set the scrolltop to equal offsetTop if listItem bottom is greater than list bottom', () => {
    bindUIEvents(container);

    const event = new window.Event('keydown');
    event.keyCode = 40;

    // Set window height & width
    window.innerWidth = 300;
    window.innerHeight = 300;

    // Set the bottom of the list
    listItem2.parentNode.getBoundingClientRect = () => {
      return { bottom: 25 };
    };

    // Set the bottom of the list item
    listItem2.getBoundingClientRect = () => {
      return { bottom: 26 };
    };
    input.dispatchEvent(event);
    expect(listItem2.parentNode.scrollTop).toEqual(listItem2.offsetTop);
  });
});
