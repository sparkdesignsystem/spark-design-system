/* global describe it */
import { expect } from 'chai';
import alternateIdGen from '../src/assets/drizzle/scripts/handlebars-helpers/alternateIdGen';

describe('handlebars alternateIdGen helper', () => {
  it('should insert the incoming value as the second to last segment', () => {
    expect(alternateIdGen('a.b.c.d.e', 'hi')).eql('a.b.c.d.hi.e');
  });

  it('should insert the sub dir if one is supplied', () => {
    expect(alternateIdGen('a.b.c.d.e', 'hi', 'there')).eql('a.b.c.d.hi.there.e');
  });
});
