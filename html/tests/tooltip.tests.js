/* global document beforeEach describe it window sinon */
describe('Tooltip tests', () => {
  const tooltip = require('../components/tooltip');
  let container;
  let trigger;
  let tooltipElement;

  beforeEach(() => {
    container = document.createElement('span');
    container.setAttribute('data-sprk-tooltip', 'container');
    container.classList.add('sprk-c-Tooltip__container');

    trigger = document.createElement('button');
    trigger.setAttribute('data-sprk-tooltip', 'trigger');
    trigger.setAttribute('aria-labelledby', 'tooltip_1');

    tooltipElement = document.createElement('span');
    tooltipElement.setAttribute('data-sprk-tooltip', 'content');
    tooltipElement.classList.add('sprk-c-Tooltip');
    tooltipElement.setAttribute('aria-hidden', 'true');
    tooltipElement.setAttribute('id', 'tooltip_content_1');
    tooltipElement.setAttribute('role', 'tooltip');

    tooltipElement.innerHTML = 'tooltip text';

    container.append(trigger);
    container.append(tooltipElement);

    document.body.appendChild(container);
  });

  it('should call getElements once with the correct selector', () => {
    sinon.spy(document, 'querySelectorAll');
    tooltip.tooltip();
    expect(document.querySelectorAll.getCall(0).args[0]).toBe(
      '[data-sprk-tooltip="container"]',
    );

    document.querySelectorAll.restore();
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
      tooltip.showTooltip(trigger, tooltipElement, true);
      expect(trigger.getAttribute('aria-expanded')).toBe('true');
      expect(trigger.classList.contains('sprk-c-Tooltip--toggled')).toBe(true);
    });

    it('should not set toggled class when not sticking open', () => {
      expect(trigger.classList.contains('sprk-c-Tooltip--toggled')).toBe(false);
      expect(trigger.getAttribute('aria-expanded')).toBe('false');
      tooltip.showTooltip(trigger, tooltipElement, false);
      expect(trigger.getAttribute('aria-expanded')).toBe('true');
      expect(trigger.classList.contains('sprk-c-Tooltip--toggled')).toBe(false);
    });

    it('should hide correctly', () => {
      tooltip.showTooltip(trigger, tooltipElement, true);
      expect(trigger.getAttribute('aria-expanded')).toBe('true');
      expect(trigger.classList.contains('sprk-c-Tooltip--toggled')).toBe(true);
      tooltip.hideTooltip(trigger, tooltipElement);
      expect(trigger.getAttribute('aria-expanded')).toBe('false');
      expect(trigger.classList.contains('sprk-c-Tooltip--toggled')).toBe(false);
    });

    it('should hide the tooltip when toggling', () => {
      tooltip.showTooltip(trigger, tooltipElement, true);
      tooltip.toggleTooltip(trigger, tooltipElement);

      expect(trigger.getAttribute('aria-expanded')).toBe('false');
      expect(trigger.classList.contains('sprk-c-Tooltip--toggled')).toBe(false);
    });

    it('should show the tooltip when toggling', () => {
      tooltip.toggleTooltip(trigger, tooltipElement);
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
      tooltip.toggleTooltip(trigger, tooltipElement);
      expect(trigger.classList.contains('sprk-c-Tooltip--toggled')).toBe(true);
      const event = new window.Event('keydown');
      event.keyCode = 27;
      document.dispatchEvent(event);
      expect(trigger.classList.contains('sprk-c-Tooltip--toggled')).toBe(false);
    });

    it('should hide on document click', () => {
      tooltip.toggleTooltip(trigger, tooltipElement);
      expect(trigger.classList.contains('sprk-c-Tooltip--toggled')).toBe(true);
      document.dispatchEvent(new window.Event('click'));
      expect(trigger.classList.contains('sprk-c-Tooltip--toggled')).toBe(false);
    });

    it('should add the top left positioning class', () => {
      Object.defineProperty(document.documentElement, 'clientWidth', {
        value: 100,
      });
      Object.defineProperty(document.documentElement, 'clientHeight', {
        value: 100,
      });

      trigger.getBoundingClientRect = () => {
        return { top: 75, left: 75 };
      };

      trigger.click();
      expect(
        tooltipElement.classList.contains('sprk-c-Tooltip--top-left'),
      ).toBe(true);
    });

    it('should add the top right positioning class', () => {
      Object.defineProperty(document.documentElement, 'clientWidth', {
        value: 100,
      });
      Object.defineProperty(document.documentElement, 'clientHeight', {
        value: 100,
      });

      trigger.getBoundingClientRect = () => {
        return { top: 75, left: 25 };
      };

      trigger.click();
      expect(
        tooltipElement.classList.contains('sprk-c-Tooltip--top-right'),
      ).toBe(true);
    });

    it('should add the bottom left positioning class', () => {
      Object.defineProperty(document.documentElement, 'clientWidth', {
        value: 100,
      });
      Object.defineProperty(document.documentElement, 'clientHeight', {
        value: 100,
      });

      trigger.getBoundingClientRect = () => {
        return { top: 25, left: 75 };
      };

      trigger.click();
      expect(
        tooltipElement.classList.contains('sprk-c-Tooltip--bottom-left'),
      ).toBe(true);
    });

    it('should add the bottom right positioning class', () => {
      Object.defineProperty(document.documentElement, 'clientWidth', {
        value: 100,
      });
      Object.defineProperty(document.documentElement, 'clientHeight', {
        value: 100,
      });

      trigger.getBoundingClientRect = () => {
        return { top: 25, left: 25 };
      };

      trigger.click();
      expect(
        tooltipElement.classList.contains('sprk-c-Tooltip--bottom-right'),
      ).toBe(true);
    });

    it('should add positioning class on hover', () => {
      Object.defineProperty(document.documentElement, 'clientWidth', {
        value: 100,
      });
      Object.defineProperty(document.documentElement, 'clientHeight', {
        value: 100,
      });

      trigger.getBoundingClientRect = () => {
        return { top: 75, left: 75 };
      };

      const event = new window.Event('mouseover');
      trigger.dispatchEvent(event);

      expect(
        tooltipElement.classList.contains('sprk-c-Tooltip--top-left'),
      ).toBe(true);
    });

    it('should add positioning class on focus', () => {
      Object.defineProperty(document.documentElement, 'clientWidth', {
        value: 100,
      });
      Object.defineProperty(document.documentElement, 'clientHeight', {
        value: 100,
      });

      trigger.getBoundingClientRect = () => {
        return { top: 75, left: 75 };
      };

      const event = new window.Event('focus');
      trigger.dispatchEvent(event);

      expect(
        tooltipElement.classList.contains('sprk-c-Tooltip--top-left'),
      ).toBe(true);
    });
  });
});
