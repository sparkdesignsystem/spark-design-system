import { ISprkLink } from './sprk-link.interface';
import { ISprkDropdownChoice } from './sprk-dropdown-choice.interface';

/**
 * Used to create the "Big Navigation"
 * in the extended variant of the Masthead.
 * The Navigation links can have an optional dropdown (sub navigation).
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
  subNav?: ISprkDropdownChoice;
}
