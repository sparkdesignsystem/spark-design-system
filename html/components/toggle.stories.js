import { useEffect } from '@storybook/client-api';
import { toggle } from './toggle';
import '../utilities/polyfills/classListSVG';
import { markdownDocumentationLinkBuilder } from '../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Toggle',
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
    toggle();
  }, []);

  return `
    <div
      data-sprk-toggle="container"
      data-id="toggle-1"
    >
      <button
        class="
          sprk-c-Toggle__trigger 
          sprk-b-TypeBodyThree 
          sprk-u-TextCrop--none
        "
        data-sprk-toggle="trigger"
      >
        <svg
          class="
            sprk-c-Icon
            sprk-c-Icon--xl
            sprk-c-Icon--toggle
            sprk-u-mrs
          "
          data-sprk-toggle="icon"
          viewBox="0 0 64 64"
        >
          <use xlink:href="#chevron-down-circle"></use>
        </svg>

        My Disclaimer
      </button>

      <div data-sprk-toggle="content">
        <p class="sprk-b-TypeBodyFour sprk-u-pts sprk-u-pbs">
          This is an example of disclaimer content.
          The aria-expanded="true" attribute
          will be viewable in the DOM on
          the toggle link when this content
          is shown. When this content is
          hidden the aria-expanded
          attribute will have the value
          of false. This helps accessibilty devices in
          understanding that the link is a
          control for expandable
          content.
        </p>
      </div>
    </div>
  `;
};

defaultStory.story = {
  name: 'Default',
  parameters: {
    jest: ['toggle'],
  },
};
