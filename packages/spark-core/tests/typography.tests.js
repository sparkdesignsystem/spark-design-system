/* global describe beforeEach it */
import { expect } from 'chai';
import sinon from 'sinon';

const proxyquire = require('proxyquire');

describe('Type loader tests', () => {
  let ffoStub;
  let typeLoader;

  beforeEach(() => {
    ffoStub = sinon.spy();
    typeLoader = proxyquire('../base/typography.js',
      { fontfaceobserver: ffoStub });
  });

  it('should not call FontFaceObserver if the config object does not contain body or heading font names', () => {
    typeLoader.default({});
    expect(ffoStub.called).eql(false);
    typeLoader.default();
    expect(ffoStub.called).eql(false);
  });

  it('should call FontFaceObserver if the config object contains a body font name', () => {
    typeLoader.default({ bodyFontName: 'HelloSans' });
    expect(ffoStub.calledOnce).eql(true);
  });

  it('should call FontFaceObserver if the config object contains a heading font name', () => {
    typeLoader.default({ headingFontName: 'HelloSans' });
    expect(ffoStub.calledOnce).eql(true);
  });

  it('should call FontFaceObserver twice if the config object contains a body and a heading font name', () => {
    typeLoader.default({ bodyFontName: 'HelloSansBody', headingFontName: 'HelloSansHeading' });
    expect(ffoStub.calledTwice).eql(true);
  });
});
