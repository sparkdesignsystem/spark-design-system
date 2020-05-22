import 'focus-visible';
import getElements from '../utilities/getElements';

/**
 *  Tooltip JS
 *  todo - should use toggleAriaExpanded
 */

function showTooltip(trigger, stickOpen) {
  trigger.setAttribute('aria-expanded', 'true');

  if (stickOpen) {
    trigger.classList.add('sprk-c-Tooltip--toggled');
  }
}

function hideTooltip(trigger) {
  trigger.setAttribute('aria-expanded', 'false');
  trigger.classList.remove('sprk-c-Tooltip--toggled');
}

function toggleTooltip(trigger) {
  if (trigger.classList.contains('sprk-c-Tooltip--toggled')) {
    hideTooltip(trigger);
  } else {
    showTooltip(trigger, true);
  }
}

const bindTooltipUIEvents = (tooltipContainer) => {
  var trigger = tooltipContainer.querySelector('[data-sprk-tooltip="trigger"]');
  var tooltip = tooltipContainer.querySelector('[data-sprk-tooltip="content"]');

  trigger.setAttribute('aria-role', 'button');
  trigger.setAttribute('aria-expanded', 'false');

  trigger.addEventListener('click', (e) => { toggleTooltip(trigger) }, false);

  trigger.addEventListener('keydown', function (e) {
    var key = e.key || e.keyCode;

    console.log("key is: " + key);
    if (key === 32 || key === ' ') {
      toggleTooltip(trigger);
    }

    if (key === 13 || key === 'Enter') {
      toggleTooltip(trigger);
    }
  });

  document.addEventListener('keydown', function(e) {
    var key = e.key || e.keyCode;

    // TODO use utility function, add new ones for Space and Enter?
    if (key === 'Escape' || key === 'Esc' || key === 27) {
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
  toggleTooltip
};
