/* global document before describe it */
import { expect } from 'chai';
import {
  ariaOrientation,
  resetTabs,
  setActiveTab,
  advanceTab,
  retreatTab,
  getActiveTabIndex,
} from '../components/tabs';

describe('aria Orientation tests', () => {
  let tabContainer;

  before(() => {
    tabContainer = document.createElement('div');
    tabContainer.classList.add('sprk-c-Tabs');
    tabContainer.setAttribute('role', 'tablist');
  });

  it('should set the orientation to vertical if the width is < 736', () => {
    ariaOrientation(500, tabContainer);
    const orientationValue = tabContainer.getAttribute('aria-orientation');
    expect(orientationValue).eql('vertical');
  });

  it('should set the orientation to vertical if the width is = 736', () => {
    ariaOrientation(736, tabContainer);
    const orientationValue = tabContainer.getAttribute('aria-orientation');
    expect(orientationValue).eql('vertical');
  });

  it('should set the orientation to horizontal if the width is > 736', () => {
    ariaOrientation(737, tabContainer);
    const orientationValue = tabContainer.getAttribute('aria-orientation');
    expect(orientationValue).eql('horizontal');
  });
});

describe('resetTabs tests', () => {
  let tabContainer;
  let tab1;
  let tab2;
  let tab3;

  let panel1;
  let panel2;
  let panel3;

  let tabs;
  let panels;

  before(() => {
    tabContainer = document.createElement('div');
    tabContainer.classList.add('sprk-c-Tabs');
    tabContainer.setAttribute('role', 'tablist');

    tab1 = document.createElement('button');
    tab1.classList.add('sprk-c-Tabs__button');
    tab1.classList.add('sprk-c-Tabs__button--active');
    tab1.setAttribute('role', 'tab');
    tab1.setAttribute('aria-selected', 'true');

    tab2 = document.createElement('button');
    tab2.classList.add('sprk-c-Tabs__button');
    tab2.setAttribute('role', 'tab');
    tab2.setAttribute('aria-selected', 'false');

    tab3 = document.createElement('button');
    tab3.classList.add('sprk-c-Tabs__button');
    tab3.setAttribute('role', 'tab');
    tab3.setAttribute('aria-selected', 'false');

    panel1 = document.createElement('div');
    panel1.classList.add('sprk-c-Tabs__button');
    panel1.setAttribute('role', 'tabpanel');

    panel2 = document.createElement('div');
    panel2.classList.add('sprk-c-Tabs__button');
    panel2.setAttribute('role', 'tabpanel');

    panel3 = document.createElement('div');
    panel3.classList.add('sprk-c-Tabs__button');
    panel3.setAttribute('role', 'tabpanel');

    tabContainer.appendChild(tab1);
    tabContainer.appendChild(tab2);
    tabContainer.appendChild(tab3);

    tabContainer.appendChild(panel1);
    tabContainer.appendChild(panel2);
    tabContainer.appendChild(panel3);

    tabs = [tab1, tab2, tab3];
    panels = [panel1, panel2, panel3];
  });

  it('should remove the active class from all tabs', () => {
    let hasActiveClassSomeplace = false;

    resetTabs(tabs, panels);

    tabs.forEach((tab) => {
      if (tab.classList.contains('sprk-c-Tabs__button--active')) {
        hasActiveClassSomeplace = true;
      }
    });

    expect(hasActiveClassSomeplace).eql(false);
  });

  it('should hide all the panels', () => {
    let allAreHidden = true;

    resetTabs(tabs, panels);

    panels.forEach((panel) => {
      if (!panel.classList.contains('sprk-u-Display--none')) {
        allAreHidden = false;
      }
    });

    expect(allAreHidden).eql(true);
  });
});

describe('setActive tab tests', () => {
  let tabContainer;
  let tab1;
  let panel1;

  before(() => {
    tabContainer = document.createElement('div');
    tabContainer.classList.add('sprk-c-Tabs');
    tabContainer.setAttribute('role', 'tablist');

    tab1 = document.createElement('button');
    tab1.classList.add('sprk-c-Tabs__button');
    tab1.setAttribute('role', 'tab');
    tab1.setAttribute('aria-selected', 'false');

    panel1 = document.createElement('div');
    panel1.classList.add('sprk-c-Tabs__button');
    panel1.classList.add('sprk-u-Display--none');
    panel1.setAttribute('role', 'tabpanel');

    tabContainer.appendChild(tab1);
    tabContainer.appendChild(panel1);
  });

  it('should add the right class and show the right panel', () => {
    setActiveTab(tab1, panel1);
    expect(tab1.classList.contains('sprk-c-Tabs__button--active')).eql(true);
  });

  it('should show the right panel', () => {
    setActiveTab(tab1, panel1);
    expect(panel1.classList.contains('sprk-u-Display--none')).eql(false);
  });

  it('should set aria-selected to true', () => {
    setActiveTab(tab1, panel1);
    expect(tab1.getAttribute('aria-selected')).eql('true');
  });
});

