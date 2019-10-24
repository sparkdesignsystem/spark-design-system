import { configure, addDecorator, addParameters } from '@storybook/angular';
import { withA11y } from '@storybook/addon-a11y';
import sparkTheme from "./storybook-spark-theme";
import '../src/polyfills';


addDecorator(withA11y);

// Option defaults.
addParameters({
  options: {
    theme: sparkTheme,
  },
});

configure(require.context('../projects/spark-angular/src/lib', true, /\.stories\.(js|ts|tsx|mdx)$/), module);
