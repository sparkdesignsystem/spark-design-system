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
  const wrapper = mount(
    <SprkSelectionInput choices={choices} variant="checkbox" />
  );
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

it('should render helper text when supplied', () => {
  const wrapper = mount(
    <SprkSelectionInput choices={choices} helperText="Sample helper text." variant="radio" />,
  );
  expect(wrapper.find('.sprk-b-HelperText').length).toBe(1);
  expect(wrapper.find('.sprk-b-HelperText').text()).toBe('Sample helper text.');
});

it('should not render helper text when not supplied', () => {
  const wrapper = mount(
    <SprkSelectionInput choices={choices} helperText="" variant="radio" valid={false} />,
  );
  expect(wrapper.find('.sprk-b-HelperText').length).toBe(0);
});

it('should render the input in an error state when valid is false', () => {
  const wrapper = mount(
    <SprkSelectionInput
      choices={choices}
      variant="checkbox"
      errorMessage="error message"
      valid={false}
    />,
  );
  expect(wrapper.find('.sprk-b-ErrorContainer').length).toBe(1);
  expect(wrapper.find('.sprk-b-ErrorContainer').text()).toBe('error message');
});

it('should render grouped options if supplied', () => {
  choices.push({
    label: 'Grouped Options',
    options: [
      {
        label: 'Option 1',
        value: 'option-1',
      },
      {
        label: 'Option 2',
        value: 'option-2',
      },
    ],
  });
  const wrapper = mount(<SprkSelectionInput variant="select" choices={choices} />);
  expect(wrapper.find('optgroup').length).toBe(1);
});
