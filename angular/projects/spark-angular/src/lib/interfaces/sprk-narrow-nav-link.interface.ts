import { ISprkLink } from './sprk-link.interface';
/**
 * Structure of a link in
 * the Narrow version of the Masthead.
 */
export interface ISprkNarrowNavLink extends ISprkLink {
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
}
