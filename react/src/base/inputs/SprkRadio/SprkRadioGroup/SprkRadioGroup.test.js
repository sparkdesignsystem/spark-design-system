import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkRadioGroup from './SprkRadioGroup';
import SprkRadioItem from '../SprkRadioItem/SprkRadioItem';
import SprkErrorContainer from '../../SprkErrorContainer/SprkErrorContainer';
import SprkFieldError from '../../SprkFieldError/SprkFieldError';
import SprkHelperText from '../../SprkHelperText/SprkHelperText';
import SprkFieldSet from '../../SprkFieldSet/SprkFieldSet';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkRadioGroup:', () => {
  it('should render SprkRadioItem inside of it', () => {
    const wrapper = shallow(
      <SprkRadioGroup>
        <SprkRadioItem>Label</SprkRadioItem>
        <SprkRadioItem>Label</SprkRadioItem>
        <SprkRadioItem>Label</SprkRadioItem>
      </SprkRadioGroup>,
    );
    expect(wrapper.find('SprkRadioItem').length).toBe(3);
  });

  it(`should render SprkRadioItem inside of it when
  they are grandchildren`, () => {
    const wrapper = shallow(
      <SprkRadioGroup>
        <SprkFieldSet>
          <SprkRadioItem>Label</SprkRadioItem>
          <SprkRadioItem>Label</SprkRadioItem>
          <SprkRadioItem>Label</SprkRadioItem>
        </SprkFieldSet>
      </SprkRadioGroup>,
    );
    expect(wrapper.find('SprkRadioItem').length).toBe(3);
  });

  it('should have container styles', () => {
    const wrapper = shallow(<SprkRadioGroup />);
    expect(
      wrapper.find('.sprk-b-InputContainer').hasClass('sprk-b-InputContainer'),
    ).toBe(true);
  });

  it('should apply additionalClasses', () => {
    const expected = 'test';
    const wrapper = shallow(<SprkRadioGroup additionalClasses={expected} />);
    expect(wrapper.find('.sprk-b-InputContainer').hasClass(expected)).toBe(
      true,
    );
  });

  it('should apply huge container class', () => {
    const wrapper = shallow(<SprkRadioGroup variant="huge" />);
    expect(
      wrapper
        .find('.sprk-b-InputContainer')
        .hasClass('sprk-b-InputContainer--huge'),
    ).toBe(true);
  });

  it('should apply analyticsString', () => {
    const expected = 'testAnalytics';
    const wrapper = shallow(<SprkRadioGroup analyticsString={expected} />);
    expect(
      wrapper.find('.sprk-b-InputContainer').prop('data-analytics'),
    ).toEqual(expected);
  });

  it('should apply data-id', () => {
    const expected = 'test-data-id';
    const wrapper = shallow(<SprkRadioGroup idString={expected} />);
    expect(wrapper.find('.sprk-b-InputContainer').prop('data-id')).toEqual(
      expected,
    );
  });

  it(`should add the helperTextID to the aria-describedby
  on the container if it isn't present`, () => {
    const wrapper = mount(
      <SprkRadioGroup>
        <SprkRadioItem>Radio Item 1</SprkRadioItem>
        <SprkRadioItem>Radio Item 2</SprkRadioItem>
        <SprkRadioItem>Radio Item 3</SprkRadioItem>
        <SprkHelperText id="test-id" />
      </SprkRadioGroup>,
    );

    expect(
      wrapper
        .find('.sprk-b-InputContainer')
        .getDOMNode()
        .getAttribute('aria-describedby'),
    ).toBe('test-id');
  });

  it(`should add the errorContainerID to the aria-describedby
  on the container if it isn't present`, () => {
    const wrapper = mount(
      <SprkRadioGroup>
        <SprkRadioItem>Radio Item 1</SprkRadioItem>
        <SprkRadioItem>Radio Item 2</SprkRadioItem>
        <SprkRadioItem>Radio Item 3</SprkRadioItem>
        <SprkErrorContainer id="test-id" message="test message" />
      </SprkRadioGroup>,
    );

    expect(
      wrapper
        .find('.sprk-b-InputContainer')
        .getDOMNode()
        .getAttribute('aria-describedby'),
    ).toBe('test-id');
  });

  it(`should add the fieldErrorID to the aria-describedby
  on the container if it isn't present`, () => {
    const wrapper = mount(
      <SprkRadioGroup>
        <SprkRadioItem>Radio Item 1</SprkRadioItem>
        <SprkRadioItem>Radio Item 2</SprkRadioItem>
        <SprkRadioItem>Radio Item 3</SprkRadioItem>
        <SprkFieldError id="test-id" />
      </SprkRadioGroup>,
    );

    expect(
      wrapper
        .find('.sprk-b-InputContainer')
        .getDOMNode()
        .getAttribute('aria-describedby'),
    ).toBe('test-id');
  });

  it(`should allow additional values be passed to the aria-describedby`, () => {
    const wrapper = mount(
      <SprkRadioGroup ariaDescribedBy="additional-value">
        <SprkRadioItem>Radio Item 1</SprkRadioItem>
        <SprkRadioItem>Radio Item 2</SprkRadioItem>
        <SprkRadioItem>Radio Item 3</SprkRadioItem>
        <SprkFieldError id="test-id" />
      </SprkRadioGroup>,
    );

    expect(
      wrapper
        .find('.sprk-b-InputContainer')
        .getDOMNode()
        .getAttribute('aria-describedby'),
    ).toBe('additional-value test-id');
  });

  it(`should add helperTextID and fieldErrorID to the
  aria-describedby if neither are present`, () => {
    const wrapper = mount(
      <SprkRadioGroup>
        <SprkRadioItem>Radio Item 1</SprkRadioItem>
        <SprkRadioItem>Radio Item 2</SprkRadioItem>
        <SprkRadioItem>Radio Item 3</SprkRadioItem>
        <SprkFieldError id="test-error-id" />
        <SprkHelperText id="test-helper-id" />
      </SprkRadioGroup>,
    );

    expect(
      wrapper
        .find('.sprk-b-InputContainer')
        .getDOMNode()
        .getAttribute('aria-describedby'),
    ).toBe('test-error-id test-helper-id');
  });

  it(`should add helperTextID and errorContainerID to the
  aria-describedby if neither are present`, () => {
    const wrapper = mount(
      <SprkRadioGroup>
        <SprkRadioItem>Radio Item 1</SprkRadioItem>
        <SprkRadioItem>Radio Item 2</SprkRadioItem>
        <SprkRadioItem>Radio Item 3</SprkRadioItem>
        <SprkErrorContainer message="test message" id="test-error-id" />
        <SprkHelperText id="test-helper-id" />
      </SprkRadioGroup>,
    );

    expect(
      wrapper
        .find('.sprk-b-InputContainer')
        .getDOMNode()
        .getAttribute('aria-describedby'),
    ).toBe('test-error-id test-helper-id');
  });

  it(`should add helperTextID and fieldErrorID to the
  aria-describedby if neither are present and keep additional values`, () => {
    const wrapper = mount(
      <SprkRadioGroup ariaDescribedBy="additional-value">
        <SprkRadioItem>Radio Item 1</SprkRadioItem>
        <SprkRadioItem>Radio Item 2</SprkRadioItem>
        <SprkRadioItem>Radio Item 3</SprkRadioItem>
        <SprkFieldError id="test-error-id" />
        <SprkHelperText id="test-helper-id" />
      </SprkRadioGroup>,
    );

    expect(
      wrapper
        .find('.sprk-b-InputContainer')
        .getDOMNode()
        .getAttribute('aria-describedby'),
    ).toBe('additional-value test-error-id test-helper-id');
  });

  it(`should add helperTextID and errorContainerID to the
  aria-describedby if neither are present and keep additional values`, () => {
    const wrapper = mount(
      <SprkRadioGroup ariaDescribedBy="additional-value">
        <SprkRadioItem>Radio Item 1</SprkRadioItem>
        <SprkRadioItem>Radio Item 2</SprkRadioItem>
        <SprkRadioItem>Radio Item 3</SprkRadioItem>
        <SprkErrorContainer message="test message" id="test-error-id" />
        <SprkHelperText id="test-helper-id" />
      </SprkRadioGroup>,
    );

    expect(
      wrapper
        .find('.sprk-b-InputContainer')
        .getDOMNode()
        .getAttribute('aria-describedby'),
    ).toBe('additional-value test-error-id test-helper-id');
  });

  it(`should not add helperTextID and errorContainerID to the
  aria-describedby if both are present and keep additional values`, () => {
    const wrapper = mount(
      <SprkRadioGroup ariaDescribedBy="value test-helper-id test-error-id">
        <SprkRadioItem>Radio Item 1</SprkRadioItem>
        <SprkRadioItem>Radio Item 2</SprkRadioItem>
        <SprkRadioItem>Radio Item 3</SprkRadioItem>
        <SprkErrorContainer message="test message" id="test-error-id" />
        <SprkHelperText id="test-helper-id" />
      </SprkRadioGroup>,
    );

    expect(
      wrapper
        .find('.sprk-b-InputContainer')
        .getDOMNode()
        .getAttribute('aria-describedby'),
    ).toBe('value test-helper-id test-error-id');
  });

  it(`should not add helperTextID and fieldErrorID to the
  aria-describedby if both are present and keep additional values`, () => {
    const wrapper = mount(
      <SprkRadioGroup ariaDescribedBy="value test-helper-id test-error-id">
        <SprkRadioItem>Radio Item 1</SprkRadioItem>
        <SprkRadioItem>Radio Item 2</SprkRadioItem>
        <SprkRadioItem>Radio Item 3</SprkRadioItem>
        <SprkFieldError id="test-error-id" />
        <SprkHelperText id="test-helper-id" />
      </SprkRadioGroup>,
    );

    expect(
      wrapper
        .find('.sprk-b-InputContainer')
        .getDOMNode()
        .getAttribute('aria-describedby'),
    ).toBe('value test-helper-id test-error-id');
  });

  it(`should not add helperTextID to the
  aria-describedby if it's present`, () => {
    const wrapper = mount(
      <SprkRadioGroup ariaDescribedBy="test-helper-id">
        <SprkRadioItem>Radio Item 1</SprkRadioItem>
        <SprkRadioItem>Radio Item 2</SprkRadioItem>
        <SprkRadioItem>Radio Item 3</SprkRadioItem>
        <SprkHelperText id="test-helper-id" />
      </SprkRadioGroup>,
    );

    expect(
      wrapper
        .find('.sprk-b-InputContainer')
        .getDOMNode()
        .getAttribute('aria-describedby'),
    ).toBe('test-helper-id');
  });

  it(`should not add errorContainerID to the
  aria-describedby if it's present`, () => {
    const wrapper = mount(
      <SprkRadioGroup ariaDescribedBy="test-id">
        <SprkRadioItem>Radio Item 1</SprkRadioItem>
        <SprkRadioItem>Radio Item 2</SprkRadioItem>
        <SprkRadioItem>Radio Item 3</SprkRadioItem>
        <SprkErrorContainer message="test message" id="test-id" />
      </SprkRadioGroup>,
    );

    expect(
      wrapper
        .find('.sprk-b-InputContainer')
        .getDOMNode()
        .getAttribute('aria-describedby'),
    ).toBe('test-id');
  });

  it(`should not add fieldErrorID to the
  aria-describedby if it's present`, () => {
    const wrapper = mount(
      <SprkRadioGroup ariaDescribedBy="test-id">
        <SprkRadioItem>Radio Item 1</SprkRadioItem>
        <SprkRadioItem>Radio Item 2</SprkRadioItem>
        <SprkRadioItem>Radio Item 3</SprkRadioItem>
        <SprkFieldError id="test-id" />
      </SprkRadioGroup>,
    );

    expect(
      wrapper
        .find('.sprk-b-InputContainer')
        .getDOMNode()
        .getAttribute('aria-describedby'),
    ).toBe('test-id');
  });

  it(`should not add aria-describedby to the container
  if there is no helper or error text`, () => {
    const wrapper = mount(
      <SprkRadioGroup>
        <SprkRadioItem>Radio Item 1</SprkRadioItem>
        <SprkRadioItem>Radio Item 2</SprkRadioItem>
        <SprkRadioItem>Radio Item 3</SprkRadioItem>
      </SprkRadioGroup>,
    );

    expect(
      wrapper
        .find('.sprk-b-InputContainer')
        .getDOMNode()
        .getAttribute('aria-describedby'),
    ).toBe(null);
  });
});
