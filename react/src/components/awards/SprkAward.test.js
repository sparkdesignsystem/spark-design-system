/* global it expect */
import React from 'react';
import { Link } from 'react-router-dom';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkAward from './SprkAward';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkAward:', () => {
  it('should display a SprkAward with the correct base classes', () => {
    const images = [
      {
        href: '#nogo',
        src: 'https://spark-assets.netlify.app/spark-placeholder.jpg',
        alt: 'Spark Placeholder Logo',
        analyticsString: 'award-1',
      },
      {
        href: '#nogo',
        src: 'https://spark-assets.netlify.app/spark-placeholder.jpg',
        alt: 'Spark Placeholder Logo',
        analyticsString: 'award-2',
      },
    ];
    const wrapper = mount(<SprkAward images={images} />);
    expect(wrapper.find('div').first().hasClass('sprk-o-Stack')).toBe(true);
    expect(wrapper.find('div').first().hasClass('sprk-o-Stack--medium')).toBe(
      true,
    );
  });

  it('should display the award component with the images section', () => {
    const images = [
      {
        href: '#nogo',
        src: 'https://spark-assets.netlify.app/spark-placeholder.jpg',
        alt: 'Spark Placeholder Logo',
        analyticsString: 'award-1',
        element: 'a',
      },
      {
        src: 'https://spark-assets.netlify.app/spark-placeholder.jpg',
        alt: 'Spark Placeholder Logo',
        analyticsString: 'award-2',
        element: 'span',
      },
    ];
    const wrapper = mount(<SprkAward images={images} />);
    expect(wrapper.find('img').length).toBe(2);
  });

  it('should add the correct split class', () => {
    const images = [
      {
        to: '#nogo',
        src: 'https://spark-assets.netlify.app/spark-placeholder.jpg',
        alt: 'Spark Placeholder Logo',
        analyticsString: 'award-1',
        element: undefined,
      },
      {
        href: '#nogo',
        src: 'https://spark-assets.netlify.app/spark-placeholder.jpg',
        alt: 'Spark Placeholder Logo',
        analyticsString: 'award-2',
      },
    ];
    const wrapper = mount(<SprkAward images={images} splitAt="large" />);
    expect(
      wrapper
        .find('div.sprk-o-Stack--medium.sprk-o-Stack__item--center-column')
        .hasClass('sprk-o-Stack--split@l'),
    ).toBe(true);
  });

  it('should add the correct item spacing class', () => {
    const images = [
      {
        href: '#nogo',
        src: 'https://spark-assets.netlify.app/spark-placeholder.jpg',
        alt: 'Spark Placeholder Logo',
        analyticsString: 'award-1',
      },
      {
        href: '#nogo',
        src: 'https://spark-assets.netlify.app/spark-placeholder.jpg',
        alt: 'Spark Placeholder Logo',
        analyticsString: 'award-2',
      },
    ];
    const wrapper = mount(<SprkAward images={images} itemSpacing="large" />);
    expect(wrapper.find('.sprk-o-Stack--large').length).toBe(2);
  });

  it(
    'should not render an href if none is provided and element passed is a' +
      ' router link',
    () => {
      const images = [
        {
          to: 'button',
          src: 'https://spark-assets.netlify.app/spark-placeholder.jpg',
          alt: 'Spark Placeholder Logo',
          analyticsString: 'award-1',
          element: Link,
        },
        {
          to: 'button',
          src: 'https://spark-assets.netlify.app/spark-placeholder.jpg',
          alt: 'Spark Placeholder Logo',
          analyticsString: 'award-2',
          element: Link,
        },
      ];
      const wrapper = shallow(<SprkAward images={images} />);
      expect(wrapper.find('a[href=""]').length).toBe(0);
    },
  );

  it('should not add centered column class by default', () => {
    const wrapper = mount(<SprkAward images={[]} />);
    expect(wrapper.find('div.sprk-o-Stack.sprk-o-CenteredColumn').length).toBe(
      0,
    );
  });

  it('should not render the Toggle if props are empty', () => {
    let wrapper = mount(<SprkAward images={[]} />);
    expect(wrapper.find('div.sprk-c-Toggle').length).toBe(0);

    wrapper = mount(<SprkAward images={[]} disclaimerTitle="Title" />);
    expect(wrapper.find('div.sprk-c-Toggle').length).toBe(1);
  });

  // TODO - Remove linkAddClasses and addClasses as part of Issue 1279
  it('should render with deprecated props', () => {
    const images = [
      {
        href: '#nogo',
        src: 'https://spark-assets.netlify.app/spark-placeholder.jpg',
        alt: 'Spark Placeholder Logo',
        analyticsString: 'award-1',
        addClasses: 'oldImageClass',
        linkAddClasses: 'oldLinkClass',
      },
    ];
    const wrapper = mount(<SprkAward images={images} />);

    expect(wrapper.find('.oldImageClass').length).toBe(1);
    expect(wrapper.find('.oldLinkClass').length).toBe(1);
  });

  // TODO - Remove linkAddClasses and addClasses as part of Issue 1279
  it('should prefer new props over deprecated props', () => {
    const images = [
      {
        href: '#nogo',
        src: 'https://spark-assets.netlify.app/spark-placeholder.jpg',
        alt: 'Spark Placeholder Logo',
        analyticsString: 'award-1',
        addClasses: 'oldImageClass',
        imageAdditionalClasses: 'newImageClass',
        linkAddClasses: 'oldLinkClass',
        linkAdditionalClasses: 'newLinkClass',
      },
    ];
    const wrapper = mount(<SprkAward images={images} />);

    expect(wrapper.find('.newImageClass').length).toBe(1);
    expect(wrapper.find('.oldImageClass').length).toBe(0);
    expect(wrapper.find('.newLinkClass').length).toBe(1);
    expect(wrapper.find('.oldLinkClass').length).toBe(0);
  });
});
