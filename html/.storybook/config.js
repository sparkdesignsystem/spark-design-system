import React from 'react';
import '../_spark.scss';
import '../../storybook-utilities/storybook-theming/_docs.scss';
import { configure, addParameters, addDecorator } from '@storybook/html';
import { withA11y } from '@storybook/addon-a11y';
import sparkTheme from '../../storybook-utilities/storybook-theming/storybook-spark-theme';
import 'iframe-resizer/js/iframeResizer.contentWindow.min';
import '!style-loader!css-loader!sass-loader!../../storybook-utilities/storybook-theming/font-loader.scss';
import '../../storybook-utilities/icon-loader';
import { DocsContainer } from '@storybook/addon-docs/blocks';
import { SprkTable } from '@sparkdesignsystem/spark-react';

addDecorator(withA11y);

// Option defaults
addParameters({
  options: {
    theme: sparkTheme,
    showRoots: true,
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
    container: ({ children, context }) => (
      <DocsContainer context={context}>
        <div>
          {children}
          <h3 class="sprk-u-mbm">Class Modifiers for {/[^/]*$/.exec(context.kind)[0]}</h3>  
          <SprkTable
            additionalTableClasses="sprk-b-Table--spacing-medium"
            columns = {[
              {
                name: 'data1',
                header: 'Column Heading'
              },
              {
                name: 'data2',
                header: 'Column Heading'
              },
              {
                name: 'data3',
                header: 'Column Heading'
              }
            ]}
            rows = {[
              {
                data1: "Data 1",
                data2: "Data 2",
                data3: "Data 3"
              },
              {
                data1: "Data 1",
                data2: "Data 2",
                data3: "Data 3"
              },
              {
                data1: "Data 1",
                data2: "Data 2",
                data3: "Data 3"
              },
              {
                data1: "Data 1",
                data2: "Data 2",
                data3: "Data 3"
              },
            ]}
          />
        </div>
      </DocsContainer>
    ),
  },
});

configure(require.context('..', true, /^((?![\\/]node_modules|dist[\\/]).)*\.stories\.js$/), module);
