/* global it expect */
/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkButton from './SprkButton';
import SprkSpinner from '../spinners/SprkSpinner';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkButton:', () => {
  it('should display a button element with the correct base class', () => {
    const wrapper = shallow(<SprkButton />);
    expect(wrapper.find('button.sprk-c-Button').length).toBe(1);
  });

  it('should render the element as an a tag when the element prop is a', () => {
    const wrapper = shallow(<SprkButton element="a" href="#nogo" />);
    expect(wrapper.find('a[href].sprk-c-Button').length).toBe(1);
  });

  it('should display a button element with correct classes when variant is secondary', () => {
    const wrapper = shallow(<SprkButton variant="secondary" />);
    expect(wrapper.find('button').hasClass('sprk-c-Button--secondary')).toBe(
      true,
    );
  });

  it('should display a button element with correct classes when variant is tertiary', () => {
    const wrapper = shallow(<SprkButton variant="tertiary" />);
    expect(wrapper.find('button').hasClass('sprk-c-Button--tertiary')).toBe(
      true,
    );
  });

  // TODO: Remove internal spinner from button on next release #3557
  it('if loading is not set, should not render the spinner', () => {
    const wrapper = mount(<SprkButton />);
    expect(wrapper.find('.sprk-c-Spinner').length).toBe(0);
  });

  // TODO: Remove internal spinner from button on next release #3557
  it('if loading is set, should render the spinner', () => {
    const wrapper = mount(<SprkButton loading />);
    expect(wrapper.find('.sprk-c-Spinner').length).toBe(1);
  });

  it(
    'if loading is set, should render the spinner' +
      ' and add aria-label to element',
    () => {
      const wrapper = mount(<SprkButton loading />);
      expect(wrapper.find('button[aria-label="Loading"]').length).toBe(1);
    },
  );

  // TODO: Remove loading spinner from button on next release #3557
  it(
    'if loading is set with spinningAriaLabel it' +
      ' should add custom aria-label',
    () => {
      const wrapper = mount(<SprkButton loading spinningAriaLabel="custom" />);
      expect(wrapper.find('button[aria-label="custom"]').length).toBe(1);
    },
  );

  it(
    'if loading is not set but spinningAriaLabel is,' +
      ' it should not add aria-label',
    () => {
      const wrapper = mount(<SprkButton spinningAriaLabel="custom" />);
      expect(wrapper.find('button[aria-label="custom"]').length).toBe(0);
    },
  );

  it('it should not overwrite aria-label if loading=false', () => {
    const wrapper = mount(<SprkButton aria-label="initial" loading={false} />);
    expect(wrapper.find('button[aria-label="initial"]').length).toBe(1);
  });

  it('it should overwrite aria-label if loading=true', () => {
    const wrapper = mount(<SprkButton aria-label="initial" loading />);
    expect(wrapper.find('button[aria-label="Loading"]').length).toBe(1);
  });

  it('if loading is not set it should not add aria-label', () => {
    const wrapper = mount(<SprkButton />);
    expect(wrapper.find('button[aria-label]').length).toBe(0);
  });

  it('if loading is set and variant is secondary, should render the primary spinner', () => {
    const wrapper = mount(<SprkButton loading variant="secondary" />);
    expect(wrapper.find('.sprk-c-Spinner--primary').length).toBe(1);
    expect(wrapper.find('.sprk-c-Spinner--secondary').length).toBe(0);
    expect(wrapper.find('.sprk-c-Spinner--dark').length).toBe(0);
  });

  it('if loading is set and variant is tertiary, should render the secondary spinner', () => {
    const wrapper = mount(<SprkButton loading variant="tertiary" />);
    expect(wrapper.find('.sprk-c-Spinner--primary').length).toBe(0);
    expect(wrapper.find('.sprk-c-Spinner--secondary').length).toBe(1);
    expect(wrapper.find('.sprk-c-Spinner--dark').length).toBe(0);
  });

  it('should add role=button if an anchor is rendered', () => {
    const wrapper = mount(<SprkButton element="a" href="#nogo" />);
    expect(wrapper.find('[role="button"]').length).toBe(1);
  });

  it('should add data-id if idString is supplied', () => {
    const wrapper = mount(<SprkButton idString="button-1" />);
    expect(wrapper.find('[data-id="button-1"]').length).toBe(1);
  });

  it('should add data-analytics if analyticsString is supplied', () => {
    const wrapper = mount(<SprkButton analyticsString="button-1" />);
    expect(wrapper.find('[data-analytics="button-1"]').length).toBe(1);
  });

  it('should apply any unknown props as attributes on the element', () => {
    const wrapper = shallow(<SprkButton aria-labelledby="label-1" />);
    expect(wrapper.find('button[aria-labelledby="label-1"]').length).toBe(1);
  });

  it('should render an a tag if an href is provided and no element is', () => {
    const wrapper = shallow(<SprkButton href="#" />);
    expect(wrapper.find('a[href="#"]').length).toBe(1);
  });

  it(
    'should not render an href if one is provided and' +
      ' element is set to "button"',
    () => {
      const wrapper = shallow(<SprkButton href="#" element="button" />);
      expect(wrapper.find('button[href="#"]').length).toBe(0);
      expect(wrapper.find('button').length).toBe(1);
    },
  );

  it(
    'should not apply the disabled attribute if the' +
      ' element is an anchor "a"',
    () => {
      const wrapper = mount(<SprkButton href="#" isDisabled />);
      const link = wrapper.find('a');
      expect(link.length).toBe(1);
      expect(link.getDOMNode().hasAttribute('disabled')).toBe(false);
    },
  );

  // TODO: Remove deprecated disabled on next release #3557
  it(
    'should not apply the disabled attribute if the' +
      ' element is an anchor "a"',
    () => {
      const wrapper = mount(<SprkButton href="#" disabled />);
      const link = wrapper.find('a');
      expect(link.length).toBe(1);
      expect(link.getDOMNode().hasAttribute('disabled')).toBe(false);
    },
  );

  it(
    'it should apply the disabled attribute if the element is a button' +
      ' and disabled is true',
    () => {
      const wrapper = mount(<SprkButton isDisabled />);
      const button = wrapper.find('button');
      expect(button.length).toBe(1);
      expect(button.getDOMNode().hasAttribute('disabled')).toBe(true);
    },
  );

  // TODO: Remove deprecated disabled on next release #3557
  it(
    'it should apply the disabled attribute if the element is a button' +
      ' and deprecated disabled is true',
    () => {
      const wrapper = mount(<SprkButton disabled />);
      const button = wrapper.find('button');
      expect(button.length).toBe(1);
      expect(button.getDOMNode().hasAttribute('disabled')).toBe(true);
    },
  );

  it(
    'should not render an href if none is provided and element passed is a' +
      ' router link',
    () => {
      const wrapper = shallow(<SprkButton element={Link} to="button" />);
      expect(wrapper.find('a[href=""]').length).toBe(0);
    },
  );

  it('should apply loading class', () => {
    const wrapper = shallow(<SprkButton isSpinning />);
    expect(wrapper.find('button').hasClass('sprk-c-Button--has-spinner')).toBe(
      true,
    );
  });

  it('should apply disabled attribute when loading', () => {
    const wrapper = mount(<SprkButton isSpinning />);
    const button = wrapper.find('button');
    expect(button.length).toBe(1);
    expect(button.getDOMNode().hasAttribute('disabled')).toBe(true);
  });

  // TODO: Remove internal spinner from button on next release #3557
  // Rewrite test based on new composition version
  it('should load compositional spinner rather than internal spinner', () => {
    const wrapper = mount(
      <SprkButton isSpinning>
        <SprkSpinner variant="secondary" />
      </SprkButton>,
    );
    const spinner = wrapper.find('.sprk-c-Spinner');
    expect(spinner.hasClass('sprk-c-Spinner--secondary')).toBe(true);
  });
});
