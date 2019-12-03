import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/angular';
import { withA11y } from '@storybook/addon-a11y';
import sparkTheme from "../../storybook-utilities/storybook-theming/storybook-spark-theme";
import '../src/polyfills';
import '!style-loader!css-loader!sass-loader!../../storybook-utilities/storybook-theming/font-loader.scss';
import '../../storybook-utilities/icon-loader';
import { setCompodocJson, extractProps } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';
import { DocsContainer } from '@storybook/addon-docs/blocks';
import { SprkTable } from '@sparkdesignsystem/spark-react';

setCompodocJson(docJson);
addDecorator(withA11y);
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
    extractProps,
  },
});

configure(require.context('../projects/spark-angular/src/lib', true, /\.stories\.(js|ts|tsx|mdx)$/), module);
