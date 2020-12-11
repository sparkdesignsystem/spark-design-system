import sinon from 'sinon';

global.sinon = sinon;
global.document = window.document;
global.window = window;
window.requestAnimationFrame = sinon.stub((func) => {
  func();
});

// Simulate window resize event
const resizeEvent = document.createEvent('Event');
resizeEvent.initEvent('resize', true, true);

global.window.resizeTo = (width, height) => {
  global.window.innerWidth = width || global.window.innerWidth;
  global.window.innerHeight = height || global.window.innerHeight;
  global.window.dispatchEvent(resizeEvent);
};
