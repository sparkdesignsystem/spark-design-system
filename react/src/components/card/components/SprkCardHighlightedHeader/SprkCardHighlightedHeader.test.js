/* global it expect beforeEach afterEach */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkCardHighlightedHeader from './SprkCardHighlightedHeader';

Enzyme.configure({ adapter: new Adapter() });

let testHighlightedHeaderConfig = {};

const createTestObjects = () => {
  // reset and recreate test highlighted header config
  testHighlightedHeaderConfig = {};
  testHighlightedHeaderConfig.bodyText = 'Test body text';
  testHighlightedHeaderConfig.title = 'Test title';
  testHighlightedHeaderConfig.description = 'Test description';
};

beforeEach(() => {
  createTestObjects();
});

afterEach(() => {
  createTestObjects();
});

describe('SprkCardHighlightedHeader:', () => {
  it("should display highlighted header's body text", () => {
    const testVariable = 'test';
    testHighlightedHeaderConfig.bodyText = testVariable;
    const wrapper = shallow(
      <SprkCardHighlightedHeader
        highlightedHeaderConfig={testHighlightedHeaderConfig}
      />,
    );
    const hasBodyText = wrapper.contains(testVariable);
    expect(hasBodyText).toBe(true);
  });

  it("should display highlighted header's title", () => {
    const testVariable = 'test';
    testHighlightedHeaderConfig.title = testVariable;
    const wrapper = shallow(
      <SprkCardHighlightedHeader
        highlightedHeaderConfig={testHighlightedHeaderConfig}
      />,
    );
    const hasTitleText = wrapper.contains(testVariable);
    expect(hasTitleText).toBe(true);
  });

  it("should display highlighted header's description", () => {
    const testVariable = 'test';
    testHighlightedHeaderConfig.description = testVariable;
    const wrapper = shallow(
      <SprkCardHighlightedHeader
        highlightedHeaderConfig={testHighlightedHeaderConfig}
      />,
    );
    const hasDescriptionText = wrapper.contains(testVariable);
    expect(hasDescriptionText).toBe(true);
  });
});
