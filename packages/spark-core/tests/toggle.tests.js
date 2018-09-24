/* global document describe beforeEach afterEach it window */
import sinon from 'sinon';
import { expect } from 'chai';
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

describe('toggle tests', () => {
  let container;
  let containerAccordion;
  let iconAccordion;
  let trigger;
  let triggerAccordion;
  let content;
  let contentAccordion;
  let triggerIcon;
  let iconAccordionUseElement;

  beforeEach(() => {
    container = document.createElement('div');
    container.setAttribute('data-sprk-toggle', 'container');

    containerAccordion = document.createElement('div');
    containerAccordion.setAttribute('data-sprk-toggle', 'container');

    trigger = document.createElement('a');
    trigger.setAttribute('aria-expanded', 'false');
    trigger.setAttribute('data-sprk-toggle', 'trigger');

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

    triggerIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    triggerIcon.classList.add('sprk-c-Icon');
    triggerIcon.setAttribute('data-sprk-toggle', 'icon');

    iconAccordion = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    iconAccordion.classList.add('sprk-c-Icon');
    iconAccordion.setAttribute('data-sprk-toggle', 'icon');

    iconAccordionUseElement = document.createElement('use');
    iconAccordionUseElement.setAttribute('xlink:href', '#chevron-down-circle');
    iconAccordionUseElement.setAttribute('data-sprk-toggle', 'svgUse');

    triggerIcon.append(iconAccordionUseElement);
    sinon.spy(trigger, 'addEventListener');
    trigger.appendChild(triggerIcon);
    container.appendChild(trigger);
    container.appendChild(content);
    containerAccordion.append(triggerAccordion);
    containerAccordion.append(contentAccordion);
    document.body.appendChild(container);
  });
  afterEach(() => {
    trigger.addEventListener.restore();
  });
  it('should set up event handler on trigger', () => {
    toggle();
    expect(trigger.addEventListener.calledOnce).eql(true);
  });

  it('should remove the correct class', () => {
    content.classList.add('sprk-u-HideWhenJs');
    toggleContentCSS(content);
    expect(content.classList.contains('sprk-u-HideWhenJs')).eql(false);
  });

  it('should adjust aria-expanded appropriately', () => {
    toggleAriaExpanded(trigger);
    expect(trigger.getAttribute('aria-expanded')).eql('true');

    trigger.setAttribute('aria-expanded', 'true');
    toggleAriaExpanded(trigger);
    expect(trigger.getAttribute('aria-expanded')).eql('false');

    trigger.removeAttribute('aria-expanded');
    toggleAriaExpanded(trigger);
    expect(trigger.getAttribute('aria-expanded')).eql('false');
  });

  it('should toggle open class on accordion toggle triggers', () => {
    handleToggleClick(content, trigger, triggerIcon, iconAccordionUseElement, triggerAccordion);
    expect(triggerAccordion.classList.contains('sprk-c-Accordion__summary--open')).eql(true);
    expect(trigger.classList.contains('sprk-c-Accordion__summary--open')).eql(false);
  });

  it('should toggle icon css class', () => {
    const isOpen = triggerIcon.classList.contains('sprk-c-Icon--open');

    if (!isOpen) {
      toggleIconCSS(triggerIcon);
    }
    expect(triggerIcon.classList.contains('sprk-c-Icon--open')).eql(true);
  });

  it('should toggle accordion icon attributes', () => {
    toggleAccordionIconCSS(iconAccordion, iconAccordionUseElement);
    expect(iconAccordionUseElement.getAttribute('xlink:href')).eql('#chevron-down-circle');

    handleToggleClick(content, trigger, iconAccordion, iconAccordionUseElement, triggerAccordion);

    if (iconAccordion.classList.contains('sprk-c-Icon--open')) {
      expect(iconAccordionUseElement.getAttribute('xlink:href')).eql('#chevron-down-circle-filled');
    }
  });

  it('should toggle the accordion content', () => {
    handleToggleClick(content, trigger, triggerIcon, iconAccordionUseElement, triggerAccordion);
    toggleAccordionContentCSS(contentAccordion, triggerAccordion);

    handleToggleClick(content, trigger, triggerIcon, iconAccordionUseElement, triggerAccordion);
    if (!contentAccordion.classList.contains('sprk-c-Accordion__details--open')) {
      expect(contentAccordion.style.height).eql('0px');
      expect(contentAccordion.classList.contains('sprk-c-Accordion__details--open')).eql(false);
    }
  });

  it('bindToggleUIEvents', () => {
    bindToggleUIEvents(container);
    expect(trigger.getAttribute('aria-expanded')).eql('true');
    trigger.dispatchEvent(new window.Event('click'));
    expect(triggerIcon.classList.contains('sprk-c-Icon--open')).eql(true);
  });
});
