import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkCheckboxGroup from './SprkCheckboxGroup';
import SprkCheckboxItem from '../SprkCheckboxItem/SprkCheckboxItem';
import SprkFieldset from '../../SprkFieldset/SprkFieldset';
import SprkErrorContainer from '../../SprkErrorContainer/SprkErrorContainer';

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

  it('should have container styles', () => {
    const wrapper = shallow(<SprkCheckboxGroup />);
    expect(
      wrapper.find('.sprk-b-InputContainer').hasClass('sprk-b-InputContainer'),
    ).toBe(true);
  });

  it('should apply additionalClasses', () => {
    const expected = 'test';
    const wrapper = shallow(<SprkCheckboxGroup additionalClasses={expected} />);
    expect(wrapper.find('.sprk-b-InputContainer').hasClass(expected)).toBe(
      true,
    );
  });

  it('should apply huge container class', () => {
    const wrapper = shallow(<SprkCheckboxGroup variant="huge" />);
    expect(
      wrapper
        .find('.sprk-b-InputContainer')
        .hasClass('sprk-b-InputContainer--huge'),
    ).toBe(true);
  });

  it('should apply analyticsString', () => {
    const expected = 'testAnalytics';
    const wrapper = shallow(<SprkCheckboxGroup analyticsString={expected} />);
    expect(
      wrapper.find('.sprk-b-InputContainer').prop('data-analytics'),
    ).toEqual(expected);
  });

  it('should apply data-id', () => {
    const expected = 'test-data-id';
    const wrapper = shallow(<SprkCheckboxGroup idString={expected} />);
    expect(wrapper.find('.sprk-b-InputContainer').prop('data-id')).toEqual(
      expected,
    );
  });

  it(`should assign an id to SprkErrorContainer if it doesn't
      already have one`, () => {
    const wrapper = mount(
      <SprkCheckboxGroup>
        <SprkErrorContainer message="Error" />
      </SprkCheckboxGroup>,
    );
    expect(wrapper.find(SprkErrorContainer).prop('id')).toContain(
      'sprk-error-container',
    );
  });

  it(`should assign ariaDescribedBy to SprkCheckboxItem that matches the
  supplied id on SprkErrorContainer`, () => {
    const wrapper = mount(
      <SprkCheckboxGroup>
        <SprkFieldset>
          <SprkCheckboxItem />
          <SprkCheckboxItem />
          <SprkCheckboxItem />
        </SprkFieldset>
        <SprkErrorContainer id="error-id" message="Error" />
      </SprkCheckboxGroup>,
    );
    wrapper.find('SprkCheckboxItem').forEach((item) => {
      expect(item.prop('ariaDescribedBy')).toContain('error-id');
    });
  });

  it(`when no id is given to SprkErrorContainer, it should generate one and
  put it on the SprkErrorContainer and on any SprkRadioItems`, () => {
    const wrapper = mount(
      <SprkCheckboxGroup>
        <SprkCheckboxItem />
        <SprkCheckboxItem />
        <SprkCheckboxItem />
        <SprkErrorContainer message="Error" />
      </SprkCheckboxGroup>,
    );
    wrapper.find('SprkCheckboxItem').forEach((item) => {
      expect(item.prop('ariaDescribedBy')).toContain('sprk-error-container-');
    });
  });

  it(`should not add aria-describedby
  to RadioItems when there is no
  ErrorContainer or HelperText`, () => {
    const wrapper = mount(
      <SprkCheckboxGroup>
        <SprkCheckboxItem />
        <SprkCheckboxItem />
        <SprkCheckboxItem />
      </SprkCheckboxGroup>,
    );

    wrapper.find(SprkCheckboxItem).forEach((item) => {
      expect(typeof item.prop('ariaDescribedBy') === 'undefined').toEqual(true);
    });
  });

  it(`when no id is given to SprkErrorContainer, it should generate
  one and put it on the SprkErrorContainer and on any
  SprkCheckboxItems in the fieldset`, () => {
    const wrapper = mount(
      <SprkCheckboxGroup>
        <SprkCheckboxItem />
        <SprkCheckboxItem />
        <SprkCheckboxItem />
        <SprkErrorContainer message="Error" />
      </SprkCheckboxGroup>,
    );
    wrapper.find('SprkCheckboxItem').forEach((item) => {
      expect(item.prop('ariaDescribedBy')).toContain('sprk-error-container-');
    });
  });
});
