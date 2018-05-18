/* global describe it document before */
import { expect } from 'chai';
import {
  setAriaCurrent,
  updatePageStyles,
  handleDefaultPagItemClick,
  handleDefaultPagNextClick,
  handleDefaultPagPrevClick,
} from '../src/assets/drizzle/scripts/pagination/default';
import {
  goForwardOne,
  goBackOne,
  handleLongPagItemClick,
  handleLongPagNextClick,
  handleLongPagPrevClick,
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

  before(() => {
    newPageLink = document.createElement('a');
    oldPageLink = document.createElement('a');
    addItem = document.createElement('a');
    removeItem = document.createElement('a');
    defaultPag = document.createElement('nav');
    prev = document.createElement('a');
    next = document.createElement('a');

    prevDiv = document.createElement('div');
    nextDiv = document.createElement('div');
    prevDiv.classList.add('sprk-c-Pagination__item');
    nextDiv.classList.add('sprk-c-Pagination__item');

    link1Div = document.createElement('div');
    link2Div = document.createElement('div');
    link3Div = document.createElement('div');

    link1Div.classList.add('sprk-c-Pagination__item');
    link2Div.classList.add('sprk-c-Pagination__item');
    link3Div.classList.add('sprk-c-Pagination__item');

    link1 = document.createElement('a');
    link2 = document.createElement('a');
    link3 = document.createElement('a');

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

    defaultPag.setAttribute('data-sprk-pagination', 'default');
    defaultPag.append(prevDiv);
    defaultPag.append(link1Div);
    defaultPag.append(link2Div);
    defaultPag.append(link3Div);
    defaultPag.append(nextDiv);
  });

  it('should add aria-current attribute to new page link and remove from old', () => {
    setAriaCurrent(newPageLink, oldPageLink);
    expect(newPageLink.hasAttribute('aria-current')).eql(true);
    expect(oldPageLink.hasAttribute('aria-current')).eql(false);
  });

  it('should add the CSS class to new item and remove from old', () => {
    classCSS = 'sprk-b-Link--disabled';
    updatePageStyles(addItem, removeItem, classCSS);
    expect(addItem.classList.contains(classCSS)).eql(true);
    expect(removeItem.classList.contains(classCSS)).eql(false);
  });

  it('should add the disabled link class to the next link when the last page is selected', () => {
    classCSS = 'sprk-b-Link--disabled';
    handleDefaultPagItemClick(link3, link2, prev, next);
    expect(next.classList.contains(classCSS)).eql(true);
  });

  it('should add the disabled link class to the prev link when the first page is selected', () => {
    classCSS = 'sprk-b-Link--disabled';
    handleDefaultPagItemClick(link1, link2, prev, next);
    expect(prev.classList.contains(classCSS)).eql(true);
  });

  it('should add the current item css class to the next page when the next link is clicked', () => {
    classCSS = 'sprk-c-Pagination__item--current';
    handleDefaultPagNextClick(link2, link3, link1, prev, next);
    expect(link2.parentElement.classList.contains(classCSS)).eql(true);
    expect(link1.parentElement.classList.contains(classCSS)).eql(false);
  });

  it('should add the current item css class to the previous page when the previous link is clicked', () => {
    classCSS = 'sprk-c-Pagination__item--current';
    handleDefaultPagPrevClick(link1, link2, link2, prev, next);
    expect(link1.parentElement.classList.contains(classCSS)).eql(true);
    expect(link2.parentElement.classList.contains(classCSS)).eql(false);
  });

  it('should not do anything if prev link is clicked when page number is 1', () => {
    link1.setAttribute('aria-current', 'true');
    link3.removeAttribute('aria-current');
    link2.removeAttribute('aria-current');
    link1.textContent = '1';
    handleDefaultPagPrevClick(link1, link2, link1, prev, next);
    expect(link1.textContent).eql('1');
  });

  it('should increse page number 2 to 3 when next is clicked', () => {
    link2.setAttribute('aria-current', 'true');
    link3.removeAttribute('aria-current');
    link1.removeAttribute('aria-current');
    link2.textContent = '2';
    classCSS = 'sprk-c-Pagination__item--current';
    handleDefaultPagPrevClick(link1, link2, link2, prev, next);
    expect(link3.textContent).eql('3');
    expect(link2.parentElement.classList.contains(classCSS)).eql(false);
    expect(link3.parentElement.classList.contains(classCSS)).eql(true);
  });

  it('should increse page number 1 to 2 when next is clicked', () => {
    link1.setAttribute('aria-current', 'true');
    link3.removeAttribute('aria-current');
    link2.removeAttribute('aria-current');
    link1.textContent = '1';
    link2.textContent = '2';
    link3.textContent = '3';
    classCSS = 'sprk-c-Pagination__item--current';
    handleDefaultPagNextClick(link2, link3, link1, prev, next);
    expect(link2.parentElement.classList.contains(classCSS)).eql(true);
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

  before(() => {
    longPag = document.createElement('nav');

    prev = document.createElement('a');
    next = document.createElement('a');

    prevDiv = document.createElement('div');
    nextDiv = document.createElement('div');

    dots1 = document.createElement('div');
    dots2 = document.createElement('div');

    dots1.setAttribute('data-sprk-pagination', 'dots');
    dots2.setAttribute('data-sprk-pagination', 'dots');

    prevDiv.classList.add('sprk-c-Pagination__item');
    nextDiv.classList.add('sprk-c-Pagination__item');

    link1Div = document.createElement('div');
    link2Div = document.createElement('div');
    link3Div = document.createElement('div');

    link1Div.classList.add('sprk-c-Pagination__item');
    link2Div.classList.add('sprk-c-Pagination__item');
    link3Div.classList.add('sprk-c-Pagination__item');

    link1 = document.createElement('a');
    link2 = document.createElement('a');
    link3 = document.createElement('a');

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

    longPag.setAttribute('data-sprk-pagination', 'long');
    longPag.append(prevDiv);
    longPag.append(link1Div);
    longPag.append(dots1);
    longPag.append(link2Div);
    longPag.append(dots2);
    longPag.append(link3Div);
    longPag.append(nextDiv);
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
    const dots = longPag.querySelectorAll('[data-sprk-pagination="dots"]');
    const longPagItems = longPag.querySelectorAll('[data-sprk-pagination="item"]');
    link2.setAttribute('aria-current', 'true');
    link3.removeAttribute('aria-current');
    link1.removeAttribute('aria-current');
    link2.textContent = '21';
    link3.textContent = '22';
    handleLongPagNextClick(dots, longPagItems, prev, next, longPag);
    expect(link3.parentElement.classList.contains('drizzle-u-Display--none')).eql(true);
  });

  it('should hide the last set of dots when on the page before the last page', () => {
    const dots = longPag.querySelectorAll('[data-sprk-pagination="dots"]');
    const longPagItems = longPag.querySelectorAll('[data-sprk-pagination="item"]');
    link2.setAttribute('aria-current', 'true');
    link3.removeAttribute('aria-current');
    link1.removeAttribute('aria-current');
    link2.textContent = '20';
    link3.textContent = '22';
    handleLongPagNextClick(dots, longPagItems, prev, next, longPag);
    expect(dots[1].classList.contains('drizzle-u-Display--none')).eql(true);
  });

  it('should hide the last set of dots when on the last page', () => {
    const dots = longPag.querySelectorAll('[data-sprk-pagination="dots"]');
    const longPagItems = longPag.querySelectorAll('[data-sprk-pagination="item"]');
    link2.setAttribute('aria-current', 'true');
    link3.removeAttribute('aria-current');
    link1.removeAttribute('aria-current');
    link2.textContent = '21';
    link3.textContent = '22';
    handleLongPagNextClick(dots, longPagItems, prev, next, longPag);
    expect(dots[1].classList.contains('drizzle-u-Display--none')).eql(true);
  });

  it('should hide the first set of dots when on page 2', () => {
    const dots = longPag.querySelectorAll('[data-sprk-pagination="dots"]');
    const longPagItems = longPag.querySelectorAll('[data-sprk-pagination="item"]');
    link2.setAttribute('aria-current', 'true');
    link3.removeAttribute('aria-current');
    link1.removeAttribute('aria-current');
    link2.textContent = '3';
    handleLongPagPrevClick(dots, longPagItems, prev, next, longPag);
    expect(dots[0].classList.contains('drizzle-u-Display--none')).eql(true);
  });

  it('should not increase page number if the current page is clicked again', () => {
    const dots = longPag.querySelectorAll('[data-sprk-pagination="dots"]');
    const longPagItems = longPag.querySelectorAll('[data-sprk-pagination="item"]');
    const link2Num = parseInt(link2.textContent, 10);
    handleLongPagItemClick(link2, dots, longPagItems, prev, next, link2);
    expect(parseInt(link2.textContent, 10)).eql(link2Num);
  });

  it('should increase page number if the next link is clicked', () => {
    const dots = longPag.querySelectorAll('[data-sprk-pagination="dots"]');
    const longPagItems = longPag.querySelectorAll('[data-sprk-pagination="item"]');
    link2.setAttribute('aria-current', 'true');
    link3.removeAttribute('aria-current');
    link1.removeAttribute('aria-current');
    link2.textContent = '2';
    handleLongPagNextClick(dots, longPagItems, prev, next, longPag);
    expect(parseInt(link2.textContent, 10)).eql(3);
  });

  it('should decrease page number if the prev link is clicked', () => {
    const dots = longPag.querySelectorAll('[data-sprk-pagination="dots"]');
    const longPagItems = longPag.querySelectorAll('[data-sprk-pagination="item"]');
    link2.setAttribute('aria-current', 'true');
    link3.removeAttribute('aria-current');
    link1.removeAttribute('aria-current');
    link2.textContent = '2';
    handleLongPagPrevClick(dots, longPagItems, prev, next, longPag);
    expect(parseInt(link2.textContent, 10)).eql(1);
  });

  it('should not decrease page number if the previous link is clicked and page number is 1', () => {
    const dots = longPag.querySelectorAll('[data-sprk-pagination="dots"]');
    const longPagItems = longPag.querySelectorAll('[data-sprk-pagination="item"]');
    link2.setAttribute('aria-current', 'true');
    link3.removeAttribute('aria-current');
    link1.removeAttribute('aria-current');
    link2.textContent = '1';
    handleLongPagPrevClick(dots, longPagItems, prev, next, longPag);
    expect(parseInt(link2.textContent, 10)).eql(1);
  });

  it('should not increase page if the next link is clicked and we are on the last page', () => {
    const dots = longPag.querySelectorAll('[data-sprk-pagination="dots"]');
    const longPagItems = longPag.querySelectorAll('[data-sprk-pagination="item"]');
    link3.setAttribute('aria-current', 'true');
    link2.removeAttribute('aria-current');
    link1.removeAttribute('aria-current');
    link3.textContent = '22';
    handleLongPagNextClick(dots, longPagItems, prev, next, longPag);
    expect(parseInt(link3.textContent, 10)).eql(22);
  });
});
