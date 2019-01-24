import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkListItem from './SprkListItem';

Enzyme.configure({ adapter: new Adapter() });

it('should display a li element', () => {
  const wrapper = shallow(<SprkListItem/>);
  expect(wrapper.find('li').length).toBe(1);
});