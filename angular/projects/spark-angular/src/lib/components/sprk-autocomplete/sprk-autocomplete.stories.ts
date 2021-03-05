import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SprkAutocompleteModule } from './sprk-autocomplete.module';
import { SprkAutocompleteComponent } from './sprk-autocomplete.component';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Autocomplete',
  component: SprkAutocompleteComponent,
  decorators: [
    storyWrapper(
      (storyContent) => `<div class="sprk-o-Box">${storyContent}<div>`,
    ),
  ],
  parameters: {
    info: `
${markdownDocumentationLinkBuilder('autocomplete')}
todo write docs
`,
    docs: { iframeHeight: 400 },
  },
};

const modules = {
  imports: [SprkAutocompleteModule],
};

export const defaultStory = () => ({
  moduleMetadata: modules,
  template: `
  <sprk-autocomplete isOpen="true">
    <div aria-live-slot>i am the aria-live div</div>
    <label label-slot>Search for a Fruit</label>
    <div input-icon-container-slot>
      svg
      <input>
    </div>
    <ul role="listbox" list-slot>
      <li role="option">Apple</li>
    </ul>
  </sprk-autocomplete>
  `,
});

defaultStory.story = {
  name: 'Default',
  parameters: {
    jest: ['sprk-autocomplete.component'],
  },
};

export const defaultInvalid = () => ({
  moduleMetadata: modules,
  template: `
    default invalid
  `,
});

defaultInvalid.story = {
  name: 'Invalid',
  parameters: {
    jest: ['sprk-autocomplete.component'],
  },
};

export const defaultDisabled = () => ({
  moduleMetadata: modules,
  template: `
    default disabled
  `,
});

defaultDisabled.story = {
  name: 'Disabled',
  parameters: {
    jest: ['sprk-autocomplete.component'],
  },
};

export const hugeStory = () => ({
  moduleMetadata: modules,
  template: `
    huge
  `,
});

hugeStory.story = {
  name: 'Huge',
  parameters: {
    jest: ['sprk-autocomplete.component'],
  },
};

export const hugeInvalid = () => ({
  moduleMetadata: modules,
  template: `
    huge invalid
  `,
});

hugeInvalid.story = {
  name: 'Huge Invalid',
  parameters: {
    jest: ['sprk-autocomplete.component'],
  },
};

export const hugeDisabled = () => ({
  moduleMetadata: modules,
  template: `
    huge disabled
  `,
});

hugeDisabled.story = {
  name: 'Huge Disabbled',
  parameters: {
    jest: ['sprk-autocomplete.component'],
  },
};
