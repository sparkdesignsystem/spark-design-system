const getIcons = () => {
  const iconSymbols = Array.from(
    document.querySelectorAll('#sprk-icons symbol'),
  );
  return iconSymbols.map((iconSymbol) => iconSymbol.id);
}

const createIconExample = (name) => {
  const li = document.createElement('li');
  li.classList.add('sprk-o-Box');
  li.classList.add('sprk-o-Stack__item');

  const galleryItem = document.createElement('div');
  galleryItem.classList.add('sbdocs-gallery-container__item');

  const svgElem = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const useElem = document.createElementNS('http://www.w3.org/2000/svg', 'use');
  useElem.setAttributeNS(
    'http://www.w3.org/1999/xlink',
    'xlink:href',
    `#${name}`,
  );
  svgElem.appendChild(useElem);
  svgElem.classList.add('sprk-c-Icon');

  if (name.includes('small')) {
    svgElem.classList.add('sprk-c-Icon--s');
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
};

const attachIcons = (iconNames) => {
  const container = document.querySelector('.sbdocs-gallery-container');
  if (container) {
    container.innerHTML = '';
    iconNames.forEach((iconName) => {
      container.appendChild(createIconExample(iconName));
    });
  }
};

export { getIcons, createIconExample, attachIcons };
