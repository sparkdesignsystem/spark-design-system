import { useEffect } from '@storybook/client-api';
import { tooltip } from './tooltip';
import '../utilities/polyfills/classListSVG';
import { markdownDocumentationLinkBuilder } from '../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Tooltip',
  decorators: [(story) => `<div class="sprk-o-Box">${story()}</div>`],
  parameters: {
    info: `
${markdownDocumentationLinkBuilder('toggle')}
    `,
    docs: { iframeHeight: 160 },
  },
};

export const defaultStory = () => {
  useEffect(() => {
    tooltip();
  }, []);

  return `
    <span data-sprk-tooltip="container" class="sprk-c-Tooltip__container">
      <button
        data-sprk-tooltip="trigger"
        class="sprk-c-Tooltip__trigger"
        aria-labelledby="tooltip_1"
        type="button"
      >
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
        Sit nulla est ex deserunt exercitation anim occaecat.
        Nostrud ullamco deserunt aute id dee doo da fauxet la gigman roo.
      </span>
    </span>
  `;
};

defaultStory.story = {
  name: 'Tooltip',
  parameters: {
    jest: ['tooltip'],
  },
};
