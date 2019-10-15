import { useEffect } from '@storybook/client-api';
import { modals } from './modals';

export default {
  title: 'Components|Modals',
};

export const choice = () => {
  useEffect(() => {
    modals();
  });

  return `

  <div
  class="sprk-c-Modal"
  role="dialog"
  tabindex="-1"
  aria-labelledby="modalChoiceHeading"
  aria-modal="true"
  aria-describedby="modalChoiceContent"
  data-sprk-modal="exampleChoiceModal"
  data-id="modal-choice-1">
  <div class="sprk-o-Stack sprk-o-Stack--large">
    <header class="sprk-o-Stack__item sprk-c-Modal__header">
      <h2 class="sprk-c-Modal__heading sprk-b-TypeDisplayFour" id="modalChoiceHeading">
        Are you sure?
      </h2>

      <button
        class="sprk-c-Modal__icon"
        data-sprk-modal-cancel="exampleChoiceModal"
        type="button" aria-label="Close Modal">
        <svg class="sprk-c-Icon sprk-c-Icon--stroke-current-color" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
          <use xlink:href="#close"></use>
        </svg>
      </button>
    </header>

    <div class="sprk-o-Stack__item sprk-c-Modal__body">
      <p class="sprk-b-TypeBodyTwo" id="modalChoiceContent">
      This is some content that is in a modal. It explains what the modal is for. There will also be a way to close the modal.
      </p>
    </div>

    <footer class="sprk-o-Stack__item">
      <button class="sprk-c-Button sprk-u-mrm">
        Confirm
      </button>

      <button class="sprk-c-Button sprk-c-Button--tertiary" data-sprk-modal-cancel="exampleChoiceModal">
        Cancel
      </button>
    </footer>
  </div>
</div>
<div data-sprk-modal-mask="true" class="sprk-c-ModalMask " tabindex="-1"></div>
  `
};

choice.story = {
  name: 'Choice',
};
