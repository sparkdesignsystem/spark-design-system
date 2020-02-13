import React from 'react';
import SprkText from './SprkText';
import { markdownDocumentationLinkBuilder } from '../../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Foundations/Typography',
  decorators: [
    story => <div className="sprk-o-Box">{story()}</div>
  ],
  component: SprkText,
  parameters: {
    jest: ['SprkText'],
    info: `
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
};

export const bodyOne = () => (
  <SprkText
    element="p"
    variant="one"
    isPageTitle
    idString="body-one"
  >
    Lorem ipsum dolor sit amet,
    consectetur adipiscing elit.
    Sed gravida urna quis nulla
    ultrices, sed efficitur risus
    elementum. Vivamus semper ex
    a lorem sodales, rhoncus
    rhoncus augue cursus. Sed
    vestibulum felis vel euismod
    aliquet. Suspendisse sit amet
    euismod nibh, eget fermentum
    arcu. Aliquam lacinia,
    sem eu ultricies auctor,
    velit nunc commodo sapien,
    pharetra maximus augue
    dui eget dui.
  </SprkText>
);

export const bodyTwo = () => (
  <SprkText
    element="p"
    variant="two"
    idString="body-two"
  >
    Lorem ipsum dolor sit amet,
    consectetur adipiscing elit.
    Sed gravida urna quis nulla
    ultrices, sed efficitur risus
    elementum. Vivamus semper ex
    a lorem sodales, rhoncus
    rhoncus augue cursus. Sed
    vestibulum felis vel euismod
    aliquet. Suspendisse sit amet
    euismod nibh, eget fermentum
    arcu. Aliquam lacinia,
    sem eu ultricies auctor,
    velit nunc commodo sapien,
    pharetra maximus augue
    dui eget dui.
  </SprkText>
);

export const bodyThree = () => (
  <SprkText
    element="p"
    variant="three"
    idString="body-three"
  >
    Lorem ipsum dolor sit amet,
    consectetur adipiscing elit.
    Sed gravida urna quis nulla
    ultrices, sed efficitur risus
    elementum. Vivamus semper ex
    a lorem sodales, rhoncus
    rhoncus augue cursus. Sed
    vestibulum felis vel euismod
    aliquet. Suspendisse sit amet
    euismod nibh, eget fermentum
    arcu. Aliquam lacinia,
    sem eu ultricies auctor,
    velit nunc commodo sapien,
    pharetra maximus augue
    dui eget dui.
  </SprkText>
);

export const bodyFour = () => (
  <SprkText
    element="p"
    variant="four"
    idString="body-four"
  >
    Lorem ipsum dolor sit amet,
    consectetur adipiscing elit.
    Sed gravida urna quis nulla
    ultrices, sed efficitur risus
    elementum. Vivamus semper ex
    a lorem sodales, rhoncus
    rhoncus augue cursus. Sed
    vestibulum felis vel euismod
    aliquet. Suspendisse sit amet
    euismod nibh, eget fermentum
    arcu. Aliquam lacinia,
    sem eu ultricies auctor,
    velit nunc commodo sapien,
    pharetra maximus augue
    dui eget dui.
  </SprkText>
);