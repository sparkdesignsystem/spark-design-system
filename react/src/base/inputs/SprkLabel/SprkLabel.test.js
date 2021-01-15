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

  it(`should render an element with the disabled
  class when isDisabled is true`, () => {
    const wrapper = mount(<SprkLabel isDisabled>Label</SprkLabel>);

    expect(wrapper.find('.sprk-b-Label--disabled').length).toBe(1);
    expect(wrapper.find('.sprk-b-Label').getDOMNode().classList.length).toBe(2);
  });

  it(`should render an element with the with-icon
  class when hasIcon is true`, () => {
    const wrapper = mount(<SprkLabel hasIcon>Label</SprkLabel>);

    expect(wrapper.find('.sprk-b-Label--with-icon').length).toBe(1);
    expect(wrapper.find('.sprk-b-Label').getDOMNode().classList.length).toBe(2);
  });

  it(`should render an element with the monetary
  class when isMonetary is true`, () => {
    const wrapper = mount(<SprkLabel isMonetary>Label</SprkLabel>);

    expect(wrapper.find('.sprk-b-Label--monetary').length).toBe(1);
    expect(wrapper.find('.sprk-b-Label').getDOMNode().classList.length).toBe(2);
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

  it('should assign data-id when idString has a value', () => {
    const wrapper = mount(<SprkLabel idString="321">Label</SprkLabel>);
    expect(wrapper.find('[data-id="321"]').length).toBe(1);
  });
});
