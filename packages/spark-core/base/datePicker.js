/* global window */
import TinyDatePicker from 'tiny-date-picker';
import getElements from '../utilities/getElements';
import { open, select } from '../utilities/datePickerFunctions';

const setupTDP = (input, config) => {
  const tdpConfig = {
    mode: 'dp-below',
    lang: {
      days: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    },
    min: '01/1/2008',
    max: '01/1/2068',
    format: date => date.toLocaleDateString('en-US',
      { month: '2-digit', day: '2-digit', year: 'numeric' })
      .replace(/[^ -~]/g, ''),
  };

  const dp = TinyDatePicker(input, Object.assign(tdpConfig, config));

  dp.on({
    open,
    select,
  });
};

const bindUIEvents = (element, config) => {
  const input = element.querySelector('input');

  if (window.innerWidth && window.innerWidth < 768) {
    input.setAttribute('type', 'date');
  } else {
    setupTDP(input, config);
    input.setAttribute('type', 'text');
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth && window.innerWidth < 768) {
      input.setAttribute('type', 'date');
    } else {
      input.setAttribute('type', 'text');
    }
  });
};

const datePicker = (config) => {
  getElements('[data-sprk-datepicker]', (element) => {
    bindUIEvents(element, config);
  });
};

export { datePicker, bindUIEvents };
