import React from 'react';
import Enzyme, { mount, unmount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkDropdown from './SprkDropdown';

Enzyme.configure({ adapter: new Adapter() });

it('should render a trigger with the correct classes', () => {
  const wrapper = mount(<SprkDropdown />);
  expect(wrapper.find('.sprk-b-Link').length).toBe(1);
});

it('should add classes to the dropdown when additionalClasses has a value', () => {
  const wrapper = mount(<SprkDropdown additionalClasses="sprk-u-man" />);
  wrapper.find('.sprk-b-Link').simulate('click');
  expect(wrapper.find('.sprk-c-Dropdown.sprk-u-man').length).toBe(1);
});

it('should add classes to the icon when additionalIconClasses has a value', () => {
  const wrapper = mount(<SprkDropdown additionalIconClasses="sprk-c-Icon--l" />);
  expect(wrapper.find('.sprk-c-Icon.sprk-c-Icon--l').length).toBe(1);
});

it('should add classes to the trigger when additionalTriggerClasses has a value', () => {
  const wrapper = mount(<SprkDropdown additionalTriggerClasses="sprk-u-man" />);
  expect(wrapper.find('.sprk-b-Link.sprk-u-man').length).toBe(1);
});

it('should add classes to the trigger text when additionalTriggerTextClasses has a value', () => {
  const wrapper = mount(<SprkDropdown additionalTriggerTextClasses="sprk-u-man" />);
  expect(wrapper.find('span.sprk-u-man').length).toBe(1);
});

it('should assign data-analytics when analyticsString has a value', () => {
  const wrapper = mount(<SprkDropdown analyticsString="321" />);
  expect(wrapper.find('[data-analytics="321"]').length).toBe(1);
});

it('should assign data-id when idString has a value', () => {
  const wrapper = mount(<SprkDropdown idString="321" />);
  expect(wrapper.find('[data-id="321"]').length).toBe(1);
});

it('should assign screen reader text to the trigger for base dropdowns', () => {
  const wrapper = mount(<SprkDropdown screenReaderText="test" />);
  expect(wrapper.find('.sprk-u-ScreenReaderText').text()).toBe("test");
});

it('should assign the choices header when title has a value', () => {
  const wrapper = mount(<SprkDropdown title="My Choices" />);
  wrapper.find('.sprk-b-Link').simulate('click');
  expect(wrapper.find('.sprk-c-Dropdown__header').text()).toBe("My Choices");
});

it('should build the correct number of choices from a choices object', () => {
  const choices = {items: [{text: 'Item 1', value: 'item-1'}, {text: 'Item 2', value: 'item-2'}]};
  const wrapper = mount(<SprkDropdown choices={choices} />);
  wrapper.find('.sprk-b-Link').simulate('click');
  expect(wrapper.find('.sprk-c-Dropdown__link').length).toBe(2);
});

it('should run the choiceFunction supplied with the list of choices (base)', () => {
  const spyFunc = jest.fn();
  const choices = {choiceFunction: spyFunc, items: [{text: 'Item 1', value: 'item-1'}, {text: 'Item 2', value: 'item-2'}]};
  const wrapper = mount(<SprkDropdown choices={choices} />);
  wrapper.find('.sprk-b-Link').simulate('click');
  wrapper.find('.sprk-c-Dropdown__link').first().simulate('click');
  expect(spyFunc.mock.calls.length).toBe(1);
});

it('should run the choiceFunction supplied with the list of choices (informational)', () => {
  const spyFunc = jest.fn();
  const choices = {choiceFunction: spyFunc, items: [{text: 'Item 1', value: 'item-1', content: { title: 'Item 1' } }]};
  const wrapper = mount(<SprkDropdown choices={choices} variant="informational" />);
  wrapper.find('.sprk-b-Link').simulate('click');
  wrapper.find('.sprk-c-Dropdown__link').first().simulate('click');
  expect(spyFunc.mock.calls.length).toBe(1);
});

it('should close the dropdown on click outside', () => {
  const map = {};
  window.addEventListener = jest.fn().mockImplementation((event, cb) => {
    map[event] = cb;
  });

  const choices = {items: [{text: 'Item 1', value: 'item-1'}, {text: 'Item 2', value: 'item-2'}]};
  const wrapper = mount(<SprkDropdown choices={choices} />)

  wrapper.find('.sprk-b-Link').simulate('click');
  expect(wrapper.state().isOpen).toBe(true);
  map.click({});
  expect(wrapper.state().isOpen).toBe(false);
})

it('should close the dropdown on keydown (Escape)', () => {
  const map = {};
  window.addEventListener = jest.fn().mockImplementation((event, cb) => {
    map[event] = cb;
  });

  const choices = {items: [{text: 'Item 1', value: 'item-1'}, {text: 'Item 2', value: 'item-2'}]};
  const wrapper = mount(<SprkDropdown choices={choices} />)

  wrapper.find('.sprk-b-Link').simulate('click');
  expect(wrapper.state().isOpen).toBe(true);
  map.keydown({key: 'Escape'});
  expect(wrapper.state().isOpen).toBe(false);
})

it('should unmount without error', () => {
  const wrapper = mount(<SprkDropdown />);
  expect(wrapper.find('.sprk-b-Link').length).toBe(1);
  wrapper.unmount();
  expect(wrapper.find('.sprk-b-Link').length).toBe(0);
});
