/* global document */
const setActiveNavItem = (pathname, nav, navMenu) => {
  const navToggle = nav.querySelector('a[href="#nav"]');
  const navLinks = navMenu.querySelectorAll('a');

  navToggle.addEventListener('click', (event) => {
    event.preventDefault();
    nav.classList.toggle('is-active');
    document.body.classList.toggle('sprk-u-Overflow--hidden');
  });

  const noIndex = str => str.replace(/index\.html$/, '');
  const isMatch = a => noIndex(a.pathname) === noIndex(pathname);
  const item = Array.from(navLinks).find(isMatch);
  if (item) {
    item.classList.add('is-active');
  }
};

export { setActiveNavItem as default };
