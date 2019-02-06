/* global it expect describe */
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkTabs from '../../SprkTabs';
import SprkTabsPanel from './SprkTabsPanel';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkTabs Component', () => {
  it('should display a Tab Panel element with the correct base class', () => {
    const wrapper = mount(
      <SprkTabs>
        <SprkTabsPanel tabBtnChildren="Tab 1">Test Content 1</SprkTabsPanel>
        <SprkTabsPanel tabBtnChildren="Tab 2">Test Content 2</SprkTabsPanel>
      </SprkTabs>,
    );
    expect(wrapper.find('.sprk-c-Tabs__content').length).toBe(2);
  });
});
