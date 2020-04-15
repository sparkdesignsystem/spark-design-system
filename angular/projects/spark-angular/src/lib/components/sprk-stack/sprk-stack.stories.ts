import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SprkStackModule } from '../sprk-stack/sprk-stack.module';
import { SprkStackItemModule } from '../../directives/sprk-stack-item/sprk-stack-item.module';
import { SprkStackItemDirective } from '../../directives/sprk-stack-item/sprk-stack-item.directive';
import { SprkStackComponent } from '../sprk-stack/sprk-stack.component';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';
import { SprkTextModule } from '../../directives/sprk-text/sprk-text.module';

export default {
  title: 'Components/Stack',
  component: SprkStackComponent,
  decorators: [
    storyWrapper(
      storyContent => (
        `<div class="sprk-o-Box sb-decorate">${ storyContent }<div>`
      )
    )
  ],
  parameters: {
    subcomponents: {
      SprkStackItemDirective,
    },
    info: `
${markdownDocumentationLinkBuilder('stack')}
- The \`itemSpacing\` @Input is not compatible with
stack items with specific-column classes such
as \`sprk-o-Stack__item--half@xs\`. Use padding
instead. See the "Stack/Split - Two Column With Padding"
for an example.
`,
    docs: { iframeHeight: 180 },
  },
};

const modules = {
  imports: [
    SprkStackModule,
    SprkStackItemModule,
    SprkTextModule,
  ],
};

export const defaultStory = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-stack>
      <div sprkStackItem></div>
      <div sprkStackItem></div>
    </sprk-stack>
  `
});

defaultStory.story = {
  name: 'Default',
  parameters: {
    jest: [
      'sprk-stack.component',
      'sprk-stack-item.directive',
    ],
  },
};

export const stackSplit = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-stack
      itemSpacing='medium'
      splitAt='small'
    >
      <div sprkStackItem>Item One</div>
      <div sprkStackItem>Item Two</div>
    </sprk-stack>
  `,
});

stackSplit.story = {
  name: 'Stack/Split - Spaced Items',
  parameters: {
    jest: [
      'sprk-stack.component',
      'sprk-stack-item.directive',
    ],
  },
};

export const stackSplitTwoCol = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-stack splitAt='tiny'>
      <div
        sprkStackItem
        class='sprk-o-Stack__item--half@xs'
      ></div>
      <div
        sprkStackItem
        class='sprk-o-Stack__item--half@xs'
      ></div>
    </sprk-stack>
  `,
});

stackSplitTwoCol.story = {
  name: 'Stack/Split - Two Column',
  parameters: {
    jest: [
      'sprk-stack.component',
      'sprk-stack-item.directive',
    ],
  },
};

export const stackSplitTwoColWithPadding = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-stack splitAt='tiny'>
      <div
        sprkStackItem
        class='sprk-o-Stack__item--half@xs sprk-o-Box'
      >
        <p sprkText variant="bodyTwo">
          Example paragraph text inside item 1.
        <p>
      </div>
      <div
        sprkStackItem
        class='sprk-o-Stack__item--half@xs sprk-o-Box'
      >
        <p sprkText variant="bodyTwo">
          Example paragraph text inside item 2.
        <p>
      </div>
    </sprk-stack>
  `,
});

stackSplitTwoColWithPadding.story = {
  name: 'Stack/Split - Two Column With Padding',
  parameters: {
    jest: [
      'sprk-stack.component',
      'sprk-stack-item.directive',
    ],
  },
};

export const stackSplitThreeCol = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-stack splitAt="tiny">
      <div
        sprkStackItem
        class="sprk-o-Stack__item--third@xs"
      ></div>
      <div
        sprkStackItem
        class="sprk-o-Stack__item--third@xs"
      ></div>
      <div
        sprkStackItem
        class="sprk-o-Stack__item--third@xs"
      ></div>
    </sprk-stack>
  `,
});

stackSplitThreeCol.story = {
  name: 'Stack/Split - Three Column',
  parameters: {
    jest: [
      'sprk-stack.component',
      'sprk-stack-item.directive',
    ],
  },
};

export const stackSplitFourCol = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-stack splitAt="tiny">
      <div
        sprkStackItem
        class="sprk-o-Stack__item--fourth@xs"
      ></div>
      <div
        sprkStackItem
        class="sprk-o-Stack__item--fourth@xs"
      ></div>
      <div
        sprkStackItem
        class="sprk-o-Stack__item--fourth@xs"
      ></div>
      <div
        sprkStackItem
        class="sprk-o-Stack__item--fourth@xs"
      ></div>
    </sprk-stack>
  `,
});

