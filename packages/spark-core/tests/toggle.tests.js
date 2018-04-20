/* global document describe before it */
import { expect } from 'chai';
import { toggleAriaExpanded, toggleContentCSS } from '../components/toggle';

describe('Toggle tests', () => {
  let container;
  let trigger;
  let content;
  let icon;

  before(() => {
    container = document.createElement('div');
    container.setAttribute('data-sprk-toggle', 'container');

    trigger = document.createElement('a');
    trigger.setAttribute('data-sprk-toggle', 'trigger');
    trigger.textContent = 'My Toggle Link Text';
    trigger.classList.add('sprk-b-TypeBodyThree', 'sprk-b-Link', 'sprk-b-Link--standalone');

    content = document.createElement('p');
    content.setAttribute('data-sprk-toggle', 'content');
    content.textContent = 'This is the toggle content. It is a placeholder.';
    content.classList.add('sprk-b-TypeBodyFour', 'sprk-u-pts');

    icon = document.createElement('svg');
    icon.setAttribute('data-sprk-toggle', 'icon');

    trigger.appendChild(icon);
    container.appendChild(trigger);
    container.appendChild(content);
  });

  it('should toggle aria-expanded attribute', () => {
    toggleAriaExpanded(trigger);

    expect(trigger.hasAttribute('aria-expanded')).eql(true);
  });
  it('should toggle CSS hide class', () => {
    toggleContentCSS(content);
    expect(content.classList.contains('sprk-u-HideWhenJS')).eql(true);
  });
});
