/* global it expect */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkStack from './SprkStack';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkStack:', () => {
  it('should display a div element with the correct base class', () => {
    const wrapper = shallow(<SprkStack />);
    expect(wrapper.html()).toEqual('<div class="sprk-o-Stack"></div>');
  });

  it('should add Stack Item class if isStackItem is true', () => {
    const wrapper = shallow(<SprkStack isStackItem />);
    expect(wrapper.html()).toEqual('<div class="sprk-o-Stack sprk-o-Stack__item"></div>');
  });

  it(
    'should set the tiny spacing class in addition to the base class when' +
      ' itemSpacing is "tiny"',
    () => {
      const wrapper = shallow(<SprkStack itemSpacing="tiny" />);
      expect(wrapper.find('div.sprk-o-Stack.sprk-o-Stack--tiny').length).toBe(
        1,
      );
    },
  );

  it(
    'should set the small spacing class in addition to the base class when' +
      ' itemSpacing is "small"',
    () => {
      const wrapper = shallow(<SprkStack itemSpacing="small" />);
      expect(wrapper.find('div.sprk-o-Stack.sprk-o-Stack--small').length).toBe(
        1,
      );
    },
  );

  it(
    'should set the medium spacing class in addition to the base class when' +
      ' itemSpacing is "medium"',
    () => {
      const wrapper = shallow(<SprkStack itemSpacing="medium" />);
      expect(wrapper.find('div.sprk-o-Stack.sprk-o-Stack--medium').length).toBe(
        1,
      );
    },
  );

  it(
    'should set the large spacing class in addition to the base class when' +
      ' itemSpacing is "large"',
    () => {
      const wrapper = shallow(<SprkStack itemSpacing="large" />);
      expect(wrapper.find('div.sprk-o-Stack.sprk-o-Stack--large').length).toBe(
        1,
      );
    },
  );

  it(
    'should set the huge spacing class in addition to the base class when' +
      ' itemSpacing is "huge"',
    () => {
      const wrapper = shallow(<SprkStack itemSpacing="huge" />);
      expect(wrapper.find('div.sprk-o-Stack.sprk-o-Stack--huge').length).toBe(
        1,
      );
    },
  );

  it(
    'should set the misc-a spacing class in addition to the base class when' +
      ' itemSpacing is "misc-a"',
    () => {
      const wrapper = shallow(<SprkStack itemSpacing="misc-a" />);
      expect(wrapper.find('div.sprk-o-Stack.sprk-o-Stack--misc-a').length).toBe(
        1,
      );
    },
  );

  it(
    'should set the misc-a spacing class in addition to the base class when' +
      ' itemSpacing is "miscA"',
    () => {
      const wrapper = shallow(<SprkStack itemSpacing="miscA" />);
      expect(wrapper.find('div.sprk-o-Stack.sprk-o-Stack--misc-a').length).toBe(
        1,
      );
    },
  );

  it(
    'should set the misc-b spacing class in addition to the base class when' +
      ' itemSpacing is "misc-b"',
    () => {
      const wrapper = shallow(<SprkStack itemSpacing="misc-b" />);
      expect(wrapper.find('div.sprk-o-Stack.sprk-o-Stack--misc-b').length).toBe(
        1,
      );
    },
  );

  it(
    'should set the misc-b spacing class in addition to the base class when' +
      ' itemSpacing is "miscB"',
    () => {
      const wrapper = shallow(<SprkStack itemSpacing="miscB" />);
      expect(wrapper.find('div.sprk-o-Stack.sprk-o-Stack--misc-b').length).toBe(
        1,
      );
    },
  );

  it(
    'should set the misc-c spacing class in addition to the base class when' +
      ' itemSpacing is "misc-c"',
    () => {
      const wrapper = shallow(<SprkStack itemSpacing="misc-c" />);
      expect(wrapper.find('div.sprk-o-Stack.sprk-o-Stack--misc-c').length).toBe(
        1,
      );
    },
  );

  it(
    'should set the misc-c spacing class in addition to the base class when' +
      ' itemSpacing is "miscC"',
    () => {
      const wrapper = shallow(<SprkStack itemSpacing="miscC" />);
      expect(wrapper.find('div.sprk-o-Stack.sprk-o-Stack--misc-c').length).toBe(
        1,
      );
    },
  );

  it(
    'should set the misc-d spacing class in addition to the base class when' +
      ' itemSpacing is "misc-d"',
    () => {
      const wrapper = shallow(<SprkStack itemSpacing="misc-d" />);
      expect(wrapper.find('div.sprk-o-Stack.sprk-o-Stack--misc-d').length).toBe(
        1,
      );
    },
  );

  it(
    'should set the misc-d spacing class in addition to the base class when' +
      ' itemSpacing is "miscD"',
    () => {
      const wrapper = shallow(<SprkStack itemSpacing="miscD" />);
      expect(wrapper.find('div.sprk-o-Stack.sprk-o-Stack--misc-d').length).toBe(
        1,
      );
    },
  );

  it(
    'should set the split class in addition to the base class when splitAt is' +
      ' "extraTiny"',
    () => {
      const wrapper = shallow(<SprkStack splitAt="extraTiny" />);
      expect(
        wrapper.find('div.sprk-o-Stack').hasClass('sprk-o-Stack--split@xxs'),
      ).toBe(true);
    },
  );

  it(
    'should set the split class in addition to the base class when splitAt' +
      ' is "tiny"',
    () => {
      const wrapper = shallow(<SprkStack splitAt="tiny" />);
      expect(
        wrapper.find('div.sprk-o-Stack').hasClass('sprk-o-Stack--split@xs'),
      ).toBe(true);
    },
  );

  it(
    'should set the split class in addition to the base class when splitAt' +
      ' is "small"',
    () => {
      const wrapper = shallow(<SprkStack splitAt="small" />);
      expect(
        wrapper.find('div.sprk-o-Stack').hasClass('sprk-o-Stack--split@s'),
      ).toBe(true);
    },
  );

  it(
    'should set the split class in addition to the base class when splitAt' +
      ' is "medium"',
    () => {
      const wrapper = shallow(<SprkStack splitAt="medium" />);
      expect(
        wrapper.find('div.sprk-o-Stack').hasClass('sprk-o-Stack--split@m'),
      ).toBe(true);
    },
  );

  it(
    'should set the split class in addition to the base class when splitAt' +
      ' is "large"',
    () => {
      const wrapper = shallow(<SprkStack splitAt="large" />);
      expect(
        wrapper.find('div.sprk-o-Stack').hasClass('sprk-o-Stack--split@l'),
      ).toBe(true);
    },
  );

  it(
    'should set the split class in addition to the base class when' +
      ' splitAt is "huge"',
    () => {
      const wrapper = shallow(<SprkStack splitAt="huge" />);
      expect(
        wrapper.find('div.sprk-o-Stack').hasClass('sprk-o-Stack--split@xl'),
      ).toBe(true);
    },
  );

  it('should correctly add analyticsString', () => {
    const wrapper = shallow(<SprkStack analyticsString="foo" />);
    expect(wrapper.find('div.sprk-o-Stack[data-analytics="foo"]').length).toBe(
      1,
    );
  });

  it('should correctly add idString', () => {
    const wrapper = shallow(<SprkStack idString="foo" />);
    expect(wrapper.find('div.sprk-o-Stack[data-id="foo"]').length).toBe(1);
  });
});
