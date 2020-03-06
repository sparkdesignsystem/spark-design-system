/* global describe it */

/*
* These tests are for testing the regex provided in isValidDate, although in
* practice, the regex is assigned to the pattern attribute in the markup.
*/
import { expect } from 'chai';
import isValidDate from '../utilities/validation/isValidDate';

describe('isValidDate tests', () => {
  it('should pass on 8 digits (plausible date)', () => {
    expect(isValidDate('12121978')).eql(true);
  });

  it('should fail on 8 digits (implausible date)', () => {
    expect(isValidDate('12120978')).eql(false);
  });

  it('should pass on empty', () => {
    expect(isValidDate('')).eql(true);
  });

  it('should fail on undefined', () => {
    expect(isValidDate(undefined)).eql(false);
  });

  it('should fail on null', () => {
    expect(isValidDate(null)).eql(false);
  });

  it('should fail on NaN', () => {
    expect(isValidDate('Hello')).eql(false);
  });

  it('should fail on too short', () => {
    expect(isValidDate('123')).eql(false);
  });

  it('should fail on too long', () => {
    expect(isValidDate('12345678901234')).eql(false);
  });

  it('should fail on hexidecimal notation', () => {
    expect(isValidDate('0xff')).eql(false);
  });

  it('should fail on scientific notation', () => {
    expect(isValidDate('1.23e10')).eql(false);
  });

  it('should pass on slashes in the right place', () => {
    expect(isValidDate('05/24/2018')).eql(true);
  });

  it('should fail on slashes in the wrong place', () => {
    expect(isValidDate('1/111/1111')).eql(false);
  });

  it('should pass on dashes in the right place', () => {
    expect(isValidDate('11-11-1999')).eql(true);
  });

  it('should fail on dashes in the wrong place', () => {
    expect(isValidDate('1-111-1111')).eql(false);
  });

  it('should fail on mixed separators', () => {
    expect(isValidDate('11/11-1999')).eql(false);
  });

  it('should pass 7 digits when altered expression is passed', () => {
    expect(isValidDate('1122020', /^((([1358]|1[02])([\/-]?)(0[1-9]|[12]\d|3[01])|(0[469]|11)([\/-]?)(0[1-9]|[12]\d|30)|02(\/?)((0?\d)|[12]\d))(\4|\7|\9)[12]\d{3})?$/)).eql(true);
  });
});
