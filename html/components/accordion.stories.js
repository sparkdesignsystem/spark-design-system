import { useEffect } from '@storybook/client-api';
import { toggle } from './toggle';
import '../utilities/polyfills/classListSVG';
import { markdownDocumentationLinkBuilder } from '../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Accordion',
  decorators: [
    story => `<div class="sprk-o-Box">${story()}</div>`,
  ],
  parameters: {
    info: `
${markdownDocumentationLinkBuilder('components', 'accordion')}
- \`data-sprk-toggle\` and \`data-sprk-toggle-type\` are
necessary attributes for this component to function.
This will take care of visually expanding/collapsing
the accordion as well as toggling the \`aria-expanded\` attribute.
- The \`data-id\` property is provided as a hook for
automated tools. If you have multiple instances of the
same variant of a component on the same page, make
sure each instance has a unique \`data-id\` property
("accordion-primary-1", "accordion-primary-2", "accordion-secondary-1", etc).
`,
    docs: { iframeHeight: 420 },
  },
};

export const defaultStory = () => {
  useEffect(() => {
    toggle();
  }, []);

  return `
<ul class="sprk-c-Accordion sprk-o-VerticalList">
  <li class="sprk-c-Accordion__item" data-sprk-toggle="container">
    <a
      aria-controls="details-one"
      class="sprk-c-Accordion__summary"
      data-id="accordion-item-1"
      data-analytics="analytics_string_goes_here"
      data-sprk-toggle="trigger"
      data-sprk-toggle-type="accordion"
      href="#">
        <h3 class="sprk-c-Accordion__heading sprk-b-TypeDisplaySeven">
          This is an accordion heading
        </h3>

        <svg
          class="
            sprk-c-Icon sprk-c-Icon--toggle
            sprk-c-Icon--l
            sprk-c-Accordion__icon
          "
          data-sprk-toggle="icon"
          viewBox="0 0 64 64">
          <use
            xlink:href="#chevron-up-circle-two-color"
            data-sprk-toggle="accordionIconUseElement"></use>
        </svg>
    </a>

    <div
      data-sprk-toggle="content"
      id="details-one">
      <div class="sprk-c-Accordion__content sprk-o-Stack sprk-o-Stack--medium">
        <p class="sprk-b-TypeBodyTwo sprk-o-Stack__item">
          This is an example of multiple HTML
          elements used for the content in an accordion item.
        </p>

        <ul class="sprk-b-List sprk-b-List--indented sprk-o-Stack__item">
          <li>
            List Item One
          </li>

          <li>
            List Item Two
          </li>

          <li>
            List Item Three
          </li>
        </ul>
      </div>
    </div>
  </li>

  <li class="sprk-c-Accordion__item" data-sprk-toggle="container">
    <a
      aria-controls="details-two"
      class="sprk-c-Accordion__summary"
      data-id="accordion-item-2"
      data-analytics="analytics_string_goes_here"
      data-sprk-toggle="trigger"
      data-sprk-toggle-type="accordion"
      href="#">
        <h3 class="sprk-c-Accordion__heading sprk-b-TypeDisplaySeven">
          This is an accordion heading
        </h3>

        <svg
          class="
            sprk-c-Icon
            sprk-c-Icon--toggle
            sprk-c-Icon--l
            sprk-c-Accordion__icon
          "
          data-sprk-toggle="icon"
          viewBox="0 0 64 64">
          <use
            xlink:href="#chevron-up-circle-two-color"
            data-sprk-toggle="accordionIconUseElement"></use>
        </svg>
    </a>

    <div
      data-sprk-toggle="content"
      id="details-two">
      <div class="sprk-c-Accordion__content sprk-b-TypeBodyTwo">
        This is an example of accordion content.
        This is an example of accordion content.
        This is an example of accordion content.
        This is an example of accordion content.
      </div>
    </div>
  </li>

  <li class="sprk-c-Accordion__item" data-sprk-toggle="container">
    <a
      aria-controls="details-three"
      class="sprk-c-Accordion__summary"
      data-id="accordion-item-3"
      data-analytics="analytics_string_goes_here"
      data-sprk-toggle="trigger"
      data-sprk-toggle-type="accordion"
      href="#">
        <h3 class="sprk-c-Accordion__heading sprk-b-TypeDisplaySeven">
          This is an accordion heading
        </h3>

        <svg
          class="
            sprk-c-Icon sprk-c-Icon--toggle
            sprk-c-Icon--l sprk-c-Accordion__icon
          "
          data-sprk-toggle="icon"
          viewBox="0 0 64 64">
          <use
            xlink:href="#chevron-up-circle-two-color"
            data-sprk-toggle="accordionIconUseElement"></use>
        </svg>
    </a>

    <div
      data-sprk-toggle="content"
      id="details-three">
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
};
