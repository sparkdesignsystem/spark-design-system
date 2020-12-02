/* global window beforeEach afterEach document describe it sinon */
import {
  modals,
  showModal,
  hideModal,
  isMaskClicked,
  isWaitModal,
  handleModalKeyEvents,
  handleMaskEvents,
  bindUIEvents,
  currentOpenModal,
} from '../components/modals';
import {
  getFocusableEls,
  focusFirstEl,
  isActiveElement,
} from '../utilities/elementState';
import { isTabPressed, isEscPressed } from '../utilities/keypress';

describe('modals init', () => {
  afterEach(() => {
    document.querySelectorAll.restore();
  });

  it('should call getElements once with the correct selector', () => {
    sinon.spy(document, 'querySelectorAll');
    sinon.spy(document, 'querySelector');
    modals();
    expect(document.querySelector.getCall(0).args[0]).toBe(
      '[data-sprk-modal-mask="true"]',
    );
    expect(document.querySelector.getCall(1).args[0]).toBe('[data-sprk-main]');
    expect(document.querySelectorAll.getCall(0).args[0]).toBe(
      '[data-sprk-modal-trigger]',
    );
    expect(document.querySelectorAll.getCall(1).args[0]).toBe(
      '[data-sprk-modal]',
    );
    expect(document.querySelectorAll.getCall(2).args[0]).toBe(
      '[data-sprk-modal-cancel]',
    );
  });
});

