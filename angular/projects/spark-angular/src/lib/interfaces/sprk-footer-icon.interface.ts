import { ISprkIcon } from './sprk-icon-interface';

export interface ISprkFooterIcon extends ISprkIcon{
  /**
   * Expects a space separated string
   * of classes to be added to the
   * icon if `icon` has a value.
   */
  iconCSS?: string;
  /**
   * Value will be visually hidden and serves
   * as text for screen readers that describes
   * the icon.
   */
  iconScreenReaderText?: string;
}
