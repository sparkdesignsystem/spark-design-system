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
      return 'sprk-c-Tooltip--top-left';
    } else {
      return 'sprk-c-Tooltip--bottom-left';
    }
  } else {
    if (elemY > viewportHeight / 2) {
      return 'sprk-c-Tooltip--top-right';
    } else {
      return 'sprk-c-Tooltip--bottom-right';
    }
  }
}

function addPositioningClass(trigger, tooltip) {
  tooltip.classList.remove('sprk-c-Tooltip--bottom-right');
  tooltip.classList.remove('sprk-c-Tooltip--bottom-left');
  tooltip.classList.remove('sprk-c-Tooltip--top-right');
  tooltip.classList.remove('sprk-c-Tooltip--top-left');

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
