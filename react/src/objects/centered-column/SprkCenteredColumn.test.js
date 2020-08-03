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

  it('should add data-id correctly', () => {
    const wrapper = shallow(<SprkCenteredColumn idString="foo" />);
    expect(
      wrapper.find('div.sprk-o-CenteredColumn[data-id="foo"]').length,
    ).toBe(1);
  });

  it('should add data-analytics correctly', () => {
    const wrapper = shallow(<SprkCenteredColumn analyticsString="foo" />);
    expect(
      wrapper.find('div.sprk-o-CenteredColumn[data-analytics="foo"]').length,
    ).toBe(1);
  });

  it('should render with a custom element correctly', () => {
    const wrapper = shallow(<SprkCenteredColumn element="main" />);
    expect(wrapper.find('main.sprk-o-CenteredColumn').length).toBe(1);
  });
});
