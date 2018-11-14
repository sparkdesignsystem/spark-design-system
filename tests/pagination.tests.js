/* global describe it document beforeEach afterEach window */
import { expect } from 'chai';
import sinon from 'sinon';
import {
  setAriaCurrent,
  updatePageStyles,
  handleDefaultPagItemClick,
  handleDefaultPagNextClick,
  handleDefaultPagPrevClick,
  paginationDefault,
} from '../src/assets/drizzle/scripts/pagination/default';
import {
  goForwardOne,
  goBackOne,
  paginationLong,
} from '../src/assets/drizzle/scripts/pagination/long';

describe('Default Pagination tests', () => {
  let newPageLink;
  let oldPageLink;
  let addItem;
  let removeItem;
  let classCSS;
  let defaultPag;
  let link1;
  let link2;
  let link3;
  let link1Div;
  let link2Div;
  let link3Div;
  let next;
  let prev;
  let nextDiv;
  let prevDiv;
  let event;

  beforeEach(() => {
    newPageLink = document.createElement('a');
    oldPageLink = document.createElement('a');
    addItem = document.createElement('a');
    removeItem = document.createElement('a');
    defaultPag = document.createElement('div');
    prev = document.createElement('a');
    next = document.createElement('a');

    prevDiv = document.createElement('div');
    nextDiv = document.createElement('div');

    link1Div = document.createElement('div');
    link2Div = document.createElement('div');
    link3Div = document.createElement('div');

    link1 = document.createElement('a');
    link2 = document.createElement('a');
    link3 = document.createElement('a');

    link1.classList.add('sprk-c-Pagination__link');
    link2.classList.add('sprk-c-Pagination__link');
    link3.classList.add('sprk-c-Pagination__link--current');

    link1.textContent = '1';
    link2.textContent = '2';
    link3.textContent = '3';
    prev.textContent = 'Prev';
    next.textContent = 'Next';

    link2.setAttribute('aria-current', 'true');

    link1Div.append(link1);
    link2Div.append(link2);
    link3Div.append(link3);

    prev.setAttribute('data-sprk-pagination', 'prev');
    next.setAttribute('data-sprk-pagination', 'next');

    prevDiv.append(prev);
    nextDiv.append(next);

    link1.setAttribute('data-sprk-pagination', 'item');
    link2.setAttribute('data-sprk-pagination', 'item');
    link3.setAttribute('data-sprk-pagination', 'item');

    classCSS = 'sprk-c-Pagination__link--current';

    defaultPag.setAttribute('data-sprk-pagination', 'default');
    defaultPag.appendChild(prevDiv);
    defaultPag.appendChild(link1Div);
    defaultPag.appendChild(link2Div);
    defaultPag.appendChild(link3Div);
    defaultPag.appendChild(nextDiv);
    document.body.appendChild(defaultPag);

    sinon.spy(link1, 'addEventListener');
    sinon.spy(link2, 'addEventListener');
    sinon.spy(link3, 'addEventListener');
    sinon.spy(next, 'addEventListener');
    sinon.spy(prev, 'addEventListener');
  });

  afterEach(() => {
    link1.addEventListener.restore();
    link2.addEventListener.restore();
    link3.addEventListener.restore();
    next.addEventListener.restore();
    prev.addEventListener.restore();
    document.body.innerHTML = '';
  });

  it('should add aria-current attribute to new page link and remove from old', () => {
    setAriaCurrent(newPageLink, oldPageLink);
    expect(newPageLink.hasAttribute('aria-current')).eql(true);
    expect(oldPageLink.hasAttribute('aria-current')).eql(false);
  });

  it('should add the CSS class to new item and remove from old', () => {
    updatePageStyles(addItem, removeItem, 'sprk-b-Link--disabled');
    expect(addItem.classList.contains('sprk-b-Link--disabled')).eql(true);
    expect(removeItem.classList.contains('sprk-b-Link--disabled')).eql(false);
  });

  it('should not add the CSS class to new item if it already has it', () => {
    addItem.classList.add('sprk-b-Link--disabled');
    updatePageStyles(addItem, removeItem, 'sprk-b-Link--disabled');
    expect(addItem.classList.contains('sprk-b-Link--disabled')).eql(true);
    expect(removeItem.classList.contains('sprk-b-Link--disabled')).eql(false);
  });

  it('should not try to remove the CSS class on the old item if it does not have it', () => {
    removeItem.classList.remove('sprk-b-Link--disabled');
    updatePageStyles(addItem, removeItem, 'sprk-b-Link--disabled');
    expect(addItem.classList.contains('sprk-b-Link--disabled')).eql(true);
    expect(removeItem.classList.contains('sprk-b-Link--disabled')).eql(false);
  });

  it('should add the disabled link class to the next link when the third page is selected', () => {
    handleDefaultPagItemClick(link3, link2, prev, next);
    expect(next.classList.contains('sprk-b-Link--disabled')).eql(true);
  });

  it('should add the disabled link class to the prev link when the first page is selected', () => {
    handleDefaultPagItemClick(link1, link2, prev, next);
    expect(prev.classList.contains('sprk-b-Link--disabled')).eql(true);
  });

  it('should remove the disabled link class on the prev links when the second page is selected', () => {
    link1.setAttribute('aria-current', 'true');
    link3.removeAttribute('aria-current');
    link2.removeAttribute('aria-current');
    paginationDefault();
    prev.classList.add('sprk-b-Link--disabled');
    link2.click();
    expect(prev.classList.contains('sprk-b-Link--disabled')).eql(false);
    expect(link2.classList.contains(classCSS)).eql(true);
  });

  it('should add the current item css class to the next page', () => {
    handleDefaultPagNextClick(link2, link3, link1, prev, next);
    expect(link2.classList.contains(classCSS)).eql(true);
    expect(link1.classList.contains(classCSS)).eql(false);
  });

  it('should add the current item css class to the first link when it is clicked', () => {
    paginationDefault();
    event = new window.Event('click');
    link1.dispatchEvent(event);
    expect(link1.classList.contains(classCSS)).eql(true);
  });

  it('should add the current item css class to the previous page when the previous link is clicked', () => {
    handleDefaultPagPrevClick(link1, link2, link2, prev, next);
    expect(link1.classList.contains(classCSS)).eql(true);
    expect(link2.classList.contains(classCSS)).eql(false);
  });

  it('should not do anything if prev link is clicked when page number is 1', () => {
    link1.setAttribute('aria-current', 'true');
    link1.classList.add(classCSS);
    link2.classList.remove(classCSS);
    link3.removeAttribute('aria-current');
    link2.removeAttribute('aria-current');
    handleDefaultPagPrevClick(link1, link2, link1, prev, next);
    expect(link1.textContent).eql('1');
    expect(link1.classList.contains(classCSS)).eql(true);
  });

  it('should not do anything if next link is clicked when page number is 3', () => {
    link3.setAttribute('aria-current', 'true');
    link3.classList.add(classCSS);
    link2.classList.remove(classCSS);
    link1.removeAttribute('aria-current');
    link2.removeAttribute('aria-current');
    paginationDefault();
    event = new window.Event('click');
    next.dispatchEvent(event);
    expect(link3.classList.contains(classCSS)).eql(true);
  });

  it('should increse page number 2 to 3 when 2 is active and next is clicked', () => {
    paginationDefault();
    event = new window.Event('click');
    next.dispatchEvent(event);
    expect(link3.classList.contains(classCSS)).eql(true);
    expect(next.classList.contains('sprk-b-Link--disabled')).eql(true);
  });

  it('should increse page number 1 to 2 when 1 is active and next is clicked', () => {
    link1.setAttribute('aria-current', 'true');
    link1.classList.add(classCSS);
    link2.classList.remove(classCSS);
    link3.classList.remove(classCSS);
    link3.removeAttribute('aria-current');
    link2.removeAttribute('aria-current');
    paginationDefault();
    event = new window.Event('click');
    next.dispatchEvent(event);
    expect(link2.classList.contains(classCSS)).eql(true);
    expect(prev.classList.contains('sprk-b-Link--disabled')).eql(false);
    expect(next.classList.contains('sprk-b-Link--disabled')).eql(false);
  });

  it('should decrese page number 3 to 2 when 3 is active and previous is clicked', () => {
    link3.setAttribute('aria-current', 'true');
    link3.classList.add(classCSS);
    link2.classList.remove(classCSS);
    link1.classList.remove(classCSS);
    link1.removeAttribute('aria-current');
    link2.removeAttribute('aria-current');
    paginationDefault();
    event = new window.Event('click');
    prev.dispatchEvent(event);
    expect(link2.classList.contains(classCSS)).eql(true);
  });

  it('should decrese page number 2 to 1 when 2 is active and previous is clicked', () => {
    paginationDefault();
    event = new window.Event('click');
    prev.dispatchEvent(event);
    expect(link1.classList.contains(classCSS)).eql(true);
    expect(prev.classList.contains('sprk-b-Link--disabled')).eql(true);
  });

  it('should bind a click listener to link 1', () => {
    paginationDefault();
    expect(link1.addEventListener.getCall(0).args[0]).eql('click');
  });

  it('should bind a click listener to link 2', () => {
    paginationDefault();
    expect(link2.addEventListener.getCall(0).args[0]).eql('click');
  });

  it('should bind a click listener to link 3', () => {
    paginationDefault();
    expect(link3.addEventListener.getCall(0).args[0]).eql('click');
  });

  it('should bind a click listener to prev link', () => {
    paginationDefault();
    expect(prev.addEventListener.getCall(0).args[0]).eql('click');
  });

  it('should bind a click listener to next link', () => {
    paginationDefault();
    expect(next.addEventListener.getCall(0).args[0]).eql('click');
  });

  it('should not do anything if active link is clicked again', () => {
    link2.setAttribute('aria-current', 'true');
    link2.classList.add(classCSS);
    paginationDefault();
    event = new window.Event('click');
    link2.dispatchEvent(event);
    expect(link2.classList.contains(classCSS)).eql(true);
    expect(prev.classList.contains('sprk-b-Link--disabled')).eql(false);
    expect(next.classList.contains('sprk-b-Link--disabled')).eql(false);
  });
});

