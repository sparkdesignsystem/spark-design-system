/* global document */
/**
 * Modal Functionality
 * Hides Modals, Shows Modals, Sets up Aria
 * Expects:
 * - modal container to have attribute `data-sprk-modal="customID"`
 * - 'Wait' modal type to have `data-sprk-modal-type="wait"` in addition
 * - 'customID' should be unique identifier for each modal
 * - modal mask element to have `data-sprk-modal="mask"`
 * - modal child element cancel to have `data-sprk-modal-cancel="customID"`
 * - trigger element for modal to have `data-sprk-modal-trigger="customID"``
 */

import getElements from '../utilities/getElements';
import { getFocusableEls, focusFirstEl, isActiveElement } from '../utilities/elementState';
import { isTabPressed, isEscPressed } from '../utilities/keypress';

const isMaskClicked = e => e.target.getAttribute('data-sprk-modal') === 'mask';
const isWaitModal = modal => modal.getAttribute('data-sprk-modal-type') === 'wait';

// Hide the modal, mask, remove aria-hidden on body and send focus back
const hideModal = (modal, focusedBodyEl) => {
  const isHidden = modal.classList.contains('sprk-u-Hide');
  const mask = document.querySelector('[data-sprk-modal="mask"]');
  const main = document.querySelector('[data-sprk-main]');

  // If the modal is hidden already or there are no mask and main els then exit
  if (isHidden || mask === null || main === null) return;

  modal.classList.add('sprk-u-Hide');
  mask.classList.add('sprk-u-Hide');
  // Remove the hidden aria attr from main content
  main.removeAttribute('aria-hidden');
  // Remove overflow hidden to allow scrolling again
  document.body.classList.remove('sprk-u-OverflowHidden');
  // Send focus back to last active element before modal was shown
  focusedBodyEl.focus();
};

// Show the modal, mask and set aria-hidden=true on body
const showModal = (modal) => {
  const isHidden = modal.classList.contains('sprk-u-Hide');
  const mask = document.querySelector('[data-sprk-modal="mask"]');
  const main = document.querySelector('[data-sprk-main]');

  // If the modal is shown already or there are no mask and main els then exit
  if (!isHidden || mask === null || main === null) return;

  modal.classList.remove('sprk-u-Hide');
  mask.classList.remove('sprk-u-Hide');
  // We want to alert assistive devices that main content is hidden
  main.setAttribute('aria-hidden', 'true');
  // Prevent background body from scrolling
  document.body.classList.add('sprk-u-OverflowHidden');
};

// Attach keydown(Esc, Tab, Shift+Tab) and click listeners while modal is open
const handleModalEvents = (modal, focusedBodyEl) => {
  const focusableEls = getFocusableEls(modal);
  const firstFocusableEl = focusableEls[0];
  const lastFocusableEl = focusableEls[focusableEls.length - 1];
  const isOpen = document.querySelector('[data-sprk-main]').hasAttribute('aria-hidden');
  // When modal is open the main content area will have aria-hidden=true
  // If it doesn't, we want to exit
  if (!isOpen) return;

  // When wait modal opens and has no focusable elements we apply focus to modal container
  if (isWaitModal(modal) && focusableEls.length === 0) {
    modal.focus();
  }

  // Listener for Esc, Tab, Shift+Tab events
  document.addEventListener('keydown', (e) => {
    // Handle key events
    switch (true) {
      case isWaitModal(modal):
        // Prevent wait modal tabbing
        e.preventDefault();
        break;
      case isEscPressed(e):
        e.preventDefault();
        hideModal(modal, focusedBodyEl);
        break;
      case isTabPressed(e) && e.shiftKey:
        // Handle backward tabbing if tabbing from first element
        if (isActiveElement(firstFocusableEl)) {
          e.preventDefault();
          lastFocusableEl.focus();
        }
        break;
      case isTabPressed(e):
        // Handle forward tabbing if tabbing from last element
        if (isActiveElement(lastFocusableEl)) {
          e.preventDefault();
          firstFocusableEl.focus();
        }
        break;
      default:
        break;
    }
  });

  // If mask is clicked we hide the modal
  document.addEventListener('click', (e) => {
    if (isMaskClicked(e) && !isWaitModal(modal)) {
      e.preventDefault();
      hideModal(modal, focusedBodyEl);
    }
  });
};

// Add click listeners to cancel elements to handle hiding modal
const setupCancelEl = (modal, modalName, focusedBodyEl) => {
  // Look for cancel elements
  getElements(`[data-sprk-modal-cancel="${modalName}"]`, (cancel) => {
    // Hide the modal when cancel is clicked
    cancel.addEventListener('click', (e) => {
      e.preventDefault();
      hideModal(modal, focusedBodyEl);
    });
  });
};

const modals = () => {
  getElements('[data-sprk-modal-trigger]', (modalTrigger) => {
    // Add click listener to each modal trigger found
    modalTrigger.addEventListener('click', (event) => {
      // Grab active element to send focus back to when modal closes
      const focusedBodyEl = document.activeElement;
      // Grab value of modal data-attr to get the trigger's corresponding modal name
      const modalName = modalTrigger.getAttribute('data-sprk-modal-trigger');
      event.preventDefault();
      // Grab the corresponding modal with same attr value
      getElements(`[data-sprk-modal="${modalName}"]`, (modal) => {
        // Show the modal that was clicked
        showModal(modal, focusedBodyEl);
        focusFirstEl(modal);
        setupCancelEl(modal, modalName, focusedBodyEl);
        handleModalEvents(modal, focusedBodyEl);
      });
    });
  });
};

export {
  modals,
  showModal,
  hideModal,
  getFocusableEls,
  focusFirstEl,
  isTabPressed,
  isMaskClicked,
  isWaitModal,
  isEscPressed,
  setupCancelEl,
  isActiveElement,
  handleModalEvents,
};
