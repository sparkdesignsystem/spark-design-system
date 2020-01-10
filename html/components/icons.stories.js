import { useEffect } from '@storybook/client-api';
import '../utilities/polyfills/classListSVG';
import { getIcons, attachIcons } from '../../storybook-utilities/icon-utilities/icon-name-util';

export default {
  title: 'Components/Icons',
  decorators: [
    story => `<div class="sprk-o-Box">${story()}</div>`,
  ],
  parameters: {
    info: `
##### For design and usage information check out the [documentation.](https://spark-docs.netlify.com/using-spark/components/icons)
    `,
    docs: { iframeHeight: 90 },
  },
};

export const Default = () => (
  `
  <svg class="sprk-c-Icon  sprk-c-Icon--xl" viewBox="0 0 100 100">
    <use xlink:href="#access" />
  </svg>
  `
);

Default.story = {
  name: 'Default',
};

export const Gallery = () => {
  window.addEventListener('sprk-icons-loaded', () => {
    attachIcons(getIcons());
  });

  useEffect(() => {
    attachIcons(getIcons());
  }, []);

  return (
    '<ul class="sbdocs-gallery-container sprk-o-Stack sprk-o-Stack--split@xs"></ul>'
  );
};

Gallery.story = {
  name: 'Gallery',
  parameters: {
    docs: { iframeHeight: 1000 },
  },
};
