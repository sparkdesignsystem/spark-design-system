import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import '../../spark/manifests/spark/_spark.scss';
import { withA11y } from '@storybook/addon-a11y';
import sparkTheme from "../../storybook-spark-theme";

addDecorator(withA11y);
addDecorator(story => <div className="sprk-o-Box">{story()}</div>)
// Option defaults.
addParameters({
  options: {
    theme: sparkTheme,
  },
});

configure(require.context('../src', true, /\.stories\.(js|ts|tsx|mdx)$/), module);
