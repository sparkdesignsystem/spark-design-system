/* global describe it */
import { expect } from 'chai';
import concat from '../src/assets/drizzle/scripts/handlebars-helpers/concat';

describe('handlebars concat helper', () => {
  it('should concat all arguments', () => {
    expect(concat('a', 'b', 'c')).eql('abc');
  });
});
