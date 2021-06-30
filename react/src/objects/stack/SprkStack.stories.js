/* eslint-disable max-len */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import SprkStack from './SprkStack';
import SprkStackItem from './components/SprkStackItem/SprkStackItem';
import SprkText from '../../base/typography/SprkText/SprkText';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Stack',
  component: SprkStack,
  decorators: [
    (story) => <div className="sprk-o-Box sb-decorate">{story()}</div>,
  ],
  parameters: {
    subcomponents: {
      SprkStackItem,
    },
    jest: ['SprkStack', 'SprkStackItem'],
    info: `
      ${markdownDocumentationLinkBuilder('stack')}
- The \`itemSpacing\` prop is not compatible with
stack items with specific-column classes such
as \`sprk-o-Stack__item--half@xs\`. Use padding
instead. See the "Stack/Split - Two Column With Padding"
for an example.
`,
  },
};

export const defaultStory = () => (
  <SprkStack>
    <SprkStackItem></SprkStackItem>
    <SprkStackItem></SprkStackItem>
  </SprkStack>
);

defaultStory.story = {
  name: 'Default',
};

export const stackSplit = () => (
  <SprkStack itemSpacing="medium" splitAt="small">
    <SprkStackItem>Stack Item One</SprkStackItem>
    <SprkStackItem>Stack Item Two</SprkStackItem>
  </SprkStack>
);

stackSplit.story = {
  name: 'Stack/Split - Spaced Items',
};

export const stackSplitTwoCol = () => (
  <SprkStack splitAt="tiny">
    <SprkStackItem additionalClasses="sprk-o-Stack__item--half@xs"></SprkStackItem>
    <SprkStackItem additionalClasses="sprk-o-Stack__item--half@xs"></SprkStackItem>
  </SprkStack>
);

stackSplitTwoCol.story = {
  name: 'Stack/Split - Two Column',
};

export const stackSplitTwoColWithPadding = () => (
  <SprkStack splitAt="tiny">
    <SprkStackItem additionalClasses="sprk-o-Stack__item--half@xs sprk-o-Box">
      <SprkText variant="bodyTwo">
        Example paragraph text inside item 1.
      </SprkText>
    </SprkStackItem>

    <SprkStackItem additionalClasses="sprk-o-Stack__item--half@xs sprk-o-Box">
      <SprkText variant="bodyTwo">
        Example paragraph text inside item 2.
      </SprkText>
    </SprkStackItem>
  </SprkStack>
);

stackSplitTwoColWithPadding.story = {
  name: 'Stack/Split - Two Column With Padding',
};

export const stackSplitThreeCol = () => (
  <SprkStack splitAt="tiny">
    <SprkStackItem additionalClasses="sprk-o-Stack__item--third@xs"></SprkStackItem>
    <SprkStackItem additionalClasses="sprk-o-Stack__item--third@xs"></SprkStackItem>
    <SprkStackItem additionalClasses="sprk-o-Stack__item--third@xs"></SprkStackItem>
  </SprkStack>
);

stackSplitThreeCol.story = {
  name: 'Stack/Split - Three Column',
};

export const stackSplitFourCol = () => (
  <SprkStack splitAt="tiny">
    <SprkStackItem additionalClasses="sprk-o-Stack__item--fourth@xs"></SprkStackItem>
    <SprkStackItem additionalClasses="sprk-o-Stack__item--fourth@xs"></SprkStackItem>
    <SprkStackItem additionalClasses="sprk-o-Stack__item--fourth@xs"></SprkStackItem>
    <SprkStackItem additionalClasses="sprk-o-Stack__item--fourth@xs"></SprkStackItem>
  </SprkStack>
);

stackSplitFourCol.story = {
  name: 'Stack/Split - Four Column',
};

