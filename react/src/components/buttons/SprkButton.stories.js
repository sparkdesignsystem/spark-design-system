import React from 'react';
import SprkButton from './SprkButton';

export default {
  title: 'Components|Button',
  decorators: [
    story => <div className="sprk-o-Box">{story()}</div>
  ],
  component: SprkButton,
  parameters: {
    jest: ['SprkButton'],
    info: `
##### For design and usage information check out the [documentation.](https://spark-docs.netlify.com/using-spark/components/button)
    `,
   },
};

export const primary = () => (
  <SprkButton
    element="button"
    idString="button-1"
    analyticsString="button-1-analytics"
  >
    Button
  </SprkButton>
);

export const secondary = () => (
  <SprkButton
    variant="secondary"
    element="button"
    idString="button-2"
    analyticsString="button-2-analytics"
  >
    Button
  </SprkButton>
);

export const tertiary = () => (
  <SprkButton
    variant="tertiary"
    element="button"
    idString="button-3"
    analyticsString="button-3-analytics"
  >
    Button
  </SprkButton>
);

export const disabled = () => (
  <SprkButton
    disabled={true}
    element="button"
    idString="button-4"
    analyticsString="button-4-analytics"
  >
    Button
  </SprkButton>
);

export const spinner = () => (
  <SprkButton
    loading={true}
    element="button"
    idString="button-5"
    analyticsString="button-5-analytics"
  >
    Button
  </SprkButton>
);

export const fullWidthAtSmallViewport = () => (
  <SprkButton
    element="button"
    idString="button-6"
    analyticsString="button-6-analytics"
    additionalClasses="sprk-c-Button--full@s"
  >
    Button
  </SprkButton>
);

export const fullWidthAtExtraSmallViewport = () => (
  <SprkButton
    element="button"
    idString="button-7"
    analyticsString="button-7-analytics"
    additionalClasses="sprk-c-Button--full@xs"
  >
    Button
  </SprkButton>
);

export const asALinkElement = () => (
  <SprkButton
    element="a"
    href="https://www.sparkdesignsystem.com"
    idString="button-8"
    analyticsString="button-8-analytics"
  >
    Button
  </SprkButton>
);