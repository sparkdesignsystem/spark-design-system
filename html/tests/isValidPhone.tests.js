/* global describe it */

/*
 * These tests are for testing the regex provided in isValidPhone,
 * although in practice, the regex is assigned to the pattern attribute
 *  in the markup.
 */
import isValidPhone from '../utilities/validation/isValidPhone';

describe('isValidPhone tests', () => {
  it('should pass on a valid Phone', () => {
    expect(isValidPhone('1234567890')).toBe(true);
  });

  it('should pass on empty', () => {
    expect(isValidPhone('')).toBe(true);
  });

  it('should fail on undefined', () => {
    expect(isValidPhone(undefined)).toBe(false);
  });

  it('should fail on null', () => {
    expect(isValidPhone(null)).toBe(false);
  });

  it('should fail on NaN', () => {
    expect(isValidPhone('Hello')).toBe(false);
  });

  it('should fail on too short', () => {
    expect(isValidPhone('123')).toBe(false);
  });

  it('should fail on too long', () => {
    expect(isValidPhone('12345678901234')).toBe(false);
  });

  it('should fail on hexidecimal notation', () => {
    expect(isValidPhone('0xff')).toBe(false);
  });

  it('should fail on scientific notation', () => {
    expect(isValidPhone('1.23e10')).toBe(false);
  });

  it('should fail on missing paren', () => {
    expect(isValidPhone('(1234567890')).toBe(false);
  });

  it('should pass on missing dash', () => {
    expect(isValidPhone('(123) 4567890')).toBe(true);
  });

  it('should pass on missing space', () => {
    expect(isValidPhone('(123)4567890')).toBe(true);
  });
});
