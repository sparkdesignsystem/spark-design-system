/* global document describe beforeEach afterEach it */
import { expect } from 'chai';
import sinon from 'sinon';
import toggleClassWithValue from '../utilities/toggleClassWithValue';

describe('toggleClassWithValue tests', () => {
  let input;
  let event;

  beforeEach(() => {
    input = document.createElement('input');
    input.value = '';
    input.classList = '';
    sinon.spy(input, 'addEventListener');
  });

  afterEach(() => {
    input.addEventListener.restore();
  });

  it('should bind the given event to the element', () => {
    toggleClassWithValue(input, 'test-class', 'input');
    expect(input.addEventListener.getCall(0).args[0]).eql('input');
  });

  it('should add a class if the element has a value on event', () => {
    toggleClassWithValue(input, 'test-class');
    input.value = 'has-value';
    event = new window.Event('input');
    input.dispatchEvent(event);
    expect(input.classList.contains('test-class')).eql(true);
  });

  it('it should remove a class if there is no value on event', () => {
    toggleClassWithValue(input, 'test-class');
    event = new window.Event('input');
    input.dispatchEvent(event);
    expect(input.classList.contains('test-class')).eql(false);
  });
});
