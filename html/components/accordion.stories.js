import { useEffect } from '@storybook/client-api';
import { toggle } from './toggle';
import '../utilities/polyfills/classListSVG';
import { markdownDocumentationLinkBuilder } from '../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Accordion',
  decorators: [(story) => `<div class="sprk-o-Box">${story()}</div>`],
  parameters: {
    info: `
${markdownDocumentationLinkBuilder('accordion')}
- \`data-sprk-toggle\` and \`data-sprk-toggle-type\` are
necessary attributes for this component to function.
This will take care of visually expanding/collapsing
the accordion as well as toggling the \`aria-expanded\` attribute.
- The \`data-id\` property is provided as a hook for
automated tools. If you have multiple instances of the
same variant of a component on the same page, make
sure each instance has a unique \`data-id\` property
("accordion-primary-1", "accordion-primary-2", "accordion-secondary-1", etc).
- If your instance only has one item,
consider using
the [Toggle Component](/docs/components-toggle--default-story) instead.
`,
    docs: { iframeHeight: 420 },
  },
};

export const defaultStory = () => {
  useEffect(() => {
    toggle();
  }, []);

  return `
<ul 
  class="sprk-c-Accordion sprk-o-VerticalList"
>
  <li class="sprk-c-Accordion__item" data-sprk-toggle="container">
    <button
      class="sprk-c-Accordion__summary"
      data-id="accordion-item-1"
      data-analytics="analytics_string_goes_here"
      data-sprk-toggle="trigger"
      data-sprk-toggle-type="accordion"
      >
        <h3 class="sprk-c-Accordion__heading sprk-b-TypeDisplaySeven">
          This is an accordion heading
        </h3>

        <svg
          class="
            sprk-c-Icon sprk-c-Icon--toggle
            sprk-c-Accordion__icon
            sprk-c-Icon--xl
          "
          data-sprk-toggle="icon"
          viewBox="0 0 64 64">
          <use
            xlink:href="#chevron-down-circle"
            data-sprk-toggle="accordionIconUseElement"></use>
        </svg>
    </button>

    <div data-sprk-toggle="content">
      <div class="sprk-c-Accordion__content sprk-o-Stack sprk-o-Stack--medium">
        <p>
          This is an example of accordion content.
          This is an example of accordion content.
          This is an example of accordion content.
          This is an example of accordion content.
        </p>
      </div>
    </div>
  </li>

  <li class="sprk-c-Accordion__item" data-sprk-toggle="container">
    <button
      class="sprk-c-Accordion__summary"
      data-id="accordion-item-2"
      data-analytics="analytics_string_goes_here"
      data-sprk-toggle="trigger"
      data-sprk-toggle-type="accordion"
      >
        <h3 class="sprk-c-Accordion__heading sprk-b-TypeDisplaySeven">
          This is an accordion heading
        </h3>

        <svg
          class="
            sprk-c-Icon
            sprk-c-Icon--toggle
            sprk-c-Accordion__icon
            sprk-c-Icon--xl
          "
          data-sprk-toggle="icon"
          viewBox="0 0 64 64">
          <use
            xlink:href="#chevron-down-circle"
            data-sprk-toggle="accordionIconUseElement"></use>
        </svg>
    </button>

    <div data-sprk-toggle="content">
      <div class="sprk-c-Accordion__content sprk-b-TypeBodyTwo">
        This is an example of accordion content.
        This is an example of accordion content.
        This is an example of accordion content.
        This is an example of accordion content.
      </div>
    </div>
  </li>

  <li class="sprk-c-Accordion__item" data-sprk-toggle="container">
    <button
      class="sprk-c-Accordion__summary"
      data-id="accordion-item-3"
      data-analytics="analytics_string_goes_here"
      data-sprk-toggle="trigger"
      data-sprk-toggle-type="accordion"
      >
        <h3 class="sprk-c-Accordion__heading sprk-b-TypeDisplaySeven">
          This is an accordion heading
        </h3>

        <svg
          class="
            sprk-c-Icon
            sprk-c-Icon--toggle
            sprk-c-Accordion__icon
            sprk-c-Icon--xl
          "
          data-sprk-toggle="icon"
          viewBox="0 0 64 64">
          <use
            xlink:href="#chevron-down-circle"
            data-sprk-toggle="accordionIconUseElement"></use>
        </svg>
    </button>

    <div data-sprk-toggle="content">
      <div class="sprk-c-Accordion__content sprk-b-TypeBodyTwo">
        This is an example of accordion content.
        This is an example of accordion content.
        This is an example of accordion content.
        This is an example of accordion content.
      </div>
    </div>
  </li>
</ul>
`;
};

defaultStory.story = {
  name: 'Default',
  parameters: {
    jest: ['toggle'],
  },
};
