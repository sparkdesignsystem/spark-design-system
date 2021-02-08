import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkSelect from './SprkSelect';

Enzyme.configure({ adapter: new Adapter() });
let choices;

beforeEach(() => {
  choices = [
    { name: 'item-choice', label: 'Item 1', value: '1' },
    { name: 'item-choice-2', label: 'Item 2', value: '2' },
  ];
});

describe('SprkSelect:', () => {
  it('should render an element with the correct class', () => {
    const wrapper = mount(<SprkSelect choices={choices} />);
    expect(wrapper.find('.sprk-b-Select').length).toBe(1);
  });

  it('should allow for a custom ID', () => {
    const wrapper = mount(<SprkSelect choices={choices} id="custom" />);
    expect(wrapper.find('.sprk-b-Select').getDOMNode().id).toBe('custom');
  });

  it('should create an ID if one is not supplied', () => {
    const wrapper = mount(<SprkSelect choices={choices} />);
    expect(
      wrapper.find('.sprk-b-Select').getDOMNode().getAttribute('id'),
    ).toContain('sprk-');
  });

  it('should add floating label to huge if it has a default value', () => {
    const wrapper = mount(
      <SprkSelect choices={choices} variant="huge" defaultValue="test-value" />,
    );
    expect(
      wrapper
        .find('select')
        .getDOMNode()
        .classList.contains('sprk-b-Input--has-floating-label'),
    ).toBe(true);
  });

  it('should add floating label to huge if it has a value on change', () => {
    const wrapper = mount(
      <SprkSelect choices={choices} variant="huge" defaultValue="" />,
    );
    const select = wrapper.find('.sprk-b-Select');
    select.value = '1';
    select.simulate('change', { target: { value: 'test-value' } });
    expect(
      select
        .getDOMNode()
        .classList.contains('sprk-b-Input--has-floating-label'),
    ).toBe(true);
  });

  it('should not add floating label if it has a value on change', () => {
    const wrapper = mount(<SprkSelect choices={choices} defaultValue="" />);
    const select = wrapper.find('.sprk-b-Select');
    select.value = '1';
    select.simulate('change', { target: { value: 'test-value' } });
    expect(
      select
        .getDOMNode()
        .classList.contains('sprk-b-Input--has-floating-label'),
    ).toBe(false);
  });

  it('should not add floating label to huge if has no value on load', () => {
    const wrapper = mount(
      <SprkSelect choices={choices} variant="huge" defaultValue="" />,
    );
    const select = wrapper.find('.sprk-b-Select');
    expect(
      select
        .getDOMNode()
        .classList.contains('sprk-b-Input--has-floating-label'),
    ).toBe(false);
  });

  it('should run the supplied onChange function', () => {
    const onChangeMock = jest.fn();
    const wrapper = mount(
      <SprkSelect choices={choices} onChange={onChangeMock} />,
    );
    const select = wrapper.find('.sprk-b-Select');
    select.value = '1';
    select.simulate('change', { target: { value: 'test-value' } });
    expect(onChangeMock.mock.calls.length).toBe(1);
  });

  it('should run the supplied onChange function for huge', () => {
    const onChangeMock = jest.fn();
    const wrapper = mount(
      <SprkSelect
        choices={choices}
        variant="huge"
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
      <SprkSelect choices={choices} variant="huge" defaultValue="test-value" />,
    );
    expect(wrapper.state().selectHugeHasValue).toBe(true);
  });

  it('should not update state if huge select does not have a value', () => {
    const wrapper = mount(
      <SprkSelect choices={choices} variant="huge" defaultValue="" />,
    );
    expect(wrapper.state().selectHugeHasValue).toBe(undefined);
  });

  it('should add classes when additionalClasses has a value', () => {
    const wrapper = mount(
      <SprkSelect choices={choices} additionalClasses="sprk-u-mbm" />,
    );
    expect(wrapper.find('.sprk-b-Select').hasClass('sprk-u-mbm')).toBe(true);
  });

  it('should assign data-analytics when analyticsString has a value', () => {
    const wrapper = mount(
      <SprkSelect choices={choices} analyticsString="321" />,
    );
    expect(wrapper.find('[data-analytics="321"]').length).toBe(1);
  });

  it(`should not render data-analytics when
  analyticsString is not present`, () => {
    const wrapper = mount(<SprkSelect choices={choices} />);
    expect(wrapper.find('[data-analytics]').length).toBe(0);
  });

  it('should assign data-id when idString has a value', () => {
    const wrapper = mount(<SprkSelect choices={choices} idString="321" />);
    expect(wrapper.find('[data-id="321"]').length).toBe(1);
  });

  it('should not render data-id when idString is not present', () => {
    const wrapper = mount(<SprkSelect choices={choices} />);
    expect(wrapper.find('[data-id]').length).toBe(0);
  });

  it('should render the select with error styles when isValid is false', () => {
    const wrapper = mount(<SprkSelect choices={choices} isValid={false} />);
    expect(wrapper.find('.sprk-b-Select--error').length).toBe(1);
  });

  it(`should not render the select with error
  styles when isValid is true`, () => {
    const wrapper = mount(<SprkSelect choices={choices} isValid />);
    expect(wrapper.find('.sprk-b-Select--error').length).toBe(0);
  });

  it('should make select disabled when isDisabled is set', () => {
    const wrapper = mount(<SprkSelect choices={choices} isDisabled />);
    expect(wrapper.find('select').getDOMNode().hasAttribute('disabled')).toBe(
      true,
    );
  });

  it(`should not make select disabled when isDisabled is false`, () => {
    const wrapper = mount(<SprkSelect choices={choices} isDisabled={false} />);
    expect(wrapper.find('select').getDOMNode().hasAttribute('disabled')).toBe(
      false,
    );
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
    const wrapper = mount(<SprkSelect choices={choices} />);
    expect(wrapper.find('optgroup').length).toBe(1);
  });

  it('should not render grouped options if not supplied', () => {
    const wrapper = mount(<SprkSelect choices={choices} />);
    expect(wrapper.find('optgroup').length).toBe(0);
  });
});
