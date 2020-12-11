import { markdownDocumentationLinkBuilder } from '../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Foundations/Spacing',
  decorators: [
    (story) => `
      <div class="sprk-o-Box sb-decorate">${story()}</div>
    `,
  ],
  parameters: {
    info: `
${markdownDocumentationLinkBuilder('space', 'foundations')}
    `,
  },
};

export const insetSpacing = () =>
  `
    <div class="sprk-u-mbm">
      <p class="sprk-b-TypeBodyTwo">
        The grey border shows the extra small inset of 4px.
      </p>
    </div>
    <div class="sprk-u-mbm">
      <p class="sprk-b-TypeBodyTwo">
        The grey border shows the small inset of 8px.
      </p>
    </div>
    <div class="sprk-u-mbm">
      <p class="sprk-b-TypeBodyTwo">
        The grey border shows the medium inset of 16px.
      </p>
    </div>
    <div class="sprk-u-mbm">
      <p class="sprk-b-TypeBodyTwo">
        The grey border shows the large inset of 32px.
      </p>
    </div>
    <div class="sprk-u-mbm">
      <p class="sprk-b-TypeBodyTwo">
        The grey border shows the extra large inset of 64px.
      </p>
    </div>
  `;

insetSpacing.story = {
  name: 'Inset',
  decorators: [
    (storyFn) => `<div class="sb-inset-spacing-example">${storyFn()}</div>`,
  ],
};

export const insetSpacingShort = () =>
  `
    <div class="sprk-u-mbm">
      <p class="sprk-b-TypeBodyTwo">
        The grey border shows the extra small inset short of 2px 4px 2px 4px.
      </p>
    </div>
    <div class="sprk-u-mbm">
      <p class="sprk-b-TypeBodyTwo">
        The grey border shows the small inset short of 4px 8px 4px 8px.
      </p>
    </div>
    <div class="sprk-u-mbm">
      <p class="sprk-b-TypeBodyTwo">
        The grey border shows the medium inset short of 8px 16px 8px 16px.
      </p>
    </div>
    <div class="sprk-u-mbm">
      <p class="sprk-b-TypeBodyTwo">
        The grey border shows the large inset short of 16px 32px 16px 32px.
      </p>
    </div>
    <div class="sprk-u-mbm">
      <p class="sprk-b-TypeBodyTwo">
        The grey border shows the extra large inset short of 
        32px 64px 32px 64px.
      </p>
    </div>
  `;

insetSpacingShort.story = {
  name: 'Inset Short',
  decorators: [
    (storyFn) =>
      `<div class="sb-inset-spacing-short-example">${storyFn()}</div>`,
  ],
};

export const insetSpacingTall = () =>
  `
    <div class="sprk-u-mbm">
      <p class="sprk-b-TypeBodyTwo">
        The grey border shows the extra small inset tall of 6px 4px 6px 4px.
      </p>
    </div>
    <div class="sprk-u-mbm">
      <p class="sprk-b-TypeBodyTwo">
        The grey border shows the small inset tall of 12px 8px 12px 8px.
      </p>
    </div>
    <div class="sprk-u-mbm">
      <p class="sprk-b-TypeBodyTwo">
        The grey border shows the medium inset tall of 24px 16px 24px 16px.
      </p>
    </div>
    <div class="sprk-u-mbm">
      <p class="sprk-b-TypeBodyTwo">
        The grey border shows the large inset tall of 48px 32px 48px 32px.
      </p>
    </div>
    <div class="sprk-u-mbm">
      <p class="sprk-b-TypeBodyTwo">
        The grey border shows the extra large inset tall of 96px 64px 96px 64px.
      </p>
    </div>
  `;

insetSpacingTall.story = {
  name: 'Inset Tall',
  decorators: [
    (storyFn) =>
      `<div class="sb-inset-spacing-tall-example">${storyFn()}</div>`,
  ],
};

export const stackSpacing = () =>
  `
    <div>
      <p class="sprk-b-TypeBodyTwo">
        The grey shows the extra small stack spacing of 4px.
      </p>
    </div>
    <div class="sprk-u-man">
      <p class="sprk-b-TypeBodyTwo">
        The grey shows the small stack spacing of 8px.
      </p>
    </div>
    <div class="sprk-u-man">
      <p class="sprk-b-TypeBodyTwo">
        The grey shows the medium stack spacing of 16px.
      </p>
    </div>
    <div class="sprk-u-man">
      <p class="sprk-b-TypeBodyTwo">
        The grey shows the large stack spacing of 32px.
      </p>
    </div>
    <div class="sprk-u-man">
      <p class="sprk-b-TypeBodyTwo">
        The grey shows the extra large stack spacing of 64px.
      </p>
    </div>
  `;

stackSpacing.story = {
  name: 'Stack',
  decorators: [
    (storyFn) =>
      `<div class="sb-inset-spacing-stack-example">${storyFn()}</div>`,
  ],
};

export const inlineSpacing = () =>
  `
    <p>
      Inline items with xs spacing.
    </p>
    <span>Cats</span><span>Dogs</span><span>Birds</span>

    <p>
      Inline items with s spacing.
    </p>
    <span>Cats</span><span>Dogs</span><span>Birds</span>

    <p>
      Inline items with m spacing.
    </p>
    <span>Cats</span><span>Dogs</span><span>Birds</span>

    <p>
      Inline items with l spacing.
    </p>
    <span>Cats</span><span>Dogs</span><span>Birds</span>

    <p>
      Inline items with xl spacing.
    </p>
    <span>Cats</span><span>Dogs</span><span>Birds</span>

    <p>
      Inline items with no right margin on the last item.
    </p>
    <span>Fish</span><span>Frogs</span><span>Turtles</span>
  `;

inlineSpacing.story = {
  name: 'Inline',
  decorators: [
    (storyFn) =>
      `<div class="sb-inset-spacing-inline-example">${storyFn()}</div>`,
  ],
};

export const inlineSpacingMisc = () =>
  `
    <p>
      The grey shows a margin right using the the misc "a" spacing of 24px.
    </p>
    <span>Cats</span><span>Dogs</span><span>Birds</span>

    <p>
      The grey shows a margin right using the misc "b" spacing of 40px.
    </p>
    <span>Cats</span><span>Dogs</span><span>Birds</span>

    <p>
      The grey shows a margin right using the misc "c" spacing of 48px.
    </p>
    <span>Cats</span><span>Dogs</span><span>Birds</span>

    <p>
      The grey shows a margin right using the misc "d" spacing of 80px.
    </p>
    <span>Cats</span><span>Dogs</span><span>Birds</span>
  `;

inlineSpacingMisc.story = {
  name: 'Misc',
  decorators: [
    (storyFn) =>
      `<div class="sb-inset-spacing-misc-example">${storyFn()}</div>`,
  ],
};
