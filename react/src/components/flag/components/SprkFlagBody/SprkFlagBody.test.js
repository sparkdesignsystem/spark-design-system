import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkFlagBody from './SprkFlagBody';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkFlag:', () => {
  it('should display default styles', () => {
    const wrapper = shallow(
      <SprkFlagBody />
    );
    expect(wrapper.hasClass('sprk-o-Flag__body')).toBe(true);
  });
});
