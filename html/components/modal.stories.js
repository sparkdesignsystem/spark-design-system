import { useEffect } from '@storybook/client-api';
import { modals } from './modals';
import { markdownDocumentationLinkBuilder } from '../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Modal',
  decorators: [
    (story) => `<div class="sprk-o-Box" data-sprk-main>${story()}</div>`,
  ],
  parameters: {
    docs: { iframeHeight: 450 },
    info: `
${markdownDocumentationLinkBuilder('modal')}
- There are two parts to a Modal
    - 1. Modal Trigger (typically in the form of a Button) - When
    pressed, it triggers the Modal to appear.
    - 2. The Modal – Containing the information or actions.
- The Modal and background mask are hidden by default.
- A Modal should not be launched from within another Modal.
- The \`data-id\` property is provided as a hook for automated tools.
Each instance should have a unique \`data-id\` property.
("modal-choice-1", "modal-choice-2", "modal-info-1", etc).
- Make sure that the \`data-sprk-main\` attribute is applied to
the main body content container or modals will not work.
- Refer to the table of HTML data attributes to make sure
the correct attributes are applied in the correct places.
    `,
  },
};

export const defaultStory = () => {
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
      data-id="modal-choice-1"
    >
      <div class="sprk-o-Stack sprk-o-Stack--large">
        <header class="sprk-o-Stack__item sprk-c-Modal__header">
          <h2
            class="sprk-c-Modal__heading sprk-b-TypeDisplayFour"
            id="modalChoiceHeading"
          >
            Are you sure?
          </h2>

          <button
            class="sprk-c-Modal__icon"
            data-sprk-modal-cancel="exampleChoiceModal"
            type="button"
            aria-label="Close Modal"
          >
            <svg
              class="sprk-c-Icon"
              viewBox="0 0 64 64"
              aria-hidden="true"
              focusable="false"
            >
              <use xlink:href="#close"></use>
            </svg>
          </button>
        </header>

        <div class="sprk-o-Stack__item sprk-c-Modal__body">
          <p class="sprk-b-TypeBodyTwo" id="modalChoiceContent">
            This is some content that is in a modal.
            It explains what the modal is
            for. There will also be a way to close the modal.
          </p>
        </div>

        <footer
          class="
            sprk-o-Stack__item
            sprk-c-Modal__footer
            sprk-o-Stack
            sprk-o-Stack--split@xs
            sprk-o-Stack--end-row
            sprk-o-Stack--medium">
          <div class="sprk-o-Stack__item">
            <button
              class="
                sprk-c-Button
                sprk-c-Button--tertiary
                "
              data-sprk-modal-cancel="exampleChoiceModal"
            >
              Cancel
            </button>
          </div>
          <div class="sprk-o-Stack__item">
            <button class="sprk-c-Button">
              Confirm
            </button>
          </div>
        </footer>
      </div>
    </div>

    <div
      data-sprk-modal-mask="true"
      class="sprk-c-ModalMask"
      tabindex="-1"
    ></div>
  `;
};

defaultStory.story = {
  name: 'Default',
  parameters: {
    jest: ['modals'],
  },
};

export const info = () => {
  useEffect(() => {
    modals();
  });

  return `
    <div
      class="sprk-c-Modal"
      role="dialog"
      tabindex="-1"
      aria-labelledby="modalInfoHeading"
      aria-modal="true"
      aria-describedby="modalInfoContent"
      data-sprk-modal="exampleInfoModal"
      data-id="modal-info-1"
    >
      <div class="sprk-o-Stack sprk-o-Stack--large">
        <header class="sprk-o-Stack__item sprk-c-Modal__header">
          <h2
            class="sprk-c-Modal__heading sprk-b-TypeDisplayFour"
            id="modalInfoHeading"
          >
            Info Modal
          </h2>

          <button
            class="sprk-c-Modal__icon"
            data-sprk-modal-cancel="exampleInfoModal"
            type="button"
            aria-label="Close Modal"
          >
            <svg
              class="sprk-c-Icon"
              viewBox="0 0 64 64"
              aria-hidden="true"
              focusable="false"
            >
              <use xlink:href="#close"></use>
            </svg>
          </button>
        </header>

        <div class="sprk-o-Stack__item sprk-c-Modal__body">
          <p class="sprk-b-TypeBodyTwo" id="modalInfoContent">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
    <div
      data-sprk-modal-mask="true"
      class="sprk-c-ModalMask"
      tabindex="-1"
    ></div>
  `;
};

info.story = {
  parameters: {
    jest: ['modals'],
  },
};

export const wait = () => {
  useEffect(() => {
    modals();
  });

  return `
    <div
      class="sprk-c-Modal sprk-c-Modal--wait"
      role="dialog"
      tabindex="-1"
      aria-labelledby="modalWaitHeading"
      aria-modal="true"
      aria-describedby="modalWaitContent"
      data-sprk-modal="exampleWaitModal"
      data-sprk-modal-type="wait"
      data-id="modal-wait-1"
    >
      <div class="sprk-o-Stack sprk-o-Stack--large">
        <header class="sprk-o-Stack__item sprk-c-Modal__header">
          <h2
            class="sprk-c-Modal__heading sprk-b-TypeDisplayFour"
            id="modalWaitHeading"
          >
            Wait Modal
          </h2>
        </header>

        <div
          class="sprk-o-Stack__item
            sprk-c-Modal__body sprk-o-Stack sprk-o-Stack--medium"
        >
          <div
            class="
              sprk-o-Stack__item
              sprk-c-Spinner
              sprk-c-Spinner--circle
              sprk-c-Spinner--large
              sprk-c-Spinner--primary"
          ></div>
          <p
            class="sprk-o-Stack__item sprk-b-TypeBodyTwo sprk-c-Modal__content"
            id="modalWaitContent">
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>

    <div
      data-sprk-modal-mask="true"
      class="sprk-c-ModalMask"
      tabindex="-1"
    ></div>
  `;
};

wait.story = {
  parameters: {
    jest: ['modals'],
  },
};
