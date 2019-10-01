/* global document describe it */
import { expect } from 'chai';
import getElements from './getElements';

describe('getElements tests', () => {
  it('should call the given function for each element found', () => {
    document.body.innerHTML = '<!DOCTYPE html><html><body>'
      + '<div class="foo">Foo</div></body></html>';
    let count = 0;
    getElements('.foo', () => {
      count += 1;
    });
    expect(count).eql(1);
  });
  it('should not call the given function if no elements are found', () => {
    document.body.innerHTML = '<!DOCTYPE html><html><body>'
      + '<div class="foo">Foo</div></body></html>';
    let count = 0;
    getElements('.bar', () => {
      count += 1;
    });
    expect(count).eql(0);
  });
});
