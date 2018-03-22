/* global document describe before it */
import setAriaLabel from '../components/pagination';

const jsdom = require('jsdom');
const { expect } = require('chai');

const { JSDOM } = jsdom;
const dom = new JSDOM('<!DOCTYPE html><p>Hello world</p>');
global.document = dom.window.document;

describe('setAriaLabel tests', () => {
  let navContainer;
  let listContainer;
  let listItemContainer;
  let listItemLink;

  before(() => {
    navContainer = document.createElement('nav');
    listContainer = document.createElement('ul');
    listItemContainer = document.createElement('li');
    listItemLink = document.createElement('a');

    navContainer.setAttribute('data-sprk-pagination', 'default');
    listContainer.classList.add('sprk-c-Pagination sprk-b-List sprk-b-List--bare');
    listItemContainer.classList.add('sprk-c-Pagination__item');
    listItemLink.classList.add('sprk-b-Link sprk-b-Link--standalone');
    listItemLink.setAttribute('data-sprk-pagination', 'item');

    navContainer.appendChild(listContainer);
    listContainer.appendChild(listItemContainer);
    listItemContainer.appendChild(listItemLink);
  });

  it('should add the correct aria labels to the page links', () => {
    setAriaLabel(listItemLink);
    expect(listItemLink.hasAttribute('aria-label')).eql('true');
  });
  it('should set the aria labels to match the link text', () => {
    setAriaLabel(listItemLink);
    expect(listItemLink.getAttribute('aria-label')).eql(listItemLink.textContent);
  });
});
