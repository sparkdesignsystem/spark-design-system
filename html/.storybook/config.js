import '../_spark.scss';
import { configure, addParameters, addDecorator } from '@storybook/html';
import { withA11y } from '@storybook/addon-a11y';
import sparkTheme from '../../storybook-theming/storybook-spark-theme';
import { withActions } from '@storybook/addon-actions';
import '!style-loader!css-loader!sass-loader!../../storybook-theming/font-loader.scss';
import '../../storybook-theming/icon-loader';

addDecorator(withA11y);
addDecorator(withActions('click .sprk-c-Button'));
addDecorator(withActions('click .sprk-b-Link'));

// Option defaults
addParameters({
  options: {
    theme: sparkTheme,
  },
});

configure(require.context('..', true, /^((?![\\/]node_modules|dist[\\/]).)*\.stories\.js$/));

