/* global document describe beforeEach it */
import { expect } from 'chai';
import sinon from 'sinon';

const proxyquire = require('proxyquire');

describe('Highlight Board tests', () => {
  let element;
  let highlightBoard;
  let objectFitImagesStub;

  beforeEach(() => {
    element = document.createElement('img');
    element.classList.add('sprk-c-HighlightBoard__image');
    objectFitImagesStub = sinon.spy();
    highlightBoard = proxyquire('../highlight-board', {
      'object-fit-images': objectFitImagesStub,
    });
  });

  it('should set up', () => {
    highlightBoard.default();
    expect(objectFitImagesStub.calledOnce).eql(true);
  });
});