export const stackSplitFiveCol = () => (
  <SprkStack splitAt="tiny">
    <SprkStackItem additionalClasses="sprk-o-Stack__item--fifth@xs"></SprkStackItem>
    <SprkStackItem additionalClasses="sprk-o-Stack__item--fifth@xs"></SprkStackItem>
    <SprkStackItem additionalClasses="sprk-o-Stack__item--fifth@xs"></SprkStackItem>
    <SprkStackItem additionalClasses="sprk-o-Stack__item--fifth@xs"></SprkStackItem>
    <SprkStackItem additionalClasses="sprk-o-Stack__item--fifth@xs"></SprkStackItem>
  </SprkStack>
);

stackSplitFiveCol.story = {
  name: 'Stack/Split - Five Column',
};

export const stackSplitSixCol = () => (
  <SprkStack splitAt="tiny">
    <SprkStackItem additionalClasses="sprk-o-Stack__item--sixth@xs"></SprkStackItem>
    <SprkStackItem additionalClasses="sprk-o-Stack__item--sixth@xs"></SprkStackItem>
    <SprkStackItem additionalClasses="sprk-o-Stack__item--sixth@xs"></SprkStackItem>
    <SprkStackItem additionalClasses="sprk-o-Stack__item--sixth@xs"></SprkStackItem>
    <SprkStackItem additionalClasses="sprk-o-Stack__item--sixth@xs"></SprkStackItem>
    <SprkStackItem additionalClasses="sprk-o-Stack__item--sixth@xs"></SprkStackItem>
  </SprkStack>
);

stackSplitSixCol.story = {
  name: 'Stack/Split - Six Column',
};

export const stackSplitLayoutThreeFourths = () => (
  <SprkStack splitAt="tiny">
    <SprkStackItem additionalClasses="sprk-o-Stack__item--three-fourths@xs"></SprkStackItem>
    <SprkStackItem additionalClasses="sprk-o-Stack__item--fourth@xs"></SprkStackItem>
  </SprkStack>
);

stackSplitLayoutThreeFourths.story = {
  name: 'Stack/Split - 75/25',
};

export const stackSplitLayoutThreeFifths = () => (
  <SprkStack splitAt="tiny">
    <SprkStackItem additionalClasses="sprk-o-Stack__item--three-fifths@xs"></SprkStackItem>
    <SprkStackItem additionalClasses="sprk-o-Stack__item--two-fifths@xs"></SprkStackItem>
  </SprkStack>
);

stackSplitLayoutThreeFifths.story = {
  name: 'Stack/Split - 60/40',
};

export const stackSplitLayoutThreeTenths = () => (
  <SprkStack splitAt="tiny">
    <SprkStackItem additionalClasses="sprk-o-Stack__item--three-tenths@xs"></SprkStackItem>
    <SprkStackItem additionalClasses="sprk-o-Stack__item--seven-tenths@xs"></SprkStackItem>
  </SprkStack>
);

stackSplitLayoutThreeTenths.story = {
  name: 'Stack/Split - 30/70',
};

