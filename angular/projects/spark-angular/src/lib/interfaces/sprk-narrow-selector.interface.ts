import { ISprkDropdownChoice } from './sprk-dropdown-choice.interface';
/**
 * Used to create the dropdown selector
 * rendered in the navigation on narrow viewports.
 * The data for the dropdown selector on large
 * viewports is passed into the `<sprk-dropdown>`
 * inside the `<div>` with the `little-nav-slot`
 * attribute.
 */
export interface ISprkNarrowSelector {
  trigger: {
    /**
     * Text used as the
     * clickable trigger that
     * opens the dropdown selector.
     * This is passed into the
     * `triggerText` Input on
     * the `<sprk-dropdown>`.
     */
    text: string;
  };
  /**
   * The choice object is used to
   * construct a selectable
   * choice item in the dropdown.
   */
  choices: ISprkDropdownChoice[];
  /**
   * Optional data used to construct
   * a link in the bottom of the narrow
   * selector dropdown.
   */
  footer?: {
    /**
     * The text for the link.
     */
    text: string;
    /**
     * The `href` for the link.
     */
    href: string;
    /**
     * The value supplied will be assigned to the
     * `data-analytics` attribute on the link.
     * Intended for an outside
     * library to capture data.
     */
    analyticsString?: string;
  };
}