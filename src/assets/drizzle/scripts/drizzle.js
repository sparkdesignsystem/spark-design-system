/* global navigator document window */
import 'prismjs';
import 'babel-polyfill';
import '../../../../packages/spark-core/utilities/polyfills/NodeListForEach';

import { paginationLong } from './pagination/long';
import { paginationDefault } from './pagination/default';

import setActiveNavItem from './navigation/setActiveNavItem';
import { formStateChanger } from './form-state-changer';
import { filters } from './filter';
import { clipboardSuccess } from './vendor/clipboard';
import { mobileNav } from './navigation/mobileNav';
import { hideWaitModal } from './modals';

const nav = document.getElementById('nav');
const navMenu = document.getElementById('nav-menu');
const bindUIEvents = () => {
  if (nav && navMenu) {
    setActiveNavItem(window.location.pathname, nav, navMenu);
  }
};

// init
formStateChanger();
paginationDefault();
paginationLong();
bindUIEvents();
filters();
clipboardSuccess();
mobileNav();
hideWaitModal();

// register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(
      (registration) => {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      },
      (err) => {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      },
    );
  });
}
