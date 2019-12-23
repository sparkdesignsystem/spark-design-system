/* global it, expect, jest */
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkDropdown from './SprkDropdown';

Enzyme.configure({ adapter: new Adapter() });

it('SprkDropdown: Should render a trigger with the correct classes', () => {
  const wrapper = mount(<SprkDropdown />);
  expect(wrapper.find('.sprk-b-Link').length).toBe(1);
});

it('SprkDropdown: Should render a footer if supplied with the choices', () => {
  const choices = {
    footer: <p>hi</p>,
    items: [
      { text: 'Item 1', value: 'item-1' },
      { text: 'Item 2', value: 'item-2' },
    ],
  };
  const wrapper = mount(<SprkDropdown choices={choices} />);
  wrapper.find('.sprk-b-Link').simulate('click');
  expect(wrapper.find('.sprk-c-Dropdown__footer').length).toBe(1);
});

it('SprkDropdown: Should add classes to the dropdown when additionalClasses has a value', () => {
  const wrapper = mount(<SprkDropdown additionalClasses="sprk-u-man" />);
  wrapper.find('.sprk-b-Link').simulate('click');
  expect(wrapper.find('.sprk-c-Dropdown.sprk-u-man').length).toBe(1);
});

it('SprkDropdown: Should add classes to the icon when additionalIconClasses has a value', () => {
  const wrapper = mount(
    <SprkDropdown additionalIconClasses="sprk-c-Icon--l" />,
  );
  expect(wrapper.find('.sprk-c-Icon.sprk-c-Icon--l').length).toBe(1);
});

it('SprkDropdown: Should add classes to the trigger when additionalTriggerClasses has a value', () => {
  const wrapper = mount(<SprkDropdown additionalTriggerClasses="sprk-u-man" />);
  expect(wrapper.find('.sprk-b-Link.sprk-u-man').length).toBe(1);
});

it('SprkDropdown: Should add classes to the trigger text when additionalTriggerTextClasses has a value', () => {
  const wrapper = mount(
    <SprkDropdown additionalTriggerTextClasses="sprk-u-man" />,
  );
  expect(wrapper.find('span.sprk-u-man').length).toBe(1);
});

it('SprkDropdown: Should assign data-analytics when analyticsString has a value', () => {
  const wrapper = mount(<SprkDropdown analyticsString="321" />);
  expect(wrapper.find('[data-analytics="321"]').length).toBe(2);
});

it('SprkDropdown: Should assign data-id when idString has a value', () => {
  const wrapper = mount(<SprkDropdown idString="321" />);
  expect(wrapper.find('[data-id="321"]').length).toBe(2);
});

it('SprkDropdown: Should assign screen reader text to the trigger for base dropdowns', () => {
  const wrapper = mount(<SprkDropdown screenReaderText="test" />);
  expect(wrapper.find('.sprk-u-ScreenReaderText').text()).toBe('test');
});

it('SprkDropdown: Should assign the choices header when title has a value', () => {
  const wrapper = mount(<SprkDropdown title="My Choices" />);
  wrapper.find('.sprk-b-Link').simulate('click');
  expect(wrapper.find('.sprk-c-Dropdown__header').text()).toBe('My Choices');
});

it('SprkDropdown: Should build the correct number of choices from a choices object', () => {
  const choices = {
    items: [
      { text: 'Item 1', value: 'item-1' },
      { text: 'Item 2', value: 'item-2' },
    ],
  };
  const wrapper = mount(<SprkDropdown choices={choices} />);
  wrapper.find('.sprk-b-Link').simulate('click');
  expect(wrapper.find('.sprk-c-Dropdown__link').length).toBe(2);
});

