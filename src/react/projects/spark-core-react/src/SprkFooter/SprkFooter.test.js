/* global it expect describe */
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkFooter from './SprkFooter';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkFooter Component', () => {
  it('should display a Footer element with the correct base class', () => {
    const wrapper = mount(
      <SprkFooter />,
    );
    expect(wrapper.find('.sprk-o-Box.sprk-o-Box--large.sprk-u-BackgroundColor--gray').length).toBe(1);
  });
});
