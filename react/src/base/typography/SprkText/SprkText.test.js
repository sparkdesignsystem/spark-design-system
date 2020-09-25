/* global Enzyme shallow Adapter it expect */
import React from 'react';
import SprkText from './SprkText';
import SprkLink from '../../links/SprkLink';

describe('SprkText:', () => {
  it('should display p element with the body one style class', () => {
    const wrapper = shallow(
      <SprkText element="p" variant="bodyOne">
        Text
      </SprkText>,
    );
    expect(wrapper.find('p.sprk-b-TypeBodyOne').length).toBe(1);
  });

  it('should display small element with the body two style class', () => {
    const wrapper = shallow(
      <SprkText element="small" variant="bodyTwo">
        Text
      </SprkText>,
    );
    expect(wrapper.find('small.sprk-b-TypeBodyTwo').length).toBe(1);
  });

  it('should display cite element with the body three style class', () => {
    const wrapper = shallow(
      <SprkText element="cite" variant="bodyThree">
        Text
      </SprkText>,
    );
    expect(wrapper.find('cite.sprk-b-TypeBodyThree').length).toBe(1);
  });

  it('should add my-text as the value for the data-id attribute', () => {
    const wrapper = mount(
      <SprkText element="p" variant="bodyFour" idString="my-text">
        Text
      </SprkText>,
    );
    expect(wrapper.find('p.sprk-b-TypeBodyFour').length).toBe(1);
    expect(
      wrapper
        .find('p.sprk-b-TypeBodyFour')
        .getDOMNode()
        .getAttribute('data-id'),
    ).toBe('my-text');
  });

  it('should render a SprkLink if it is passed in as element and add correct class', () => {
    const wrapper = mount(
      <SprkText element={SprkLink} variant="bodyOne">
        Text
      </SprkText>,
    );
    expect(wrapper.find(SprkLink).length).toBe(1);
    expect(wrapper.find('a.sprk-b-TypeBodyOne').length).toBe(1);
  });
});
