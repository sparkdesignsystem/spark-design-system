import '../../spark/manifests/spark/_spark.scss';
import { configure, addParameters, addDecorator } from '@storybook/html';
import { withA11y } from '@storybook/addon-a11y';
import sparkTheme from '../../storybook-spark-theme';
import { withActions } from '@storybook/addon-actions';

addDecorator(withA11y);
addDecorator(withActions('click .sprk-c-Button'));
addDecorator(withActions('click .sprk-b-Link'));
addDecorator(story => `<div class="sprk-o-Box" data-sprk-main>${story()}</div>`);
// Option defaults
addParameters({
  options: {
    theme: sparkTheme,
  },
});

configure(require.context('../../spark', true, /\/vanilla\/.*\.stories\.(js|ts|tsx|mdx)$/), module);
