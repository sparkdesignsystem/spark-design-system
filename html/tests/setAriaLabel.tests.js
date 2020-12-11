/* global document describe beforeEach it */
import { setAriaLabel } from '../components/pagination';

describe('Pagination tests', () => {
  let navContainer;
  let uListContainer;
  let listItem;
  let pagLink;
  let longNavContainer;
  let longListContainer;
  let longListItem;
  let longPagLink;

  beforeEach(() => {
    navContainer = document.createElement('nav');
    uListContainer = document.createElement('ul');
    listItem = document.createElement('li');
    pagLink = document.createElement('a');

    longNavContainer = document.createElement('nav');
    longListContainer = document.createElement('ul');
    longListItem = document.createElement('li');
    longPagLink = document.createElement('a');

    navContainer.setAttribute('data-sprk-pagination', 'default');
    pagLink.setAttribute('data-sprk-pagination', 'item');
    pagLink.textContent = 2;
    listItem.appendChild(pagLink);
    uListContainer.appendChild(listItem);
    navContainer.appendChild(uListContainer);

    longNavContainer.setAttribute('data-sprk-pagination', 'long');
    longPagLink.setAttribute('data-sprk-pagination', 'item');
    longPagLink.textContent = 18;
    longListItem.appendChild(longPagLink);
    longListContainer.appendChild(longListItem);
    navContainer.appendChild(longListContainer);
  });

  it(
    'should add/set the aria label to match the link text in the default' +
      ' version',
    () => {
      setAriaLabel(pagLink);
      const pagNum = pagLink.textContent;
      const pagLabel = `Page ${pagNum}`;
      expect(pagLink.getAttribute('aria-label')).toEqual(pagLabel);
    },
  );

  it(
    'should add/set the aria label to match the link text in the long' +
      ' version',
    () => {
      setAriaLabel(longPagLink);
      const longPagNum = longPagLink.textContent;
      const longPagLabel = `Page ${longPagNum}`;
      expect(longPagLink.getAttribute('aria-label')).toEqual(longPagLabel);
    },
  );
});
