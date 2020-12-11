/* global document beforeEach afterEach describe it window sinon */
const proxyquireStrict = require('proxyquire').noCallThru();

// when something tries to import dom-slider,
// return an empty object
const mockDOMSliderStub = {};
jest.mock('dom-slider', () => mockDOMSliderStub);

// when a test tries to access window.domSlider.slideToggle,
// return a Promise that resolves immediately so we can test
// the .then()
const mockDOMSliderWindow = {
  slideToggle: () => {
    return new Promise((resolve) => {
      resolve();
    });
  },
};

window.domSlider = mockDOMSliderWindow;

describe('Toggle init', () => {
  const { toggle } = require('../components/toggle');

  afterEach(() => {
    document.querySelectorAll.restore();
  });

  it('should call getElements once with the correct selector', () => {
    sinon.spy(document, 'querySelectorAll');
    toggle();
    expect(document.querySelectorAll.getCall(0).args[0]).toBe(
      '[data-sprk-toggle="container"]',
    );
  });
});

describe('Toggle tests', () => {
  let container;
  let trigger;
  let triggerAccordion;
  let content;
  let contentAccordion;
  let icon;
  let containerAccordion;
  let iconAccordion;
  let iconAccordionUseElement;

  const {
    toggleIconType,
    toggleAriaExpanded,
    handleToggleClick,
    bindToggleUIEvents,
  } = proxyquireStrict('../components/toggle', {
    'dom-slider': mockDOMSliderStub,
  });

  beforeEach(() => {
    container = document.createElement('div');
    container.setAttribute('data-sprk-toggle', 'container');

    containerAccordion = document.createElement('li');
    containerAccordion.setAttribute('data-sprk-toggle', 'container');
    containerAccordion.classList.add('sprk-c-Accordion__item');

    trigger = document.createElement('button');
    trigger.setAttribute('data-sprk-toggle', 'trigger');
    trigger.setAttribute('aria-expanded', 'false');
    trigger.setAttribute('aria-controls', 'toggle-1');
    trigger.textContent = 'My Toggle Link Text';
    trigger.classList.add('sprk-c-Toggle__trigger');

    triggerAccordion = document.createElement('a');
    triggerAccordion.setAttribute('data-sprk-toggle', 'trigger');
    triggerAccordion.setAttribute('data-sprk-toggle-type', 'accordion');
    triggerAccordion.setAttribute('aria-expanded', 'false');
    triggerAccordion.textContent = 'My Toggle Accordion Link Text';
    triggerAccordion.classList.add(
      'sprk-b-TypeBodyThree',
      'sprk-b-Link',
      'sprk-b-Link--simple',
    );

    content = document.createElement('div');
    content.setAttribute('data-sprk-toggle', 'content');
    content.setAttribute('id', 'toggle-1');
    content.textContent = 'This is the toggle content..';
    content.classList.add('sprk-b-TypeBodyFour', 'sprk-u-pts');
    content.slideToggle = () =>
      new Promise((resolve) => {
        resolve();
      });

    contentAccordion = document.createElement('p');
    contentAccordion.setAttribute('data-sprk-toggle', 'content');
    contentAccordion.textContent = 'This is the toggle accordion content.';
    contentAccordion.classList.add(
      'sprk-b-TypeBodyTwo',
      'sprk-c-Accordion__content',
    );
    contentAccordion.style.display = 'none';
    contentAccordion.slideToggle = () =>
      new Promise((resolve) => {
        resolve();
      });

    icon = document.createElement('svg');
    icon.setAttribute('data-sprk-toggle', 'icon');

    iconAccordion = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'svg',
    );
    iconAccordion.classList.add('sprk-c-Icon');
    iconAccordion.setAttribute('data-sprk-toggle', 'icon');

    iconAccordionUseElement = document.createElement('use');
    iconAccordionUseElement.setAttribute('xlink:href', '#chevron-down');
    iconAccordionUseElement.setAttribute('data-sprk-toggle', 'svgUse');
    iconAccordion.appendChild(iconAccordionUseElement);

    trigger.append(icon);
    container.append(trigger);
    container.append(content);

    triggerAccordion.append(iconAccordion);
    containerAccordion.append(triggerAccordion);
    containerAccordion.append(contentAccordion);
    document.body.appendChild(container);
  });

  it('should apply focus-visible class to trigger when focused', () => {
    trigger.focus();
    expect(trigger.classList.contains('focus-visible')).toBe(true);
  });

  it('should not apply focus-visible class to trigger when clicked', () => {
    trigger.click();
    expect(trigger.classList.contains('focus-visible')).toBe(false);
  });

  it('should toggle aria-expanded attribute for toggles', () => {
    toggleAriaExpanded(trigger);
    expect(trigger.hasAttribute('aria-expanded')).toBe(true);
  });

  it(
    'should add aria-expanded attribute set to false if not found on' +
      ' trigger',
    () => {
      triggerAccordion.removeAttribute('aria-expanded');
      toggleAriaExpanded(triggerAccordion);
      expect(triggerAccordion.getAttribute('aria-expanded')).toBe('false');
    },
  );

  it('should toggle aria-expanded attribute to false', () => {
    toggleAriaExpanded(trigger); // Is true, makes it false
    toggleAriaExpanded(trigger); // Is false, makes it true
    expect(trigger.hasAttribute('aria-expanded')).toBe(true);
  });

  it('should toggle accordion item open', () => {
    handleToggleClick(
      contentAccordion,
      iconAccordion,
      iconAccordionUseElement,
      triggerAccordion,
    );
    expect(
      containerAccordion.classList.contains('sprk-c-Accordion__item--open'),
    ).toBe(true);
    expect(iconAccordionUseElement.getAttribute('xlink:href')).toBe(
      '#chevron-up-circle',
    );
  });

  it('should toggle accordion open', () => {
    triggerAccordion.setAttribute(
      'data-sprk-toggle-type',
      'masthead-accordion',
    );
    handleToggleClick(
      contentAccordion,
      iconAccordion,
      iconAccordionUseElement,
      triggerAccordion,
    );
    expect(
      containerAccordion.classList.contains(
        'sprk-c-MastheadAccordion__item--open',
      ),
    ).toBe(true);
    expect(iconAccordionUseElement.getAttribute('xlink:href')).toBe(
      '#chevron-up-circle',
    );
  });

  it('should toggle accordion icon open', () => {
    toggleIconType(
      iconAccordion,
      iconAccordionUseElement,
      'chevron-up-circle',
      'chevron-down-circle',
    );
    expect(iconAccordionUseElement.getAttribute('xlink:href')).toBe(
      '#chevron-down-circle',
    );
  });

  it('should add listener to toggle trigger', () => {
    sinon.spy(trigger, 'addEventListener');
    bindToggleUIEvents(container);
    expect(trigger.addEventListener.getCall(0).args[0]).toBe('click');
  });

  it('should add listener to Accordion toggle trigger', () => {
    sinon.spy(triggerAccordion, 'addEventListener');
    bindToggleUIEvents(containerAccordion);
    expect(triggerAccordion.addEventListener.getCall(0).args[0]).toBe('click');
  });

  it('should show details when clicked', () => {
    bindToggleUIEvents(containerAccordion);
    const event = new window.Event('click');
    triggerAccordion.dispatchEvent(event);
    expect(
      containerAccordion.classList.contains('sprk-c-Accordion__item--open'),
    ).toBe(true);
  });

  it('should disable clicks until after slide toggle animation runs', () => {
    bindToggleUIEvents(container);
    trigger.dispatchEvent(new window.Event('click'));
    expect(trigger.style.pointerEvents).toBe('none');
  });

  it('should enable clicks after slide toggle animation runs', (cb) => {
    bindToggleUIEvents(container);
    const event = new window.Event('click');
    trigger.dispatchEvent(event);
    trigger.dispatchEvent(event);
    setTimeout(() => {
      expect(trigger.style.pointerEvents).toBe('auto');
      cb();
    }, 100);
  });

  it('should still toggle content if icon is not present', () => {
    handleToggleClick(contentAccordion, null, null, triggerAccordion);
    expect(
      containerAccordion.classList.contains('sprk-c-Accordion__item--open'),
    ).toBe(true);
  });

  it(`should not add Accordion__item class 
      if toggle is not an accordion`, () => {
    handleToggleClick(content, null, null, trigger);
    expect(container.classList.contains('sprk-c-Accordion__item--open')).toBe(
      false,
    );
  });
});
