/* global document describe beforeEach afterEach it  window  */
import { autocomplete, bindUIEvents } from '../components/autocomplete';

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
    // resultsList.setAttribute

    container.appendChild(announcement);
    container.appendChild(input);
    container.appendChild(resultsList);
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('should generate an id if needed', () => {
    console.log(container.outerHTML);
    expect(resultsList.getAttribute('id')).toBe(null);
    expect(input.getAttribute('aria-controls')).toBe(null);

    bindUIEvents(container);
    console.log(container.outerHTML);
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
});
