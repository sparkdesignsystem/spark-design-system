/* eslint-disable */
// Add polyfil for ie11 classlist usage on svg elements
if (!Object.getOwnPropertyDescriptor(Element.prototype, 'classList')) {
  if (HTMLElement && Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'classList')) {
    Object.defineProperty(
      Element.prototype,
      'classList',
      Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'classList'),
    );
  }
}
/* eslint-enable */
