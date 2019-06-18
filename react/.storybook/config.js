import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { action } from "@storybook/addon-actions"
import '../../spark/manifests/spark/_spark.scss';
import { withA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { themes } from '@storybook/theming';
import sparkTheme from "../storybook-spark-theme";

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
  },
});

// automatically import all files ending in *.stories.js
function loadStories() {
  const req = require.context("../../spark", true, /.stories.js$/);
  req.keys().forEach(filename => {
    if (filename.indexOf('react') >= 0) {
      req(filename);
    }
  });
}

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
configure(loadStories, module)