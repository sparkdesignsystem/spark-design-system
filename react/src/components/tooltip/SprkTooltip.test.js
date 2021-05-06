/* global it expect */
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkTooltip from './SprkTooltip';

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

    expect(wrapper.find('button').prop('aria-expanded')).toEqual(false);

    wrapper.find('button').simulate('click');
    expect(wrapper.find('button').prop('aria-expanded')).toEqual(true);
    wrapper.find('button').simulate('click');
    expect(wrapper.find('button').prop('aria-expanded')).toEqual(false);
  });

  it('should add additionalClasses', () => {
    const wrapper = mount(<SprkTooltip additionalClasses="spork" />);
    expect(wrapper.find('.sprk-c-Tooltip.spork').length).toBe(1);
  });

  it('should add vertical align top class', () => {
    const wrapper = mount(<SprkTooltip verticalAlignment="top" />);
    expect(wrapper.find('.sprk-c-Tooltip__container--top').length).toBe(1);
  });

  it('should add vertical align middle class', () => {
    const wrapper = mount(<SprkTooltip verticalAlignment="middle" />);
    expect(wrapper.find('.sprk-c-Tooltip__container--middle').length).toBe(1);
  });

  it('should add vertical align bottom class', () => {
    const wrapper = mount(<SprkTooltip verticalAlignment="bottom" />);
    expect(wrapper.find('.sprk-c-Tooltip__container--bottom').length).toBe(1);
  });

  it('should add vertical align baseline class', () => {
    const wrapper = mount(<SprkTooltip verticalAlignment="baseline" />);
    expect(wrapper.find('.sprk-c-Tooltip__container--baseline').length).toBe(1);
  });

  it('should add data-id', () => {
    const wrapper = mount(<SprkTooltip idString="spork" />);
    expect(wrapper.find('[data-id="spork"]').length).toBe(1);
  });

  it('should add data-analytics', () => {
    const wrapper = mount(<SprkTooltip analyticsString="spork" />);
    expect(wrapper.find('[data-analytics="spork"]').length).toBe(1);
  });

  it('should render with the correct icon additionalClasses', () => {
    const wrapper = mount(<SprkTooltip iconAdditionalClasses="spork" />);
    expect(wrapper.find('.sprk-c-Icon.spork').length).toBe(1);
  });

  it('should generate id when needed', () => {
    const wrapper = mount(<SprkTooltip />);

    const triggerLabel = wrapper
      .find('.sprk-c-Tooltip__trigger')
      .getDOMNode()
      .getAttribute('aria-labelledby');
    const tooltipId = wrapper.find('.sprk-c-Tooltip').getDOMNode().id;

    expect(triggerLabel).toEqual(tooltipId);
  });

  it('should close on Escape', () => {
    const wrapper = mount(<SprkTooltip isDefaultOpen />);
    expect(wrapper.state().isToggled).toBe(true);
    wrapper.instance().handleWindowKeydown({ key: 'Delete' });
    expect(wrapper.state().isToggled).toBe(true);
    wrapper.instance().handleWindowKeydown({ key: 'Escape' });
    expect(wrapper.state().isToggled).toBe(false);
  });

  it('should close on document click', () => {
    const wrapper = mount(<SprkTooltip isDefaultOpen />);
    expect(wrapper.state().isToggled).toBe(true);
    wrapper.instance().handleWindowClick({});
    expect(wrapper.state().isToggled).toBe(false);
  });

  it('should not close on document click if it is not toggled', () => {
    const wrapper = mount(<SprkTooltip isDefaultOpen={false} />);
    expect(wrapper.state().isToggled).toBe(false);
    wrapper.instance().handleWindowClick({});
    expect(wrapper.state().isToggled).toBe(false);
  });

  it('should not close when clicking the tooltip', () => {
    const wrapper = mount(<SprkTooltip isDefaultOpen />);
    expect(wrapper.state().isToggled).toBe(true);
    wrapper
      .instance()
      .handleWindowClick({ target: wrapper.find('button').instance() });
    expect(wrapper.state().isToggled).toBe(true);
  });

  it('should render correctly in the bottom right quadrant', () => {
    Object.defineProperty(document.documentElement, 'clientWidth', {
      value: 100,
    });
    Object.defineProperty(document.documentElement, 'clientHeight', {
      value: 100,
    });

    const wrapper = mount(<SprkTooltip />);
    const trigger = wrapper.find('button');

    trigger.instance().getBoundingClientRect = jest.fn(() => ({
      top: 75,
      left: 75,
    }));

    wrapper.instance().setPositioningClass();

    expect(wrapper.state().position).toBe('topleft');
  });

  it('should render correctly in the bottom left quadrant', () => {
    Object.defineProperty(document.documentElement, 'clientWidth', {
      value: 100,
    });
    Object.defineProperty(document.documentElement, 'clientHeight', {
      value: 100,
    });

    const wrapper = mount(<SprkTooltip />);
    const trigger = wrapper.find('button');

    trigger.instance().getBoundingClientRect = jest.fn(() => ({
      top: 75,
      left: 25,
    }));

    wrapper.instance().setPositioningClass();

    expect(wrapper.state().position).toBe('topright');
  });

  it('should render correctly in the top right quadrant', () => {
    Object.defineProperty(document.documentElement, 'clientWidth', {
      value: 100,
    });
    Object.defineProperty(document.documentElement, 'clientHeight', {
      value: 100,
    });

    const wrapper = mount(<SprkTooltip />);
    const trigger = wrapper.find('button');

    trigger.instance().getBoundingClientRect = jest.fn(() => ({
      top: 25,
      left: 75,
    }));

    wrapper.instance().setPositioningClass();

    expect(wrapper.state().position).toBe('bottomleft');
  });

  it('should render correctly in the top left quadrant', () => {
    Object.defineProperty(document.documentElement, 'clientWidth', {
      value: 100,
    });
    Object.defineProperty(document.documentElement, 'clientHeight', {
      value: 100,
    });

    const wrapper = mount(<SprkTooltip />);
    const trigger = wrapper.find('button');

    trigger.instance().getBoundingClientRect = jest.fn(() => ({
      top: 25,
      left: 25,
    }));

    wrapper.instance().setPositioningClass();

    expect(wrapper.state().position).toBe('bottomright');
  });

  it('should unmount without error', () => {
    const wrapper = mount(<SprkTooltip />);
    expect(wrapper.find('.sprk-c-Tooltip').length).toBe(1);
    wrapper.unmount();
    expect(wrapper.find('.sprk-c-Tooltip').length).toBe(0);
  });

  it('should calculate position on hover', () => {
    Object.defineProperty(document.documentElement, 'clientWidth', {
      value: 100,
    });
    Object.defineProperty(document.documentElement, 'clientHeight', {
      value: 100,
    });

    const wrapper = mount(<SprkTooltip />);
    const trigger = wrapper.find('button');

    trigger.instance().getBoundingClientRect = jest.fn(() => ({
      top: 75,
      left: 75,
    }));

    wrapper.find('button').simulate('mouseover');

    expect(wrapper.state().position).toBe('topleft');
  });

  it('should calculate position on focus', () => {
    Object.defineProperty(document.documentElement, 'clientWidth', {
      value: 100,
    });
    Object.defineProperty(document.documentElement, 'clientHeight', {
      value: 100,
    });

    const wrapper = mount(<SprkTooltip />);
    const trigger = wrapper.find('button');

    trigger.instance().getBoundingClientRect = jest.fn(() => ({
      top: 75,
      left: 75,
    }));

    wrapper.find('button').simulate('focus');

    expect(wrapper.state().position).toBe('topleft');
  });

  it('should call openEvent the first time button is clicked', () => {
    const myMock = jest.fn();

    const wrapper = mount(<SprkTooltip openedEvent={myMock} />);

    wrapper.find('button').simulate('click');

    expect(myMock.mock.calls.length).toBe(1);
  });

  it('should call closedEvent the second time button is clicked', () => {
    const myMock = jest.fn();

    const wrapper = mount(<SprkTooltip closedEvent={myMock} />);

    wrapper.find('button').simulate('click');
    expect(myMock.mock.calls.length).toBe(0);
    wrapper.find('button').simulate('click');
    expect(myMock.mock.calls.length).toBe(1);
  });

  it(
    'should not call closedEvent when Escape is pressed if the tooltip is' +
      ' not already toggled',
    () => {
      const myMock = jest.fn();

      const wrapper = mount(<SprkTooltip closedEvent={myMock} />);

      wrapper.instance().handleWindowKeydown({ key: 'Escape' });

      expect(myMock.mock.calls.length).toBe(0);
    },
  );

  it(
    'should call closedEvent when Escape is pressed if the tooltip is ' +
      ' already toggled',
    () => {
      const myMock = jest.fn();

      const wrapper = mount(<SprkTooltip closedEvent={myMock} />);
      wrapper.find('button').simulate('click');
      expect(myMock.mock.calls.length).toBe(0);
      wrapper.instance().handleWindowKeydown({ key: 'Escape' });
      expect(myMock.mock.calls.length).toBe(1);
    },
  );

  it(
    'should not call closedEvent when the document is clicked if the tooltip' +
      ' is not already toggled',
    () => {
      const myMock = jest.fn();

      const wrapper = mount(<SprkTooltip closedEvent={myMock} />);

      wrapper.instance().handleWindowClick({});

      expect(myMock.mock.calls.length).toBe(0);
    },
  );

  it(
    'should call closedEvent when the document is clicked if the tooltip is ' +
      ' already toggled',
    () => {
      const myMock = jest.fn();

      const wrapper = mount(<SprkTooltip closedEvent={myMock} />);
      wrapper.find('button').simulate('click');
      expect(myMock.mock.calls.length).toBe(0);
      wrapper.instance().handleWindowClick({});
      expect(myMock.mock.calls.length).toBe(1);
    },
  );

  it('should prefer the new property over the deprecated property', () => {
    const wrapper = mount(
      <SprkTooltip
        // deprecated prop
        triggerIconType="access"
        // new prop
        triggerIconName="message"
      />,
    );

    expect(
      wrapper.find('use').filterWhere((item) => {
        return item.prop('xlinkHref') === '#message';
      }).length,
    ).toBe(1);
  });

  it('should use the deprecated property if new prop is not used', () => {
    const wrapper = mount(
      <SprkTooltip
        // deprecated prop
        triggerIconType="access"
      />,
    );

    expect(
      wrapper.find('use').filterWhere((item) => {
        return item.prop('xlinkHref') === '#access';
      }).length,
    ).toBe(1);
  });
});
