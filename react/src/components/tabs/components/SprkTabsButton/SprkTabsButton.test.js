/* global it expect describe document jest */
import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkTabs from '../../SprkTabs';
import SprkTabsPanel from '../SprkTabsPanel/SprkTabsPanel';
import SprkTabsButton from './SprkTabsButton';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkTabsButton:', () => {
  it('should display a Tab Button element with the correct base class', () => {
    const wrapper = shallow(<SprkTabsButton tabBtnChildren="Tab 1" tabBtnId="tab-22">Test Content 1</SprkTabsButton>);
    expect(wrapper.find('.sprk-c-Tabs__button').length).toBe(1);
  });

  it('should have the active class if isActive is true', () => {
    const wrapper = shallow(<SprkTabsButton tabBtnChildren="Tab 1" isActive tabBtnId="tab-22">Test Content 1</SprkTabsButton>);
    expect(wrapper.find('.sprk-c-Tabs__button--active').length).toBe(1);
  });

  it('should focus if isFocused is updated to true', () => {
    const wrapper = mount(<SprkTabsButton tabBtnChildren="Tab 1" isFocused={false} tabBtnId="tab-52">Test Content 1</SprkTabsButton>);
    expect(document.activeElement.classList.contains('sprk-c-Tabs__button')).toBe(false);
    wrapper.setProps({ isFocused: true });
    expect(document.activeElement.classList.contains('sprk-c-Tabs__button')).toBe(true);
  });

  it('should not focus if isFocused is updated to false', () => {
    const wrapper = mount(<SprkTabsButton tabBtnChildren="Tab 1" isFocused tabBtnId="tab-52" tabBtnAddClasses="test">Test Content 1</SprkTabsButton>);
    const wrapper2 = mount(<SprkTabsButton tabBtnChildren="Tab 1" tabBtnId="tab-52">Test Content 1</SprkTabsButton>);
    wrapper.setProps({ isFocused: false });
    wrapper2.setProps({ isFocused: true });
    expect(document.activeElement.classList.contains('test')).toBe(false);
  });

  it('should add classes when tabBtnAddClasses has a value', () => {
    const wrapper = mount(<SprkTabsButton tabBtnChildren="Tab 1" isFocused tabBtnId="tab-52" tabBtnAddClasses="test">Test Content 1</SprkTabsButton>);
    wrapper.find('.sprk-c-Tabs__button').simulate('click');
    expect(wrapper.find('.sprk-c-Tabs__button.test').length).toBe(1);
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
