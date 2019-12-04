import { ISprkLink } from './sprk-link.interface';
/**
 * Used to create the "Big Navigation"
 * in the extended variant of the Masthead.
 */
export interface ISprkBigNavLink extends ISprkLink {
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
