// prettier-ignore
// @ts-ignore
import { moduleMetadata, Meta, componentWrapperDecorator } from '@storybook/angular';
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
    moduleMetadata({
      imports: [SprkStackModule, SprkStackItemModule, SprkTextModule],
    }),
    componentWrapperDecorator(
      (story) => `<div class="sb-decorate">${story}</div>`,
    ),
  ],
  parameters: {
    subcomponents: {
      SprkStackItemDirective,
    },
    docs: {
      source: {
        type: 'code',
      },
      iframeHeight: 180,
      description: {
        component: `
${markdownDocumentationLinkBuilder('stack')}
- The \`itemSpacing\` @Input is not compatible with
stack items with specific-column classes such
as \`sprk-o-Stack__item--half@xs\`. Use padding
instead. See the "Stack/Split - Two Column With Padding"
for an example.
`,
      },
    },
  },
} as Meta;

export const defaultStory = () => ({
  template: `
    <sprk-stack>
      <div sprkStackItem></div>
      <div sprkStackItem></div>
    </sprk-stack>
  `,
});

defaultStory.storyName = 'Default';

defaultStory.parameters = {
  jest: ['sprk-stack.component', 'sprk-stack-item.directive'],
};

export const stackSplit = () => ({
  template: `
    <sprk-stack
      itemSpacing="medium"
      splitAt="small"
    >
      <div sprkStackItem>Item One</div>
      <div sprkStackItem>Item Two</div>
    </sprk-stack>
  `,
});

stackSplit.storyName = 'Stack/Split - Spaced Items';

defaultStory.parameters = {
  jest: ['sprk-stack.component', 'sprk-stack-item.directive'],
};

export const stackSplitTwoCol = () => ({
  template: `
    <sprk-stack splitAt="tiny">
      <div
        sprkStackItem
        class="sprk-o-Stack__item--half@xs"
      ></div>
      <div
        sprkStackItem
        class="sprk-o-Stack__item--half@xs"
      ></div>
    </sprk-stack>
  `,
});

stackSplitTwoCol.storyName = 'Stack/Split - Two Column';

stackSplitTwoCol.parameters = {
  jest: ['sprk-stack.component', 'sprk-stack-item.directive'],
};

export const stackSplitTwoColWithPadding = () => ({
  template: `
    <sprk-stack splitAt="tiny">
      <div
        sprkStackItem
        class="sprk-o-Stack__item--half@xs sprk-o-Box"
      >
        <p sprkText variant="bodyTwo">
          Example paragraph text inside item 1.
        <p>
      </div>
      <div
        sprkStackItem
        class="sprk-o-Stack__item--half@xs sprk-o-Box"
      >
        <p sprkText variant="bodyTwo">
          Example paragraph text inside item 2.
        <p>
      </div>
    </sprk-stack>
  `,
});

stackSplitTwoColWithPadding.storyName = 'Stack/Split - Two Column With Padding';

stackSplitTwoColWithPadding.parameters = {
  jest: ['sprk-stack.component', 'sprk-stack-item.directive'],
};

