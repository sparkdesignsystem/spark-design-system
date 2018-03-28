/* global document window */
import 'prismjs';
import 'babel-polyfill';
import '../../../../packages/spark-core/utilities/polyfills/NodeListForEach';
import './form-state-changer';
import './pagination/long';
import './pagination/default';

const dom = {};

function setActiveNavItem(pathname, navLinks) {
  const noIndex = str => str.replace(/index\.html$/, '');
  const isMatch = a => noIndex(a.pathname) === noIndex(pathname);
  const item = Array.from(navLinks).find(isMatch);
  if (item) {
    item.classList.add('is-active');
  }
}

dom.nav = document.getElementById('nav');
dom.navMenu = document.getElementById('nav-menu');

if (dom.nav) {
  dom.navToggle = dom.nav.querySelector('a[href="#nav"]');
  dom.navLinks = dom.navMenu.querySelectorAll('a');

  dom.navToggle.addEventListener('click', (event) => {
    event.preventDefault();
    dom.nav.classList.toggle('is-active');
  });
  setActiveNavItem(window.location.pathname, dom.navLinks);
}

dom.frameContainers = document.querySelectorAll('[data-drizzle-append-iframe]');

if (dom.frameContainers.length) {
  window.addEventListener('load', () => {
    Array.from(dom.frameContainers).forEach((container) => {
      const src = container.getAttribute('data-drizzle-append-iframe');
      const iframe = document.createElement('iframe');
      iframe.addEventListener('load', () => {
        container.classList.add('is-loaded');
      });
      iframe.setAttribute('src', src);
      container.appendChild(iframe);
    });
  });
}