stackSplitFourCol.story = {
  name: 'Stack/Split - Four Column',
  parameters: {
    jest: [
      'sprk-stack.component',
      'sprk-stack-item.directive',
    ],
  },
};

export const stackSplitFiveCol = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-stack splitAt="tiny">
      <div
        sprkStackItem
        class="sprk-o-Stack__item--fifth@xs"
      ></div>
      <div
        sprkStackItem
        class="sprk-o-Stack__item--fifth@xs"
      ></div>
      <div
        sprkStackItem
        class="sprk-o-Stack__item--fifth@xs"
      ></div>
      <div
        sprkStackItem
        class="sprk-o-Stack__item--fifth@xs"
      ></div>
      <div
        sprkStackItem
        class="sprk-o-Stack__item--fifth@xs"
      ></div>
    </sprk-stack>
  `,
});

stackSplitFiveCol.story = {
  name: 'Stack/Split - Five Column',
  parameters: {
    jest: [
      'sprk-stack.component',
      'sprk-stack-item.directive',
    ],
  },
};

export const stackSplitSixCol = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-stack splitAt="tiny">
      <div
        sprkStackItem
        class="sprk-o-Stack__item--sixth@xs"
      ></div>
      <div
        sprkStackItem
        class="sprk-o-Stack__item--sixth@xs"
      ></div>
      <div
        sprkStackItem
        class="sprk-o-Stack__item--sixth@xs"
      ></div>
      <div
        sprkStackItem
        class="sprk-o-Stack__item--sixth@xs"
      ></div>
      <div
        sprkStackItem
        class="sprk-o-Stack__item--sixth@xs"
      ></div>
      <div
        sprkStackItem
        class="sprk-o-Stack__item--sixth@xs"
      ></div>
    </sprk-stack>
  `,
});

stackSplitSixCol.story = {
  name: 'Stack/Split - Six Column',
  parameters: {
    jest: [
      'sprk-stack.component',
      'sprk-stack-item.directive',
    ],
  },
};

export const stackSplitLayoutThreeFourths = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-stack splitAt="tiny">
      <div
        sprkStackItem
        class="sprk-o-Stack__item--three-fourths@xs"
      ></div>
      <div
        sprkStackItem
        class="sprk-o-Stack__item--fourth@xs"
      ></div>
    </sprk-stack>
  `,
});

stackSplitLayoutThreeFourths.story = {
  name: 'Stack/Split - 75/25',
  parameters: {
    jest: [
      'sprk-stack.component',
      'sprk-stack-item.directive',
    ],
  },
};

export const stackSplitLayoutThreeFifths = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-stack splitAt="tiny">
      <div
        sprkStackItem
        class="sprk-o-Stack__item--three-fifths@xs"
      ></div>
      <div
        sprkStackItem
        class="sprk-o-Stack__item--two-fifths@xs"
      ></div>
    </sprk-stack>
  `,
});

stackSplitLayoutThreeFifths.story = {
  name: 'Stack/Split - 60/40',
  parameters: {
    jest: [
      'sprk-stack.component',
      'sprk-stack-item.directive',
    ],
  },
};

