/* global document describe before it */
import { expect } from 'chai';
import sinon from 'sinon';

const proxyquireStrict = require('proxyquire').noCallThru();

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
  const domSliderStub = {};

  domSliderStub.slideToggle = () => {};

  const {
    toggleAriaExpanded,
    handleToggleClick,
    bindToggleUIEvents,
  } = proxyquireStrict('../components/toggle', { 'dom-slider': domSliderStub });

  before(() => {
    container = document.createElement('div');
    container.setAttribute('data-sprk-toggle', 'container');

    containerAccordion = document.createElement('div');
    containerAccordion.setAttribute('data-sprk-toggle', 'container');

    trigger = document.createElement('a');
    trigger.setAttribute('data-sprk-toggle', 'trigger');
    trigger.textContent = 'My Toggle Link Text';
    trigger.classList.add('sprk-b-TypeBodyThree', 'sprk-b-Link', 'sprk-b-Link--standalone');

    triggerAccordion = document.createElement('a');
    triggerAccordion.setAttribute('data-sprk-toggle', 'trigger');
    triggerAccordion.setAttribute('data-sprk-toggle-type', 'accordion');
    triggerAccordion.textContent = 'My Toggle Accordion Link Text';
    triggerAccordion.classList.add(
      'sprk-b-TypeBodyThree',
      'sprk-b-Link',
      'sprk-b-Link--standalone',
    );

    content = document.createElement('div');
    content.setAttribute('data-sprk-toggle', 'content');
    content.textContent = 'This is the toggle content. It is a placeholder.';
    content.classList.add('sprk-b-TypeBodyFour', 'sprk-u-pts');

    contentAccordion = document.createElement('p');
    contentAccordion.setAttribute('data-sprk-toggle', 'content');
    contentAccordion.textContent = 'This is the toggle content. It is a placeholder.';
    contentAccordion.classList.add('sprk-b-TypeBodyTwo', 'sprk-c-Accordion__content');
    contentAccordion.style.display = 'none';

    icon = document.createElement('svg');
    icon.setAttribute('data-sprk-toggle', 'icon');

    iconAccordion = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
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
  });

  it('should toggle aria-expanded attribute', () => {
    toggleAriaExpanded(trigger);
    expect(trigger.hasAttribute('aria-expanded')).eql(true);
  });

  it('should toggle aria-expanded attribute to false', () => {
    toggleAriaExpanded(trigger); // Is true, makes it false
    toggleAriaExpanded(trigger); // Is false, makes it true
    expect(trigger.hasAttribute('aria-expanded')).eql(true);
  });

  it('should toggle accordion item open', () => {
    handleToggleClick(contentAccordion, iconAccordion, iconAccordionUseElement, triggerAccordion);
    expect(triggerAccordion.classList.contains('sprk-c-Accordion__summary--open')).eql(true);
    expect(iconAccordion.classList.contains('sprk-c-Icon--open').eql(true));
    expect(iconAccordionUseElement.getAttribute('xlink:href')).eql('#chevron-down-circle-filled');
  });

  it('should toggle accordion item closed', () => {
    handleToggleClick(contentAccordion, iconAccordion, iconAccordionUseElement, triggerAccordion);
    expect(triggerAccordion.classList.contains('sprk-c-Accordion__summary--open')).eql(true);
    expect(iconAccordion.classList.contains('sprk-c-Icon--open').eql(true));
    expect(iconAccordionUseElement.getAttribute('xlink:href')).eql('#chevron-down-circle');
  });

  it('should add listener to toggle trigger', () => {
    sinon.spy(trigger, 'addEventListener');
    bindToggleUIEvents(container);
    expect(trigger.addEventListener.getCall(0).args[0]).eql('click');
  });
});
