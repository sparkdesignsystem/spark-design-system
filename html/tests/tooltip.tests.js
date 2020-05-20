/* global document beforeEach afterEach describe it window */
// const proxyquireStrict = require('proxyquire').noCallThru();

// when something tries to import dom-slider,
// return an empty object
// const mockDOMSliderStub = {};
// jest.mock('dom-slider', () => mockDOMSliderStub);

// when a test tries to access window.domSlider.slideToggle,
// return a Promise that resolves immediately so we can test
// the .then()
// const mockDOMSliderWindow = {
//   slideToggle : () => {
//     return new Promise((resolve) => { resolve() })
//   }
// };

// window.domSlider = mockDOMSliderWindow;

describe('Tooltip init', () => {
  const { tooltip } = require('../components/tooltip');

  afterEach(() => {
    document.querySelectorAll.restore();
  });

  it('should call getElements once with the correct selector', () => {
    sinon.spy(document, 'querySelectorAll');
    tooltip();
    expect(document.querySelectorAll
      .getCall(0).args[0]).toBe('[data-sprk-tooltip="container"]');
  });
});

describe('Tooltip tests', () => {
  let container;
  let trigger;
  let aside;

  // const {
  //   toggleIconType,
  //   toggleAriaExpanded,
  //   handleToggleClick,
  //   bindToggleUIEvents,
  // } = proxyquireStrict('../components/toggle', { 'dom-slider': mockDOMSliderStub });

  beforeEach(() => {
    container = document.createElement('span');
    container.setAttribute('data-sprk-tooltip', 'container');

    trigger = document.createElement('svg');
    trigger.setAttribute('data-sprk-tooltip', 'icon');
    trigger.setAttribute('aria-label', 'More information');
    trigger.setAttribute('aria-describedby', 'tooltip_content_1');
    trigger.classList.add('sprk-c-Icon');
    trigger.classList.add('sprk-c-Icon--filled');

    aside = document.createElement('aside');
    aside.setAttribute('data-sprk-tooltip', 'content');
    aside.setAttribute('aria-hidden', 'true');
    aside.setAttribute('id', 'tooltip_content_1');
    aside.classList.add('sprk-c-Tooltip');

    aside.innerHTML = "tooltip text"

    container.append(trigger);
    container.append(aside);

    document.body.appendChild(container);
  });

  it('should render', () => {
    console.log(document.body.innerHTML);
    // expect(trigger.classList.contains('focus-visible')).toBe(true);
  });
});
