/* global window document beforeEach afterEach describe it sinon */
import {
  spinners,
  getSpinnerClasses,
  setSpinning,
  cancelSpinning,
} from '../components/spinners';

describe('spinners init', () => {
  afterEach(() => {
    document.querySelectorAll.restore();
  });

  it('should call getElements once with the correct selector', () => {
    sinon.spy(document, 'querySelectorAll');
    spinners();
    expect(document.querySelectorAll.getCall(0).args[0]).toBe(
      '[data-sprk-spinner]',
    );
  });
});

describe('getSpinnerClasses tests', () => {
  it('should return the two base spinner classes with no options', () => {
    const expected = 'sprk-c-Spinner sprk-c-Spinner--circle';
    expect(getSpinnerClasses({})).toEqual(expected);
  });

  it('should add the large class if the option is set', () => {
    const expected =
      'sprk-c-Spinner sprk-c-Spinner--circle sprk-c-Spinner--large';
    expect(getSpinnerClasses({ size: 'large' })).toEqual(expected);
  });

  it('should add the dark class if the option is set', () => {
    const expected =
      'sprk-c-Spinner sprk-c-Spinner--circle sprk-c-Spinner--dark';
    expect(getSpinnerClasses({ lightness: 'dark' })).toEqual(expected);
  });

  it('should add the dark class if the variant option is set', () => {
    const expected =
      'sprk-c-Spinner sprk-c-Spinner--circle sprk-c-Spinner--dark';
    expect(getSpinnerClasses({ variant: 'dark' })).toEqual(expected);
  });

  it('should add the primary class if the variant option is set', () => {
    const expected =
      'sprk-c-Spinner sprk-c-Spinner--circle sprk-c-Spinner--primary';
    expect(getSpinnerClasses({ variant: 'primary' })).toEqual(expected);
  });

  it('should add the secondary class if the variant option is set', () => {
    const expected =
      'sprk-c-Spinner sprk-c-Spinner--circle sprk-c-Spinner--secondary';
    expect(getSpinnerClasses({ variant: 'secondary' })).toEqual(expected);
  });
});

