/* global document window Event */
import TinyDatePicker from 'tiny-date-picker';
import getElements from '../utilities/getElements';
import getArrowClass from '../utilities/getArrowClass';

const testWidthForReadOnly = (element) => {
  element.removeAttribute('readonly');
  if (window.innerWidth && window.innerWidth < 768) {
    element.setAttribute('readonly', '');
  }
};

const bindUIEvents = (element, config) => {
  const input = element.querySelector('input');
  testWidthForReadOnly(input);

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
    open: () => {
      const rect = input.getBoundingClientRect();
      const cal = document.querySelector('.dp');

      cal.classList.remove('dp-above-top');
      cal.classList.remove('dp-below-top');
      cal.classList.add(getArrowClass(rect, window.pageYOffset, window.innerHeight));
    },
    select: () => {
      input.dispatchEvent(new Event('input'));
      input.focus();
    },
  });
};

const datePicker = (config) => {
  getElements('[data-sprk-datepicker]', (element) => {
    bindUIEvents(element, config);
  });

  window.addEventListener('resize', () => {
    getElements('[data-sprk-datepicker] input', (element) => {
      testWidthForReadOnly(element);
    });
  });
};

export { datePicker, testWidthForReadOnly, bindUIEvents };
