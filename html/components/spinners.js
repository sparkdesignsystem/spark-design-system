/* global window */
import getElements from '../utilities/getElements';

const getSpinnerClasses = (options) => {
  const classes = ['sprk-c-Spinner', 'sprk-c-Spinner--circle'];

  if (options.size === 'large') {
    classes.push('sprk-c-Spinner--large');
  }

  // TODO: Deprecate lightness option in favor of variant - issue #1292
  if (options.lightness === 'dark' || options.variant === 'dark') {
    classes.push('sprk-c-Spinner--dark');
  }

  if (options.variant === 'primary') {
    classes.push('sprk-c-Spinner--primary');
  }

  if (options.variant === 'secondary') {
    classes.push('sprk-c-Spinner--secondary');
  }

  return classes.join(' ');
};

const setSpinning = (element, options) => {
  const el = element;
  const width = element.offsetWidth;
  const spinningAriaLabel = options.ariaLabel || 'Loading';
  el.setAttribute('data-sprk-spinner-text', el.textContent);
  el.setAttribute('aria-label', spinningAriaLabel);
  el.innerHTML = `<div class="${getSpinnerClasses(options)}"></div>`;
  el.setAttribute('data-sprk-has-spinner', 'true');
  el.setAttribute('style', `width: ${width}px`);
};

const cancelSpinning = (element) => {
  const el = element;
  el.innerHTML = '';
  el.textContent = el.getAttribute('data-sprk-spinner-text') || '';
  el.removeAttribute('data-sprk-has-spinner');
  el.removeAttribute('aria-label');
  el.removeAttribute('style');
};

const spinners = () => {
  getElements('[data-sprk-spinner="click"]', (spinnerContainer) => {
    const options = {};
    options.size = spinnerContainer.getAttribute('data-sprk-spinner-size');
    // TODO: Deprecate lightness option in favor of variant - issue #1292
    options.lightness = spinnerContainer.getAttribute(
      'data-sprk-spinner-lightness',
    );
    options.ariaLabel = spinnerContainer.getAttribute(
      'data-sprk-spinner-aria-label',
    );
    options.variant = spinnerContainer.getAttribute(
      'data-sprk-spinner-variant',
    );

    spinnerContainer.addEventListener('click', (e) => {
      if (
        e.target.getAttribute('data-sprk-spinner') &&
        !e.target.getAttribute('data-sprk-has-spinner')
      ) {
        setSpinning(e.target, options);
      }
    });
  });
};

window.addEventListener('sprk-cancel-spinners', () => {
  getElements('[data-sprk-has-spinner="true"]', (element) => {
    cancelSpinning(element);
  });
});

export { spinners, getSpinnerClasses, setSpinning, cancelSpinning };
