/* global document beforeEach describe it */
import { expect } from 'chai';
import {
  getSpinnerClasses,
  setSpinning,
  cancelSpinning,
} from '../components/spinners';

describe('getSpinnerClasses tests', () => {
  it('should return the two base spinner classes with no options', () => {
    const expected = 'sprk-c-Spinner sprk-c-Spinner--circle';
    expect(getSpinnerClasses({})).eql(expected);
  });

  it('should add the large class if the option is set', () => {
    const expected = 'sprk-c-Spinner sprk-c-Spinner--circle sprk-c-Spinner--large';
    expect(getSpinnerClasses({ size: 'large' })).eql(expected);
  });

  it('should add the dark class if the option is set', () => {
    const expected = 'sprk-c-Spinner sprk-c-Spinner--circle sprk-c-Spinner--dark';
    expect(getSpinnerClasses({ lightness: 'dark' })).eql(expected);
  });
});

describe('setSpinning tests', () => {
  let spinnerContainer;

  beforeEach(() => {
    spinnerContainer = document.createElement('button');
    spinnerContainer.textContent = 'Submit';
  });

  it('should replace the content with a spinner', () => {
    setSpinning(spinnerContainer, {});
    expect(spinnerContainer.firstChild.classList.contains('sprk-c-Spinner')).eql(true);
  });

  it('should set the original text to a data-sprk-spinner-text attr', () => {
    setSpinning(spinnerContainer, {});
    expect(spinnerContainer.getAttribute('data-sprk-spinner-text') === 'Submit').eql(true);
  });

  it('should set the data-sprk-has-spinner attr to true', () => {
    setSpinning(spinnerContainer, {});
    expect(spinnerContainer.getAttribute('data-sprk-has-spinner') === 'true').eql(true);
  });

  it('should set the original width to the style attr', () => {
    setSpinning(spinnerContainer, {});
    const expected = 'width: 0px';
    expect(spinnerContainer.getAttribute('style')).eql(expected);
  });
});

describe('cancelSpinning tests', () => {
  let spinnerContainer;

  beforeEach(() => {
    spinnerContainer = document.createElement('button');
    spinnerContainer.textContent = 'Submit';
    setSpinning(spinnerContainer, {});
  });

  it('should remove the spinner', () => {
    cancelSpinning(spinnerContainer);
    expect(spinnerContainer.innerHTML).eql('Submit');
  });

  it('should replace the content with the contents of data-sprk-spinner-text', () => {
    cancelSpinning(spinnerContainer);
    expect(spinnerContainer.textContent).eql(spinnerContainer.getAttribute('data-sprk-spinner-text'));
  });

  it('should remove the data-sprk-has-spinner attr', () => {
    cancelSpinning(spinnerContainer, {});
    expect(spinnerContainer.getAttribute('data-sprk-has-spinner')).eql(null);
  });

  it('should remove the style attr', () => {
    cancelSpinning(spinnerContainer, {});
    expect(spinnerContainer.getAttribute('style')).eql(null);
  });
});
