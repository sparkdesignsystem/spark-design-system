import React from 'react';
import SprkStack from './SprkStack';
import SprkStackItem from './components/SprkStackItem/SprkStackItem';

export default {
  title: 'Components/Stack',
  component: SprkStack,
  decorators: [
    story => <div className="sprk-o-Box sb-decorate">{story()}</div>
  ],
  parameters: {
    jest: ['SprkStack', 'SprkStackItem'],
    info: `
##### For design and usage information check out the [documentation.](https://spark-docs.netlify.com/using-spark/components/stack)
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
      <SprkStackItem additionalClasses="sprk-o-Stack__item--fourth@xs sprk-u-AbsoluteCenter">
        <p className="sprk-b-TypeBodyOne">fourth</p>
      </SprkStackItem>
      <SprkStackItem additionalClasses="sprk-o-Stack__item--half@xs sprk-u-AbsoluteCenter">
        <p className="sprk-b-TypeBodyOne">half</p>
      </SprkStackItem>
      <SprkStackItem additionalClasses="sprk-o-Stack__item--fourth@xs sprk-u-AbsoluteCenter">
        <p className="sprk-b-TypeBodyOne">fourth</p>
      </SprkStackItem>
    </SprkStack>
    <SprkStack splitAt="tiny">
      <SprkStackItem additionalClasses="sprk-o-Stack__item--sixth@xs sprk-u-AbsoluteCenter">
        <p className="sprk-b-TypeBodyOne">sixth</p>
      </SprkStackItem>
      <SprkStackItem additionalClasses="sprk-o-Stack__item--sixth@xs sprk-u-AbsoluteCenter">
        <p className="sprk-b-TypeBodyOne">sixth</p>
      </SprkStackItem>
      <SprkStackItem additionalClasses="sprk-o-Stack__item--sixth@xs sprk-u-AbsoluteCenter">
        <p className="sprk-b-TypeBodyOne">sixth</p>
      </SprkStackItem>
      <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@xs sprk-u-AbsoluteCenter">
        <p className="sprk-b-TypeBodyOne">flex</p>
      </SprkStackItem>
    </SprkStack>
    <SprkStack splitAt="tiny">
      <SprkStackItem additionalClasses="sprk-o-Stack__item--two-fifths@xs sprk-u-AbsoluteCenter">
        <p className="sprk-b-TypeBodyOne">two-fifths</p>
      </SprkStackItem>
      <SprkStackItem additionalClasses="sprk-o-Stack__item--fifth@xs sprk-u-AbsoluteCenter">
        <p className="sprk-b-TypeBodyOne">fifth</p>
      </SprkStackItem>
      <SprkStackItem additionalClasses="sprk-o-Stack__item--fifth@xs sprk-u-AbsoluteCenter">
        <p className="sprk-b-TypeBodyOne">fifth</p>
      </SprkStackItem>
      <SprkStackItem additionalClasses="sprk-o-Stack__item--fifth@xs sprk-u-AbsoluteCenter">
        <p className="sprk-b-TypeBodyOne">fifth</p>
      </SprkStackItem>
    </SprkStack>
    <SprkStack splitAt="tiny">
      <SprkStackItem additionalClasses="sprk-o-Stack__item--half@xs">
        <SprkStack splitAt="tiny">
          <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@xs sprk-u-AbsoluteCenter">
            <p className="sprk-b-TypeBodyOne">Nested Item (flex)</p>
          </SprkStackItem>
          <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@xs sprk-u-AbsoluteCenter">
            <p className="sprk-b-TypeBodyOne">Nested Item (flex)</p>
          </SprkStackItem>
        </SprkStack>
      </SprkStackItem>
      <SprkStackItem additionalClasses="sprk-o-Stack__item--half@xs sprk-u-AbsoluteCenter">
        <p className="sprk-b-TypeBodyOne">half</p>
      </SprkStackItem>
    </SprkStack>
    <SprkStack splitAt="tiny">
      <SprkStackItem additionalClasses="sprk-o-Stack__item--two-fifths@xs sprk-u-AbsoluteCenter">
        <p className="sprk-b-TypeBodyOne">two-fifths</p>
      </SprkStackItem>
      <SprkStackItem additionalClasses="sprk-o-Stack__item--three-fifths@xs sprk-u-AbsoluteCenter">
        <p className="sprk-b-TypeBodyOne">three-fifths</p>
      </SprkStackItem>
    </SprkStack>
  </div>
);

stackSplitLayoutMixed.story = {
  name: 'Stack/Split - Mixed Column',
};