it('SprkDropdown: Should run the choiceFunction supplied with the list of choices (base)', () => {
  const spyFunc = jest.fn();
  const choices = {
    choiceFunction: spyFunc,
    items: [
      { text: 'Item 1', value: 'item-1' },
      { text: 'Item 2', value: 'item-2' },
    ],
  };
  const wrapper = mount(<SprkDropdown choices={choices} />);
  wrapper.find('.sprk-b-Link').simulate('click');
  wrapper
    .find('.sprk-c-Dropdown__link')
    .first()
    .simulate('click');
  expect(spyFunc.mock.calls.length).toBe(1);
});

it('SprkDropdown: Should not error if choiceFunction is supplied but undefined (base)', () => {
  const choices = {
    choiceFunction: undefined,
    items: [
      { text: 'Item 1', value: 'item-1' },
      { text: 'Item 2', value: 'item-2' },
    ],
  };
  const wrapper = mount(<SprkDropdown choices={choices} />);
  wrapper.find('.sprk-b-Link').simulate('click');
  wrapper
    .find('.sprk-c-Dropdown__link')
    .first()
    .simulate('click');
});

it('SprkDropdown: Should run the choiceFunction supplied with the list of choices (informational)', () => {
  const spyFunc = jest.fn();
  const choices = {
    choiceFunction: spyFunc,
    items: [{ text: 'Item 1', value: 'item-1', content: { title: 'Item 1' } }],
  };
  const wrapper = mount(
    <SprkDropdown choices={choices} variant="informational" />,
  );
  wrapper.find('.sprk-b-Link').simulate('click');
  wrapper
    .find('.sprk-c-Dropdown__link')
    .first()
    .simulate('click');
  expect(spyFunc.mock.calls.length).toBe(1);
});

it('SprkDropdown: Should not error if choiceFunction is supplied but undefined (informational)', () => {
  const choices = {
    choiceFunction: undefined,
    items: [{ text: 'Item 1', value: 'item-1', content: { title: 'Item 1' } }],
  };
  const wrapper = mount(
    <SprkDropdown choices={choices} variant="informational" />,
  );
  wrapper.find('.sprk-b-Link').simulate('click');
  wrapper
    .find('.sprk-c-Dropdown__link')
    .first()
    .simulate('click');
});

it('SprkDropdown: Should close the dropdown on click outside', () => {
  const choices = {
    items: [{ text: 'Item 1', value: 'item-1' }],
  };

  const wrapper = mount(<SprkDropdown choices={choices} />);
  const linkWrapper = wrapper.find('.sprk-b-Link').simulate('click');
  expect(wrapper.state().isOpen).toBe(true);
  wrapper.instance().closeOnClickOutside({ target: linkWrapper.instance() });
  expect(wrapper.state().isOpen).toBe(true);
  wrapper.instance().closeOnClickOutside({});
  expect(wrapper.state().isOpen).toBe(false);
});

it('SprkDropdown: Should close the dropdown on keydown (Escape)', () => {
  const choices = {
    items: [{ text: 'Item 1', value: 'item-1' }],
  };

  const wrapper = mount(<SprkDropdown choices={choices} />);
  wrapper.find('.sprk-b-Link').simulate('click');
  expect(wrapper.state().isOpen).toBe(true);
  wrapper.instance().closeOnEsc({ key: 'Delete' });
  expect(wrapper.state().isOpen).toBe(true);
  wrapper.instance().closeOnEsc({ key: 'Escape' });
  expect(wrapper.state().isOpen).toBe(false);
});

it('SprkDropdown: Should unmount without error', () => {
  const wrapper = mount(<SprkDropdown />);
  expect(wrapper.find('.sprk-b-Link').length).toBe(1);
  wrapper.unmount();
  expect(wrapper.find('.sprk-b-Link').length).toBe(0);
});

it('SprkDropdown: Should render the choices with the element specified', () => {
  const wrapper = mount(
    <SprkDropdown choices={{ items: [{ element: 'p', text: 'Item 1' }] }} />,
  );
  expect(wrapper.find('.sprk-b-Link').length).toBe(1);
  wrapper.find('.sprk-b-Link').simulate('click');
  expect(wrapper.find('p.sprk-c-Dropdown__link').length).toBe(1);
});

