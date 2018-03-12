'use strict';
// Import all of Spark-Core JS
import '../../../../packages/spark-core/spark-core';

// Import Spark-Extras JS individually
import highlightBoard from '../../../../packages/spark-extras/components/highlight-board/highlight-board';
highlightBoard();

//
// Open Nav
//
var rawHamburgers = document.querySelectorAll('.js-open-nav'),
    hamburgers = Array.prototype.slice.call(rawHamburgers),
    navs = document.querySelectorAll('.sprk-c-Navigation'),
    navArray = Array.prototype.slice.call(navs);

// Give each nav a unique data attribute to match against index of the clicked
// hamburger
navArray.forEach(function(e) {
  var index = navArray.indexOf(e);
  e.setAttribute('data-index', index);
});

hamburgers.forEach(function(e) {

  e.addEventListener('click', function() {

    // get the index of the clicked hamburger and use it to select the
    // corresponding navigation
    var index = hamburgers.indexOf(this),
        nav = document.querySelector('.sprk-c-Navigation[data-index=\'' + index + '\']');

    // toggle hamburger animation
    this.classList.toggle('sprk-is-Open');

    // toggle visibility of the nav
    nav.classList.toggle('sprk-is-Hidden\@sm');
  });
});
