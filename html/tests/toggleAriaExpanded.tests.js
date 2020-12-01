/* global document describe it */
import toggleAriaExpanded from '../utilities/toggleAriaExpanded';

describe('toggleAriaExpanded tests', () => {
  let element;

  it('should toggle true to false', () => {
    element = document.createElement('div');
    element.setAttribute('aria-expanded', 'true');

    expect(element.getAttribute('aria-expanded')).toEqual('true');

    toggleAriaExpanded(element);

    expect(element.getAttribute('aria-expanded')).toEqual('false');
  });

  it('should toggle false to true', () => {
    element = document.createElement('div');
    element.setAttribute('aria-expanded', 'false');

    expect(element.getAttribute('aria-expanded')).toEqual('false');

    toggleAriaExpanded(element);

    expect(element.getAttribute('aria-expanded')).toEqual('true');
  });

  it('should not add aria-expanded if it does not exist', () => {
    element = document.createElement('div');

    expect(element.hasAttribute('aria-expanded')).toEqual(false);
  });
});
