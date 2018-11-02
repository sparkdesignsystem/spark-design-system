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
import loadSwitchSetting from './load-switch-setting';

const nav = document.getElementById('nav');
const navMenu = document.getElementById('nav-menu');
const bindUIEvents = () => {
  if (nav && navMenu) {
    setActiveNavItem(window.location.pathname, nav, navMenu);
  }
};

document.querySelectorAll('a[href="#nogo"]').forEach((element) => {
  element.addEventListener('click', (e) => { e.preventDefault(); });
});

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

window.addEventListener('load', () => {
  loadSwitchSetting();
});
