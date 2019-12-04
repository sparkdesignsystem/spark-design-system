import { TSprkFooterLinkOptionalProps } from './sprk-footer-link.interface';
import { ISprkFooterIcon } from './sprk-footer-icon.interface';

/**
 * A `SprkFooterSocialLink` is a `SprkFooterLink`
 * wrapping a `SprkFooterIcon` and should
 * contain data for both.
 * There is no text rendered for Social Links
 * other than the visually hidden
 * `iconScreenReaderText`
 * that is used to descibe the icon to
 * screen readers.
 * This interface extends `SprkFooterLinkOptionalProps`
 * because the `text` property for link is not required.
 */
export interface ISprkFooterSocialLink extends TSprkFooterLinkOptionalProps, ISprkFooterIcon { }
