/* global describe it */

/*
* These tests are for testing the regex provided in isValidSSN, although in practice, the regex is
* assigned to the pattern attribute in the markup.
*
*/
import { expect } from 'chai';
import isValidSSN from '../utilities/validation/isValidSSN';

describe('isValidSSN tests', () => {
  it('should pass on a valid ssn', () => {
    expect(isValidSSN('123456789')).eql(true);
  });

  it('should pass on empty', () => {
    expect(isValidSSN('')).eql(true);
  });

  it('should fail on undefined', () => {
    expect(isValidSSN(undefined)).eql(false);
  });

  it('should fail on null', () => {
    expect(isValidSSN(null)).eql(false);
  });

  it('should fail on NaN', () => {
    expect(isValidSSN('Hello')).eql(false);
  });

  it('should fail on too short', () => {
    expect(isValidSSN('123')).eql(false);
  });

  it('should fail on too long', () => {
    expect(isValidSSN('12345678901234')).eql(false);
  });

  it('should fail on hexidecimal notation', () => {
    expect(isValidSSN('0xff')).eql(false);
  });

  it('should fail on scientific notation', () => {
    expect(isValidSSN('1.23e10')).eql(false);
  });

  it('should fail on mismatch separators', () => {
    expect(isValidSSN('333-33 3333')).eql(false);
  });

  it('should pass with dashes', () => {
    expect(isValidSSN('333-33-3333')).eql(true);
  });
});
