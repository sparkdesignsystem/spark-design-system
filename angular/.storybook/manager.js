import { addons } from '@storybook/addons';
import sparkTheme from '../../storybook-utilities/storybook-theming/storybook-spark-theme';

addons.setConfig({
  sidebar: {
    showRoots: true,
  },
  theme: sparkTheme,
});

window.STORYBOOK_GA_ID = 'UA-113915182-1';
window.STORYBOOK_REACT_GA_OPTIONS = {};
