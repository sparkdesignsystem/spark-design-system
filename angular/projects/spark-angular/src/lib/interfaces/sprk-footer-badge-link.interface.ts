import { TSprkFooterLinkOptionalProps } from './sprk-footer-link.interface';
import { ISprkFooterIcon } from './sprk-footer-icon.interface';

/**
 * Badge links are rendered in
 * the bottom of the Footer.
 * They are a link that wraps an icon.
 * There is no text rendered for Badge links
 * other than the visually hidden
 * `iconScreenReaderText`
 * that is used to descibe the icon to
 * screen readers.
 */
export interface ISprkFooterBadgeLink extends TSprkFooterLinkOptionalProps, ISprkFooterIcon { }

