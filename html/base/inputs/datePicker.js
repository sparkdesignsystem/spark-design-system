/* global window */
import TinyDatePicker from 'tiny-date-picker';
import getElements from '../../utilities/getElements';

const setupTDP = (input, config) => {
  const tdpConfig = {
    mode: 'dp-below',
    lang: {
      days: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    },
    min: '01/1/2008',
    max: '01/1/2068',
    format: date =>
      date
        .toLocaleDateString('en-US', {
          month: '2-digit',
          day: '2-digit',
          year: 'numeric',
        })
        .replace(/[^ -~]/g, ''),
  };

  const dp = TinyDatePicker(input, Object.assign(tdpConfig, config));

  dp.on('select', () => {
    let event;

    if (typeof Event === 'function') {
      event = new Event('input');
    } else {
      event = document.createEvent('Event');
      event.initEvent('input', true, true);
    }

    input.dispatchEvent(event);

    input.focus();
  });
};

const bindUIEvents = (element, config) => {
  const input = element.querySelector('input');
  setupTDP(input, config);
};

const datePicker = config => {
  getElements('[data-sprk-datepicker]', element => {
    bindUIEvents(element, config);
  });
};

export { datePicker, bindUIEvents };
