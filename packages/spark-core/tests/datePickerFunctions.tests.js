/* global document afterEach beforeEach describe it */
import { expect } from 'chai';

import { open, select } from '../utilities/datePickerFunctions';

describe('datePickerFunctions tests', () => {
  let input;
  let dp;
  beforeEach(() => {
    input = document.createElement('input');
    dp = document.createElement('div');
    dp.classList.add('dp');

    document.body.appendChild(input);
    document.body.appendChild(dp);
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('open should add a class to .dp depending on the offset', () => {
    open(input);
    expect(dp.classList.toString()).eql('dp dp-below-top');
  });

  it('select should dispatch an input and focus', () => {
    select(input);
    expect(document.activeElement).eql(input);
  });
});
