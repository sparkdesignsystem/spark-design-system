/* global window */
import getElements from '../utilities/getElements';

// all the role=tab get aria-selected=false, get active class removed, hide all panels
const resetTabs = (tabs, tabpanels) => {
  tabs.forEach((tab) => {
    tab.classList.remove('sprk-c-Tabs__button--active');
    tab.setAttribute('aria-selected', 'false');
    tabpanels.forEach((panel) => {
      panel.classList.add('sprk-u-Hidden');
    });
  });
};

// correct role=tab get aria-selected=true, get active class added, show correct panel
const setActiveTab = (tab, tabpanel) => {
  tab.classList.add('sprk-c-Tabs__button--active');
  tab.setAttribute('aria-selected', 'true');
  tabpanel.classList.remove('sprk-u-Hidden');
};

const bindUIEvents = (element) => {
  const tabs = element.querySelectorAll('[role="tab"]');
  const tabpanels = element.querySelectorAll('[role="tabpanel"]');

  // TODO: arrows cycle through tabs, focus in on tablist moves to active

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      resetTabs(tabs, tabpanels);
      setActiveTab(tab, tabpanels[index]);
    });
  });
};

const ariaOrientation = (width, element) => {
  // switch aria-orientation to vertical on mobile (based on _tabs.scss breakpoint)
  if (width <= 736) {
    element.setAttribute('aria-orientation', 'vertical');
  } else {
    element.setAttribute('aria-orientation', 'horizontal');
  }
};

const tabs = () => {
  getElements('[data-sprk-navigation="tabs"]', (element) => {
    ariaOrientation(window.innerWidth, element);
    bindUIEvents(element);
  });
};

export { tabs, ariaOrientation, resetTabs, setActiveTab };
