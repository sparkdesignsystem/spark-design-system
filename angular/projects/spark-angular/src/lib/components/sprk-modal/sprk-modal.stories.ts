// @ts-ignore prettier-ignore
import {
  moduleMetadata,
  Meta,
  componentWrapperDecorator,
} from '@storybook/angular';
import { SprkModalModule } from './sprk-modal.module';
import { SprkModalComponent } from './sprk-modal.component';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Modal',
  component: SprkModalComponent,
  decorators: [
    moduleMetadata({
      imports: [SprkModalModule],
    }),
    componentWrapperDecorator(
      (story) => `<div class="sprk-o-Box">${story}</div>`,
    ),
  ],
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
      description: {
        component: `
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
- Dismissing a Wait Modal is done programmatically.
You must write your own function to toggle dismissal through the '(hide)' input.
    `,
      },
      iframeHeight: 450,
    },
  },
} as Meta;

export const defaultStory = () => ({
  template: `
    <sprk-modal
      [(isVisible)]="choiceVisible"
      title="Are you sure?"
      modalType="choice"
      idString="modal-choice-1"
      (confirmClick)="confirmClick($event)"
    >
      This is some content that is in a modal. It explains what the modal is for.
      There will also be a way to close the modal.
    </sprk-modal>
  `,
  props: {
    choiceVisible: true,
  },
});

defaultStory.storyName = 'Default';

defaultStory.parameters = {
  jest: ['sprk-modal.component'],
};

export const info = () => ({
  template: `
    <sprk-modal
      [(isVisible)]="infoVisible"
      title="Info Modal"
      modalType="info"
      idString="modal-info-1"
    >
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua.
    </sprk-modal>
  `,
  props: {
    infoVisible: true,
  },
});

info.parameters = {
  jest: ['sprk-modal.component'],
};

export const wait = () => ({
  template: `
    <sprk-modal
      [(isVisible)]="waitVisible"
      title="Wait Modal"
      modalType="wait"
      idString="modal-wait-1"
    >
      <p class="sprk-c-Modal__content">
        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </p>
    </sprk-modal>
  `,
  props: {
    waitVisible: true,
  },
});

wait.parameters = {
  jest: ['sprk-modal.component'],
};
