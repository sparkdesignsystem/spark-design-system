import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkRadioGroup from './SprkRadioGroup';
import SprkRadioItem from '../SprkRadioItem/SprkRadioItem';
import SprkErrorContainer from '../../SprkErrorContainer/SprkErrorContainer';
import SprkFieldset from '../../SprkFieldset/SprkFieldset';

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

  it(`should assign ariaDescribedBy to SprkRadioItem that matches the
  supplied id on SprkErrorContainer`, () => {
    const wrapper = mount(
      <SprkRadioGroup>
        <SprkFieldset>
          <SprkRadioItem name="radio" />
          <SprkRadioItem name="radio" />
          <SprkRadioItem name="radio" />
        </SprkFieldset>
        <SprkErrorContainer id="error-id" message="Error" />
      </SprkRadioGroup>,
    );

    wrapper.find(SprkRadioItem).forEach((item) => {
      expect(item.props().ariaDescribedBy).toContain('error-id');
    });
  });

  it(`should not add aria-describedby to RadioItems when there is no
  ErrorContainer or HelperText`, () => {
    const wrapper = mount(
      <SprkRadioGroup>
        <SprkRadioItem name="radio" />
        <SprkRadioItem name="radio" />
        <SprkRadioItem name="radio" />
      </SprkRadioGroup>,
    );

    wrapper.find(SprkRadioItem).forEach((item) => {
      expect(typeof item.props().ariaDescribedBy === 'undefined').toEqual(true);
    });
  });
});
