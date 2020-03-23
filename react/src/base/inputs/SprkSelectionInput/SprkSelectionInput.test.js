import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkSelectionInput from './SprkSelectionInput';

Enzyme.configure({ adapter: new Adapter() });
let choices;

beforeEach(() => {
  choices = [
    { name: 'item-choice', label: 'Item 1', value: '1' },
    { name: 'item-choice-2', label: 'Item 2', value: '2' },
  ];
});

describe('SprkSelectionInput:', () => {
  it('should render an element with the correct class', () => {
    const wrapper = mount(
      <SprkSelectionInput choices={choices} variant="checkbox" />,
    );
    expect(wrapper.find('.sprk-b-InputContainer').length).toBe(1);
  });

  it('should add huge input class to container if variant is hugeSelect', () => {
    const wrapper = mount(
      <SprkSelectionInput
        choices={choices}
        variant="hugeSelect"
        defaultValue=""
      />,
    );
    expect(
      wrapper
        .find('.sprk-b-InputContainer')
        .getDOMNode()
        .classList.contains('sprk-b-InputContainer--huge'),
    ).toBe(true);
  });

  it('should add floating label to huge select if it has a default value', () => {
    const wrapper = mount(
      <SprkSelectionInput
        choices={choices}
        variant="hugeSelect"
        defaultValue="test-value"
      />,
    );
    expect(
      wrapper
        .find('select')
        .getDOMNode()
        .classList.contains('sprk-b-Input--has-floating-label'),
    ).toBe(true);
  });

  it('should add floating label to huge select if it has a value on change', () => {
    const wrapper = mount(
      <SprkSelectionInput
        choices={choices}
        variant="hugeSelect"
        defaultValue=""
      />,
    );
    const select = wrapper.find('.sprk-b-Select');
    select.value = '1';
    select.simulate('change', { target: { value: 'test-value' } });
    expect(
      select.getDOMNode().classList.contains('sprk-b-Input--has-floating-label'),
    ).toBe(true);
  });

  it('should not add floating label to regular select if it has a value on change', () => {
    const wrapper = mount(
      <SprkSelectionInput choices={choices} variant="select" defaultValue="" />,
    );
    const select = wrapper.find('.sprk-b-Select');
    select.value = '1';
    select.simulate('change', { target: { value: 'test-value' } });
    expect(
      select.getDOMNode().classList.contains('sprk-b-Input--has-floating-label'),
    ).toBe(false);
  });

  it('should not add floating label to huge select if has no value on load', () => {
    const wrapper = mount(
      <SprkSelectionInput choices={choices} variant="select" defaultValue="" />,
    );
    const select = wrapper.find('.sprk-b-Select');
    expect(
      select.getDOMNode().classList.contains('sprk-b-Input--has-floating-label'),
    ).toBe(false);
  });

  it('should run the supplied onChange function for checkboxes', () => {
    const onCheckboxChangeMock = jest.fn();
    const wrapper = mount(
      <SprkSelectionInput
        onChange= {onCheckboxChangeMock}
        choices={[
          {
            name: 'item-choice',
            label: 'Item 1',
            value: '1',
          },
        ]}
        variant="checkbox"
      />,
    );
    const checkbox = wrapper.find('input[type="checkbox"]');
    checkbox.simulate('change', { target: { value: 'test-value' } });
    expect(onCheckboxChangeMock.mock.calls.length).toBe(1);
  });

  it('should run the supplied onChangeFunc function for checkboxes', () => {
    const onCheckboxChangeMock = jest.fn();
    const wrapper = mount(
      <SprkSelectionInput
        onChangeFunc={onCheckboxChangeMock}
        choices={[
          {
            name: 'item-choice',
            label: 'Item 1',
            value: '1',
          },
        ]}
        variant="checkbox"
      />,
    );
    const checkbox = wrapper.find('input[type="checkbox"]');
    checkbox.simulate('change', { target: { value: 'test-value' } });
    expect(onCheckboxChangeMock.mock.calls.length).toBe(1);
  });

  it('should run the supplied onChange function for selects', () => {
    const onChangeMock = jest.fn();
    const wrapper = mount(
      <SprkSelectionInput
        choices={choices}
        variant="select"
        onChange={onChangeMock}
      />,
    );
    const select = wrapper.find('.sprk-b-Select');
    select.value = '1';
    select.simulate('change', { target: { value: 'test-value' } });
    expect(onChangeMock.mock.calls.length).toBe(1);
  });

  it('should run the supplied onChange function for huge selects', () => {
    const onChangeMock = jest.fn();
    const wrapper = mount(
      <SprkSelectionInput
        choices={choices}
        variant="hugeSelect"
        onChange={onChangeMock}
        defaultValue=""
      />,
    );
    const select = wrapper.find('.sprk-b-Select');
    select.value = '1';
    select.simulate('change', { target: { value: 'test-value' } });
    expect(onChangeMock.mock.calls.length).toBe(1);
  });

  it('should update state if huge select has a value', () => {
    const wrapper = mount(
      <SprkSelectionInput
        choices={choices}
        variant="hugeSelect"
        defaultValue="test-value"
      />,
    );
    expect(wrapper.state().selectHugeHasValue).toBe(true);
  });

  it('should not update state if huge select does not have a value', () => {
    const wrapper = mount(
      <SprkSelectionInput
        choices={choices}
        variant="hugeSelect"
        defaultValue=""
      />,
    );
    expect(wrapper.state().selectHugeHasValue).toBe(undefined);
  });

  it('should add classes when additionalClasses has a value to radios', () => {
    const wrapper = mount(
      <SprkSelectionInput
        choices={choices}
        additionalClasses="sprk-u-man"
        variant="radio"
      />,
    );
    expect(wrapper.find('.sprk-b-InputContainer.sprk-u-man').length).toBe(1);
  });

  it('should add classes when additionalClasses has a value to selects', () => {
    const wrapper = mount(
      <SprkSelectionInput
        choices={choices}
        additionalClasses="sprk-u-man"
        variant="select"
      />,
    );
    expect(wrapper.find('.sprk-b-InputContainer.sprk-u-man').length).toBe(1);
  });

  it('should assign data-analytics when analyticsString has a value', () => {
    const wrapper = mount(
      <SprkSelectionInput
        choices={choices}
        analyticsString="321"
        variant="select"
      />,
    );
    expect(wrapper.find('[data-analytics="321"]').length).toBe(1);
  });

  it('should assign data-id when idString has a value to checkboxes', () => {
    const wrapper = mount(
      <SprkSelectionInput choices={choices} idString="321" variant="checkbox" />,
    );
    expect(wrapper.find('[data-id="321"]').length).toBe(1);
  });

  it('should assign data-id when idString has a value to selects', () => {
    const wrapper = mount(
      <SprkSelectionInput choices={choices} idString="321" variant="select" />,
    );
    expect(wrapper.find('[data-id="321"]').length).toBe(1);
  });

  it('should render helper text when supplied', () => {
    const wrapper = mount(
      <SprkSelectionInput
        choices={choices}
        helperText="Sample helper text."
        variant="radio"
      />,
    );
    expect(wrapper.find('.sprk-b-HelperText').length).toBe(1);
    expect(wrapper.find('.sprk-b-HelperText').text()).toBe('Sample helper text.');
  });

  it('should not render helper text when not supplied', () => {
    const wrapper = mount(
      <SprkSelectionInput
        choices={choices}
        helperText=""
        variant="radio"
        valid={false}
      />,
    );
    expect(wrapper.find('.sprk-b-HelperText').length).toBe(0);
  });

  it('should render the input in an error state when valid is false', () => {
    const wrapper = mount(
      <SprkSelectionInput
        choices={choices}
        variant="checkbox"
        errorMessage="error message"
        valid={false}
      />,
    );
    expect(wrapper.find('.sprk-b-ErrorContainer').length).toBe(1);
    expect(wrapper.find('.sprk-b-ErrorContainer').text()).toBe('error message');
  });

  it('should render the select in an error state when valid is false', () => {
    const wrapper = mount(
      <SprkSelectionInput
        choices={choices}
        variant="select"
        errorMessage="error message"
        valid={false}
      />,
    );
    expect(wrapper.find('.sprk-b-Select--error').length).toBe(1);
    expect(wrapper.find('.sprk-b-ErrorContainer').length).toBe(1);
    expect(wrapper.find('.sprk-b-ErrorContainer').text()).toBe('error message');
  });

  it('should make select disabled when disabled is set', () => {
    const wrapper = mount(
      <SprkSelectionInput
        choices={choices}
        variant="select"
        disabled
        errorMessage="error message"
        valid={true}
      />,
    );
    expect(
      wrapper
        .find('select')
        .getDOMNode()
        .hasAttribute('disabled'),
    ).toBe(true);
    expect(
      wrapper
        .find('label')
        .getDOMNode()
        .classList.contains('sprk-b-Label--disabled'),
    ).toBe(true);
  });

  it('should render grouped options if supplied', () => {
    choices.push({
      label: 'Grouped Options',
      options: [
        {
          label: 'Option 1',
          value: 'option-1',
        },
        {
          label: 'Option 2',
          value: 'option-2',
        },
      ],
    });
    const wrapper = mount(
      <SprkSelectionInput variant="select" choices={choices} />,
    );
    expect(wrapper.find('optgroup').length).toBe(1);
  });
});
