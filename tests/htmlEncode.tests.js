/* global describe it */
import { expect } from 'chai';
import htmlEncode from '../src/assets/drizzle/scripts/handlebars-helpers/htmlEncode';

describe('handlebars htmlEncode helper', () => {
  it('should encode a string of html', () => {
    expect(htmlEncode('<p>Hello, World!</p>')).eql('&lt;p&gt;Hello, World!&lt;/p&gt;');
  });
});
