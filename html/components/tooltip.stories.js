import { useEffect } from '@storybook/client-api';
import { tooltip } from './tooltip';
import { modals } from './modals';
import '../utilities/polyfills/classListSVG';
import { markdownDocumentationLinkBuilder } from '../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Tooltip',
  decorators: [
    story => `<div class="sprk-o-Box">${story()}</div>`,
  ],
  parameters: {
    info: `
${markdownDocumentationLinkBuilder('toggle')}
    `,
    docs: { iframeHeight: 160 },
  },
};

export const lots = () => {
  useEffect(() => {
    tooltip();
  }, []);

  return `

  <span class="sprk-b-TypeBodyTwo" style="position: absolute; left: 5%; top: 5%;">
  <span data-sprk-tooltip="container" class="sprk-c-Tooltip__container">
  <button data-sprk-tooltip="trigger" class="sprk-c-Tooltip__trigger" aria-labelledby="tooltip_1">
    <svg
      class="sprk-c-Icon sprk-c-Icon--filled"
      aria-hidden="true"
    >
      <use xlink:href="#question-filled" />
    </svg>
  </button>
  <span
    data-sprk-tooltip="content"
    class="sprk-c-Tooltip"
    aria-hidden="true"
    id="tooltip_1"
    role="tooltip"
  >
    Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id dee doo da fauxet la gigman roo.
  </span>
  </span>

    </span>




  <span class="sprk-b-TypeBodyTwo" style="position: absolute; left: 5%; top: 55%;">
  <span data-sprk-tooltip="container" class="sprk-c-Tooltip__container">
      <button data-sprk-tooltip="trigger" class="sprk-c-Tooltip__trigger" aria-labelledby="tooltip_1">
        <svg
          class="sprk-c-Icon sprk-c-Icon--filled"
          aria-hidden="true"
        >
          <use xlink:href="#question-filled" />
        </svg>
      </button>
      <span
        data-sprk-tooltip="content"
        class="sprk-c-Tooltip"
        aria-hidden="true"
        id="tooltip_1"
        role="tooltip"
      >
        Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id dee doo da fauxet la gigman roo.
      </span>
    </span>
  </span>

</span>
  <span class="sprk-b-TypeBodyTwo" style="position: absolute; left: 55%; top: 5%;">
  <span data-sprk-tooltip="container" class="sprk-c-Tooltip__container">
      <button data-sprk-tooltip="trigger" class="sprk-c-Tooltip__trigger" aria-labelledby="tooltip_1">
        <svg
          class="sprk-c-Icon sprk-c-Icon--filled"
          aria-hidden="true"
        >
          <use xlink:href="#question-filled" />
        </svg>
      </button>
      <span
        data-sprk-tooltip="content"
        class="sprk-c-Tooltip"
        aria-hidden="true"
        id="tooltip_1"
        role="tooltip"
      >
        Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id dee doo da fauxet la gigman roo.
      </span>
    </span>

</span>


<span class="sprk-b-TypeBodyTwo" style="position: absolute; left: 55%; top: 55%;">
<span data-sprk-tooltip="container" class="sprk-c-Tooltip__container">
<button data-sprk-tooltip="trigger" class="sprk-c-Tooltip__trigger" aria-labelledby="tooltip_1">
  <svg
    class="sprk-c-Icon sprk-c-Icon--filled"
    aria-hidden="true"
  >
    <use xlink:href="#question-filled" />
  </svg>
</button>
<span
  data-sprk-tooltip="content"
  class="sprk-c-Tooltip"
  aria-hidden="true"
  id="tooltip_1"
  role="tooltip"
>
  Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id dee doo da fauxet la gigman roo.
</span>
</span>

  </span>


  `;
};

lots.story = {
  name: 'Lots',
  parameters: {
    jest: ['tooltip'],
  }
};

