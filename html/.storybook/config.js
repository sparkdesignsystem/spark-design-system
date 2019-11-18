import '../_spark.scss';
import '../../storybook-theming/_docs.scss';
import { configure, addParameters, addDecorator } from '@storybook/html';
import { withA11y } from '@storybook/addon-a11y';
import sparkTheme from '../../storybook-theming/storybook-spark-theme';
import 'iframe-resizer/js/iframeResizer.contentWindow.min';
import '!style-loader!css-loader!sass-loader!../../storybook-theming/font-loader.scss';
import '../../storybook-theming/icon-loader';

addDecorator(withA11y);

// Option defaults
addParameters({
  options: {
    theme: sparkTheme,
    showRoots: true,
    storySort: function(a, b) {
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, { numeric: true })},
  },
});

addParameters({
  docs: {
    extractComponentDescription: function(component, { info }) {
      if (info) {
        return typeof info === 'string' ? info : info.markdown || info.text;
      }
      return null;
    },
  },
});

configure(require.context('..', true, /^((?![\\/]node_modules|dist[\\/]).)*\.stories\.js$/), module);

