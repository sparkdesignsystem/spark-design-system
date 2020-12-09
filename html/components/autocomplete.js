/* global document */
import getElements from '../utilities/getElements';
import {
  isEscPressed,
  isUpPressed,
  isDownPressed,
} from '../utilities/keypress';
import generateAriaControls from '../utilities/generateAriaControls';
import resetListItems from '../utilities/resetListItems';
import isElementVisible from '../utilities/isElementVisible';

const activeClass = 'sprk-c-Autocomplete__results--active';

const hideList = (autocompleteContainer, input) => {
  if (isElementVisible('ul', autocompleteContainer)) {
    const list = autocompleteContainer.querySelector('ul');
    resetListItems(list.querySelectorAll('li'), activeClass);
    list.classList.add('sprk-u-Display--none');
    input.removeAttribute('aria-activedescendant');
    input.setAttribute('aria-expanded', false);
  }
};

const highlightListItem = (result, input) => {
  input.setAttribute('aria-activedescendant', result.id);
  result.classList.add(activeClass);
  result.setAttribute('aria-selected', true);

  // TODO scroll the list if necessary
  // If the option isn’t visible within the menu
  // if(!this.isElementVisible(option.parent(), option)) {

  //   // make it visible by setting its position inside the menu
  //   option.parent().scrollTop(option.parent().scrollTop() +
  // option.position().top);
  // }
};

const getActiveItemIndex = (list) => {
  let activeIndex = null;
  list.forEach((listItem, index) => {
    if (listItem.classList.contains(activeClass)) {
      activeIndex = index;
    }
  });

  return activeIndex;
};

const advanceHighlightedItem = (results, input) => {
  const activeIndex = getActiveItemIndex(results);
  resetListItems(results, activeClass);

  if (activeIndex === null) {
    highlightListItem(results[0], input);
  } else if (activeIndex + 1 <= results.length - 1) {
    highlightListItem(results[activeIndex + 1], input);
  } else {
    highlightListItem(results[0], input);
  }
};

const retreatHighlightedItem = (results, input) => {
  const activeIndex = getActiveItemIndex(results);
  resetListItems(results, activeClass);

  if (activeIndex === null || activeIndex - 1 === -1) {
    highlightListItem(results[results.length - 1], input);
  } else {
    highlightListItem(results[activeIndex - 1], input);
  }
};

const bindUIEvents = (autocompleteContainer) => {
  const input = autocompleteContainer.querySelector('input');
  const list = autocompleteContainer.querySelector('ul');

  generateAriaControls(input, list, 'autocomplete');

  input.addEventListener('keydown', (e) => {
    const selectableListItems = list.querySelectorAll(
      'li:not([data-sprk-autocomplete-no-select])',
    );

    if (isUpPressed(e)) {
      e.stopPropagation();
      e.preventDefault();

      if (isElementVisible('ul', autocompleteContainer)) {
        retreatHighlightedItem(selectableListItems, input);
      }
    } else if (isDownPressed(e)) {
      e.stopPropagation();
      e.preventDefault();

      if (isElementVisible('ul', autocompleteContainer)) {
        advanceHighlightedItem(selectableListItems, input);
      }
    }
  });

  // Hide results if Escape is pressed
  document.addEventListener('keydown', (e) => {
    if (isEscPressed(e)) {
      hideList(autocompleteContainer, input);
    }
  });

  // Hide results if the document body is clicked
  document.addEventListener('click', (e) => {
    if (!(input.contains(e.target) || list.contains(e.target))) {
      hideList(autocompleteContainer, input);
    }
  });
};

const autocomplete = () => {
  getElements('[data-sprk-autocomplete="container"]', bindUIEvents);
};

export { autocomplete, bindUIEvents };
