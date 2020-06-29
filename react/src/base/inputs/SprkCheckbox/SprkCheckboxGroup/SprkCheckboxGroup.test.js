import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkCheckboxGroup from './SprkCheckboxGroup';
import SprkCheckboxItem from '../SprkCheckboxItem/SprkCheckboxItem';
import SprkFieldset from '../../SprkFieldset/SprkFieldset';
import SprkLegend from '../../SprkLegend/SprkLegend';
// import SprkErrorContainer from '../../SprkErrorContainer/SprkErrorContainer';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkCheckboxGroup:', () => {
  it('should render SprkCheckbox inside of it', () => {
    const wrapper = mount(
      <SprkCheckboxGroup>
        <SprkFieldset>
          <SprkLegend>Group Label Name</SprkLegend>
          <SprkCheckboxItem>Checkbox Item 1</SprkCheckboxItem>
          <SprkCheckboxItem>Checkbox Item 2</SprkCheckboxItem>
          <SprkCheckboxItem>Checkbox Item 3</SprkCheckboxItem>
        </SprkFieldset>
      </SprkCheckboxGroup>,
    );
    expect(wrapper.find('SprkCheckboxItem').length).toBe(3);
  });

  // it('should assign aria described by based on error container', () => {
  //   const expected = 'expectedId';
  //   const wrapper = mount(
  //     <SprkCheckboxGroup>
  //       <SprkFieldset>
  //         <SprkCheckboxItem>Checkbox Item 1</SprkCheckboxItem>
  //       </SprkFieldset>
  //       <SprkErrorContainer id={expected} />
  //     </SprkCheckboxGroup>,
  //   );
  //   expect(wrapper.find('SprkCheckboxItem').prop('ariaDescribedBy')).toEqual(
  //     expected,
  //   );
  // });

  // If error containder doesn't have id

  it('should have container styles', () => {
    const wrapper = shallow(<SprkCheckboxGroup />);
    expect(
      wrapper.find('.sprk-b-InputContainer').hasClass('sprk-b-InputContainer'),
    ).toBe(true);
  });

  it('should apply additionalClasses', () => {
    const expected = 'test';
    const wrapper = shallow(<SprkCheckboxGroup additionalClasses={expected} />);
    expect(wrapper.find('.sprk-b-InputContainer').hasClass(expected)).toBe(
      true,
    );
  });

  it('should apply huge container class', () => {
    const wrapper = shallow(<SprkCheckboxGroup variant="huge" />);
    expect(
      wrapper
        .find('.sprk-b-InputContainer')
        .hasClass('sprk-b-InputContainer--huge'),
    ).toBe(true);
  });

  it('should apply analyticsString', () => {
    const expected = 'testAnalytics';
    const wrapper = shallow(<SprkCheckboxGroup analyticsString={expected} />);
    expect(
      wrapper.find('.sprk-b-InputContainer').prop('data-analytics'),
    ).toEqual(expected);
  });

  it('should apply data-id', () => {
    const expected = 'test-data-id';
    const wrapper = shallow(<SprkCheckboxGroup idString={expected} />);
    expect(wrapper.find('.sprk-b-InputContainer').prop('data-id')).toEqual(
      expected,
    );
  });
});
