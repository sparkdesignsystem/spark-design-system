/* global document describe it */
import generateAriaOwns from '../utilities/generateAriaOwns';

describe('generateAriaOwns tests', () => {
  let ownerElement;
  let contentElement;

  beforeEach(() => {
    ownerElement = document.createElement('button');
    contentElement = document.createElement('div');
  });

  it(`should generate values if neither
      aria-owns nor id is present`, () => {
    ownerElement.removeAttribute('aria-owns');
    contentElement.removeAttribute('id');
    generateAriaOwns(ownerElement, contentElement);

    expect(ownerElement.hasAttribute('aria-owns')).toEqual(true);
    expect(contentElement.hasAttribute('id')).toEqual(true);
    expect(ownerElement.getAttribute('aria-owns')).toEqual(
      contentElement.getAttribute('id'),
    );
  });

  it(`should not change values if aria-owns is
      provided but id is missing`, () => {
    ownerElement.setAttribute('aria-owns', 'foo');
    contentElement.removeAttribute('id');
    generateAriaOwns(ownerElement, contentElement);

    expect(ownerElement.getAttribute('aria-owns')).toEqual('foo');
    expect(contentElement.hasAttribute('id')).toEqual(false);
  });

  it(`should use the provided value when aria-owns
      is missing but id is present`, () => {
    ownerElement.removeAttribute('aria-owns');
    contentElement.setAttribute('id', 'foo');
    expect(ownerElement.hasAttribute('aria-owns')).toEqual(false);

    generateAriaOwns(ownerElement, contentElement);

    expect(ownerElement.hasAttribute('aria-owns')).toEqual(true);
    expect(ownerElement.getAttribute('aria-owns')).toEqual('foo');
    expect(contentElement.getAttribute('id')).toEqual('foo');
  });

  it(`should not change values if aria-owns and are
      both present but have different values`, () => {
    ownerElement.setAttribute('aria-owns', 'foo');
    contentElement.setAttribute('id', 'bar');
    generateAriaOwns(ownerElement, contentElement);

    expect(ownerElement.getAttribute('aria-owns')).toEqual('foo');
    expect(contentElement.getAttribute('id')).toEqual('bar');
  });

  it(`should not change values if aria-owns and are
      both present and have correct values`, () => {
    ownerElement.setAttribute('aria-owns', 'foo');
    contentElement.setAttribute('id', 'foo');
    generateAriaOwns(ownerElement, contentElement);

    // expect no console warn
    expect(ownerElement.getAttribute('aria-owns')).toEqual('foo');
    expect(contentElement.getAttribute('id')).toEqual('foo');
  });
});
