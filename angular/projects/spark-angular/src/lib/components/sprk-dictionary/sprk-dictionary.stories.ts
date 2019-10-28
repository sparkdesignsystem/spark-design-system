import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SprkDictionaryModule } from './sprk-dictionary.module';

export default {
  title: 'Components|Dictionary',
  component: SprkDictionaryModule,
  decorators: [
    storyWrapper(
      storyContent => (
        `<div class="sprk-o-Box">${ storyContent }<div>`
      )
    )
  ],
};

const modules = {
  imports: [SprkDictionaryModule],
};

export const defaultDictionary = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-dictionary
     idString="dictionary-default"
     [data]="{
       'Email Address':'sparkdesignsystem@quickenloans.com',
       'Mailing Address': '123 Main Street, Detroit, MI, 48216',
       'Home Phone': '(123) 456-7890',
       'Cell Phone': '(098) 765-4321',
       'Work Phone': '(555) 555-5555',
       'Work Extension': '55555'
     }"
     idString="dictionary-1"
    ></sprk-dictionary>
  `
});

defaultDictionary.story = {
  name: 'Default'
};

export const striped = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-dictionary
     dictionaryType="striped"
     idString="dictionary-striped"
     [data]="{
       'Email Address':'sparkdesignsystem@quickenloans.com',
       'Mailing Address': '123 Main Street, Detroit, MI, 48216',
       'Home Phone': '(123) 456-7890',
       'Cell Phone': '(098) 765-4321',
       'Work Phone': '(555) 555-5555',
       'Work Extension': '55555'
     }"
     idString="dictionary-1"
    ></sprk-dictionary>
  `
});

striped.story = {
  name: 'Striped'
};
