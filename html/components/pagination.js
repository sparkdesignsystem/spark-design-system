import getElements from '../utilities/getElements';

/**
 *  Set aria-label to 'Page <number>'
 *  based on the pagination item's number
 */
const setAriaLabel = (pagItem) => {
  const ariaLabel = `Page ${pagItem.textContent}`;
  pagItem.setAttribute('aria-label', ariaLabel);
};

const setItemLabels = () => {
  getElements('[data-sprk-pagination="item"]', (item) => {
    setAriaLabel(item);
  });
};

const pagination = () => {
  // initial label set on load
  setItemLabels();

  // when a pagination link gets clicked redo the labels
  getElements('a[data-sprk-pagination]', (item) => {
    item.addEventListener('click', setItemLabels);
  });
};

export { setItemLabels, setAriaLabel, pagination };
