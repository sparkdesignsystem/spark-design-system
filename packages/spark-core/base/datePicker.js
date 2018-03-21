import TinyDatePicker from 'tiny-date-picker';
import getElements from '../utilities/getElements';

const datePicker = () => {
  getElements('[data-sprk-input="datepicker"] input', (element) => {
    TinyDatePicker(element, {
      mode: 'dp-below',
      min: '01/1/2008',
      max: '01/1/2068',
    });
  });
};

export { datePicker as default };
