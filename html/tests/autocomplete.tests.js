/* global document describe beforeEach afterEach it window sinon */
import { autocomplete } from '../components/autocomplete';

describe('Autocomplete tests', () => {
  let container;
  let inputEl;
  let listEl;
  let listItem1;
  let listItem2;
  let listItem3;
  let outsideElement;

  beforeEach(() => {
    container = document.createElement('div');
    container.setAttribute('data-sprk-autocomplete', 'container');

    inputEl = document.createElement('input');
    inputEl.setAttribute('data-sprk-autocomplete', 'input');

    listEl = document.createElement('ul');
    listEl.setAttribute('data-sprk-autocomplete', 'filtered');
    listEl.setAttribute('data-sprk-autocomplete', 'results');

    listItem1 = document.createElement('li');
    listItem1.setAttribute('data-sprk-autocomplete', 'result');

    listItem2 = document.createElement('li');
    listItem2.setAttribute('data-sprk-autocomplete', 'result');

    listItem3 = document.createElement('li');
    listItem3.setAttribute('data-sprk-autocomplete', 'result');

    listEl.appendChild(listItem1);
    listEl.appendChild(listItem2);
    listEl.appendChild(listItem3);

    container.appendChild(inputEl);
    container.appendChild(listEl);

    outsideElement = document.createElement('button');
    outsideElement.innerHTML = 'Outside Button';
    document.body.appendChild(outsideElement);
    document.body.appendChild(container);

    sinon.spy(document, 'querySelectorAll');
    autocomplete();
  });

  afterEach(() => {
    document.querySelectorAll.restore(); // Unwraps the spy
    document.body.innerHTML = '';
  });

  it('should generate an id if needed', () => {
    // The id on the list, aria-controls on the input, and aria-owns on the
    // input container should all match.
    listEl.removeAttribute('id');
    inputEl.removeAttribute('aria-controls');
    inputEl.parentNode.removeAttribute('aria-owns');
    expect(listEl.getAttribute('id')).toBe(null);
    expect(inputEl.getAttribute('aria-controls')).toBe(null);
    expect(inputEl.parentNode.getAttribute('aria-owns')).toBe(null);
    autocomplete();
    expect(listEl.hasAttribute('id')).toBeTruthy();
    expect(inputEl.hasAttribute('aria-controls')).toBeTruthy();
    expect(inputEl.parentNode.hasAttribute('aria-owns')).toBeTruthy();
    expect(listEl.getAttribute('id')).toEqual(
      inputEl.getAttribute('aria-controls'),
    );
    expect(listEl.getAttribute('id')).toEqual(
      inputEl.parentNode.getAttribute('aria-owns'),
    );
  });

  it('should not generate an id if one is provided', () => {
    const testString = 'test_string';
    listEl.setAttribute('id', testString);
    inputEl.removeAttribute('aria-controls');
    inputEl.parentNode.removeAttribute('aria-owns');
    autocomplete();
    expect(inputEl.getAttribute('aria-controls')).toEqual(testString);
    expect(listEl.id).toEqual(testString);
  });

  it('should set aria-expanded="false" when the list is closed', () => {
    expect(listEl.classList.contains('sprk-u-Display--none')).toBe(false);

    const escKeyEvent = new window.Event('keydown');
    escKeyEvent.keyCode = 27;
    document.dispatchEvent(escKeyEvent);

    expect(listEl.classList.contains('sprk-u-Display--none')).toBe(true);
    expect(inputEl.parentNode.getAttribute('aria-expanded')).toEqual('false');
  });

  it('should close the search results if escape is pressed', () => {
    expect(listEL.classList.contains('sprk-u-Display--none')).toBe(false);

    const escKeyEvent = new window.Event('keydown');
    escKeyEvent.keyCode = 27;
    document.dispatchEvent(escKeyEvent);

    expect(listEl.classList.contains('sprk-u-Display--none')).toBe(true);
  });

  it('should close the search results if document is clicked', () => {
    expect(listEl.classList.contains('sprk-u-Display--none')).toBe(false);

    document.dispatchEvent(new window.Event('click'));

    expect(listEl.classList.contains('sprk-u-Display--none')).toBe(true);
  });

  it('should close the search results if an outside element is clicked', () => {
    expect(listEl.classList.contains('sprk-u-Display--none')).toBe(false);

    outsideElement.click();
    expect(listEl.classList.contains('sprk-u-Display--none')).toBe(true);
  });

  it(`it should not close the search results if search
  results are clicked`, () => {
    expect(listEl.classList.contains('sprk-u-Display--none')).toBe(false);

    listEl.dispatchEvent(new window.Event('click'));

    expect(listEl.classList.contains('sprk-u-Display--none')).toBe(false);
  });

  it('it should not close the search results if input is clicked', () => {
    expect(listEl.classList.contains('sprk-u-Display--none')).toBe(false);

    inputEl.dispatchEvent(new window.Event('click'));
    inputEl.click();
    expect(listEl.classList.contains('sprk-u-Display--none')).toBe(false);
  });

  it('should move visual focus with down arrow', () => {
    expect(
      listItem1.classList.contains('sprk-c-Autocomplete__result--active'),
    ).toBe(false);

    const event = new window.Event('keydown');
    event.keyCode = 40;
    inputEl.dispatchEvent(event);

    expect(
      listItem1.classList.contains('sprk-c-Autocomplete__result--active'),
    ).toBe(true);
  });

  it('should overflow visual focus with down arrow', () => {
    expect(
      listItem1.classList.contains('sprk-c-Autocomplete__result--active'),
    ).toBe(false);

    const event = new window.Event('keydown');
    event.keyCode = 40;
    inputEl.dispatchEvent(event);

    expect(
      listItem1.classList.contains('sprk-c-Autocomplete__result--active'),
    ).toBe(true);

    inputEl.dispatchEvent(event);
    inputEl.dispatchEvent(event);
    inputEl.dispatchEvent(event);

    expect(
      listItem1.classList.contains('sprk-c-Autocomplete__result--active'),
    ).toBe(true);
  });

  it(`should not move visual focus with down arrow if the
  list is hidden`, () => {
    listEl.classList.add('sprk-u-Display--none');

    expect(
      listItem1.classList.contains('sprk-c-Autocomplete__result--active'),
    ).toBe(false);

    const event = new window.Event('keydown');
    event.keyCode = 40;
    inputEl.dispatchEvent(event);

    expect(
      listItem1.classList.contains('sprk-c-Autocomplete__result--active'),
    ).toBe(false);
  });

  it('should move visual focus with up arrow', () => {
    expect(
      listItem3.classList.contains('sprk-c-Autocomplete__result--active'),
    ).toBe(false);

    const event = new window.Event('keydown');
    event.keyCode = 38;
    inputEl.dispatchEvent(event);

    expect(
      listItem3.classList.contains('sprk-c-Autocomplete__result--active'),
    ).toBe(true);
  });

  it('should overflow visual focus with up arrow', () => {
    expect(
      listItem3.classList.contains('sprk-c-Autocomplete__result--active'),
    ).toBe(false);

    const event = new window.Event('keydown');
    event.keyCode = 38;
    inputEl.dispatchEvent(event);

    expect(
      listItem3.classList.contains('sprk-c-Autocomplete__result--active'),
    ).toBe(true);

    inputEl.dispatchEvent(event);
    inputEl.dispatchEvent(event);
    inputEl.dispatchEvent(event);

    expect(
      listItem3.classList.contains('sprk-c-Autocomplete__result--active'),
    ).toBe(true);
  });

  it('should not move visual focus with up arrow if the list is hidden', () => {
    listEl.classList.add('sprk-u-Display--none');

    expect(
      listItem3.classList.contains('sprk-c-Autocomplete__result--active'),
    ).toBe(false);

    const event = new window.Event('keydown');
    event.keyCode = 38;
    inputEl.dispatchEvent(event);

    expect(
      listItem3.classList.contains('sprk-c-Autocomplete__result--active'),
    ).toBe(false);
  });

  it('should skip non-results when moving visual focus with down arrow', () => {
    listItem2.setAttribute('data-sprk-autocomplete-no-select', 'true');
    const event = new window.Event('keydown');
    event.keyCode = 40;
    inputEl.dispatchEvent(event);

    expect(
      listItem1.classList.contains('sprk-c-Autocomplete__result--active'),
    ).toBe(true);

    inputEl.dispatchEvent(event);

    expect(
      listItem3.classList.contains('sprk-c-Autocomplete__result--active'),
    ).toBe(true);
  });

  it('should call getElements once with the correct selector', () => {
    expect(document.querySelectorAll.getCall(0).args[0]).toBe(
      '[data-sprk-autocomplete="container"]',
    );
  });

  it('should not break if you press other keys', () => {
    const event = new window.Event('keydown');
    event.keyCode = 111;
    inputEl.dispatchEvent(event);

    document.dispatchEvent(event);
  });

  it('should run functions on window resize', () => {
    const spy = jest.fn();
    window.addEventListener('resize', spy);
    const event = new window.Event('resize');
    window.resizeTo(3000, 3000);
    window.dispatchEvent(event);
    expect(spy).toHaveBeenCalled();
  });

  it(`Should set the scrolltop to equal offsetTop if
  listItem top is less than list top`, () => {
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
    inputEl.dispatchEvent(event);
    expect(listItem2.parentNode.scrollTop).toEqual(listItem2.offsetTop);
  });

  it(`Should set the scrolltop to equal offsetTop if
  listItem bottom is greater than list bottom`, () => {
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
    inputEl.dispatchEvent(event);
    expect(listItem2.parentNode.scrollTop).toEqual(listItem2.offsetTop);
  });
});
