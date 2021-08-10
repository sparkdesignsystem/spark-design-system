import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkDictionary from './SprkDictionary';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkDictionary:', () => {
  it('should display a div with the correct base class', () => {
    const testKeyValuePairs = {
      'Email Address': 'sparkdesignsystem@rocketmortgage.com',
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
        'Email Address': 'sparkdesignsystem@rocketmortgage.com',
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

  it('should add data-id', () => {
    const testKeyValuePairs = {
      'Email Address': 'sparkdesignsystem@rocketmortgage.com',
      'Mailing Address': '123 Main Street, Detroit, MI, 48216',
      'Home Phone': '(123) 456-7890',
      'Cell Phone': '(098) 765-4321',
      'Work Phone': '(555) 555-5555',
      'Work Extension': '55555',
    };
    const wrapper = shallow(
      <SprkDictionary keyValuePairs={testKeyValuePairs} idString="asdf" />,
    );
    expect(wrapper.find('div.sprk-c-Dictionary[data-id="asdf"]').length).toBe(
      1,
    );
  });

  it('should add additionalClasses', () => {
    const testKeyValuePairs = {
      'Email Address': 'sparkdesignsystem@rocketmortgage.com',
      'Mailing Address': '123 Main Street, Detroit, MI, 48216',
      'Home Phone': '(123) 456-7890',
      'Cell Phone': '(098) 765-4321',
      'Work Phone': '(555) 555-5555',
      'Work Extension': '55555',
    };
    const wrapper = shallow(
      <SprkDictionary
        keyValuePairs={testKeyValuePairs}
        additionalClasses="asdf"
      />,
    );
    expect(wrapper.find('div.sprk-c-Dictionary').hasClass('asdf')).toBe(true);
  });

  it('should add keysAdditionalClasses', () => {
    const testKeyValuePairs = {
      'Email Address': 'sparkdesignsystem@rocketmortgage.com',
      'Mailing Address': '123 Main Street, Detroit, MI, 48216',
      'Home Phone': '(123) 456-7890',
      'Cell Phone': '(098) 765-4321',
      'Work Phone': '(555) 555-5555',
      'Work Extension': '55555',
    };
    const wrapper = shallow(
      <SprkDictionary
        keyValuePairs={testKeyValuePairs}
        keysAdditionalClasses="asdf"
      />,
    );

    wrapper.find('.sprk-c-Dictionary__key').forEach((key) => {
      expect(key.hasClass('asdf')).toBe(true);
    });
  });

  it('should add valuesAdditionalClasses', () => {
    const testKeyValuePairs = {
      'Email Address': 'sparkdesignsystem@rocketmortgage.com',
      'Mailing Address': '123 Main Street, Detroit, MI, 48216',
      'Home Phone': '(123) 456-7890',
      'Cell Phone': '(098) 765-4321',
      'Work Phone': '(555) 555-5555',
      'Work Extension': '55555',
    };
    const wrapper = shallow(
      <SprkDictionary
        keyValuePairs={testKeyValuePairs}
        valuesAdditionalClasses="asdf"
      />,
    );

    wrapper.find('sprk-c-Dictionary__value').forEach((value) => {
      expect(value.hasClass('asdf')).toBe(true);
    });
  });
});
