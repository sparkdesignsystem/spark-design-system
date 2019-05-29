import React from 'react';
import { storiesOf } from '@storybook/react';
import { SprkStack, SprkStackItem } from '@sparkdesignsystem/spark-react';
import { Box } from '../../../../.storybook/story-layout';

storiesOf('Stack', module)
  .add('default', () => (
    <Box>
      <SprkStack>
        <SprkStackItem>Test 1</SprkStackItem>
        <SprkStackItem>Test 2</SprkStackItem>
      </SprkStack>
    </Box>
  ))
  .add('two column', () => (
    <Box>
      <SprkStack splitAt="tiny">
        <SprkStackItem additionalClasses="sprk-o-Stack__item--half@xs">
          Column
        </SprkStackItem>
        <SprkStackItem additionalClasses="sprk-o-Stack__item--half@xs">
          Column
        </SprkStackItem>
      </SprkStack>
    </Box>
  ))
  .add('three column', () => (
    <Box>
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
    </Box>
  ))
  .add('four column', () => (
    <Box>
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
    </Box>
  ))
  .add('five column', () => (
    <Box>
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
    </Box>
  ))
  .add('six column', () => (
    <Box>
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
    </Box>
  ))
  .add('75/25', () => (
    <Box>
      <SprkStack splitAt="tiny">
        <SprkStackItem additionalClasses="sprk-o-Stack__item--three-fourths@xs">
        Item
        </SprkStackItem>
        <SprkStackItem additionalClasses="sprk-o-Stack__item--fourth@xs">
        Item
        </SprkStackItem>
      </SprkStack>
    </Box>
  ))
  .add('60/40', () => (
    <Box>
      <SprkStack splitAt="tiny">
        <SprkStackItem additionalClasses="sprk-o-Stack__item--three-fifths@xs">
          Item
        </SprkStackItem>
        <SprkStackItem additionalClasses="sprk-o-Stack__item--two-fifths@xs">
          Item
        </SprkStackItem>
      </SprkStack>
    </Box>
  ))
  .add('30/70', () => (
    <Box>
      <SprkStack splitAt="tiny">
        <SprkStackItem additionalClasses="sprk-o-Stack__item--three-tenths@xs">
          Item
        </SprkStackItem>
        <SprkStackItem additionalClasses="sprk-o-Stack__item--seven-tenths@xs">
          Item
        </SprkStackItem>
      </SprkStack>
    </Box>
  ))
  .add('Mixed Column', () => (
    <Box>
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
    </Box>
  ))
  .add('with split modifier', () => (
    <Box>
      <SprkStack
        itemSpacing="medium"
        splitAt="small"
      >
        <SprkStackItem>Item</SprkStackItem>
        <SprkStackItem>Item</SprkStackItem>
      </SprkStack>
    </Box>
  ));
