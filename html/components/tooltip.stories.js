import { useEffect } from '@storybook/client-api';
import { tooltip } from './tooltip';
import '../utilities/polyfills/classListSVG';
import { markdownDocumentationLinkBuilder } from '../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Tooltip',
  decorators: [(story) => `<div class="sprk-o-Box">${story()}</div>`],
  parameters: {
    info: `
${markdownDocumentationLinkBuilder('tooltips')}
    `,
    docs: { iframeHeight: 160 },
  },
};

export const defaultStory = () => {
  useEffect(() => {
    tooltip();
  }, []);

  return `
  Some example text to go before for testing and  more
    <span data-sprk-tooltip="container" class="sprk-c-Tooltip__container">
      <button
        type="button"
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
        Use Tooltips to provide info that’s not vital to completing the task.
        Keep the text short and stick to what’s helpful and relevant.
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
