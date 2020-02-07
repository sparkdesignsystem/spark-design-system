/* global it expect */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkMastheadMenuIcon from './SprkMastheadMenuIcon';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkMastheadMenuIcon:', () => {
  it('should display an svg element with the correct base class', () => {
    const wrapper = shallow(
      <SprkMastheadMenuIcon
        toggleNarrowNav={() => {
          console.log('hi');
        }}
      />,
    );
    expect(wrapper.find('svg.sprk-c-Icon').length).toBe(1);
  });
});
