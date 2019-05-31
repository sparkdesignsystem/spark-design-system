import { configure, addDecorator, addParameters } from '@storybook/angular';
import { themes } from '@storybook/theming';
import '@sparkdesignsystem/spark/_spark.scss';
import { withA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';

addDecorator(withA11y);
addDecorator(withInfo);
// Option defaults.
addParameters({
  options: {
    theme: themes.normal,
  },
  info: { inline: true, header: false },
});

function loadStories() {
  const req = require.context('../spark', true, /\.stories\.ts$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);