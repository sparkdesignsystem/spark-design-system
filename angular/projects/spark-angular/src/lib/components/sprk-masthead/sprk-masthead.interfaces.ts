import { ISprkDropdownChoice } from '../sprk-dropdown/sprk-dropdown.interfaces';

/**
 * Used to create the "Big Navigation"
 * in the extended variant of the Masthead.
 * The Navigation links can have an optional dropdown (sub navigation).
 */
export interface ISprkBigNavLink {
  /**
   * The text rendered inside the link.
   */
  text: string;
  /**
   * The `href` value for the link..
   */
  href?: string;
  /**
   * The `routerLink` value for the link.
   */
  routerLink?: string;
  /**
   * The value supplied will be assigned to the
   * `data-analytics` attribute on the link
   * Intended for an outside
   * library to capture data.
   */
  analyticsString?: string;
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
  subNav?: ISprkDropdownChoice;
}

/**
 * Structure of a link in
 * the Narrow version of the Masthead.
 * Narrow Nav Links can have an
 * optional Leading Icon.
 */
export interface ISprkNarrowNavLink {
  /**
   * The text rendered inside the link.
   */
  text: string;
  /**
   * The `href` value for the link.
   * If omitted, the href will
   * be set to `#` by the `SprkLink`
   * component.
   */
  href?: string;
  /**
   * The `routerLink` value for the link.
   */
  routerLink?: string;
  /**
   * The value supplied will be assigned to the
   * `data-analytics` attribute on the link
   * Intended for an outside
   * library to capture data.
   */
  analyticsString?: string;
  /**
   * The icon name supplied will
   * be used to render
   * the specified icon to the
   * left of the link text.
   */
  leadingIcon?: string;
  /**
   * If `true`, active styles will be applied.
   */
  active?: boolean;
  /**
   * Optional sub-navigation for the link.
   */
  subNav?: Array<{
    /**
     * The text rendered inside the link.
     */
    text: string;
    /**
     * The `href` value for the link.
     * If omitted, the href will
     * be set to `#` by the `SprkLink`
     * component.
     */
    href?: string;
    /**
     * The `routerLink` value for the link.
     */
    routerLink?: string;
    /**
     * The value supplied will be assigned to the
     * `data-analytics` attribute on the link
     * Intended for an outside
     * library to capture data.
     */
    analyticsString?: string;
    /**
     * The icon name supplied will
     * be used to render
     * the specified icon to the
     * left of the link text.
     */
    leadingIcon: string;
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
    href?: string;
    /**
     * The value supplied will be assigned to the
     * `data-analytics` attribute on the link.
     * Intended for an outside
     * library to capture data.
     */
    analyticsString?: string;
    /**
     * The `href` for the link.
     */
    routerLink?: string;
  };
}
