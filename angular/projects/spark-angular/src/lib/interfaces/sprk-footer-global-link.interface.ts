import { ISprkFooterIcon } from './sprk-footer-icon.interface';
import { ISprkFooterLink } from './sprk-footer-link.interface';

/**
 * Global links are a set
 * of a clickable image/icon and
 * a short paragraph of text.
 * Meant to link to places
 * outside of the site's footer
 * that they are in, hence "Global".
 * The `text` property is rendered inside
 * a paragraph tag underneath the image/icon.
 */
export interface ISprkFooterGlobalLink extends ISprkFooterLink, ISprkFooterIcon {}
