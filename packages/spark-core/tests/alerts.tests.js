/* global document describe before it */
import { expect } from 'chai';
import { dismissAlert } from '../components/alerts';

describe('Alert tests', () => {
  let container;
  let dismissElement;

  before(() => {
    container = document.createElement('div');
    container.setAttribute('data-sprk-alert', 'container');
    dismissElement = document.createElement('button');
    dismissElement.setAttribute('data-sprk-toggle', 'dimiss');
  });

  it('should hide alert', () => {
    dismissAlert(container);
    expect(container.classList.contains('sprk-u-Display--none')).eql(true);
  });
});
