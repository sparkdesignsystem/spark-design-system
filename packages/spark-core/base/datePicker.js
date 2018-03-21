import TinyDatePicker from 'tiny-date-picker';
import getElements from '../utilities/getElements';

const datePicker = () => {
  getElements('[data-sprk-input="datepicker"]', (element) => {
    const input = element.querySelector('input');
    const overrideMinDate = element.getAttribute('data-sprk-min-date');
    const overrideMaxDate = element.getAttribute('data-sprk-max-date');

    TinyDatePicker(input, {
      mode: 'dp-below',
      min: overrideMinDate || '01/1/2008',
      max: overrideMaxDate || '01/1/2068',
    });
  });
};

export { datePicker as default };
