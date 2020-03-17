import React from 'react';
import SprkFlag from './SprkFlag';
import SprkFlagBody from './components/SprkFlagBody/SprkFlagBody';
import SprkFlagFigure from './components/SprkFlagFigure/SprkFlagFigure';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Flag',
  decorators: [
    story => <div className="sprk-o-Box">{story()}</div>
  ],
  component: SprkFlag,
  parameters: {
    jest: ['SprkFlag'],
    info: `
${markdownDocumentationLinkBuilder('button')}
###### Accessibility Considerations
- Tabbing and screen readers are based on DOM order. Keep in mind that this reverse modifier is purely a visual change, not a DOM change. With more complex layouts, be mindful that visual and DOM order misatches will affect keyboard, magnifier, and screen reader users.
`,
   },
};

export const defaultStory = () => (
  <SprkFlag>
    <SprkFlagFigure>
      <img
          alt="Provide useful alternative text"
          src="https://spark-assets.netlify.com/spark-logo-mark.svg"
      />
    </SprkFlagFigure>
    <SprkFlagBody>
      <p>
        Lorem ipsum dolor. Sit amet pede. Tempus donec et.
        Suspendisse id inventore integer eum non enim diam habitant.
      </p>
    </SprkFlagBody>
  </SprkFlag>
);


defaultStory.story = {
  name: 'Default',
};

export const reverse = () => (
  <SprkFlag variant="reverse">
    <SprkFlagFigure>
      <img
          alt="Provide useful alternative text"
          src="https://spark-assets.netlify.com/spark-logo-mark.svg"
      />
    </SprkFlagFigure>
    <SprkFlagBody>
      <p>
        Lorem ipsum dolor. Sit amet pede. Tempus donec et.
        Suspendisse id inventore integer eum non enim diam habitant.
      </p>
    </SprkFlagBody>
  </SprkFlag>
);
