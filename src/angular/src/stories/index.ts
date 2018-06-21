import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { SparkButton } from '../../../../packages/spark-core-angular/components/button';

storiesOf('My Button', module)
  .add('with some emoji', () => ({
    component: SparkButton,
    props: {
      text: 'Click Here',
    },
  }))
  .add('with some emoji and action', () => ({
    component: SparkButton,
    props: {
      text: 'Clicked!',
      click: action('clicked'),
    },
  }));
