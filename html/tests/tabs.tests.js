/* global window document beforeEach afterEach describe it sinon */
import {
  tabs,
  bindUIEvents,
  ariaOrientation,
  resetTabs,
  setActiveTab,
  advanceTab,
  retreatTab,
  getActiveTabIndex,
} from '../components/tabs';

describe('tabs init', () => {
  afterEach(() => {
    document.querySelectorAll.restore();
  });

  it('should call getElements once with the correct selector', () => {
    sinon.spy(document, 'querySelectorAll');
    tabs();
    expect(document.querySelectorAll.getCall(0).args[0]).toBe(
      '[data-sprk-navigation="tabs"]',
    );
  });
});

describe('tabs UI Events tests', () => {
  let tabNav;
  let tabContainer;
  let tab1;
  let tab2;
  let tab3;

  let panel1;
  let panel2;
  let panel3;
  let event;

  beforeEach(() => {
    tabNav = document.createElement('div');
    tabNav.classList.add('sprk-c-Tabs');
    tabNav.setAttribute('role', 'tablist');

    tabContainer = document.createElement('div');
    tabContainer.classList.add('sprk-c-Tabs__buttons');
    sinon.spy(tabContainer, 'addEventListener');

    tab1 = document.createElement('button');
    tab1.classList.add('sprk-c-Tabs__button');
    tab1.classList.add('sprk-c-Tabs__button--active');
    tab1.setAttribute('role', 'tab');
    tab1.setAttribute('aria-selected', 'true');
    tab1.textContent = 'tab 1';
    sinon.spy(tab1, 'addEventListener');

    tab2 = document.createElement('button');
    tab2.classList.add('sprk-c-Tabs__button');
    tab2.setAttribute('role', 'tab');
    tab2.setAttribute('aria-selected', 'false');
    tab2.textContent = 'tab 2';
    sinon.spy(tab2, 'addEventListener');

    tab3 = document.createElement('button');
    tab3.classList.add('sprk-c-Tabs__button');
    tab3.setAttribute('role', 'tab');
    tab3.setAttribute('aria-selected', 'false');
    tab3.textContent = 'tab 3';
    sinon.spy(tab3, 'addEventListener');

    panel1 = document.createElement('div');
    panel1.classList.add('sprk-c-Tabs__content');
    panel1.setAttribute('role', 'tabpanel');
    panel1.setAttribute('tabindex', '0');

    panel2 = document.createElement('div');
    panel2.classList.add('sprk-c-Tabs__content');
    panel2.setAttribute('role', 'tabpanel');
    panel2.setAttribute('tabindex', '0');

    panel3 = document.createElement('div');
    panel3.classList.add('sprk-c-Tabs__content');
    panel3.setAttribute('role', 'tabpanel');
    panel3.setAttribute('tabindex', '0');

    tabContainer.appendChild(tab1);
    tabContainer.appendChild(tab2);
    tabContainer.appendChild(tab3);

    tabNav.appendChild(tabContainer);
    tabNav.appendChild(panel1);
    tabNav.appendChild(panel2);
    tabNav.appendChild(panel3);

    bindUIEvents(tabNav);
  });

  afterEach(() => {
    document.body.innerHTML = '';
    tab1.addEventListener.restore();
    tab2.addEventListener.restore();
    tab3.addEventListener.restore();
    tabContainer.addEventListener.restore();
  });

  it('should bind the click event on each tab', () => {
    expect(tab1.addEventListener.getCall(0).args[0]).toBe('click');
    expect(tab2.addEventListener.getCall(0).args[0]).toBe('click');
    expect(tab3.addEventListener.getCall(0).args[0]).toBe('click');
  });

  it('should bind the keydown event to the container', () => {
    expect(tabContainer.addEventListener.getCall(0).args[0]).toBe('keydown');
  });

  it('should activate the previous tab when left is pressed', () => {
    event = new window.Event('keydown');
    event.keyCode = 37;
    tab2.click();
    expect(tab2.classList.contains('sprk-c-Tabs__button--active')).toBe(true);
    tabContainer.dispatchEvent(event);
    expect(tab1.classList.contains('sprk-c-Tabs__button--active')).toBe(true);
  });

  it('should activate the next tab when right is pressed', () => {
    event = new window.Event('keydown');
    event.keyCode = 39;
    tab2.click();
    expect(tab2.classList.contains('sprk-c-Tabs__button--active')).toBe(true);
    tabContainer.dispatchEvent(event);
    expect(tab3.classList.contains('sprk-c-Tabs__button--active')).toBe(true);
  });

  it('should activate the first tab when Home is pressed', () => {
    event = new window.Event('keydown');
    event.keyCode = 36;
    tab3.click();
    expect(tab3.classList.contains('sprk-c-Tabs__button--active')).toBe(true);
    tabContainer.dispatchEvent(event);
    expect(tab1.classList.contains('sprk-c-Tabs__button--active')).toBe(true);
  });

  it('should activate the last tab when End is pressed', () => {
    event = new Event('keydown');
    event.keyCode = 35;
    expect(tab3.classList.contains('sprk-c-Tabs__button--active')).toBe(false);
    tabContainer.dispatchEvent(event);
    expect(tab3.classList.contains('sprk-c-Tabs__button--active')).toBe(true);
  });

  it('should activate the corresponding content when tab is pressed', () => {
    event = new Event('keydown');
    event.keyCode = 9;
    tab1.click();
    expect(tab1.classList.contains('sprk-c-Tabs__button--active')).toBe(true);
    tabContainer.dispatchEvent(event);
    expect(panel1.classList.contains('sprk-u-HideWhenJs')).toBe(false);
    expect(panel2.classList.contains('sprk-u-HideWhenJs')).toBe(true);
    expect(panel3.classList.contains('sprk-u-HideWhenJs')).toBe(true);
  });

  it(`should do nothing when a key is pressed that isnt home, end, or an arrow
   key`, () => {
    event = new Event('keydown');
    event.keyCode = 8;
    tab2.click();
    expect(tab2.classList.contains('sprk-c-Tabs__button--active')).toBe(true);
    tabContainer.dispatchEvent(event);
    expect(tab2.classList.contains('sprk-c-Tabs__button--active')).toBe(true);
  });
});

