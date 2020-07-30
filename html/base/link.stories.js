import { markdownDocumentationLinkBuilder } from '../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Link',
  decorators: [(story) => `<div class="sprk-o-Box">${story()}</div>`],
  parameters: {
    docs: { iframeHeight: 80 },
    info: `
${markdownDocumentationLinkBuilder('link')}
- Spark Link styles are for text-based links.
Images that are links should not use Spark classes.
- The \`data-id\` property is provided as a hook for
automated tools. If you have multiple instances
of the same variant of a component on the same page,
make sure each instance has a unique \`data-id\` property
("link-1", "link-2", "link-3", etc).
`,
  },
};

export const defaultStory = () =>
  `
    <a
      class="sprk-b-Link"
      href="#nogo"
      data-id="link-1"
      data-analytics="object.action.event"
    >
      Default Link
    </a>
  `;

defaultStory.story = {
  name: 'Default',
};

export const simple = () =>
  `
    <a
      class="sprk-b-Link sprk-b-Link--simple"
      href="#nogo"
      data-id="link-2"
      data-analytics="object.action.event"
    >
      Simple Link
    </a>
  `;

export const light = () =>
  `
    <div class="sprk-o-Box" style="background-color: #1C1B1A"> 
      <a
        class="sprk-b-Link sprk-b-Link--light"
        href="#nogo"
        data-id="link-3"
        data-analytics="object.action.event"
      >
        Light Link
      </a>
    </div> 
  `;

export const iconWithTextLink = () =>
  `
    <div>
      <a
        class="sprk-b-Link sprk-b-Link--has-icon"
        href="#nogo"
        data-id="link-4"
        data-analytics="object.action.event"
      >
        <svg
          class="
            sprk-c-Icon
            sprk-c-Icon--xl
            sprk-u-mrs
            sprk-c-Icon--filled-current-color
          "
          viewBox="0 0 100 100"
        >
          <use xlink:href="#arrow-left" />
        </svg>

        Back
      </a>
    </div>
    <div>
      <a
        class="sprk-b-Link sprk-b-Link--has-icon"
        href="#nogo"
        data-id="link-5"
        data-analytics="object.action.event"
      >
        Forward
        <svg
          class="
            sprk-c-Icon
            sprk-c-Icon--xl
            sprk-u-mls
            sprk-c-Icon--filled-current-color
          "
          viewBox="0 0 100 100">
          <use xlink:href="#arrow-right" />
        </svg>
      </a>
    </div>
  `;

export const disabled = () =>
  `
    <a
      class="sprk-b-Link sprk-b-Link--disabled"
      href="#nogo"
      data-id="link-6"
      data-analytics="object.action.event"
    >
      Disabled Link
    </a>
  `;

export const disabledSimple = () =>
  `
    <a
      class="sprk-b-Link sprk-b-Link--simple sprk-b-Link--disabled"
      href="#nogo"
      data-id="link-7"
      data-analytics="object.action.event"
    >
      Disabled Link
    </a>
  `;

disabledSimple.story = {
  name: 'Disabled - Simple',
};

export const disabledLight = () =>
  `
    <div class="sprk-o-Box" style="background-color: #1C1B1A"> 
      <a
        class="sprk-b-Link sprk-b-Link--light sprk-b-Link--disabled"
        href="#nogo"
        data-id="link-8"
        data-analytics="object.action.event"
      >
        Disabled Link
      </a>
    </div>
  `;

disabledLight.story = {
  name: 'Disabled - Light',
};


export const disabledIconWithTextLink = () =>
  `
    <div>
      <a
        class="sprk-b-Link sprk-b-Link--has-icon sprk-b-Link--disabled"
        href="#nogo"
        data-id="link-9"
        data-analytics="object.action.event"
      >
        <svg
          class="
            sprk-c-Icon
            sprk-c-Icon--xl
            sprk-u-mrs
            sprk-c-Icon--filled-current-color
          "
          viewBox="0 0 100 100"
        >
          <use xlink:href="#arrow-left" />
        </svg>

        Back
      </a>
    </div>
    <div>
      <a
        class="sprk-b-Link sprk-b-Link--has-icon sprk-b-Link--disabled"
        href="#nogo"
        data-id="link-10"
        data-analytics="object.action.event"
      >
        Forward
        <svg
          class="
            sprk-c-Icon
            sprk-c-Icon--xl
            sprk-u-mls
            sprk-c-Icon--filled-current-color
          "
          viewBox="0 0 100 100">
          <use xlink:href="#arrow-right" />
        </svg>
      </a>
    </div>
  `;

disabledIconWithTextLink.story = {
  name: 'Disabled - Icon With Text Link',
};
