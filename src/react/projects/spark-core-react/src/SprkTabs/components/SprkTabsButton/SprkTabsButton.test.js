/* global it expect describe */
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkTabs from '../../SprkTabs';
import SprkTabsPanel from '../SprkTabsPanel/SprkTabsPanel';
import SprkTabsButton from './SprkTabsButton';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkTabs Component', () => {
  it('should display a Tab Button element with the correct base class', () => {
    const wrapper = mount(
      <SprkTabs>
        <SprkTabsPanel tabBtnChildren="Tab 1">Test Content 1</SprkTabsPanel>
        <SprkTabsPanel tabBtnChildren="Tab 2">Test Content 2</SprkTabsPanel>
      </SprkTabs>,
    );
    expect(wrapper.find('.sprk-c-Tabs__button').length).toBe(2);
  });

  it('should focus the next Tab Button when the right arrow key is pressed', () => {
    const wrapper = mount(
      <SprkTabs>
        <SprkTabsPanel isDefaultActive tabBtnChildren="Tab 1">Test Content 1</SprkTabsPanel>
        <SprkTabsPanel tabBtnChildren="Tab 2">Test Content 2</SprkTabsPanel>
      </SprkTabs>,
    );
    // First, tab into the Tab Button area
    wrapper.find('div.sprk-c-Tabs__buttons').simulate('keydown', { keyCode: 9 });
    // Second, hit the right arrow key
    wrapper.find('div.sprk-c-Tabs__buttons').simulate('keydown', { keyCode: 39 });
    const button = wrapper.find(SprkTabsButton).last();
    expect(button.getDOMNode().classList.contains('sprk-c-Tabs__button--active')).toBe(true);
  });
});
