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

// Toggle the open class on the icon
const toggleIconCSS = (toggleIcon) => {
  toggleIcon.classList.toggle('sprk-c-Icon--open');
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

const handleToggleClick = (toggleContent, toggleIcon, element) => {
  toggleContentCSS(toggleContent);

  if (toggleIcon) {
    toggleIconCSS(toggleIcon);
  }
  // If toggle type is the accordion then add a class when its open
  if (element.getAttribute('data-sprk-toggle-type') === 'accordion') {
    element.classList.toggle('sprk-c-Accordion__summary--open');
  }
  toggleAriaExpanded(element);
};

const handleToggleChevronIcon = (document, element) => {
  // If the element contains 'sprk-c-Accordion__summary--open',
  // set xlink:href attribute to be the filled icon and add a class to change
  // styles.
  const sprkChevronCircle = element.querySelector('use');
  if (element.classList.contains('sprk-c-Accordion__summary--open')) {
    const circle = document.querySelector('.sprk-SvgChevronCircleFilled--circle');
    const arrow = document.querySelector('.sprk-SvgChevronCircleFilled--arrow');

    sprkChevronCircle.setAttribute('xlink:href', '#chevron-down-circle-filled');
    circle.classList.add('sprk-c-Accordion__icon');
    arrow.classList.add('sprk-c-Accordion__icon');
  } else {
    sprkChevronCircle.setAttribute('xlink:href', '#chevron-down-circle');
  }
};

const bindToggleUIEvents = (element) => {
  // Get the toggle's trigger and content elements
  const toggleTrigger = element.querySelector('[data-sprk-toggle="trigger"]');
  const toggleContent = element.querySelector('[data-sprk-toggle="content"]');
  const toggleIcon = element.querySelector('[data-sprk-toggle="icon"]');
  // Set aria-expanded to false initially
  toggleAriaExpanded(toggleTrigger);
  // Add click event listener to trigger for each toggle collection we find
  toggleTrigger.addEventListener('click', (e) => {
    e.preventDefault();
    handleToggleClick(toggleContent, toggleIcon, e.currentTarget);
  });
};

const toggle = () => {
  getElements('[data-sprk-toggle="container"]', bindToggleUIEvents);
};

export {
  toggle,
  toggleContentCSS,
  toggleIconCSS,
  toggleAriaExpanded,
  handleToggleClick,
  handleToggleChevronIcon,
  bindToggleUIEvents,
};
