import { useEffect } from '@storybook/client-api';
import { autocomplete } from './autocomplete';
import { markdownDocumentationLinkBuilder } from '../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Autocomplete',
  decorators: [(story) => `<div class="sprk-o-Box">${story()}</div>`],
  parameters: {
    info: `
${markdownDocumentationLinkBuilder('autocomplete')}
- autocompletes complete automatically
    `,
    docs: { iframeHeight: 200 },
  },
};

export const defaultStory = () => {
  useEffect(() => {
    autocomplete();
  }, []);

  return `
    <div data-sprk-autocomplete>
      <div
        class="sprk-c-Autocomplete__announcement"
      ></div>

      <input
        sprk-c-Autocomplete__input
      />

      <ul
        class="sprk-c-Autocomplete__results sprk-u-Display--none"
      ></ul>
    </div>
  `;
};

defaultStory.story = {
  name: 'Default',
  parameters: {
    jest: ['autocomplete'],
  },
};
