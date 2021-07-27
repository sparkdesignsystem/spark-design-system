/* global document describe beforeEach afterEach it window sinon */
import { dismissAlert, alerts, bindUIEvents } from '../components/alerts';

describe('Alert tests', () => {
  let container;
  let containerNoDismiss;
  let dismissElement;
  let event;

  beforeEach(() => {
    container = document.createElement('div');
    containerNoDismiss = document.createElement('div');
    containerNoDismiss.setAttribute('data-sprk-alert', 'container');
    container.setAttribute('data-sprk-alert', 'container');
    container.classList.add('sprk-c-Alert');
    dismissElement = document.createElement('button');
    dismissElement.setAttribute('data-sprk-alert', 'dismiss');
    container.append(dismissElement);
    sinon.spy(document, 'querySelectorAll');
    sinon.spy(dismissElement, 'addEventListener');
  });

  afterEach(() => {
    document.querySelectorAll.restore(); // Unwraps the spy
    dismissElement.addEventListener.restore(); // Unwraps the spy
  });

  it('should hide alert', () => {
    dismissAlert(container);
    expect(container.classList.toString()).toBe('sprk-c-Alert sprk-c-Alert--is-hidden');
  });

  it('should call getElements once with the correct selector', () => {
    alerts();
    expect(document.querySelectorAll.getCall(0).args[0]).toBe(
      '[data-sprk-alert="container"]',
    );
  });

  it('should bind the click event if a dismiss button is present', () => {
    bindUIEvents(container);
    expect(dismissElement.addEventListener.getCall(0).args[0]).toBe('click');
  });

  it('should hide alert when clicked', () => {
    bindUIEvents(container);
    event = new window.Event('click');
    dismissElement.dispatchEvent(event);
    expect(container.classList.toString()).toBe('sprk-c-Alert sprk-c-Alert--is-hidden');
  });

  it('should not hide alert on click if no dismiss button found', () => {
    bindUIEvents(containerNoDismiss);
    event = new window.Event('click');
    dismissElement.dispatchEvent(event);
    expect(container.classList.contains('sprk-c-Alert--is-hidden')).toBe(false);
  });
});
