/* global document */
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
// Toggle the hide class on the content
const toggleContentCSS = (toggleTrigger, toggleContent) => {
  toggleContent.classList.toggle('sprk-u-Hide');
};

// Toggle the flip class on the icon
const toggleIconCSS = (toggleIcon) => {
  toggleIcon.classList.toggle('sprk-c-Icon--flip');
};

// Toggle the aria expanded attribute
const toggleAriaExpanded = (toggleTrigger) => {
  const isExpanded = toggleTrigger.getAttribute('aria-expanded');
  toggleTrigger.setAttribute('aria-expanded', isExpanded === 'false' ? 'true' : 'false');
};

const toggle = () => {
  let toggleContainer = document.querySelectorAll('[data-sprk-toggle="container"]');

  // Convert toggleContainer nodelist to array
  toggleContainer = Array.from(toggleContainer);
  // First check if toggles are available in the DOM
  if (toggleContainer) {
    // For each toggle that we find we want to add a click listener and fn call on trigger
    toggleContainer.forEach((elem) => {
      // Get the toggle's trigger and content elems
      const toggleTrigger = elem.querySelector('[data-sprk-toggle="trigger"]');
      const toggleContent = elem.querySelector('[data-sprk-toggle="content"]');
      const toggleIcon = elem.querySelector('[data-sprk-toggle="icon"]');
      // Hide the toggle content initially
      toggleContent.classList.add('sprk-u-Hide');
      // Set aria-expanded to false initially
      toggleTrigger.setAttribute('aria-expanded', 'false');
      // Add click event listener to trigger for each toggle collection we find
      toggleTrigger.addEventListener('click', (event) => {
        event.preventDefault();
        toggleContentCSS(toggleTrigger, toggleContent);
        toggleIconCSS(toggleIcon);
        toggleAriaExpanded(toggleTrigger);
      });
    });
  }
};

export { toggle, toggleContentCSS, toggleIconCSS, toggleAriaExpanded };
