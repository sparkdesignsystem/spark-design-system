import React from 'react';
import { storiesOf } from '@storybook/react';
import { SprkStack, SprkStackItem } from '@sparkdesignsystem/spark-react';
storiesOf('Stack', module)
  .add('default', () => (
    <SprkStack>
      <SprkStackItem>Test 1</SprkStackItem>
      <SprkStackItem>Test 2</SprkStackItem>
    </SprkStack>
  ))
  .add('two column', () => (
    <SprkStack splitAt="tiny">
      <SprkStackItem additionalClasses="sprk-o-Stack__item--half@xs">
        Column
      </SprkStackItem>
      <SprkStackItem additionalClasses="sprk-o-Stack__item--half@xs">
        Column
      </SprkStackItem>
    </SprkStack>
  ))
  .add('three column', () => (
    <SprkStack splitAt="tiny">
      <SprkStackItem additionalClasses="sprk-o-Stack__item--third@xs">
        Column
      </SprkStackItem>
      <SprkStackItem additionalClasses="sprk-o-Stack__item--third@xs">
        Column
      </SprkStackItem>
      <SprkStackItem additionalClasses="sprk-o-Stack__item--third@xs">
        Column
      </SprkStackItem>
    </SprkStack>
  ))
  .add('four column', () => (
    <SprkStack splitAt="tiny">
      <SprkStackItem additionalClasses="sprk-o-Stack__item--fourth@xs">
        Column
      </SprkStackItem>
      <SprkStackItem additionalClasses="sprk-o-Stack__item--fourth@xs">
        Column
      </SprkStackItem>
      <SprkStackItem additionalClasses="sprk-o-Stack__item--fourth@xs">
        Column
      </SprkStackItem>
      <SprkStackItem additionalClasses="sprk-o-Stack__item--fourth@xs">
        Column
      </SprkStackItem>
    </SprkStack>
  ))
  .add('five column', () => (
    <SprkStack splitAt="tiny">
      <SprkStackItem additionalClasses="sprk-o-Stack__item--fifth@xs">
        Column
      </SprkStackItem>
      <SprkStackItem additionalClasses="sprk-o-Stack__item--fifth@xs">
        Column
      </SprkStackItem>
      <SprkStackItem additionalClasses="sprk-o-Stack__item--fifth@xs">
        Column
      </SprkStackItem>
      <SprkStackItem additionalClasses="sprk-o-Stack__item--fifth@xs">
        Column
      </SprkStackItem>
      <SprkStackItem additionalClasses="sprk-o-Stack__item--fifth@xs">
        Column
      </SprkStackItem>
    </SprkStack>
  ))
  .add('six column', () => (
    <SprkStack splitAt="tiny">
      <SprkStackItem additionalClasses="sprk-o-Stack__item--sixth@xs">
        Column
      </SprkStackItem>
      <SprkStackItem additionalClasses="sprk-o-Stack__item--sixth@xs">
        Column
      </SprkStackItem>
      <SprkStackItem additionalClasses="sprk-o-Stack__item--sixth@xs">
        Column
      </SprkStackItem>
      <SprkStackItem additionalClasses="sprk-o-Stack__item--sixth@xs">
        Column
      </SprkStackItem>
      <SprkStackItem additionalClasses="sprk-o-Stack__item--sixth@xs">
        Column
      </SprkStackItem>
      <SprkStackItem additionalClasses="sprk-o-Stack__item--sixth@xs">
        Column
      </SprkStackItem>
    </SprkStack>
  ))
  .add('75/25', () => (
    <SprkStack splitAt="tiny">
      <SprkStackItem additionalClasses="sprk-o-Stack__item--three-fourths@xs">
      Item
      </SprkStackItem>
      <SprkStackItem additionalClasses="sprk-o-Stack__item--fourth@xs">
      Item
      </SprkStackItem>
    </SprkStack>
  ))
  .add('60/40', () => (
    <SprkStack splitAt="tiny">
      <SprkStackItem additionalClasses="sprk-o-Stack__item--three-fifths@xs">
        Item
      </SprkStackItem>
      <SprkStackItem additionalClasses="sprk-o-Stack__item--two-fifths@xs">
        Item
      </SprkStackItem>
    </SprkStack>
  ))
  .add('30/70', () => (
    <SprkStack splitAt="tiny">
      <SprkStackItem additionalClasses="sprk-o-Stack__item--three-tenths@xs">
        Item
      </SprkStackItem>
      <SprkStackItem additionalClasses="sprk-o-Stack__item--seven-tenths@xs">
        Item
      </SprkStackItem>
    </SprkStack>
  ))
  .add('Mixed Column', () => (
    <React.Fragment>
      <SprkStack splitAt="tiny">
        <SprkStackItem additionalClasses="sprk-o-Stack__item--fourth@xs sprk-u-AbsoluteCenter">
          <p className="sprk-b-TypeBodyOne">
            fourth
          </p>
        </SprkStackItem>
        <SprkStackItem additionalClasses="sprk-o-Stack__item--half@xs sprk-u-AbsoluteCenter">
          <p className="sprk-b-TypeBodyOne">
            half
          </p>
        </SprkStackItem>
        <SprkStackItem additionalClasses="sprk-o-Stack__item--fourth@xs sprk-u-AbsoluteCenter">
          <p className="sprk-b-TypeBodyOne">
            fourth
          </p>
        </SprkStackItem>
      </SprkStack>
      <SprkStack splitAt="tiny">
        <SprkStackItem additionalClasses="sprk-o-Stack__item--sixth@xs sprk-u-AbsoluteCenter">
          <p className="sprk-b-TypeBodyOne">
            sixth
          </p>
        </SprkStackItem>
        <SprkStackItem additionalClasses="sprk-o-Stack__item--sixth@xs sprk-u-AbsoluteCenter">
          <p className="sprk-b-TypeBodyOne">
            sixth
          </p>
        </SprkStackItem>
        <SprkStackItem additionalClasses="sprk-o-Stack__item--sixth@xs sprk-u-AbsoluteCenter">
          <p className="sprk-b-TypeBodyOne">
            sixth
          </p>
        </SprkStackItem>
        <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@xs sprk-u-AbsoluteCenter">
          <p className="sprk-b-TypeBodyOne">
            flex
          </p>
        </SprkStackItem>
      </SprkStack>
      <SprkStack splitAt="tiny">
        <SprkStackItem additionalClasses="sprk-o-Stack__item--two-fifths@xs sprk-u-AbsoluteCenter">
          <p className="sprk-b-TypeBodyOne">
            two-fifths
          </p>
        </SprkStackItem>
        <SprkStackItem additionalClasses="sprk-o-Stack__item--fifth@xs sprk-u-AbsoluteCenter">
          <p className="sprk-b-TypeBodyOne">
            fifth
          </p>
        </SprkStackItem>
        <SprkStackItem additionalClasses="sprk-o-Stack__item--fifth@xs sprk-u-AbsoluteCenter">
          <p className="sprk-b-TypeBodyOne">
            fifth
          </p>
        </SprkStackItem>
        <SprkStackItem additionalClasses="sprk-o-Stack__item--fifth@xs sprk-u-AbsoluteCenter">
          <p className="sprk-b-TypeBodyOne">
            fifth
          </p>
        </SprkStackItem>
      </SprkStack>
      <SprkStack splitAt="tiny">
        <SprkStackItem additionalClasses="sprk-o-Stack__item--half@xs">
          <SprkStack
            splitAt="tiny"
            itemSpacing="medium"
          >
            <SprkStackItem
              additionalClasses="sprk-o-Stack__item--flex@xs sprk-u-AbsoluteCenter"
            >
              <p className="sprk-b-TypeBodyOne">
                Nested Item (flex)
              </p>
            </SprkStackItem>
            <SprkStackItem
              additionalClasses="sprk-o-Stack__item--flex@xs sprk-u-AbsoluteCenter"
            >
              <p className="sprk-b-TypeBodyOne">
                Nested Item (flex)
              </p>
            </SprkStackItem>
          </SprkStack>
        </SprkStackItem>
        <SprkStackItem
          additionalClasses="sprk-o-Stack__item--half@xs sprk-u-AbsoluteCenter"
        >
          <p className="sprk-b-TypeBodyOne">
            half
          </p>
        </SprkStackItem>
      </SprkStack>
      <SprkStack splitAt="tiny">
        <SprkStackItem
          additionalClasses="sprk-o-Stack__item--two-fifths@xs sprk-u-AbsoluteCenter"
        >
          <p className="sprk-b-TypeBodyOne">
            two-fifths
          </p>
        </SprkStackItem>
        <SprkStackItem
          additionalClasses="sprk-o-Stack__item--three-fifths@xs sprk-u-AbsoluteCenter"
        >
          <p className="sprk-b-TypeBodyOne">
            three-fifths
          </p>
        </SprkStackItem>
      </SprkStack>
    </React.Fragment>
  ))
  .add('with split modifier', () => (
    <SprkStack
      itemSpacing="medium"
      splitAt="small"
    >
      <SprkStackItem>Item</SprkStackItem>
      <SprkStackItem>Item</SprkStackItem>
    </SprkStack>
  ));
