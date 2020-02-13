import React from 'react';
import SprkHeading from './SprkHeading';
import { markdownDocumentationLinkBuilder } from '../../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Foundations/Heading',
  decorators: [
    story => <div className="sprk-o-Box">{story()}</div>
  ],
  component: SprkHeading,
  parameters: {
    jest: ['SprkHeading'],
    info: `
${markdownDocumentationLinkBuilder('link')}
- some info
`,
  },
};

export const pageTitle = () => (
  <SprkHeading
    element="h1"
    variant="two"
    isPageTitle
    idString="heading-page-title"
  >
    The Quick Brown Fox Jumps Over the Lazy Dog
  </SprkHeading>
);

export const displayOne = () => (
  <SprkHeading
    element="h1"
    variant="one"
    idString="heading-one"
  >
    The Quick Brown Fox Jumps Over the Lazy Dog
  </SprkHeading>
);

export const displayTwo = () => (
  <SprkHeading
    element="h2"
    variant="two"
    idString="heading-two"
  >
    The Quick Brown Fox Jumps Over the Lazy Dog
  </SprkHeading>
);

export const displayThree = () => (
  <SprkHeading
    element="h3"
    variant="three"
    idString="heading-three"
  >
    The Quick Brown Fox Jumps Over the Lazy Dog
  </SprkHeading>
);

export const displayFour = () => (
  <SprkHeading
    element="h4"
    variant="four"
    idString="heading-four"
  >
    The Quick Brown Fox Jumps Over the Lazy Dog
  </SprkHeading>
);

export const displayFive = () => (
  <SprkHeading
    element="h5"
    variant="five"
    idString="heading-five"
  >
    The Quick Brown Fox Jumps Over the Lazy Dog
  </SprkHeading>
);

export const displaySix = () => (
  <SprkHeading
    element="h6"
    variant="six"
    idString="heading-six"
  >
    The Quick Brown Fox Jumps Over the Lazy Dog
  </SprkHeading>
);

export const displaySeven = () => (
  <SprkHeading
    element="h6"
    variant="seven"
    idString="heading-seven"
  >
    The Quick Brown Fox Jumps Over the Lazy Dog
  </SprkHeading>
);