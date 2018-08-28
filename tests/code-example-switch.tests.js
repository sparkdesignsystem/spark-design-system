/* eslint-disable no-global-assign */
/* global window document localStorage beforeEach afterEach describe it */
import sinon from 'sinon';
import { expect } from 'chai';
import {
  codeExampleSwitch,
  bindUIEvents,
  showSections,
  hideAllSections,
  saveSwitchSetting,
} from '../src/assets/drizzle/scripts/code-example-switch';

describe('codeExampleSwtich init', () => {
  afterEach(() => {
    document.querySelectorAll.restore();
  });

  it('should call getElements once with the correct selector', () => {
    sinon.spy(document, 'querySelectorAll');
    codeExampleSwitch();
    expect(document.querySelectorAll.getCall(0).args[0]).eql('[data-code-example-switch]');
  });
});

describe('codeExampleSwitch UI tests', () => {
  const templates = [];
  let radioGroup;
  let radio1;
  let label2;
  let radio2;
  let radio3;

  beforeEach(() => {
    radioGroup = document.createElement('div');
    radioGroup.setAttribute('data-code-example-switch', 'test1');
    sinon.spy(radioGroup, 'addEventListener');
    radio1 = document.createElement('input');
    radio1.type = 'radio';
    radio1.value = 'none';
    label2 = document.createElement('label');
    label2.setAttribute('for', 'radio2');
    radio2 = document.createElement('input');
    radio2.type = 'radio';
    radio2.id = 'radio2';
    radio2.value = 'angular';
    radio3 = document.createElement('input');
    radio3.type = 'radio';
    radio3.value = 'react';

    radioGroup.appendChild(radio1);
    radioGroup.appendChild(label2);
    radioGroup.appendChild(radio2);
    radioGroup.appendChild(radio3);

    templates[0] = document.createElement('div');
    templates[0].setAttribute('data-none-documentation', 'test1');
    templates[1] = document.createElement('div');
    templates[1].setAttribute('data-angular-documentation', 'test1');
    templates[2] = document.createElement('div');
    templates[2].setAttribute('data-react-documentation', 'test1');

    document.body.appendChild(radioGroup);
    templates.forEach((item) => {
      document.body.appendChild(item);
    });

    localStorage.removeItem('code-example-switch');
  });

  afterEach(() => {
    document.body.innerHTML = '';
    radioGroup.addEventListener.restore();
  });

  it('should bind the change event', () => {
    bindUIEvents(radioGroup);
    expect(radioGroup.addEventListener.getCall(0).args[0]).eql('change');
  });

  it('should hide all the sections if hideAllSections is called', () => {
    hideAllSections(['none', 'angular', 'react']);
    expect(templates[0].classList.contains('drizzle-u-Display--none')).eql(true);
    expect(templates[1].classList.contains('drizzle-u-Display--none')).eql(true);
    expect(templates[2].classList.contains('drizzle-u-Display--none')).eql(true);
  });

  it('should show the correct section given the name when showSections is called', () => {
    hideAllSections(['none', 'angular', 'react']);
    showSections(['angular']);
    expect(templates[0].classList.contains('drizzle-u-Display--none')).eql(true);
    expect(templates[1].classList.contains('drizzle-u-Display--none')).eql(false);
    expect(templates[2].classList.contains('drizzle-u-Display--none')).eql(true);
  });

  it('should show the correct section given the names when showSections is called', () => {
    hideAllSections(['none', 'angular', 'react']);
    showSections(['angular', 'react']);
    expect(templates[0].classList.contains('drizzle-u-Display--none')).eql(true);
    expect(templates[1].classList.contains('drizzle-u-Display--none')).eql(false);
    expect(templates[2].classList.contains('drizzle-u-Display--none')).eql(false);
  });

  it('should show the right section when change is triggered', () => {
    bindUIEvents(radioGroup);
    radio2.click(); // click triggers change
    expect(templates[0].classList.contains('drizzle-u-Display--none')).eql(true);
    expect(templates[1].classList.contains('drizzle-u-Display--none')).eql(false);
    expect(templates[2].classList.contains('drizzle-u-Display--none')).eql(true);
  });

  it('should save a value to localStorage', () => {
    saveSwitchSetting('none');
    expect(localStorage.getItem('code-example-switch')).eql('none');
  });

  it('should do nothing if localStorage is not defined', () => {
    const tempLocalStorage = localStorage;
    localStorage = null;
    saveSwitchSetting('none');
    localStorage = tempLocalStorage;
    expect(localStorage.getItem('code-example-switch')).eql(null);
  });

  it('should save the switch setting to localStorage on change', () => {
    codeExampleSwitch();
    radio2.click(); // click triggers change
    expect(templates[0].classList.contains('drizzle-u-Display--none')).eql(true);
    expect(templates[1].classList.contains('drizzle-u-Display--none')).eql(false);
    expect(templates[2].classList.contains('drizzle-u-Display--none')).eql(true);
    expect(localStorage.getItem('code-example-switch')).eql('angular');
  });

  it('should active buttons if the enter key is pressed', () => {
    codeExampleSwitch();
    const event = new window.Event('keydown');
    event.keyCode = 13;
    label2.dispatchEvent(event);
    expect(radio2.checked).eql(true);
  });

  it('should do nothing if another key is pressed', () => {
    codeExampleSwitch();
    const event = new window.Event('keydown');
    event.keyCode = 9;
    label2.dispatchEvent(event);
    expect(radio2.checked).eql(false);
  });
});
