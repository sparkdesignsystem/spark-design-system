/**
 *  Simple utilities for keypresses
 */

// e.keyCode is for older browser support
const isTabPressed = e => e.key === 'Tab' || e.keyCode === 9;
const isEscPressed = e => e.key === 'Escape' || e.keyCode === 27;

export { isTabPressed, isEscPressed };
