import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkFlagFigure from './SprkFlagFigure';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkFlag:', () => {
  it('should display default styles', () => {
    const wrapper = shallow(
      <SprkFlagFigure />
    );
    expect(wrapper.hasClass('sprk-o-Flag__figure')).toBe(true);
  });
});
