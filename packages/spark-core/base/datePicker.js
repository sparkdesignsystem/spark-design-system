/* global document window */
import TinyDatePicker from 'tiny-date-picker';
import getElements from '../utilities/getElements';
import getArrowClass from '../utilities/getArrowClass';

const testWidthForReadOnly = (element) => {
  element.removeAttribute('readonly');
  if (window.innerWidth && window.innerWidth < 768) {
    element.setAttribute('readonly', '');
  }
};

const bindUIEvents = (element) => {
  const input = element.querySelector('input');
  const overrideMinDate = element.getAttribute('data-sprk-min-date');
  const overrideMaxDate = element.getAttribute('data-sprk-max-date');

  testWidthForReadOnly(input);

  const dp = TinyDatePicker(input, {
    mode: 'dp-below',
    lang: {
      days: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    },
    min: overrideMinDate || '01/1/2008',
    max: overrideMaxDate || '01/1/2068',

    format(date) {
      return date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }).replace(/[^ -~]/g, '');
    },

  });

  dp.on('open', () => {
    const rect = input.getBoundingClientRect();
    const cal = document.querySelector('.dp');

    cal.classList.remove('dp-above-top');
    cal.classList.remove('dp-below-top');
    cal.classList.add(getArrowClass(rect, window.pageYOffset, window.innerHeight));
  });
};

const datePicker = () => {
  getElements('[data-sprk-datepicker]', (element) => {
    bindUIEvents(element);
  });

  window.addEventListener('resize', () => {
    getElements('[data-sprk-datepicker] input', (element) => {
      testWidthForReadOnly(element);
    });
  });
};

export { datePicker as default };
