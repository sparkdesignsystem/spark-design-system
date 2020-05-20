import 'focus-visible';
import getElements from '../utilities/getElements';

/**
 *  Tooltip JS
 */

function showTooltip(trigger, stickOpen) {
  // trigger.setAttribute("aria-expanded", "true");

  if (stickOpen){
    trigger.classList.add("sprk-c-Tooltip--toggled");
  }
}

function hideTooltip(trigger) {
  // trigger.setAttribute("aria-expanded", "false");
  trigger.classList.remove("sprk-c-Tooltip--toggled");
}

function toggleTooltip (trigger) {
  if (trigger.classList.contains('sprk-c-Tooltip--toggled')) {
    hideTooltip(trigger);
	} else {
    showTooltip(trigger, true);
  }
}

const bindTooltipUIEvents = (tooltipContainer) => {
  var trigger = tooltipContainer.querySelector('[data-sprk-tooltip="trigger"]');
  var tooltip = tooltipContainer.querySelector('[data-sprk-tooltip="content"]');

  // trigger.setAttribute('aria-role', 'button');

  // bind events
  trigger.addEventListener("click", (e) => {toggleTooltip(trigger)}, false);

  document.addEventListener('keyup', function (e) {
    if (e.keyCode == 27) {
      hideTooltip(trigger);
    }

    if (e.keyCode == 13 || e.keyCode == 32){
      toggleTooltip(trigger);
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
  tooltip, bindTooltipUIEvents,
};
