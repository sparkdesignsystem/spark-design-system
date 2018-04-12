/* global document window */
import TinyDatePicker from 'tiny-date-picker';
import getElements from '../utilities/getElements';
import getArrowClass from '../utilities/getArrowClass';

const datePicker = () => {
  getElements('[data-sprk-input="datepicker"]', (element) => {
    const input = element.querySelector('input');
    const overrideMinDate = element.getAttribute('data-sprk-min-date');
    const overrideMaxDate = element.getAttribute('data-sprk-max-date');

    const dp = TinyDatePicker(input, {
      mode: 'dp-below',
      min: overrideMinDate || '01/1/2008',
      max: overrideMaxDate || '01/1/2068',
    });

    dp.on('open', () => {
      const rect = input.getBoundingClientRect();
      const cal = document.querySelector('.dp');

      cal.classList.remove('dp-above-top');
      cal.classList.remove('dp-below-top');
      cal.classList.add(getArrowClass(rect, window.pageYOffset, window.innerHeight));
    });
  });
};

export { datePicker as default };
