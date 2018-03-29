/* global describe it document before */
import { setAriaCurrent, updatePageStyles } from '../src/assets/drizzle/scripts/pagination/default';
// import { setAriaLabel } from '../src/assets/drizzle/scripts/pagination/long';

const jsdom = require('jsdom');
const { expect } = require('chai');

const { JSDOM } = jsdom;
const dom = new JSDOM('<!DOCTYPE html><p>Hello world</p>');
global.document = dom.window.document;
global.window = dom.window;

describe('default pagination tests', () => {
  let newPageLink;
  let oldPageLink;
  let addItem;
  let removeItem;
  let classCSS;
  let nextLink;
  let prevLink;
  let currentLink;
  let defaultPag;

  before(() => {
    newPageLink = document.createElement('a');
    oldPageLink = document.createElement('a');
    addItem = document.createElement('a');
    removeItem = document.createElement('a');
    nextLink = document.createElement('a');
    prevLink = document.createElement('a');
    currentLink = document.createElement('a');
    defaultPag = document.createElement('nav');

    nextLink.setAttribute('data-sprk-pagination', 'prev');
    prevLink.setAttribute('data-sprk-pagination', 'prev');
    currentLink.setAttribute('aria-current', 'true');
    defaultPag.setAttribute('data-sprk-pagination', 'default');
    defaultPag.appendChild(prevLink);
    defaultPag.appendChild(currentLink);
    defaultPag.appendChild(nextLink);
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
});

// describe('long pagination tests', () => {
//   it('should have tests written', () => {
//     expect(1).eql(2);
//   });
// });
