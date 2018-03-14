/* global describe it*/
const jsdom = require("jsdom");
import {formatSSN} from '../base/ssnInput';
const expect = require('chai').expect;

const {JSDOM} = jsdom;
const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
global.document = dom.window.document;

describe('formatSSN tests', () => {
  it('if the value.length is < 9, do nothing', () => {
    const div = document.createElement('input');
    div.value = '12345678';
    expect(formatSSN(div.value)).eql('12345678');
  });

  it('if the value.length is > 9, do nothing', () => {
    const div = document.createElement('input');
    div.value = '1234567890';
    expect(formatSSN(div.value)).eql('1234567890');
  });

  it('if the value isNaN, do nothing', () => {
    const div = document.createElement('input');
    div.value = 'Hello, World';
    expect(formatSSN(div.value)).eql('Hello, World');
  });

  it('if the value !isNan and === 9, format with dashes', () => {
    const div = document.createElement('input');
    div.value = '123456789';
    expect(formatSSN(div.value)).eql('123-45-6789');
  });
});