describe('aria Orientation tests', () => {
  let tabContainer;

  beforeEach(() => {
    tabContainer = document.createElement('div');
    tabContainer.classList.add('sprk-c-Tabs');
    tabContainer.setAttribute('role', 'tablist');
  });

  it('should set the orientation to vertical if the width is < 736', () => {
    ariaOrientation(500, tabContainer);
    const orientationValue = tabContainer.getAttribute('aria-orientation');
    expect(orientationValue).toBe('vertical');
  });

  it('should set the orientation to vertical if the width is = 736', () => {
    ariaOrientation(736, tabContainer);
    const orientationValue = tabContainer.getAttribute('aria-orientation');
    expect(orientationValue).toBe('vertical');
  });

  it('should set the orientation to horizontal if the width is > 736', () => {
    ariaOrientation(737, tabContainer);
    const orientationValue = tabContainer.getAttribute('aria-orientation');
    expect(orientationValue).toBe('horizontal');
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

  let tabsSet;
  let panels;

  let step;
  let stepTrigger;

  beforeEach(() => {
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

    step = document.createElement('div');
    step.classList.add('sprk-c-Stepper__step');
    step.setAttribute('data-sprk-stepper', '');
    stepTrigger = document.createElement('div');
    stepTrigger.setAttribute('role', 'tab');
    stepTrigger.setAttribute('aria-selected', 'false');
    step.append(stepTrigger);

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

    tabsSet = [tab1, tab2, tab3, step];
    panels = [panel1, panel2, panel3];
  });

  it('should remove the active class from all tabs', () => {
    let hasActiveClassSomeplace = false;

    resetTabs(tabsSet, panels, 'sprk-c-Tabs__button--active');

    tabsSet.forEach((tab) => {
      if (tab.classList.contains('sprk-c-Tabs__button--active')) {
        hasActiveClassSomeplace = true;
      }
    });

    expect(hasActiveClassSomeplace).toBe(false);
  });

  it('should hide all the panels', () => {
    let allAreHidden = true;

    resetTabs(tabsSet, panels, 'sprk-c-Tabs__button--active');

    panels.forEach((panel) => {
      if (!panel.classList.contains('sprk-u-HideWhenJs')) {
        allAreHidden = false;
      }
    });

    expect(allAreHidden).toBe(true);
  });

  it('should set aria-selected to false on the stepper trigger', () => {
    resetTabs(tabsSet, panels, 'sprk-c-Stepper__step--selected');
    expect(stepTrigger.getAttribute('aria-selected')).toBe('false');
  });
});

describe('setActive tab tests', () => {
  let tabContainer;
  let tab1;
  let panel1;
  let step;
  let stepTrigger;

  beforeEach(() => {
    tabContainer = document.createElement('div');
    tabContainer.classList.add('sprk-c-Tabs');
    tabContainer.setAttribute('role', 'tablist');

    tab1 = document.createElement('button');
    tab1.classList.add('sprk-c-Tabs__button');
    tab1.setAttribute('role', 'tab');
    tab1.setAttribute('aria-selected', 'false');

    step = document.createElement('div');
    stepTrigger = document.createElement('div');
    step.classList.add('sprk-c-Stepper__step');
    step.setAttribute('data-sprk-stepper', '');
    stepTrigger.setAttribute('role', 'tab');
    stepTrigger.setAttribute('aria-selected', 'false');
    step.append(stepTrigger);

    panel1 = document.createElement('div');
    panel1.classList.add('sprk-c-Tabs__button');
    panel1.classList.add('sprk-u-HideWhenJs');
    panel1.setAttribute('role', 'tabpanel');

    tabContainer.appendChild(tab1);
    tabContainer.appendChild(panel1);
  });

  it('should not try to remove the tab panel if there is no tab panel', () => {
    const noPanel = null;
    setActiveTab(tab1, noPanel, 'sprk-c-Tabs__button--active');
    expect(noPanel).toBe(null);
  });

  it('should add the right class and show the right panel', () => {
    setActiveTab(tab1, panel1, 'sprk-c-Tabs__button--active');
    expect(tab1.classList.contains('sprk-c-Tabs__button--active')).toBe(true);
  });

  it('should show the right panel', () => {
    setActiveTab(tab1, panel1, 'sprk-c-Tabs__button--active');
    expect(panel1.classList.contains('sprk-u-HideWhenJs')).toBe(false);
  });

  it('should set aria-selected to true', () => {
    setActiveTab(tab1, panel1, 'sprk-c-Tabs__button--active');
    expect(tab1.getAttribute('aria-selected')).toBe('true');
  });

  it('should set aria-selected to true on the stepper trigger', () => {
    setActiveTab(step, panel1, 'sprk-c-Stepper__step--selected');
    expect(step.getAttribute('aria-selected')).toBe('true');
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

  let tabsSet;
  let panels;

  beforeEach(() => {
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

    tabsSet = [tab1, tab2, tab3];
    panels = [panel1, panel2, panel3];
  });

  it(`should advance the active tab to the next one, if its not the last in
  the list`, () => {
    advanceTab(tabsSet, panels, 'sprk-c-Tabs__button--active');
    expect(tab2.classList.contains('sprk-c-Tabs__button--active')).toBe(true);
  });

  // THIS TEST
  it(`should set the active tab to the first in the list, if the currently
  active tab is last in the list`, () => {
    advanceTab(tabsSet, panels, 'sprk-c-Tabs__button--active');
    advanceTab(tabsSet, panels, 'sprk-c-Tabs__button--active');
    expect(tab3.classList.contains('sprk-c-Tabs__button--active')).toBe(true);
    advanceTab(tabsSet, panels, 'sprk-c-Tabs__button--active');
    expect(tab1.classList.contains('sprk-c-Tabs__button--active')).toBe(true);
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

  let tabsSet;
  let panels;

  beforeEach(() => {
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

    tabsSet = [tab1, tab2, tab3];
    panels = [panel1, panel2, panel3];
  });

  it(`should retreat the active tab to the previous one, if its not the first
  in the list`, () => {
    tab2.click();
    retreatTab(tabsSet, panels, 'sprk-c-Tabs__button--active');
    expect(tab1.classList.contains('sprk-c-Tabs__button--active')).toBe(true);
  });
});

describe('getActiveTabIndex tests', () => {
  let tabContainer;
  let tab1;
  let tab2;
  let tab3;

  let tabsSet;

  beforeEach(() => {
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

    tabsSet = [tab1, tab2, tab3];
  });

  it('should return null when there are no tabs active', () => {
    expect(getActiveTabIndex(tabsSet, 'sprk-c-Tabs__button--active')).toBe(
      null,
    );
  });

  it('should return the correct index when a tab is active', () => {
    tab2.classList.add('sprk-c-Tabs__button--active');
    expect(getActiveTabIndex(tabsSet, 'sprk-c-Tabs__button--active')).toBe(1);
  });
});
