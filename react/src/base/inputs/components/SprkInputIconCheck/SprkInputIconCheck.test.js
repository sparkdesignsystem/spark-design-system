import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkInputIconCheck from './SprkInputIconCheck';

Enzyme.configure({ adapter: new Adapter() });

it('SprkInputIconCheck: Should render base class', () => {
  const wrapper = mount(<SprkInputIconCheck leadingIcon="percent" />);
  expect(wrapper.find('.sprk-b-InputContainer__icon-container').length).toBe(1);
});

it('SprkInputIconCheck: Should render as narrow', () => {
  const wrapper = mount(
    <SprkInputIconCheck leadingIcon="percent" narrowWidth />,
  );
  expect(
    wrapper.find('.sprk-b-InputContainer__icon-container--narrow').length,
  ).toBe(1);
});

it('SprkInputIconCheck: Should render with icon right class', () => {
  const wrapper = mount(<SprkInputIconCheck leadingIcon="percent" iconRight />);
  expect(
    wrapper.find(
      '.sprk-b-InputContainer__icon.sprk-b-InputContainer__icon--right',
    ).length,
  ).toBe(1);
});
