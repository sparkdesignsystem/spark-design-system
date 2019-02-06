/* global it expect describe */
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkTabs from './SprkTabs';
import SprkTabsPanel from './components/SprkTabsPanel/SprkTabsPanel';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkTabs Component', () => {
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
        <SprkTabsPanel tabBtnChildren="Tab 1">Test Content 1</SprkTabsPanel>
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
});
