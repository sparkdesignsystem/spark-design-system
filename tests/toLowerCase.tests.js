/* global describe it */
import { expect } from 'chai';
import toLowerCase from '../src/assets/drizzle/scripts/handlebars-helpers/toLowerCase';

describe('handlebars toLowerCase helper', () => {
  it('should return the lower case version of the arg', () => {
    expect(toLowerCase('Spark')).eql('spark');
  });
});