describe('spinners UI tests', () => {
  let spinnerContainer;
  let spinnerContainer2;
  let spinnerContainer3;
  let spinnerContainer4;
  let event;

  beforeEach(() => {
    spinnerContainer = document.createElement('button');
    spinnerContainer.setAttribute('data-sprk-spinner', 'click');
    spinnerContainer.textContent = 'Submit';

    spinnerContainer2 = document.createElement('button');
    spinnerContainer2.setAttribute('data-sprk-spinner', 'click');
    spinnerContainer2.setAttribute('data-sprk-spinner-aria-label', 'custom');
    spinnerContainer2.textContent = 'Submit';

    spinnerContainer3 = document.createElement('button');
    spinnerContainer3.textContent = 'Submit';
    spinnerContainer3.setAttribute('data-sprk-spinner', 'click');
    spinnerContainer3.setAttribute('data-sprk-spinner-role', 'status');
    spinnerContainer3.setAttribute('data-sprk-aria-valuetext', 'Submitting');

    spinnerContainer4 = document.createElement('button');
    spinnerContainer4.setAttribute('data-sprk-spinner', 'click');
    spinnerContainer4.setAttribute('data-sprk-has-spinner', 'true');
    const spinner = document.createElement('div');
    spinner.classList.add('sprk-c-Spinner--circle');
    spinnerContainer4.appendChild(spinner);

    sinon.spy(spinnerContainer, 'addEventListener');
    sinon.spy(spinnerContainer, 'setAttribute');
    document.body.append(spinnerContainer);
    document.body.append(spinnerContainer2);
    document.body.append(spinnerContainer3);
    document.body.append(spinnerContainer4);
    spinners();
  });

  afterEach(() => {
    document.body.innerHTML = '';
    spinnerContainer.addEventListener.restore();
    spinnerContainer.setAttribute.restore();
  });

  it('should attach a click handler to the spinner container', () => {
    expect(spinnerContainer.addEventListener.calledOnce).toBe(true);
    expect(spinnerContainer.addEventListener.getCall(0).args[0]).toBe('click');
  });

  it('should start the spinning if its clicked', () => {
    spinnerContainer.click();
    expect(
      spinnerContainer
        .querySelector('div')
        .classList.contains('sprk-c-Spinner--circle'),
    ).toBe(true);
  });

  it('should add accessibility considerations if clicked', () => {
    spinnerContainer.click();
    const spinnerDiv = spinnerContainer.querySelector('div');
    expect(spinnerDiv.getAttribute('aria-valuetext') === 'Loading').toBe(true);
    expect(spinnerDiv.getAttribute('role') === 'progressbar').toBe(true);
    expect(spinnerContainer.hasAttribute('disabled')).toBe(true);
  });

  it('should choose user choice instead of default', () => {
    spinnerContainer3.click();
    const spinnerDiv = spinnerContainer3.querySelector('div');
    expect(spinnerDiv.getAttribute('aria-valuetext')).toBe(
      spinnerContainer3.getAttribute('data-sprk-aria-valuetext'),
    );
    expect(spinnerDiv.getAttribute('role')).toBe(
      spinnerContainer3.getAttribute('data-sprk-spinner-role'),
    );
  });

  it('should add the loading aria label if spinner is clicked', () => {
    spinnerContainer.click();
    expect(spinnerContainer.getAttribute('aria-label')).toBe('Loading');
  });

  it(`should add the custom aria label if spinner is
    clicked and it is present`, () => {
    expect(spinnerContainer2.getAttribute('data-sprk-spinner-aria-label')).toBe(
      'custom',
    );
    spinnerContainer2.click();
    expect(spinnerContainer2.getAttribute('aria-label')).toBe('custom');
  });

  it(`should remove the loading aria label if the sprk-cancel-spinners
  event is triggered on window`, () => {
    spinnerContainer.click();
    expect(
      spinnerContainer
        .querySelector('div')
        .classList.contains('sprk-c-Spinner--circle'),
    ).toBe(true);
    event = new window.Event('sprk-cancel-spinners');
    window.dispatchEvent(event);
    expect(spinnerContainer.getAttribute('aria-label')).toBe(null);
  });

  it(`should remove spinners if the sprk-cancel-spinners
  event is triggered on window`, () => {
    spinnerContainer.click();
    expect(
      spinnerContainer
        .querySelector('div')
        .classList.contains('sprk-c-Spinner--circle'),
    ).toBe(true);
    event = new window.Event('sprk-cancel-spinners');
    window.dispatchEvent(event);
    expect(spinnerContainer.querySelector('div')).toBe(null);
  });

  it(`should use no text when removing spinners if the sprk-cancel-spinners
  event is triggered on window and there was no text saved`, () => {
    spinnerContainer.click();
    spinnerContainer.removeAttribute('data-sprk-spinner-text');
    expect(
      spinnerContainer
        .querySelector('div')
        .classList.contains('sprk-c-Spinner--circle'),
    ).toBe(true);
    event = new window.Event('sprk-cancel-spinners');
    window.dispatchEvent(event);
    expect(spinnerContainer.querySelector('div')).toBe(null);
    expect(spinnerContainer.textContent).toBe('');
  });

  it(`should not try to start spinning something that's
   already spinning`, () => {
    spinnerContainer4.click();
    expect(
      spinnerContainer4
        .querySelector('div')
        .classList.contains('sprk-c-Spinner--circle'),
    ).toBe(true);
  });
});

