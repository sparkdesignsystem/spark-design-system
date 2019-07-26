import React from 'react';
import { load, addDecorator, addParameters } from '@storybook/react';
import { action } from "@storybook/addon-actions"
import '../../spark/manifests/spark/_spark.scss';
import { withA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';
import sparkTheme from "../../storybook-spark-theme";

addDecorator(withA11y);
addDecorator(withInfo);
addDecorator(story => <div className="sprk-o-Box">{story()}</div>)
// Option defaults.
addParameters({
  options: {
    theme: sparkTheme,
  },
  info: {
    inline: true,
    header: false,
    styles: {
      infoBody: {
        paddingRight: '0',
        paddingLeft: '0',
      },
      source: {
        h1: {
          fontSize: '1.25rem',
        },
      },
      propTableHead: {
        fontSize: '1rem',
      }
    },
  }
});

load(require.context('../../spark', true, /\/react\/.*\.stories\.(js)$/), module);
