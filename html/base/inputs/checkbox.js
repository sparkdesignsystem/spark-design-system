import getElements from '../../utilities/getElements';
import { uniqueId } from 'lodash';

// Need some help naming this one.
const generateIdForCheckbox = (element) => {

  // This is going to change based on the structure we decide to go with - currently accounts for prototypes 1-3
  const labelElement = (element.nextElementSibling.tagName === 'LABEL') ? element.nextElementSibling : element.previousElementSibling;
  let inputId = element.getAttribute('id');
  if(labelElement) {
    let labelFor = labelElement.htmlFor;
  }
  /**
   * Using the same idea as the generateAriaControls function:
   * 
   * get id of input
   * get for of sibling label
   * 
   * Warn if for exists but the id does not
   * 
   * Warn if for and id both exist but don't match
   * 
   * If we don't have a valid id, generate one with lodash
   * set the value of for
   * 
   */
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