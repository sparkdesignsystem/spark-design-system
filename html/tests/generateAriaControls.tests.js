/* global document describe it */
import generateAriaControls from '../utilities/generateAriaControls';

describe('generateAriaControls tests', () => {
  let triggerElement;
  let contentElement;

  beforeEach(() => {
    triggerElement = document.createElement('button');
    contentElement = document.createElement('div');
  });
  /* eslint-disable max-len */
  it('should generate values if neither aria-controls nor id is present', () => {
    /* eslint-enable max-len */
    triggerElement.removeAttribute('aria-controls');
    contentElement.removeAttribute('id');
    generateAriaControls(triggerElement, contentElement);

    expect(triggerElement.hasAttribute('aria-controls')).toEqual(true);
    expect(contentElement.hasAttribute('id')).toEqual(true);
    expect(triggerElement.getAttribute('aria-controls')).toEqual(
      contentElement.getAttribute('id'),
    );
  });

  /* eslint-disable max-len */
  it('should not change values if aria-controls is provided but id is missing', () => {
    /* eslint-enable max-len */
    triggerElement.setAttribute('aria-controls', 'foo');
    contentElement.removeAttribute('id');
    generateAriaControls(triggerElement, contentElement);

    expect(triggerElement.getAttribute('aria-controls')).toEqual('foo');
    expect(contentElement.hasAttribute('id')).toEqual(false);
  });

  /* eslint-disable max-len */
  it('should use the provided value when aria-controls is missing but id is present', () => {
    /* eslint-enable max-len */
    triggerElement.removeAttribute('aria-controls');
    contentElement.setAttribute('id', 'foo');
    expect(triggerElement.hasAttribute('aria-controls')).toEqual(false);

    generateAriaControls(triggerElement, contentElement);

    expect(triggerElement.hasAttribute('aria-controls')).toEqual(true);
    expect(triggerElement.getAttribute('aria-controls')).toEqual('foo');
    expect(contentElement.getAttribute('id')).toEqual('foo');
  });

  /* eslint-disable max-len */
  it('should not change values if aria-controls and are both present but have different values', () => {
    /* eslint-enable max-len */
    triggerElement.setAttribute('aria-controls', 'foo');
    contentElement.setAttribute('id', 'bar');
    generateAriaControls(triggerElement, contentElement);

    expect(triggerElement.getAttribute('aria-controls')).toEqual('foo');
    expect(contentElement.getAttribute('id')).toEqual('bar');
  });

  /* eslint-disable max-len */
  it('should not change values if aria-controls and are both present and have correct values', () => {
    /* eslint-enable max-len */
    triggerElement.setAttribute('aria-controls', 'foo');
    contentElement.setAttribute('id', 'foo');
    generateAriaControls(triggerElement, contentElement);

    // expect no console warn
    expect(triggerElement.getAttribute('aria-controls')).toEqual('foo');
    expect(contentElement.getAttribute('id')).toEqual('foo');
  });
});
