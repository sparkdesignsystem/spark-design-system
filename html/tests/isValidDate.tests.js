/* global describe it */

/*
 * These tests are for testing the regex provided in isValidDate, although in
 * practice, the regex is assigned to the pattern attribute in the markup.
 */
import isValidDate from '../utilities/validation/isValidDate';

describe('isValidDate tests', () => {
  it('should pass on 8 digits (plausible date)', () => {
    expect(isValidDate('12121978')).toBe(true);
  });

  it('should fail on 8 digits (implausible date)', () => {
    expect(isValidDate('12120978')).toBe(false);
  });

  it('should pass on empty', () => {
    expect(isValidDate('')).toBe(true);
  });

  it('should fail on undefined', () => {
    expect(isValidDate(undefined)).toBe(false);
  });

  it('should fail on null', () => {
    expect(isValidDate(null)).toBe(false);
  });

  it('should fail on NaN', () => {
    expect(isValidDate('Hello')).toBe(false);
  });

  it('should fail on too short', () => {
    expect(isValidDate('123')).toBe(false);
  });

  it('should fail on too long', () => {
    expect(isValidDate('12345678901234')).toBe(false);
  });

  it('should fail on hexidecimal notation', () => {
    expect(isValidDate('0xff')).toBe(false);
  });

  it('should fail on scientific notation', () => {
    expect(isValidDate('1.23e10')).toBe(false);
  });

  it('should pass on slashes in the right place', () => {
    expect(isValidDate('05/24/2018')).toBe(true);
  });

  it('should fail on slashes in the wrong place', () => {
    expect(isValidDate('1/111/1111')).toBe(false);
  });

  it('should pass on dashes in the right place', () => {
    expect(isValidDate('11-11-1999')).toBe(true);
  });

  it('should fail on dashes in the wrong place', () => {
    expect(isValidDate('1-111-1111')).toBe(false);
  });

  it('should fail on mixed separators', () => {
    expect(isValidDate('11/11-1999')).toBe(false);
  });
});
