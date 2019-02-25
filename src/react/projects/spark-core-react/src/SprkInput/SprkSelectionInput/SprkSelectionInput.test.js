import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkSelectionInput from './SprkSelectionInput';

Enzyme.configure({ adapter: new Adapter() });
let choices;

beforeEach(() => {
  choices = [{ name: 'item-choice', label: 'Item 1', value: '1' }];
});

it('should render an element with the correct class', () => {
  const wrapper = mount(<SprkSelectionInput choices={choices} variant="checkbox" />);
  expect(wrapper.find('.sprk-b-InputContainer').length).toBe(1);
});

it('should add classes when additionalClasses has a value', () => {
  const wrapper = mount(
    <SprkSelectionInput choices={choices} additionalClasses="sprk-u-man" variant="radio" />,
  );
  expect(wrapper.find('.sprk-b-InputContainer.sprk-u-man').length).toBe(1);
});

it('should assign data-analytics when analyticsString has a value', () => {
  const wrapper = mount(
    <SprkSelectionInput choices={choices} analyticsString="321" variant="select" />,
  );
  expect(wrapper.find('[data-analytics="321"]').length).toBe(1);
});

it('should assign data-id when idString has a value', () => {
  const wrapper = mount(<SprkSelectionInput choices={choices} idString="321" variant="checkbox" />);
  expect(wrapper.find('[data-id="321"]').length).toBe(1);
});
