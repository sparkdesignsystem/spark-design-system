/* global window document beforeEach describe it afterEach */
import sinon from 'sinon';
import { expect } from 'chai';

const proxyquire = require('proxyquire');

describe('datePicker tests', () => {
  let dp;
  let inputContainer;
  let input;
  const tinyDatePickerStub = (element, config) => {
    config.format(new Date('10/31/1999'));
    return {
      on: (eventName, cb) => {
        window.addEventListener('dpOpen', cb);
      },
    };
  };

  const tdpSpy = sinon.spy(tinyDatePickerStub);

  const { datePicker, testWidthForReadOnly } = proxyquire('../base/datePicker',
    { 'tiny-date-picker': tdpSpy });


  beforeEach(() => {
    dp = document.createElement('div'); // calendar stub
    dp.classList.add('dp');
    inputContainer = document.createElement('div');
    inputContainer.setAttribute('data-sprk-datepicker', '');
    input = document.createElement('input');
    input.click();
    input.type = 'text';
    input.setAttribute(
      'pattern',
      '^(((0[1358]|1[02])([\\/-]?)(0[1-9]|[12]\\d|3[01])|(0[469]|11)([\\/-]?)(0[1-9]|[12]\\d|30)|02(\\/?)((0?\\d)|[12]\\d))(\\4|\\7|\\9)[12]\\d{3})?$',
    );
    sinon.spy(input, 'addEventListener');
    inputContainer.appendChild(input);
    document.body.appendChild(dp);
    document.body.appendChild(inputContainer);
    window.dispatchEvent(new window.Event('dpOpen'));
  });

  afterEach(() => {
    document.body.innerHTML = '';
    input.addEventListener.restore();
  });

  it('should call tdp on init', () => {
    datePicker();
    expect(tdpSpy.calledOnce).eql(true);
  });

  it('datePicker should call tdp with defaults set', () => {
    datePicker();
    expect(tdpSpy.getCalls()[0].args[1].mode).eql('dp-below');
  });

  it('datePicker should override defaults with config object', () => {
    datePicker({ mode: 'dp-modal' });
    expect(tdpSpy.getCalls()[2].args[1].mode).eql('dp-modal');
  });

  it('testWidthForReadOnly should remove readonly and add it back '
    + 'if window.innerWidth < 768', () => {
    input.setAttribute('readonly', '');
    testWidthForReadOnly(input);
    expect(input.getAttribute('readonly')).eql(null);

    window.innerWidth = 767;
    testWidthForReadOnly(input);
    expect(input.getAttribute('readonly')).not.eql(null);
  });

  it('should call testWidthForReadOnly if resize is triggered', () => {
    window.innerWidth = 767;
    window.dispatchEvent(new window.Event('resize'));
    expect(input.getAttribute('readonly')).not.eql(null);
  });
});