describe('modal UI tests', () => {
  let triggerDefaultModal;
  let triggerWaitModal;
  let defaultModal;
  let waitModal;
  let modalMask;
  let cancelDefault;
  let main;
  let link;
  let outsideOfMainDiv;
  const HIDE_CLASS = 'sprk-u-Display--none';
  let event;

  beforeEach(() => {
    main = document.createElement('div');
    main.setAttribute('data-sprk-main', 'true');

    outsideOfMainDiv = document.createElement('div');

    modalMask = document.createElement('div');
    sinon.spy(modalMask, 'addEventListener');
    modalMask.setAttribute('data-sprk-modal-mask', 'true');
    modalMask.setAttribute('tabindex', '-1');
    modalMask.classList.add('sprk-c-ModalMask', HIDE_CLASS);

    defaultModal = document.createElement('div');
    defaultModal.classList.add('sprk-c-Modal', HIDE_CLASS);
    defaultModal.setAttribute('tabindex', '-1');
    defaultModal.setAttribute('data-sprk-modal', 'exampleDefaultModal');

    waitModal = document.createElement('div');
    waitModal.classList.add('sprk-c-Modal', HIDE_CLASS);
    waitModal.setAttribute('tabindex', '-1');
    waitModal.setAttribute('data-sprk-modal', 'exampleWaitModal');
    waitModal.setAttribute('data-sprk-modal-type', 'wait');

    cancelDefault = document.createElement('a');
    sinon.spy(cancelDefault, 'addEventListener');
    cancelDefault.setAttribute('data-sprk-modal-cancel', 'exampleDefaultModal');
    cancelDefault.textContent = 'Cancel';
    cancelDefault.href = '#';

    link = document.createElement('a');
    cancelDefault.textContent = 'Link';
    cancelDefault.href = '#';

    triggerDefaultModal = document.createElement('button');
    sinon.spy(triggerDefaultModal, 'addEventListener');
    triggerDefaultModal.setAttribute(
      'data-sprk-modal-trigger',
      'exampleDefaultModal',
    );
    triggerDefaultModal.setAttribute(
      'data-sprk-modal-trigger-prevent-default',
      'true',
    );
    triggerDefaultModal.textContent = 'Launch Default Modal';

    triggerWaitModal = document.createElement('button');
    sinon.spy(triggerWaitModal, 'addEventListener');
    triggerWaitModal.setAttribute(
      'data-sprk-modal-trigger',
      'exampleWaitModal',
    );
    triggerWaitModal.textContent = 'Launch Wait Modal';

    defaultModal.append(cancelDefault);
    defaultModal.append(link);

    main.appendChild(triggerWaitModal);
    main.appendChild(triggerDefaultModal);

    outsideOfMainDiv.appendChild(waitModal);
    outsideOfMainDiv.appendChild(defaultModal);
    outsideOfMainDiv.appendChild(modalMask);

    document.body.appendChild(main);
    document.body.appendChild(outsideOfMainDiv);
  });

  afterEach(() => {
    triggerDefaultModal.addEventListener.restore();
    triggerWaitModal.addEventListener.restore();
    cancelDefault.addEventListener.restore();
    modalMask.addEventListener.restore();
    document.body.innerHTML = '';
  });

  it('should bind a click event to each trigger', () => {
    bindUIEvents(
      modalMask,
      main,
      [triggerDefaultModal, triggerWaitModal],
      [defaultModal, waitModal],
      [cancelDefault],
    );
    expect(triggerDefaultModal.addEventListener.getCall(0).args[0]).toBe(
      'click',
    );
    expect(triggerWaitModal.addEventListener.getCall(0).args[0]).toBe('click');
  });

  it('should hide the correct modal when cancel is triggered', () => {
    bindUIEvents(
      modalMask,
      main,
      [triggerDefaultModal, triggerWaitModal],
      [defaultModal, waitModal],
      [cancelDefault],
    );
    event = new window.Event('click');
    triggerDefaultModal.dispatchEvent(event);
    expect(defaultModal.classList.contains('sprk-u-Display--none')).toBe(false);
    cancelDefault.dispatchEvent(event);
    expect(defaultModal.classList.contains('sprk-u-Display--none')).toBe(true);
  });

  it(`should hide the correct modal when cancel is 
      triggered if preventDefault is not set`, () => {
    triggerDefaultModal.removeAttribute(
      'data-sprk-modal-trigger-prevent-default',
    );
    bindUIEvents(
      modalMask,
      main,
      [triggerDefaultModal, triggerWaitModal],
      [defaultModal, waitModal],
      [cancelDefault],
    );
    event = new window.Event('click');
    triggerDefaultModal.dispatchEvent(event);
    expect(defaultModal.classList.contains('sprk-u-Display--none')).toBe(false);
    cancelDefault.dispatchEvent(event);
    expect(defaultModal.classList.contains('sprk-u-Display--none')).toBe(true);
  });

  it('should bind a click event to each cancel', () => {
    bindUIEvents(
      modalMask,
      main,
      [triggerDefaultModal, triggerWaitModal],
      [defaultModal, waitModal],
      [cancelDefault],
    );
    expect(cancelDefault.addEventListener.getCall(0).args[0]).toBe('click');
  });

  it(`should bind a click event to the mask, 
      if there is a modal and a mask`, () => {
    bindUIEvents(
      modalMask,
      main,
      [triggerDefaultModal, triggerWaitModal],
      [defaultModal, waitModal],
      [cancelDefault],
    );
    expect(modalMask.addEventListener.getCall(0).args[0]).toBe('click');
  });

  it('should do nothing, if there is no modal or no mask', () => {
    bindUIEvents(
      null,
      main,
      [triggerDefaultModal, triggerWaitModal],
      [defaultModal, waitModal],
      [cancelDefault],
    );
    expect(modalMask.addEventListener.called).toBe(false);
  });

  it('should close a default modal when the mask is clicked', () => {
    bindUIEvents(
      modalMask,
      main,
      [triggerDefaultModal, triggerWaitModal],
      [defaultModal, waitModal],
      [cancelDefault],
    );
    expect(defaultModal.classList.contains('sprk-u-Display--none')).toBe(true);
    showModal(defaultModal, modalMask, main);
    expect(defaultModal.classList.contains('sprk-u-Display--none')).toBe(false);
    event = new window.Event('click');
    modalMask.dispatchEvent(event);
    expect(defaultModal.classList.contains('sprk-u-Display--none')).toBe(true);
  });
});

