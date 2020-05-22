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

describe('Tooltip tests', () => {
  // const {
  //   tooltip,
  //   bindTooltipUIEvents,
  //   showTooltip,
  //   hideTooltip,
  //   toggleTooltip
  // } = require('../components/tooltip');
  const tooltip = require('../components/tooltip');
  let container;
  let trigger;
  let tooltip_element;

  beforeEach(() => {
    container = document.createElement('span');
    container.setAttribute('data-sprk-tooltip', 'container');
    container.classList.add('sprk-c-Tooltip__container');

    trigger = document.createElement('svg');
    trigger.setAttribute('data-sprk-tooltip', 'trigger');
    trigger.classList.add('sprk-c-Icon');
    trigger.classList.add('sprk-c-Icon--filled');
    trigger.setAttribute('aria-labelledby', 'tooltip_1');
    trigger.setAttribute('tabIndex', '0');

    tooltip_element = document.createElement('span');
    tooltip_element.setAttribute('data-sprk-tooltip', 'content');
    tooltip_element.classList.add('sprk-c-Tooltip');
    tooltip_element.setAttribute('aria-hidden', 'true');
    tooltip_element.setAttribute('id', 'tooltip_content_1');
    tooltip_element.setAttribute('role', 'tooltip');

    tooltip_element.innerHTML = 'tooltip text';

    container.append(trigger);
    container.append(tooltip_element);

    document.body.appendChild(container);
  });

  afterEach(() => {
    // document.querySelectorAll.restore();
  });

  it('should call getElements once with the correct selector', () => {
    sinon.spy(document, 'querySelectorAll');
    tooltip.tooltip();
    expect(document.querySelectorAll
      .getCall(0).args[0]).toBe('[data-sprk-tooltip="container"]');

    document.querySelectorAll.restore();
  });

  it('should add button role', () => {
    expect(trigger.getAttribute('aria-role')).toBe(null);
    tooltip.tooltip();
    expect(trigger.getAttribute('aria-role')).toBe('button');
  });

  it('should add aria expanded', () => {
    expect(trigger.getAttribute('aria-expanded')).toBe(null);
    tooltip.tooltip();
    expect(trigger.getAttribute('aria-expanded')).toBe('false');
  });

  describe('Tooltip behavior', () => {

    beforeEach(() => {
      tooltip.tooltip();
    });

    it('should set toggled class when sticking open', () => {
      expect(trigger.classList.contains('sprk-c-Tooltip--toggled')).toBe(false);
      expect(trigger.getAttribute('aria-expanded')).toBe('false');
      tooltip.showTooltip(trigger, true);
      expect(trigger.getAttribute('aria-expanded')).toBe('true');
      expect(trigger.classList.contains('sprk-c-Tooltip--toggled')).toBe(true);
    });

    it('should not set toggled class when not sticking open', () => {
      expect(trigger.classList.contains('sprk-c-Tooltip--toggled')).toBe(false);
      expect(trigger.getAttribute('aria-expanded')).toBe('false');
      tooltip.showTooltip(trigger, false);
      expect(trigger.getAttribute('aria-expanded')).toBe('true');
      expect(trigger.classList.contains('sprk-c-Tooltip--toggled')).toBe(false);
    });

    it('should hide correctly', () => {
      tooltip.showTooltip(trigger, true);
      expect(trigger.getAttribute('aria-expanded')).toBe('true');
      expect(trigger.classList.contains('sprk-c-Tooltip--toggled')).toBe(true);
      tooltip.hideTooltip(trigger);
      expect(trigger.getAttribute('aria-expanded')).toBe('false');
      expect(trigger.classList.contains('sprk-c-Tooltip--toggled')).toBe(false);
    });

    it('should hide the tooltip when toggling', () => {
      tooltip.showTooltip(trigger, true);
      tooltip.toggleTooltip(trigger);

      expect(trigger.getAttribute('aria-expanded')).toBe('false');
      expect(trigger.classList.contains('sprk-c-Tooltip--toggled')).toBe(false);
    });

    it('should show the tooltip when toggling', () => {
      tooltip.toggleTooltip(trigger);
      expect(trigger.getAttribute('aria-expanded')).toBe('true');
      expect(trigger.classList.contains('sprk-c-Tooltip--toggled')).toBe(true);
    });

    it('should toggle on click', () => {
      expect(trigger.classList.contains('sprk-c-Tooltip--toggled')).toBe(false);
      trigger.click();
      expect(trigger.classList.contains('sprk-c-Tooltip--toggled')).toBe(true);
    });

    it('should not toggle on Space outside the component', () => {
      expect(trigger.classList.contains('sprk-c-Tooltip--toggled')).toBe(false);

      // Remove focus from any focused element
      if (document.activeElement) {
        document.activeElement.blur();
      }

      const event = new window.Event('keydown');
      event.keyCode = 32;
      document.dispatchEvent(event);
      expect(trigger.classList.contains('sprk-c-Tooltip--toggled')).toBe(false);
    });

    it('should not toggle on Enter outside the component', () => {
      expect(trigger.classList.contains('sprk-c-Tooltip--toggled')).toBe(false);

      // Remove focus from any focused element
      if (document.activeElement) {
        document.activeElement.blur();
      }

      const event = new window.Event('keydown');
      event.keyCode = 13;
      document.dispatchEvent(event);
      expect(trigger.classList.contains('sprk-c-Tooltip--toggled')).toBe(false);
    });

    it('should toggle on Space', () => {
      expect(trigger.classList.contains('sprk-c-Tooltip--toggled')).toBe(false);
      const event = new window.Event('keydown');
      event.keyCode = 32;
      trigger.dispatchEvent(event);
      expect(trigger.classList.contains('sprk-c-Tooltip--toggled')).toBe(true);
    });

    it('should toggle on Enter', () => {
      expect(trigger.classList.contains('sprk-c-Tooltip--toggled')).toBe(false);
      const event = new window.Event('keydown');
      event.keyCode = 13;
      trigger.dispatchEvent(event);
      expect(trigger.classList.contains('sprk-c-Tooltip--toggled')).toBe(true);
    });

    it('should hide on Escape', () => {
      tooltip.toggleTooltip(trigger);
      expect(trigger.classList.contains('sprk-c-Tooltip--toggled')).toBe(true);
      const event = new window.Event('keydown');
      event.keyCode = 27;
      document.dispatchEvent(event);
      expect(trigger.classList.contains('sprk-c-Tooltip--toggled')).toBe(false);
    });

    it('should hide on document click', () => {
      tooltip.toggleTooltip(trigger);
      expect(trigger.classList.contains('sprk-c-Tooltip--toggled')).toBe(true);
      document.dispatchEvent(new window.Event('click'));
      expect(trigger.classList.contains('sprk-c-Tooltip--toggled')).toBe(false);
    })
  })
});
