/* global document describe before it */
import { expect } from 'chai';
import { showModal, hideModal, isMaskClicked, currentOpenModal } from '../components/modals';
import { getFocusableEls, focusFirstEl, isActiveElement } from '../utilities/elementState';
import { isTabPressed, isEscPressed } from '../utilities/keypress';

describe('Modal tests', () => {
  let triggerDefaultModal;
  let triggerWaitModal;
  let defaultModal;
  let waitModal;
  let modalMask;
  let cancelDefault;
  let main;
  let link;
  let outsideOfMainDiv;
  const HIDE_CLASS = 'sprk-u-Hide';

  before(() => {
    main = document.createElement('div');
    main.setAttribute('data-sprk-main', 'true');

    outsideOfMainDiv = document.createElement('div');

    modalMask = document.createElement('div');
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
    cancelDefault.setAttribute('data-sprk-modal-cancel', 'exampleDefaultModal');
    cancelDefault.textContent = 'Cancel';
    cancelDefault.href = '#';

    link = document.createElement('a');
    cancelDefault.textContent = 'Link';
    cancelDefault.href = '#';

    triggerDefaultModal = document.createElement('button');
    triggerDefaultModal.setAttribute('data-sprk-modal-trigger', 'exampleDefaultModal');
    triggerDefaultModal.textContent = 'Launch Default Modal';

    triggerWaitModal = document.createElement('button');
    triggerWaitModal.setAttribute('data-sprk-modal-trigger', 'exampleWaitModal');
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

  it('should return the currently open modal DOM element', () => {
    const modalsList = document.querySelectorAll('[data-sprk-modal]');
    // Show a modal
    showModal(defaultModal, modalMask, main);
    // Grab currently open modal
    const modalEl = currentOpenModal(modalsList);
    expect(modalEl).eql(defaultModal);
  });

  it('should show the default modal, mask and set aria-hidden=true on main container', () => {
    showModal(defaultModal, modalMask, main);

    // showModal should remove the hide class from the modal mask
    expect(modalMask.classList.contains(HIDE_CLASS)).eql(false);

    // showModal should remove the hide class from the modal
    expect(defaultModal.classList.contains(HIDE_CLASS)).eql(false);

    // showModal should add the aria-hidden attribute to main container
    expect(main.hasAttribute('aria-hidden')).eql(true);
  });

  it('should show the wait modal, mask and set aria-hidden=true on main', () => {
    showModal(waitModal, modalMask, main);

    // showModal should remove the hide class from the modal mask
    expect(modalMask.classList.contains(HIDE_CLASS)).eql(false);

    // showModal should remove the hide class from the modal
    expect(waitModal.classList.contains(HIDE_CLASS)).eql(false);

    // // showModal should add the aria-hidden attribute to main
    expect(main.hasAttribute('aria-hidden')).eql(true);
  });

  it('should hide the default modal, mask, remove aria-hidden=true on main, and send focus back to trigger element', () => {
    // First we show the modal
    showModal(defaultModal, modalMask, main);
    hideModal(defaultModal, modalMask, main);

    // hideModal should remove the hide class from the modal mask
    expect(modalMask.classList.contains(HIDE_CLASS)).eql(true);

    // hideModal should remove the hide class from the modal
    expect(defaultModal.classList.contains(HIDE_CLASS)).eql(true);

    // hideModal should remove the aria-hidden attribute to main
    expect(main.hasAttribute('aria-hidden')).eql(false);

    // hideModal should send focus back to trigger element
    expect(triggerDefaultModal).eql(document.activeElement);
  });

  it('should hide the wait modal, mask, remove aria-hidden=true on main, and send focus back to trigger element', () => {
    // First we show the modal
    showModal(waitModal, modalMask, main);
    hideModal(waitModal, modalMask, main);

    // hideModal should remove the hide class from the modal mask
    expect(modalMask.classList.contains(HIDE_CLASS)).eql(true);

    // hideModal should remove the hide class from the modal
    expect(waitModal.classList.contains(HIDE_CLASS)).eql(true);

    // hideModal should remove the aria-hidden attribute to main
    expect(main.hasAttribute('aria-hidden')).eql(false);

    // hideModal should send focus back to trigger element
    expect(triggerWaitModal).eql(document.activeElement);
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
    expect(getFocusableEls(defaultModal).length).eql(5);
  });

  it('should focus the first focusable element in the modal', () => {
    focusFirstEl(defaultModal);
    // Anchor link in default modal should be focused
    const isFocused = document.activeElement === cancelDefault;
    expect(isFocused).eql(true);
  });

  it('should determine if Tab key was pressed', () => {
    const tabKeyEvent = {
      key: 'Tab',
      keyCode: 9,
    };
    const notTabKeyEvent = {
      key: 'Enter',
      keyCode: 13,
    };
    expect(isTabPressed(tabKeyEvent)).eql(true);
    expect(isTabPressed(notTabKeyEvent)).eql(false);
  });

  it('should determine if Escape key was pressed', () => {
    const escKeyEvent = {
      key: 'Escape',
      keyCode: 27,
    };
    const notEscKeyEvent = {
      key: 'Enter',
      keyCode: 13,
    };
    expect(isEscPressed(escKeyEvent)).eql(true);
    expect(isEscPressed(notEscKeyEvent)).eql(false);
  });

  it('should return true when modal mask is clicked', () => {
    let event;
    document.addEventListener('click', (e) => {
      event = e;
      return e;
    });
    modalMask.click();
    expect(isMaskClicked(event)).eql(true);
  });

  it('should return false when modal mask is not clicked', () => {
    let event;
    document.addEventListener('click', (e) => {
      event = e;
      return e;
    });
    cancelDefault.click();
    expect(isMaskClicked(event)).eql(false);
  });

  it('should determine if element is active element', () => {
    const notActiveLink = document.createElement('a');
    // Give focus to cancel link
    cancelDefault.focus();
    isActiveElement(cancelDefault);
    expect(document.activeElement).eql(cancelDefault);
    expect(document.activeElement).to.not.eql(notActiveLink);
  });
});
