/* global document describe before it */
import { expect } from 'chai';
import {
  toggleAriaExpanded,
  toggleContentCSS,
  toggleIconCSS,
  handleToggleClick,
} from '../components/toggle';

describe('Toggle tests', () => {
  let container;
  let trigger;
  let triggerAccordion;
  let content;
  let icon;
  let containerAccordion;

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

    icon = document.createElement('svg');
    icon.setAttribute('data-sprk-toggle', 'icon');

    trigger.appendChild(icon);
    container.appendChild(trigger);
    container.appendChild(content);

    triggerAccordion.appendChild(icon);
    containerAccordion.appendChild(triggerAccordion);
    containerAccordion.appendChild(content);
  });

  it('should toggle aria-expanded attribute', () => {
    toggleAriaExpanded(trigger);
    expect(trigger.hasAttribute('aria-expanded')).eql(true);
  });
  it('should toggle CSS hide class', () => {
    toggleContentCSS(content);
    expect(content.classList.contains('sprk-u-HideWhenJs')).eql(true);
  });
  it('should toggle open class on accordion toggle triggers', () => {
    handleToggleClick(content, icon, triggerAccordion);
    expect(triggerAccordion.classList.contains('sprk-c-Accordion__summary--open')).eql(true);
    expect(trigger.classList.contains('sprk-c-Accordion__summary--open')).eql(false);
  });
  it('should toggle icon css class', () => {
    const isOpen = icon.classList.contains('sprk-c-Icon--open');
    if (!isOpen) {
      toggleIconCSS(icon);
    }
    expect(icon.classList.contains('sprk-c-Icon--open')).eql(true);
  });
});
