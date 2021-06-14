import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SprkHeadingModule } from './sprk-heading.module';
import { SprkHeadingDirective } from './sprk-heading.directive';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';
export * from '../sprk-text/sprk-text.stories';

export default {
  title: 'Foundations/Typography',
  component: SprkHeadingDirective,
  decorators: [
    storyWrapper(
      (storyContent) => `<div class="sprk-o-Box">${storyContent}<div>`,
    ),
  ],
  parameters: {
    docs: {
      iframeHeight: 200,
      description: {
        component: `
${markdownDocumentationLinkBuilder('typography', 'foundations')}

##### Line-height Collision

By default, line height on type will create extra
whitespace around the top and bottom of the text.
When the text is in a container that has padding applied,
it appears larger than intended, due to this extra
whitespace.

Spark automatically removes this whitespace from headings,
but it will only be removed on body copy if the Spark
body classes are used.

For details on how we remove the whitespace, please see this article:
[Cropping Away Negative Impacts of Line Height](https://medium.com/eightshapes-llc/cropping-away-negative-impacts-of-line-height-84d744e016ce)

The type sizes defined in Spark all have this extra
whitespace removed. Heading elements have this cropping
automatically applied, where body copy will need the
correct type classes applied.
`,
      },
    },
  },
};

const modules = {
  imports: [SprkHeadingModule],
};

export const pageTitle = () => ({
  moduleMetadata: modules,
  template: `
    <h1 sprkHeading variant="displayTwo" isPageTitle="true">
      The Quick Brown Fox
      Jumps Over the Lazy Dog
    </h1>
  `,
});

pageTitle.parameters = {
  jest: ['sprk-heading.directive'],
};

export const displayOne = () => ({
  moduleMetadata: modules,
  template: `
    <h1 sprkHeading variant="displayOne">
      The Quick Brown Fox
      Jumps Over the Lazy Dog
    </h1>
  `,
});

displayOne.parameters = {
  jest: ['sprk-heading.directive'],
};

export const displayTwo = () => ({
  moduleMetadata: modules,
  template: `
    <h2 sprkHeading variant="displayTwo">
      The Quick Brown Fox
      Jumps Over the Lazy Dog
    </h2>
  `,
});

displayTwo.parameters = {
  jest: ['sprk-heading.directive'],
};

export const displayThree = () => ({
  moduleMetadata: modules,
  template: `
    <h3 sprkHeading variant="displayThree">
      The Quick Brown Fox
      Jumps Over the Lazy Dog
    </h3>
  `,
});

displayThree.parameters = {
  jest: ['sprk-heading.directive'],
};

export const displayFour = () => ({
  moduleMetadata: modules,
  template: `
    <h4 sprkHeading variant="displayFour">
      The Quick Brown Fox
      Jumps Over the Lazy Dog
    </h4>
  `,
});

displayFour.parameters = {
  jest: ['sprk-heading.directive'],
};

export const displayFive = () => ({
  moduleMetadata: modules,
  template: `
    <h5 sprkHeading variant="displayFive">
      The Quick Brown Fox
      Jumps Over the Lazy Dog
    </h5>
  `,
});

displayFive.parameters = {
  jest: ['sprk-heading.directive'],
};

export const displaySix = () => ({
  moduleMetadata: modules,
  template: `
    <h6 sprkHeading variant="displaySix">
      The Quick Brown Fox
      Jumps Over the Lazy Dog
    </h6>
  `,
});

displaySix.parameters = {
  jest: ['sprk-heading.directive'],
};

export const displaySeven = () => ({
  moduleMetadata: modules,
  template: `
    <h6 sprkHeading variant="displaySeven">
      The Quick Brown Fox
      Jumps Over the Lazy Dog
    </h6>
  `,
});

displaySeven.parameters = {
  jest: ['sprk-heading.directive'],
};
