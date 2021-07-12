import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import isSprkInput from './isSprkInput';
import SprkInput from '../../../base/inputs/SprkInput/SprkInput';
import SprkTextarea from '../../../base/inputs/SprkTextarea/SprkTextarea';
import SprkSelect from '../../../base/inputs/SprkSelect/SprkSelect';
import SprkDatePicker from '../../../base/inputs/SprkDatePicker/SprkDatePicker';

Enzyme.configure({ adapter: new Adapter() });

describe('isSprkInput:', () => {
  it('should return true if it is passed a SprkInput', () => {
    expect(isSprkInput(<SprkInput id="input-id" />)).toBe(true);
  });

  it('should return true if it is passed a SprkSelect', () => {
    expect(
      isSprkInput(
        <SprkSelect
          id="select-id"
          choices={[
            { name: 'item-choice', label: 'Item 1', value: '1' },
            { name: 'item-choice-2', label: 'Item 2', value: '2' },
          ]}
        />,
      ),
    ).toBe(true);
  });

  it('should return true if it is passed a SprkDatePicker', () => {
    expect(isSprkInput(<SprkDatePicker id="datepicker-id" />)).toBe(true);
  });

  it(`should return false if it is passed a Spark component
  that is not an expected Spark input`, () => {
    expect(isSprkInput(<SprkTextarea id="textarea-id" />)).toBe(false);
  });

  it('should return false if it is passed a native DOM element', () => {
    expect(isSprkInput(<div />)).toBe(false);
  });

  it('should return false if it is passed a native input element', () => {
    expect(isSprkInput(<input />)).toBe(false);
  });
});
