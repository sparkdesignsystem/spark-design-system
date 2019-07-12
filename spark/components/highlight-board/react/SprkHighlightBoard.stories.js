import React from 'react';
import { storiesOf } from '@storybook/react';

import SprkHighlightBoard from './SprkHighlightBoard';

storiesOf('Components|Highlight Board', module)
  .add('default', () => (
    <SprkHighlightBoard
      imgSrc="https://staging.sparkdesignsystem.com/assets/toolkit/images/desktop.jpg"
      imgAlt="desktop"
      heading="Hello, Welcome To Spark Design System"
      ctaText="Designers"
      ctaHref="/gettingstarted/designers.html"
      ctaText2="Developers"
      ctaHref2="/gettingstarted/developers.html"
      idString="highlightboard-1"
    />
  ))
  .add('no image', () => (
    <SprkHighlightBoard
      variant="noImage"
      heading="Hello, Welcome To Spark Design System"
      ctaText="Designers"
      ctaHref="#"
      ctaText2="Developers"
      ctaHref2="#"
      idString="highlightboard-2"
    />
  ))
  .add('stacked', () => (
    <SprkHighlightBoard
      variant="stacked"
      imgSrc="https://staging.sparkdesignsystem.com/assets/toolkit/images/desktop.jpg"
      imgAlt="desktop"
      heading="Hello, Welcome To Spark Design System"
      ctaText="Designers"
      ctaHref="/gettingstarted/designers.html"
      ctaText2="Developers"
      ctaHref2="/gettingstarted/developers.html"
      idString="highlightboard-3"
    />
  ));
