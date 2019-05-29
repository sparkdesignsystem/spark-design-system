import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from '../../../../.storybook/story-layout';
import { SprkHighlightBoard } from '@sparkdesignsystem/spark-react';

storiesOf('Highlight Board', module)
  .add('default', () => (
    <Box>
      <SprkHighlightBoard
        imgSrc='https://staging.sparkdesignsystem.com/assets/toolkit/images/desktop.jpg'
        imgAlt='desktop'
        heading='Hello, Welcome To Spark Design System'
        ctaText='Designers'
        ctaHref='/gettingstarted/designers.html'
        ctaText2='Developers'
        ctaHref2='/gettingstarted/developers.html'
        idString='highlightboard-1'
      />
    </Box>
  ))
  .add('no image', () => (
    <Box>
      <SprkHighlightBoard
        variant='noImage'
        heading='Hello, Welcome To Spark Design System'
        ctaText='Designers'
        ctaHref='#'
        ctaText2='Developers'
        ctaHref2='#'
        idString='highlightboard-2'
      />
    </Box>
  ))
  .add('stacked', () => (
    <Box>
      <SprkHighlightBoard
        variant='stacked'
        imgSrc='https://staging.sparkdesignsystem.com/assets/toolkit/images/desktop.jpg'
        imgAlt='desktop'
        heading='Hello, Welcome To Spark Design System'
        ctaText='Designers'
        ctaHref='/gettingstarted/designers.html'
        ctaText2='Developers'
        ctaHref2='/gettingstarted/developers.html'
        idString='highlightboard-3'
      />
    </Box>
  ));