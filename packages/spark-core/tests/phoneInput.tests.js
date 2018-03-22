/* global document describe it */
import { formatPhone } from '../base/phoneInput';

const jsdom = require('jsdom');
const { expect } = require('chai');

const { JSDOM } = jsdom;
const dom = new JSDOM('<!DOCTYPE html><p>Hello world</p>');
global.document = dom.window.document;

describe('formatPhone tests', () => {
  it('should format the Phone in the (XXX) XXX-XXXX style', () => {
    const div = document.createElement('input');
    div.value = '1234567890';
    expect(formatPhone(div.value)).eql('(123) 456-7890');
  });
});
