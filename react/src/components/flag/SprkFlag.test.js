import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkFlag from './SprkFlag';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkFlag:', () => {
  it('should display default styles', () => {
    const wrapper = shallow(
      <SprkFlag
        media={
          <img
            alt="Provide useful alternative text"
            src="https://spark-assets.netlify.app/spark-logo-mark.svg"
          />
        }
      />,
    );
    expect(wrapper.hasClass('sprk-o-Flag')).toBe(true);
  });

  it('should display reversed styles', () => {
    const wrapper = shallow(
      <SprkFlag
        isReversed
        media={
          <img
            alt="Provide useful alternative text"
            src="https://spark-assets.netlify.app/spark-logo-mark.svg"
          />
        }
      />,
    );
    expect(wrapper.hasClass('sprk-o-Flag--rev')).toBe(true);
  });

  it('should display stacked style', () => {
    const wrapper = shallow(
      <SprkFlag
        isStacked
        media={
          <img
            alt="Provide useful alternative text"
            src="https://spark-assets.netlify.app/spark-logo-mark.svg"
          />
        }
      />,
    );
    expect(wrapper.hasClass('sprk-o-Flag--stacked')).toBe(true);
  });

  it('should apply additional media classes', () => {
    const testClass = 'testMedia';
    const wrapper = shallow(
      <SprkFlag
        mediaAdditionalClasses={testClass}
        media={
          <img
            alt="Provide useful alternative text"
            src="https://spark-assets.netlify.app/spark-logo-mark.svg"
          />
        }
        additionalClasses={testClass}
      />,
    );
    expect(wrapper.find('.sprk-o-Flag__figure').hasClass(testClass)).toBe(true);
  });

  it('should apply additional body classes', () => {
    const testClass = 'testBody';
    const wrapper = shallow(
      <SprkFlag
        bodyAdditionalClasses={testClass}
        media={
          <img
            alt="Provide useful alternative text"
            src="https://spark-assets.netlify.app/spark-logo-mark.svg"
          />
        }
        additionalClasses={testClass}
      />,
    );
    expect(wrapper.find('.sprk-o-Flag__body').hasClass(testClass)).toBe(true);
  });

  it('should apply additional classes', () => {
    const testClass = 'test';
    const wrapper = shallow(
      <SprkFlag
        media={
          <img
            alt="Provide useful alternative text"
            src="https://spark-assets.netlify.app/spark-logo-mark.svg"
          />
        }
        additionalClasses={testClass}
      />,
    );
    expect(wrapper.hasClass(testClass)).toBe(true);
  });

  it('should apply idString', () => {
    const testId = 'test';
    const wrapper = mount(
      <SprkFlag
        media={
          <img
            alt="Provide useful alternative text"
            src="https://spark-assets.netlify.app/spark-logo-mark.svg"
          />
        }
        idString={testId}
      />,
    );
    expect(wrapper.find('[data-id="test"]').length).toBe(1);
  });
});
