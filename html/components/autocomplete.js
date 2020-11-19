/* global document */
import getElements from '../utilities/getElements';
import {
  isEscPressed,
  isUpPressed,
  isDownPressed,
  isTabPressed,
} from '../utilities/keypress';
import generateAriaControls from '../utilities/generateAriaControls';

const activeClass = 'sprk-c-Autocomplete__results--active';

const isListOpen = (list) => {
  return !list.classList.contains('sprk-u-Display--none');
};

const resetResults = (resultList) => {
  resultList.forEach((result) => {
    result.classList.remove(activeClass);
    result.setAttribute('aria-selected', false);
  });
};

const hideList = (list, input) => {
  if (isListOpen(list)) {
    resetResults(list.querySelectorAll('li'));
    list.classList.add('sprk-u-Display--none');
    input.removeAttribute('aria-activedescendant');
    input.setAttribute('aria-expanded', false);
  }
};

const highlightResult = (result, input) => {
  input.setAttribute('aria-activedescendant', result.id);
  result.classList.add(activeClass);
  result.setAttribute('aria-selected', true);
};

const getActiveResultIndex = (results) => {
  let activeIndex = null;
  results.forEach((result, index) => {
    if (result.classList.contains(activeClass)) {
      activeIndex = index;
    }
  });

  return activeIndex;
};

const advanceHighlightedResult = (results, input) => {
  const activeIndex = getActiveResultIndex(results);
  resetResults(results);

  if (activeIndex === null) {
    highlightResult(results[0], input);
  } else if (activeIndex + 1 <= results.length - 1) {
    highlightResult(results[activeIndex + 1], input);
  } else {
    highlightResult(results[0], input);
  }
};

const retreatHighlightedResult = (results, input) => {
  const activeIndex = getActiveResultIndex(results);
  resetResults(results);

  if (activeIndex === null || activeIndex - 1 === -1) {
    highlightResult(results[results.length - 1], input);
  } else {
    highlightResult(results[activeIndex - 1], input);
  }
};

const bindUIEvents = (autocompleteContainer) => {
  const input = autocompleteContainer.querySelector('input');
  const list = autocompleteContainer.querySelector('ul');

  generateAriaControls(input, list, 'autocomplete');

  // todo if the input has a value and the list is visible
  // resetResults(list.querySelectorAll('li'));

  input.addEventListener('keydown', (e) => {
    const selectableListItems = list.querySelectorAll(
      'li:not([data-sprk-autocomplete-no-select])',
    );

    if (isUpPressed(e)) {
      e.stopPropagation();
      e.preventDefault();

      if (!list.classList.contains('sprk-u-Display--none')) {
        retreatHighlightedResult(selectableListItems, input);
      }
    } else if (isDownPressed(e)) {
      e.stopPropagation();
      e.preventDefault();

      if (!list.classList.contains('sprk-u-Display--none')) {
        advanceHighlightedResult(selectableListItems, input);
      }
    } else if (isTabPressed(e)) {
      // hide results if we're tabbing out of the control
      hideList(list, input);
    }
  });

  // Hide results if Escape is pressed
  document.addEventListener('keydown', (e) => {
    if (isEscPressed(e)) {
      hideList(list, input);
    }
  });

  // Hide results if the document body is clicked
  document.addEventListener('click', (e) => {
    if (!(input.contains(e.target) || list.contains(e.target))) {
      hideList(list, input);
    }
  });
};

const autocomplete = () => {
  getElements('[data-sprk-autocomplete="container"]', bindUIEvents);
};

export { autocomplete, bindUIEvents };
