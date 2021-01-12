/* global document describe it */
import isElementVisible from '../utilities/isElementVisible';

describe('isElementVisible tests', () => {
  let main;
  let list;
  let hiddenListItem;
  let elementVisible;

  beforeEach(() => {
    main = document.createElement('div');
    main.classList.add('sprk-main');

    list = document.createElement('ul');
    hiddenListItem = document.createElement('li');
    hiddenListItem.classList.add('sprk-main');
    hiddenListItem.classList.add('sprk-u-Display--none');
    list.appendChild(hiddenListItem);

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
    elementVisible = isElementVisible('li.sprk-main');

    expect(elementVisible).toBe(false);
  });

  it('should observe container param', () => {
    // first instance of .sprk-main
    const divVisible = isElementVisible('.sprk-main');

    // first instance of .sprk-main inside the list
    const listItemVisible = isElementVisible('.sprk-main', list);

    expect(divVisible).toBe(true);
    expect(listItemVisible).toBe(false);
  });

  it('should return undefined for unmatching selector', () => {
    const notAnElement = isElementVisible('.asdf');

    expect(notAnElement).toBe(undefined);
  });
});