export const stackSplitLayoutMixed = () => (
  <div>
    <SprkStack splitAt="tiny">
      <SprkStack isStackItem additionalClasses="sprk-o-Stack__item--fourth@xs sprk-o-Stack--center-all">
        <SprkStackItem>
          <p className="sprk-b-TypeBodyOne">fourth</p>
        </SprkStackItem>
      </SprkStack>

      <SprkStack isStackItem additionalClasses="sprk-o-Stack__item--half@xs sprk-o-Stack--center-all">
        <SprkStackItem>
          <p className="sprk-b-TypeBodyOne">half</p>
        </SprkStackItem>
      </SprkStack>

      <SprkStack isStackItem additionalClasses="sprk-o-Stack__item--fourth@xs sprk-o-Stack--center-all">
        <SprkStackItem>
          <p className="sprk-b-TypeBodyOne">fourth</p>
        </SprkStackItem>
      </SprkStack>
    </SprkStack>

    <SprkStack splitAt="tiny">
      <SprkStack isStackItem additionalClasses="sprk-o-Stack__item--sixth@xs sprk-o-Stack--center-all">
        <SprkStackItem>
          <p className="sprk-b-TypeBodyOne">sixth</p>
        </SprkStackItem>
      </SprkStack>

      <SprkStack isStackItem additionalClasses="sprk-o-Stack__item--sixth@xs sprk-o-Stack--center-all">
        <SprkStackItem>
          <p className="sprk-b-TypeBodyOne">sixth</p>
        </SprkStackItem>
      </SprkStack>

      <SprkStack isStackItem additionalClasses="sprk-o-Stack__item--sixth@xs sprk-o-Stack--center-all">
        <SprkStackItem>
          <p className="sprk-b-TypeBodyOne">sixth</p>
        </SprkStackItem>
      </SprkStack>

      <SprkStack isStackItem additionalClasses="sprk-o-Stack__item--flex@xs sprk-o-Stack--center-all">
        <SprkStackItem>
          <p className="sprk-b-TypeBodyOne">flex</p>
        </SprkStackItem>
      </SprkStack>
    </SprkStack>

    <SprkStack splitAt="tiny">
      <SprkStack isStackItem additionalClasses="sprk-o-Stack__item--two-fifths@xs sprk-o-Stack--center-all">
        <SprkStackItem>
          <p className="sprk-b-TypeBodyOne">two-fifths</p>
        </SprkStackItem>
      </SprkStack>

      <SprkStack isStackItem additionalClasses="sprk-o-Stack__item--fifth@xs sprk-o-Stack--center-all">
        <SprkStackItem>
          <p className="sprk-b-TypeBodyOne">fifth</p>
        </SprkStackItem>
      </SprkStack>

      <SprkStack isStackItem additionalClasses="sprk-o-Stack__item--fifth@xs sprk-o-Stack--center-all">
        <SprkStackItem>
          <p className="sprk-b-TypeBodyOne">fifth</p>
        </SprkStackItem>
      </SprkStack>

      <SprkStack isStackItem additionalClasses="sprk-o-Stack__item--fifth@xs sprk-o-Stack--center-all">
        <SprkStackItem>
          <p className="sprk-b-TypeBodyOne">fifth</p>
        </SprkStackItem>
      </SprkStack>
    </SprkStack>

    <SprkStack splitAt="tiny">
      <SprkStackItem additionalClasses="sprk-o-Stack__item--half@xs">
        <SprkStack splitAt="tiny">
          <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@xs sprk-o-Stack sprk-o-Stack--center-all">
            <p className="sprk-b-TypeBodyOne">Nested Item (flex)</p>
          </SprkStackItem>

          <SprkStack isStackItem additionalClasses="sprk-o-Stack__item--flex@xs sprk-o-Stack--center-all">
            <SprkStackItem>
              <p className="sprk-b-TypeBodyOne">Nested Item (flex)</p>
            </SprkStackItem>
          </SprkStack>

          <SprkStack isStackItem additionalClasses="sprk-o-Stack__item--flex@xs sprk-o-Stack--center-all">
            <SprkStackItem>
              <p className="sprk-b-TypeBodyOne">Nested Item (flex)</p>
            </SprkStackItem>
          </SprkStack>
        </SprkStack>
      </SprkStackItem>

      <SprkStack isStackItem additionalClasses="sprk-o-Stack__item--half@xs sprk-o-Stack--center-all">
        <SprkStackItem>
          <p className="sprk-b-TypeBodyOne">half</p>
        </SprkStackItem>
      </SprkStack>
    </SprkStack>

    <SprkStack splitAt="tiny">
      <SprkStack isStackItem additionalClasses="sprk-o-Stack__item--two-fifths@xs sprk-o-Stack--center-all">
        <SprkStackItem>
          <p className="sprk-b-TypeBodyOne">two-fifths</p>
        </SprkStackItem>
      </SprkStack>

      <SprkStack isStackItem additionalClasses="sprk-o-Stack__item--three-fifths@xs sprk-o-Stack--center-all">
        <SprkStackItem>
          <p className="sprk-b-TypeBodyOne">three-fifths</p>
        </SprkStackItem>
      </SprkStack>
    </SprkStack>
  </div>
);

stackSplitLayoutMixed.story = {
  name: 'Stack/Split - Mixed Column',
};
