/* global document */
import getElements from '../utilities/getElements';

// Add aria-hidden="true" to body tag if model is open
// remove it if its closed
// const toggleAriaHidden = () => {
//
// };

// Add click event listener to button and toggle hide class
const toggleModal = (trigger, modal) => {
  const isClosed = modal.classList.contains('sprk-u-Hide');
  console.log(isClosed);
  if (!isClosed) {
    modal.classList.add('sprk-u-Hide');
  } else {
    modal.classList.remove('sprk-u-Hide');
  }
};
// // Esc key closes the modal and moves focus to whatever triggered the modal to open
// // Enter key submits modal’s form data, if applicable
// const modalKeys = () => {
//
// }
//
// // Tab key at bottom of modal cycles focus back to first focusable element at top of modal
// // Shift+Tab keys at top of modal cycle focus back to last focusable element at bottom of modal
// const modalTrapFocus = () => {
//
// }

// Get all modal triggers
const getListOfModals = () => {
  getElements('[data-sprk-modal-trigger]', (modalTrigger) => {
    modalTrigger.addEventListener('click', (event) => {
      event.preventDefault();
      // Grab value of data-attr to get the trigger's corresponding modal name
      const modalName = modalTrigger.getAttribute('data-sprk-modal-trigger');
      // Grab the corresponding modal and mask
      getElements(`[data-sprk-modal="${modalName}"]`, (modal) => {
        console.log(modal);
        // Show/Hide the modal and mask pair
        toggleModal(modalTrigger, modal);
      });
    });
  });
};
// const getModals = () => {
//   getListOfModals
// }

export { getListOfModals, toggleModal };
