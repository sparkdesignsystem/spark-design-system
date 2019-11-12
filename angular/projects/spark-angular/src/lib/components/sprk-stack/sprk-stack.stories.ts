import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SprkStackModule } from '../sprk-stack/sprk-stack.module';
import { SprkStackItemModule } from '../../directives/sprk-stack-item/sprk-stack-item.module';
import { SprkStackComponent } from '../sprk-stack/sprk-stack.component';

export default {
  title: 'Components|Stack',
  component: SprkStackComponent,
  decorators: [
    storyWrapper(
      storyContent => (
        `<div class="sprk-o-Box sb-decorate">${ storyContent }<div>`
      )
    )
  ],
  parameters: {
    info: `
  ##### For design and usage information check out the [documentation.](https://spark-docs.netlify.com/using-spark/components/stack)
    `,
  },
};

const modules = {
  imports: [
    SprkStackModule,
    SprkStackItemModule,
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
  name: 'Stack/Split - Six Column'
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
  name: 'Stack/Split - Mixed',
};
