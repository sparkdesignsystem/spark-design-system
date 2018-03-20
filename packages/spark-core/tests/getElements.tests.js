/* global document describe it */
import getElements from '../utilities/getElements';

const jsdom = require('jsdom');
const { expect } = require('chai');

const { JSDOM } = jsdom;
const dom = new JSDOM('<!DOCTYPE html><p>Hello world</p>');
global.document = dom.window.document;

describe('getElements tests', () => {
  it('should call the given function for each element found', () => {
    document.body.innerHTML = '<!DOCTYPE html><html><body><div class="foo">Foo</div></body></html>';
    let count = 0;
    getElements('.foo', () => {
      count += 1;
    });
    expect(count).eql(1);
  });
  it('should not call the given function if no elements are found', () => {
    document.body.innerHTML = '<!DOCTYPE html><html><body><div class="foo">Foo</div></body></html>';
    let count = 0;
    getElements('.bar', () => {
      count += 1;
    });
    expect(count).eql(0);
  });
});
