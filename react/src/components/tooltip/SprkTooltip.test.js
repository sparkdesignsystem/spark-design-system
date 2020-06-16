/* global it expect */
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkTooltip from './SprkTooltip';
import { act } from 'react-dom/test-utils';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkTooltip:', () => {
  it('should render the correct elements', () => {
    const wrapper = mount(<SprkTooltip />);
    expect(wrapper.find('span.sprk-c-Tooltip__container').length).toBe(1);
    expect(wrapper.find('button.sprk-c-Tooltip__trigger').length).toBe(1);
    expect(wrapper.find('span.sprk-c-Tooltip').length).toBe(1);
  });

  it('should add toggled class when clicked', () => {
    const wrapper = mount(<SprkTooltip />);
    expect(wrapper.find('.sprk-c-Tooltip--toggled').length).toBe(0);

    wrapper.find('button').simulate('click');

    expect(wrapper.find('.sprk-c-Tooltip--toggled').length).toBe(1);
  });

  it('should toggle aria-expanded when clicked', () => {
    const wrapper = mount(<SprkTooltip />);
    expect(wrapper.find('[aria-expanded="true"]').length).toBe(0);

    wrapper.find('button').simulate('click');

    expect(wrapper.find('[aria-expanded="true"]').length).toBe(1);
  });

  it('should add additionalClasses', () => {
    const wrapper = mount(
      <SprkTooltip
        additionalClasses='spork'
      >
        tootlip
      </SprkTooltip>
    );
    expect(wrapper.find('.sprk-c-Tooltip.spork').length).toBe(1);
  });

  it('should add data-id', () => {
    const wrapper = mount(
      <SprkTooltip idString='spork' />
    );
    expect(wrapper.find('[data-id="spork"]').length).toBe(1);
  });

  it('should add data-analytics', () => {
    const wrapper = mount(
      <SprkTooltip analyticsString='spork' />
    );
    expect(wrapper.find('[data-analytics="spork"]').length).toBe(1);
  });

  // it('should toggle on Enter', () => {
  //   const wrapper = mount(<SprkTooltip />);
  //   expect(wrapper.find('.sprk-c-Tooltip--toggled').length).toBe(0);
  //   wrapper.find('.sprk-c-Tooltip__trigger').simulate('keydown', { keyCode: 13 });
  //   expect(wrapper.find('.sprk-c-Tooltip--toggled').length).toBe(1);
  // });

  // it('should toggle on Space', () => {
  //   const wrapper = mount(<SprkTooltip />);
  //   expect(wrapper.find('.sprk-c-Tooltip--toggled').length).toBe(0);
  //   wrapper.find('.sprk-c-Tooltip__trigger').simulate('keydown', { key: 'Enter' });
  //   expect(wrapper.find('.sprk-c-Tooltip--toggled').length).toBe(1);
  // });

  // it('should close on Escape', () => {
    // const wrapper = mount(<SprkTooltip isDefaultToggled={true} />);
    // expect(wrapper.find('.sprk-c-Tooltip--toggled').length).toBe(1);

    // act(() => {
    //   const event = new KeyboardEvent('keydown', {
    //     key: 'Escape'
    //   });
    //   window.dispatchEvent(event);
    // })
    // expect(wrapper.find('.sprk-c-Tooltip--toggled').length).toBe(0);
  // });

  // it('should close on document click', () => {
    // const map = {};
    // window.addEventListener = jest.genMockFn().mockImpl((event, cb) => {
    //   map[event] = cb;
    // });

    // const wrapper = mount(<SprkTooltip isDefaultToggled={true} />);
    // expect (wrapper.find('.sprk-c-Tooltip--toggled').length).toBe(1);
    // map.click();
    // expect (wrapper.find('.sprk-c-Tooltip--toggled').length).toBe(0);
  // });

  it('should render with the correct icon additionalClasses', () => {
    const wrapper = mount(<SprkTooltip iconAdditionalClasses='spork' />);
    expect(wrapper.find('.sprk-c-Icon.spork').length).toBe(1);
  });

  it('should generate id when needed', () => {
    const wrapper = mount(<SprkTooltip />);

    const triggerLabel = wrapper.find('.sprk-c-Tooltip__trigger')
      .getDOMNode().getAttribute('aria-labelledby');
    const tooltipId = wrapper.find('.sprk-c-Tooltip').getDOMNode().id;

    expect(triggerLabel).toEqual(tooltipId);
  })

  // position classes
});
