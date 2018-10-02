/* global describe it */
import { expect } from 'chai';
import patternIdGen from '../src/assets/drizzle/scripts/handlebars-helpers/patternIdGen';

describe('handlebars patternIdGen helper', () => {
  it('should replace the first token with patterns', () => {
    expect(patternIdGen('a.b.c.d.e')).eql('patterns.b.c.d.e');
  });
});
