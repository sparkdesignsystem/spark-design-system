/* global document describe it */
import { expect } from 'chai';
import { formatPhone } from '../base/phoneInput';

describe('formatPhone tests', () => {
  it('should format the Phone in the (XXX) XXX-XXXX style', () => {
    const div = document.createElement('input');
    div.value = '1234567890';
    expect(formatPhone(div.value)).eql('(123) 456-7890');
  });
});
