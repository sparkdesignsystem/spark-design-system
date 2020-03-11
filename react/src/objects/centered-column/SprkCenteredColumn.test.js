import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkCenteredColumn from './SprkCenteredColumn';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkCenteredColumn:', () => {
  it('should display a div with the correct base class', () => {
    const wrapper = shallow(<SprkCenteredColumn />);
    expect(wrapper.find('div.sprk-o-CenteredColumn').length).toBe(1);
  });
});
