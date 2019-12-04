import { ISprkFooterLink } from './sprk-footer-link.interface';
/**
 * Data is used to render a column of links.
 * The column has a heading.
 */
export interface ISprkFooterLocalLinkColumn {
  /**
   * The text for the heading of the
   * column. The heading is technically optional
   * but should be included to give the user
   * information about what the links are for.
   */
  heading?: string;
  /**
   * The data to build the list of
   * local links for the column.
   * While passing in this array of links
   * is technicially optional and the column
   * will still be rendered, it's not recommended
   * to have just an empty column.
   */
  links?: ISprkFooterLink[];
}