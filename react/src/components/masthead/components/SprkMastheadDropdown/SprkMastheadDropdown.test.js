/* global it expect */
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkMastheadDropdown from './SprkMastheadDropdown';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkMastheadDropdown:', () => {
  it('should render a trigger with the correct classes', () => {
    const wrapper = mount(<SprkMastheadDropdown />);
    expect(wrapper.find('.sprk-b-Link').length).toBe(1);
  });

  it('should add classes to the dropdown when additionalClasses has a value', () => {
    const wrapper = mount(
      <SprkMastheadDropdown additionalClasses="sprk-u-man" />,
    );
    wrapper.find('.sprk-b-Link').simulate('click');
    expect(wrapper.find('.sprk-c-Dropdown.sprk-u-man').length).toBe(1);
  });

  it('should add classes to the icon when additionalIconClasses has a value', () => {
    const wrapper = mount(
      <SprkMastheadDropdown additionalIconClasses="sprk-c-Icon--l" />,
    );
    expect(wrapper.find('.sprk-c-Icon.sprk-c-Icon--l').length).toBe(1);
  });

  it('should add classes to the trigger when additionalTriggerClasses has a value', () => {
    const wrapper = mount(
      <SprkMastheadDropdown additionalTriggerClasses="sprk-u-man" />,
    );
    expect(wrapper.find('.sprk-b-Link.sprk-u-man').length).toBe(1);
  });

  it('should add classes to the trigger text when additionalTriggerTextClasses has a value', () => {
    const wrapper = mount(
      <SprkMastheadDropdown additionalTriggerTextClasses="sprk-u-man" />,
    );
    expect(wrapper.find('span.sprk-u-man').length).toBe(1);
  });

  it('should assign data-analytics when analyticsString has a value', () => {
    const wrapper = mount(<SprkMastheadDropdown analyticsString="321" />);
    expect(wrapper.find('[data-analytics="321"]').length).toBe(2);
  });

  it('should assign data-id when idString has a value', () => {
    const wrapper = mount(<SprkMastheadDropdown idString="321" />);
    expect(wrapper.find('[data-id="321"]').length).toBe(2);
  });

  it('should assign the choices header when title has a value', () => {
    const wrapper = mount(<SprkMastheadDropdown title="My Choices" />);
    wrapper.find('.sprk-b-Link').simulate('click');
    expect(wrapper.find('.sprk-c-Dropdown__header').text()).toBe('My Choices');
  });

  it('should build the correct number of choices from a choices object', () => {
    const choices = {
      items: [
        { text: 'Item 1', value: 'item-1' },
        { text: 'Item 2', value: 'item-2' },
      ],
    };
    const wrapper = mount(<SprkMastheadDropdown choices={choices} />);
    wrapper.find('.sprk-b-Link').simulate('click');
    expect(wrapper.find('.sprk-c-Dropdown__link').length).toBe(2);
  });

  it('should close the dropdown on click outside', () => {
    const choices = {
      items: [{ text: 'Item 1', value: 'item-1' }],
    };

    const wrapper = mount(<SprkMastheadDropdown choices={choices} />);
    const linkWrapper = wrapper.find('.sprk-b-Link').simulate('click');
    expect(wrapper.state().isOpen).toBe(true);
    wrapper.instance().closeOnClickOutside({ target: linkWrapper.instance() });
    expect(wrapper.state().isOpen).toBe(true);
    wrapper.instance().closeOnClickOutside({});
    expect(wrapper.state().isOpen).toBe(false);
  });

  it('should close the dropdown on keydown (Escape)', () => {
    const choices = {
      items: [{ text: 'Item 1', value: 'item-1' }],
    };

    const wrapper = mount(<SprkMastheadDropdown choices={choices} />);
    wrapper.find('.sprk-b-Link').simulate('click');
    expect(wrapper.state().isOpen).toBe(true);
    wrapper.instance().closeOnEsc({ key: 'Delete' });
    expect(wrapper.state().isOpen).toBe(true);
    wrapper.instance().closeOnEsc({ key: 'Escape' });
    expect(wrapper.state().isOpen).toBe(false);
  });

  it('should unmount without error', () => {
    const wrapper = mount(<SprkMastheadDropdown />);
    expect(wrapper.find('.sprk-b-Link').length).toBe(1);
    wrapper.unmount();
    expect(wrapper.find('.sprk-b-Link').length).toBe(0);
  });

  it('should render the choices with the element specified', () => {
    const wrapper = mount(
      <SprkMastheadDropdown
        choices={{ items: [{ element: 'p', text: 'Item 1' }] }}
      />,
    );
    expect(wrapper.find('.sprk-b-Link').length).toBe(1);
    wrapper.find('.sprk-b-Link').simulate('click');
    expect(wrapper.find('p.sprk-c-Dropdown__link').length).toBe(1);
  });

  it('should pass unused keys on choice items through to the dom', () => {
    const wrapper = mount(
      <SprkMastheadDropdown
        choices={{
          items: [{ element: 'p', text: 'Item 1', 'aria-hidden': 'true' }],
        }}
      />,
    );
    expect(wrapper.find('.sprk-b-Link').length).toBe(1);
    wrapper.find('.sprk-b-Link').simulate('click');
    expect(
      wrapper.find('.sprk-c-Dropdown__link[aria-hidden="true"]').length,
    ).toBe(1);
  });
});
