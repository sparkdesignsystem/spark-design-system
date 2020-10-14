/* global it expect jest */
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkAccordionItem from './SprkAccordionItem';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkAccordionItem:', () => {
  it('should display an element with the correct base class', () => {
    const wrapper = mount(
      <SprkAccordionItem heading="test">test</SprkAccordionItem>,
    );
    expect(wrapper.find('li.sprk-c-Accordion__item').length).toBe(1);
  });

  it('should default to open if isOpen is true', () => {
    const wrapper = mount(
      <SprkAccordionItem heading="test" isOpen>
        test
      </SprkAccordionItem>,
    );
    expect(wrapper.state().isOpen).toBe(true);
  });

  it('should default to open if isDefaultOpen is true', () => {
    const wrapper = mount(
      <SprkAccordionItem heading="test" isDefaultOpen>
        test
      </SprkAccordionItem>,
    );
    expect(wrapper.state().isOpen).toBe(true);
  });

  it('should toggle open on click', () => {
    const wrapper = mount(
      <SprkAccordionItem heading="test">test</SprkAccordionItem>,
    );
    expect(wrapper.state().isOpen).toBe(false);
    wrapper.find('button').simulate('click');
    expect(wrapper.state().isOpen).toBe(true);
    wrapper.find('button').simulate('click');
    expect(wrapper.state().isOpen).toBe(false);
  });

  it('should add a class to icon when opened', () => {
    const wrapper = mount(
      <SprkAccordionItem heading="test">test</SprkAccordionItem>,
    );
    wrapper.find('button').simulate('click');
    expect(wrapper.find('.sprk-c-Icon--open').length).toBe(1);
  });

  it('should add aria-expanded="true" when the toggle is open', () => {
    const wrapper = mount(
      <SprkAccordionItem heading="test">test</SprkAccordionItem>,
    );
    wrapper.find('button').simulate('click');
    expect(wrapper.find('[aria-expanded="true"]').length).toBe(2);
  });

  it('should run callback when passed as prop to onToggle', () => {
    const spyFunc = jest.fn();
    const wrapper = mount(
      <SprkAccordionItem heading="test" onToggle={spyFunc}>
        test
      </SprkAccordionItem>,
    );
    wrapper.find('button').simulate('click');
    expect(spyFunc.mock.calls.length).toBe(1);
  });

  it('should render with a button element', () => {
    const wrapper = mount(
      <SprkAccordionItem heading="test">test</SprkAccordionItem>,
    );
    expect(wrapper.find('button').length).toBe(1);
  });

  it('should have aria-controls attribute value equal to content value', () => {
    const wrapper = mount(
      <SprkAccordionItem heading="test" id="test-id">
        test
      </SprkAccordionItem>,
    );

    wrapper.find('button').simulate('click');
    expect(wrapper.find('.sprk-c-Accordion__content').getDOMNode().id).toEqual(
      'test-id',
    );

    expect(
      wrapper.find('button').getDOMNode().getAttribute('aria-controls'),
    ).toEqual('test-id');
  });

  it('should add classes to heading if headingAdditionalClasses is set', () => {
    const wrapper = mount(
      <SprkAccordionItem headingAdditionalClasses="test" />,
    );
    expect(wrapper.find('.sprk-c-Accordion__heading.test').length).toBe(1);
  });

  it('should add classes to heading if headingAddClasses is set', () => {
    const wrapper = mount(<SprkAccordionItem headingAddClasses="test" />);
    expect(wrapper.find('.sprk-c-Accordion__heading.test').length).toBe(1);
  });

  it('should prefer headingAdditionalClasses over headingAddClasses', () => {
    let wrapper = mount(
      <SprkAccordionItem
        headingAdditionalClasses="test"
        headingAddClasses="test2"
      />,
    );
    expect(wrapper.find('.sprk-c-Accordion__heading.test').length).toBe(1);
    expect(wrapper.find('.sprk-c-Accordion__heading.test2').length).toBe(0);

    wrapper = mount(<SprkAccordionItem headingAddClasses="test2" />);
    expect(wrapper.find('.sprk-c-Accordion__heading.test').length).toBe(0);
    expect(wrapper.find('.sprk-c-Accordion__heading.test2').length).toBe(1);
  });

  it('should add classes to content if contentAdditionalClasses is set', () => {
    const wrapper = mount(
      <SprkAccordionItem contentAdditionalClasses="test" />,
    );
    expect(wrapper.find('.sprk-c-Accordion__content.test').length).toBe(1);
  });

  it('should add classes to content if contentAddClasses is set', () => {
    const wrapper = mount(<SprkAccordionItem contentAddClasses="test" />);
    expect(wrapper.find('.sprk-c-Accordion__content.test').length).toBe(1);
  });

  it('should prefer contentAdditionalClasses over contentAddClasses', () => {
    let wrapper = mount(
      <SprkAccordionItem
        contentAdditionalClasses="test"
        contentAddClasses="test2"
      />,
    );
    expect(wrapper.find('.sprk-c-Accordion__content.test').length).toBe(1);
    expect(wrapper.find('.sprk-c-Accordion__content.test2').length).toBe(0);

    wrapper = mount(<SprkAccordionItem contentAddClasses="test2" />);
    expect(wrapper.find('.sprk-c-Accordion__content.test').length).toBe(0);
    expect(wrapper.find('.sprk-c-Accordion__content.test2').length).toBe(1);
  });

  it('should add classes to icon if iconAdditionalClasses is set', () => {
    const wrapper = mount(<SprkAccordionItem iconAdditionalClasses="test" />);
    expect(wrapper.find('.sprk-c-Icon--toggle.test').length).toBe(1);
  });

  it('should add classes to icon if iconAddClasses is set', () => {
    const wrapper = mount(<SprkAccordionItem iconAddClasses="test" />);
    expect(wrapper.find('.sprk-c-Icon--toggle.test').length).toBe(1);
  });

  it('should prefer iconAdditionalClasses over iconAddClasses', () => {
    let wrapper = mount(
      <SprkAccordionItem iconAdditionalClasses="test" iconAddClasses="test2" />,
    );
    expect(wrapper.find('.sprk-c-Icon--toggle.test').length).toBe(1);
    expect(wrapper.find('.sprk-c-Icon--toggle.test2').length).toBe(0);

    wrapper = mount(<SprkAccordionItem iconAddClasses="test2" />);
    expect(wrapper.find('.sprk-c-Icon--toggle.test').length).toBe(0);
    expect(wrapper.find('.sprk-c-Icon--toggle.test2').length).toBe(1);
  });
});