describe('Long Pagination tests', () => {
  let link1;
  let link2;
  let link3;
  let link1Div;
  let link2Div;
  let link3Div;
  let next;
  let prev;
  let nextDiv;
  let prevDiv;
  let longPag;
  let dots1;
  let dots2;

  beforeEach(() => {
    longPag = document.createElement('nav');

    prev = document.createElement('a');
    next = document.createElement('a');

    prevDiv = document.createElement('div');
    nextDiv = document.createElement('div');

    dots1 = document.createElement('div');
    dots2 = document.createElement('div');

    dots1.setAttribute('data-sprk-pagination', 'dots');
    dots2.setAttribute('data-sprk-pagination', 'dots');

    link1Div = document.createElement('div');
    link2Div = document.createElement('div');
    link3Div = document.createElement('div');

    link1 = document.createElement('a');
    link2 = document.createElement('a');
    link3 = document.createElement('a');

    link1.classList.add('sprk-c-Pagination__link');
    link2.classList.add('sprk-c-Pagination__link');
    link3.classList.add('sprk-c-Pagination__link');

    link1.textContent = '1';
    link2.textContent = '2';
    link3.textContent = '3';
    prev.textContent = 'Prev';
    next.textContent = 'Next';

    sinon.spy(link1, 'addEventListener');
    sinon.spy(link2, 'addEventListener');
    sinon.spy(link3, 'addEventListener');
    sinon.spy(next, 'addEventListener');
    sinon.spy(prev, 'addEventListener');

    link2.setAttribute('aria-current', 'true');

    link1Div.append(link1);
    link2Div.append(link2);
    link3Div.append(link3);

    prev.setAttribute('data-sprk-pagination', 'prev');
    next.setAttribute('data-sprk-pagination', 'next');

    prevDiv.append(prev);
    nextDiv.append(next);

    link1.setAttribute('data-sprk-pagination', 'item');
    link2.setAttribute('data-sprk-pagination', 'item');
    link3.setAttribute('data-sprk-pagination', 'item');

    longPag.setAttribute('data-sprk-pagination', 'long');
    longPag.append(prevDiv);
    longPag.append(link1Div);
    longPag.append(dots1);
    longPag.append(link2Div);
    longPag.append(dots2);
    longPag.append(link3Div);
    longPag.append(nextDiv);

    document.body.append(longPag);
  });

  afterEach(() => {
    link1.addEventListener.restore();
    link2.addEventListener.restore();
    link3.addEventListener.restore();
    next.addEventListener.restore();
    prev.addEventListener.restore();
    document.body.innerHTML = '';
  });

  it('should go back one page', () => {
    expect(goBackOne(3)).eql(2);
  });

  it('should not go back one page if page number is 1', () => {
    expect(goBackOne(1)).eql(1);
  });

  it('should go forward one page', () => {
    expect(goForwardOne(1)).eql(2);
  });

  it('should hide the last link container when on the last page', () => {
    paginationLong();
    link2.textContent = '21';
    link3.textContent = '22';
    next.click();
    expect(link3.parentElement.classList.contains('drizzle-u-Display--none')).eql(true);
  });

  it('should hide the last set of dots when on the page before the last page', () => {
    const dots = longPag.querySelectorAll('[data-sprk-pagination="dots"]');
    paginationLong();
    link2.textContent = '20';
    link3.textContent = '22';
    next.click();
    expect(dots[1].classList.contains('drizzle-u-Display--none')).eql(true);
  });

  it('should hide the last set of dots when on the last page', () => {
    const dots = longPag.querySelectorAll('[data-sprk-pagination="dots"]');
    paginationLong();
    link2.textContent = '21';
    link3.textContent = '22';
    next.click();
    expect(dots[1].classList.contains('drizzle-u-Display--none')).eql(true);
  });

  it('should show the dots when on the middle page and next clicked', () => {
    const dots = longPag.querySelectorAll('[data-sprk-pagination="dots"]');
    paginationLong();
    link2.textContent = '11';
    link3.textContent = '19';
    next.click();
    expect(dots[0].classList.contains('drizzle-u-Display--none')).eql(false);
    expect(dots[1].classList.contains('drizzle-u-Display--none')).eql(false);
  });

  it('should show the dots when on the middle page and previous clicked', () => {
    const dots = longPag.querySelectorAll('[data-sprk-pagination="dots"]');
    paginationLong();
    link2.textContent = '11';
    prev.click();
    expect(dots[0].classList.contains('drizzle-u-Display--none')).eql(false);
    expect(dots[1].classList.contains('drizzle-u-Display--none')).eql(false);
  });

  it('should show both dots when on page 2 and next is clicked', () => {
    const dots = longPag.querySelectorAll('[data-sprk-pagination="dots"]');
    paginationLong();
    link2.textContent = '6';
    link3.textContent = '19';
    next.click();
    expect(dots[0].classList.contains('drizzle-u-Display--none')).eql(false);
    expect(dots[1].classList.contains('drizzle-u-Display--none')).eql(false);
  });

  it('should show the dots when on the middle page and middle page is clicked', () => {
    const dots = longPag.querySelectorAll('[data-sprk-pagination="dots"]');
    paginationLong();
    link2.click();
    expect(dots[0].classList.contains('drizzle-u-Display--none')).eql(false);
    expect(dots[1].classList.contains('drizzle-u-Display--none')).eql(false);
  });

  it('should hide the first set of dots when moving to page 2', () => {
    const dots = longPag.querySelectorAll('[data-sprk-pagination="dots"]');
    paginationLong();
    link2.textContent = '3';
    prev.click();
    expect(dots[0].classList.contains('drizzle-u-Display--none')).eql(true);
  });

  it('should show the first link when on page 1 and next clicked', () => {
    paginationLong();
    link2.textContent = '1';
    next.click();
    expect(link1.classList.contains('drizzle-u-Display--none')).eql(false);
  });

  it('should show the last link when on the last page and previous is clicked', () => {
    paginationLong();
    link2.textContent = '3';
    prev.click();
    expect(link3.classList.contains('drizzle-u-Display--none')).eql(false);
  });

  it('should hide the first link when previous is clicked and on page 2', () => {
    const dots = longPag.querySelectorAll('[data-sprk-pagination="dots"]');
    paginationLong();
    link2.textContent = '2';
    prev.click();
    expect(dots[0].classList.contains('drizzle-u-Display--none')).eql(true);
  });

  it('should not increase page number if the current page is clicked again', () => {
    const link2Num = parseInt(link2.textContent, 10);
    paginationLong();
    link2.click();
    expect(parseInt(link2.textContent, 10)).eql(link2Num);
  });

  it('should increase page number if the next link is clicked', () => {
    paginationLong();
    next.click();
    expect(link2.textContent).eql('3');
  });

  it('should decrease page number if the prev link is clicked while on last page', () => {
    paginationLong();
    link2.textContent = '19';
    link3.textContent = '19';
    prev.click();
    expect(link2.textContent).eql('18');
  });

  it('should not decrease page number if the previous link is clicked and page number is 1', () => {
    paginationLong();
    link2.textContent = '1';
    prev.click();
    expect(link2.textContent).eql('1');
  });

  it('should not increase page if the next link is clicked and we are on the last page', () => {
    paginationLong();
    link2.textContent = '22';
    link3.textContent = '22';
    next.click();
    expect(link2.textContent).eql('22');
  });

  it('should bind a click listener to link 1', () => {
    paginationLong();
    expect(link1.addEventListener.getCall(0).args[0]).eql('click');
  });

  it('should bind a click listener to link 2', () => {
    paginationLong();
    expect(link2.addEventListener.getCall(0).args[0]).eql('click');
  });

  it('should bind a click listener to link 3', () => {
    paginationLong();
    expect(link3.addEventListener.getCall(0).args[0]).eql('click');
  });

  it('should bind a click listener to prev link', () => {
    paginationLong();
    expect(prev.addEventListener.getCall(0).args[0]).eql('click');
  });

  it('should bind a click listener to next link', () => {
    paginationLong();
    expect(next.addEventListener.getCall(0).args[0]).eql('click');
  });

  it('should show first link as number 1 if it is clicked', () => {
    paginationLong();
    link1.click();
    expect(link2.textContent).eql('1');
  });

  it('should show last link as number 3 if it is clicked', () => {
    paginationLong();
    link3.click();
    expect(link2.textContent).eql('3');
  });

  it('should show second link as number 2 if it is clicked', () => {
    paginationLong();
    link2.click();
    expect(link2.textContent).eql('2');
  });

  it('should not update page number if page is zero and previous is clicked', () => {
    paginationLong();
    link2.textContent = '0';
    prev.click();
    expect(link2.textContent).eql('0');
  });
});
