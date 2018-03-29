/* global describe it */

const jsdom = require('jsdom');
const { expect } = require('chai');

const { JSDOM } = jsdom;
const dom = new JSDOM('<!DOCTYPE html><p>Hello world</p>');
global.document = dom.window.document;
global.window = dom.window;

import '../src/assets/drizzle/scripts/pagination/default';
import '../src/assets/drizzle/scripts/pagination/long';

describe('default pagination tests', () => {
  it('should have tests written', () => {
    expect(1).eql(2);
  });
});

describe('long pagination tests', () => {
  it('should have tests written', () => {
    expect(1).eql(2);
  });
});

