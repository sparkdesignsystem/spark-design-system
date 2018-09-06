/* global window document beforeEach describe it */
import { expect } from 'chai';
import { selectInput } from '../base/selectInput';

describe('selectInput tests', () => {
  let select;
  beforeEach(() => {
    select = document.createElement('select');
    select.setAttribute('data-sprk-input', 'select');
    document.body.append(select);
  });

  it('should add or remove classes on focusin and blur', () => {
    selectInput();
    select.dispatchEvent(new window.Event('focusin'));
    expect(select.classList.contains('sprk-b-Select--focusin')).eql(true);
    select.dispatchEvent(new window.Event('blur'));
    expect(select.classList.contains('sprk-b-Select--focusin')).eql(false);
    expect(select.classList.contains('sprk-b-Select--focusout')).eql(true);
  });
});
