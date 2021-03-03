/* eslint-disable no-param-reassign */
import getElements from '../utilities/getElements';
import {
  isEscPressed,
  isEnterPressed,
  isSpacePressed,
} from '../utilities/keypress';
import toggleAriaExpanded from '../utilities/toggleAriaExpanded';

/**
 *  Tooltip JS
 */

const addPositioningClass = (trigger, tooltip) => {
  tooltip.classList.remove(
    'sprk-c-Tooltip--bottom-right',
    'sprk-c-Tooltip--bottom-left',
    'sprk-c-Tooltip--top-right',
    'sprk-c-Tooltip--top-left',
  );

  const elemX = trigger.getBoundingClientRect().left;
  const elemY = trigger.getBoundingClientRect().top;

  const viewportWidth = document.documentElement.clientWidth;
  const viewportHeight = document.documentElement.clientHeight;

  const maxWidth = 328;
  const triggerWidth = 16;
  const tooltipBorderWidth = 16;
  const tooltipSpacing = 16;
  let calculatedWidth;

  if (elemX > viewportWidth / 2) {
    calculatedWidth =
      elemX + triggerWidth + tooltipBorderWidth - tooltipSpacing;
    if (elemY > viewportHeight / 2) {
      tooltip.classList.add('sprk-c-Tooltip--top-left');
    } else {
      tooltip.classList.add('sprk-c-Tooltip--bottom-left');
    }
  } else {
    calculatedWidth =
      viewportWidth - elemX + tooltipBorderWidth - tooltipSpacing;
    if (elemY > viewportHeight / 2) {
      tooltip.classList.add('sprk-c-Tooltip--top-right');
    } else {
      tooltip.classList.add('sprk-c-Tooltip--bottom-right');
    }
  }

  if (calculatedWidth < maxWidth) {
    // overwrite the width if there's not enough room to display it
    tooltip.setAttribute('style', `width:${calculatedWidth}px`);
  }
};

const showTooltip = (trigger, tooltip, stickOpen) => {
  addPositioningClass(trigger, tooltip);

  toggleAriaExpanded(trigger);

  if (stickOpen) {
    trigger.classList.add('sprk-c-Tooltip--toggled');
  }
};

const hideTooltip = (trigger) => {
  toggleAriaExpanded(trigger);
  trigger.classList.remove('sprk-c-Tooltip--toggled');
};

const toggleTooltip = (trigger, tooltip) => {
  if (trigger.classList.contains('sprk-c-Tooltip--toggled')) {
    hideTooltip(trigger);
  } else {
    showTooltip(trigger, tooltip, true);
  }
};

const bindTooltipUIEvents = (tooltipContainer) => {
  const trigger = tooltipContainer.querySelector(
    '[data-sprk-tooltip="trigger"]',
  );
  const tooltip = tooltipContainer.querySelector(
    '[data-sprk-tooltip="content"]',
  );

  addPositioningClass(trigger, tooltip);

  trigger.setAttribute('aria-expanded', 'false');

  trigger.addEventListener(
    'click',
    () => {
      toggleTooltip(trigger, tooltip);
    },
    false,
  );

  trigger.addEventListener('keydown', (e) => {
    if (isSpacePressed(e)) {
      e.preventDefault();
      toggleTooltip(trigger, tooltip);
    }

    if (isEnterPressed(e)) {
      e.preventDefault();
      toggleTooltip(trigger, tooltip);
    }
  });

  trigger.addEventListener('mouseover', () => {
    addPositioningClass(trigger, tooltip);
  });

  trigger.addEventListener('focus', () => {
    addPositioningClass(trigger, tooltip);
  });

  document.addEventListener('keydown', (e) => {
    if (isEscPressed(e)) {
      hideTooltip(trigger);
    }
  });

  document.addEventListener('click', (e) => {
    if (!(tooltip.contains(e.target) || trigger.contains(e.target))) {
      hideTooltip(trigger);
    }
  });
};

const tooltip = () => {
  getElements('[data-sprk-tooltip="container"]', bindTooltipUIEvents);
};

export {
  tooltip,
  bindTooltipUIEvents,
  showTooltip,
  hideTooltip,
  toggleTooltip,
};
