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

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to
// prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}
// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = ""
// This is to utilized to override the window.___navigate
// method Gatsby defines and uses to report what path a
// Link would be taking us to if it wasn't inside a storybook
window.___navigate = pathname => {
  action("NavigateTo:")(pathname)
}

load(require.context('../../spark', true, /\/react\/.*\.stories.js$/), module);
// load(require.context('../../spark', true, /\/react\/.*\.stories.mdx$/), module);