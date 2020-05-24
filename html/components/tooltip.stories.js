import { useEffect } from '@storybook/client-api';
import { tooltip } from './tooltip';
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

export const defaultStory = () => {
  useEffect(() => {
    tooltip();
  }, []);

  return `
    <span data-sprk-tooltip="container" class="sprk-c-Tooltip__container">
      <svg
        data-sprk-tooltip="trigger"
        class="sprk-c-Icon sprk-c-Icon--filled"
        aria-labelledby="tooltip_1"
        tabIndex="0"
      >
        <use xlink:href="#information-filled-small" aria-hidden='true' />
      </svg>
      <span
        data-sprk-tooltip="content"
        class="sprk-c-Tooltip"
        aria-hidden="true"
        id="tooltip_1"
        role="tooltip"
      >
        Tooltips provide additional information about the context.
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