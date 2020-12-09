/* global document describe it */
import isElementVisible from '../utilities/isElementVisible';

describe('isElementVisible tests', () => {
  let main;
  let list;
  let listItem;
  let elementVisible;

  beforeEach(() => {
    main = document.createElement('div');
    main.classList.add('sprk-main');

    list = document.createElement('ul');
    listItem = document.createElement('li');
    listItem.classList.add('sprk-main');
    list.appendChild(listItem);

    document.body.appendChild(main);
    document.body.appendChild(list);
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('should return false if the style is visibility:hidden', () => {
    main.setAttribute('style', 'visibility:hidden');
    elementVisible = isElementVisible('.sprk-main');
    expect(elementVisible).toBe(false);
  });

  it('should return false if the style is display: none', () => {
    main.setAttribute('style', 'display: none');
    elementVisible = isElementVisible('.sprk-main');
    expect(elementVisible).toBe(false);
  });

  it('should return false if class sprk-u-Display--none', () => {
    main.classList.add('sprk-u-Display--none');
    elementVisible = isElementVisible('.sprk-main');

    // race condition causing CSS classes to not be observed immediately
    setTimeout(() => {
      expect(elementVisible).toBe(false);
    }, 3000);
  });

  it('should observe container param', () => {
    listItem.classList.add('sprk-u-Display--none');
    // first instance of .sprk-main
    const divVisible = isElementVisible('.sprk-main');

    // first instance of .sprk-main inside the list
    const listItemVisible = isElementVisible('.sprk-main', list);

    // race condition causing CSS classes to not be observed immediately
    setTimeout(() => {
      expect(divVisible).toBe(true);
      expect(listItemVisible).toBe(false);
    }, 3000);
  });
});
