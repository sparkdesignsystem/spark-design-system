/* global describe before it*/
const jsdom = require("jsdom");
import {formatMonetary, runValidation} from '../base/monetaryInput';

const expect = require('chai').expect;

const {JSDOM} = jsdom;
const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
global.document = dom.window.document;

describe('formatMonetary tests', () => {
  it('one digit', () => {
    const div = document.createElement('input');
    div.value = '1';
    expect(formatMonetary(div.value)).eql('1.00');
  });
  it('4 digits', () => {
    const div = document.createElement('input');
    div.value = '1234';
    expect(formatMonetary(div.value)).eql('1,234.00');
  });
  it('7 digits', () => {
    const div = document.createElement('input');
    div.value = '1234567';
    expect(formatMonetary(div.value)).eql('1,234,567.00');
  });
  it('10 digits', () => {
    const div = document.createElement('input');
    div.value = '1234567890';
    expect(formatMonetary(div.value)).eql('1,234,567,890.00');
  });
  it('contains decimal', () => {
    const div = document.createElement('input');
    div.value = '0.10';
    expect(formatMonetary(div.value)).eql('0.10');
  });
  it('contains decimal with more than 2 places, should round', () => {
    const div = document.createElement('input');
    div.value = '0.115';
    expect(formatMonetary(div.value)).eql('0.12');
  });
});

describe('runValidation tests', () => {
  let inputContainer;
  let input;

  before(() => {
    inputContainer = document.createElement('div');
    const errorContainer = document.createElement('span');
    errorContainer.classList.add('sprk-b-ErrorText');
    input = document.createElement('input');
    inputContainer.appendChild(input);
    inputContainer.appendChild(errorContainer);
  });

  it('should return true if the validation passes', () => {
    input.value = '123456789';
    expect(runValidation(inputContainer)).eql(true);
  });
  it('should return false if the validation fails', () => {
    input.value = 'Hello';
    expect(runValidation(inputContainer)).eql(false);
  });
});
