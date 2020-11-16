/* global document */
import getElements from '../utilities/getElements';
import {
  isEscPressed,
  isUpPressed,
  isDownPressed,
  isEnterPressed,
} from '../utilities/keypress';
import generateAriaControls from '../utilities/generateAriaControls';

const activeClass = 'sprk-c-Autocomplete__results--active';
const hiddenClass = 'sprk-c-Autocomplete__results--hidden';

const showList = (list) => {
  // dropdown.classList.add('sprk-c-Dropdown--open');
  list.classList.remove('sprk-u-Display--none');
};

const hideList = (list) => {
  // dropdown.classList.add('sprk-c-Dropdown--open');
  list.classList.add('sprk-u-Display--none');
};

const setAnnouncement = (announceContainer, text) => {
  announceContainer.innerText = text;
}

const resetResults = (resultList) => {
  resultList.forEach((result) => {
    result.classList.remove(activeClass);
    // turn off aria-selected
  });
};

const selectResult = (result, resultList, input) => {
  const selectedValue = result.getAttribute('data-sprk-autocomplete-value');
  const selectedId = result.id;
  const selectedText = result.getAttribute('data-sprk-autocomplete-text');

  input.setAttribute('data-sprk-autocomplete-selected-value', selectedValue);
  input.value = selectedText;

  // reset the list
  hideList(resultList);

  input.removeAttribute('aria-activedescendant');
};

const highlightResult = (result, input) => {
  input.setAttribute('aria-activedescendant', result.id);
  result.classList.add(activeClass);
  // set aria-selected
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
  const announcement = autocompleteContainer.querySelector('div');
  const input = autocompleteContainer.querySelector('input');
  const filteredList = autocompleteContainer.querySelector(
    '[data-sprk-autocomplete="filtered"]',
  );
  const recentsList = autocompleteContainer.querySelector(
    '[data-sprk-autocomplete="recents"]',
  );

  generateAriaControls(input, filteredList, 'autocomplete');

  input.addEventListener('focusin', () => {
    // if we have recent searches
    showList(recentsList);
  });

  // Hide results if the input loses focus
  input.addEventListener('blur', () => {
    // hideList(recentsList);
    // hideList(filteredList);
  });

  input.addEventListener('input', (e) => {
    const inputValue = e.target.value;

    if (inputValue.trim().length === 0) {
      hideList(filteredList);
      showList(recentsList);
    } else {
      // perform filter
      showList(filteredList);
      hideList(recentsList);
    }
  });

  input.addEventListener('keydown', (e) => {
    // todo put this in as narrow a scope as possible
    // any item that isn't a 404 or pinned
    const selectableRecentItems = recentsList.querySelectorAll('li');
    // any item that isn't a 404 or pinned or filtered out
    const selectableFilteredItems = filteredList.querySelectorAll('li');

    if (isUpPressed(e)) {
      e.stopPropagation();
      e.preventDefault();

      if (!recentsList.classList.contains('sprk-u-Display--none')) {
        retreatHighlightedResult(selectableRecentItems, input);
      } else if (!filteredList.classList.contains('sprk-u-Display--none')) {
        retreatHighlightedResult(selectableFilteredItems, input);
      }
    } else if (isDownPressed(e)) {
      e.stopPropagation();
      e.preventDefault();

      if (!recentsList.classList.contains('sprk-u-Display--none')) {
        advanceHighlightedResult(selectableRecentItems, input);
      } else if (!filteredList.classList.contains('sprk-u-Display--none')) {
        advanceHighlightedResult(selectableFilteredItems, input);
      }
    } else if (isEnterPressed(e)) {
      // if I have an aria-activedescendant that means a list is open
      // and a value is highlighted
      // find the item referenced by aria-activedescendant and select it
    }
  });

  // any item that isn't a 404 or pinned
  const selectableRecentItems = recentsList.querySelectorAll('li');
  // any item that isn't a 404 or pinned or filtered out
  const selectableFilteredItems = filteredList.querySelectorAll('li');

  selectableRecentItems.forEach((listItem) => {
    listItem.addEventListener('click', () => {
      selectResult(listItem, recentsList, input);
      setAnnouncement(
        announcement,
        `value: ${listItem.getAttribute('data-sprk-autocomplete-value')}`,
      );
    });
  });

  selectableFilteredItems.forEach((listItem) => {
    listItem.addEventListener('click', () => {
      selectResult(listItem, filteredList, input);
      setAnnouncement(
        announcement,
        `value: ${listItem.getAttribute('data-sprk-autocomplete-value')}`,
      );
    });
  });

  // Hide results if Escape is pressed
  document.addEventListener('keydown', (e) => {
    if (isEscPressed(e)) {
      hideList(filteredList);
      hideList(recentsList);
    }
  });

  // Hide results if the document body is clicked
  document.addEventListener('click', (e) => {
    if (
      !(
        input.contains(e.target) ||
        filteredList.contains(e.target) ||
        recentsList.contains(e.target)
      )
    ) {
      hideList(filteredList);
      hideList(recentsList);
    }
  });
};

const autocomplete = () => {
  getElements('[data-sprk-autocomplete="container"]', bindUIEvents);
};

export { autocomplete, bindUIEvents };
