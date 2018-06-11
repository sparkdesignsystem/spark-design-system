/* global window beforeEach afterEach document describe it */
import sinon from 'sinon';
import { expect } from 'chai';
import { hideWaitModal, MODAL_TIMER } from '../src/assets/drizzle/scripts/modals';
import { modals } from '../packages/spark-core/components/modals';

describe('Modal tests', () => {
  let triggerDefaultModal;
  let defaultModal;
  let triggerWaitModal;
  let waitModal;
  let modalMask;
  let main;
  let outsideOfMainDiv;
  const HIDE_CLASS = 'sprk-u-Display--none';
  let event;
  const clock = sinon.useFakeTimers();

  beforeEach(() => {
    main = document.createElement('div');
    main.setAttribute('data-sprk-main', 'true');
    outsideOfMainDiv = document.createElement('div');
    modalMask = document.createElement('div');
    modalMask.setAttribute('data-sprk-modal-mask', 'true');
    modalMask.setAttribute('tabindex', '-1');
    modalMask.classList.add('sprk-c-ModalMask', HIDE_CLASS);

    waitModal = document.createElement('div');
    waitModal.classList.add('sprk-c-Modal', HIDE_CLASS);
    waitModal.setAttribute('tabindex', '-1');
    waitModal.setAttribute('data-sprk-modal', 'exampleWaitModal');
    waitModal.setAttribute('data-sprk-modal-type', 'wait');
    triggerWaitModal = document.createElement('button');
    triggerWaitModal.setAttribute('data-sprk-modal-trigger', 'exampleWaitModal');
    triggerWaitModal.textContent = 'Launch Wait Modal';
    sinon.spy(triggerWaitModal, 'addEventListener');
    main.appendChild(triggerWaitModal);

    triggerDefaultModal = document.createElement('button');
    sinon.spy(triggerDefaultModal, 'addEventListener');
    triggerDefaultModal.setAttribute('data-sprk-modal-trigger', 'exampleDefaultModal');
    triggerDefaultModal.textContent = 'Launch Default Modal';
    defaultModal = document.createElement('div');
    defaultModal.classList.add('sprk-c-Modal', HIDE_CLASS);
    defaultModal.setAttribute('tabindex', '-1');
    defaultModal.setAttribute('data-sprk-modal', 'exampleDefaultModal');
    main.appendChild(triggerDefaultModal);

    outsideOfMainDiv.appendChild(waitModal);
    outsideOfMainDiv.appendChild(defaultModal);
    outsideOfMainDiv.appendChild(modalMask);
    document.body.appendChild(main);
    document.body.appendChild(outsideOfMainDiv);
  });

  afterEach(() => {
    document.body.innerHTML = '';
    triggerWaitModal.addEventListener.restore();
    triggerDefaultModal.addEventListener.restore();
    clock.restore();
  });

  it(`should hide the wait modal after ${MODAL_TIMER} seconds`, () => {
    modals();
    hideWaitModal();
    event = new window.Event('click');
    triggerWaitModal.dispatchEvent(event);
    clock.tick(MODAL_TIMER);
    expect(triggerWaitModal.addEventListener.getCall(0).args[0]).eql('click');
    expect(modalMask.classList.contains(HIDE_CLASS)).eql(true);
    expect(waitModal.classList.contains(HIDE_CLASS)).eql(true);
    expect(main.hasAttribute('aria-hidden')).eql(false);
  });

  it(`should not hide the default modal after ${MODAL_TIMER} seconds`, () => {
    modals();
    hideWaitModal();
    event = new window.Event('click');
    triggerDefaultModal.dispatchEvent(event);
    clock.tick(MODAL_TIMER);
    expect(triggerDefaultModal.addEventListener.getCall(0).args[0]).eql('click');
    expect(modalMask.classList.contains(HIDE_CLASS)).eql(false);
    expect(defaultModal.classList.contains(HIDE_CLASS)).eql(false);
    expect(main.hasAttribute('aria-hidden')).eql(true);
  });
});
