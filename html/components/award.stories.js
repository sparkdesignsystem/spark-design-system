import { useEffect } from '@storybook/client-api';
import { toggle } from './toggle';
import '../utilities/polyfills/classListSVG';
import { markdownDocumentationLinkBuilder } from '../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Award',
  decorators: [(story) => `<div class="sprk-o-Box">${story()}</div>`],
  parameters: {
    docs: { iframeHeight: 400 },
    info: `
${markdownDocumentationLinkBuilder('award')}
    `,
  },
};

export const defaultStory = () => {
  useEffect(() => {
    toggle();
  }, []);

  return `
  <div
    class="sprk-o-CenteredColumn sprk-o-Stack sprk-o-Stack--medium"
    data-id="award-1"
  >
    <h2
      class="
        sprk-o-Stack__item
        sprk-o-Stack__item--center-column
        sprk-b-TypeDisplayFive
        sprk-b-Measure
        sprk-b-Measure--narrow
        sprk-b-Type--center
      ">
      Award Component Heading
    </h2>

    <div
      class="
        sprk-o-Stack__item
        sprk-o-Stack__item--center-column
        sprk-o-Stack
        sprk-o-Stack--medium
        sprk-o-Stack--split@s
      ">
      <a
        class="sprk-o-Stack__item sprk-o-Stack__item--flex@s sprk-o-Stack"
        href="#nogo"
      >
        <img
          class="sprk-o-Stack__item sprk-o-Stack__item--center-column"
          alt="Spark placeholder image"
          src="https://spark-assets.netlify.app/spark-logo-updated.svg" />
      </a>

      <a
        class="
          sprk-o-Stack__item
          sprk-o-Stack__item--flex@s
          sprk-o-Stack
        "
        href="#nogo">
        <img
          class="sprk-o-Stack__item sprk-o-Stack__item--center-column"
          alt="Spark placeholder image"
          src="https://spark-assets.netlify.app/spark-logo-updated.svg" />
      </a>
    </div>

    <div
      class="sprk-o-Stack__item"
      data-sprk-toggle="container"
    >
      <button
        class="
          sprk-c-Toggle__trigger
          sprk-b-TypeBodyThree
          sprk-b-Type--crop-none
        "
        data-sprk-toggle="trigger"
      >
          <svg
            class="sprk-c-Icon sprk-c-Icon--xl sprk-c-Icon--toggle sprk-c-Toggle__trigger-icon"
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
          The aria-expanded="true" attribute will be
          viewable in the DOM on the toggle link when this
          content is shown. When this content is hidden the
          aria-expanded attribute will have the value of false.
          This helps accessibilty devices in understanding that
          the link is a control for expandable content.
        </p>
      </div>
    </div>
  </div>
  `;
};

defaultStory.story = {
  name: 'Default',
};
