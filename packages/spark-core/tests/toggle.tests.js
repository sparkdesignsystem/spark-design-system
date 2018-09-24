/* global document describe before it window */
import { expect } from 'chai';
import sinon from 'sinon';

import {
  toggle,
  toggleContentCSS,
  toggleAccordionContentCSS,
  toggleIconCSS,
  toggleAccordionIconCSS,
  toggleAriaExpanded,
  handleToggleClick,
  bindToggleUIEvents,
} from '../components/toggle';

describe('Toggle tests', () => {
  let container;
  let trigger;
  let triggerAccordion;
  let content;
  let contentAccordion;
  let icon;
  let containerAccordion;
  let event;
  let iconAccordion;
  let iconAccordionUseElement;

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

    content = document.createElement('p');
    content.setAttribute('data-sprk-toggle', 'content');
    content.textContent = 'This is the toggle content. It is a placeholder.';
    content.classList.add('sprk-b-TypeBodyFour', 'sprk-u-pts');

    contentAccordion = document.createElement('p');
    contentAccordion.setAttribute('data-sprk-toggle', 'content');
    contentAccordion.textContent = 'This is the toggle content. It is a placeholder.';
    contentAccordion.classList.add('sprk-b-TypeBodyFour', 'sprk-u-pts');
    contentAccordion.style.height = '0px';

    icon = document.createElement('svg');
    icon.setAttribute('data-sprk-toggle', 'icon');

    iconAccordion = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    iconAccordion.classList.add('sprk-c-Icon');
    iconAccordion.setAttribute('data-sprk-toggle', 'icon');

    iconAccordionUseElement = document.createElement('use');
    iconAccordionUseElement.setAttribute('xlink:href', '#chevron-down-circle');
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

  it('should toggle CSS hide class', () => {
    toggleContentCSS(content);
    expect(content.classList.contains('sprk-u-HideWhenJs')).eql(true);
  });

  it('should toggle icon open class on accordion toggle triggers', () => {
    toggleAccordionIconCSS(iconAccordion, iconAccordionUseElement);
    expect(iconAccordionUseElement.getAttribute('xlink:href')).eql('#chevron-down-circle');

    handleToggleClick(content, trigger, icon, iconAccordionUseElement, triggerAccordion);

    expect(triggerAccordion.classList.contains('sprk-c-Accordion__summary--open')).eql(true);
    expect(trigger.classList.contains('sprk-c-Accordion__summary--open')).eql(false);

    if (iconAccordion.classList.contains('sprk-c-Icon--open')) {
      expect(iconAccordionUseElement.getAttribute('xlink:href')).eql('#chevron-down-circle-filled');
    }
  });

  it('should toggle the accordion content', () => {
    handleToggleClick(content, trigger, icon, iconAccordionUseElement, triggerAccordion);
    toggleAccordionContentCSS(contentAccordion, triggerAccordion);

    handleToggleClick(content, trigger, icon, iconAccordionUseElement, triggerAccordion);
    if (!contentAccordion.classList.contains('sprk-c-Accordion__details--open')) {
      expect(contentAccordion.style.height).eql('0px');
      expect(contentAccordion.classList.contains('sprk-c-Accordion__details--open')).eql(false);
    }
  });

  it('should toggle icon css class', () => {
    const isOpen = icon.classList.contains('sprk-c-Icon--open');
    if (!isOpen) {
      toggleIconCSS(icon);
    }
    expect(icon.classList.contains('sprk-c-Icon--open')).eql(true);
  });

  it('should add listener to toggle trigger', () => {
    sinon.spy(trigger, 'addEventListener');
    bindToggleUIEvents(container);
    expect(trigger.addEventListener.getCall(0).args[0]).eql('click');
  });

  it('should toggle element when clicked', () => {
    if (content.classList.contains('sprk-u-HideWhenJs')) {
      toggle();
      event = new window.Event('click');
      trigger.dispatchEvent(event);
      expect(content.classList.contains('sprk-u-HideWhenJs')).eql(false);
    } else {
      toggle();
      event = new window.Event('click');
      trigger.dispatchEvent(event);
      expect(content.classList.contains('sprk-u-HideWhenJs')).eql(true);
    }
  });
});
