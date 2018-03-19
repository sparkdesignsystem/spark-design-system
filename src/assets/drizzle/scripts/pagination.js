// Grab paginations
const defaultPags = document.querySelectorAll('[data-sprk-pagination="default"]');
const longPags = document.querySelectorAll('[data-sprk-pagination="long"]');

// If default pagination is found on page
if (defaultPags) {
  let defaultPagItems = defaultPags[0].querySelectorAll('[data-sprk-pagination="item"]');
  let prev = defaultPags[0].querySelector('[data-sprk-pagination="prev"]');
  let next = defaultPags[0].querySelector('[data-sprk-pagination="next"]');
  let link1 = defaultPagItems[0],
      link2 = defaultPagItems[1],
      link3 = defaultPagItems[2];

  // Listener for when individual links are clicked
  defaultPagItems.forEach(item => {
    item.addEventListener('click', event => {
      let currentPage = defaultPags[0].querySelector('[aria-current="true"]');
      let currentPageNum = parseInt(item.textContent, 10);
      event.preventDefault();

      if (currentPageNum == 1) {
        updatePageStyles(item.parentElement, currentPage.parentElement, 'sprk-c-Pagination__item--current');
        setAriaCurrent(item, currentPage);
        prev.classList.add('sprk-b-Link--disabled');
      } else if (currentPageNum == 2) {
        updatePageStyles(item.parentElement, currentPage.parentElement, 'sprk-c-Pagination__item--current');
        setAriaCurrent(item, currentPage);
        prev.classList.remove('sprk-b-Link--disabled');
        next.classList.remove('sprk-b-Link--disabled');
      } else if (currentPageNum == 3) {
        updatePageStyles(item.parentElement, currentPage.parentElement, 'sprk-c-Pagination__item--current');
        setAriaCurrent(item, currentPage);
        next.classList.add('sprk-b-Link--disabled');
      }
    });
  });

  prev.addEventListener('click', event => {
    let currentPage = defaultPags[0].querySelector('[aria-current="true"]');
    let currentPageNum = parseInt(currentPage.textContent, 10);
    event.preventDefault();

    // Check if current page number is less than the max page number
    if (currentPageNum < 4) {
      // Update DOM CSS and add aria-current to new link
      if (currentPageNum == 2) {
        updatePageStyles(link1.parentElement, currentPage.parentElement, 'sprk-c-Pagination__item--current');
        setAriaCurrent(link1, currentPage);
        prev.classList.add('sprk-b-Link--disabled');
      } else if (currentPageNum == 3) {
        updatePageStyles(link2.parentElement, currentPage.parentElement, 'sprk-c-Pagination__item--current');
        setAriaCurrent(link2, currentPage);
        next.classList.remove('sprk-b-Link--disabled');
      }
    }
  });

  next.addEventListener('click', event => {
    let currentPage = defaultPags[0].querySelector('[aria-current="true"]');
    let currentPageNum = parseInt(currentPage.textContent, 10);
    event.preventDefault();

    if (currentPageNum < 3) {
      if (currentPageNum == 1) {
        updatePageStyles(link2.parentElement, currentPage.parentElement, 'sprk-c-Pagination__item--current');
        setAriaCurrent(link2, currentPage);
        prev.classList.remove('sprk-b-Link--disabled');
      } else if (currentPageNum == 2) {
        updatePageStyles(link3.parentElement, currentPage.parentElement, 'sprk-c-Pagination__item--current')
        setAriaCurrent(link3, currentPage);
        next.classList.add('sprk-b-Link--disabled');
      }
    }
  });
}

