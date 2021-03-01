import { markdownDocumentationLinkBuilder } from '../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Highlight Board',
  decorators: [(story) => `<div class="sprk-o-Box">${story()}</div>`],
  parameters: {
    docs: { iframeHeight: 600 },
    info: `
${markdownDocumentationLinkBuilder('highlight-board')}
- Users are able to activate the buttons in Highlight Board
using the Enter or Space keys on the keyboard.
Make sure to include keypress handlers in your JavaScript.

##### Accessibility
- If the Buttons are being used to navigate
to a new page, they should be \`<a>\` elements.
If they are being used to trigger an event or action,
then they should be \`<button>\` elements.
`,
  },
};

export const defaultStory = () => `
    <div
     class="sprk-c-HighlightBoard sprk-c-HighlightBoard--has-image sprk-u-mbm"
     data-id="highlightboard-1"
    >
      <img
        class="sprk-c-HighlightBoard__image"
        src="https://spark-assets.netlify.app/desktop.jpg"
        alt=""
      >

      <div class="
        sprk-c-HighlightBoard__content
        sprk-o-Stack
        sprk-o-Stack--large"
      >
        <h1 class="
          sprk-b-TypeDisplayOne
          sprk-c-HighlightBoard__heading
          sprk-o-Stack__item"
        >
          Hello, Welcome To Spark Design System
        </h1>

        <div class="
          sprk-o-Stack__item
          sprk-o-Stack
          sprk-o-Stack--medium
          sprk-o-Stack--split@xs
          sprk-o-Stack--center-column"
        >
          <div class="sprk-o-Stack__item sprk-c-HighlightBoard__cta">
            <a class="sprk-c-Button sprk-c-Button--full@s" href="#nogo">
              Designers
            </a>
          </div>

          <div class="sprk-o-Stack__item sprk-c-HighlightBoard__cta">
            <a
              class="
                sprk-c-Button
                sprk-c-Button--full@s
                sprk-c-Button--secondary
              "
              href="#nogo">
              Developers
            </a>
          </div>
        </div>
      </div>
    </div>
`;

defaultStory.story = {
  name: 'Default',
  parameters: {
    jest: ['highlight-board'],
  },
};

export const noImage = () => `
  <div
   class="sprk-c-HighlightBoard sprk-u-mbm"
   data-id="highlightboard-2"
  >
    <div class="
      sprk-c-HighlightBoard__content
      sprk-o-Stack
      sprk-o-Stack--large">
      <h1 class="
        sprk-b-TypeDisplayTwo
        sprk-c-HighlightBoard__heading
        sprk-o-Stack__item">
        Hello, Welcome To Spark Design System
      </h1>

      <div class="
        sprk-o-Stack__item
        sprk-o-Stack
        sprk-o-Stack--medium
        sprk-o-Stack--split@xs
        sprk-o-Stack--center-column
        sprk-o-Stack--center-row">
        <div class="sprk-o-Stack__item sprk-c-HighlightBoard__cta">
          <a class="
            sprk-c-Button
            sprk-c-Button--full@s" href="#nogo">
            Designers
          </a>
        </div>

        <div class="sprk-o-Stack__item sprk-c-HighlightBoard__cta">
          <a
            class="sprk-c-Button sprk-c-Button--full@s sprk-c-Button--secondary"
            href="#nogo">
            Developers
          </a>
        </div>
      </div>
    </div>
  </div>
`;

noImage.story = {
  name: 'No Image',
  parameters: {
    docs: { iframeHeight: 300 },
    jest: ['highlight-board'],
  },
};

export const stacked = () => `
  <div
   class="
     sprk-c-HighlightBoard
     sprk-c-HighlightBoard--has-image
     sprk-c-HighlightBoard--stacked
     sprk-u-mbm"
   data-id="highlightboard-3"
  >
    <img
      class="sprk-c-HighlightBoard__image"
      src="https://spark-assets.netlify.app/desktop.jpg" alt="">

    <div class="
      sprk-c-HighlightBoard__content
      sprk-o-Stack sprk-o-Stack--large">
      <h1 class="
        sprk-b-TypeDisplayOne
        sprk-c-HighlightBoard__heading
        sprk-o-Stack__item">
        Hello, Welcome To Spark Design System
      </h1>

      <div class="
        sprk-o-Stack__item
        sprk-o-Stack
        sprk-o-Stack--medium
        sprk-o-Stack--split@xs
        sprk-o-Stack--center-column
        sprk-o-Stack--center-row"
        >
        <div class="sprk-o-Stack__item sprk-c-HighlightBoard__cta">
          <a class="sprk-c-Button sprk-c-Button--full@s" href="#nogo">
            Designers
          </a>
        </div>

        <div class="sprk-o-Stack__item sprk-c-HighlightBoard__cta">
          <a
            class="sprk-c-Button sprk-c-Button--full@s sprk-c-Button--secondary"
            href="#nogo">
            Developers
          </a>
        </div>
      </div>
    </div>
  </div>
`;

stacked.story = {
  name: 'Stacked',
  parameters: {
    jest: ['highlight-board'],
  },
};
