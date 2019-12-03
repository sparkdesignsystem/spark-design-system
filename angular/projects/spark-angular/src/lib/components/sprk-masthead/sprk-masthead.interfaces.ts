import { SprkDropdownChoice } from '../sprk-dropdown/sprk-dropdown.interfaces';

/**
 * Structure of a link in
 * the Narrow version of the Masthead.
 */
export interface SprkMastheadNarrowNavLink {
  /**
   * The text for the link.
   * Each Link must have a value for text.
   */
  text: string;
  /**
   * The `href` value for the link.
   * Each Link must have a value for `href`.
   */
  href: string;
  /**
   * Optional sub-navigation for the link.
   */
  subNav?: Array<{
    /**
     * The text for the sub-navigation link.
     * Each sub-navigation Link must have a value for text.
     */
    text: string;
    /**
     * The `href` for the sub-navigation link.
     * Each sub-navigation Link must have a value for `href`.
     */
    href: string;
    /**
     * The icon name supplied will
     * be used to render
     * the specified icon to the
     * left of the sub-navigation link text.
     */
    leadingIcon?: string;
  }>;
  /**
   * If `true`, denotes that the link
   * represents the current page.
   */
  active?: boolean;
  /**
   * The icon name supplied will
   * be used to render
   * the specified icon to the
   * left of the link text.
   */
  leadingIcon?: string;
}

/**
 * Used to create the "Big Navigation"
 * in the extended variant of the masthead.
 * Data is used to create `<li>` elements
 * inside of a `<ul>` that has a parent
 * `<nav>` element.
 */
export interface SprkMastheadBigNavLink {
  /**
   * The text for the link.
   */
  text: string;
  /**
   * The `href` value for the link if it does not
   * have a `subNav`. If it has a `subNav`, then
   * the link is treated a trigger that opens
   * the `subNav` and it doesnt navigate the user
   * anywhere. Therefore, this is optional as it is
   * only needed in cases where there is no `subNav`.
   */
  href?: string;
  /**
   * If this is `true` and the link has a `subNav`
   * then the link will
   * have active styles applied.
   */
  focused?: boolean;
  /**
   * Optional sub-navigation for the link.
   * Renders a dropdown under the main link.
   */
  subNav?: Array<{
    /**
     * The text for the sub-navigation link.
     */
    text: string;
    /**
     * The `href` for the sub-navigation link.
     */
    href: string;
    /**
     * If `true`, applies active styles to
     * the dropdown link.
     */
    active?: boolean;
  }>;
}

/**
 * Used to create the dropdown selector
 * rendered in the navigation on narrow viewports.
 * The data for the dropdown selector on large
 * viewports is passed into the `<sprk-dropdown>`
 * inside the `<div>` with the `little-nav-slot`
 * attribute.
 */
export interface SprkMastheadNarrowSelector {
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
  choices: SprkDropdownChoice[];
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
