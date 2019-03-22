/* global it expect */
import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkModal from './SprkModal';

Enzyme.configure({ adapter: new Adapter() });

it('should load the module', () => {
  const wrapper = shallow(<SprkModal />);
  expect(wrapper).toExist;
});

//foo