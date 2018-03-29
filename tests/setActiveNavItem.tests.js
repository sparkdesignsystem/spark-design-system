/* global describe it */

const jsdom = require('jsdom');
const { expect } = require('chai');

const { JSDOM } = jsdom;
const dom = new JSDOM('<!DOCTYPE html><p>Hello world</p>');
global.document = dom.window.document;
global.window = dom.window;

import setActiveNavItem from '../src/assets/drizzle/scripts/navigation/setActiveNavItem';

describe('setActiveNavItem tests', () => {
  it('should have tests written', () => {
    expect(0).eql(1);
  });
});
