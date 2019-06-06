import { configure, addDecorator, addParameters } from '@storybook/html';
import '@sparkdesignsystem/spark/_spark.scss';
import spark from "@sparkdesignsystem/spark/spark";
import { withA11y } from '@storybook/addon-a11y';
import { themes } from '@storybook/theming';
import sparkTheme from "../storybook-spark-theme";

spark({});
addDecorator(withA11y);
// Option defaults.
addParameters({
  options: {
    theme: sparkTheme,
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