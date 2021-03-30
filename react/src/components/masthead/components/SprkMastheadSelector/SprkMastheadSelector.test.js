/* global it expect jest */
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkMastheadSelector from './SprkMastheadSelector';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkMastheadSelector:', () => {
  it('should render a trigger with the correct classes', () => {
    const choices = {
      items: [
        { text: 'Item 1', value: 'item-1' },
        { text: 'Item 2', value: 'item-2' },
      ],
    };
    const wrapper = mount(<SprkMastheadSelector choices={choices} />);
    expect(wrapper.find('.sprk-b-Link').length).toBe(1);
  });

  it('should render a footer if supplied with the choices', () => {
    const choices = {
      footer: <p>hi</p>,
      items: [
        { text: 'Item 1', value: 'item-1' },
        { text: 'Item 2', value: 'item-2' },
      ],
    };
    const wrapper = mount(<SprkMastheadSelector choices={choices} />);
    wrapper.find('.sprk-b-Link').simulate('click');
    expect(wrapper.find('.sprk-c-Masthead__selector-footer').length).toBe(1);
  });

  it('should render the correct text if defaultTriggerText is defined', () => {
    const choices = {
      items: [
        { text: 'Item 1', value: 'item-1' },
        { text: 'Item 2', value: 'item-2' },
      ],
    };
    const wrapper = mount(
      <SprkMastheadSelector
        choices={choices}
        defaultTriggerText="Hello, World!"
      />,
    );
    expect(wrapper.find('.sprk-b-Link').instance().textContent).toBe(
      'Hello, World!',
    );
  });

  it(`should add classes to the selector
      when additionalClasses has a value`, () => {
    const choices = {
      items: [
        { text: 'Item 1', value: 'item-1' },
        { text: 'Item 2', value: 'item-2' },
      ],
    };
    const wrapper = mount(
      <SprkMastheadSelector choices={choices} additionalClasses="sprk-u-man" />,
    );
    wrapper.find('.sprk-b-Link').simulate('click');
    expect(
      wrapper.find('.sprk-c-Masthead__selector-dropdown.sprk-u-man').length,
    ).toBe(1);
  });

  it(`should add classes to the icon
      when additionalIconClasses has a value`, () => {
    const choices = {
      items: [
        { text: 'Item 1', value: 'item-1' },
        { text: 'Item 2', value: 'item-2' },
      ],
    };
    const wrapper = mount(
      <SprkMastheadSelector
        choices={choices}
        additionalIconClasses="test-class"
      />,
    );
    expect(wrapper.find('.sprk-c-Icon.test-class').length).toBe(1);
  });

  it(`should add classes to the trigger
      when additionalTriggerClasses has a value`, () => {
    const choices = {
      items: [
        { text: 'Item 1', value: 'item-1' },
        { text: 'Item 2', value: 'item-2' },
      ],
    };
    const wrapper = mount(
      <SprkMastheadSelector
        choices={choices}
        additionalTriggerClasses="sprk-u-man"
      />,
    );
    expect(wrapper.find('.sprk-b-Link.sprk-u-man').length).toBe(1);
  });

  it(`should add classes to the trigger text
      when additionalTriggerTextClasses has a value`, () => {
    const choices = {
      items: [
        { text: 'Item 1', value: 'item-1' },
        { text: 'Item 2', value: 'item-2' },
      ],
    };
    const wrapper = mount(
      <SprkMastheadSelector
        choices={choices}
        additionalTriggerTextClasses="sprk-u-man"
      />,
    );
    expect(wrapper.find('span.sprk-u-man').length).toBe(1);
  });

  it('should assign data-analytics when analyticsString has a value', () => {
    const choices = {
      items: [
        { text: 'Item 1', value: 'item-1' },
        { text: 'Item 2', value: 'item-2' },
      ],
    };
    const wrapper = mount(
      <SprkMastheadSelector choices={choices} analyticsString="321" />,
    );
    expect(wrapper.find('[data-analytics="321"]').length).toBe(2);
  });

  it('should assign data-id when idString has a value', () => {
    const choices = {
      items: [
        { text: 'Item 1', value: 'item-1' },
        { text: 'Item 2', value: 'item-2' },
      ],
    };
    const wrapper = mount(
      <SprkMastheadSelector choices={choices} idString="321" />,
    );
    expect(wrapper.find('[data-id="321"]').length).toBe(2);
  });

  it('should build the correct number of choices from a choices object', () => {
    const choices = {
      items: [
        { text: 'Item 1', value: 'item-1' },
        { text: 'Item 2', value: 'item-2' },
      ],
    };
    const wrapper = mount(<SprkMastheadSelector choices={choices} />);
    wrapper.find('.sprk-b-Link').simulate('click');
    expect(
      wrapper.find('.sprk-c-Masthead__selector-dropdown-link').length,
    ).toBe(2);
  });

  it(`should run the choiceFunction supplied
      with the list of choices (base)`, () => {
    const spyFunc = jest.fn();
    const choices = {
      choiceFunction: spyFunc,
      items: [
        { text: 'Item 1', value: 'item-1' },
        { text: 'Item 2', value: 'item-2' },
      ],
    };
    const wrapper = mount(<SprkMastheadSelector choices={choices} />);
    wrapper.find('.sprk-b-Link').simulate('click');
    wrapper
      .find('.sprk-c-Masthead__selector-dropdown-link')
      .first()
      .simulate('click');
    expect(spyFunc.mock.calls.length).toBe(1);
  });

  it(`should run the choiceFunction supplied
      with the list of choices (informational)`, () => {
    const spyFunc = jest.fn();
    const choices = {
      choiceFunction: spyFunc,
      items: [
        { text: 'Item 1', value: 'item-1', content: { title: 'Item 1' } },
      ],
    };
    const wrapper = mount(
      <SprkMastheadSelector choices={choices} variant="informational" />,
    );
    wrapper.find('.sprk-b-Link').simulate('click');
    wrapper
      .find('.sprk-c-Masthead__selector-dropdown-link')
      .first()
      .simulate('click');
    expect(spyFunc.mock.calls.length).toBe(1);
  });

  it(`should not error if the choiceFunction is supplied,
      but undefined with the list of choices (base)`, () => {
    const choices = {
      choiceFunction: undefined,
      items: [
        { text: 'Item 1', value: 'item-1' },
        { text: 'Item 2', value: 'item-2' },
      ],
    };
    const wrapper = mount(<SprkMastheadSelector choices={choices} />);
    wrapper.find('.sprk-b-Link').simulate('click');
    wrapper
      .find('.sprk-c-Masthead__selector-dropdown-link')
      .first()
      .simulate('click');
  });

  it(`should not error if the choiceFunction is supplied,
      but undefined with the list of choices (informational)`, () => {
    const choices = {
      choiceFunction: undefined,
      items: [
        { text: 'Item 1', value: 'item-1', content: { title: 'Item 1' } },
      ],
    };
    const wrapper = mount(
      <SprkMastheadSelector choices={choices} variant="informational" />,
    );
    wrapper.find('.sprk-b-Link').simulate('click');
    wrapper
      .find('.sprk-c-Masthead__selector-dropdown-link')
      .first()
      .simulate('click');
  });

  it('should close the dropdown on click outside', () => {
    const choices = {
      items: [{ text: 'Item 1', value: 'item-1' }],
    };

    const wrapper = mount(<SprkMastheadSelector choices={choices} />);
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

    const wrapper = mount(<SprkMastheadSelector choices={choices} />);
    wrapper.find('.sprk-b-Link').simulate('click');
    expect(wrapper.state().isOpen).toBe(true);
    wrapper.instance().closeOnEsc({ key: 'Delete' });
    expect(wrapper.state().isOpen).toBe(true);
    wrapper.instance().closeOnEsc({ key: 'Escape' });
    expect(wrapper.state().isOpen).toBe(false);
  });

  it('should unmount without error', () => {
    const choices = {
      items: [
        { text: 'Item 1', value: 'item-1' },
        { text: 'Item 2', value: 'item-2' },
      ],
    };
    const wrapper = mount(<SprkMastheadSelector choices={choices} />);
    expect(wrapper.find('.sprk-b-Link').length).toBe(1);
    wrapper.unmount();
    expect(wrapper.find('.sprk-b-Link').length).toBe(0);
  });

  it('should render the choices with the element specified', () => {
    const wrapper = mount(
      <SprkMastheadSelector
        choices={{ items: [{ element: 'span', text: 'Item 1' }] }}
      />,
    );
    expect(wrapper.find('.sprk-b-Link').length).toBe(1);
    wrapper.find('.sprk-b-Link').simulate('click');
    expect(
      wrapper.find('span.sprk-c-Masthead__selector-dropdown-link').length,
    ).toBe(1);
  });

  it('should pass unused keys on choice items through to the dom', () => {
    const wrapper = mount(
      <SprkMastheadSelector
        choices={{
          items: [{ element: 'span', text: 'Item 1', 'aria-hidden': 'true' }],
        }}
      />,
    );
    expect(wrapper.find('.sprk-b-Link').length).toBe(1);
    wrapper.find('.sprk-b-Link').simulate('click');
    expect(
      wrapper.find(
        '.sprk-c-Masthead__selector-dropdown-link[aria-hidden="true"]',
      ).length,
    ).toBe(1);
  });

  it('should add the correct class if isFlush is true', () => {
    const wrapper = mount(
      <SprkMastheadSelector
        isFlush
        choices={{
          items: [{ text: 'Item 1', value: 'item-1' }],
        }}
      />,
    );
    expect(wrapper.find('.sprk-o-Box').length).toBe(1);
  });

  it('should not add the class if isFlush is false', () => {
    const wrapper = mount(
      <SprkMastheadSelector
        isFlush={false}
        choices={{
          items: [{ text: 'Item 1', value: 'item-1' }],
        }}
      />,
    );
    expect(wrapper.find('.sprk-o-Box').length).toBe(0);
  });
});
