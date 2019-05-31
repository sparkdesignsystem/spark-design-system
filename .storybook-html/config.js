import { configure, addDecorator, addParameters } from '@storybook/html';
import { themes } from '@storybook/theming';
import '@sparkdesignsystem/spark/_spark.scss';
import { withA11y } from '@storybook/addon-a11y';

addDecorator(withA11y);
// Option defaults.
addParameters({
  options: {
    theme: themes.normal,
  },
  info: { inline: true, header: false },
});


function loadStories() {
  const req = require.context('../spark', true, /.stories.js$/);

  req.keys().forEach(filename => {
    if (filename.indexOf('vanilla') >= 0) {
      req(filename);
    }
  });
}

configure(loadStories, module)