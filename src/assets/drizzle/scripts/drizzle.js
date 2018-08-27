/* global document window */
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

import { codeExampleSwitch } from './code-example-switch';

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
codeExampleSwitch();
