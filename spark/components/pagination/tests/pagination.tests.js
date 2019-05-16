/* global document describe beforeEach afterEach it */
import sinon from 'sinon';
import { expect } from 'chai';
import { pagination, setItemLabels } from '../components/pagination';

describe('pagination init', () => {
  let container;
  let link;

  beforeEach(() => {
    container = document.createElement('div');
    link = document.createElement('a');
    link.setAttribute('data-sprk-pagination', 'item');
    container.appendChild(link);
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.querySelectorAll.restore();
    document.body.innerHTML = '';
  });

  it('should call getElements once with the correct selector', () => {
    sinon.spy(document, 'querySelectorAll');
    pagination();
    expect(document.querySelectorAll.getCall(1).args[0]).eql('a[data-sprk-pagination]');
  });
});

describe('setItemLabels tests', () => {
  let container;
  let link;

  beforeEach(() => {
    container = document.createElement('div');
    link = document.createElement('a');
    link.setAttribute('data-sprk-pagination', 'item');
    container.appendChild(link);
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.querySelectorAll.restore();
    document.body.innerHTML = '';
  });

  it('should call getElements once with the correct selector', () => {
    sinon.spy(document, 'querySelectorAll');
    setItemLabels();
    expect(document.querySelectorAll.getCall(0).args[0]).eql('[data-sprk-pagination="item"]');
  });
});
