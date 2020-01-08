import { create } from '@storybook/theming';
import { getStorybookInstance } from '../getStorybookInstance';

const storybookInstance = getStorybookInstance();
let sparkLogo;

switch (storybookInstance) {
  case 'react':
    sparkLogo = 'https://spark-assets.netlify.com/spark-logo-black-text.svg';
    break;
  case 'angular':
    sparkLogo = 'https://spark-assets.netlify.com/spark-logo-black-text.svg';
    break;
  case 'html':
    sparkLogo = 'https://spark-assets.netlify.com/spark-logo-black-text.svg';
    break;
  default:
    sparkLogo = 'https://spark-assets.netlify.com/spark-logo-black-text.svg';
}

export default create({
  base: 'light',
  colorPrimary: 'rgb(51, 51, 51)',
  colorSecondary: 'rgb(51, 51, 51)',
  appBg: '#f3f3f3',
  appBorderColor: 'rgb(51, 51, 51)',
  appBorderRadius: 4,
  fontBase: '"urw-din", sans-serif',
  fontCode: 'monospace',
  barTextColor: 'rgb(51, 51, 51)',
  barSelectedColor: 'rgb(51, 51, 51)',
  // barBg: '#302e2e',
  inputBorderRadius: 4,
  brandTitle: 'Spark Design System',
  brandUrl: 'https://sparkdesignsystem.com',
  brandImage: sparkLogo,
});
