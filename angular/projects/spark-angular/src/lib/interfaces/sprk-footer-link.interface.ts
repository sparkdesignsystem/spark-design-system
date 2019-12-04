import { ISprkLink } from './sprk-link.interface';
import { TSprkOptionalProps } from './utilities.interface';

export type TSprkFooterLinkOptionalProps = TSprkOptionalProps<ISprkFooterLink>;

export interface ISprkFooterLink extends ISprkLink {
  /**
   * TODO: Deprecate this.
   * The Footer API supports using this
   * or `analyticsString` but
   * using `analyticsString` is
   * preferred.
   */
  analytics?: string;
}
