/* global describe it*/

require('babel-register');
const jsdom = require("mocha-jsdom");
const expect = require('chai').expect;

import {formatSSN} from '../base/ssnInput';

describe('formatSSN tests', () => {
  jsdom();

  it('if the value.length is < 9, do nothing', () => {
    const div = document.createElement('input');
    div.value = '12345678';
    expect(formatSSN(div)).eql('12345678');
  });

  it('if the value.length is > 9, do nothing', () => {
    const div = document.createElement('input');
    div.value = '1234567890';
    expect(formatSSN(div)).eql('1234567890');
  });

  it('if the value isNaN, do nothing', () => {
    const div = document.createElement('input');
    div.value = 'Hello, World';
    expect(formatSSN(div)).eql('Hello, World');
  });

  it('if the value !isNan and === 9, format with dashes', () => {
    const div = document.createElement('input');
    div.value = '123456789';
    expect(formatSSN(div)).eql('123-45-6789');
  });
});

