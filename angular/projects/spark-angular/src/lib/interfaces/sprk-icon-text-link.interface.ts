import { ISprkLink } from './sprk-link.interface';
import { TSprkOptionalProps } from './utilities.interface';

/**
 * Interface for the case when there is
 * a link that includes an icon and text.
 */
export interface ISprkIconTextLink extends ISprkLink {
  /**
   * The icon name supplied will
   * be used to render
   * the specified icon to the
   * left of the link text.
   */
  leadingIcon: string;
}

/**
 * This is for when there is the option to have
 * a leading icon but it is not required.
 */
export type TSprkIconTextLinkOptionalProps = TSprkOptionalProps<ISprkIconTextLink>;
