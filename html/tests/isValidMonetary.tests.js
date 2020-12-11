/* global describe it */

/*
 * These tests are for testing the regex provided in isValidMonetary,
 * although in practice, the regex is assigned to the pattern attribute in
 * the markup.
 */
import isValidMonetary from '../utilities/validation/isValidMonetary';

describe('isValidMonetary tests', () => {
  it('should pass on a valid ssn', () => {
    expect(isValidMonetary('123456789')).toBe(true);
  });

  it('should pass on empty', () => {
    expect(isValidMonetary('')).toBe(true);
  });

  it('should fail on undefined', () => {
    expect(isValidMonetary(undefined)).toBe(false);
  });

  it('should fail on null', () => {
    expect(isValidMonetary(null)).toBe(false);
  });

  it('should fail on NaN', () => {
    expect(isValidMonetary('Hello')).toBe(false);
  });

  it('should pass on no commas, no change', () => {
    expect(isValidMonetary('12345')).toBe(true);
  });

  it('should pass on 1 comma, no change', () => {
    expect(isValidMonetary('1,234')).toBe(true);
  });

  it('should fail on hexidecimal notation', () => {
    expect(isValidMonetary('0xff')).toBe(false);
  });

  it('should fail on scientific notation', () => {
    expect(isValidMonetary('1.23e10')).toBe(false);
  });

  it('should pass on 2 commas, no change', () => {
    expect(isValidMonetary('1,234,567')).toBe(true);
  });

  it('should pass on 3 commas, no change', () => {
    expect(isValidMonetary('1,234,567,789')).toBe(true);
  });

  it('should pass on no commas, 2 digit change', () => {
    expect(isValidMonetary('123.00')).toBe(true);
  });

  it('should pass on no commas, 1 digit change', () => {
    expect(isValidMonetary('123.0')).toBe(true);
  });

  it('should pass one comma, 2 digit change', () => {
    expect(isValidMonetary('1,234.00')).toBe(true);
  });

  it('should pass two commas, 2 digit change', () => {
    expect(isValidMonetary('1,234,234.00')).toBe(true);
  });

  it('should pass one comma, 1 digit change', () => {
    expect(isValidMonetary('1,234.0')).toBe(true);
  });

  it('should fail four leading digits, three commas, 2 digit change', () => {
    expect(isValidMonetary('1234,123,123,123.00')).toBe(false);
  });

  it(`should fail four digits in a segment, 
      three commas, 2 digit change`, () => {
    expect(isValidMonetary('1,2345,123,123.00')).toBe(false);
  });

  it('should pass three digit change', () => {
    expect(isValidMonetary('1.123')).toBe(true);
  });

  it('should fail trailing .', () => {
    expect(isValidMonetary('123.')).toBe(false);
  });

  it('should pass leading 0', () => {
    expect(isValidMonetary('0.12')).toBe(true);
  });
});
