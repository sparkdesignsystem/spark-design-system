import React from 'react';
import { addDecorator } from '@storybook/angular';
import '../src/polyfills';
import { withTests } from '@storybook/addon-jest';
import results from '../src/.jest-test-results.json';
import '!style-loader!css-loader!sass-loader!../../storybook-utilities/storybook-theming/font-loader.scss';
import '../../storybook-utilities/icon-utilities/icon-loader';
import { setCompodocJson, extractProps } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';
import { DocsContainer } from '@storybook/addon-docs';
import SprkTable from '../../react/src/base/tables/SprkTable';
import { configClassModifierJsonProcessor } from '../../storybook-utilities/configClassModifierJsonProcessor';
import AdditionalInputInfo from '../../storybook-utilities/components/AdditionalInputInfo';
import sparkTheme from '../../storybook-utilities/storybook-theming/storybook-spark-theme';

const classModifierJSON = require('../../src/data/sass-modifiers.json');

setCompodocJson(docJson);
addDecorator(
  withTests({
    filesExt: '.spec.ts',
    results,
  }),
);

export const parameters = {
  a11y: {
    element: '#root',
    config: {},
    options: {},
    manual: false,
  },
  viewMode: 'docs',
  previewTabs: { 'storybook/docs/panel': { index: -1 } },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, { numeric: true }),
  },
  docs: {
    source: {
      type: 'code',
    },
    inlineStories: true,
    theme: sparkTheme,
    container: ({ children, context }) => {
      const componentName = context.kind.split('/')[1];
      const isInputStory = componentName === 'Input';
      const processedJson = configClassModifierJsonProcessor(
        classModifierJSON,
        componentName,
      );
      if (processedJson) {
        return (
          <DocsContainer context={context}>
            <div>
              {children}

              {isInputStory && (
                <AdditionalInputInfo
                  additionalHeaderClasses="sprk-u-mbm"
                  additionalListClasses="sprk-u-mbm"
                />
              )}

              <h4 className="sprk-u-mbm" id="class-modifiers">
                Class Modifiers for {componentName}
              </h4>
              <SprkTable
                additionalTableClasses="sprk-b-Table--spacing-medium sprk-b-Table--secondary sprk-b-Table--striped"
                columns={[
                  {
                    name: 'selector',
                    header: 'Class',
                  },
                  {
                    name: 'description',
                    header: 'Description',
                  },
                ]}
                rows={processedJson}
              />
            </div>
          </DocsContainer>
        );
      } else {
        return (
          <DocsContainer context={context}>
            <div>
              {children}

              {isInputStory && (
                <AdditionalInputInfo
                  additionalHeaderClasses="sprk-u-mbm"
                  additionalListClasses="sprk-u-mbm"
                />
              )}
            </div>
          </DocsContainer>
        );
      }
    },
    extractProps,
  },
};

// TODO: Watch this issue for an update for bug fix
// that prevents first load going to doc page
// https://github.com/storybookjs/storybook/issues/13128
