/* global document */
import '../../../../packages/spark-core/spark-core';

import highlightBoard from '../../../../packages/spark-extras/components/highlight-board/highlight-board';

highlightBoard();

//
// Open Nav
//
const rawHamburgers = document.querySelectorAll('.js-open-nav');
const hamburgers = Array.prototype.slice.call(rawHamburgers);
const navs = document.querySelectorAll('.sprk-c-Navigation');
const navArray = Array.prototype.slice.call(navs);

// Give each nav a unique data attribute to match against index of the clicked
// hamburger
navArray.forEach((e) => {
  const index = navArray.indexOf(e);
  e.setAttribute('data-index', index);
});

hamburgers.forEach((e) => {
  e.addEventListener('click', () => {
    // get the index of the clicked hamburger and use it to select the
    // corresponding navigation
    const index = hamburgers.indexOf(this);
    const nav = document.querySelector(`.sprk-c-Navigation[data-index='${index}']`);

    // toggle hamburger animation
    this.classList.toggle('sprk-is-Open');

    // toggle visibility of the nav
    nav.classList.toggle('sprk-is-Hidden@sm');
  });
});
