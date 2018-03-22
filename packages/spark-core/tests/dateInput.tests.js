/* global document describe it */
import { formatDate } from '../base/dateInput';

const jsdom = require('jsdom');
const { expect } = require('chai');

const { JSDOM } = jsdom;
const dom = new JSDOM('<!DOCTYPE html><p>Hello world</p>');
global.document = dom.window.document;

describe('formatDate tests', () => {
  it('should format the date in the XX/XX/XXXX style', () => {
    const div = document.createElement('input');
    div.value = '12345678';
    expect(formatDate(div.value)).eql('12/34/5678');
  });
});
