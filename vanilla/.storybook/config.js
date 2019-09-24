import '../../spark/manifests/spark/_spark.scss';
import { configure, addParameters, addDecorator } from '@storybook/html';
// import { withA11y } from '@storybook/addon-a11y';
import sparkTheme from '../../storybook-spark-theme';
import spark from '../../spark/manifests/spark/spark';

// initialize spark js
spark();

// addDecorator(withA11y);
addDecorator(story => `<div class="sprk-o-Box">${story()}</div>`);
// Option defaults.
addParameters({
  options: {
    theme: sparkTheme,
  },
});

configure(require.context('../../spark', true, /\/vanilla\/.*\.stories\.(js|ts|tsx|mdx)$/), module);
