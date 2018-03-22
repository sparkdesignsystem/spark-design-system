/* global document describe it */
import { formatSSN } from '../base/ssnInput';

const jsdom = require('jsdom');
const { expect } = require('chai');

const { JSDOM } = jsdom;
const dom = new JSDOM('<!DOCTYPE html><p>Hello world</p>');
global.document = dom.window.document;

describe('formatSSN tests', () => {
  it('should format the ssn in the XXX-XX-XXXX style', () => {
    const div = document.createElement('input');
    div.value = '123456789';
    expect(formatSSN(div.value)).eql('123-45-6789');
  });
});
