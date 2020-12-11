/* global describe it beforeEach document sinon */
import runValidation from '../utilities/validation/validation-runner';

describe('validation runner', () => {
  let element;
  let field;
  const validFunction = sinon.stub();
  const inValidFunction = sinon.stub();

  beforeEach(() => {
    element = document.createElement('div');
    field = document.createElement('input');
    field.setAttribute('pattern', '');
    element.appendChild(field);
  });

  it('should call the valid function if the field is valid.', () => {
    runValidation(element, field, validFunction, inValidFunction);
    expect(validFunction.calledOnce).toBe(true);
  });

  it(`should call the inValid function if the field 
      is empty but required.`, () => {
    field.setAttribute('pattern', '(abc)?');
    field.setAttribute('required', null);
    field.value = '';
    runValidation(element, field, validFunction, inValidFunction);
    expect(inValidFunction.calledOnce).toBe(true);
  });

  it('should call the inValid function if the field is invalid.', () => {
    field.setAttribute('pattern', '(abc)?');
    field.value = '123';
    runValidation(element, field, validFunction, inValidFunction);
    expect(inValidFunction.called).toBe(true);
  });
});
