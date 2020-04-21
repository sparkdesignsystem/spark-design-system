import getElements from '../../utilities/getElements';
import { uniqueId } from 'lodash';

const generateIdForCheckbox = (element) => {
  // Account for label being after the input or before.
  const labelElement = (element.nextElementSibling.tagName === 'LABEL') ? element.nextElementSibling : element.previousElementSibling;
  let inputId = element.getAttribute('id');
  let labelFor;
  if(labelElement) {
    labelFor = labelElement.htmlFor;
  }

  // Warn if 'for' exists but the 'id' does not
  if (labelFor && !inputId) {
    console.warn(`Spark Design System Warning - The value of 'for' (${labelFor}) on the label expects a matching 'id' on the input.`);
    return;
  }

  // Warn if 'for' and 'id' both exist but don't match
  if (inputId && labelFor && inputId !== labelFor) {
    console.warn(`Spark Design System Warning - The value of 'for' (${labelFor}) on the label should match the 'id' on the input (${inputId}).`);
    return;
  }

  // If we don't have a valid id, generate one with lodash
  if (!inputId) {
    inputId = uniqueId(`sprk_checkbox_input_`);
    element.setAttribute('id', inputId);
  }

  // set the value of 'for'
  labelElement.htmlFor = inputId;
}

const bindCheckboxUIEvents = (element) => {
  generateIdForCheckbox(element);
}

const checkbox = () => {
  getElements('.sprk-b-SelectionContainer input[type="checkbox"]', bindCheckboxUIEvents);
}

export {
  checkbox, generateIdForCheckbox, bindCheckboxUIEvents,
};