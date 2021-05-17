import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkLabel from './SprkLabel';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkLabel:', () => {
  it('should render an element with the correct class', () => {
    const wrapper = mount(<SprkLabel>Label</SprkLabel>);

    expect(wrapper.find('.sprk-b-Label').length).toBe(1);
    expect(wrapper.find('.sprk-b-Label').getDOMNode().classList.length).toBe(1);
  });

  it(`should render an element with the ScreenReaderText
  class when isHidden is true`, () => {
    const wrapper = mount(<SprkLabel isHidden>Label</SprkLabel>);

    expect(wrapper.find('.sprk-u-ScreenReaderText').length).toBe(1);
    expect(wrapper.find('.sprk-b-Label').getDOMNode().classList.length).toBe(2);
  });

  it(`should not render an element with the ScreenReaderText
  class when isHidden is false`, () => {
    const wrapper = mount(<SprkLabel isHidden={false}>Label</SprkLabel>);

    expect(wrapper.find('.sprk-u-ScreenReaderText').length).toBe(0);
    expect(wrapper.find('.sprk-b-Label').getDOMNode().classList.length).toBe(1);
  });

  it(`should render an element with the disabled
  class when isDisabled is true`, () => {
    const wrapper = mount(<SprkLabel isDisabled>Label</SprkLabel>);

    expect(wrapper.find('.sprk-b-Label--disabled').length).toBe(1);
    expect(wrapper.find('.sprk-b-Label').getDOMNode().classList.length).toBe(2);
  });

  it(`should not render an element with the disabled
  class when isDisabled is false`, () => {
    const wrapper = mount(<SprkLabel isDisabled={false}>Label</SprkLabel>);

    expect(wrapper.find('.sprk-b-Label--disabled').length).toBe(0);
    expect(wrapper.find('.sprk-b-Label').getDOMNode().classList.length).toBe(1);
  });

  it(`should render an element with the monetary
  class when isMonetary is true`, () => {
    const wrapper = mount(<SprkLabel isMonetary>Label</SprkLabel>);

    expect(wrapper.find('.sprk-b-Label--monetary').length).toBe(1);
    expect(wrapper.find('.sprk-b-Label').getDOMNode().classList.length).toBe(2);
  });

  it(`should not render an element with the monetary
  class when isMonetary is false`, () => {
    const wrapper = mount(<SprkLabel isMonetary={false}>Label</SprkLabel>);

    expect(wrapper.find('.sprk-b-Label--monetary').length).toBe(0);
    expect(wrapper.find('.sprk-b-Label').getDOMNode().classList.length).toBe(1);
  });

  it('should add classes when additionalClasses has a value', () => {
    const wrapper = mount(
      <SprkLabel additionalClasses="sprk-u-man">Label</SprkLabel>,
    );

    expect(wrapper.find('.sprk-b-Label').hasClass('sprk-u-man')).toBe(true);
    expect(wrapper.find('.sprk-b-Label').getDOMNode().classList.length).toBe(2);
  });

  it('should assign data-analytics when analyticsString has a value', () => {
    const wrapper = mount(<SprkLabel analyticsString="321">Label</SprkLabel>);
    expect(wrapper.find('[data-analytics="321"]').length).toBe(1);
  });

  it(`should not render data-analytics when
  analyticsString is not present`, () => {
    const wrapper = mount(<SprkLabel>Label</SprkLabel>);
    expect(wrapper.find('[data-analytics]').length).toBe(0);
  });

  it('should assign data-id when idString has a value', () => {
    const wrapper = mount(<SprkLabel idString="321">Label</SprkLabel>);
    expect(wrapper.find('[data-id="321"]').length).toBe(1);
  });

  it('should not render data-id when idString is not present', () => {
    const wrapper = mount(<SprkLabel>Label</SprkLabel>);
    expect(wrapper.find('[data-id]').length).toBe(0);
  });

  it('should assign for attribute when htmlFor has a value', () => {
    const wrapper = mount(<SprkLabel htmlFor="321" />);
    expect(wrapper.find('.sprk-b-Label').getDOMNode().getAttribute('for')).toBe(
      '321',
    );
  });

  it('should assign default for attribute when htmlFor has no value', () => {
    const wrapper = mount(<SprkLabel />);
    expect(
      wrapper.find('.sprk-b-Label').getDOMNode().getAttribute('for'),
    ).toContain('sprk-label-');
  });
});
