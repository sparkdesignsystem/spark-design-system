/* global document */
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
const defaultPag = document.querySelector('[data-sprk-pagination="default"]');

// Add aria-current attr to new page link, remove from old
export const setAriaCurrent = (newPagelink, oldPageLink) => {
  if (!newPagelink.hasAttribute('aria-current')) {
    newPagelink.setAttribute('aria-current', true);
  }
  if (oldPageLink.hasAttribute('aria-current')) {
    oldPageLink.removeAttribute('aria-current', true);
  }
};

// Add CSS class to new item and remove from old
export const updatePageStyles = (addItem, removeItem, classCSS) => {
  if (!addItem.classList.contains(classCSS)) {
    addItem.classList.add(classCSS);
  }
  if (removeItem.classList.contains(classCSS)) {
    removeItem.classList.remove(classCSS);
  }
};

// Default Pagination
if (defaultPag) {
  const defaultPagItems = defaultPag.querySelectorAll('[data-sprk-pagination="item"]');
  const [link1, link2, link3] = defaultPagItems;
  const next = defaultPag.querySelector('[data-sprk-pagination="next"]');
  const prev = defaultPag.querySelector('[data-sprk-pagination="prev"]');

  // Listen for page number link clicks
  defaultPagItems.forEach((item) => {
    item.addEventListener('click', (event) => {
      const currentItemNum = parseInt(item.textContent, 10); // Item that was clicked
      const currentPage = defaultPag.querySelector('[aria-current="true"]');
      const currentPageNum = parseInt(currentPage.textContent, 10);
      event.preventDefault();

      // If link clicked is not currenlty selected link
      if (currentItemNum !== currentPageNum) {
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
      }
    });
  });

  prev.addEventListener('click', (event) => {
    const currentPage = defaultPag.querySelector('[aria-current="true"]');
    const currentPageNum = parseInt(currentPage.textContent, 10);

    event.preventDefault();
    if (currentPageNum <= 3) {
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
    }
  });

  next.addEventListener('click', (event) => {
    const currentPage = defaultPag.querySelector('[aria-current="true"]');
    const currentPageNum = parseInt(currentPage.textContent, 10);

    event.preventDefault();

    if (currentPageNum <= 3) {
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
    }
  });
}
