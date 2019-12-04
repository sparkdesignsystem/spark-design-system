/**
 * Used to create the "Big Navigation"
 * in the extended variant of the masthead.
 * Data is used to create `<li>` elements
 * inside of a `<ul>` that has a parent
 * `<nav>` element.
 */
export interface ISprkBigNavLink {
  /**
   * The text for the link.
   */
  text: string;
  /**
   * The `href` value for the link if it does not
   * have a `subNav`. If it has a `subNav`, then
   * the link is treated as a trigger that opens
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
