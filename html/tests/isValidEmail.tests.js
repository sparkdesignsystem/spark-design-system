/* global describe it */

import { expect } from 'chai';
import isValidEmail from '../utilities/validation/isValidEmail';

describe('isValidEmail tests', () => {
  it('should pass correct email', () => {
    expect(isValidEmail('example@email.com')).eql(true);
  });

  it('should pass when extra spaces after email address', () => {
    expect(isValidEmail('example@email.com  ')).eql(true);
  });

  it('should fail when whitespace within email', () => {
    expect(isValidEmail('exa mple@email.com')).eql(false);
  });

  it('should fail when extra @ symbol within email', () => {
    expect(isValidEmail('exa@mple@email.com')).eql(false);
  });

  it('should pass when extra @ symbol within email and optional expression is passed', () => {
    expect(isValidEmail('exa@mple@email.com', /([^ \t\r\n]+@[^ \t\r\n]+\.[^ \t\r\n]+)/gm)).eql(true);
  });

  it('should fail when no matches are found', () => {
    expect(isValidEmail(' ')).eql(false);
  });
});