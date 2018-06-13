/* global document before beforeEach afterEach describe it */
import sinon from 'sinon';
import { expect } from 'chai';
import {
  formStateChanger,
  bindUIEvents,
  mapTemplates,
  toggleTemplate,
} from '../src/assets/drizzle/scripts/form-state-changer';

describe('formStateChangeer init', () => {
  afterEach(() => {
    document.querySelectorAll.restore();
  });

  it('should call getElements once with the correct selector', () => {
    sinon.spy(document, 'querySelectorAll');
    formStateChanger();
    expect(document.querySelectorAll.getCall(0).args[0]).eql('[data-state-changer-id]');
  });
});

describe('formStateChanger UI tests', () => {
  const templates = [];
  let radioGroup;
  let radio1;
  let radio2;
  let radio3;

  beforeEach(() => {
    radioGroup = document.createElement('div');
    radioGroup.setAttribute('data-state-changer-id', 'test1');
    sinon.spy(radioGroup, 'addEventListener');
    radio1 = document.createElement('input');
    radio1.type = 'radio';
    radio1.value = 'normal';
    radio2 = document.createElement('input');
    radio2.type = 'radio';
    radio2.value = 'error';
    radio3 = document.createElement('input');
    radio3.type = 'radio';
    radio3.value = 'disabled';

    radioGroup.appendChild(radio1);
    radioGroup.appendChild(radio2);
    radioGroup.appendChild(radio3);

    templates[0] = document.createElement('div');
    templates[0].setAttribute('data-template-id', 'test1');
    templates[1] = document.createElement('div');
    templates[1].setAttribute('data-template-id', 'test1-error-state');
    templates[2] = document.createElement('div');
    templates[2].setAttribute('data-template-id', 'test1-disabled-state');

    document.body.appendChild(radioGroup);
    templates.forEach((item) => {
      document.body.appendChild(item);
    });
  });

  afterEach(() => {
    document.body.innerHTML = '';
    radioGroup.addEventListener.restore();
  });

  it('should bind the change event', () => {
    bindUIEvents(radioGroup);
    expect(radioGroup.addEventListener.getCall(0).args[0]).eql('change');
  });

  it('should show the right template when change is triggered', () => {
    bindUIEvents(radioGroup);
    radio2.click(); // click triggers change
    expect(templates[0].classList.contains('sprk-u-Display--none')).eql(true);
    expect(templates[1].classList.contains('sprk-u-Display--none')).eql(false);
    expect(templates[2].classList.contains('sprk-u-Display--none')).eql(true);
  });
});

describe('mapTemplates ', () => {
  const templates = [];
  before(() => {
    templates[0] = document.createElement('div');
    templates[0].setAttribute('data-template-id', 'test1');
    templates[1] = document.createElement('div');
    templates[1].setAttribute('data-template-id', 'test1-error-state');
    templates[2] = document.createElement('div');
    templates[2].setAttribute('data-template-id', 'test1-disabled-state');
    templates[3] = document.createElement('div');
    templates[3].setAttribute('data-template-id', 'test2');
    templates[4] = document.createElement('div');
    templates[4].setAttribute('data-template-id', 'test2-error-state');
    templates[5] = document.createElement('div');
    templates[5].setAttribute('data-template-id', 'test2-disabled-state');
  });

  it('should only return templates that match the id given', () => {
    let containsMismatches = false;
    const mappedTemplates = mapTemplates('test1', templates);
    mappedTemplates.forEach((template) => {
      if (template.getAttribute('data-template-id').indexOf('test2') !== -1) {
        containsMismatches = true;
      }
    });
    expect(containsMismatches).eql(false);
  });
});

describe('toggleTemplate', () => {
  const templates = [];
  before(() => {
    templates[0] = document.createElement('div');
    templates[0].setAttribute('data-template-id', 'test1');
    templates[0].classList.add('sprk-u-Display--none');
    templates[1] = document.createElement('div');
    templates[1].setAttribute('data-template-id', 'test1-error-state');
    templates[1].classList.add('sprk-u-Display--none');
    templates[2] = document.createElement('div');
    templates[2].setAttribute('data-template-id', 'test1-disabled-state');
    templates[2].classList.add('sprk-u-Display--none');
  });

  it('should remove .hidden from the matching template', () => {
    toggleTemplate('test1', 'normal', templates);
    expect(templates[0].classList.contains('sprk-u-Display--none')).eql(false);
    expect(templates[1].classList.contains('sprk-u-Display--none')).eql(true);
    expect(templates[2].classList.contains('sprk-u-Display--none')).eql(true);
  });
});