export const stackSplitThreeCol = () => ({
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

stackSplitThreeCol.storyName = 'Stack/Split - Three Column';

stackSplitThreeCol.parameters = {
  jest: ['sprk-stack.component', 'sprk-stack-item.directive'],
};

export const stackSplitFourCol = () => ({
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

stackSplitFourCol.storyName = 'Stack/Split - Four Column';

stackSplitFourCol.parameters = {
  jest: ['sprk-stack.component', 'sprk-stack-item.directive'],
};

export const stackSplitFiveCol = () => ({
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

stackSplitFiveCol.storyName = 'Stack/Split - Five Column';

stackSplitFiveCol.parameters = {
  jest: ['sprk-stack.component', 'sprk-stack-item.directive'],
};

export const stackSplitSixCol = () => ({
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

stackSplitSixCol.storyName = 'Stack/Split - Six Column';

stackSplitSixCol.parameters = {
  jest: ['sprk-stack.component', 'sprk-stack-item.directive'],
};

export const stackSplitLayoutThreeFourths = () => ({
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

stackSplitLayoutThreeFourths.storyName = 'Stack/Split - 75/25';

stackSplitLayoutThreeFourths.parameters = {
  jest: ['sprk-stack.component', 'sprk-stack-item.directive'],
};

export const stackSplitLayoutThreeFifths = () => ({
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

stackSplitLayoutThreeFifths.storyName = 'Stack/Split - 60/40';

stackSplitLayoutThreeFifths.parameters = {
  jest: ['sprk-stack.component', 'sprk-stack-item.directive'],
};

export const stackSplitLayoutThreeTenths = () => ({
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

stackSplitLayoutThreeTenths.storyName = 'Stack/Split - 30/70';

stackSplitLayoutThreeTenths.parameters = {
  jest: ['sprk-stack.component', 'sprk-stack-item.directive'],
};

export const stackSplitLayoutMixed = () => ({
  template: `
    <sprk-stack splitAt="tiny">
      <div
        sprkStackItem
        class="sprk-o-Stack sprk-o-Stack__item--fourth@xs sprk-o-Stack--center-all"
      >
        <p sprkStackItem class="sprk-b-TypeBodyOne">
          fourth
        </p>
      </div>

      <div
        sprkStackItem
        class="sprk-o-Stack sprk-o-Stack__item--half@xs sprk-o-Stack--center-all"
      >
        <p sprkStackItem class="sprk-b-TypeBodyOne">
          half
        </p>
      </div>

      <div
        sprkStackItem
        class="sprk-o-Stack sprk-o-Stack__item--fourth@xs sprk-o-Stack--center-all"
      >
        <p sprkStackItem class="sprk-b-TypeBodyOne">
          fourth
        </p>
      </div>
    </sprk-stack>

    <sprk-stack splitAt="tiny">
      <div
        sprkStackItem
        class="sprk-o-Stack sprk-o-Stack__item--sixth@xs sprk-o-Stack--center-all"
      >
        <p sprkStackItem class="sprk-b-TypeBodyOne">
          sixth
        </p>
      </div>

      <div
        sprkStackItem
        class="sprk-o-Stack sprk-o-Stack__item--sixth@xs sprk-o-Stack--center-all"
      >
        <p sprkStackItem class="sprk-b-TypeBodyOne">
          sixth
        </p>
      </div>

      <div
        sprkStackItem
        class="sprk-o-Stack sprk-o-Stack__item--sixth@xs sprk-o-Stack--center-all"
      >
        <p sprkStackItem class="sprk-b-TypeBodyOne">
          sixth
        </p>
      </div>

      <div
        sprkStackItem
        class="sprk-o-Stack sprk-o-Stack__item--flex@xs sprk-o-Stack--center-all"
      >
        <p sprkStackItem class="sprk-b-TypeBodyOne">
          flex
        </p>
      </div>
    </sprk-stack>

    <sprk-stack splitAt="tiny">
      <div
        sprkStackItem
        class="sprk-o-Stack sprk-o-Stack__item--two-fifths@xs sprk-o-Stack--center-all"
      >
        <p sprkStackItem class="sprk-b-TypeBodyOne">
          two-fifths
        </p>
      </div>

      <div
        sprkStackItem
        class="sprk-o-Stack sprk-o-Stack__item--fifth@xs sprk-o-Stack--center-all"
      >
        <p sprkStackItem class="sprk-b-TypeBodyOne">
          fifth
        </p>
      </div>

      <div
        sprkStackItem
        class="sprk-o-Stack sprk-o-Stack__item--fifth@xs sprk-o-Stack--center-all"
      >
        <p sprkStackItem class="sprk-b-TypeBodyOne">
          fifth
        </p>
      </div>

      <div
        sprkStackItem
        class="sprk-o-Stack sprk-o-Stack__item--fifth@xs sprk-o-Stack--center-all"
      >
        <p sprkStackItem class="sprk-b-TypeBodyOne">
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
            class="sprk-o-Stack sprk-o-Stack__item--flex@xs sprk-o-Stack--center-all"
          >
            <p sprkStackItem class="sprk-b-TypeBodyOne">
              Nested Item (flex)
            </p>
          </div>

          <div
            sprkStackItem
            class="sprk-o-Stack sprk-o-Stack__item--flex@xs sprk-o-Stack--center-all"
          >
            <p sprkStackItem class="sprk-b-TypeBodyOne">
              Nested Item (flex)
            </p>
          </div>
        </sprk-stack>
      </div>

      <div
        sprkStackItem
        class="sprk-o-Stack sprk-o-Stack__item--half@xs sprk-o-Stack--center-all"
      >
        <p sprkStackItem class="sprk-b-TypeBodyOne">
          half
        </p>
      </div>
    </sprk-stack>

    <sprk-stack splitAt="tiny">
      <div
        sprkStackItem
        class="sprk-o-Stack sprk-o-Stack__item--two-fifths@xs sprk-o-Stack--center-all"
      >
        <p sprkStackItem class="sprk-b-TypeBodyOne">
          two-fifths
        </p>
      </div>

      <div
        sprkStackItem
        class="sprk-o-Stack sprk-o-Stack__item--three-fifths@xs sprk-o-Stack--center-all"
      >
        <p sprkStackItem class="sprk-b-TypeBodyOne">
          three-fifths
        </p>
      </div>
    </sprk-stack>
  `,
});

stackSplitLayoutMixed.storyName = 'Stack/Split - Mixed Column';

stackSplitLayoutMixed.parameters = {
  docs: { iframeHeight: 400 },
  jest: ['sprk-stack.component', 'sprk-stack-item.directive'],
};
