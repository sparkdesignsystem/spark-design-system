/* global it expect */
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import SprkToggle from './SprkToggle';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkToggle:', () => {
  it('should display one element with the correct additional classes', () => {
    const wrapper = mount(
      <SprkToggle triggerText="Toggle title" additionalClasses="sprk-o-Stack">
        Body text
      </SprkToggle>,
    );
    expect(wrapper.find('div.sprk-o-Stack').length).toBe(1);
  });

  it('should default to open if defaultOpen is true', () => {
    const wrapper = shallow(
      <SprkToggle isDefaultOpen triggerText="Toggle title">
        Body text
      </SprkToggle>,
    );
    expect(wrapper.state().isOpen).toBe(true);
  });

  it('should default to open if isOpen is true', () => {
    const wrapper = shallow(
      <SprkToggle isOpen triggerText="Toggle title">
        Body text
      </SprkToggle>,
    );
    expect(wrapper.state().isOpen).toBe(true);
  });

  it('should prefer isOpen to isDefaultOpen if both are set', () => {
    const wrapper = shallow(
      <SprkToggle isOpen isDefaultOpen={false} triggerText="Toggle title">
        Body text
      </SprkToggle>,
    );
    expect(wrapper.state().isOpen).toBe(true);
  });

  it('should toggle open on click', () => {
    const wrapper = mount(
      <SprkToggle triggerText="Toggle title">Body text</SprkToggle>,
    );
    expect(wrapper.state().isOpen).toBe(false);
    wrapper.find('button').simulate('click');
    expect(wrapper.state().isOpen).toBe(true);
    wrapper.find('button').simulate('click');
    expect(wrapper.state().isOpen).toBe(false);
  });

  it('should run additional onClick function and toggle on click', () => {
    const expectedFunc = sinon.spy();
    const wrapper = mount(
      <SprkToggle triggerText="Toggle title" onClick={expectedFunc}>
        Body text
      </SprkToggle>,
    );
    expect(wrapper.state().isOpen).toBe(false);
    wrapper.find('button').simulate('click');
    expect(wrapper.state().isOpen).toBe(true);
    expect(expectedFunc.called).toBe(true);
    wrapper.find('button').simulate('click');
    expect(wrapper.state().isOpen).toBe(false);
    expect(expectedFunc.called).toBe(true);
  });

  it('should add a class to icon when opened', () => {
    const wrapper = mount(
      <SprkToggle triggerText="Toggle title">Body text</SprkToggle>,
    );
    wrapper.find('button').simulate('click');
    expect(wrapper.find('.sprk-c-Icon--open').length).toBe(1);
  });

  it('should add aria-expanded="true" when the toggle is open', () => {
    const wrapper = mount(
      <SprkToggle triggerText="Toggle title">Body text</SprkToggle>,
    );
    wrapper.find('button').simulate('click');
    expect(wrapper.find('[aria-expanded="true"]').length).toBe(1);
  });

  it(`should add aria-controls="custom_control" and id="custom_control"
    when the contentId is passed`, () => {
    const wrapper = mount(
      <SprkToggle triggerText="Toggle title" contentId="custom_control">
        Body text
      </SprkToggle>,
    );
    expect(wrapper.find('[aria-controls="custom_control"]').length).toBe(1);
    expect(wrapper.find('div#custom_control').length).toBe(1);
  });

  it('should add aria-controls and id when the contentId is not passed', () => {
    const wrapper = mount(
      <SprkToggle triggerText="Toggle title">Body text</SprkToggle>,
    );
    const buttonAriaControls = wrapper.find('button').prop('aria-controls');
    const toggleContentId = wrapper
      .find('.sprk-c-Toggle__content')
      .at(1)
      .prop('id');

    expect(toggleContentId).toMatch(/sprk_toggle_content_\d/);
    expect(toggleContentId).toEqual(buttonAriaControls);
    expect(wrapper.find(`div#${toggleContentId}`).length).toBe(1);
  });

  it('should not change id when toggled', () => {
    const wrapper = mount(
      <SprkToggle triggerText="Toggle title">Body text</SprkToggle>,
    );
    const buttonAriaControls = wrapper.find('button').prop('aria-controls');
    const toggleContentId = wrapper
      .find('.sprk-c-Toggle__content')
      .at(1)
      .prop('id');

    expect(toggleContentId).toMatch(/sprk_toggle_content_\d/);
    expect(toggleContentId).toEqual(buttonAriaControls);
    expect(wrapper.find(`div#${toggleContentId}`).length).toBe(1);
    expect(wrapper.state().isOpen).toBe(false);

    wrapper.find('button').simulate('click');

    const postClickToggleContentId = wrapper
      .find('.sprk-c-Toggle__content')
      .at(1)
      .prop('id');

    expect(wrapper.state().isOpen).toBe(true);
    expect(toggleContentId).toMatch(postClickToggleContentId);
    expect(buttonAriaControls).toEqual(postClickToggleContentId);
  });

  it(`should add classes to the content if contentAdditionalClasses
  are set`, () => {
    const wrapper = mount(
      <SprkToggle triggerText="Toggle title" contentAdditionalClasses="test">
        Body text
      </SprkToggle>,
    );
    const toggleContent = wrapper.find('.sprk-c-Toggle__content').at(1);
    expect(toggleContent.hasClass('test')).toBe(true);
  });

  it(`should add classes to the icon if iconAdditionalClasses
  are set`, () => {
    const wrapper = mount(
      <SprkToggle triggerText="Toggle title" iconAdditionalClasses="test">
        Body text
      </SprkToggle>,
    );
    const toggleIcon = wrapper.find('.sprk-c-Icon--toggle');
    expect(toggleIcon.hasClass('test')).toBe(true);
  });

  it(`should add classes to the icon if iconAddClasses
  are set`, () => {
    const wrapper = mount(
      <SprkToggle triggerText="Toggle title" iconAddClasses="test">
        Body text
      </SprkToggle>,
    );
    const toggleIcon = wrapper.find('.sprk-c-Icon--toggle');
    expect(toggleIcon.hasClass('test')).toBe(true);
  });

  it(`should prefer iconAdditionalClasses to iconAddClasses if both
  are set`, () => {
    const wrapper = mount(
      <SprkToggle
        triggerText="Toggle title"
        iconAddClasses="test"
        iconAdditionalClasses="newTest"
      >
        Body text
      </SprkToggle>,
    );
    const toggleIcon = wrapper.find('.sprk-c-Icon--toggle');
    expect(toggleIcon.hasClass('newTest')).toBe(true);
    expect(toggleIcon.hasClass('test')).toBe(false);
  });

  it(`should add classes to the title if triggerTextAdditionalClasses
  are set`, () => {
    const wrapper = mount(
      <SprkToggle
        triggerText="Toggle title"
        triggerTextAdditionalClasses="test"
      >
        Body text
      </SprkToggle>,
    );
    const toggleTitle = wrapper.find('.sprk-c-Toggle__trigger');
    expect(toggleTitle.hasClass('test')).toBe(true);
  });

  it(`should add classes to the title if titleAddClasses
  are set`, () => {
    const wrapper = mount(
      <SprkToggle triggerText="Toggle title" titleAddClasses="test">
        Body text
      </SprkToggle>,
    );
    const toggleTitle = wrapper.find('.sprk-c-Toggle__trigger');
    expect(toggleTitle.hasClass('test')).toBe(true);
  });

  it(`should prefer triggerTextAdditionalClasses to titleAddClasses if both
  are set`, () => {
    const wrapper = mount(
      <SprkToggle
        triggerText="Toggle title"
        titleAddClasses="test"
        triggerTextAdditionalClasses="newTest"
      >
        Body text
      </SprkToggle>,
    );
    const toggleTitle = wrapper.find('.sprk-c-Toggle__trigger');
    expect(toggleTitle.hasClass('newTest')).toBe(true);
    expect(toggleTitle.hasClass('test')).toBe(false);
  });

  it(`should add title (deprecated)`, () => {
    const wrapper = mount(
      <SprkToggle title="Toggle title">Body text</SprkToggle>,
    );
    const toggleTitle = wrapper.find('.sprk-c-Toggle__trigger');
    expect(toggleTitle.text()).toEqual('Toggle title');
  });

  it(`should prefer triggerText over title`, () => {
    const wrapper = mount(
      <SprkToggle triggerText="Toggle title" title="old title">
        Body text
      </SprkToggle>,
    );
    const toggleTitle = wrapper.find('.sprk-c-Toggle__trigger');
    expect(toggleTitle.text()).toEqual('Toggle title');
  });
});
