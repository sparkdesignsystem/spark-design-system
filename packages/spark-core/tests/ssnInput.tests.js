/* global document describe it */
import { expect } from 'chai';
import { formatSSN } from '../base/ssnInput';

describe('formatSSN tests', () => {
  it('should format the ssn in the XXX-XX-XXXX style', () => {
    const div = document.createElement('input');
    div.value = '123456789';
    expect(formatSSN(div.value)).eql('123-45-6789');
  });
});
