import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkButton from './SprkButton';

Enzyme.configure({ adapter: new Adapter() });

it('should display a button element with the correct base class', () => {
  const wrapper = shallow(<SprkButton/>);
  expect(wrapper.find('button.sprk-c-Button').length).toBe(1);
});

it('should render the element as an anchor when the element prop is a', () => {
  const wrapper = shallow(<SprkButton element="a" href="#nogo" />);
  expect(wrapper.find('a[href].sprk-c-Button').length).toBe(1);
});

it('should display a button element with correct classes when variant is secondary', () => {
  const wrapper = shallow(<SprkButton variant="secondary" />);
  expect(wrapper.find('button').hasClass('sprk-c-Button--secondary')).toBe(true);
});

it('should display a button element with correct classes when variant is tertiary', () => {
  const wrapper = shallow(<SprkButton variant="tertiary" />);
  expect(wrapper.find('button').hasClass('sprk-c-Button--tertiary')).toBe(true);
});

it('if loading is not set, should not render the spinner', () => {
  const wrapper = mount(<SprkButton />);
  expect(wrapper.find('.sprk-c-Spinner').length).toBe(0);
});

it('if loading is set, should render the spinner', () => {
  const wrapper = mount(<SprkButton loading />);
  expect(wrapper.find('.sprk-c-Spinner').length).toBe(1);
});

it('should add role=button if an anchor is rendered', () => {
  const wrapper = mount(<SprkButton element="a" href="#nogo" />);
  expect(wrapper.find('[role="button"]').length).toBe(1);
});

it('should apply any unknown props as attributes on the element', () => {
  const wrapper = shallow(<SprkButton aria-labelledby="label-1" />);
  expect(wrapper.find('button[aria-labelledby="label-1"]').length).toBe(1);
});
