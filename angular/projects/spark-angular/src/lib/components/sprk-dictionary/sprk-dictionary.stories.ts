import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SprkDictionaryModule } from './sprk-dictionary.module';
import { SprkDictionaryComponent } from './sprk-dictionary.component';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Dictionary',
  component: SprkDictionaryComponent,
  decorators: [
    storyWrapper(
      (storyContent) => `<div class="sprk-o-Box">${storyContent}<div>`,
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: `${markdownDocumentationLinkBuilder('card')}`,
      },
      iframeHeight: 500,
    },
  },
};

const modules = {
  imports: [SprkDictionaryModule],
};

export const defaultStory = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-dictionary
     idString="dictionary-default"
     [keyValuePairs]="{
      'Email Address':'sparkdesignsystem@quickenloans.com',
      'Mailing Address': '123 Main Street, Detroit, MI, 48216',
      'Home Phone': '(123) 456-7890',
      'Cell Phone': '(098) 765-4321',
      'Work Phone': '(555) 555-5555',
      'Work Extension': '55555'
    }"
    ></sprk-dictionary>
  `,
});

defaultStory.storyName = 'Default';

defaultStory.parameters = {
  jest: ['sprk-dictionary.component'],
};

export const striped = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-dictionary
     variant="striped"
     idString="dictionary-striped"
     [keyValuePairs]="{
       'Email Address':'sparkdesignsystem@quickenloans.com',
       'Mailing Address': '123 Main Street, Detroit, MI, 48216',
       'Home Phone': '(123) 456-7890',
       'Cell Phone': '(098) 765-4321',
       'Work Phone': '(555) 555-5555',
       'Work Extension': '55555'
     }"
    ></sprk-dictionary>
  `,
});

striped.storyName = 'Striped';

striped.parameters = {
  jest: ['sprk-dictionary.component'],
};
