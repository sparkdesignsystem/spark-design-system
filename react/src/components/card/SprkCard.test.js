/* global it expect */
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkCard from './SprkCard';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkCard:', () => {
  it('should display a Card div with the correct base classes', () => {
    const wrapper = shallow(<SprkCard />);
    expect(wrapper.find('.sprk-o-Stack').hasClass('sprk-c-Card')).toBe(true);
  });

  it('should display children inside of Card', () => {
    const testVariable = <p>test</p>;
    const wrapper = mount(<SprkCard>{testVariable}</SprkCard>);
    const hasChildren = wrapper.find('p').contains('test');
    expect(hasChildren).toBe(true);
  });

  it('should display a Card div with the correct standout classes', () => {
    const wrapper = shallow(<SprkCard isStandout />);
    expect(wrapper.find('.sprk-c-Card').hasClass('sprk-c-Card--standout')).toBe(
      true,
    );
  });

  it('should display a Card with the correct additionalClasses', () => {
    const wrapper = shallow(<SprkCard additionalClasses="sprk-u-mam" />);
    expect(wrapper.find('.sprk-c-Card').hasClass('sprk-u-mam')).toBe(true);
  });

  it('should not add standout class if isStandout is false', () => {
    const wrapper = shallow(<SprkCard isStandout={false} />);
    expect(wrapper.find('.sprk-c-Card').hasClass('sprk-c-Card--standout')).toBe(
      false,
    );
  });

  it('should assign data-id when idString has a value', () => {
    const wrapper = mount(<SprkCard idString="321" />);
    expect(wrapper.find('[data-id="321"]').length).toBe(1);
  });

  it('should not assign data-id when idString is not provided', () => {
    const wrapper = mount(<SprkCard />);
    expect(wrapper.find('[data-id]').length).toBe(0);
  });
});
