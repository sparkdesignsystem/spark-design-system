import { SprkDictionaryModule } from './sprk-dictionary.module';
import { SprkDictionaryComponent } from './sprk-dictionary.component';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';
// prettier-ignore
// @ts-ignore
import { moduleMetadata, Meta, componentWrapperDecorator } from '@storybook/angular';

export default {
  title: 'Components/Dictionary',
  component: SprkDictionaryComponent,
  decorators: [
    moduleMetadata({
      imports: [SprkDictionaryModule],
    }),
    componentWrapperDecorator(
      (story) => `<div class="sprk-o-Box">${story}</div>`,
    ),
  ],
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
      description: {
        component: `${markdownDocumentationLinkBuilder('card')}`,
      },
      iframeHeight: 500,
    },
  },
} as Meta;

export const defaultStory = () => ({
  template: `
    <sprk-dictionary
     idString="dictionary-default"
     [keyValuePairs]="{
      'Email Address':'sparkdesignsystem@rocketmortgage.com',
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
  template: `
    <sprk-dictionary
     variant="striped"
     idString="dictionary-striped"
     [keyValuePairs]="{
       'Email Address':'sparkdesignsystem@rocketmortgage.com',
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
