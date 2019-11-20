import React from 'react';
import SprkTextInput from './SprkTextInput/SprkTextInput';

export default {
  title: 'Components/Input/Huge Text',
  decorators: [
    story => <div className="sprk-o-Box">{story()}</div>
  ],
  component: SprkTextInput,
  parameters: {
    jest: [
      'SprkErrorContainer',
      'SprkInputIconCheck',
    ],
    info: `
##### For design and usage information check out the [documentation.](https://spark-docs.netlify.com/using-spark/components/input)
    `,
  },
};

export const hugeTextInput = () => (
  <SprkTextInput
    type="hugeTextInput"
    label="Text Input Label"
    name="text-input-label"
    valid={true}
    disabled={false}
    placeholder="Huge Text Placeholder"
    errorMessage="There is an error on this field."
  />
);

hugeTextInput.story = {
  name: 'Default',
  component: SprkTextInput,
  parameters: {
    jest: [
      'SprkTextInput',
    ]
  },
};

export const hugeTextInputWithDefaultValue = () => (
  <SprkTextInput
    type="hugeTextInput"
    label="Text Input Label"
    name="text-input-label"
    valid={true}
    disabled={false}
    placeholder="Huge Text Placeholder"
    errorMessage="There is an error on this field."
    defaultValue="Default Value"
  />
);

hugeTextInputWithDefaultValue.story = {
  name: 'With Default Value',
  parameters: {
    jest: [
      'SprkTextInput',
    ]
  },
};
