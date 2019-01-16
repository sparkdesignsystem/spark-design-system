import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

it('should display a text input to fill question', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('input[type="text"]').length).toBe(1);
});

it('should display a submit button to send question to the Internet Gods', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('button[type="submit"]').length).toBe(1);
});