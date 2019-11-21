import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import '../../html/_spark.scss';
import '../../storybook-utilities/storybook-theming/_docs.scss';
import { withA11y } from '@storybook/addon-a11y';
import sparkTheme from "../../storybook-utilities/storybook-theming/storybook-spark-theme";
import { withTests } from '@storybook/addon-jest';
import results from '../src/.jest-test-results.json';
import '!style-loader!css-loader!sass-loader!../../storybook-utilities/storybook-theming/font-loader.scss';
import '../../storybook-utilities/icon-loader';

addDecorator(withA11y);
addDecorator(
  withTests({
    results
  }
));

// Option defaults.
addParameters({
  options: {
    theme: sparkTheme,
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, { numeric: true }),
  },
});

addParameters({
  docs: {
    extractComponentDescription: (component, { info }) => {
      if (info) {
        return typeof info === 'string' ? info : info.markdown || info.text;
      }
      return null;
    },
  },
})

configure(require.context('../src', true, /\.stories\.(js|ts|tsx|mdx)$/), module);
