/* global document describe it */
import { formatMonetary } from '../base/monetaryInput';

const jsdom = require('jsdom');
const { expect } = require('chai');

const { JSDOM } = jsdom;
const dom = new JSDOM('<!DOCTYPE html><p>Hello world</p>');
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
