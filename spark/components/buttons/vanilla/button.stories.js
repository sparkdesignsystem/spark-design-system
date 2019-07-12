import { storiesOf } from '@storybook/html';

const stories = storiesOf('Button', module);

stories.add('primary', () => ('<button class="sprk-c-Button" data-id="button-1">Button</button>'));
stories.add('secondary', () => (
  '<button class="sprk-c-Button sprk-c-Button--secondary" type="button" data-id="button-1">Button</button>'
));
stories.add('tertiary', () => (
  '<button class="sprk-c-Button sprk-c-Button--tertiary" data-id="button-1">Button</button>'
));
stories.add('disabled', () => (
  '<button class="sprk-c-Button sprk-is-Disabled" data-id="button-1" disabled>Button</button>'
));
stories.add('with spinner', () => (
  '<button class="sprk-c-Button" data-sprk-spinner="click" data-id="button-spinner-1">Submit</button>'
));
stories.add('full width at small viewport', () => (
  '<button class="sprk-c-Button sprk-c-Button--full@s" type="button" data-id="button-1">Button</button>'
));
stories.add('full width at extra small viewport', () => (
  '<button class="sprk-c-Button sprk-c-Button--full@xs" type="button" data-id="button-90">Button</button>'));
