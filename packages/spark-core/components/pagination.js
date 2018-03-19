export default () => {

  /*
   *  Set aria-label to 'Page <number>'
   *  based on the pagination item's number
   */
  const defaultPaginations = document.querySelectorAll('[data-sprk-pagination="default"]'),
        longPaginations = document.querySelectorAll('[data-sprk-pagination="long"]');
  let defaultPagItems,
      longNextLink,
      longPagItems,
      longPrevLink;

  const setAriaLabel = pagItem => {
    // Get page item's page number
    const pagNum = pagItem.textContent;

    // Create new ARIA label based on each item's page number
    const ariaLabel = `Page ${pagNum}`;

    // Set the new ARIA label to the page item
    pagItem.setAttribute('aria-label', ariaLabel);
  };

  // Go through each default pagination found and compose list of items
  defaultPaginations.forEach(defaultPag => {
    defaultPagItems = defaultPag.querySelectorAll('[data-sprk-pagination="item"]');
  });

  // Go through each long pagination found and compose list of items
  longPaginations.forEach(longPag => {
    longPagItems = longPag.querySelectorAll('[data-sprk-pagination="item"]');
    longPrevLink = longPag.querySelector('[data-sprk-pagination="prev"]');
    longNextLink = longPag.querySelector('[data-sprk-pagination="next"]');
  });

  // Loop through all pagination items for each default pagination component
  defaultPagItems.forEach(defaultPagItem => {
    // Initially set aria labels on page load
    setAriaLabel(defaultPagItem);
  });

  longPagItems.forEach(longPagItem => {
    setAriaLabel(longPagItem);
    longPagItem.addEventListener('click', () => {
      setAriaLabel(longPagItem);
    });

    longPrevLink.addEventListener('click', () => {
      setAriaLabel(longPagItem);
    });

    longNextLink.addEventListener('click', () => {
      setAriaLabel(longPagItem);
    });
  });
};
