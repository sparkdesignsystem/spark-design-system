/* global document describe it */
import { expect } from 'chai';
import { formatDate } from '../base/dateInput';

describe('formatDate tests', () => {
  it('should format the date in the XX/XX/XXXX style', () => {
    const div = document.createElement('input');
    div.value = '12345678';
    expect(formatDate(div.value)).eql('12/34/5678');
  });
});
