import getElements from '../../../../packages/spark-core/utilities/getElements';

const hideAllSections = (values) => {
  values.forEach((value) => {
    getElements(`[data-${value}-documentation]`, (section) => {
      section.classList.add('drizzle-u-Display--none');
    });
  });
};

const showSections = (values) => {
  values.forEach((value) => {
    getElements(`[data-${value}-documentation]`, (section) => {
      section.classList.remove('drizzle-u-Display--none');
    });
  });
};

const bindUIEvents = (element) => {
  const values = [];
  element.querySelectorAll('input').forEach((rdio) => {
    values.push(rdio.value);
  });
  element.addEventListener('change', (e) => {
    hideAllSections(values);
    showSections([`${e.target.value}`]);
  });
};

const codeExampleSwitch = () => {
  getElements('[data-code-example-switch]', bindUIEvents);
};

export { codeExampleSwitch, bindUIEvents, hideAllSections, showSections };
