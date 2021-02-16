import React from 'react';
import SprkHighlightBoard from './SprkHighlightBoard';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Highlight Board',
  component: SprkHighlightBoard,
  decorators: [(story) => <div className="sprk-o-Box">{story()}</div>],
  parameters: {
    jest: ['SprkHighlightBoard'],
    info: `
${markdownDocumentationLinkBuilder('highlight-board')}
##### Accessibility
- If the Buttons are being used to navigate
to a new page, they should be \`<a>\` elements.
If they are being used to trigger an event or action,
then they should be \`<button>\` elements with \`aria-role=button\`.
`,
  },
};

export const defaultStory = () => (
  <SprkHighlightBoard
    imgSrc="https://spark-assets.netlify.app/desktop.jpg"
    imgAlt=""
    heading="Hello, Welcome To Spark Design System"
    ctaText="Designers"
    ctaHref="#nogo"
    ctaText2="Developers"
    ctaHref2="#nogo"
    idString="highlightboard-1"
  />
);

defaultStory.story = {
  name: 'Default',
};

export const noImage = () => (
  <SprkHighlightBoard
    variant="noImage"
    heading="Hello, Welcome To Spark Design System"
    ctaText="Designers"
    ctaHref="#nogo"
    ctaText2="Developers"
    ctaHref2="#nogo"
    idString="highlightboard-2"
  />
);

noImage.story = {
  name: 'No Image',
};

export const stacked = () => (
  <SprkHighlightBoard
    variant="stacked"
    imgSrc="https://spark-assets.netlify.app/desktop.jpg"
    imgAlt=""
    heading="Hello, Welcome To Spark Design System"
    ctaText="Designers"
    ctaHref="#nogo"
    ctaText2="Developers"
    ctaHref2="#nogo"
    idString="highlightboard-3"
  />
);

stacked.story = {
  name: 'Stacked',
};
