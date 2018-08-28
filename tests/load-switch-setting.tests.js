/* global document describe it beforeEach localStorage */
import sinon from 'sinon';
import { expect } from 'chai';
import loadSwitchSetting from '../src/assets/drizzle/scripts/load-switch-setting';

describe('load switch setting', () => {
  const templates = [];
  let radioGroup;
  let radio1;
  let radio2;
  let radio3;

  beforeEach(() => {
    radioGroup = document.createElement('div');
    radioGroup.setAttribute('data-code-example-switch', 'test1');
    sinon.spy(radioGroup, 'addEventListener');
    radio1 = document.createElement('input');
    radio1.type = 'radio';
    radio1.value = 'none';
    radio2 = document.createElement('input');
    radio2.type = 'radio';
    radio2.value = 'angular';
    radio3 = document.createElement('input');
    radio3.type = 'radio';
    radio3.value = 'react';

    radioGroup.appendChild(radio1);
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

  it('should load the setting from localStorage and apply it', () => {
    localStorage.setItem('code-example-switch', 'angular');
    loadSwitchSetting();
    expect(radio2.checked).eql(true);
  });

  it('should do nothing if localStorage is not defined', () => {
    /* eslint-disable no-global-assign */
    localStorage = null;
    /* eslint-enable no-global-assign */
    loadSwitchSetting();
    expect(radio2.checked).eql(false);
  });
});
