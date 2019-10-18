import React from 'react';

import SprkStack from './SprkStack';
import SprkStackItem from './components/SprkStackItem/SprkStackItem';

export default {
  title: 'Objects|Stack',
  component: SprkStack,
};

export const defaultStory = () => (
  <SprkStack>
    <SprkStackItem>Test 1</SprkStackItem>
    <SprkStackItem>Test 2</SprkStackItem>
  </SprkStack>
);

defaultStory.story = {
  name: 'default',
};

export const twoColumn = () => (
  <SprkStack splitAt="tiny">
    <SprkStackItem additionalClasses="sprk-o-Stack__item--half@xs">Column</SprkStackItem>
    <SprkStackItem additionalClasses="sprk-o-Stack__item--half@xs">Column</SprkStackItem>
  </SprkStack>
);

twoColumn.story = {
  name: 'two column',
};

export const threeColumn = () => (
  <SprkStack splitAt="tiny">
    <SprkStackItem additionalClasses="sprk-o-Stack__item--third@xs">Column</SprkStackItem>
    <SprkStackItem additionalClasses="sprk-o-Stack__item--third@xs">Column</SprkStackItem>
    <SprkStackItem additionalClasses="sprk-o-Stack__item--third@xs">Column</SprkStackItem>
  </SprkStack>
);

threeColumn.story = {
  name: 'three column',
};

export const fourColumn = () => (
  <SprkStack splitAt="tiny">
    <SprkStackItem additionalClasses="sprk-o-Stack__item--fourth@xs">Column</SprkStackItem>
    <SprkStackItem additionalClasses="sprk-o-Stack__item--fourth@xs">Column</SprkStackItem>
    <SprkStackItem additionalClasses="sprk-o-Stack__item--fourth@xs">Column</SprkStackItem>
    <SprkStackItem additionalClasses="sprk-o-Stack__item--fourth@xs">Column</SprkStackItem>
  </SprkStack>
);

fourColumn.story = {
  name: 'four column',
};

export const fiveColumn = () => (
  <SprkStack splitAt="tiny">
    <SprkStackItem additionalClasses="sprk-o-Stack__item--fifth@xs">Column</SprkStackItem>
    <SprkStackItem additionalClasses="sprk-o-Stack__item--fifth@xs">Column</SprkStackItem>
    <SprkStackItem additionalClasses="sprk-o-Stack__item--fifth@xs">Column</SprkStackItem>
    <SprkStackItem additionalClasses="sprk-o-Stack__item--fifth@xs">Column</SprkStackItem>
    <SprkStackItem additionalClasses="sprk-o-Stack__item--fifth@xs">Column</SprkStackItem>
  </SprkStack>
);

fiveColumn.story = {
  name: 'five column',
};

export const sixColumn = () => (
  <SprkStack splitAt="tiny">
    <SprkStackItem additionalClasses="sprk-o-Stack__item--sixth@xs">Column</SprkStackItem>
    <SprkStackItem additionalClasses="sprk-o-Stack__item--sixth@xs">Column</SprkStackItem>
    <SprkStackItem additionalClasses="sprk-o-Stack__item--sixth@xs">Column</SprkStackItem>
    <SprkStackItem additionalClasses="sprk-o-Stack__item--sixth@xs">Column</SprkStackItem>
    <SprkStackItem additionalClasses="sprk-o-Stack__item--sixth@xs">Column</SprkStackItem>
    <SprkStackItem additionalClasses="sprk-o-Stack__item--sixth@xs">Column</SprkStackItem>
  </SprkStack>
);

sixColumn.story = {
  name: 'six column',
};

export const seventyFiveTwentyFive = () => (
  <SprkStack splitAt="tiny">
    <SprkStackItem additionalClasses="sprk-o-Stack__item--three-fourths@xs">Item</SprkStackItem>
    <SprkStackItem additionalClasses="sprk-o-Stack__item--fourth@xs">Item</SprkStackItem>
  </SprkStack>
);

seventyFiveTwentyFive.story = {
  name: 'seventy-five twenty-five',
};

export const sixtyForty = () => (
  <SprkStack splitAt="tiny">
    <SprkStackItem additionalClasses="sprk-o-Stack__item--three-fifths@xs">Item</SprkStackItem>
    <SprkStackItem additionalClasses="sprk-o-Stack__item--two-fifths@xs">Item</SprkStackItem>
  </SprkStack>
);

sixtyForty.story = {
  name: 'sixty forty',
};

export const thirtySeventy = () => (
  <SprkStack splitAt="tiny">
    <SprkStackItem additionalClasses="sprk-o-Stack__item--three-tenths@xs">Item</SprkStackItem>
    <SprkStackItem additionalClasses="sprk-o-Stack__item--seven-tenths@xs">Item</SprkStackItem>
  </SprkStack>
);

thirtySeventy.story = {
  name: 'thirty seventy',
};

export const mixedColumn = () => (
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
        <SprkStack splitAt="tiny" itemSpacing="medium">
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

mixedColumn.story = {
  name: 'Mixed Column',
};

export const withSplitModifier = () => (
  <SprkStack itemSpacing="medium" splitAt="small">
    <SprkStackItem>Item</SprkStackItem>
    <SprkStackItem>Item</SprkStackItem>
  </SprkStack>
);

withSplitModifier.story = {
  name: 'with split modifier',
};
