/* global document */
import getElements from '../../../../packages/spark-core/es5/getElements';

const mapTemplates = (id, templates) => {
  const matchingTemplates = Array.from(templates).filter((template) => {
    const templateId = template.getAttribute('data-template-id');
    return (
      templateId === id
      || templateId === `${id}-error-state`
      || templateId === `${id}-disabled-state`
    );
  });
  return matchingTemplates;
};

const toggleTemplate = (id, value, templates) => {
  // loop through matches and decide whether to show / hide
  templates.forEach((matchingTemplate) => {
    const templateId = matchingTemplate.getAttribute('data-template-id');
    matchingTemplate.classList.add('sprk-u-Display--none');
    if ((templateId === id && value === 'normal') || templateId.includes(value)) {
      matchingTemplate.classList.remove('sprk-u-Display--none');
    }
  });
};

const bindUIEvents = (element) => {
  element.addEventListener('change', (event) => {
    const { value } = event.target;
    const changerId = element.getAttribute('data-state-changer-id');
    const templates = document.querySelectorAll('[data-template-id]');
    toggleTemplate(changerId, value, mapTemplates(changerId, templates));
  });
};

const formStateChanger = () => {
  getElements('[data-state-changer-id]', bindUIEvents);
};

export {
  formStateChanger, bindUIEvents, mapTemplates, toggleTemplate,
};
