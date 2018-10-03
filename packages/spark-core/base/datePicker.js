import TinyDatePicker from 'tiny-date-picker';
import getElements from '../utilities/getElements';

const datePicker = () => {
  getElements('[data-sprk-datepicker]', (element) => {
    const input = element.querySelector('input');
    const overrideMinDate = element.getAttribute('data-sprk-min-date');
    const overrideMaxDate = element.getAttribute('data-sprk-max-date');

    TinyDatePicker(input, {
      mode: 'dp-below',
      min: overrideMinDate || '01/1/2008',
      max: overrideMaxDate || '01/1/2068',

      format(date) {
        return date
          .toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })
          .replace(/[^ -~]/g, '');
      },
    });
  });
};

export { datePicker as default };
