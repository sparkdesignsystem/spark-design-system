/* global describe it*/
import {isValidDate} from '../utilities/validation/isValidDate';

const expect = require('chai').expect;

describe('isValidDate tests', () => {
  it('should pass on 8 digits', () => {
    expect(isValidDate('12345678')).eql(true);
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
    expect(isValidDate('11/11/1111')).eql(true);
  });

  it('should fail on slashes in the wrong place', () => {
    expect(isValidDate('1/111/1111')).eql(false);
  });

  it('should pass on dashes in the right place', () => {
    expect(isValidDate('11-11-1111')).eql(true);
  });

  it('should fail on dashes in the wrong place', () => {
    expect(isValidDate('1-111-1111')).eql(false);
  });

  it('should pass on mixed slashes/dashes in the right place', () => {
    expect(isValidDate('11/11-1111')).eql(true);
  });
});