describe('setSpinning tests', () => {
  let spinnerContainer;

  beforeEach(() => {
    spinnerContainer = document.createElement('button');
    spinnerContainer.textContent = 'Submit';
  });

  it('should replace the content with a spinner', () => {
    setSpinning(spinnerContainer, {});
    const spinnerDiv = spinnerContainer.querySelector('div');
    expect(spinnerDiv.classList.contains('sprk-c-Spinner')).toBe(true);
  });

  it('should set the original text to a data-sprk-spinner-text attr', () => {
    setSpinning(spinnerContainer, {});
    expect(
      spinnerContainer.getAttribute('data-sprk-spinner-text') === 'Submit',
    ).toBe(true);
  });

  it('should set the data-sprk-has-spinner attr to true', () => {
    setSpinning(spinnerContainer, {});
    expect(
      spinnerContainer.getAttribute('data-sprk-has-spinner') === 'true',
    ).toBe(true);
  });

  it('should set the original width to the style attr', () => {
    setSpinning(spinnerContainer, {});
    const expected = 'width: 0px';
    expect(spinnerContainer.getAttribute('style')).toEqual(expected);
  });

  it('should add has-spinner modifier class', () => {
    setSpinning(spinnerContainer, {});
    expect(
      spinnerContainer.classList.contains('sprk-c-Button--has-spinner'),
    ).toBe(true);
  });
});

describe('cancelSpinning tests', () => {
  let spinnerContainer;

  beforeEach(() => {
    spinnerContainer = document.createElement('button');
    spinnerContainer.textContent = 'Submit';
    setSpinning(spinnerContainer, {});
  });

  it('should remove the spinner', () => {
    cancelSpinning(spinnerContainer);
    expect(spinnerContainer.innerHTML).toBe('Submit');
  });

  it(`should replace the content with the contents of
  data-sprk-spinner-text`, () => {
    cancelSpinning(spinnerContainer);
    expect(spinnerContainer.textContent).toEqual(
      spinnerContainer.getAttribute('data-sprk-spinner-text'),
    );
  });

  it('should remove the data-sprk-has-spinner attr', () => {
    cancelSpinning(spinnerContainer, {});
    expect(spinnerContainer.getAttribute('data-sprk-has-spinner')).toBe(null);
  });

  it('should remove the style attr', () => {
    cancelSpinning(spinnerContainer, {});
    expect(spinnerContainer.getAttribute('style')).toBe(null);
  });

  it('should remove disabled attr', () => {
    cancelSpinning(spinnerContainer, {});
    expect(spinnerContainer.getAttribute('disabled')).toBe(null);
  });

  it('should remove has-spinner class modifier', () => {
    cancelSpinning(spinnerContainer, {});
    expect(
      spinnerContainer.classList.contains('sprk-c-Button--has-spinner'),
    ).toBe(false);
  });
});

describe('spinners with is-not-disabled', () => {
  let spinnerContainer;

  beforeEach(() => {
    spinnerContainer = document.createElement('button');
    spinnerContainer.setAttribute('data-sprk-spinner', 'is-not-disabled');
    spinnerContainer.textContent = 'Submit';

    sinon.spy(spinnerContainer, 'addEventListener');
    sinon.spy(spinnerContainer, 'setAttribute');

    document.body.append(spinnerContainer);
    spinners();
  });

  afterEach(() => {
    document.body.innerHTML = '';
    spinnerContainer.addEventListener.restore();
    spinnerContainer.setAttribute.restore();
  });

  it('should start spinning and not be disabled if its clicked', () => {
    spinnerContainer.click();

    expect(
      spinnerContainer
        .querySelector('div')
        .classList.contains('sprk-c-Spinner--circle'),
    ).toBe(true);

    expect(spinnerContainer.hasAttribute('disabled')).toBe(false);
  });

  it('should not start spinning if its already spinning', () => {
    spinnerContainer.setAttribute('data-sprk-has-spinner', 'true');

    spinnerContainer.click();

    expect(spinnerContainer.querySelector('div')).toBe(null);

    expect(spinnerContainer.hasAttribute('disabled')).toBe(false);
  });
});
