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
  const updatedPageNum = currentPageNum - 1;
  return updatedPageNum;
};

const goForwardOne = (currentPageNum) => {
  const updatedPageNum = currentPageNum + 1;
  return updatedPageNum;
};

const paginationLong = () => {
  getElements('[data-sprk-pagination="long"]', (element) => {
    const dots = element.querySelectorAll('[data-sprk-pagination="dots"]');
    const longPagItems = element.querySelectorAll('[data-sprk-pagination="item"]');
    const next = element.querySelector('[data-sprk-pagination="next"]');
    const prev = element.querySelector('[data-sprk-pagination="prev"]');
    const [link1, link2, link3] = longPagItems;

    // Add click listener in case individual links are tapped/clicked
    longPagItems.forEach((item) => {
      item.addEventListener('click', (event) => {
        const currentItemNum = parseInt(item.textContent, 10);
        const currentPage = element.querySelector('[aria-current="true"]');
        const currentPageNum = parseInt(currentPage.textContent, 10);
        const maxPageNum = parseInt(link3.textContent, 10);

        event.preventDefault();

        // Make sure link clicked is not itself
        if (currentItemNum !== currentPageNum) {
          if (currentItemNum === 1) {
            // Hide 1st set of dots, make sure 2nd set is shown
            updatePageStyles(dots[0], dots[1], 'drizzle-u-Display--none');
            // Hide 1st link and make sure last is shown
            updatePageStyles(link1.parentElement, link3.parentElement, 'drizzle-u-Display--none');
            // Disable Prev link and show Next link
            updatePageStyles(prev, next, 'sprk-b-Link--disabled');
            // Update link number to new number
            link2.textContent = link1.textContent;
          } else if (currentItemNum === maxPageNum) {
            // Hide last set of dots, make sure 1st set is shown
            updatePageStyles(dots[1], dots[0], 'drizzle-u-Display--none');
            // Hide last link and make sure first is shown
            updatePageStyles(link3.parentElement, link1.parentElement, 'drizzle-u-Display--none');
            // Disable Next link since we are on last link
            updatePageStyles(next, prev, 'sprk-b-Link--disabled');
            // Update link number to new number
            link2.textContent = maxPageNum;
          }
        }
        setAriaLabel(currentPage);
      });
    });

    // Add click listener to previous link
    prev.addEventListener('click', (event) => {
      const currentPage = element.querySelector('[aria-current="true"]');
      const maxPageNum = parseInt(link3.textContent, 10);
      const currentPageNum = parseInt(currentPage.textContent, 10);

      event.preventDefault();

      if (currentPageNum > 1) {
        if (currentPageNum === 2) {
          // Hide the 1st set of dots
          dots[0].classList.add('drizzle-u-Display--none');
          // Hide the 1st link
          link1.parentElement.classList.add('drizzle-u-Display--none');
          // Update link number with new number
          currentPage.textContent = goBackOne(currentPageNum);
          // Disable prev link since we can't go back any farther than 1st link
          prev.classList.add('sprk-b-Link--disabled');
        } else if (currentPageNum === 3) {
          // We go back to two link layout when number is < 3
          dots[0].classList.add('drizzle-u-Display--none');
          currentPage.textContent = goBackOne(currentPageNum);
        } else if (currentPageNum === maxPageNum) {
          // Show last link number
          link3.parentElement.classList.remove('drizzle-u-Display--none');
          // Enable the Next link since we are no longer on last link
          next.classList.remove('sprk-b-Link--disabled');
          // Update link number with new number
          currentPage.textContent = goBackOne(currentPageNum);
        } else {
          // Show bot sets of dots
          dots[0].classList.remove('drizzle-u-Display--none');
          dots[1].classList.remove('drizzle-u-Display--none');
          currentPage.textContent = goBackOne(currentPageNum);
        }
      }
    });

    // Add listener to next link
    next.addEventListener('click', (event) => {
      const currentPage = element.querySelector('[aria-current="true"]');
      const maxPageNum = parseInt(link3.textContent, 10);
      const currentPageNum = parseInt(currentPage.textContent, 10);

      event.preventDefault();

      if (currentPageNum < maxPageNum) {
        if (currentPageNum === maxPageNum - 1) {
          link3.parentElement.classList.add('drizzle-u-Display--none');
          currentPage.textContent = goForwardOne(currentPageNum);
          dots[1].classList.add('drizzle-u-Display--none');
          next.classList.add('sprk-b-Link--disabled');
        } else if (currentPageNum === 1) {
          link1.parentElement.classList.remove('drizzle-u-Display--none');
          currentPage.textContent = goForwardOne(currentPageNum);
          prev.classList.remove('sprk-b-Link--disabled');
        } else if (currentPageNum === maxPageNum - 2) {
          dots[1].classList.add('drizzle-u-Display--none');
          currentPage.textContent = goForwardOne(currentPageNum);
        } else {
          dots[0].classList.remove('drizzle-u-Display--none');
          dots[1].classList.remove('drizzle-u-Display--none');
          link1.parentElement.classList.remove('drizzle-u-Display--none');
          currentPage.textContent = goForwardOne(currentPageNum);
        }
      }
    });
  });
};

export { paginationLong, goBackOne, goForwardOne };
