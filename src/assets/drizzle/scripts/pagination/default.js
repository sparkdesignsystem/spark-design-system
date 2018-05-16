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
import getElements from '../../../../../packages/spark-core/utilities/getElements';

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

const handleDefaultPagItemClick = (currentItemNum, item, currentPage, prev, next) => {
  if (currentItemNum === 1) {
    updatePageStyles(
      item.parentElement,
      currentPage.parentElement,
      'sprk-c-Pagination__item--current',
    );
    setAriaCurrent(item, currentPage);
    updatePageStyles(prev, next, 'sprk-b-Link--disabled');
  } else if (currentItemNum === 2) {
    updatePageStyles(
      item.parentElement,
      currentPage.parentElement,
      'sprk-c-Pagination__item--current',
    );
    setAriaCurrent(item, currentPage);
    // Enable both prev/links since we are on middle link
    prev.classList.remove('sprk-b-Link--disabled');
    next.classList.remove('sprk-b-Link--disabled');
  } else if (currentItemNum === 3) {
    updatePageStyles(
      item.parentElement,
      currentPage.parentElement,
      'sprk-c-Pagination__item--current',
    );
    setAriaCurrent(item, currentPage);
    updatePageStyles(next, prev, 'sprk-b-Link--disabled');
  }
};

const handleDefaultPagPrevClick = (currentPageNum, link1, link2, currentPage, prev, next) => {
  // Prevent ever going to page 0
  if (currentPageNum === 1) return;
  // Update DOM CSS and add aria-current to new link
  if (currentPageNum === 2) {
    updatePageStyles(
      link1.parentElement,
      currentPage.parentElement,
      'sprk-c-Pagination__item--current',
    );
    setAriaCurrent(link1, currentPage);
    prev.classList.add('sprk-b-Link--disabled');
  } else if (currentPageNum === 3) {
    updatePageStyles(
      link2.parentElement,
      currentPage.parentElement,
      'sprk-c-Pagination__item--current',
    );
    setAriaCurrent(link2, currentPage);
    // Disable next link since we are on last link
    next.classList.remove('sprk-b-Link--disabled');
  }
};

const handleDefaultPagNextClick = (currentPageNum, link2, link3, currentPage, prev, next) => {
  if (currentPageNum > 3) return;
  if (currentPageNum === 1) {
    updatePageStyles(
      link2.parentElement,
      currentPage.parentElement,
      'sprk-c-Pagination__item--current',
    );
    setAriaCurrent(link2, currentPage);
    prev.classList.remove('sprk-b-Link--disabled');
  } else if (currentPageNum === 2) {
    updatePageStyles(
      link3.parentElement,
      currentPage.parentElement,
      'sprk-c-Pagination__item--current',
    );
    setAriaCurrent(link3, currentPage);
    next.classList.add('sprk-b-Link--disabled');
  }
};

const paginationDefault = () => {
  getElements('[data-sprk-pagination="default"]', (element) => {
    const defaultPagItems = element.querySelectorAll('[data-sprk-pagination="item"]');
    const [link1, link2, link3] = defaultPagItems;
    const next = element.querySelector('[data-sprk-pagination="next"]');
    const prev = element.querySelector('[data-sprk-pagination="prev"]');

    // Listen for page number link clicks
    defaultPagItems.forEach((item) => {
      item.addEventListener('click', (event) => {
        // Number of the new page that was clicked
        const currentItemNum = parseInt(item.textContent, 10);
        // The current page when the new page was clicked
        const currentPage = element.querySelector('[aria-current="true"]');
        // Current page number when the new page was clicked
        const currentPageNum = parseInt(currentPage.textContent, 10);
        event.preventDefault();
        // If current link is clicked again then do nothing
        if (currentItemNum === currentPageNum) return;
        handleDefaultPagItemClick(currentItemNum, item, currentPage, prev, next);
      });
    });

    prev.addEventListener('click', (event) => {
      const currentPage = element.querySelector('[aria-current="true"]');
      const currentPageNum = parseInt(currentPage.textContent, 10);
      event.preventDefault();
      handleDefaultPagPrevClick(currentPageNum, link1, link2, currentPage, prev, next);
    });

    next.addEventListener('click', (event) => {
      // The current page when the new page was clicked
      const currentPage = element.querySelector('[aria-current="true"]');
      // Current page number when the new page was clicked
      const currentPageNum = parseInt(currentPage.textContent, 10);
      event.preventDefault();
      handleDefaultPagNextClick(currentPageNum, link2, link3, currentPage, prev, next);
    });
  });
};

export {
  setAriaCurrent,
  updatePageStyles,
  paginationDefault,
  handleDefaultPagItemClick,
  handleDefaultPagNextClick,
  handleDefaultPagPrevClick,
};
