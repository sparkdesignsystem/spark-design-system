/* global document */
/**
 * Modal Functionality
 * Hides Modals, Shows Modals, Sets up Aria
 * Expects:
 * - main body content container to have attribute `data-sprk-main`
 * - modal container is outside of
 * `data-sprk-main` and has `data-sprk-modal="customID"`
 * - 'Wait' modal type to have `data-sprk-modal-type="wait"` in addition
 * - 'customID' should be unique identifier for each modal
 * - modal mask element to have `data-sprk-modal-mask="true"`
 * - modal child element cancel to have `data-sprk-modal-cancel="customID"`
 * - trigger element for modal to have `data-sprk-modal-trigger="customID"``
 */

import {
  getFocusableEls,
  focusFirstEl,
  isActiveElement,
} from '../utilities/elementState';
import { isTabPressed, isEscPressed } from '../utilities/keypress';

const isMaskClicked = (e) =>
  e.target.getAttribute('data-sprk-modal-mask') === 'true';
const isWaitModal = (modal) =>
  modal.getAttribute('data-sprk-modal-type') === 'wait';

// Hide the modal, mask, remove aria-hidden on main and send focus back
const hideModal = (modal, mask, main) => {
  const isHidden = modal.classList.contains('sprk-c-Modal--is-hidden');
  // Grab value of modal data-attr to get the trigger's corresponding modal name
  const modalName = modal.getAttribute('data-sprk-modal');
  // Grab modal trigger so it can be focused once modal is closed
  const modalTrigger = document.querySelector(
    `[data-sprk-modal-trigger="${modalName}"]`,
  );
  // If modal is hidden already or there are no mask and main els then exit
  if (isHidden || mask === null || main === null) return;
  modal.classList.add('sprk-c-Modal--is-hidden');
  mask.classList.add('sprk-c-ModalMask--is-hidden');
  // Remove the hidden aria attr from main content
  main.removeAttribute('aria-hidden');
  // Remove overflow hidden to allow scrolling again
  document.body.classList.remove('sprk-u-Overflow--hidden');
  // Send focus back to last active element before modal was shown if
  // modal trigger exists
  if (modalTrigger) {
    modalTrigger.focus();
  }
};

const currentOpenModal = (modalsList) => {
  let openModalEl;
  // Loop through modals to find open modal
  modalsList.forEach((modalEl) => {
    const isHidden = modalEl.classList.contains('sprk-c-Modal--is-hidden');
    if (!isHidden) openModalEl = modalEl;
  });
  return openModalEl;
};

const handleMaskEvents = (modalsList, mask, main, e) => {
  // Hide modal as long as its not the wait modal
  const currentOpenModalEl = currentOpenModal(modalsList);
  if (isMaskClicked(e) && !isWaitModal(currentOpenModalEl)) {
    e.preventDefault();
    hideModal(currentOpenModalEl, mask, main);
  }
};

// Handle when modal is open and a key is pressed
const handleModalKeyEvents = (modalsList, mask, main, e) => {
  const currentOpenModalEl = currentOpenModal(modalsList);
  // Return if there is no open modal
  if (!currentOpenModalEl) return;
  const focusableEls = getFocusableEls(currentOpenModalEl);
  const firstFocusableEl = focusableEls[0];
  const lastFocusableEl = focusableEls[focusableEls.length - 1];

  switch (true) {
    case isEscPressed(e):
      if (!isWaitModal(currentOpenModalEl)) {
        e.preventDefault();
        hideModal(currentOpenModalEl, mask, main);
      }
      break;
    case isTabPressed(e) && e.shiftKey:
      if (isWaitModal(currentOpenModalEl)) {
        e.preventDefault();
        currentOpenModalEl.focus();
      } else if (isActiveElement(firstFocusableEl)) {
        e.preventDefault();
        lastFocusableEl.focus();
      }
      break;
    case isTabPressed(e):
      if (isWaitModal(currentOpenModalEl)) {
        e.preventDefault();
        currentOpenModalEl.focus();
      } else if (isActiveElement(lastFocusableEl)) {
        e.preventDefault();
        firstFocusableEl.focus();
      }
      break;
    default:
      break;
  }
};

// Show the modal, mask and set aria-hidden=true on body
const showModal = (modal, mask, main) => {
  const isHidden = modal.classList.contains('sprk-c-Modal--is-hidden');
  const focusableEls = getFocusableEls(modal);

  // If the modal is shown already or there are no mask and main els then exit
  if (!isHidden || mask === null || main === null) return;

  // Show modal and mask
  modal.classList.remove('sprk-c-Modal--is-hidden');
  mask.classList.remove('sprk-c-ModalMask--is-hidden');

  // Alert assistive devices that main content is hidden
  main.setAttribute('aria-hidden', 'true');

  // Prevent background body from scrolling
  document.body.classList.add('sprk-u-Overflow--hidden');

  // When wait modal opens and has no
  // focusable elements we apply focus to modal container
  if (isWaitModal(modal) && focusableEls.length === 0) {
    modal.focus();
  }
};

const bindUIEvents = (mask, main, modalTriggers, modalsList, cancels) => {
  modalTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
      // Get value of data-attr to get corresponding modal name
      const modalName = trigger.getAttribute('data-sprk-modal-trigger');
      const modal = document.querySelector(`[data-sprk-modal="${modalName}"]`);
      if (
        trigger.getAttribute('data-sprk-modal-trigger-prevent-default') ===
        'true'
      ) {
        e.preventDefault();
      }
      showModal(modal, mask, main);
      focusFirstEl(modal);
    });
  });

  cancels.forEach((cancel) => {
    cancel.addEventListener('click', (e) => {
      // Get value of data-attr to get corresponding modal name
      const modalName = cancel.getAttribute('data-sprk-modal-cancel');
      const modal = document.querySelector(`[data-sprk-modal="${modalName}"]`);
      e.preventDefault();
      hideModal(modal, mask, main);
    });
  });

  if (modalsList.length > 0 && mask) {
    mask.addEventListener('click', (e) => {
      handleMaskEvents(modalsList, mask, main, e);
    });
  }

  document.addEventListener(
    'keydown',
    handleModalKeyEvents.bind(null, modalsList, mask, main),
    false,
  );
};

const modals = () => {
  const mask = document.querySelector('[data-sprk-modal-mask="true"]');
  const main = document.querySelector('[data-sprk-main]');
  const modalTriggers = document.querySelectorAll('[data-sprk-modal-trigger]');
  const modalsList = document.querySelectorAll('[data-sprk-modal]');
  const cancels = document.querySelectorAll('[data-sprk-modal-cancel]');

  bindUIEvents(mask, main, modalTriggers, modalsList, cancels);
};

export {
  modals,
  showModal,
  hideModal,
  isMaskClicked,
  isWaitModal,
  handleModalKeyEvents,
  handleMaskEvents,
  currentOpenModal,
  bindUIEvents,
};
