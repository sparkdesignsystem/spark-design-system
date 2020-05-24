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

function calculatePositionClass(trigger){
  const elemX = trigger.getBoundingClientRect().left;
  const elemY = trigger.getBoundingClientRect().top;
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  if (elemX > viewportWidth / 2) {
    if (elemY > viewportHeight / 2) {
      return 'sprk-c-Tooltip--top_left';
    } else {
      return 'sprk-c-Tooltip--bottom_left';
    }
  } else {
    if (elemY > viewportHeight / 2) {
      return 'sprk-c-Tooltip--top_right';
    } else {
      return 'sprk-c-Tooltip--bottom_right';
    }
  }
}

function addPositioningClass(trigger, tooltip) {
  tooltip.classList.remove('sprk-c-Tooltip--bottom_right');
  tooltip.classList.remove('sprk-c-Tooltip--bottom_left');
  tooltip.classList.remove('sprk-c-Tooltip--top_right');
  tooltip.classList.remove('sprk-c-Tooltip--top_left');

  tooltip.classList.add(calculatePositionClass(trigger));
}

function showTooltip(trigger, tooltip, stickOpen) {
  addPositioningClass(trigger, tooltip);

  toggleAriaExpanded(trigger);

  if (stickOpen) {
    trigger.classList.add('sprk-c-Tooltip--toggled');
  }
}

function hideTooltip(trigger, tooltip) {
  toggleAriaExpanded(trigger);
  trigger.classList.remove('sprk-c-Tooltip--toggled');
}

function toggleTooltip(trigger, tooltip) {
  if (trigger.classList.contains('sprk-c-Tooltip--toggled')) {
    hideTooltip(trigger, tooltip);
  } else {
    showTooltip(trigger, tooltip, true);
  }
}

const bindTooltipUIEvents = (tooltipContainer) => {
  var trigger = tooltipContainer.querySelector('[data-sprk-tooltip="trigger"]');
  var tooltip = tooltipContainer.querySelector('[data-sprk-tooltip="content"]');

  trigger.setAttribute('aria-role', 'button');
  trigger.setAttribute('aria-expanded', 'false');

  trigger.addEventListener('click', (e) => { toggleTooltip(trigger, tooltip) }, false);

  trigger.addEventListener('keydown', function (e) {
    if (isSpacePressed(e)) {
      e.preventDefault();
      toggleTooltip(trigger, tooltip);
    }

    if (isEnterPressed(e)) {
      e.preventDefault();
      toggleTooltip(trigger, tooltip);
    }
  });

  trigger.addEventListener('mouseover', (e) => {
    addPositioningClass(trigger, tooltip);
  });

  trigger.addEventListener('focus', (e) => {
    addPositioningClass(trigger, tooltip);
  });

  document.addEventListener('keydown', function(e) {
    if (isEscPressed(e)) {
      hideTooltip(trigger, tooltip);
    }
  });

  document.addEventListener('click', (e) => {
    if (!(tooltip.contains(e.target) || trigger.contains(e.target))) {
      hideTooltip(trigger, tooltip);
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
  calculatePositionClass,
};
