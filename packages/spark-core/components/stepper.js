/* global */
import getElements from '../utilities/getElements';

const bindUIEvents = (stepper) => {
  console.log(stepper);
};

const stepper = () => {
  getElements('[data-sprk-stepper="container"]', bindUIEvents);
};

export {
  stepper,
  bindUIEvents,
};
