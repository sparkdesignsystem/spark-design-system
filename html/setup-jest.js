import sinon from 'sinon';

const path = require('path');
const fs = require('fs');

const css = fs.readFileSync(path.resolve('../styles/web/css/spark.min.css'));
const head = global.document.getElementsByTagName('head')[0];
const styleTag = global.document.createElement('style');
styleTag.type = 'text/css';
styleTag.innerHTML = css;
head.appendChild(styleTag);

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
