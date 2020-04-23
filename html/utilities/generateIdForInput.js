import { uniqueId } from 'lodash';

const generateIdForInput = (inputElement, labelElement, componentName) => {
  let inputId = inputElement.getAttribute('id');
  let labelFor = labelElement.htmlFor;
  
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
    inputId = uniqueId(`sprk_${componentName}_input_`);
    inputElement.setAttribute('id', inputId);
  }

  // set the value of 'for'
  labelElement.htmlFor = inputId;
};

export { generateIdForInput as default };