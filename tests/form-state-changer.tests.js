/* global describe it */
import { mapTemplates, toggleTemplate } from '../src/assets/drizzle/scripts/form-state-changer';

const jsdom = require('jsdom');
const { expect } = require('chai');

const { JSDOM } = jsdom;
const dom = new JSDOM('<!DOCTYPE html><p>Hello world</p>');
global.document = dom.window.document;

describe('mapTemplates ', () => {
  it('should', () => {
    expect(1).eql(2);
  });
});

describe('toggleTemplate', () => {
  it('should', () => {
    expect(1).eql(2);
  });
});
