/* global document beforeEach afterEach describe it window */
import sinon from 'sinon';
import { expect } from 'chai';
import { filters, filterList } from '../src/assets/drizzle/scripts/filter';

describe('filter init', () => {
  afterEach(() => {
    document.querySelectorAll.restore();
  });

  it('should call getElements once with the correct selector', () => {
    sinon.spy(document, 'querySelectorAll');
    filters();
    expect(document.querySelectorAll.getCall(0).args[0]).eql('[data-filter]');
  });
});

describe('filterList tests', () => {
  let filterInput;
  let list;
  let item1;
  let item2;
  let item3;
  let event;

  beforeEach(() => {
    filterInput = document.createElement('input');
    filterInput.setAttribute('data-filter', null);
    sinon.spy(filterInput, 'addEventListener');
    sinon.spy(document, 'querySelector');
    list = document.createElement('ul');
    sinon.spy(list, 'addEventListener');
    list.setAttribute('data-filtered', 'myList');
    item1 = document.createElement('a');
    item1.textContent = 'Color';
    item2 = document.createElement('a');
    item2.textContent = 'Space';
    item3 = document.createElement('a');
    item3.textContent = 'Type';
    list.appendChild(item1);
    list.appendChild(item2);
    list.appendChild(item3);

    document.body.appendChild(filterInput);
    document.body.appendChild(list);
  });

  afterEach(() => {
    document.body.innerHTML = '';
    document.querySelector.restore();
    list.addEventListener.restore();
    filterInput.addEventListener.restore();
  });

  it('should search the document for filtered elements', () => {
    filterList('myList', 'Color');
    expect(document.querySelector.getCall(0).args[0]).eql('[data-filtered="myList"]');
  });

  it('should hide all items if there is no active and no matches', () => {
    filterList('myList', 'Text');
    expect(item1.classList.contains('sprk-u-Display--none')).eql(true);
    expect(item2.classList.contains('sprk-u-Display--none')).eql(true);
    expect(item3.classList.contains('sprk-u-Display--none')).eql(true);
  });

  it('should show the match and hide the remaining items if there is no active and a match', () => {
    filterList('myList', 'Color');
    expect(item1.classList.contains('sprk-u-Display--none')).eql(false);
    expect(item2.classList.contains('sprk-u-Display--none')).eql(true);
    expect(item3.classList.contains('sprk-u-Display--none')).eql(true);
  });

  it('should show the match and the active item and hide the remaining items if theres a match', () => {
    item2.classList.add('is-active');
    filterList('myList', 'Color');
    expect(item1.classList.contains('sprk-u-Display--none')).eql(false);
    expect(item2.classList.contains('sprk-u-Display--none')).eql(false);
    expect(item3.classList.contains('sprk-u-Display--none')).eql(true);
  });

  it('should bind the input event', () => {
    filters();
    expect(filterInput.addEventListener.getCall(0).args[0]).eql('input');
  });

  it('should filter when input is triggered', () => {
    filterInput.value = 'Color';
    filters();
    event = new window.Event('input');
    filterInput.dispatchEvent(event);
    expect(item1.classList.contains('sprk-u-Display--none')).eql(false);
    expect(item2.classList.contains('sprk-u-Display--none')).eql(true);
    expect(item3.classList.contains('sprk-u-Display--none')).eql(true);
  });
});
