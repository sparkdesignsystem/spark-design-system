/* global document describe beforeEach it */
import { expect } from 'chai';
import sinon from 'sinon';

import {
  hugeInput,
  bindUIEventsHugeInput,
  bindUIEvents,
} from '../base/hugeInput';

describe('hugeInput tests', () => {
  let input;
  let inputNew;

  beforeEach(() => {
    input = document.createElement('input');
    input.setAttribute('data-sprk-input', 'hugeTextInput');
    inputNew = document.createElement('input');
    inputNew.setAttribute('data-sprk-input', 'huge');
    input.value = '';
    input.classList = '';
    sinon.spy(input, 'addEventListener');
    sinon.spy(document, 'querySelectorAll');
  });

  afterEach(() => {
    document.querySelectorAll.restore();
    input.addEventListener.restore();
  });

  it('should call getElements twice with the correct selector', () => {
    hugeInput();
    expect(document.querySelectorAll.getCall(0).args[0]).eql(
      '[data-sprk-input="hugeTextInput"]',
    );
    expect(document.querySelectorAll.getCall(1).args[0]).eql(
      '[data-sprk-input="huge"]',
    );
  });

  // it('should bind the given event to the old elements', () => {
  //   bindUIEvents();
  //   expect(input.addEventListener.getCall(0).args[0]).eql('input');
  // });

  // it('should bind the given event to the new elements', () => {
  //   bindUIEventsHugeInput();
  //   expect(input.addEventListener.getCall(0).args[0]).eql('input');
  // });
});
