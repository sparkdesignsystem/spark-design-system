import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkStackItem from './SprkStackItem';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkStackItem:', () => {
  it('should display a div element with the correct base class', () => {
    const wrapper = shallow(<SprkStackItem />);
    expect(wrapper.find('div.sprk-o-Stack__item').length).toBe(1);
  });
});
