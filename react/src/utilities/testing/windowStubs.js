import sinon from 'sinon';

const matchMediaStub = sinon.stub();

matchMediaStub.returns({
  matches: false,
  addListener() {},
  removeListener() {},
});

window.matchMedia = window.matchMedia || matchMediaStub;
