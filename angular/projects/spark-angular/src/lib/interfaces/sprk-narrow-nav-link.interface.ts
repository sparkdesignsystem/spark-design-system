import { TSprkIconTextLinkOptionalProps } from './sprk-icon-text-link.interface';

/**
 * Structure of a link in
 * the Narrow version of the Masthead.
 * Narrow Nav Links can have an
 * optional Leading Icon.
 */
export interface ISprkNarrowNavLink extends TSprkIconTextLinkOptionalProps {
  /**
   * If `true`, active styles will be applied.
   */
  active?: boolean;
  /**
   * Optional sub-navigation for the link.
   */
  subNav?: TSprkIconTextLinkOptionalProps[];
}
