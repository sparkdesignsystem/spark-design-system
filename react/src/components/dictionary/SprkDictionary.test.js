import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkDictionary from './SprkDictionary';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkDictionary:', () => {
  it('should display a div with the correct base class', () => {
    const testKeyValuePairs = {
      'Email Address': 'sparkdesignsystem@quickenloans.com',
      'Mailing Address': '123 Main Street, Detroit, MI, 48216',
      'Home Phone': '(123) 456-7890',
      'Cell Phone': '(098) 765-4321',
      'Work Phone': '(555) 555-5555',
      'Work Extension': '55555',
    };
    const wrapper = shallow(
      <SprkDictionary keyValuePairs={testKeyValuePairs} />,
    );
    expect(
      wrapper.find('div.sprk-c-Dictionary').hasClass('sprk-c-Dictionary'),
    ).toBe(true);
  });

  it(
    'should display a striped dictionary with correct classes when variant' +
      ' is striped',
    () => {
      const testKeyValuePairs = {
        'Email Address': 'sparkdesignsystem@quickenloans.com',
        'Mailing Address': '123 Main Street, Detroit, MI, 48216',
        'Home Phone': '(123) 456-7890',
        'Cell Phone': '(098) 765-4321',
        'Work Phone': '(555) 555-5555',
        'Work Extension': '55555',
      };
      const wrapper = shallow(
        <SprkDictionary variant="striped" keyValuePairs={testKeyValuePairs} />,
      );
      expect(
        wrapper.find('div.sprk-c-Dictionary').hasClass('sprk-c-Dictionary'),
      ).toBe(true);
      expect(
        wrapper
          .find('div.sprk-c-Dictionary')
          .hasClass('sprk-c-Dictionary--striped'),
      ).toBe(true);
    },
  );
});
