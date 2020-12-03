/**
 *  Simple utilities for keypresses
 */

// e.keyCode is for older browser support
const isTabPressed = (e) => e.key === 'Tab' || e.keyCode === 9;
const isEscPressed = (e) =>
  e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;
const isSpacePressed = (e) =>
  e.key === ' ' || e.key === 'Spacebar' || e.keyCode === 32;
const isEnterPressed = (e) => e.key === 'Enter' || e.keyCode === 13;
const isUpPressed = (e) => e.key === 'ArrowUp' || e.keyCode === 38;
const isDownPressed = (e) => e.key === 'ArrowDown' || e.keyCode === 40;
const isLeftPressed = (e) => e.key === 'ArrowLeft' || e.keyCode === 37;
const isRightPressed = (e) => e.key === 'ArrowRight' || e.keyCode === 39;
const isUpPressed = (e) => e.key === 'ArrowRight' || e.keyCode === 38;

export {
  isTabPressed,
  isEscPressed,
  isSpacePressed,
  isEnterPressed,
  isUpPressed,
  isDownPressed,
  isLeftPressed,
  isRightPressed,
};
