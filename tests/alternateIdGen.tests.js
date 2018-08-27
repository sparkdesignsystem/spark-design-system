/* global describe it */
import { expect } from 'chai';
import alternateIdGen from '../src/assets/drizzle/scripts/handlebars-helpers/alternateIdGen';

describe('handlebars alternateIdGen helper', () => {
  it('should insert the incoming value as the second to last segment', () => {
    expect(alternateIdGen('a.b.c.d.e', 'hi')).eql('a.b.c.d.hi.e');
  });
});
