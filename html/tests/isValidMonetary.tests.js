/* global describe it */

/*
* These tests are for testing the regex provided in isValidMonetary,
* although in practice, the regex is assigned to the pattern attribute in
* the markup.
*/
import { expect } from 'chai';
import isValidMonetary from '../utilities/validation/isValidMonetary';

describe('isValidMonetary tests', () => {
  it('should pass on a valid ssn', () => {
    expect(isValidMonetary('123456789')).eql(true);
  });

  it('should pass on empty', () => {
    expect(isValidMonetary('')).eql(true);
  });

  it('should fail on undefined', () => {
    expect(isValidMonetary(undefined)).eql(false);
  });

  it('should fail on null', () => {
    expect(isValidMonetary(null)).eql(false);
  });

  it('should fail on NaN', () => {
    expect(isValidMonetary('Hello')).eql(false);
  });

  it('should pass on no commas, no change', () => {
    expect(isValidMonetary('12345')).eql(true);
  });

  it('should pass on 1 comma, no change', () => {
    expect(isValidMonetary('1,234')).eql(true);
  });

  it('should fail on hexidecimal notation', () => {
    expect(isValidMonetary('0xff')).eql(false);
  });

  it('should fail on scientific notation', () => {
    expect(isValidMonetary('1.23e10')).eql(false);
  });

  it('should pass on 2 commas, no change', () => {
    expect(isValidMonetary('1,234,567')).eql(true);
  });

  it('should pass on 3 commas, no change', () => {
    expect(isValidMonetary('1,234,567,789')).eql(true);
  });

  it('should pass on no commas, 2 digit change', () => {
    expect(isValidMonetary('123.00')).eql(true);
  });

  it('should pass on no commas, 1 digit change', () => {
    expect(isValidMonetary('123.0')).eql(true);
  });

  it('should pass one comma, 2 digit change', () => {
    expect(isValidMonetary('1,234.00')).eql(true);
  });

  it('should pass two commas, 2 digit change', () => {
    expect(isValidMonetary('1,234,234.00')).eql(true);
  });

  it('should pass one comma, 1 digit change', () => {
    expect(isValidMonetary('1,234.0')).eql(true);
  });

  it('should fail four leading digits, three commas, 2 digit change', () => {
    expect(isValidMonetary('1234,123,123,123.00')).eql(false);
  });

  it('should fail four digits in a segment, three commas, 2 digit'
    + ' change', () => {
    expect(isValidMonetary('1,2345,123,123.00')).eql(false);
  });

  it('should pass three digit change', () => {
    expect(isValidMonetary('1.123')).eql(true);
  });

  it('should fail trailing .', () => {
    expect(isValidMonetary('123.')).eql(false);
  });

  it('should pass leading 0', () => {
    expect(isValidMonetary('0.12')).eql(true);
  });

  it('should pass trailing . with altered expression passed', () => {
    expect(isValidMonetary('123.', /(^\$?(\d+|\d{1,3}(,\d{3})*)(\.+)?$)|^$/)).eql(true);
  });
});
