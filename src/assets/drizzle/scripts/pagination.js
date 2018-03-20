/* global document */
/**
 *  Pagination Documentation Demo JS
 *  Assume only one type of
 *  each pagination version on page.
 *
 * data-sprk-pagination="default"
 * This identifies a default pagination component.
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
const defaultPag = document.querySelector('[data-sprk-pagination="default"]');
const longPag = document.querySelector('[data-sprk-pagination="long"]');

// Add aria-current attr to new page link, remove from old
const setAriaCurrent = (newPagelink, oldPageLink) => {
  if (!newPagelink.hasAttribute('aria-current')) {
    newPagelink.setAttribute('aria-current', true);
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

// Default Pagination
if (defaultPag) {
  const defaultPagItems = defaultPag.querySelectorAll('[data-sprk-pagination="item"]');
  const [link1, link2, link3] = defaultPagItems;
  const next = defaultPag.querySelector('[data-sprk-pagination="next"]');
  const prev = defaultPag.querySelector('[data-sprk-pagination="prev"]');

  // Listen for page number link clicks
  defaultPagItems.forEach((item) => {
    item.addEventListener('click', (event) => {
      const currentItemNum = parseInt(item.textContent, 10);
      const currentPage = defaultPag.querySelector('[aria-current="true"]');
      const currentPageNum = parseInt(currentPage.textContent, 10);

      event.preventDefault();

      // If link clicked is not currenlty selected link
      if (currentItemNum !== currentPageNum) {
        if (currentItemNum === defaultPagItems.length - 2) {
          updatePageStyles(
            item.parentElement,
            currentPage.parentElement,
            'sprk-c-Pagination__item--current',
          );
          setAriaCurrent(item, currentPage);
          updatePageStyles(prev, next, 'sprk-b-Link--disabled');
        } else if (currentItemNum === defaultPagItems.length - 1) {
          updatePageStyles(
            item.parentElement,
            currentPage.parentElement,
            'sprk-c-Pagination__item--current',
          );
          setAriaCurrent(item, currentPage);
          // Enable both prev/links since we are on middle link
          prev.classList.remove('sprk-b-Link--disabled');
          next.classList.remove('sprk-b-Link--disabled');
        } else if (currentItemNum === defaultPagItems.length) {
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
    // If current page number is less than the max number of items
    if (currentPageNum <= defaultPagItems.length) {
      // Update DOM CSS and add aria-current to new link
      if (currentPageNum === defaultPagItems.length - 1) {
        updatePageStyles(
          link1.parentElement,
          currentPage.parentElement,
          'sprk-c-Pagination__item--current',
        );
        setAriaCurrent(link1, currentPage);
        prev.classList.add('sprk-b-Link--disabled');
      } else if (currentPageNum === defaultPagItems.length) {
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

    if (currentPageNum <= defaultPagItems.length) {
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

// Long Pagination
if (longPag) {
  const dots = longPag.querySelectorAll('[data-sprk-pagination="dots"]');
  const longPagItems = longPag.querySelectorAll('[data-sprk-pagination="item"]');
  const next = longPag.querySelector('[data-sprk-pagination="next"]');
  const prev = longPag.querySelector('[data-sprk-pagination="prev"]');
  const [link1, link2, link3] = longPagItems;

  // Add click listener in case individual links are tapped/clicked
  longPagItems.forEach((item) => {
    item.addEventListener('click', (event) => {
      const currentItemNum = parseInt(item.textContent, 10);
      const currentPage = longPag.querySelector('[aria-current="true"]');
      const currentPageNum = parseInt(currentPage.textContent, 10);
      const maxPageNum = parseInt(link3.textContent, 10);

      event.preventDefault();

      // Make sure link clicked is not itself
      if (currentItemNum !== currentPageNum) {
        if (currentItemNum === 1) {
          // Hide 1st set of dots, make sure 2nd set is shown
          updatePageStyles(dots[0], dots[1], 'hidden');
          // Hide 1st link and make sure last is shown
          updatePageStyles(link1.parentElement, link3.parentElement, 'hidden');
          // Disable Prev link and show Next link
          updatePageStyles(prev, next, 'sprk-b-Link--disabled');
          // Update link number to new number
          link2.textContent = link1.textContent;
        } else if (currentItemNum === maxPageNum) {
          // Hide last set of dots, make sure 1st set is shown
          updatePageStyles(dots[1], dots[0], 'hidden');
          // Hide last link and make sure first is shown
          updatePageStyles(link3.parentElement, link1.parentElement, 'hidden');
          // Disable Next link since we are on last link
          updatePageStyles(next, prev, 'sprk-b-Link--disabled');
          // Update link number to new number
          link2.textContent = maxPageNum;
        }
      }
    });
  });

  // Add click listener to previous link
  prev.addEventListener('click', (event) => {
    const currentPage = longPag.querySelector('[aria-current="true"]');
    const maxPageNum = parseInt(link3.textContent, 10);
    let currentPageNum = parseInt(currentPage.textContent, 10);

    event.preventDefault();

    if (currentPageNum > 1) {
      if (currentPageNum === 2) {
        // Page number is two when prev is clicked so decrement page number
        currentPageNum -= 1;
        // Hide the 1st set of dots
        dots[0].classList.add('hidden');
        // Hide the 1st link
        link1.parentElement.classList.add('hidden');
        // Update link number with new number
        currentPage.textContent = currentPageNum;
        // Disable prev link since we can't go back any farther than 1st link
        prev.classList.add('sprk-b-Link--disabled');
      } else if (currentPageNum === 3) {
        // Decrement page number
        currentPageNum -= 1;
        // We go back to two link layout when number is < 3
        dots[0].classList.add('hidden');
        // Update link number with new number
        currentPage.textContent = currentPageNum;
      } else if (currentPageNum === maxPageNum) {
        // Decrement page number
        currentPageNum -= 1;
        // Show last link number
        link3.parentElement.classList.remove('hidden');
        // Enable the Next link since we are no longer on last link
        next.classList.remove('sprk-b-Link--disabled');
        // Update link number with new number
        currentPage.textContent = currentPageNum;
      } else {
        // Decrement page number
        currentPageNum -= 1;
        // Show bot sets of dots
        dots[0].classList.remove('hidden');
        dots[1].classList.remove('hidden');
        // Update link number with new number
        currentPage.textContent = currentPageNum;
      }
    }
  });

  // Add listener to next link
  next.addEventListener('click', (event) => {
    const currentPage = longPag.querySelector('[aria-current="true"]');
    const maxPageNum = parseInt(link3.textContent, 10);

    let currentPageNum = parseInt(currentPage.textContent, 10);

    event.preventDefault();

    if (currentPageNum < maxPageNum) {
      if (currentPageNum === maxPageNum - 1) {
        currentPageNum += 1;
        link3.parentElement.classList.add('hidden');
        currentPage.textContent = currentPageNum;
        dots[1].classList.add('hidden');
        next.classList.add('sprk-b-Link--disabled');
      } else if (currentPageNum === 1) {
        currentPageNum += 1;
        link1.parentElement.classList.remove('hidden');
        currentPage.textContent = currentPageNum;
        prev.classList.remove('sprk-b-Link--disabled');
      } else if (currentPageNum === maxPageNum - 2) {
        currentPageNum += 1;
        dots[1].classList.add('hidden');
        currentPage.textContent = currentPageNum;
      } else {
        currentPageNum += 1;
        dots[0].classList.remove('hidden');
        dots[1].classList.remove('hidden');
        link1.parentElement.classList.remove('hidden');
        currentPage.textContent = currentPageNum;
      }
    }
  });
}