// If long version pagination is found on page
if (longPags) {
  let longPagItems = longPags[0].querySelectorAll('[data-sprk-pagination="item"]');
  let prev = longPags[0].querySelector('[data-sprk-pagination="prev"]');
  let next = longPags[0].querySelector('[data-sprk-pagination="next"]');
  let link1 = longPagItems[0],
      link2 = longPagItems[1],
      link3 = longPagItems[2],
      dots = longPags[0].querySelectorAll('[data-sprk-pagination="dots"]');

  longPagItems.forEach(item => {
    item.addEventListener('click', event => {
      let currentPage = longPags[0].querySelector('[aria-current="true"]');
      let currentPageNum = parseInt(currentPage.textContent, 10);
      let maxPageNum = parseInt(link3.textContent, 10);
      let currentItemNum = parseInt(item.textContent, 10);

      event.preventDefault();

      if (currentItemNum == 1) {
        dots[0].classList.add('hidden');
        dots[1].classList.remove('hidden');
        link3.parentElement.classList.remove('hidden');
        link1.parentElement.classList.add('hidden');
        updatePageStyles(prev, next, 'sprk-b-Link--disabled');
        link2.textContent = link1.textContent;
      } else if (currentItemNum == maxPageNum) {
        updatePageStyles(next, prev, 'sprk-b-Link--disabled');
        link1.parentElement.classList.remove('hidden');
        link3.parentElement.classList.add('hidden');
        link2.textContent = maxPageNum;
        dots[1].classList.add('hidden');
        dots[0].classList.remove('hidden');
      }
    });
  });

  // Add click listener to previous link
  prev.addEventListener('click', event => {
    let currentPage = longPags[0].querySelector('[aria-current="true"]');
    let currentPageNum = parseInt(currentPage.textContent, 10);
    let maxPageNum = parseInt(link3.textContent, 10);
    event.preventDefault();

    if (currentPageNum > 1) {
      if (currentPageNum == 2) {
        currentPageNum--;
        link1.parentElement.classList.add('hidden');
        currentPage.textContent = currentPageNum;
        dots[0].classList.add('hidden');
        prev.classList.add('sprk-b-Link--disabled');
      } else if (currentPageNum == 3) {
        dots[0].classList.add('hidden');
        currentPageNum--;
        currentPage.textContent = currentPageNum;
      } else if (currentPageNum == maxPageNum) {
        currentPageNum--;
        link3.parentElement.classList.remove('hidden');
        next.classList.remove('sprk-b-Link--disabled');
        currentPage.textContent = currentPageNum;
      } else {
        currentPageNum--;
        dots[0].classList.remove('hidden');
        dots[1].classList.remove('hidden');
        currentPage.textContent = currentPageNum;
      }
    }
  });

  // Add listener to next link
  next.addEventListener('click', event => {
    let currentPage = longPags[0].querySelector('[aria-current="true"]');
    let currentPageNum = parseInt(currentPage.textContent, 10);
    let maxPageNum = parseInt(link3.textContent, 10);

    event.preventDefault();

    if (currentPageNum < maxPageNum) {
      if (currentPageNum == (maxPageNum - 1)) {
        currentPageNum++;
        link3.parentElement.classList.add('hidden');
        currentPage.textContent = currentPageNum;
        dots[1].classList.add('hidden');
        next.classList.add('sprk-b-Link--disabled');
      } else if (currentPageNum == 1) {
        currentPageNum++;
        link1.parentElement.classList.remove('hidden');
        currentPage.textContent = currentPageNum;
        prev.classList.remove('sprk-b-Link--disabled');
      } else if (currentPageNum == (maxPageNum - 2)) {
        currentPageNum++;
        dots[1].classList.add('hidden');
        currentPage.textContent = currentPageNum;
      } else {
        currentPageNum++;
        dots[0].classList.remove('hidden');
        dots[1].classList.remove('hidden');
        link1.parentElement.classList.remove('hidden');
        currentPage.textContent = currentPageNum;
      }
    }
  });
}

// Add attr to new page link, remove from old
function setAriaCurrent (newPagelink, oldPageLink) {
  if (!newPagelink.hasAttribute('aria-current')) {
    newPagelink.setAttribute('aria-current', true);
  }
  if (oldPageLink.hasAttribute('aria-current')) {
    oldPageLink.removeAttribute('aria-current', true);
  }
}

function updatePageStyles (addItem, removeItem, classCSS) {
  if (!addItem.classList.contains(classCSS)) {
    addItem.classList.add(classCSS);
  }
  if (removeItem.classList.contains(classCSS)) {
    removeItem.classList.remove(classCSS);
  }
}
