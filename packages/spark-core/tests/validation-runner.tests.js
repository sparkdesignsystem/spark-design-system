/* global describe it before require document */
import { expect } from 'chai';
import sinon from 'sinon';
import runValidation from '../utilities/validation/validation-runner';

describe('validation runner', () => {
  let element;
  let field;
  const validFunction = sinon.stub();
  const inValidFunction = sinon.stub();

  before(() => {
    element = document.createElement('div');
    field = document.createElement('input');
    field.setAttribute('pattern', '');
    element.appendChild(field);
  });

  it('should call the valid function if the field is valid.', () => {
    runValidation(element, field, validFunction, inValidFunction);
    expect(validFunction.calledOnce).eql(true);
  });

  it('should call the inValid function if the field is valid.', () => {
    field.setAttribute('pattern', '[abc]');
    field.value = '123';
    runValidation(element, field, validFunction, inValidFunction);
    expect(inValidFunction.calledOnce).eql(true);
  });
});
