/* global localStorage */
import getElements from '../../../../packages/spark-core/es5/getElements';

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

const bindUIEvents = (element) => {
  element.querySelectorAll('label').forEach((label) => {
    label.addEventListener('keydown', (e) => {
      if (e.keyCode === 13) {
        element.querySelectorAll(`input[id=${label.getAttribute('for')}]`)[0].click();
      }
    });
  });

  element.addEventListener('change', (e) => {
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
