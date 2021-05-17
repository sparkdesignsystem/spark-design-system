import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkCheckboxGroup from './SprkCheckboxGroup';
import SprkCheckboxItem from '../SprkCheckboxItem/SprkCheckboxItem';
import SprkErrorContainer from '../../SprkErrorContainer/SprkErrorContainer';
import SprkFieldError from '../../SprkFieldError/SprkFieldError';
import SprkHelperText from '../../SprkHelperText/SprkHelperText';
import SprkFieldset from '../../SprkFieldset/SprkFieldset';
import SprkLegend from '../../SprkLegend/SprkLegend';
import SprkStack from '../../../../objects/stack/SprkStack';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkCheckboxGroup:', () => {
  it('should render SprkCheckbox inside of it', () => {
    const wrapper = mount(
      <SprkCheckboxGroup>
        <SprkCheckboxItem>Checkbox Item 1</SprkCheckboxItem>
        <SprkCheckboxItem>Checkbox Item 2</SprkCheckboxItem>
        <SprkCheckboxItem>Checkbox Item 3</SprkCheckboxItem>
      </SprkCheckboxGroup>,
    );
    expect(wrapper.find('SprkCheckboxItem').length).toBe(3);
  });

  it(`should render SprkCheckboxItem inside of it when
  they are grandchildren`, () => {
    const wrapper = mount(
      <SprkCheckboxGroup>
        <SprkFieldset>
          <SprkCheckboxItem>
            Label<p>Test</p>
          </SprkCheckboxItem>
          <SprkCheckboxItem>Label</SprkCheckboxItem>
          <SprkCheckboxItem>Label</SprkCheckboxItem>
        </SprkFieldset>
      </SprkCheckboxGroup>,
    );
    expect(wrapper.find('SprkCheckboxItem').length).toBe(3);
    expect(wrapper.find('label').length).toBe(3);
    expect(wrapper.find('p').length).toBe(1);
  });

  it(`should render additional children inside`, () => {
    const wrapper = shallow(
      <SprkCheckboxGroup>
        <SprkFieldset>
          <SprkCheckboxItem>Label</SprkCheckboxItem>
          <SprkCheckboxItem>Label</SprkCheckboxItem>
          <SprkCheckboxItem>Label</SprkCheckboxItem>
        </SprkFieldset>
        <p>Test</p>
      </SprkCheckboxGroup>,
    );
    expect(wrapper.find('SprkCheckboxItem').length).toBe(3);
    expect(wrapper.find('p').length).toBe(1);
  });

  it('should have container styles', () => {
    const wrapper = mount(<SprkCheckboxGroup />);
    expect(wrapper.find('div').hasClass('sprk-b-InputContainer')).toBe(true);
    expect(wrapper.find('div').getDOMNode().classList.length).toBe(1);
  });

  it('should apply additionalClasses', () => {
    const expected = 'test';
    const wrapper = mount(<SprkCheckboxGroup additionalClasses={expected} />);
    expect(wrapper.find('.sprk-b-InputContainer').hasClass(expected)).toBe(
      true,
    );
    expect(
      wrapper.find('.sprk-b-InputContainer').getDOMNode().classList.length,
    ).toBe(2);
  });

  it('should apply huge container class', () => {
    const wrapper = mount(<SprkCheckboxGroup variant="huge" />);
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
    const wrapper = shallow(<SprkCheckboxGroup analyticsString={expected} />);
    expect(
      wrapper.find('.sprk-b-InputContainer').prop('data-analytics'),
    ).toEqual(expected);
  });

  it('should not render data-analytics if no analyticsString', () => {
    const wrapper = shallow(<SprkCheckboxGroup />);
    expect(wrapper.find('[data-analytics]').length).toBe(0);
  });

  it('should apply data-id', () => {
    const expected = 'test-data-id';
    const wrapper = shallow(<SprkCheckboxGroup idString={expected} />);
    expect(wrapper.find('.sprk-b-InputContainer').prop('data-id')).toEqual(
      expected,
    );
  });

  it('should not render data-id if no idString', () => {
    const wrapper = shallow(<SprkCheckboxGroup />);
    expect(wrapper.find('[data-id]').length).toBe(0);
  });

  it(`should add the helperTextID to the aria-describedby
  on the fieldset if it isn't present`, () => {
    const wrapper = mount(
      <SprkCheckboxGroup>
        <SprkFieldset>
          <SprkLegend>Checkbox Group Label</SprkLegend>
          <SprkCheckboxItem>Checkbox Item 1</SprkCheckboxItem>
          <SprkCheckboxItem>Checkbox Item 2</SprkCheckboxItem>
          <SprkCheckboxItem>Checkbox Item 3</SprkCheckboxItem>
        </SprkFieldset>
        <SprkHelperText id="test-id" />
      </SprkCheckboxGroup>,
    );

    expect(
      wrapper
        .find('.sprk-b-Fieldset')
        .getDOMNode()
        .getAttribute('aria-describedby'),
    ).toBe('test-id');
  });

  it(`should add the grandchild helperTextID to the aria-describedby
  on the fieldset if it isn't present`, () => {
    const wrapper = mount(
      <SprkCheckboxGroup>
        <SprkFieldset>
          <SprkLegend>Checkbox Group Label</SprkLegend>
          <SprkCheckboxItem>Checkbox Item 1</SprkCheckboxItem>
          <SprkCheckboxItem>Checkbox Item 2</SprkCheckboxItem>
          <SprkCheckboxItem>Checkbox Item 3</SprkCheckboxItem>
        </SprkFieldset>
        <div>
          <SprkHelperText id="test-id" />
        </div>
      </SprkCheckboxGroup>,
    );

    expect(
      wrapper
        .find('.sprk-b-Fieldset')
        .getDOMNode()
        .getAttribute('aria-describedby'),
    ).toBe('test-id');
  });

  it(`should add the helperTextID to the aria-describedby
  on the grandchild fieldset if it isn't present`, () => {
    const wrapper = mount(
      <SprkCheckboxGroup>
        <SprkStack>
          <SprkFieldset>
            <SprkLegend>Checkbox Group Label</SprkLegend>
            <SprkCheckboxItem>Checkbox Item 1</SprkCheckboxItem>
            <SprkCheckboxItem>Checkbox Item 2</SprkCheckboxItem>
            <SprkCheckboxItem>Checkbox Item 3</SprkCheckboxItem>
          </SprkFieldset>
        </SprkStack>
        <SprkHelperText id="test-id" />
      </SprkCheckboxGroup>,
    );

    expect(
      wrapper
        .find('.sprk-b-Fieldset')
        .getDOMNode()
        .getAttribute('aria-describedby'),
    ).toBe('test-id');
  });

  it(`should add the errorContainerID to the aria-describedby
  on the fieldset if it isn't present`, () => {
    const wrapper = mount(
      <SprkCheckboxGroup>
        <SprkFieldset>
          <SprkLegend>Checkbox Group Label</SprkLegend>
          <SprkCheckboxItem>Checkbox Item 1</SprkCheckboxItem>
          <SprkCheckboxItem>Checkbox Item 2</SprkCheckboxItem>
          <SprkCheckboxItem>Checkbox Item 3</SprkCheckboxItem>
        </SprkFieldset>
        <SprkErrorContainer id="test-id" message="test message" />
      </SprkCheckboxGroup>,
    );

    expect(
      wrapper
        .find('.sprk-b-Fieldset')
        .getDOMNode()
        .getAttribute('aria-describedby'),
    ).toBe('test-id');
  });

  it(`should add the grandchild errorContainerID to the aria-describedby
  on the fieldset if it isn't present`, () => {
    const wrapper = mount(
      <SprkCheckboxGroup>
        <SprkFieldset>
          <SprkLegend>Checkbox Group Label</SprkLegend>
          <SprkCheckboxItem>Checkbox Item 1</SprkCheckboxItem>
          <SprkCheckboxItem>Checkbox Item 2</SprkCheckboxItem>
          <SprkCheckboxItem>Checkbox Item 3</SprkCheckboxItem>
        </SprkFieldset>
        <div>
          <SprkErrorContainer id="test-id" message="test message" />
        </div>
      </SprkCheckboxGroup>,
    );

    expect(
      wrapper
        .find('.sprk-b-Fieldset')
        .getDOMNode()
        .getAttribute('aria-describedby'),
    ).toBe('test-id');
  });

  it(`should add the fieldErrorID to the aria-describedby
  on the fieldset if it isn't present`, () => {
    const wrapper = mount(
      <SprkCheckboxGroup>
        <SprkFieldset>
          <SprkLegend>Checkbox Group Label</SprkLegend>
          <SprkCheckboxItem>Checkbox Item 1</SprkCheckboxItem>
          <SprkCheckboxItem>Checkbox Item 2</SprkCheckboxItem>
          <SprkCheckboxItem>Checkbox Item 3</SprkCheckboxItem>
        </SprkFieldset>
        <SprkFieldError id="test-id" />
      </SprkCheckboxGroup>,
    );

    expect(
      wrapper
        .find('.sprk-b-Fieldset')
        .getDOMNode()
        .getAttribute('aria-describedby'),
    ).toBe('test-id');
  });

  it(`should add the grandchild fieldErrorID to the aria-describedby
  on the fieldset if it isn't present`, () => {
    const wrapper = mount(
      <SprkCheckboxGroup>
        <SprkFieldset>
          <SprkLegend>Checkbox Group Label</SprkLegend>
          <SprkCheckboxItem>Checkbox Item 1</SprkCheckboxItem>
          <SprkCheckboxItem>Checkbox Item 2</SprkCheckboxItem>
          <SprkCheckboxItem>Checkbox Item 3</SprkCheckboxItem>
        </SprkFieldset>
        <div>
          <SprkFieldError id="test-id" />
        </div>
      </SprkCheckboxGroup>,
    );

    expect(
      wrapper
        .find('.sprk-b-Fieldset')
        .getDOMNode()
        .getAttribute('aria-describedby'),
    ).toBe('test-id');
  });

  it(`should allow additional values be passed to
  the aria-describedby on the fieldset`, () => {
    const wrapper = mount(
      <SprkCheckboxGroup>
        <SprkFieldset ariaDescribedBy="additional-value">
          <SprkLegend>Checkbox Group Label</SprkLegend>
          <SprkCheckboxItem>Checkbox Item 1</SprkCheckboxItem>
          <SprkCheckboxItem>Checkbox Item 2</SprkCheckboxItem>
          <SprkCheckboxItem>Checkbox Item 3</SprkCheckboxItem>
        </SprkFieldset>
        <SprkFieldError id="test-id" />
      </SprkCheckboxGroup>,
    );

    expect(
      wrapper
        .find('.sprk-b-Fieldset')
        .getDOMNode()
        .getAttribute('aria-describedby'),
    ).toBe('additional-value test-id');
  });

  it(`should add helperTextID and fieldErrorID to the
  aria-describedby on the fieldset if neither are present`, () => {
    const wrapper = mount(
      <SprkCheckboxGroup>
        <SprkFieldset>
          <SprkLegend>Checkbox Group Label</SprkLegend>
          <SprkCheckboxItem>Checkbox Item 1</SprkCheckboxItem>
          <SprkCheckboxItem>Checkbox Item 2</SprkCheckboxItem>
          <SprkCheckboxItem>Checkbox Item 3</SprkCheckboxItem>
        </SprkFieldset>
        <SprkFieldError id="test-error-id" />
        <SprkHelperText id="test-helper-id" />
      </SprkCheckboxGroup>,
    );

    expect(
      wrapper
        .find('.sprk-b-Fieldset')
        .getDOMNode()
        .getAttribute('aria-describedby'),
    ).toBe('test-helper-id test-error-id');
  });

  it(`should add helperTextID and errorContainerID to the
  aria-describedby on the fieldset if neither are present`, () => {
    const wrapper = mount(
      <SprkCheckboxGroup>
        <SprkFieldset>
          <SprkLegend>Checkbox Group Label</SprkLegend>
          <SprkCheckboxItem>Checkbox Item 1</SprkCheckboxItem>
          <SprkCheckboxItem>Checkbox Item 2</SprkCheckboxItem>
          <SprkCheckboxItem>Checkbox Item 3</SprkCheckboxItem>
        </SprkFieldset>
        <SprkErrorContainer message="test message" id="test-error-id" />
        <SprkHelperText id="test-helper-id" />
      </SprkCheckboxGroup>,
    );

    expect(
      wrapper
        .find('.sprk-b-Fieldset')
        .getDOMNode()
        .getAttribute('aria-describedby'),
    ).toBe('test-helper-id test-error-id');
  });

  it(`should add helperTextID and fieldErrorID to the aria-describedby
  on the fieldset if neither are present and keep additional values`, () => {
    const wrapper = mount(
      <SprkCheckboxGroup>
        <SprkFieldset ariaDescribedBy="additional-value">
          <SprkLegend>Checkbox Group Label</SprkLegend>
          <SprkCheckboxItem>Checkbox Item 1</SprkCheckboxItem>
          <SprkCheckboxItem>Checkbox Item 2</SprkCheckboxItem>
          <SprkCheckboxItem>Checkbox Item 3</SprkCheckboxItem>
        </SprkFieldset>
        <SprkFieldError id="test-error-id" />
        <SprkHelperText id="test-helper-id" />
      </SprkCheckboxGroup>,
    );

    expect(
      wrapper
        .find('.sprk-b-Fieldset')
        .getDOMNode()
        .getAttribute('aria-describedby'),
    ).toBe('additional-value test-helper-id test-error-id');
  });

  it(`should add helperTextID and errorContainerID to the aria-describedby
  on the fieldset if neither are present and keep additional values`, () => {
    const wrapper = mount(
      <SprkCheckboxGroup>
        <SprkFieldset ariaDescribedBy="additional-value">
          <SprkLegend>Checkbox Group Label</SprkLegend>
          <SprkCheckboxItem>Checkbox Item 1</SprkCheckboxItem>
          <SprkCheckboxItem>Checkbox Item 2</SprkCheckboxItem>
          <SprkCheckboxItem>Checkbox Item 3</SprkCheckboxItem>
        </SprkFieldset>
        <SprkErrorContainer message="test message" id="test-error-id" />
        <SprkHelperText id="test-helper-id" />
      </SprkCheckboxGroup>,
    );

    expect(
      wrapper
        .find('.sprk-b-Fieldset')
        .getDOMNode()
        .getAttribute('aria-describedby'),
    ).toBe('additional-value test-helper-id test-error-id');
  });

  it(`should not add helperTextID and errorContainerID to the aria-describedby
  on the fieldset if both are present and keep additional values`, () => {
    const wrapper = mount(
      <SprkCheckboxGroup>
        <SprkFieldset ariaDescribedBy="value test-helper-id test-error-id">
          <SprkLegend>Checkbox Group Label</SprkLegend>
          <SprkCheckboxItem>Checkbox Item 1</SprkCheckboxItem>
          <SprkCheckboxItem>Checkbox Item 2</SprkCheckboxItem>
          <SprkCheckboxItem>Checkbox Item 3</SprkCheckboxItem>
        </SprkFieldset>
        <SprkErrorContainer message="test message" id="test-error-id" />
        <SprkHelperText id="test-helper-id" />
      </SprkCheckboxGroup>,
    );

    expect(
      wrapper
        .find('.sprk-b-Fieldset')
        .getDOMNode()
        .getAttribute('aria-describedby'),
    ).toBe('value test-helper-id test-error-id');
  });

  it(`should not add helperTextID and fieldErrorID to the aria-describedby
  on the fieldset if both are present and keep additional values`, () => {
    const wrapper = mount(
      <SprkCheckboxGroup>
        <SprkFieldset ariaDescribedBy="value test-helper-id test-error-id">
          <SprkLegend>Checkbox Group Label</SprkLegend>
          <SprkCheckboxItem>Checkbox Item 1</SprkCheckboxItem>
          <SprkCheckboxItem>Checkbox Item 2</SprkCheckboxItem>
          <SprkCheckboxItem>Checkbox Item 3</SprkCheckboxItem>
        </SprkFieldset>
        <SprkFieldError id="test-error-id" />
        <SprkHelperText id="test-helper-id" />
      </SprkCheckboxGroup>,
    );

    expect(
      wrapper
        .find('.sprk-b-Fieldset')
        .getDOMNode()
        .getAttribute('aria-describedby'),
    ).toBe('value test-helper-id test-error-id');
  });

  it(`should not add helperTextID to the
  aria-describedby on the fieldset if it's present`, () => {
    const wrapper = mount(
      <SprkCheckboxGroup>
        <SprkFieldset ariaDescribedBy="test-helper-id">
          <SprkLegend>Checkbox Group Label</SprkLegend>
          <SprkCheckboxItem>Checkbox Item 1</SprkCheckboxItem>
          <SprkCheckboxItem>Checkbox Item 2</SprkCheckboxItem>
          <SprkCheckboxItem>Checkbox Item 3</SprkCheckboxItem>
        </SprkFieldset>
        <SprkHelperText id="test-helper-id" />
      </SprkCheckboxGroup>,
    );

    expect(
      wrapper
        .find('.sprk-b-Fieldset')
        .getDOMNode()
        .getAttribute('aria-describedby'),
    ).toBe('test-helper-id');
  });

  it(`should not add errorContainerID to the
  aria-describedby on the fieldset if it's present`, () => {
    const wrapper = mount(
      <SprkCheckboxGroup>
        <SprkFieldset ariaDescribedBy="test-id">
          <SprkLegend>Checkbox Group Label</SprkLegend>
          <SprkCheckboxItem>Checkbox Item 1</SprkCheckboxItem>
          <SprkCheckboxItem>Checkbox Item 2</SprkCheckboxItem>
          <SprkCheckboxItem>Checkbox Item 3</SprkCheckboxItem>
        </SprkFieldset>

        <SprkErrorContainer message="test message" id="test-id" />
      </SprkCheckboxGroup>,
    );

    expect(
      wrapper
        .find('.sprk-b-Fieldset')
        .getDOMNode()
        .getAttribute('aria-describedby'),
    ).toBe('test-id');
  });

  it(`should not add fieldErrorID to the
  aria-describedby on the fieldset if it's present`, () => {
    const wrapper = mount(
      <SprkCheckboxGroup>
        <SprkFieldset ariaDescribedBy="test-id">
          <SprkLegend>Checkbox Group Label</SprkLegend>
          <SprkCheckboxItem>Checkbox Item 1</SprkCheckboxItem>
          <SprkCheckboxItem>Checkbox Item 2</SprkCheckboxItem>
          <SprkCheckboxItem>Checkbox Item 3</SprkCheckboxItem>
        </SprkFieldset>
        <SprkFieldError id="test-id" />
      </SprkCheckboxGroup>,
    );

    expect(
      wrapper
        .find('.sprk-b-Fieldset')
        .getDOMNode()
        .getAttribute('aria-describedby'),
    ).toBe('test-id');
  });

  it(`should not add aria-describedby to the fieldset
  if there is no helper or error text`, () => {
    const wrapper = mount(
      <SprkCheckboxGroup>
        <SprkFieldset>
          <SprkLegend>Checkbox Group Label</SprkLegend>
          <SprkCheckboxItem>Checkbox Item 1</SprkCheckboxItem>
          <SprkCheckboxItem>Checkbox Item 2</SprkCheckboxItem>
          <SprkCheckboxItem>Checkbox Item 3</SprkCheckboxItem>
        </SprkFieldset>
      </SprkCheckboxGroup>,
    );

    expect(
      wrapper
        .find('.sprk-b-Fieldset')
        .getDOMNode()
        .getAttribute('aria-describedby'),
    ).toBe(null);
  });
});
