/* global localStorage */
import getElements from '../../../../packages/spark-core/utilities/getElements';
import { hideAllSections, showSections } from './code-example-switch';

const loadSwitchSetting = () => {
  if (localStorage) {
    getElements('[data-code-example-switch]', (swtch) => {
      const values = [];
      swtch.querySelectorAll('input').forEach((rdio) => {
        values.push(rdio.value);
        /* eslint-disable no-param-reassign */
        if (rdio.value === localStorage.getItem('code-example-switch')) {
          rdio.checked = true;
        } else {
          rdio.checked = false;
        }
        /* eslint-enable no-param-reassign */
      });

      hideAllSections(values);
      showSections([localStorage.getItem('code-example-switch')]);
    });
  }
};

export { loadSwitchSetting as default };
