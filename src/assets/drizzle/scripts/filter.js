/* global document */
import getElements from '../../../../packages/spark-core/utilities/getElements';

const filterList = (listName, value) => {
  const list = document.querySelector(`[data-filtered="${listName}"]`);
  const items = list.querySelectorAll('a');
  items.forEach((item) => {
    item.classList.add('sprk-u-Hide');
    const itemContent = item.textContent.trim().toLowerCase();
    const cleanValue = value.trim().toLowerCase();
    if (itemContent.indexOf(cleanValue) === -1 && !item.classList.contains('is-active')) {
      item.classList.add('sprk-u-Hide');
    } else {
      item.classList.remove('sprk-u-Hide');
    }
  });
};

const filters = () => {
  getElements('[data-filter]', (element) => {
    element.addEventListener('keyup', (e) => {
      filterList(element.getAttribute('data-filter'), e.target.value);
    });
  });
};

export { filters, filterList };
