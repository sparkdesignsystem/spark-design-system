/**
 *  Long Pagination Documentation Demo JS
 *  Assume only one type of
 *  each pagination version on page.
 *
 * data-sprk-pagination="long"
 * This identifies a long pagination component.
 *
 * data-sprk-pagination="item"
 * This identifies an item in the pagination components.
 *
 * data-sprk-pagination="next" and data-sprk-pagination="prev"
 * These identify the previous and next links in the pagination components.
 */
import getElements from '../../../../../packages/spark-core/utilities/getElements';
import { updatePageStyles } from './default';
import { setAriaLabel } from '../../../../../packages/spark-core/components/pagination';

const goBackOne = (currentPageNum) => {
  let updatedPageNum;
  // Prevent having a page 0 scenario
  if (currentPageNum > 1) {
    updatedPageNum = currentPageNum - 1;
  } else {
    updatedPageNum = currentPageNum;
  }
  return updatedPageNum;
};

const goForwardOne = (currentPageNum) => {
  const updatedPageNum = currentPageNum + 1;
  return updatedPageNum;
};

const handleLongPagItemClick = (currentPage, dots, longPagItems, prev, next, item) => {
  // Page number of the new page that was clicked
  const newPageNum = parseInt(item.textContent, 10);
  // Page number of the current page before new page was clicked
  const currentPageNum = parseInt(currentPage.textContent, 10);
  const [link1, link2, link3] = longPagItems;
  const maxPageNum = parseInt(link3.textContent, 10);

  // Make sure the new link clicked is not the same as current link
  if (newPageNum === currentPageNum) return;

  if (newPageNum === 1) {
    // Hide 1st set of dots, make sure 2nd set is shown
    updatePageStyles(dots[0], dots[1], 'drizzle-u-Display--none');
    // Hide 1st link and make sure last is shown
    updatePageStyles(link1.parentElement, link3.parentElement, 'drizzle-u-Display--none');
    // Disable Prev link and show Next link
    updatePageStyles(prev, next, 'sprk-b-Link--disabled');
    // Update link number to new number
    link2.textContent = link1.textContent;
  } else if (newPageNum === maxPageNum) {
    // Hide last set of dots, make sure 1st set is shown
    updatePageStyles(dots[1], dots[0], 'drizzle-u-Display--none');
    // Hide last link and make sure first is shown
    updatePageStyles(link3.parentElement, link1.parentElement, 'drizzle-u-Display--none');
    // Disable Next link since we are on last link
    updatePageStyles(next, prev, 'sprk-b-Link--disabled');
    // Update link number to new number
    link2.textContent = maxPageNum;
  }
};

const handleLongPagPrevClick = (dots, longPagItems, prev, next, longPag) => {
  const maxPageNum = parseInt(longPagItems[2].textContent, 10);
  // Page container of the current page before new page was clicked
  const currentPage = longPag.querySelector('[aria-current="true"]');
  // Page number of the current page before new page was clicked
  const currentPageNum = parseInt(currentPage.textContent, 10);

  // Simple check for 0 page scenario
  if (currentPageNum < 1) return;

  if (currentPageNum === 2) {
    // Hide the 1st set of dots
    dots[0].classList.add('drizzle-u-Display--none');
    // Hide the 1st link
    longPagItems[0].parentElement.classList.add('drizzle-u-Display--none');
    // Disable prev link since we can't go back any farther than 1st link
    prev.classList.add('sprk-b-Link--disabled');
  } else if (currentPageNum === 3) {
    // We go back to two link layout when number is < 3
    dots[0].classList.add('drizzle-u-Display--none');
  } else if (currentPageNum === maxPageNum) {
    // Show last link number
    longPagItems[2].parentElement.classList.remove('drizzle-u-Display--none');
    // Enable the Next link since we are no longer on last link
    next.classList.remove('sprk-b-Link--disabled');
  } else {
    // Show both sets of dots
    dots[0].classList.remove('drizzle-u-Display--none');
    dots[1].classList.remove('drizzle-u-Display--none');
  }
  // Update link number with new number
  currentPage.textContent = goBackOne(currentPageNum);
};

const handleLongPagNextClick = (dots, longPagItems, prev, next, longPag) => {
  // Page container of the current page before new page was clicked
  const currentPage = longPag.querySelector('[aria-current="true"]');
  const maxPageNum = parseInt(longPagItems[2].textContent, 10);
  // Page number of the current page before new page was clicked
  const currentPageNum = parseInt(currentPage.textContent, 10);

  // Do nothing if we are on the last page
  if (currentPageNum >= maxPageNum) return;

  if (currentPageNum === maxPageNum - 1) {
    longPagItems[2].parentElement.classList.add('drizzle-u-Display--none');
    dots[1].classList.add('drizzle-u-Display--none');
    next.classList.add('sprk-b-Link--disabled');
  } else if (currentPageNum === 1) {
    longPagItems[0].parentElement.classList.remove('drizzle-u-Display--none');
    prev.classList.remove('sprk-b-Link--disabled');
  } else if (currentPageNum === maxPageNum - 2) {
    dots[1].classList.add('drizzle-u-Display--none');
  } else {
    dots[0].classList.remove('drizzle-u-Display--none');
    dots[1].classList.remove('drizzle-u-Display--none');
    longPagItems[0].parentElement.classList.remove('drizzle-u-Display--none');
  }
  currentPage.textContent = goForwardOne(currentPageNum);
};

const paginationLong = () => {
  getElements('[data-sprk-pagination="long"]', (longPag) => {
    const dots = longPag.querySelectorAll('[data-sprk-pagination="dots"]');
    const longPagItems = longPag.querySelectorAll('[data-sprk-pagination="item"]');
    const next = longPag.querySelector('[data-sprk-pagination="next"]');
    const prev = longPag.querySelector('[data-sprk-pagination="prev"]');

    // Add click listener in case individual links are tapped/clicked
    longPagItems.forEach((item) => {
      item.addEventListener('click', (event) => {
        // Page container of the current page before new page was clicked
        const currentPage = longPag.querySelector('[aria-current="true"]');
        event.preventDefault();
        handleLongPagItemClick(currentPage, dots, longPagItems, prev, next, item);
        setAriaLabel(currentPage);
      });
    });

    // Add click listener to previous link
    prev.addEventListener('click', (event) => {
      event.preventDefault();
      handleLongPagPrevClick(dots, longPagItems, prev, next, longPag);
    });

    // Add listener to next link
    next.addEventListener('click', (event) => {
      event.preventDefault();
      handleLongPagNextClick(dots, longPagItems, prev, next, longPag);
    });
  });
};

export {
  paginationLong,
  goBackOne,
  goForwardOne,
  handleLongPagItemClick,
  handleLongPagPrevClick,
  handleLongPagNextClick,
};
