/**
 *  Pagination Documentation Demo JS
 *  Assume only one type of
 *  each pagination version on page.
 *
 * data-sprk-pagination="default"
 * This identifies a default pagination component.
 *
 * data-sprk-pagination="item"
 * This identifies an item in the pagination components.
 *
 * data-sprk-pagination="next" and data-sprk-pagination="prev"
 * These identify the previous and next links in the pagination components.
 */
import { getElements } from '../../../../../packages/spark-core';

// Add aria-current attr to new page link, remove from old
const setAriaCurrent = (newPageLink, oldPageLink) => {
  if (!newPageLink.hasAttribute('aria-current')) {
    newPageLink.setAttribute('aria-current', true);
  }
  if (oldPageLink.hasAttribute('aria-current')) {
    oldPageLink.removeAttribute('aria-current', true);
  }
};

// Add CSS class to new item and remove from old
const updatePageStyles = (addItem, removeItem, classCSS) => {
  if (!addItem.classList.contains(classCSS)) {
    addItem.classList.add(classCSS);
  }
  if (removeItem.classList.contains(classCSS)) {
    removeItem.classList.remove(classCSS);
  }
};

const handleDefaultPagItemClick = (item, currentPage, prev, next) => {
  // Number of the new page that was clicked
  const currentItemNum = parseInt(item.textContent, 10);

  updatePageStyles(item, currentPage, 'sprk-c-Pagination__link--current');

  setAriaCurrent(item, currentPage);

  if (currentItemNum === 1) {
    updatePageStyles(prev, next, 'sprk-b-Link--disabled');
  } else if (currentItemNum === 2) {
    prev.classList.remove('sprk-b-Link--disabled');
    next.classList.remove('sprk-b-Link--disabled');
  } else {
    updatePageStyles(next, prev, 'sprk-b-Link--disabled');
  }
};

const handleDefaultPagPrevClick = (link1, link2, currentPage, prev, next) => {
  const currentPageNum = parseInt(currentPage.textContent, 10);

  // Prevent ever going to page 0
  if (currentPageNum === 1) return;
  // If we are on page 2 and want to go back to 1
  if (currentPageNum === 2) {
    updatePageStyles(link1, currentPage, 'sprk-c-Pagination__link--current');
    setAriaCurrent(link1, currentPage);
    prev.classList.add('sprk-b-Link--disabled');
  } else {
    // If we are on page 3 and want to go back to 2
    updatePageStyles(
      link2, // Add styles to new page 2
      currentPage, // Remove from old page
      'sprk-c-Pagination__link--current',
    );
    setAriaCurrent(link2, currentPage);
    // Disable next link since we are on last link
    next.classList.remove('sprk-b-Link--disabled');
  }
};

const handleDefaultPagNextClick = (link2, link3, currentPage, prev, next) => {
  // Current page number when the new page was clicked
  const currentPageNum = parseInt(currentPage.textContent, 10);
  // Check if we are on page 3 or more and exit since we cant move forward
  if (currentPageNum >= 3) return;
  // If we are on page 1 and want to go to 2
  if (currentPageNum === 1) {
    updatePageStyles(link2, currentPage, 'sprk-c-Pagination__link--current');
    setAriaCurrent(link2, currentPage);
    prev.classList.remove('sprk-b-Link--disabled');
  } else {
    // If we are on page 2 and want to go to 3
    updatePageStyles(link3, currentPage, 'sprk-c-Pagination__link--current');
    setAriaCurrent(link3, currentPage);
    next.classList.add('sprk-b-Link--disabled');
  }
};

const bindUIElements = (element) => {
  const defaultPagItems = element.querySelectorAll('[data-sprk-pagination="item"]');
  const [link1, link2, link3] = defaultPagItems;
  const next = element.querySelector('[data-sprk-pagination="next"]');
  const prev = element.querySelector('[data-sprk-pagination="prev"]');
  // Listen for page number link clicks
  defaultPagItems.forEach((item) => {
    item.addEventListener('click', (event) => {
      // The current page when the new page was clicked
      const currentPage = element.querySelector('[aria-current="true"]');

      event.preventDefault();
      // If current link is clicked again then do nothing
      if (parseInt(item.textContent, 10) === parseInt(currentPage.textContent, 10)) return;
      handleDefaultPagItemClick(item, currentPage, prev, next);
    });
  });

  prev.addEventListener('click', (event) => {
    const currentPage = element.querySelector('[aria-current="true"]');
    event.preventDefault();
    handleDefaultPagPrevClick(link1, link2, currentPage, prev, next);
  });

  next.addEventListener('click', (event) => {
    // The current page when the new page was clicked
    const currentPage = element.querySelector('[aria-current="true"]');
    event.preventDefault();
    handleDefaultPagNextClick(link2, link3, currentPage, prev, next);
  });
};

const paginationDefault = () => {
  getElements('[data-sprk-pagination="default"]', bindUIElements);
};

export {
  setAriaCurrent,
  updatePageStyles,
  paginationDefault,
  handleDefaultPagItemClick,
  handleDefaultPagNextClick,
  handleDefaultPagPrevClick,
  bindUIElements,
};