it('SprkDropdown: Should pass unused keys on choice items through to the dom', () => {
  const wrapper = mount(
    <SprkDropdown
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

it('SprkDropdown: Should not set href if the supplied tagname is not a', () => {
  const wrapper = mount(
    <SprkDropdown
      variant="informational"
      choices={{
        items: [
          { element: 'span', text: 'Item 1', content: { title: 'Item 1' } },
        ],
      }}
    />,
  );
  expect(wrapper.find('.sprk-b-Link').length).toBe(1);
  wrapper.find('.sprk-b-Link').simulate('click');
  expect(wrapper.find('span.sprk-c-Dropdown__link').length).toBe(1);
  expect(
    wrapper
      .find('span.sprk-c-Dropdown__link')
      .instance()
      .getAttribute('href'),
  ).toBe(null);
});

it('SprkDropdown: Should choose correct aria-label text if defaultTriggerText is provided.', () => {
  const wrapper = mount(
    <SprkDropdown
      defaultTriggerText="test"
      variant="informational"
      choices={{
        items: [
          { content: { title: 'Item 1' } },
        ],
      }}
    />,
  );
  expect(
    wrapper
      .find('.sprk-b-Link')
      .instance()
      .getAttribute('aria-label'),
  ).toBe('test');
});

it('SprkDropdown: Should apply default aria-label if defaultTriggerText is not provided.', () => {
  const wrapper = mount(
    <SprkDropdown
      variant="informational"
      choices={{
        items: [
          { content: { title: 'Item 1' } },
        ],
      }}
    />,
  );
  wrapper.find('.sprk-b-Link').simulate('click');
  expect(
    wrapper
      .find('.sprk-b-Link')
      .instance()
      .getAttribute('aria-label'),
  ).toBe('Choose One...');
});

it('SprkDropdown: Should default to correct aria-label if screenReaderText is provided.', () => {
  const choices = {
    items: [
      { text: 'Item 1', value: 'item-1' },
    ],
  };

  const wrapper = mount(<SprkDropdown choices={choices} screenReaderText="Dropdown description"/>);

  expect(
    wrapper
      .find('.sprk-b-Link')
      .instance()
      .getAttribute('aria-label'),
  ).toBe('Dropdown description');
});

it('SprkDropdown: Should default to correct aria-label if screenReaderText is not provided.', () => {
  const choices = {
    items: [
      { text: 'Item 1', value: 'item-1' },
    ],
  };

  const wrapper = mount(<SprkDropdown choices={choices} />);

  expect(
    wrapper
      .find('.sprk-b-Link')
      .instance()
      .getAttribute('aria-label'),
  ).toBe('Choose One...');
});

it('SprkDropdown: Should apply aria-label to listbox when title is provided', () => {
  const wrapper = mount(<SprkDropdown title="test"/>);
  wrapper.find('.sprk-b-Link').simulate('click');
  expect(
    wrapper
      .find('ul')
      .instance()
      .getAttribute('aria-label'),
  ).toBe('test');
});

it('SprkDropdown: Should apply aria-label to listbox when there is no title but screenReaderText is provided', () => {
  const wrapper = mount(<SprkDropdown screenReaderText="test"/>);
  wrapper.find('.sprk-b-Link').simulate('click');
  expect(
    wrapper
      .find('ul')
      .instance()
      .getAttribute('aria-label'),
  ).toBe('test');
});

it('SprkDropdown: Should apply default aria-label to listbox when neither title nor screenReaderText is provided', () => {
  const wrapper = mount(<SprkDropdown />);
  wrapper.find('.sprk-b-Link').simulate('click');
  expect(
    wrapper
      .find('ul')
      .instance()
      .getAttribute('aria-label'),
  ).toBe('My Choices');
});