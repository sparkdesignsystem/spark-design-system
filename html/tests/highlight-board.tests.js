/* global document describe beforeEach it */
jest.mock('object-fit-images', () => mockObjectFitImagesStub);

describe('Highlight Board tests', () => {
  let element;
  const mockObjectFitImagesStub = sinon.spy();

  const { highlightBoard } = require('../components/highlight-board');

  beforeEach(() => {
    element = document.createElement('img');
    element.classList.add('sprk-c-HighlightBoard__image');
  });

  it('should set up', () => {
    highlightBoard();
    expect(mockObjectFitImagesStub.calledOnce).toBe(true);
  });
});
