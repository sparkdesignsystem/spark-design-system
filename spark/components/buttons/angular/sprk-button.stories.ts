import { storiesOf } from '@storybook/angular';
import { Button } from '@storybook/angular/demo';

storiesOf('My Button', module)
 .add('with text', () => ({
    component: Button,
    props: {
      text: 'Hello Button',
    },
  }))
  .add('with emoji', () => ({
    component: Button,
    props: {
      text: '😀 😎 👍 💯',
    },
  }));