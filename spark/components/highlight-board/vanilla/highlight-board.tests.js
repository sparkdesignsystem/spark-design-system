/* global document describe beforeEach it */
import { expect } from 'chai';
import sinon from 'sinon';

const proxyquire = require('proxyquire');

describe('Highlight Board tests', () => {
  let element;
  const objectFitImagesStub = sinon.spy();

  const { highlightBoard } = proxyquire('./highlight-board', {
    'object-fit-images': objectFitImagesStub,
  });

  beforeEach(() => {
    element = document.createElement('img');
    element.classList.add('sprk-c-HighlightBoard__image');
  });

  it('should set up', () => {
    highlightBoard();
    expect(objectFitImagesStub.calledOnce).eql(true);
  });
});
