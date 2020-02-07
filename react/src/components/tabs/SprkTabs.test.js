/* global it expect describe Event */
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkTabs from './SprkTabs';
import SprkTabsPanel from './components/SprkTabsPanel/SprkTabsPanel';
import SprkTabsButton from './components/SprkTabsButton/SprkTabsButton';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkTabs:', () => {
  it('should display a Tab element with the correct base class', () => {
    const wrapper = mount(
      <SprkTabs>
        <SprkTabsPanel tabBtnChildren="Tab 1">Test Content 1</SprkTabsPanel>
        <SprkTabsPanel tabBtnChildren="Tab 2">Test Content 2</SprkTabsPanel>
      </SprkTabs>,
    );
    expect(wrapper.find('.sprk-c-Tabs').length).toBe(1);
  });

  it('should display a Tab panel element with the correct base class', () => {
    const wrapper = mount(
      <SprkTabs>
        <SprkTabsPanel tabBtnChildren="Tab 1">Test Content 1</SprkTabsPanel>
        <SprkTabsPanel tabBtnChildren="Tab 2">Test Content 2</SprkTabsPanel>
      </SprkTabs>,
    );
    expect(wrapper.find(SprkTabsPanel).length).toBe(2);
  });

  it('should display a Tab Button for each Tab Panel found in Tabs component', () => {
    const wrapper = mount(
      <SprkTabs>
        <SprkTabsPanel tabBtnChildren="Tab 1">Test Content 1</SprkTabsPanel>
        <SprkTabsPanel tabBtnChildren="Tab 2">Test Content 2</SprkTabsPanel>
        <SprkTabsPanel tabBtnChildren="Tab 3">Test Content 3</SprkTabsPanel>
        <SprkTabsPanel tabBtnChildren="Tab 4">Test Content 4</SprkTabsPanel>
      </SprkTabs>,
    );
    expect(wrapper.find('div.sprk-c-Tabs__content').length).toBe(4);
    expect(wrapper.find('button.sprk-c-Tabs__button').length).toBe(4);
  });

  it('should give each Tab Panel a unique ID', () => {
    const wrapper = mount(
      <SprkTabs>
        <SprkTabsPanel tabBtnChildren="Tab 1">Test Content 1</SprkTabsPanel>
        <SprkTabsPanel tabBtnChildren="Tab 2">Test Content 2</SprkTabsPanel>
      </SprkTabs>,
    );
    const panel1Id = wrapper.find(SprkTabsPanel).first().props().tabBtnId;
    const panel2Id = wrapper.find(SprkTabsPanel).last().props().tabBtnId;
    expect(panel2Id).not.toBe(panel1Id);
  });

  it('should give each Tab Button a unique ID', () => {
    const wrapper = mount(
      <SprkTabs>
        <SprkTabsPanel tabBtnChildren="Tab 1">Test Content 1</SprkTabsPanel>
        <SprkTabsPanel tabBtnChildren="Tab 2">Test Content 2</SprkTabsPanel>
      </SprkTabs>,
    );

    const btn1Id = wrapper.find('button.sprk-c-Tabs__button').first().props().id;
    const btnl2Id = wrapper.find('button.sprk-c-Tabs__button').last().props().id;
    expect(btnl2Id).not.toBe(btn1Id);
  });

  it('should show the Tab Panel content for the tab button that was clicked', () => {
    const wrapper = mount(
      <SprkTabs>
        <SprkTabsPanel tabBtnClickFunc={() => {}} tabBtnChildren="Tab 1">Test Content 1</SprkTabsPanel>
        <SprkTabsPanel tabBtnChildren="Tab 2">Test Content 2</SprkTabsPanel>
      </SprkTabs>,
    );

    wrapper.find('button.sprk-c-Tabs__button').first().simulate('click');
    const panel = wrapper.find(SprkTabsPanel).first();
    expect(panel.hasClass('sprk-u-Display--none')).toBe(false);
  });

  it('should hide the Tab Panel if that tab is not active', () => {
    const wrapper = mount(
      <SprkTabs>
        <SprkTabsPanel tabBtnChildren="Tab 1">Test Content 1</SprkTabsPanel>
        <SprkTabsPanel tabBtnChildren="Tab 2">Test Content 2</SprkTabsPanel>
      </SprkTabs>,
    );

    wrapper.find('button.sprk-c-Tabs__button').first().simulate('click');
    const panel = wrapper.find(SprkTabsPanel).last();
    expect(panel.getDOMNode().classList.contains('sprk-u-Display--none')).toBe(true);
  });

  it('should show the Tab panel with isDefaultActive', () => {
    const wrapper = mount(
      <SprkTabs>
        <SprkTabsPanel isDefaultActive tabBtnChildren="Tab 1">Test Content 1</SprkTabsPanel>
        <SprkTabsPanel tabBtnChildren="Tab 2">Test Content 2</SprkTabsPanel>
      </SprkTabs>,
    );

    const panel = wrapper.find(SprkTabsPanel).first();
    expect(panel.getDOMNode().classList.contains('sprk-u-Display--none')).toBe(false);
  });

  it('should focus the first tab when the left key is pressed while on the last tab', () => {
    const wrapper = mount(
      <SprkTabs>
        <SprkTabsPanel tabBtnChildren="Tab 1">Test Content 1</SprkTabsPanel>
        <SprkTabsPanel isDefaultActive tabBtnChildren="Tab 2">Test Content 2</SprkTabsPanel>
      </SprkTabs>,
    );
    // First, tab into the Tab Button area
    wrapper.find('div.sprk-c-Tabs__buttons').simulate('keydown', { keyCode: 9 });
    wrapper.find('div.sprk-c-Tabs__buttons').simulate('keydown', { keyCode: 37 });
    const button = wrapper.find(SprkTabsButton).first();
    expect(button.getDOMNode().classList.contains('sprk-c-Tabs__button--active')).toBe(true);
  });

  it('should focus the last Tab Button when the end key is pressed', () => {
    const wrapper = mount(
      <SprkTabs>
        <SprkTabsPanel isDefaultActive tabBtnChildren="Tab 1">Test Content 1</SprkTabsPanel>
        <SprkTabsPanel tabBtnChildren="Tab 2">Test Content 2</SprkTabsPanel>
      </SprkTabs>,
    );
    // First, tab into the Tab Button area
    wrapper.find('div.sprk-c-Tabs__buttons').simulate('keydown', { keyCode: 9 });
    // Second, hit the end key
    wrapper.find('div.sprk-c-Tabs__buttons').simulate('keydown', { keyCode: 35 });
    const button = wrapper.find(SprkTabsButton).last();
    expect(button.getDOMNode().classList.contains('sprk-c-Tabs__button--active')).toBe(true);
  });

  it('should focus the first Tab Button when the home key is pressed', () => {
    const wrapper = mount(
      <SprkTabs>
        <SprkTabsPanel isDefaultActive tabBtnChildren="Tab 1">Test Content 1</SprkTabsPanel>
        <SprkTabsPanel tabBtnChildren="Tab 2">Test Content 2</SprkTabsPanel>
      </SprkTabs>,
    );
    // First, tab into the Tab Button area
    wrapper.find('div.sprk-c-Tabs__buttons').simulate('keydown', { keyCode: 9 });
    // Second, hit the home key
    wrapper.find('div.sprk-c-Tabs__buttons').simulate('keydown', { keyCode: 36 });
    const button = wrapper.find(SprkTabsButton).first();
    expect(button.getDOMNode().classList.contains('sprk-c-Tabs__button--active')).toBe(true);
  });

  it('should add the aria-orientation attribute when page loads', () => {
    const wrapper = mount(
      <SprkTabs>
        <SprkTabsPanel tabBtnChildren="Tab 1">Test Content 1</SprkTabsPanel>
        <SprkTabsPanel tabBtnChildren="Tab 1">Test Content 1</SprkTabsPanel>
      </SprkTabs>,
    );
    expect(wrapper.find('div.sprk-c-Tabs').getDOMNode().hasAttribute('aria-orientation')).toBe(true);
  });

  it('should move back to the previous tab at the end of the tablist if the first tab is selected', () => {
    const wrapper = mount(
      <SprkTabs>
        <SprkTabsPanel tabBtnChildren="Tab 1">Test Content 1</SprkTabsPanel>
        <SprkTabsPanel tabBtnChildren="Tab 1">Test Content 1</SprkTabsPanel>
      </SprkTabs>,
    );
    const instance = wrapper.instance();
    instance.retreatTab();
    const button = wrapper.find(SprkTabsButton).last();
    expect(button.getDOMNode().classList.contains('sprk-c-Tabs__button--active')).toBe(true);
  });

  it('should move back to the previous tab', () => {
    const wrapper = mount(
      <SprkTabs>
        <SprkTabsPanel tabBtnChildren="Tab 1">Test Content 1</SprkTabsPanel>
        <SprkTabsPanel isDefaultActive tabBtnChildren="Tab 1">Test Content 1</SprkTabsPanel>
        <SprkTabsPanel tabBtnChildren="Tab 1">Test Content 1</SprkTabsPanel>
      </SprkTabs>,
    );
    const instance = wrapper.instance();
    instance.retreatTab();
    const button = wrapper.find(SprkTabsButton).first();
    expect(button.getDOMNode().classList.contains('sprk-c-Tabs__button--active')).toBe(true);
  });

  it('should move to the next tab', () => {
    const wrapper = mount(
      <SprkTabs>
        <SprkTabsPanel tabBtnChildren="Tab 1">Test Content 1</SprkTabsPanel>
        <SprkTabsPanel tabBtnChildren="Tab 1">Test Content 1</SprkTabsPanel>
      </SprkTabs>,
    );
    const instance = wrapper.instance();
    instance.advanceTab();
    const button = wrapper.find(SprkTabsButton).last();
    expect(button.getDOMNode().classList.contains('sprk-c-Tabs__button--active')).toBe(true);
  });

  it('should move to the first tab when the right key is pressed on the last tab', () => {
    const wrapper = mount(
      <SprkTabs>
        <SprkTabsPanel tabBtnChildren="Tab 1">Test Content 1</SprkTabsPanel>
        <SprkTabsPanel isDefaultActive tabBtnChildren="Tab 1">Test Content 1</SprkTabsPanel>
      </SprkTabs>,
    );
    const instance = wrapper.instance();
    instance.advanceTab();
    const button = wrapper.find(SprkTabsButton).first();
    expect(button.getDOMNode().classList.contains('sprk-c-Tabs__button--active')).toBe(true);
  });

  it('should get the active tab index', () => {
    const wrapper = mount(
      <SprkTabs>
        <SprkTabsPanel tabBtnChildren="Tab 1">Test Content 1</SprkTabsPanel>
        <SprkTabsPanel tabBtnChildren="Tab 1">Test Content 1</SprkTabsPanel>
      </SprkTabs>,
    );
    const instance = wrapper.instance();
    const index = instance.getActiveTabIndex();
    expect(index).toEqual(0);
  });

  it('should set the aria-orientation to vertical when the window size is less than the breakpoint', () => {
    const wrapper = mount(
      <SprkTabs>
        <SprkTabsPanel tabBtnChildren="Tab 1">Test Content 1</SprkTabsPanel>
        <SprkTabsPanel tabBtnChildren="Tab 1">Test Content 1</SprkTabsPanel>
      </SprkTabs>,
    );
    global.innerWidth = 320;
    global.dispatchEvent(new Event('resize'));
    expect(wrapper.find('.sprk-c-Tabs').getDOMNode().getAttribute('aria-orientation')).toEqual('vertical');
  });

  it('should not create a tab button for an element inside Tabs that is not a SprkTabsPanel', () => {
    const wrapper = mount(
      <SprkTabs>
        <SprkTabsPanel tabBtnChildren="Tab 1">Test Content 1</SprkTabsPanel>
        <p>This is not a panel.</p>
        <SprkTabsPanel tabBtnChildren="Tab 1">Test Content 1</SprkTabsPanel>
      </SprkTabs>,
    );
    expect(wrapper.find('p').length).toBe(0);
  });
});
