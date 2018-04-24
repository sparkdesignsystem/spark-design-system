/* global document window */
import 'prismjs';
import 'babel-polyfill';
import '../../../../packages/spark-core/utilities/polyfills/NodeListForEach';

import { paginationLong } from './pagination/long';
import { paginationDefault } from './pagination/default';

import setActiveNavItem from './navigation/setActiveNavItem';
import appendIFrames from './navigation/appendIFrames';
import { formStateChanger } from './form-state-changer';
import { filters } from './filter';

const nav = document.getElementById('nav');
const navMenu = document.getElementById('nav-menu');
const frameContainers = document.querySelectorAll('[data-drizzle-append-iframe]');

const bindUIEvents = () => {
  window.addEventListener('load', () => {
    if (frameContainers.length) {
      appendIFrames(frameContainers);
    }
  });

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
