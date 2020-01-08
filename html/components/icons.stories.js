import { useEffect } from '@storybook/client-api';
import '../utilities/polyfills/classListSVG';

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

function getIcons() {
  const iconSymbols = Array
    .from(document.querySelectorAll('#sprk-icons symbol'));
  return iconSymbols.map(iconSymbol => iconSymbol.id);
}

function createIconExample(name) {
  const li = document.createElement('li');
  li.classList.add('sprk-o-Box');
  li.classList.add('sprk-o-Stack__item');

  const galleryItem = document.createElement('div');
  galleryItem.classList.add('sbdocs-gallery-container__item');

  const svgElem = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const useElem = document.createElementNS('http://www.w3.org/2000/svg', 'use');
  useElem.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `#${name}`);
  svgElem.appendChild(useElem);
  svgElem.classList.add('sprk-c-Icon');

  if (!name.includes('small')) {
    svgElem.classList.add('sprk-c-Icon--xl');
  }

  if (name.includes('filled')) {
    svgElem.classList.add('sprk-c-Icon--filled');
  }

  galleryItem.appendChild(svgElem);

  const p = document.createElement('p');
  p.textContent = name;

  galleryItem.appendChild(p);

  li.appendChild(galleryItem);
  return li;
}

function attachIcons(iconNames) {
  const container = document.querySelector('.sbdocs-gallery-container');
  container.innerHTML = '';
  iconNames.forEach((iconName) => {
    container.appendChild(createIconExample(iconName));
  });
}

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
