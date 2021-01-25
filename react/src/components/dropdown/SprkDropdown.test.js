/* global it, expect, jest */
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkDropdown from './SprkDropdown';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkDropdown:', () => {
  it('should render a trigger with the correct classes', () => {
    const wrapper = mount(<SprkDropdown />);
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
    const wrapper = mount(<SprkDropdown choices={choices} />);
    wrapper.find('.sprk-b-Link').simulate('click');
    expect(wrapper.find('.sprk-c-Dropdown__footer').length).toBe(1);
  });

  it(
    'should add classes to the dropdown,' +
      ' when additionalClasses has a value',
    () => {
      const wrapper = mount(<SprkDropdown additionalClasses="sprk-u-man" />);
      wrapper.find('.sprk-b-Link').simulate('click');
      expect(wrapper.find('.sprk-c-Dropdown.sprk-u-man').length).toBe(1);
    },
  );

  // TODO: Remove as part of Issue 3798
  it(
    'should add classes to the icon,' +
      ' when additionalIconClasses has a value',
    () => {
      const wrapper = mount(
        <SprkDropdown additionalIconClasses="test-class" />,
      );
      expect(wrapper.find('.sprk-c-Icon.test-class').length).toBe(1);
    },
  );

  it(
    'should add classes to the icon,' +
      ' when iconAdditionalClasses has a value',
    () => {
      const wrapper = mount(
        <SprkDropdown iconAdditionalClasses="test-class" />,
      );
      expect(wrapper.find('.sprk-c-Icon.test-class').length).toBe(1);
    },
  );

  // TODO: Remove as part of Issue 3798
  it('should prefer iconAdditionalClasses over additionalIconClasses', () => {
    const wrapper = mount(
      <SprkDropdown
        iconAdditionalClasses="newClass"
        additionalIconClasses="oldClass"
      />,
    );
    expect(wrapper.find('.sprk-c-Icon.newClass').length).toBe(1);
    expect(wrapper.find('.sprk-c-Icon.oldClass').length).toBe(0);
  });

  // TODO: Remove as part of Issue 3798
  it(
    'should add classes to the trigger,' +
      ' when additionalTriggerClasses has a value',
    () => {
      const wrapper = mount(
        <SprkDropdown additionalTriggerClasses="sprk-u-man" />,
      );
      expect(wrapper.find('.sprk-b-Link.sprk-u-man').length).toBe(1);
    },
  );

  it(
    'should add classes to the trigger,' +
      ' when triggerAdditionalClasses has a value',
    () => {
      const wrapper = mount(
        <SprkDropdown triggerAdditionalClasses="sprk-u-man" />,
      );
      expect(wrapper.find('.sprk-b-Link.sprk-u-man').length).toBe(1);
    },
  );

  // TODO: Remove as part of Issue 3798
  it(
    'should prefer triggerAdditionalClasses over' +
      ' deprecated additionalTriggerClasses',
    () => {
      const wrapper = mount(
        <SprkDropdown
          triggerAdditionalClasses="newClass"
          additionalTriggerClasses="oldClass"
        />,
      );
      expect(wrapper.find('.sprk-b-Link.newClass').length).toBe(1);
      expect(wrapper.find('.sprk-b-Link.oldClass').length).toBe(0);
    },
  );

  // TODO: Remove as part of Issue 3798
  it(
    'should add classes to the trigger text when,' +
      'additionalTriggerTextClasses has a value',
    () => {
      const wrapper = mount(
        <SprkDropdown additionalTriggerTextClasses="sprk-u-man" />,
      );
      expect(wrapper.find('span.sprk-u-man').length).toBe(1);
    },
  );

  it(
    'should add classes to the trigger text when,' +
      'triggerTextAdditionalClasses has a value',
    () => {
      const wrapper = mount(
        <SprkDropdown triggerTextAdditionalClasses="sprk-u-man" />,
      );
      expect(wrapper.find('span.sprk-u-man').length).toBe(1);
    },
  );

  // TODO: Remove as part of Issue 3798
  it(
    'should prefer triggerTextAdditionalClasses over' +
      ' additionalTriggerTextClasses',
    () => {
      const wrapper = mount(
        <SprkDropdown
          triggerTextAdditionalClasses="newClass"
          additionalTriggerTextClasses="oldClass"
        />,
      );
      expect(wrapper.find('span.newClass').length).toBe(1);
      expect(wrapper.find('span.oldClass').length).toBe(0);
    },
  );

  it('should assign data-analytics when analyticsString has a value', () => {
    const wrapper = mount(<SprkDropdown analyticsString="321" />);
    expect(wrapper.find('[data-analytics="321"]').length).toBe(2);
  });

  it('should assign data-id when idString has a value', () => {
    const wrapper = mount(<SprkDropdown idString="321" />);
    expect(wrapper.find('[data-id="321"]').length).toBe(2);
  });

  it(`should assign screen reader text
      to the trigger for base dropdowns`, () => {
    const wrapper = mount(<SprkDropdown screenReaderText="test" />);
    expect(wrapper.find('.sprk-u-ScreenReaderText').text()).toBe('test');
  });

  // TODO: Remove as part of Issue 3798
  it('should assign the choices header when title has a value', () => {
    const wrapper = mount(<SprkDropdown title="My Choices" />);
    wrapper.find('.sprk-b-Link').simulate('click');
    expect(wrapper.find('.sprk-c-Dropdown__header').text()).toBe('My Choices');
  });

  it('should assign the choices header when heading has a value', () => {
    const wrapper = mount(<SprkDropdown heading="My Choices" />);
    wrapper.find('.sprk-b-Link').simulate('click');
    expect(wrapper.find('.sprk-c-Dropdown__header').text()).toBe('My Choices');
  });

  // TODO: Remove as part of Issue 3798
  it('should prefer heading over title', () => {
    const wrapper = mount(<SprkDropdown heading="new" title="old" />);
    wrapper.find('.sprk-b-Link').simulate('click');
    expect(wrapper.find('.sprk-c-Dropdown__header').text()).toBe('new');
  });

  it('should build the correct number of choices from a choices object', () => {
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

  it(
    'should run the choiceFunction supplied' +
      ' with the list of choices (base)',
    () => {
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
      wrapper.find('.sprk-c-Dropdown__link').first().simulate('click');
      expect(spyFunc.mock.calls.length).toBe(1);
    },
  );

  it(
    'should not error, ' +
      ' if choiceFunction is supplied but undefined (base)',
    () => {
      const choices = {
        choiceFunction: undefined,
        items: [
          { text: 'Item 1', value: 'item-1' },
          { text: 'Item 2', value: 'item-2' },
        ],
      };
      const wrapper = mount(<SprkDropdown choices={choices} />);
      wrapper.find('.sprk-b-Link').simulate('click');
      wrapper.find('.sprk-c-Dropdown__link').first().simulate('click');
    },
  );

  it(
    'should run the choiceFunction supplied' +
      'with the list of choices (informational)',
    () => {
      const spyFunc = jest.fn();
      const choices = {
        choiceFunction: spyFunc,
        items: [
          { text: 'Item 1', value: 'item-1', content: { title: 'Item 1' } },
        ],
      };
      const wrapper = mount(
        <SprkDropdown choices={choices} variant="informational" />,
      );
      wrapper.find('.sprk-b-Link').simulate('click');
      wrapper.find('.sprk-c-Dropdown__link').first().simulate('click');
      expect(spyFunc.mock.calls.length).toBe(1);
    },
  );

  it(
    'should not error' +
      ' if choiceFunction is supplied but undefined (informational)',
    () => {
      const choices = {
        choiceFunction: undefined,
        items: [
          { text: 'Item 1', value: 'item-1', content: { title: 'Item 1' } },
        ],
      };
      const wrapper = mount(
        <SprkDropdown choices={choices} variant="informational" />,
      );
      wrapper.find('.sprk-b-Link').simulate('click');
      wrapper.find('.sprk-c-Dropdown__link').first().simulate('click');
    },
  );

  it('should close the dropdown on click outside', () => {
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

  it(
    'should set state with default choice option' +
      ' having isActive as true, when isDefault true attribute is provided',
    () => {
      const choices = {
        items: [{ text: 'Item 1', value: 'item-1', isDefault: true }],
      };

      const wrapper = mount(<SprkDropdown choices={choices} />);
      expect(wrapper.state().choiceItems[0].isActive).toBe(true);
    },
  );

  it(
    'should set state with default choice option' +
      ' having isActive as true, when isDefault true attribute is provided',
    () => {
      const choices = {
        items: [{ text: 'Item 1', value: 'item-1', isDefault: true }],
      };

      const wrapper = mount(<SprkDropdown choices={choices} />);
      expect(wrapper.state().choiceItems[0].isActive).toBe(true);
    },
  );

  it(
    'should set state with default choice option' +
      ' having isActive as true, when isDefault true attribute is provided',
    () => {
      const choices = {
        items: [{ text: 'Item 1', value: 'item-1', isDefault: true }],
      };

      const wrapper = mount(<SprkDropdown choices={choices} />);
      expect(wrapper.state().choiceItems[0].isActive).toBe(true);
    },
  );

  it(
    'should set state with triggerText as Choose One...' +
      ' when choice items are empty and defaultTriggerText is not provided',
    () => {
      const wrapper = mount(<SprkDropdown />);
      expect(wrapper.state().triggerText).toBe('Choose One...');
    },
  );

  it(
    'should set state with triggerText as defaultTriggerText' +
      ' when choice items are empty and defaultTriggerText is provided',
    () => {
      const choices = { items: [] };

      const wrapper = mount(
        <SprkDropdown choices={choices} defaultTriggerText="Default" />,
      );
      expect(wrapper.state().triggerText).toBe('Default');
    },
  );

  it(
    'should set state with triggerText as title of default choice' +
      ' when choice items are not empty, defaultTriggerText is provided' +
      ' and variant is informational',
    () => {
      const choices = {
        items: [
          { content: { title: 'Item 1' }, value: 'item-1', isDefault: true },
        ],
      };

      const wrapper = mount(
        <SprkDropdown
          choices={choices}
          defaultTriggerText="Default"
          variant="informational"
        />,
      );
      expect(wrapper.state().triggerText).toBe('Item 1');
    },
  );

  it('should close the dropdown on keydown (Escape)', () => {
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

  it('should unmount without error', () => {
    const wrapper = mount(<SprkDropdown />);
    expect(wrapper.find('.sprk-b-Link').length).toBe(1);
    wrapper.unmount();
    expect(wrapper.find('.sprk-b-Link').length).toBe(0);
  });

  it('should render the choices with the element specified', () => {
    const wrapper = mount(
      <SprkDropdown choices={{ items: [{ element: 'p', text: 'Item 1' }] }} />,
    );
    expect(wrapper.find('.sprk-b-Link').length).toBe(1);
    wrapper.find('.sprk-b-Link').simulate('click');
    expect(wrapper.find('p.sprk-c-Dropdown__link').length).toBe(1);
  });

  it('should pass unused keys on choice items through to the dom', () => {
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

  it('should not set href if the supplied tagname is not a', () => {
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

  it(
    'should choose correct aria-label text' +
      ' if defaultTriggerText is provided.',
    () => {
      const wrapper = mount(
        <SprkDropdown
          defaultTriggerText="test"
          variant="informational"
          choices={{
            items: [{ content: { title: 'Item 1' } }],
          }}
        />,
      );
      expect(
        wrapper.find('.sprk-b-Link').instance().getAttribute('aria-label'),
      ).toBe('test');
    },
  );

  it(
    'should choose aria-label text as default choice item title' +
      ' if defaultTriggerText is provided and isDefault is true for a choice' +
      ' and variant is informational',
    () => {
      const wrapper = mount(
        <SprkDropdown
          defaultTriggerText="test"
          variant="informational"
          choices={{
            items: [{ content: { title: 'Item 1' }, isDefault: true }],
          }}
        />,
      );
      expect(
        wrapper.find('.sprk-b-Link').instance().getAttribute('aria-label'),
      ).toBe('Item 1');
    },
  );

  it(
    'should apply default aria-label' +
      ' if defaultTriggerText is not provided.',
    () => {
      const wrapper = mount(
        <SprkDropdown
          variant="informational"
          choices={{
            items: [{ content: { title: 'Item 1' } }],
          }}
        />,
      );
      wrapper.find('.sprk-b-Link').simulate('click');
      expect(
        wrapper.find('.sprk-b-Link').instance().getAttribute('aria-label'),
      ).toBe('Choose One...');
    },
  );

  it(
    'should default to correct aria-label' +
      ' if screenReaderText is provided.',
    () => {
      const choices = {
        items: [{ text: 'Item 1', value: 'item-1' }],
      };

      const wrapper = mount(
        <SprkDropdown
          choices={choices}
          screenReaderText="Dropdown description"
        />,
      );

      expect(
        wrapper.find('.sprk-b-Link').instance().getAttribute('aria-label'),
      ).toBe('Dropdown description');
    },
  );

  it(`should default to correct aria-label,
      if screenReaderText is not provided.`, () => {
    const choices = {
      items: [{ text: 'Item 1', value: 'item-1' }],
    };

    const wrapper = mount(<SprkDropdown choices={choices} />);

    expect(
      wrapper.find('.sprk-b-Link').instance().getAttribute('aria-label'),
    ).toBe('Choose One...');
  });

  it('should apply aria-label to listbox when title is provided', () => {
    const wrapper = mount(<SprkDropdown title="test" />);
    wrapper.find('.sprk-b-Link').simulate('click');
    expect(wrapper.find('ul').instance().getAttribute('aria-label')).toBe(
      'test',
    );
  });

  it(
    'should apply aria-label to listbox,' +
      'when there is no title but screenReaderText is provided',
    () => {
      const wrapper = mount(<SprkDropdown screenReaderText="test" />);
      wrapper.find('.sprk-b-Link').simulate('click');
      expect(wrapper.find('ul').instance().getAttribute('aria-label')).toBe(
        'test',
      );
    },
  );

  it(
    'should apply default aria-label to listbox,' +
      ' when neither title nor screenReaderText is provided',
    () => {
      const wrapper = mount(<SprkDropdown />);
      wrapper.find('.sprk-b-Link').simulate('click');
      expect(wrapper.find('ul').instance().getAttribute('aria-label')).toBe(
        'My Choices',
      );
    },
  );

  it('should call openedEvent when the dropdown is opened', () => {
    const myMock = jest.fn();

    const wrapper = mount(<SprkDropdown openedEvent={myMock} />);

    expect(wrapper.state().isOpen).toBe(false);

    wrapper.find('.sprk-b-Link').simulate('click');
    expect(wrapper.state().isOpen).toBe(true);
    expect(myMock.mock.calls.length).toBe(1);
  });

  it('should not call openedEvent if the dropdown is already open', () => {
    const myMock = jest.fn();

    const wrapper = mount(<SprkDropdown openedEvent={myMock} />);

    expect(wrapper.state().isOpen).toBe(false);

    wrapper.find('.sprk-b-Link').simulate('click');
    expect(wrapper.state().isOpen).toBe(true);
    expect(myMock.mock.calls.length).toBe(1);

    wrapper.find('.sprk-b-Link').simulate('click');
    expect(wrapper.state().isOpen).toBe(true);
    expect(myMock.mock.calls.length).toBe(1);
  });

  it('should call closedEvent when the dropdown is closed', () => {
    const myMock = jest.fn();

    const wrapper = mount(<SprkDropdown closedEvent={myMock} />);

    expect(wrapper.state().isOpen).toBe(false);

    wrapper.find('.sprk-b-Link').simulate('click');
    expect(myMock.mock.calls.length).toBe(0);

    wrapper.instance().closeOnEsc({ key: 'Escape' });
    expect(myMock.mock.calls.length).toBe(1);
  });

  it('should not call closedEvent if the dropdown is already closed', () => {
    const myMock = jest.fn();

    const wrapper = mount(<SprkDropdown closedEvent={myMock} />);

    expect(wrapper.state().isOpen).toBe(false);

    wrapper.find('.sprk-b-Link').simulate('click');
    expect(myMock.mock.calls.length).toBe(0);

    wrapper.instance().closeOnEsc({ key: 'Escape' });
    expect(myMock.mock.calls.length).toBe(1);

    wrapper.instance().closeOnEsc({ key: 'Escape' });
    expect(myMock.mock.calls.length).toBe(1);
  });
});
