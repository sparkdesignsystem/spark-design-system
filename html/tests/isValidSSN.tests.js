/* global describe it */

/*
 * These tests are for testing the regex provided in isValidSSN,
 * although in practice, the regex is
 * assigned to the pattern attribute in the markup.
 */
import isValidSSN from '../utilities/validation/isValidSSN';

describe('isValidSSN tests', () => {
  it('should pass on a valid ssn', () => {
    expect(isValidSSN('123456789')).toBe(true);
  });

  it('should pass on empty', () => {
    expect(isValidSSN('')).toBe(true);
  });

  it('should fail on undefined', () => {
    expect(isValidSSN(undefined)).toBe(false);
  });

  it('should fail on null', () => {
    expect(isValidSSN(null)).toBe(false);
  });

  it('should fail on NaN', () => {
    expect(isValidSSN('Hello')).toBe(false);
  });

  it('should fail on too short', () => {
    expect(isValidSSN('123')).toBe(false);
  });

  it('should fail on too long', () => {
    expect(isValidSSN('12345678901234')).toBe(false);
  });

  it('should fail on hexidecimal notation', () => {
    expect(isValidSSN('0xff')).toBe(false);
  });

  it('should fail on scientific notation', () => {
    expect(isValidSSN('1.23e10')).toBe(false);
  });

  it('should fail on mismatch separators', () => {
    expect(isValidSSN('333-33 3333')).toBe(false);
  });

  it('should pass with dashes', () => {
    expect(isValidSSN('333-33-3333')).toBe(true);
  });
});
