/* global document */
import { getElements } from '../../../../packages/spark-core';

const filterList = (listName, value) => {
  const list = document.querySelector(`[data-filtered="${listName}"]`);
  const items = list.querySelectorAll('a');
  items.forEach((item) => {
    item.classList.add('sprk-u-Display--none');
    const itemContent = item.textContent.trim().toLowerCase();
    const cleanValue = value.trim().toLowerCase();
    if (itemContent.indexOf(cleanValue) === -1 && !item.classList.contains('is-active')) {
      item.classList.add('sprk-u-Display--none');
    } else {
      item.classList.remove('sprk-u-Display--none');
    }
  });
};

const filters = () => {
  getElements('[data-filter]', (element) => {
    element.addEventListener('input', (e) => {
      filterList(element.getAttribute('data-filter'), e.target.value);
    });
  });
};

export { filters, filterList };
