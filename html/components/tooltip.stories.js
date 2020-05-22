import { useEffect } from '@storybook/client-api';
import { tooltip } from './tooltip';
import '../utilities/polyfills/classListSVG';
import { markdownDocumentationLinkBuilder } from '../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Tooltip',
  decorators: [
    story => `<div class="sprk-o-Box">${story()}</div>`,
  ],
  parameters: {
    info: `
${markdownDocumentationLinkBuilder('toggle')}
    `,
    docs: { iframeHeight: 160 },
  },
};

export const lots = () => {
  useEffect(() => {
    tooltip();
  }, []);

  return `
  <div tabIndex="0" class=" sprk-u-mtm">Focus Target</div>
  <span class="sprk-b-TypeBodyTwo">
    short text
    <span data-sprk-tooltip="container" class="sprk-c-Tooltip__container">
      <svg
        data-sprk-tooltip="trigger"
        class="sprk-c-Icon sprk-c-Icon--filled"
        aria-labelledby="tooltip_1"
        tabIndex="0"
      >
        <use xlink:href="#information-filled-small" aria-hidden='true' />
      </svg>
      <span
        data-sprk-tooltip="content"
        class="sprk-c-Tooltip"
        aria-hidden="true"
        id="tooltip_1"
        role="tooltip"
      >
        beer
      </span>
    </span>
  </span>




  <div tabIndex="0" class=" sprk-u-mtm">Focus Target</div>
  <span class="sprk-b-TypeBodyTwo">
  long text
    <span data-sprk-tooltip="container" class="sprk-c-Tooltip__container">
      <svg
        data-sprk-tooltip="trigger"
        class="sprk-c-Icon sprk-c-Icon--filled"
        aria-labelledby="tooltip_1"
        tabIndex="0"
      >
        <use xlink:href="#information-filled-small" aria-hidden='true' />
      </svg>
      <span
        data-sprk-tooltip="content"
        class="sprk-c-Tooltip"
        aria-hidden="true"
        id="tooltip_1"
        role="tooltip"
      >
        <span class="sprk-c-Tooltip__content-wrapper">
          Beer is a beverage made by fermenting grains until they form ethanol and carbonation.
        </span>
      </span>
    </span>
  </span>
  <div tabIndex="0" class=" sprk-u-mtm">Focus Target</div>
  <div tabIndex="0" class=" sprk-u-mtm">Focus Target</div>
  <div tabIndex="0" class=" sprk-u-mtm">Focus Target</div>
  <div tabIndex="0" class=" sprk-u-mtm">Focus Target</div>
  <div tabIndex="0" class=" sprk-u-mtm">Focus Target</div>
  <div tabIndex="0" class=" sprk-u-mtm">Focus Target</div>
  <div tabIndex="0" class=" sprk-u-mtm">Focus Target</div>
  <div tabIndex="0" class=" sprk-u-mtm">Focus Target</div>
  <div tabIndex="0" class=" sprk-u-mtm">Focus Target</div>
  <div tabIndex="0" class=" sprk-u-mtm">Focus Target</div>
  <span class="sprk-b-TypeBodyTwo">
    one long word
    <span data-sprk-tooltip="container" class="sprk-c-Tooltip__container">
      <svg
        data-sprk-tooltip="trigger"
        class="sprk-c-Icon sprk-c-Icon--filled"
        aria-labelledby="tooltip_1"
        tabIndex="0"
      >
        <use xlink:href="#information-filled-small" aria-hidden='true' />
      </svg>
      <span
        data-sprk-tooltip="content"
        class="sprk-c-Tooltip"
        aria-hidden="true"
        id="tooltip_1"
        role="tooltip"
      >
        asdfghjgfdsasdfghjhgfdsdfghjkjhgfdfghjhgfdsdfghjhgfdsdfghjhgfdfghj
      </span>
    </span>
  </span>


  <div tabIndex="0" class=" sprk-u-mtm">Focus Target</div>
  <span class="sprk-b-TypeBodyTwo">
  goofy characters
    <span data-sprk-tooltip="container" class="sprk-c-Tooltip__container">
      <svg
        data-sprk-tooltip="trigger"
        class="sprk-c-Icon sprk-c-Icon--filled"
        aria-labelledby="tooltip_1"
        tabIndex="0"
      >
        <use xlink:href="#information-filled-small" aria-hidden='true' />
      </svg>
      <span
        data-sprk-tooltip="content"
        class="sprk-c-Tooltip"
        aria-hidden="true"
        id="tooltip_1"
        role="tooltip"
      >
        <span class="sprk-c-Tooltip__content-wrapper">
          !@#$%^&*()/</>/&
        </span>
      </span>
    </span>
  </span>


  <span class="sprk-b-TypeBodyTwo" style="position: absolute; left: 55%; top: 5%;">
  We take your privacy seriously.

  <span data-sprk-tooltip="container" class="sprk-c-Tooltip__container">
    <svg
      data-sprk-tooltip="trigger"
      class="sprk-c-Icon sprk-c-Icon--filled"
      aria-labelledby="tooltip_1"
      tabIndex="0"
    >
      <use xlink:href="#information-filled-small" aria-hidden='true' />
    </svg>
    <span
      data-sprk-tooltip="content"
      class="sprk-c-Tooltip"
      aria-hidden="true"
      id="tooltip_1"
      role="tooltip"
    />
      We may share your email with our partners.
    </span>
  </span>

</span>


<span class="sprk-b-TypeBodyTwo" style="position: absolute; left: 55%; top: 55%;">
    We take your privacy seriously.

    <span data-sprk-tooltip="container" class="sprk-c-Tooltip__container">
      <svg
        data-sprk-tooltip="trigger"
        class="sprk-c-Icon sprk-c-Icon--filled"
        aria-labelledby="tooltip_1"
        tabIndex="0"
      >
        <use xlink:href="#information-filled-small" aria-hidden='true' />
      </svg>
      <span
        data-sprk-tooltip="content"
        class="sprk-c-Tooltip"
        aria-hidden="true"
        id="tooltip_1"
        role="tooltip"
      />
        We may share your email with our partners.
      </span>
    </span>

  </span>


  <div tabIndex="0" class=" sprk-u-mtm">Focus Target</div>
  `;
};

lots.story = {
  name: 'Lots',
  parameters: {
    jest: ['tooltip'],
  }
};

export const defaultStory = () => {
  useEffect(() => {
    tooltip();
  }, []);

  return `
  <button class="sprk-c-Button sprk-u-mbm">Focus Target</button>
  <span class="sprk-b-TypeBodyTwo">
    We take your privacy seriously.

    <span data-sprk-tooltip="container" class="sprk-c-Tooltip__container">
      <svg
        data-sprk-tooltip="trigger"
        class="sprk-c-Icon sprk-c-Icon--filled"
        aria-labelledby="tooltip_1"
        tabIndex="0"
      >
        <use xlink:href="#information-filled-small" aria-hidden='true' />
      </svg>
      <span
        data-sprk-tooltip="content"
        class="sprk-c-Tooltip"
        aria-hidden="true"
        id="tooltip_1"
        role="tooltip"
      >
        <span class="sprk-c-Tooltip__content-wrapper">
          We may share your email with our partners.
        </span>
      </span>
    </span>

  </span>
  <div tabIndex="0" class=" sprk-u-mtm">Focus Target</div>
  `;
};

defaultStory.story = {
  name: 'Tooltip',
  parameters: {
    jest: ['tooltip'],
  }
};