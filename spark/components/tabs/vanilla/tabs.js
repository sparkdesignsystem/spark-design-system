import getElements from '../utilities/getElements';

const resetTabs = (tabs, tabpanels, activeClass) => {
  tabs.forEach((tab) => {
    tab.classList.remove(activeClass || 'sprk-c-Tabs__button--active');
    tab.removeAttribute('tabindex');
    tab.setAttribute('aria-selected', 'false');
    tabpanels.forEach((panel) => {
      panel.classList.add('sprk-u-HideWhenJs');
    });
  });
};

const setActiveTab = (tab, tabpanel, activeClass) => {
  tab.classList.add(activeClass || 'sprk-c-Tabs__button--active');
  tab.setAttribute('tabindex', '0');
  tab.setAttribute('aria-selected', 'true');
  if (tabpanel) {
    tabpanel.classList.remove('sprk-u-HideWhenJs');
  }
  tab.focus();
};

const getActiveTabIndex = (tabs, activeClass) => {
  let activeIndex = null;
  tabs.forEach((tab, index) => {
    if (tab.classList.contains(activeClass || 'sprk-c-Tabs__button--active')) {
      activeIndex = index;
    }
  });

  return activeIndex;
};

const advanceTab = (tabs, tabpanels, activeClass) => {
  const activeIndex = getActiveTabIndex(tabs, activeClass);
  resetTabs(tabs, tabpanels, activeClass);

  if (activeIndex + 1 <= tabs.length - 1) {
    setActiveTab(
      tabs[activeIndex + 1],
      tabpanels[activeIndex + 1],
      activeClass,
    );
  } else {
    setActiveTab(tabs[0], tabpanels[0], activeClass);
  }
};

const retreatTab = (tabs, tabpanels, activeClass) => {
  const activeIndex = getActiveTabIndex(tabs, activeClass);

  resetTabs(tabs, tabpanels, activeClass);

  if (activeIndex - 1 === -1) {
    setActiveTab(
      tabs[tabs.length - 1],
      tabpanels[tabs.length - 1],
      activeClass,
    );
  } else {
    setActiveTab(
      tabs[activeIndex - 1],
      tabpanels[activeIndex - 1],
      activeClass,
    );
  }
};

const ariaOrientation = (width, element) => {
  // switch aria-orientation on mobile (based on _tabs.scss breakpoint)
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
      up: 38,
      down: 40,
    };

    if (event.keyCode === keys.left || event.keyCode === keys.up) {
      retreatTab(tabs, tabpanels);
    } else if (event.keyCode === keys.right || event.keyCode === keys.down) {
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
