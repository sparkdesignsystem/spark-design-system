/**
 *  Toggle JS
 *  If `data-sprk-toggle="container"`
 *  elements are available in the DOM
 *  we listen for clicks on the trigger and remove
 *  the hide class on content if its there.
 *  Inversely, if the trigger is clicked and the content
 *  is currently shown we now add a hide class to it so
 *  the content will now be hidden.
 *  To support non JS scenarios we hide the content
 *  on load if we detect the toggle container.
 */
import getElements from '../utilities/getElements';

// Toggle the hide class on the content
const toggleContentCSS = (toggleContent) => {
  toggleContent.classList.toggle('sprk-u-HideWhenJs');
};

// Slide toggle the accordion content
const toggleAccordionContentCSS = (toggleContent) => {
  const toggleContentHeight = toggleContent;
  toggleContent.classList.remove('sprk-u-HideWhenJs');

  if (!toggleContent.classList.contains('sprk-c-Accordion__details--open')) {
    toggleContent.classList.add('sprk-c-Accordion__details--open');

    // Set the content height to auto
    toggleContentHeight.style.height = 'auto';

    // Find the height of the details container
    const toggleContentOpenHeight = `${toggleContentHeight.clientHeight}px`;

    // Set the content height to 0px
    toggleContentHeight.style.height = '0px';

    // Wait, then set the content height to the height of the details container
    setTimeout(() => {
      toggleContentHeight.style.height = toggleContentOpenHeight;
    }, 0);
  } else {
    toggleContentHeight.style.height = '0px';
    toggleContent.classList.remove('sprk-c-Accordion__details--open');
  }
};

// Toggle the open class on the icon
const toggleIconCSS = (toggleIcon) => {
  toggleIcon.classList.toggle('sprk-c-Icon--open');
};

// Toggle the open class on the icon
const toggleAccordionIconCSS = (toggleIcon, toggleIconUse) => {
  // If the element contains 'sprk-c-Accordion__summary--open',
  // set xlink:href attribute to be the filled icon.
  if (toggleIcon.classList.contains('sprk-c-Icon--open')) {
    toggleIconUse.setAttribute('xlink:href', '#chevron-down-circle-filled');
  } else {
    toggleIconUse.setAttribute('xlink:href', '#chevron-down-circle');
  }
};

// Toggle the aria expanded attribute
const toggleAriaExpanded = (toggleTrigger) => {
  // If the trigger has the attr then determine toggle state
  if (toggleTrigger.hasAttribute('aria-expanded')) {
    const isExpanded = toggleTrigger.getAttribute('aria-expanded');
    toggleTrigger.setAttribute('aria-expanded', isExpanded === 'false' ? 'true' : 'false');
  } else {
    // If it doesn't have it then set it to false initially
    toggleTrigger.setAttribute('aria-expanded', 'false');
  }
};

const handleToggleClick = (toggleContent, toggleTrigger, toggleIcon, toggleIconUse, element) => {
  toggleContentCSS(toggleContent);

  if (toggleIcon) {
    toggleIconCSS(toggleIcon);
  }

  if (toggleIconUse) {
    toggleAccordionIconCSS(toggleIcon, toggleIconUse);
  }

  // If toggle type is the accordion then add a class when its open
  if (element.getAttribute('data-sprk-toggle-type') === 'accordion') {
    element.classList.toggle('sprk-c-Accordion__summary--open');
    toggleAccordionContentCSS(toggleContent, toggleTrigger);
  }

  toggleAriaExpanded(element);
};

const bindToggleUIEvents = (element) => {
  // Get the toggle's trigger and content elements
  const toggleTrigger = element.querySelector('[data-sprk-toggle="trigger"]');
  const toggleContent = element.querySelector('[data-sprk-toggle="content"]');
  const toggleIcon = element.querySelector('[data-sprk-toggle="icon"]');
  const toggleIconUse = element.querySelector('[data-sprk-toggle="accordionIconUseElement"]');

  // Set aria-expanded to false initially
  toggleAriaExpanded(toggleTrigger);
  // Add click event listener to trigger for each toggle collection we find
  toggleTrigger.addEventListener('click', (e) => {
    e.preventDefault();
    handleToggleClick(toggleContent, toggleTrigger, toggleIcon, toggleIconUse, e.currentTarget);
  });
};

const toggle = () => {
  getElements('[data-sprk-toggle="container"]', bindToggleUIEvents);
};

export {
  toggle,
  toggleContentCSS,
  toggleAccordionContentCSS,
  toggleIconCSS,
  toggleAccordionIconCSS,
  toggleAriaExpanded,
  handleToggleClick,
  bindToggleUIEvents,
};
