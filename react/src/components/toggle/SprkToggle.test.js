/* global it expect */
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkToggle from './SprkToggle';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkToggle:', () => {
  it('should display one element with the correct additional classes', () => {
    const wrapper = mount(
      <SprkToggle title="Toggle title" additionalClasses="sprk-o-Stack">
        Body text
      </SprkToggle>,
    );
    expect(wrapper.find('div.sprk-o-Stack').length).toBe(1);
  });

  it('should default to open if defaultOpen is true', () => {
    const wrapper = shallow(
      <SprkToggle isDefaultOpen title="Toggle title">
        Body text
      </SprkToggle>,
    );
    expect(wrapper.state().isOpen).toBe(true);
  });

  it('should toggle open on click', () => {
    const wrapper = mount(
      <SprkToggle title="Toggle title">Body text</SprkToggle>,
    );
    expect(wrapper.state().isOpen).toBe(false);
    wrapper.find('button').simulate('click');
    expect(wrapper.state().isOpen).toBe(true);
    wrapper.find('button').simulate('click');
    expect(wrapper.state().isOpen).toBe(false);
  });

  it('should add a class to icon when opened', () => {
    const wrapper = mount(
      <SprkToggle title="Toggle title">Body text</SprkToggle>,
    );
    wrapper.find('button').simulate('click');
    expect(wrapper.find('.sprk-c-Icon--open').length).toBe(1);
  });

  it('should add aria-expanded="true" when the toggle is open', () => {
    const wrapper = mount(
      <SprkToggle title="Toggle title">Body text</SprkToggle>,
    );
    wrapper.find('button').simulate('click');
    expect(wrapper.find('[aria-expanded="true"]').length).toBe(1);
  });

  it('should add aria-controls="custom_control" and id="custom_control" when the contentId is passed', () => {
    const wrapper = mount(
      <SprkToggle title="Toggle title" contentId="custom_control">
        Body text
      </SprkToggle>,
    );
    expect(wrapper.find('[aria-controls="custom_control"]').length).toBe(1);
    expect(wrapper.find('div#custom_control').length).toBe(1);
  });

  it('should add aria-controls and id when the contentId is not passed', () => {
    const wrapper = mount(
      <SprkToggle title="Toggle title">Body text</SprkToggle>,
    );
    expect(wrapper.find('[aria-controls="sprk_toggle_content_1"]').length).toBe(
      1,
    );
    expect(wrapper.find('div#sprk_toggle_content_1').length).toBe(1);
  });
});
