import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SparkInputContainerModule } from './sprk-input-container/sprk-input-container.module';
import { SprkInputModule } from '../../directives/inputs/sprk-input/sprk-input.module';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkLabelModule } from '../../directives/inputs/sprk-label/sprk-label.module';
import { SprkIconInputContainerModule } from './sprk-icon-input-container/sprk-icon-input-container.module';
import { SparkInputContainerComponent } from './sprk-input-container/sprk-input-container.component';

export default {
  title: 'Components/Input/Search',
  component: SparkInputContainerComponent,
  decorators: [
    storyWrapper(
      storyContent => (
        `<div class="sprk-o-Box">
          <form (submit)="onSubmit($event)" #sampleForm="ngForm">
            ${storyContent}
          </form>
        <div>`
      )
    )
  ],
  props: {
    onSubmit(event): void {
      this.form_submitted = true;
    }
  },
  parameters: {
    info: `
##### For design and usage information check out the [documentation.](https://spark-docs.netlify.com/using-spark/components/input)
    `,
    docs: { iframeHeight: 200 },
  }
};

const modules = {
  imports: [
    SprkIconInputContainerModule,
    SparkInputContainerModule,
    SprkLabelModule,
    SprkInputModule,
    SprkIconModule,
  ],
};

export const searchInput = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-input-container>
      <label sprkLabel>Search Input</label>
      <input
        name="search_input"
        type="search"
        [(ngModel)]="search_input"
        #searchInput="ngModel"
        data-id="search-1"
        sprkInput
      >
    </sprk-input-container>
  `,
});

searchInput.story = {
  name: 'Default',
};

export const inlineSearchInput = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon-input-container>
      <label
        class="sprk-b-Label--with-icon sprk-u-ScreenReaderText"
        sprkLabel
      >
        Search
      </label>
      <sprk-icon
        iconType="search"
        additionalClasses="sprk-b-InlineSearch__icon sprk-c-Icon--stroke-current-color"
        sprk-input-icon
      ></sprk-icon>
      <input
        name="inline_search_input"
        class="sprk-b-TextInput--has-svg-icon"
        type="text"
        placeholder="Search"
        [(ngModel)]="inline_search_input"
        #inlineSearchInput="ngModel"
        data-id="input-search-1"
        sprkInput
      >
    </sprk-icon-input-container>
  `,
});

inlineSearchInput.story = {
  name: 'Inline',
};
