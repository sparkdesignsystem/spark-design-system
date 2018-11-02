/* global window */
import getElements from '../utilities/getElements';

// all the role=tab get aria-selected=false, get active class removed, hide all panels
const resetTabs = (tabs, tabpanels) => {
  tabs.forEach((tab) => {
    tab.classList.remove('sprk-c-Tabs__button--active');
    tab.setAttribute('aria-selected', 'false');
    tabpanels.forEach((panel) => {
      panel.classList.add('sprk-u-Display--none');
    });
  });
};

// correct role=tab get aria-selected=true, get active class added, show correct panel
const setActiveTab = (tab, tabpanel) => {
  tab.classList.add('sprk-c-Tabs__button--active');
  tab.setAttribute('aria-selected', 'true');
  tabpanel.classList.remove('sprk-u-Display--none');
  tab.focus();
};

const getActiveTabIndex = (tabs) => {
  let activeIndex = null;
  tabs.forEach((tab, index) => {
    if (tab.classList.contains('sprk-c-Tabs__button--active')) {
      activeIndex = index;
    }
  });

  return activeIndex;
};

const advanceTab = (tabs, tabpanels) => {
  const activeIndex = getActiveTabIndex(tabs);
  resetTabs(tabs, tabpanels);

  if (activeIndex + 1 <= tabs.length - 1) {
    setActiveTab(tabs[activeIndex + 1], tabpanels[activeIndex + 1]);
  } else {
    setActiveTab(tabs[0], tabpanels[0]);
  }
};

const retreatTab = (tabs, tabpanels) => {
  const activeIndex = getActiveTabIndex(tabs);

  resetTabs(tabs, tabpanels);

  if (activeIndex - 1 === -1) {
    setActiveTab(tabs[tabs.length - 1], tabpanels[tabs.length - 1]);
  } else {
    setActiveTab(tabs[activeIndex - 1], tabpanels[activeIndex - 1]);
  }
};

const ariaOrientation = (width, element) => {
  // switch aria-orientation to vertical on mobile (based on _tabs.scss breakpoint)
  if (width <= 736) {
    element.setAttribute('aria-orientation', 'vertical');
  } else {
    element.setAttribute('aria-orientation', 'horizontal');
  }
};

const bindUIEvents = (element) => {
  ariaOrientation(window.innerWidth, element);

  const tabContainer = element.querySelector('.sprk-c-Tabs__buttons');
  const tabs = element.querySelectorAll('[role="tab"]');
  const tabpanels = element.querySelectorAll('[role="tabpanel"]');

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      resetTabs(tabs, tabpanels);
      setActiveTab(tab, tabpanels[index]);
    });
  });

  tabContainer.addEventListener('keydown', (event) => {
    const keys = {
      end: 35,
      home: 36,
      left: 37,
      right: 39,
      tab: 9,
    };

    if (event.keyCode === keys.left) {
      retreatTab(tabs, tabpanels);
    } else if (event.keyCode === keys.right) {
      advanceTab(tabs, tabpanels);
    } else if (event.keyCode === keys.tab) {
      event.preventDefault();
      tabpanels[getActiveTabIndex(tabs)].focus();
    } else if (event.keyCode === keys.home) {
      resetTabs(tabs, tabpanels);
      setActiveTab(tabs[0], tabpanels[0]);
    } else if (event.keyCode === keys.end) {
      resetTabs(tabs, tabpanels);
      setActiveTab(tabs[tabs.length - 1], tabpanels[tabpanels.length - 1]);
    }
  });
};

const tabs = () => {
  getElements('[data-sprk-navigation="tabs"]', bindUIEvents);
};

export {
  tabs,
  bindUIEvents,
  ariaOrientation,
  resetTabs,
  setActiveTab,
  advanceTab,
  retreatTab,
  getActiveTabIndex,
};