describe('isWaitModal tests', () => {
  let modal;
  beforeEach(() => {
    modal = document.createElement('div');
  });

  it('should return true if the modal is of type wait', () => {
    modal.setAttribute('data-sprk-modal-type', 'wait');
    expect(isWaitModal(modal)).toBe(true);
  });

  it('should return false if the modal is not of type wait', () => {
    expect(isWaitModal(modal)).toBe(false);
  });
});

describe('Modal tests', () => {
  let triggerDefaultModal;
  let triggerWaitModal;
  let defaultModal;
  let waitModal;
  let modalMask;
  let cancelDefault;
  let main;
  let link;
  let link2;
  let outsideOfMainDiv;
  const HIDE_CLASS = 'sprk-u-Display--none';
  let event;

  beforeEach(() => {
    main = document.createElement('div');
    main.setAttribute('data-sprk-main', 'true');

    outsideOfMainDiv = document.createElement('div');

    modalMask = document.createElement('div');
    modalMask.setAttribute('data-sprk-modal-mask', 'true');
    modalMask.setAttribute('tabindex', '-1');
    modalMask.classList.add('sprk-c-ModalMask', HIDE_CLASS);
    sinon.spy(modalMask.classList, 'add');

    defaultModal = document.createElement('div');
    defaultModal.classList.add('sprk-c-Modal', HIDE_CLASS);
    defaultModal.setAttribute('tabindex', '-1');
    defaultModal.setAttribute('data-sprk-modal', 'exampleDefaultModal');
    sinon.spy(defaultModal.classList, 'add');

    waitModal = document.createElement('div');
    waitModal.classList.add('sprk-c-Modal', HIDE_CLASS);
    waitModal.setAttribute('tabindex', '-1');
    waitModal.setAttribute('data-sprk-modal', 'exampleWaitModal');
    waitModal.setAttribute('data-sprk-modal-type', 'wait');

    cancelDefault = document.createElement('a');
    cancelDefault.setAttribute('data-sprk-modal-cancel', 'exampleDefaultModal');
    cancelDefault.textContent = 'Cancel';
    cancelDefault.href = '#';

    link = document.createElement('a');
    cancelDefault.textContent = 'Link';
    cancelDefault.href = '#';

    link2 = document.createElement('a');
    link2.textContent = 'Link 2';
    link2.href = '#';

    triggerDefaultModal = document.createElement('button');
    triggerDefaultModal.setAttribute(
      'data-sprk-modal-trigger',
      'exampleDefaultModal',
    );
    triggerDefaultModal.textContent = 'Launch Default Modal';

    triggerWaitModal = document.createElement('button');
    triggerWaitModal.setAttribute(
      'data-sprk-modal-trigger',
      'exampleWaitModal',
    );
    triggerWaitModal.textContent = 'Launch Wait Modal';

    defaultModal.append(cancelDefault);
    defaultModal.append(link);
    defaultModal.append(link2);

    main.appendChild(triggerWaitModal);
    main.appendChild(triggerDefaultModal);

    outsideOfMainDiv.appendChild(waitModal);
    outsideOfMainDiv.appendChild(defaultModal);
    outsideOfMainDiv.appendChild(modalMask);

    document.body.appendChild(main);
    document.body.appendChild(outsideOfMainDiv);
  });

  afterEach(() => {
    document.body.innerHTML = '';
    modalMask.classList.add.restore();
    defaultModal.classList.add.restore();
  });

  it('should return the currently open modal DOM element', () => {
    const modalsList = document.querySelectorAll('[data-sprk-modal]');
    // Show a modal
    showModal(defaultModal, modalMask, main);
    // Grab currently open modal
    const modalEl = currentOpenModal(modalsList);
    expect(modalEl).toEqual(defaultModal);
  });

  it(`should show the default modal, mask and set 
      aria-hidden=true on main container`, () => {
    showModal(defaultModal, modalMask, main);

    // showModal should remove the hide class from the modal mask
    expect(modalMask.classList.contains(HIDE_CLASS)).toBe(false);

    // showModal should remove the hide class from the modal
    expect(defaultModal.classList.contains(HIDE_CLASS)).toBe(false);

    // showModal should add the aria-hidden attribute to main container
    expect(main.hasAttribute('aria-hidden')).toBe(true);
  });

  it('showModal should do nothing if there is no mask', () => {
    showModal(defaultModal, null, main);
    expect(defaultModal.classList.add.called).toBe(false);
  });

  it(`should show the wait modal, mask and set 
      aria-hidden=true on main`, () => {
    showModal(waitModal, modalMask, main);

    // showModal should remove the hide class from the modal mask
    expect(modalMask.classList.contains(HIDE_CLASS)).toBe(false);

    // showModal should remove the hide class from the modal
    expect(waitModal.classList.contains(HIDE_CLASS)).toBe(false);

    // // showModal should add the aria-hidden attribute to main
    expect(main.hasAttribute('aria-hidden')).toBe(true);
  });

  it(`should hide the default modal, mask, remove aria-hidden=true 
      on main, and send focus back to trigger element`, () => {
    // First we show the modal
    showModal(defaultModal, modalMask, main);
    hideModal(defaultModal, modalMask, main);

    // hideModal should remove the hide class from the modal mask
    expect(modalMask.classList.contains(HIDE_CLASS)).toBe(true);

    // hideModal should remove the hide class from the modal
    expect(defaultModal.classList.contains(HIDE_CLASS)).toBe(true);

    // hideModal should remove the aria-hidden attribute to main
    expect(main.hasAttribute('aria-hidden')).toBe(false);

    // hideModal should send focus back to trigger element
    expect(triggerDefaultModal).toEqual(document.activeElement);
  });

  it(`should return if the modal is already hidden or if the 
      mask or main section is not defined`, () => {
    hideModal(defaultModal, modalMask, main);
    expect(modalMask.classList.add.called).toBe(false);
  });

  it(`should hide the wait modal, mask, remove aria-hidden=true 
      on main, and send focus back to trigger element`, () => {
    // First we show the modal
    showModal(waitModal, modalMask, main);
    hideModal(waitModal, modalMask, main);

    // hideModal should remove the hide class from the modal mask
    expect(modalMask.classList.contains(HIDE_CLASS)).toBe(true);

    // hideModal should remove the hide class from the modal
    expect(waitModal.classList.contains(HIDE_CLASS)).toBe(true);

    // hideModal should remove the aria-hidden attribute to main
    expect(main.hasAttribute('aria-hidden')).toBe(false);

    // hideModal should send focus back to trigger element
    expect(triggerWaitModal).toEqual(document.activeElement);
  });

  it('should get all focusable elements in a modal', () => {
    // Add a bunch of focusable elements to modal
    // in addition to the <a> that's already added
    const input = document.createElement('input');
    const select = document.createElement('select');
    const textarea = document.createElement('textarea');
    const button = document.createElement('button');
    // Add non-focusable elements by default to modal
    const p = document.createElement('p');
    const h1 = document.createElement('h1');
    const iframe = document.createElement('iframe');

    defaultModal.append(input);
    defaultModal.append(select);
    defaultModal.append(textarea);
    defaultModal.append(button);
    defaultModal.append(iframe);
    defaultModal.append(p);
    defaultModal.append(h1);
    // Should be 5 focusable elements
    expect(getFocusableEls(defaultModal).length).toBe(6);
  });

  it('should focus the first focusable element in the modal', () => {
    focusFirstEl(defaultModal);
    // Anchor link in default modal should be focused
    const isFocused = document.activeElement === cancelDefault;
    expect(isFocused).toBe(true);
  });

  it('should do nothing if focusFirstEl contains no focusable elements', () => {
    focusFirstEl(defaultModal);
    focusFirstEl(document.createElement('div'));
    expect(document.activeElement.outerHTML).toBe(
      '<a data-sprk-modal-cancel="exampleDefaultModal" href="#">Link</a>',
    );
  });

  it('should determine if Tab key was pressed', () => {
    const tabKeyEvent = new window.Event('keydown');
    tabKeyEvent.keyCode = 9;
    const notTabKeyEvent = new window.Event('keydown');
    notTabKeyEvent.keyCode = 13;
    expect(isTabPressed(tabKeyEvent)).toBe(true);
    expect(isTabPressed(notTabKeyEvent)).toBe(false);
  });

  it('should determine if Escape key was pressed', () => {
    const escKeyEvent = new window.Event('keydown');
    escKeyEvent.keyCode = 27;
    const notEscKeyEvent = new window.Event('keydown');
    notEscKeyEvent.keyCode = 13;
    expect(isEscPressed(escKeyEvent)).toBe(true);
    expect(isEscPressed(notEscKeyEvent)).toBe(false);
  });

  it('should return true when modal mask is clicked', () => {
    document.addEventListener('click', (e) => {
      event = e;
      return e;
    });
    modalMask.click();
    expect(isMaskClicked(event)).toBe(true);
  });

  it('should return false when modal mask is not clicked', () => {
    document.addEventListener('click', (e) => {
      event = e;
      return e;
    });
    cancelDefault.click();
    expect(isMaskClicked(event)).toBe(false);
  });

  it('should determine if element is active element', () => {
    const notActiveLink = document.createElement('a');
    // Give focus to cancel link
    cancelDefault.focus();
    isActiveElement(cancelDefault);
    expect(document.activeElement).toEqual(cancelDefault);
    expect(document.activeElement).not.toEqual(notActiveLink);
  });

  it('should perform modal key events only while a modal is open', () => {
    const modalsList = document.querySelectorAll('[data-sprk-modal]');
    const escKeyEvent = new window.Event('keydown');
    escKeyEvent.keyCode = 27;
    // Check for open modal
    const modalEl = currentOpenModal(modalsList);
    // Check to make sure it is closed
    expect(modalEl).toEqual(undefined);
    // Now throw a 'esc' key event when no modal is open
    handleModalKeyEvents(modalsList, modalMask, main, escKeyEvent);
    // Check to make sure the modal is closed and that it has the hide class
    expect(defaultModal.classList.contains(HIDE_CLASS)).toBe(true);
    // Now open the modal
    showModal(defaultModal, modalMask, main);
    // Check to make sure the modal is open
    expect(defaultModal.classList.contains(HIDE_CLASS)).toBe(false);
    // Now throw a 'esc' key event
    handleModalKeyEvents(modalsList, modalMask, main, escKeyEvent);
    // Check to make sure the modal is closed and that it has the hide class
    expect(defaultModal.classList.contains(HIDE_CLASS)).toBe(true);
  });

  it('should do nothing when a wait modal is open and esc is pressed', () => {
    const modalsList = document.querySelectorAll('[data-sprk-modal]');
    const escKeyEvent = new window.Event('keydown');
    escKeyEvent.keyCode = 27;
    // Now throw a 'esc' key event when no modal is open
    handleModalKeyEvents(modalsList, modalMask, main, escKeyEvent);
    showModal(waitModal, modalMask, main);
    handleModalKeyEvents(modalsList, modalMask, main, escKeyEvent);
    expect(waitModal.classList.contains(HIDE_CLASS)).toBe(false);
  });

  it('should do nothing on a key thats not tab or esc', () => {
    const modalsList = document.querySelectorAll('[data-sprk-modal]');
    const QKeyEvent = new window.Event('keydown');
    QKeyEvent.keyCode = 81;
    showModal(waitModal, modalMask, main);
    handleModalKeyEvents(modalsList, modalMask, main, QKeyEvent);
    expect(document.activeElement).toEqual(waitModal);
  });

  it('should return focus to the open wait modal if tab is pressed', () => {
    const modalsList = document.querySelectorAll('[data-sprk-modal]');
    const tabKeyEvent = new window.Event('keydown');
    tabKeyEvent.keyCode = 9;
    showModal(waitModal, modalMask, main);
    handleModalKeyEvents(modalsList, modalMask, main, tabKeyEvent);
    expect(document.activeElement).toEqual(waitModal);
  });

  it(`should return focus to the open wait 
      modal if shift + tab is pressed`, () => {
    const modalsList = document.querySelectorAll('[data-sprk-modal]');
    const tabKeyEvent = new window.Event('keydown');
    tabKeyEvent.keyCode = 9;
    tabKeyEvent.shiftKey = true;
    showModal(waitModal, modalMask, main);
    handleModalKeyEvents(modalsList, modalMask, main, tabKeyEvent);
    expect(document.activeElement).toEqual(waitModal);
  });

  it(`should return focus to the first element if tab is pressed while
      the last focusable element is focused`, () => {
    const modalsList = document.querySelectorAll('[data-sprk-modal]');
    const tabKeyEvent = new window.Event('keydown');
    tabKeyEvent.keyCode = 9;
    showModal(defaultModal, modalMask, main);
    link2.focus();
    expect(document.activeElement).toEqual(link2);
    handleModalKeyEvents(modalsList, modalMask, main, tabKeyEvent);
    expect(document.activeElement).toEqual(cancelDefault);
  });

  it(`should return focus to the first element if tab + shift 
      is pressed while the first focusable element is focused`, () => {
    const modalsList = document.querySelectorAll('[data-sprk-modal]');
    const tabKeyEvent = new window.Event('keydown');
    tabKeyEvent.keyCode = 9;
    tabKeyEvent.shiftKey = true;
    showModal(defaultModal, modalMask, main);
    cancelDefault.focus();
    expect(document.activeElement).toEqual(cancelDefault);
    handleModalKeyEvents(modalsList, modalMask, main, tabKeyEvent);
    expect(document.activeElement).toEqual(link2);
  });

  it(`should do nothing if tab + shift is pressed while 
      the focused element is not first`, () => {
    const modalsList = document.querySelectorAll('[data-sprk-modal]');
    const tabKeyEvent = new window.Event('keydown');
    tabKeyEvent.keyCode = 9;
    tabKeyEvent.shiftKey = true;
    showModal(defaultModal, modalMask, main);
    link2.focus();
    handleModalKeyEvents(modalsList, modalMask, main, tabKeyEvent);
    expect(document.activeElement).toEqual(link2);
  });

  it(`should do nothing if tab is pressed while 
      the focused element is not last`, () => {
    const modalsList = document.querySelectorAll('[data-sprk-modal]');
    const tabKeyEvent = new window.Event('keydown');
    tabKeyEvent.keyCode = 9;
    showModal(defaultModal, modalMask, main);
    cancelDefault.focus();
    handleModalKeyEvents(modalsList, modalMask, main, tabKeyEvent);
    expect(document.activeElement).toEqual(cancelDefault);
  });

  it('should not hide an open wait modal', () => {
    const modalsList = document.querySelectorAll('[data-sprk-modal]');
    showModal(waitModal, modalMask, main);
    handleMaskEvents(modalsList, modalMask, main, {
      target: modalMask,
      preventDefault: () => {},
    });
    expect(waitModal.classList.contains('sprk-u-Display--none')).toBe(false);
  });

  it('should perform modal mask click event only while a modal is open', () => {
    const modalsList = document.querySelectorAll('[data-sprk-modal]');
    const maskDiv = document.createElement('div');
    maskDiv.setAttribute('data-sprk-modal-mask', 'true');
    // Check for open modal
    const modalEl = currentOpenModal(modalsList);
    const modalClickEv = {
      target: maskDiv,
      preventDefault: () => {},
    };
    // Check to make sure it is closed
    expect(modalEl).toEqual(undefined);
    // Now open the modal
    showModal(defaultModal, modalMask, main);
    // Check to make sure the modal is open
    expect(defaultModal.classList.contains(HIDE_CLASS)).toBe(false);
    // Now throw a 'esc' key event
    handleMaskEvents(modalsList, modalMask, main, modalClickEv);
    // Check to make sure the modal is closed and that it has the hide class
    expect(defaultModal.classList.contains(HIDE_CLASS)).toBe(true);
  });
});
