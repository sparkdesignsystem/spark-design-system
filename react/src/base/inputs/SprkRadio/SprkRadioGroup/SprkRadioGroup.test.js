import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkRadioGroup from './SprkRadioGroup';
import SprkRadioItem from '../SprkRadioItem/SprkRadioItem';
import SprkErrorContainer from '../../SprkErrorContainer/SprkErrorContainer';
import SprkFieldError from '../../SprkFieldError/SprkFieldError';
import SprkHelperText from '../../SprkHelperText/SprkHelperText';
import SprkFieldSet from '../../SprkFieldSet/SprkFieldSet';
import SprkLegend from '../../SprkLegend/SprkLegend';

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
    const wrapper = mount(
      <SprkRadioGroup>
        <SprkFieldSet>
          <SprkRadioItem>
            Label<p>Test</p>
          </SprkRadioItem>
          <SprkRadioItem>Label</SprkRadioItem>
          <SprkRadioItem>Label</SprkRadioItem>
        </SprkFieldSet>
      </SprkRadioGroup>,
    );
    expect(wrapper.find('SprkRadioItem').length).toBe(3);
    expect(wrapper.find('label').length).toBe(3);
    expect(wrapper.find('p').length).toBe(1);
  });

  it(`should render additional children inside`, () => {
    const wrapper = shallow(
      <SprkRadioGroup>
        <SprkFieldSet>
          <SprkRadioItem>Label</SprkRadioItem>
          <SprkRadioItem>Label</SprkRadioItem>
          <SprkRadioItem>Label</SprkRadioItem>
        </SprkFieldSet>
        <p>Test</p>
      </SprkRadioGroup>,
    );
    expect(wrapper.find('SprkRadioItem').length).toBe(3);
    expect(wrapper.find('p').length).toBe(1);
  });

  it('should have container styles', () => {
    const wrapper = mount(<SprkRadioGroup />);
    expect(wrapper.find('div').hasClass('sprk-b-InputContainer')).toBe(true);
    expect(wrapper.find('div').getDOMNode().classList.length).toBe(1);
  });

  it('should apply additionalClasses', () => {
    const expected = 'test';
    const wrapper = mount(<SprkRadioGroup additionalClasses={expected} />);
    expect(wrapper.find('.sprk-b-InputContainer').hasClass(expected)).toBe(
      true,
    );
    expect(
      wrapper.find('.sprk-b-InputContainer').getDOMNode().classList.length,
    ).toBe(2);
  });

  it('should apply huge container class', () => {
    const wrapper = mount(<SprkRadioGroup variant="huge" />);
    expect(
      wrapper
        .find('.sprk-b-InputContainer')
        .hasClass('sprk-b-InputContainer--huge'),
    ).toBe(true);
    expect(
      wrapper.find('.sprk-b-InputContainer').getDOMNode().classList.length,
    ).toBe(2);
  });

  it('should apply analyticsString', () => {
    const expected = 'testAnalytics';
    const wrapper = shallow(<SprkRadioGroup analyticsString={expected} />);
    expect(
      wrapper.find('.sprk-b-InputContainer').prop('data-analytics'),
    ).toEqual(expected);
  });

  it('should not render data-analytics if no analyticsString', () => {
    const wrapper = shallow(<SprkRadioGroup />);
    expect(wrapper.find('[data-analytics]').length).toBe(0);
  });

  it('should apply data-id', () => {
    const expected = 'test-data-id';
    const wrapper = shallow(<SprkRadioGroup idString={expected} />);
    expect(wrapper.find('.sprk-b-InputContainer').prop('data-id')).toEqual(
      expected,
    );
  });

  it('should not render data-id if no idString', () => {
    const wrapper = shallow(<SprkRadioGroup />);
    expect(wrapper.find('[data-id]').length).toBe(0);
  });

  it(`should add the helperTextID to the aria-describedby
  on the legend if it isn't present`, () => {
    const wrapper = mount(
      <SprkRadioGroup>
        <SprkLegend>Radio Group Label</SprkLegend>
        <SprkRadioItem>Radio Item 1</SprkRadioItem>
        <SprkRadioItem>Radio Item 2</SprkRadioItem>
        <SprkRadioItem>Radio Item 3</SprkRadioItem>
        <SprkHelperText id="test-id" />
      </SprkRadioGroup>,
    );

    expect(
      wrapper
        .find('.sprk-b-Legend')
        .getDOMNode()
        .getAttribute('aria-describedby'),
    ).toBe('test-id');
  });

  it(`should add the helperTextID to the aria-describedby
  on the grandchild legend if it isn't present`, () => {
    const wrapper = mount(
      <SprkRadioGroup>
        <SprkFieldSet>
          <SprkLegend>Radio Group Label</SprkLegend>
          <SprkRadioItem>Radio Item 1</SprkRadioItem>
          <SprkRadioItem>Radio Item 2</SprkRadioItem>
          <SprkRadioItem>Radio Item 3</SprkRadioItem>
        </SprkFieldSet>
        <SprkHelperText id="test-id" />
      </SprkRadioGroup>,
    );

    expect(
      wrapper
        .find('.sprk-b-Legend')
        .getDOMNode()
        .getAttribute('aria-describedby'),
    ).toBe('test-id');
  });

  it(`should add the errorContainerID to the aria-describedby
  on the legend if it isn't present`, () => {
    const wrapper = mount(
      <SprkRadioGroup>
        <SprkLegend>Radio Group Label</SprkLegend>
        <SprkRadioItem>Radio Item 1</SprkRadioItem>
        <SprkRadioItem>Radio Item 2</SprkRadioItem>
        <SprkRadioItem>Radio Item 3</SprkRadioItem>
        <SprkErrorContainer id="test-id" message="test message" />
      </SprkRadioGroup>,
    );

    expect(
      wrapper
        .find('.sprk-b-Legend')
        .getDOMNode()
        .getAttribute('aria-describedby'),
    ).toBe('test-id');
  });

  it(`should add the fieldErrorID to the aria-describedby
  on the legend if it isn't present`, () => {
    const wrapper = mount(
      <SprkRadioGroup>
        <SprkLegend>Radio Group Label</SprkLegend>
        <SprkRadioItem>Radio Item 1</SprkRadioItem>
        <SprkRadioItem>Radio Item 2</SprkRadioItem>
        <SprkRadioItem>Radio Item 3</SprkRadioItem>
        <SprkFieldError id="test-id" />
      </SprkRadioGroup>,
    );

    expect(
      wrapper
        .find('.sprk-b-Legend')
        .getDOMNode()
        .getAttribute('aria-describedby'),
    ).toBe('test-id');
  });

  it(`should allow additional values be passed to
  the aria-describedby on the legend`, () => {
    const wrapper = mount(
      <SprkRadioGroup>
        <SprkLegend ariaDescribedBy="additional-value">
          Radio Group Label
        </SprkLegend>
        <SprkRadioItem>Radio Item 1</SprkRadioItem>
        <SprkRadioItem>Radio Item 2</SprkRadioItem>
        <SprkRadioItem>Radio Item 3</SprkRadioItem>
        <SprkFieldError id="test-id" />
      </SprkRadioGroup>,
    );

    expect(
      wrapper
        .find('.sprk-b-Legend')
        .getDOMNode()
        .getAttribute('aria-describedby'),
    ).toBe('additional-value test-id');
  });

  it(`should add helperTextID and fieldErrorID to the
  aria-describedby on the legend if neither are present`, () => {
    const wrapper = mount(
      <SprkRadioGroup>
        <SprkLegend>Radio Group Label</SprkLegend>
        <SprkRadioItem>Radio Item 1</SprkRadioItem>
        <SprkRadioItem>Radio Item 2</SprkRadioItem>
        <SprkRadioItem>Radio Item 3</SprkRadioItem>
        <SprkFieldError id="test-error-id" />
        <SprkHelperText id="test-helper-id" />
      </SprkRadioGroup>,
    );

    expect(
      wrapper
        .find('.sprk-b-Legend')
        .getDOMNode()
        .getAttribute('aria-describedby'),
    ).toBe('test-error-id test-helper-id');
  });

  it(`should add helperTextID and errorContainerID to the
  aria-describedby on the legend if neither are present`, () => {
    const wrapper = mount(
      <SprkRadioGroup>
        <SprkLegend>Radio Group Label</SprkLegend>
        <SprkRadioItem>Radio Item 1</SprkRadioItem>
        <SprkRadioItem>Radio Item 2</SprkRadioItem>
        <SprkRadioItem>Radio Item 3</SprkRadioItem>
        <SprkErrorContainer message="test message" id="test-error-id" />
        <SprkHelperText id="test-helper-id" />
      </SprkRadioGroup>,
    );

    expect(
      wrapper
        .find('.sprk-b-Legend')
        .getDOMNode()
        .getAttribute('aria-describedby'),
    ).toBe('test-error-id test-helper-id');
  });

  it(`should add helperTextID and fieldErrorID to the aria-describedby
  on the legend if neither are present and keep additional values`, () => {
    const wrapper = mount(
      <SprkRadioGroup>
        <SprkLegend ariaDescribedBy="additional-value">
          Radio Group Label
        </SprkLegend>
        <SprkRadioItem>Radio Item 1</SprkRadioItem>
        <SprkRadioItem>Radio Item 2</SprkRadioItem>
        <SprkRadioItem>Radio Item 3</SprkRadioItem>
        <SprkFieldError id="test-error-id" />
        <SprkHelperText id="test-helper-id" />
      </SprkRadioGroup>,
    );

    expect(
      wrapper
        .find('.sprk-b-Legend')
        .getDOMNode()
        .getAttribute('aria-describedby'),
    ).toBe('additional-value test-error-id test-helper-id');
  });

  it(`should add helperTextID and errorContainerID to the aria-describedby
  on the legend if neither are present and keep additional values`, () => {
    const wrapper = mount(
      <SprkRadioGroup>
        <SprkLegend ariaDescribedBy="additional-value">
          Radio Group Label
        </SprkLegend>
        <SprkRadioItem>Radio Item 1</SprkRadioItem>
        <SprkRadioItem>Radio Item 2</SprkRadioItem>
        <SprkRadioItem>Radio Item 3</SprkRadioItem>
        <SprkErrorContainer message="test message" id="test-error-id" />
        <SprkHelperText id="test-helper-id" />
      </SprkRadioGroup>,
    );

    expect(
      wrapper
        .find('.sprk-b-Legend')
        .getDOMNode()
        .getAttribute('aria-describedby'),
    ).toBe('additional-value test-error-id test-helper-id');
  });

  it(`should not add helperTextID and errorContainerID to the aria-describedby
  on the legend if both are present and keep additional values`, () => {
    const wrapper = mount(
      <SprkRadioGroup>
        <SprkLegend ariaDescribedBy="value test-helper-id test-error-id">
          Radio Group Label
        </SprkLegend>
        <SprkRadioItem>Radio Item 1</SprkRadioItem>
        <SprkRadioItem>Radio Item 2</SprkRadioItem>
        <SprkRadioItem>Radio Item 3</SprkRadioItem>
        <SprkErrorContainer message="test message" id="test-error-id" />
        <SprkHelperText id="test-helper-id" />
      </SprkRadioGroup>,
    );

    expect(
      wrapper
        .find('.sprk-b-Legend')
        .getDOMNode()
        .getAttribute('aria-describedby'),
    ).toBe('value test-helper-id test-error-id');
  });

  it(`should not add helperTextID and fieldErrorID to the aria-describedby
  on the legend if both are present and keep additional values`, () => {
    const wrapper = mount(
      <SprkRadioGroup>
        <SprkLegend ariaDescribedBy="value test-helper-id test-error-id">
          Radio Group Label
        </SprkLegend>
        <SprkRadioItem>Radio Item 1</SprkRadioItem>
        <SprkRadioItem>Radio Item 2</SprkRadioItem>
        <SprkRadioItem>Radio Item 3</SprkRadioItem>
        <SprkFieldError id="test-error-id" />
        <SprkHelperText id="test-helper-id" />
      </SprkRadioGroup>,
    );

    expect(
      wrapper
        .find('.sprk-b-Legend')
        .getDOMNode()
        .getAttribute('aria-describedby'),
    ).toBe('value test-helper-id test-error-id');
  });

  it(`should not add helperTextID to the
  aria-describedby on the legend if it's present`, () => {
    const wrapper = mount(
      <SprkRadioGroup>
        <SprkLegend ariaDescribedBy="test-helper-id">
          Radio Group Label
        </SprkLegend>
        <SprkRadioItem>Radio Item 1</SprkRadioItem>
        <SprkRadioItem>Radio Item 2</SprkRadioItem>
        <SprkRadioItem>Radio Item 3</SprkRadioItem>
        <SprkHelperText id="test-helper-id" />
      </SprkRadioGroup>,
    );

    expect(
      wrapper
        .find('.sprk-b-Legend')
        .getDOMNode()
        .getAttribute('aria-describedby'),
    ).toBe('test-helper-id');
  });

  it(`should not add errorContainerID to the
  aria-describedby on the legend if it's present`, () => {
    const wrapper = mount(
      <SprkRadioGroup>
        <SprkLegend ariaDescribedBy="test-id">Radio Group Label</SprkLegend>
        <SprkRadioItem>Radio Item 1</SprkRadioItem>
        <SprkRadioItem>Radio Item 2</SprkRadioItem>
        <SprkRadioItem>Radio Item 3</SprkRadioItem>
        <SprkErrorContainer message="test message" id="test-id" />
      </SprkRadioGroup>,
    );

    expect(
      wrapper
        .find('.sprk-b-Legend')
        .getDOMNode()
        .getAttribute('aria-describedby'),
    ).toBe('test-id');
  });

  it(`should not add fieldErrorID to the
  aria-describedby on the legend if it's present`, () => {
    const wrapper = mount(
      <SprkRadioGroup>
        <SprkLegend ariaDescribedBy="test-id">Radio Group Label</SprkLegend>
        <SprkRadioItem>Radio Item 1</SprkRadioItem>
        <SprkRadioItem>Radio Item 2</SprkRadioItem>
        <SprkRadioItem>Radio Item 3</SprkRadioItem>
        <SprkFieldError id="test-id" />
      </SprkRadioGroup>,
    );

    expect(
      wrapper
        .find('.sprk-b-Legend')
        .getDOMNode()
        .getAttribute('aria-describedby'),
    ).toBe('test-id');
  });

  it(`should not add aria-describedby to the legend
  if there is no helper or error text`, () => {
    const wrapper = mount(
      <SprkRadioGroup>
        <SprkLegend>Radio Group Label</SprkLegend>
        <SprkRadioItem>Radio Item 1</SprkRadioItem>
        <SprkRadioItem>Radio Item 2</SprkRadioItem>
        <SprkRadioItem>Radio Item 3</SprkRadioItem>
      </SprkRadioGroup>,
    );

    expect(
      wrapper
        .find('.sprk-b-Legend')
        .getDOMNode()
        .getAttribute('aria-describedby'),
    ).toBe(null);
  });
});