describe('advanceTab tests', () => {
  let tabContainer;
  let tab1;
  let tab2;
  let tab3;

  let panel1;
  let panel2;
  let panel3;

  let tabs;
  let panels;

  before(() => {
    tabContainer = document.createElement('div');
    tabContainer.classList.add('sprk-c-Tabs');
    tabContainer.setAttribute('role', 'tablist');

    tab1 = document.createElement('button');
    tab1.classList.add('sprk-c-Tabs__button');
    tab1.classList.add('sprk-c-Tabs__button--active');
    tab1.setAttribute('role', 'tab');
    tab1.setAttribute('aria-selected', 'true');

    tab2 = document.createElement('button');
    tab2.classList.add('sprk-c-Tabs__button');
    tab2.setAttribute('role', 'tab');
    tab2.setAttribute('aria-selected', 'false');

    tab3 = document.createElement('button');
    tab3.classList.add('sprk-c-Tabs__button');
    tab3.setAttribute('role', 'tab');
    tab3.setAttribute('aria-selected', 'false');

    panel1 = document.createElement('div');
    panel1.classList.add('sprk-c-Tabs__button');
    panel1.setAttribute('role', 'tabpanel');

    panel2 = document.createElement('div');
    panel2.classList.add('sprk-c-Tabs__button');
    panel2.classList.add('sprk-c-Hidden');
    panel2.setAttribute('role', 'tabpanel');

    panel3 = document.createElement('div');
    panel3.classList.add('sprk-c-Tabs__button');
    panel3.classList.add('sprk-c-Hidden');
    panel3.setAttribute('role', 'tabpanel');

    tabContainer.appendChild(tab1);
    tabContainer.appendChild(tab2);
    tabContainer.appendChild(tab3);

    tabContainer.appendChild(panel1);
    tabContainer.appendChild(panel2);
    tabContainer.appendChild(panel3);

    tabs = [tab1, tab2, tab3];
    panels = [panel1, panel2, panel3];
  });

  it('should advance the active tab to the next one, if its not the last in the list', () => {
    advanceTab(tabs, panels);
    expect(tab2.classList.contains('sprk-c-Tabs__button--active')).eql(true);
  });

  it('should set the active tab to the first in the list, if the currently active tab is list in the list', () => {
    advanceTab(tabs, panels); // set to 3
    expect(tab3.classList.contains('sprk-c-Tabs__button--active')).eql(true);

    advanceTab(tabs, panels); // should move to 1
    expect(tab1.classList.contains('sprk-c-Tabs__button--active')).eql(true);
  });
});

describe('retreatTab tests', () => {
  let tabContainer;
  let tab1;
  let tab2;
  let tab3;

  let panel1;
  let panel2;
  let panel3;

  let tabs;
  let panels;

  before(() => {
    tabContainer = document.createElement('div');
    tabContainer.classList.add('sprk-c-Tabs');
    tabContainer.setAttribute('role', 'tablist');

    tab1 = document.createElement('button');
    tab1.classList.add('sprk-c-Tabs__button');
    tab1.setAttribute('role', 'tab');
    tab1.setAttribute('aria-selected', 'false');

    tab2 = document.createElement('button');
    tab2.classList.add('sprk-c-Tabs__button');
    tab2.classList.add('sprk-c-Tabs__button--active');
    tab2.setAttribute('role', 'tab');
    tab2.setAttribute('aria-selected', 'true');

    tab3 = document.createElement('button');
    tab3.classList.add('sprk-c-Tabs__button');
    tab3.setAttribute('role', 'tab');
    tab3.setAttribute('aria-selected', 'false');

    panel1 = document.createElement('div');
    panel1.classList.add('sprk-c-Tabs__button');
    panel1.setAttribute('role', 'tabpanel');

    panel2 = document.createElement('div');
    panel2.classList.add('sprk-c-Tabs__button');
    panel2.classList.add('sprk-c-Hidden');
    panel2.setAttribute('role', 'tabpanel');

    panel3 = document.createElement('div');
    panel3.classList.add('sprk-c-Tabs__button');
    panel2.classList.add('sprk-c-Hidden');
    panel3.setAttribute('role', 'tabpanel');

    tabContainer.appendChild(tab1);
    tabContainer.appendChild(tab2);
    tabContainer.appendChild(tab3);

    tabContainer.appendChild(panel1);
    tabContainer.appendChild(panel2);
    tabContainer.appendChild(panel3);

    tabs = [tab1, tab2, tab3];
    panels = [panel1, panel2, panel3];
  });

  it('should retreat the active tab to the previous one, if its not the first in the list', () => {
    retreatTab(tabs, panels);
    expect(tab1.classList.contains('sprk-c-Tabs__button--active')).eql(true);
  });

  it('should set the active tab to the first in the list, if the currently active tab is list in the list', () => {
    retreatTab(tabs, panels);
    expect(tab3.classList.contains('sprk-c-Tabs__button--active')).eql(true);
  });
});

describe('getActiveTabIndex tests', () => {
  let tabContainer;
  let tab1;
  let tab2;
  let tab3;

  let tabs;

  before(() => {
    tabContainer = document.createElement('div');
    tabContainer.classList.add('sprk-c-Tabs');
    tabContainer.setAttribute('role', 'tablist');

    tab1 = document.createElement('button');
    tab1.classList.add('sprk-c-Tabs__button');
    tab1.setAttribute('role', 'tab');
    tab1.setAttribute('aria-selected', 'false');

    tab2 = document.createElement('button');
    tab2.classList.add('sprk-c-Tabs__button');
    tab2.setAttribute('role', 'tab');
    tab2.setAttribute('aria-selected', 'false');

    tab3 = document.createElement('button');
    tab3.classList.add('sprk-c-Tabs__button');
    tab3.setAttribute('role', 'tab');
    tab3.setAttribute('aria-selected', 'false');

    tabContainer.appendChild(tab1);
    tabContainer.appendChild(tab2);
    tabContainer.appendChild(tab3);

    tabs = [tab1, tab2, tab3];
  });

  it('should return null when there are no tabs active', () => {
    expect(getActiveTabIndex(tabs)).eql(null);
  });

  it('should return the correct index when a tab is active', () => {
    tab2.classList.add('sprk-c-Tabs__button--active');
    expect(getActiveTabIndex(tabs)).eql(1);
  });
});
