/**
 * @param e The event object
 * @returns boolean If the event represents the Up Arrow key being pressed.
 */
export const isUpPressed = (e) => e.key === 'ArrowUp' || e.keyCode === 38;

/**
 * @param e The event object
 * @returns boolean If the event represents the Down Arrow key being pressed.
 */
export const isDownPressed = (e) => e.key === 'ArrowDown' || e.keyCode === 40;

/**
 * @param e The event object
 * @returns boolean If the event represents the Left Arrow key being pressed.
 */
export const isLeftPressed = (e) => e.key === 'ArrowLeft' || e.keyCode === 37;

/**
 * @param e The event object
 * @returns boolean If the event represents the Right Arrow key being pressed.
 */
export const isRightPressed = (e) => e.key === 'ArrowRight' || e.keyCode === 39;

/**
 * @param e The event object
 * @returns boolean If the event represents the Enter key being pressed.
 */
export const isEnterPressed = (e) => e.key === 'Enter' || e.keyCode === 13;

/**
 * @param e The event object
 * @returns boolean If the event represents the Escape key being pressed.
 */
export const isEscapePressed = (e) =>
  e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;

/**
 * @param e The event object
 * @returns boolean If the event represents the Tab key being pressed.
 */
export const isTabPressed = (e) => e.key === 'Tab' || e.keyCode === 9;

/**
 * @param e The event object
 * @returns boolean If the event represents the Space key being pressed.
 */
export const isSpacePressed = (e) =>
  e.key === ' ' || e.key === 'Spacebar' || e.keyCode === 32;
