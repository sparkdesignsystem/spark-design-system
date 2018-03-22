/* global document describe before it */
import { setAriaLabel } from '../components/pagination';

const jsdom = require('jsdom');
const { expect } = require('chai');

const { JSDOM } = jsdom;
const dom = new JSDOM('<!DOCTYPE html><p>Hello world</p>');
global.document = dom.window.document;

describe('Pagination tests', () => {
  let navContainer;
  let uListContainer;
  let listItem;
  let pagLink;

  before(() => {
    navContainer = document.createElement('nav');
    uListContainer = document.createElement('ul');
    listItem = document.createElement('li');
    pagLink = document.createElement('a');

    navContainer.setAttribute('data-sprk-pagination', 'default');
    pagLink.setAttribute('data-sprk-pagination', 'item');
    pagLink.textContent = 22;
    listItem.appendChild(pagLink);
    uListContainer.appendChild(listItem);
    navContainer.appendChild(uListContainer);
  });

  it('should add/set the aria label to match the link text', () => {
    setAriaLabel(pagLink);

    const pagNum = pagLink.textContent;
    const pagLabel = `Page ${pagNum}`;

    expect(pagLink.getAttribute('aria-label')).eql(pagLabel);
  });
});
