/* global document */
import getElements from '../utilities/getElements';
import {
  isEscPressed,
  isUpPressed,
  isDownPressed,
} from '../utilities/keypress';
import generateAriaControls from '../utilities/generateAriaControls';
import generateAriaOwns from '../utilities/generateAriaOwns';
import resetListItems from '../utilities/resetListItems';
import isElementVisible from '../utilities/isElementVisible';

const activeClass = 'sprk-c-Autocomplete__result--active';

const hideList = (autocompleteContainer, inputEl) => {
  if (
    isElementVisible(
      '[data-sprk-autocomplete="results"]',
      autocompleteContainer,
    )
  ) {
    const listEl = autocompleteContainer.querySelector(
      '[data-sprk-autocomplete="results"]',
    );
    resetListItems(
      listEl.querySelectorAll('[data-sprk-autocomplete="result"]'),
      activeClass,
    );
    listEl.classList.add('sprk-c-Autocomplete__results--is-hidden');
    inputEl.removeAttribute('aria-activedescendant');
    inputEl.parentNode.setAttribute('aria-expanded', false);
  }
};

const highlightListItem = (result, inputEl) => {
  inputEl.setAttribute('aria-activedescendant', result.id);
  result.classList.add(activeClass);
  result.setAttribute('aria-selected', true);

  const listItemTop = result.getBoundingClientRect().top;
  const listItemBottom = result.getBoundingClientRect().bottom;

  const listTop = result.parentNode.getBoundingClientRect().top;
  const listBottom = result.parentNode.getBoundingClientRect().bottom;

  // if the list item is not vertically contained within the list
  if (listItemTop < listTop || listItemBottom > listBottom) {
    // the distance from the top of the <li> to the top of the <ul>
    const childTop = result.offsetTop;

    // eslint-disable-next-line no-param-reassign
    result.parentNode.scrollTop = childTop;
  }
};

const getActiveItemIndex = (listEl) => {
  let activeIndex = null;
  listEl.forEach((listItem, index) => {
    if (listItem.classList.contains(activeClass)) {
      activeIndex = index;
    }
  });

  return activeIndex;
};

const advanceHighlightedItem = (results, inputEl) => {
  const activeIndex = getActiveItemIndex(results);
  resetListItems(results, activeClass);

  if (activeIndex === null) {
    highlightListItem(results[0], inputEl);
  } else if (activeIndex + 1 <= results.length - 1) {
    highlightListItem(results[activeIndex + 1], inputEl);
  } else {
    highlightListItem(results[0], inputEl);
  }
};

const retreatHighlightedItem = (results, inputEl) => {
  const activeIndex = getActiveItemIndex(results);
  resetListItems(results, activeClass);

  if (activeIndex === null || activeIndex - 1 === -1) {
    highlightListItem(results[results.length - 1], inputEl);
  } else {
    highlightListItem(results[activeIndex - 1], inputEl);
  }
};

const calculateListWidth = (listEl, inputEl) => {
  const currentInputWidth = inputEl.offsetWidth;
  listEl.setAttribute('style', `max-width:${currentInputWidth}px`);
};

const bindUIEvents = (autocompleteContainer) => {
  const inputEl = autocompleteContainer.querySelector(
    '[data-sprk-autocomplete="input"]',
  );
  const listEl = autocompleteContainer.querySelector(
    '[data-sprk-autocomplete="results"]',
  );

  generateAriaControls(inputEl, listEl, 'autocomplete');
  generateAriaOwns(inputEl.parentNode, listEl, 'autocomplete');

  inputEl.addEventListener('keydown', (e) => {
    const selectableListItems = listEl.querySelectorAll(
      'li:not([data-sprk-autocomplete-no-select])',
    );

    if (isUpPressed(e)) {
      e.stopPropagation();
      e.preventDefault();

      if (
        isElementVisible(
          '[data-sprk-autocomplete="results"]',
          autocompleteContainer,
        )
      ) {
        retreatHighlightedItem(selectableListItems, inputEl);
      }
    } else if (isDownPressed(e)) {
      e.stopPropagation();
      e.preventDefault();

      if (
        isElementVisible(
          '[data-sprk-autocomplete="results"]',
          autocompleteContainer,
        )
      ) {
        advanceHighlightedItem(selectableListItems, inputEl);
      }
    }
  });

  // Hide results if Escape is pressed
  document.addEventListener('keydown', (e) => {
    if (isEscPressed(e)) {
      hideList(autocompleteContainer, inputEl);
    }
  });

  // Hide results if the document body is clicked
  document.addEventListener('click', (e) => {
    if (!(inputEl.contains(e.target) || listEl.contains(e.target))) {
      hideList(autocompleteContainer, inputEl);
    }
  });

  // when the window resizes, reset the max-width of the list
  window.addEventListener('resize', () => {
    calculateListWidth(listEl, inputEl);
  });

  // calculate the max-width on init
  calculateListWidth(listEl, inputEl);
};

const autocomplete = () => {
  getElements('[data-sprk-autocomplete="container"]', bindUIEvents);
};

export { autocomplete, bindUIEvents };
