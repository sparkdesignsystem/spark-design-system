import { ElementRef } from '@angular/core';
/**
 * @param elRef The reference to the element to check visibility.
 * @returns boolean If the element is visible.
 * Takes in an ElementRef and checks the computed
 * styles for display and visibility and returns
 * whether the element is shown on the page.
 */
export const isElementVisible = (elRef: ElementRef): boolean => {
  if (!elRef) {
    return;
  }
  if (typeof window !== 'undefined') {
    const elementDisplayValue = window.getComputedStyle(elRef.nativeElement)
      .display;
    const elementVisibilityValue = window.getComputedStyle(elRef.nativeElement)
      .visibility;
    const elementIsVisible =
      elementDisplayValue === 'none' || elementVisibilityValue === 'hidden'
        ? false
        : true;
    return elementIsVisible;
  }
};