export const table = () => {
  useEffect(() => {
    tooltip();
    modals();
  }, []);

  return `




  <div class="sprk-b-TableContainer" data-id="table-1">
  <table class="sprk-b-Table sprk-b-Table--spacing-medium">
    <thead>
      <tr>
        <th>Column Heading
        <span data-sprk-tooltip="container" class="sprk-c-Tooltip__container">
        <button data-sprk-tooltip="trigger" class="sprk-c-Tooltip__trigger" aria-labelledby="tooltip_1">
          <svg
            class="sprk-c-Icon sprk-c-Icon--filled"
            aria-hidden="true"
            style="fill: white"
          >
            <use xlink:href="#question-filled" />
          </svg>
        </button>
        <span
          data-sprk-tooltip="content"
          class="sprk-c-Tooltip"
          aria-hidden="true"
          id="tooltip_1"
          role="tooltip"
        >
          Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id dee doo da fauxet la gigman roo.
        </span>
      </span></th>
        <th>Column Heading</th>
        <th>Column Heading</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Data 1 <span data-sprk-tooltip="container" class="sprk-c-Tooltip__container">
        <button data-sprk-tooltip="trigger" class="sprk-c-Tooltip__trigger" aria-labelledby="tooltip_1">
          <svg
            class="sprk-c-Icon sprk-c-Icon--filled"
            aria-hidden="true"
          >
            <use xlink:href="#question-filled" />
          </svg>
        </button>
        <span
          data-sprk-tooltip="content"
          class="sprk-c-Tooltip"
          aria-hidden="true"
          id="tooltip_1"
          role="tooltip"
        >
          Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id dee doo da fauxet la gigman roo.
        </span>
      </span></td>
        <td>Data 2</td>
        <td>Data 3</td>
      </tr>
      <tr>
        <td>Data 1</td>
        <td>Data 2</td>
        <td>Data 3</td>
      </tr>
      <tr>
        <td>Data 1</td>
        <td>Data 2</td>
        <td>Data 3</td>
      </tr>
      <tr>
        <td>Data 1</td>
        <td>Data 2</td>
        <td>Data 3</td>
      </tr>
    </tbody>
  </table>
</div>











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
            class="sprk-c-Icon sprk-c-Icon--stroke-current-color"
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
          for. There will also be a way to close the modal. <span data-sprk-tooltip="container" class="sprk-c-Tooltip__container">
          <button data-sprk-tooltip="trigger" class="sprk-c-Tooltip__trigger" aria-labelledby="tooltip_1">
            <svg
              class="sprk-c-Icon sprk-c-Icon--filled"
              aria-hidden="true"
            >
              <use xlink:href="#question-filled" />
            </svg>
          </button>
          <span
            data-sprk-tooltip="content"
            class="sprk-c-Tooltip"
            aria-hidden="true"
            id="tooltip_1"
            role="tooltip"
          >
            Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id dee doo da fauxet la gigman roo.
          </span>
        </span>
        </p>
      </div>

      <footer class="sprk-o-Stack__item">
        <button class="sprk-c-Button sprk-u-mrm">
          Confirm
        </button>

        <button
          class="sprk-c-Button sprk-c-Button--tertiary"
          data-sprk-modal-cancel="exampleChoiceModal"
        >
          Cancel
        </button>
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

table.story = {
  name: 'Table',
  parameters: {
    jest: ['tooltip'],
  }
};

export const defaultStory = () => {
  useEffect(() => {
    tooltip();
  }, []);

  return `
    <span data-sprk-tooltip="container" class="sprk-c-Tooltip__container">
      <button data-sprk-tooltip="trigger" class="sprk-c-Tooltip__trigger" aria-labelledby="tooltip_1">
        <svg
          class="sprk-c-Icon sprk-c-Icon--filled"
          aria-hidden="true"
        >
          <use xlink:href="#question-filled" />
        </svg>
      </button>
      <span
        data-sprk-tooltip="content"
        class="sprk-c-Tooltip"
        aria-hidden="true"
        id="tooltip_1"
        role="tooltip"
      >
        Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id dee doo da fauxet la gigman roo.
      </span>
    </span>
  `;
};

defaultStory.story = {
  name: 'Tooltip',
  parameters: {
    jest: ['tooltip'],
  }
};
