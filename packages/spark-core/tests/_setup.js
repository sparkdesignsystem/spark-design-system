import { JSDOM } from 'jsdom';
import sinon from 'sinon';

const { window } = new JSDOM('<!DOCTYPE html><html><body></body></html>');
global.document = window.document;
global.window = window;
window.requestAnimationFrame = sinon.stub(func => {
  func();
});
