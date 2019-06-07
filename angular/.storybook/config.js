// import '@sparkdesignsystem/spark/_spark.scss';
import '!style-loader!css-loader!sass-loader!@sparkdesignsystem/spark/_spark.scss';
import { configure, addParameters } from '@storybook/angular';
import { themes } from '@storybook/theming';
import sparkTheme from "../storybook-spark-theme";

// Option defaults.
addParameters({
  options: {
    theme: sparkTheme,
  },
  info: { inline: true, header: false },
});

function loadStories() {
  const req = require.context('../spark', true, /\.stories\.ts$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);