import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/angular';
import { withA11y } from '@storybook/addon-a11y';
import sparkTheme from "../../storybook-utilities/storybook-theming/storybook-spark-theme";
import '../src/polyfills';
import '!style-loader!css-loader!sass-loader!../../storybook-utilities/storybook-theming/font-loader.scss';
import '../../storybook-utilities/icon-utilities/icon-loader';
import { setCompodocJson, extractProps } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';
import { DocsContainer } from '@storybook/addon-docs/blocks';
import SprkTable from '../../react/src/base/tables/SprkTable';
import { configClassModifierJsonProcessor } from '../../storybook-utilities/configClassModifierJsonProcessor';
import AdditionalInputInfo from '../../storybook-utilities/components/AdditionalInputInfo';

const classModifierJSON = require('../../src/data/sass-modifiers.json');

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
    container: ({ children, context }) => {
      const componentName = context.kind.split('/')[1];
      const isInputStory = (componentName === 'Input');
      const processedJson = configClassModifierJsonProcessor(classModifierJSON, componentName);
      if (processedJson) {
        return (
          <DocsContainer context={context}>
            <div>
              {children}

              {isInputStory &&
                <AdditionalInputInfo />
              }

              <h4 className="sprk-u-mbm">Class Modifiers for {componentName}</h4>
              <SprkTable
                additionalTableClasses="sprk-b-Table--spacing-medium sprk-b-Table--secondary sprk-b-Table--striped"
                columns = {[
                  {
                    name: 'selector',
                    header: 'Class'
                  },
                  {
                    name: 'description',
                    header: 'Description'
                  },
                ]}
                rows = {processedJson}
              />
            </div>
          </DocsContainer>
        )
      } else {
        return (
          <DocsContainer context={context}>
            <div>
              {children}

              {isInputStory &&
                <AdditionalInputInfo />
              }
            </div>
          </DocsContainer>
        )
      }
    },
    extractProps,
  },
});

configure(require.context('../projects/spark-angular/src/lib', true, /\.stories\.(js|ts|tsx|mdx)$/), module);
