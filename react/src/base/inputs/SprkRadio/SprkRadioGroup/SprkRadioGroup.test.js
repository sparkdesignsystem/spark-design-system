import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkRadioGroup from './SprkRadioGroup';
import SprkRadioItem from '../SprkRadioItem/SprkRadioItem';
import SprkErrorContainer from '../../SprkErrorContainer/SprkErrorContainer';

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

  it(`should render content in beforeRadios inside of
    the group, before the radios.`, () => {
    const wrapper = shallow(
      <SprkRadioGroup beforeRadios={<p>Before</p>}>
        <SprkRadioItem>Label</SprkRadioItem>
        <SprkRadioItem>Label</SprkRadioItem>
        <SprkRadioItem>Label</SprkRadioItem>
      </SprkRadioGroup>,
    );

    expect(wrapper.childAt(0).type()).toBe('p');
  });

  it(`should render content in afterRadios inside of
    the group, before the radios.`, () => {
    const wrapper = shallow(
      <SprkRadioGroup afterRadios={<p>After</p>}>
        <SprkRadioItem>Label</SprkRadioItem>
        <SprkRadioItem>Label</SprkRadioItem>
        <SprkRadioItem>Label</SprkRadioItem>
      </SprkRadioGroup>,
    );

    expect(wrapper.childAt(3).type()).toBe('p');
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

  // it(`should assign an id to SprkErrorContainer if it doesn't
  //  already have one`, () => {
  //   const wrapper = mount(
  //     <SprkRadioGroup>
  //       <SprkErrorContainer message="Error" />
  //     </SprkRadioGroup>,
  //   );
  //   expect(wrapper.find(SprkErrorContainer).props().id).toContain(
  //     'sprk-error-container-',
  //   );
  // });
});
