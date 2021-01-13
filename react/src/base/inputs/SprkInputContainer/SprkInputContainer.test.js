import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkInputContainer from './SprkInputContainer';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkInputContainer:', () => {
  it('should render an element with the correct class', () => {
    const wrapper = mount(<SprkInputContainer />);
    expect(wrapper.find('.sprk-b-InputContainer').length).toBe(1);
  });

  it('should render a huge text input container with the correct class', () => {
    const wrapper = mount(<SprkInputContainer variant="huge" />);
    expect(
      wrapper
        .find('.sprk-b-InputContainer')
        .hasClass('sprk-b-InputContainer--huge'),
    ).toBe(true);
  });

  it('should add classes when additionalClasses has a value', () => {
    const wrapper = mount(
      <SprkInputContainer additionalClasses="sprk-u-man" />,
    );
    expect(wrapper.find('.sprk-b-InputContainer.sprk-u-man').length).toBe(1);
  });

  it('should assign data-analytics when analyticsString has a value', () => {
    const wrapper = mount(<SprkInputContainer analyticsString="321" />);
    expect(wrapper.find('[data-analytics="321"]').length).toBe(1);
  });

  it('should assign data-id when idString has a value', () => {
    const wrapper = mount(<SprkInputContainer idString="321" />);
    expect(wrapper.find('[data-id="321"]').length).toBe(1);
  });
});
