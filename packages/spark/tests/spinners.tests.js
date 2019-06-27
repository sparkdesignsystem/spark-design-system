/* global window document beforeEach afterEach describe it */
import sinon from 'sinon';
import { expect } from 'chai';
import {
  spinners,
  getSpinnerClasses,
  setSpinning,
  cancelSpinning,
} from '../components/spinners';

describe('spinners init', () => {
  afterEach(() => {
    document.querySelectorAll.restore();
  });

  it('should call getElements once with the correct selector', () => {
    sinon.spy(document, 'querySelectorAll');
    spinners();
    expect(document.querySelectorAll.getCall(0).args[0]).eql('[data-sprk-spinner="click"]');
  });
});

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

describe('spinners UI tests', () => {
  let spinnerContainer;
  let event;

  beforeEach(() => {
    spinnerContainer = document.createElement('button');
    spinnerContainer.setAttribute('data-sprk-spinner', 'click');
    spinnerContainer.textContent = 'Submit';
    sinon.spy(spinnerContainer, 'addEventListener');
    sinon.spy(spinnerContainer, 'setAttribute');
    document.body.append(spinnerContainer);
    spinners();
  });

  afterEach(() => {
    document.body.innerHTML = '';
    spinnerContainer.addEventListener.restore();
    spinnerContainer.setAttribute.restore();
  });

  it('should attach a click handler to the spinner container', () => {
    expect(spinnerContainer.addEventListener.calledOnce).eql(true);
    expect(spinnerContainer.addEventListener.getCall(0).args[0]).eql('click');
  });

  it('should start the spinning if its clicked', () => {
    spinnerContainer.click();
    expect(spinnerContainer.querySelector('div').classList.contains('sprk-c-Spinner--circle')).eql(true);
  });

  it('should remove spinners if the sprk-cancel-spinners event is triggered on window', () => {
    spinnerContainer.click();
    expect(spinnerContainer.querySelector('div').classList.contains('sprk-c-Spinner--circle')).eql(true);
    event = new window.Event('sprk-cancel-spinners');
    window.dispatchEvent(event);
    expect(spinnerContainer.querySelector('div')).eql(null);
  });

  it('should use no text when removing spinners if the sprk-cancel-spinners event is triggered on window and there was no text saved', () => {
    spinnerContainer.click();
    spinnerContainer.removeAttribute('data-sprk-spinner-text');
    expect(spinnerContainer.querySelector('div').classList.contains('sprk-c-Spinner--circle')).eql(true);
    event = new window.Event('sprk-cancel-spinners');
    window.dispatchEvent(event);
    expect(spinnerContainer.querySelector('div')).eql(null);
    expect(spinnerContainer.textContent).eql('');
  });

  it('should not try to start spinning something thats already spinning', () => {
    spinnerContainer.click();
    expect(spinnerContainer.setAttribute.calledThrice).eql(true);
    expect(spinnerContainer.querySelector('div').classList.contains('sprk-c-Spinner--circle')).eql(true);
    spinnerContainer.click();
    expect(spinnerContainer.setAttribute.getCalls().length).eql(3);
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
