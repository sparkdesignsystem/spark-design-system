/* global localStorage window */
import { getElements } from '../../../../packages/spark-core';

const saveSwitchSetting = (value) => {
  if (localStorage) {
    localStorage.setItem('code-example-switch', value);
  }
};

const hideAllSections = (values) => {
  values.forEach((value) => {
    getElements(`[data-${value}-documentation]`, (section) => {
      section.classList.add('drizzle-u-Display--none');
    });
  });
};

const showSections = (values) => {
  values.forEach((value) => {
    getElements(`[data-${value}-documentation]`, (section) => {
      section.classList.remove('drizzle-u-Display--none');
    });
  });
};

// TODO: Remove once React is published
// If query string present bool:true
// then show code button
// else clear localStorage that could include reat
const toggleCodeButton = (hasQueryString, codeButton) => {
  const isSetToReact = localStorage.getItem('code-example-switch') === 'react';
  if (hasQueryString) {
    codeButton.classList.remove('sprk-u-Display--none');
  } else {
    codeButton.classList.add('sprk-u-Display--none');
    if (isSetToReact) {
      localStorage.setItem('code-example-switch', 'none');
    }
  }
};

const bindUIEvents = (element) => {
  // TODO: Remove once React is published
  const reactButton = element.querySelector('[data-code-example-switch-react]');
  const hasReactQueryString = window.location.search.indexOf('react') > -1;
  toggleCodeButton(hasReactQueryString, reactButton);
  // END TODO

  element.querySelectorAll('label').forEach((label) => {
    label.addEventListener('keydown', (e) => {
      if (e.keyCode === 13) {
        element.querySelectorAll(`input[id=${label.getAttribute('for')}]`)[0].click();
      }
    });
  });

  element.addEventListener('click', (e) => {
    const values = [];
    element.querySelectorAll('input').forEach((rdio) => {
      values.push(rdio.value);
    });

    hideAllSections(values);
    showSections([`${e.target.value}`]);
    saveSwitchSetting(e.target.value);
  });
};

const codeExampleSwitch = () => {
  getElements('[data-code-example-switch]', (item) => {
    bindUIEvents(item);
  });
};

export {
  codeExampleSwitch, bindUIEvents, hideAllSections, showSections, saveSwitchSetting,
};
