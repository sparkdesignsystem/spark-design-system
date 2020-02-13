import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SprkHeadingModule } from './sprk-heading.module';
import { SprkHeadingDirective } from './sprk-heading.directive';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Foundations/Heading',
  component: SprkHeadingDirective,
  decorators: [
    storyWrapper(
      storyContent => (
        `<div class="sprk-o-Box">${storyContent}<div>`
      )
    )
  ],
  parameters: {
    info: `${markdownDocumentationLinkBuilder('divider')}`,
    docs: { iframeHeight: 200 },
  },
};

const modules = {
  imports: [
    SprkHeadingModule,
  ],
};

export const pageTitle = () => ({
  moduleMetadata: modules,
  template: `
    <h1 sprkHeading variant="one" isPageTitle="true">
      The Quick Brown Fox
      Jumps Over the Lazy Dog
    </h1>
  `
});

export const displayOne = () => ({
  moduleMetadata: modules,
  template: `
    <h1 sprkHeading variant="one">
      The Quick Brown Fox
      Jumps Over the Lazy Dog
    </h1>
  `
});

export const displayTwo = () => ({
  moduleMetadata: modules,
  template: `
    <h2 sprkHeading variant="two">
      The Quick Brown Fox
      Jumps Over the Lazy Dog
    </h2>
  `
});

export const displayThree = () => ({
  moduleMetadata: modules,
  template: `
    <h3 sprkHeading variant="three">
      The Quick Brown Fox
      Jumps Over the Lazy Dog
    </h3>
  `
});

export const displayFour = () => ({
  moduleMetadata: modules,
  template: `
    <h4 sprkHeading variant="four">
      The Quick Brown Fox
      Jumps Over the Lazy Dog
    </h4>
  `
});

export const displayFive = () => ({
  moduleMetadata: modules,
  template: `
    <h5 sprkHeading variant="five">
      The Quick Brown Fox
      Jumps Over the Lazy Dog
    </h5>
  `
});

export const displaySix = () => ({
  moduleMetadata: modules,
  template: `
    <h6 sprkHeading variant="six">
      The Quick Brown Fox
      Jumps Over the Lazy Dog
    </h6>
  `
});

export const displaySeven = () => ({
  moduleMetadata: modules,
  template: `
    <h6 sprkHeading variant="seven">
      The Quick Brown Fox
      Jumps Over the Lazy Dog
    </h6>
  `
});
