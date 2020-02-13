import React from 'react';
import SprkText from './SprkText';
import { markdownDocumentationLinkBuilder } from '../../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Foundations/Text',
  decorators: [
    story => <div className="sprk-o-Box">{story()}</div>
  ],
  component: SprkText,
  parameters: {
    jest: ['SprkText'],
    info: `
${markdownDocumentationLinkBuilder('link')}
- some info
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