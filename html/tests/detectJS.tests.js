/* global document describe it */
import detectJS from '../utilities/detectJS';

describe('wide nav tests', () => {
  it('should add js to the html element', () => {
    detectJS();
    expect(
      document
        .getElementsByTagName('html')[0]
        .classList.contains('sprk-u-JavaScript'),
    ).toBe(true);
  });
});
