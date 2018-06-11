/* global document */
/*
* Hide the Spark Site Wait Modal a short while after it has been triggered.
* This makes it so the user doesn't have to reload the page.
 */

import { hideModal, isWaitModal } from '../../../../packages/spark-core/components/modals';
import getElements from '../../../../packages/spark-core/utilities/getElements';

const MODAL_TIMER = 3000;

const bindUIEvents = (trigger) => {
  // Add click listener for each trigger
  trigger.addEventListener('click', () => {
    // Get value of trigger data-attr to get corresponding modal name
    const modalName = trigger.getAttribute('data-sprk-modal-trigger');
    const modal = document.querySelector(`[data-sprk-modal="${modalName}"]`);
    const mask = document.querySelector('[data-sprk-modal-mask="true"]');
    const main = document.querySelector('[data-sprk-main]');

    // Only proceed if this is a wait modal
    if (!isWaitModal(modal)) return;

    setTimeout(() => {
      hideModal(modal, mask, main);
    }, MODAL_TIMER);
  });
};

const hideWaitModal = () => {
  getElements('[data-sprk-modal-trigger]', bindUIEvents);
};
export { hideWaitModal, MODAL_TIMER, bindUIEvents };