export const stackSplitLayoutThreeTenths = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-stack splitAt="tiny">
      <div
        sprkStackItem
        class="sprk-o-Stack__item--three-tenths@xs"
      ></div>
      <div
        sprkStackItem
        class="sprk-o-Stack__item--seven-tenths@xs"
      ></div>
    </sprk-stack>
  `,
});

stackSplitLayoutThreeTenths.story = {
  name: 'Stack/Split - 30/70',
  parameters: {
    jest: [
      'sprk-stack.component',
      'sprk-stack-item.directive',
    ],
  },
};

export const stackSplitLayoutMixed = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-stack splitAt="tiny">
      <div
        sprkStackItem
        class="sprk-o-Stack__item--fourth@xs sprk-u-AbsoluteCenter"
      >
        <p class="sprk-b-TypeBodyOne">
          fourth
        </p>
      </div>
      <div
        sprkStackItem
        class="sprk-o-Stack__item--half@xs sprk-u-AbsoluteCenter"
      >
        <p class="sprk-b-TypeBodyOne">
          half
        </p>
      </div>
      <div
        sprkStackItem
        class="sprk-o-Stack__item--fourth@xs sprk-u-AbsoluteCenter"
      >
        <p class="sprk-b-TypeBodyOne">
          fourth
        </p>
      </div>
    </sprk-stack>

    <sprk-stack splitAt="tiny">
      <div
        sprkStackItem
        class="sprk-o-Stack__item--sixth@xs sprk-u-AbsoluteCenter"
      >
        <p class="sprk-b-TypeBodyOne">
          sixth
        </p>
      </div>
      <div
        sprkStackItem
        class="sprk-o-Stack__item--sixth@xs sprk-u-AbsoluteCenter"
      >
        <p class="sprk-b-TypeBodyOne">
          sixth
        </p>
      </div>
      <div
        sprkStackItem
        class="sprk-o-Stack__item--sixth@xs sprk-u-AbsoluteCenter"
      >
        <p class="sprk-b-TypeBodyOne">
          sixth
        </p>
      </div>
      <div
        sprkStackItem
        class="sprk-o-Stack__item--flex@xs sprk-u-AbsoluteCenter"
      >
        <p class="sprk-b-TypeBodyOne">
          flex
        </p>
      </div>
    </sprk-stack>

    <sprk-stack splitAt="tiny">
      <div
        sprkStackItem
        class="sprk-o-Stack__item--two-fifths@xs sprk-u-AbsoluteCenter"
      >
        <p class="sprk-b-TypeBodyOne">
          two-fifths
        </p>
      </div>
      <div
        sprkStackItem
        class="sprk-o-Stack__item--fifth@xs sprk-u-AbsoluteCenter"
      >
        <p class="sprk-b-TypeBodyOne">
          fifth
        </p>
      </div>
      <div
        sprkStackItem
        class="sprk-o-Stack__item--fifth@xs sprk-u-AbsoluteCenter"
      >
        <p class="sprk-b-TypeBodyOne">
          fifth
        </p>
      </div>
      <div
        sprkStackItem
        class="sprk-o-Stack__item--fifth@xs sprk-u-AbsoluteCenter"
      >
        <p class="sprk-b-TypeBodyOne">
          fifth
        </p>
      </div>
    </sprk-stack>

    <sprk-stack splitAt="tiny">
      <div
        sprkStackItem
        class="sprk-o-Stack__item--half@xs"
      >
        <sprk-stack splitAt="tiny">
          <div
            sprkStackItem
            class="sprk-o-Stack__item--flex@xs sprk-u-AbsoluteCenter"
          >
            <p class="sprk-b-TypeBodyOne">
              Nested Item (flex)
            </p>
          </div>
          <div
            sprkStackItem
            class="sprk-o-Stack__item--flex@xs sprk-u-AbsoluteCenter"
          >
            <p class="sprk-b-TypeBodyOne">
              Nested Item (flex)
            </p>
          </div>
        </sprk-stack>
      </div>
      <div
        sprkStackItem
        class="sprk-o-Stack__item--half@xs sprk-u-AbsoluteCenter"
      >
        <p class="sprk-b-TypeBodyOne">
          half
        </p>
      </div>
    </sprk-stack>

    <sprk-stack splitAt="tiny">
      <div
        sprkStackItem
        class="sprk-o-Stack__item--two-fifths@xs sprk-u-AbsoluteCenter"
      >
        <p class="sprk-b-TypeBodyOne">
          two-fifths
        </p>
      </div>
      <div
        sprkStackItem
        class="sprk-o-Stack__item--three-fifths@xs sprk-u-AbsoluteCenter"
      >
        <p class="sprk-b-TypeBodyOne">
          three-fifths
        </p>
      </div>
    </sprk-stack>
  `,
});

stackSplitLayoutMixed.story = {
  name: 'Stack/Split - Mixed Column',
  parameters: {
    docs: { iframeHeight: 400 },
    jest: [
      'sprk-stack.component',
      'sprk-stack-item.directive',
    ],
  },
};
