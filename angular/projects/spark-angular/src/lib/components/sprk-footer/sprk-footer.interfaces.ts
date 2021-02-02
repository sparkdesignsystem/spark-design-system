/**
 * Basic object that contains
 * a key of `text`. Used to
 * build up paragraphs of
 * disclaimer text.
 * TODO: Refactor Footer to use something else.
 */
export interface ISprkDisclaimerText {
  text: string;
}

/**
 * Data is used to render a toggle
 * that is used for disclaimer information.
 * Toggle includes a clickable title and
 * a paragraph of text.
 */
export interface ISprkDisclaimerToggle {
  /**
   * The clickable title for the toggle.
   */
  title: string;
  /**
   * The value supplied will be assigned to the
   * `data-analytics` attribute on the link
   * Intended for an outside
   * library to capture data.
   */
  analyticsString?: string;
  /**
   * Deprecated.
   * The API supports using this
   * or `analyticsString` but
   * using `analyticsString` is
   * preferred.
   */
  analytics?: string;
  /**
   * The value supplied will be rendered as the
   * toggle body content insidea a paragraph tage
   * that appears after the title is clicked.
   */
  body: string;
}

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
export interface ISprkFooterSocialLink {
  /**
   * Name of the icon.
   */
  icon: string;
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
  /**
   * The text rendered inside the link.
   */
  text?: string;
  /**
   * The `href` value for the link.
   */
  href?: string;
  /**
   * The `routerLink` value for the link.
   */
  routerLink?: string;
  /**
   * The value supplied will be assigned to the
   * `data-analytics` attribute on the link
   * Intended for an outside
   * library to capture data.
   */
  analyticsString?: string;
  /**
   * Deprecated.
   * The Footer API supports using this
   * or `analyticsString` but
   * using `analyticsString` is
   * preferred.
   */
  analytics?: string;
}

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
  links?: Array<{
    /**
     * The text rendered inside the link.
     */
    text: string;
    /**
     * The `href` value for the link.
     */
    href?: string;
    /**
     * The `routerLink` value for the link.
     */
    routerLink?: string;
    /**
     * The value supplied will be assigned to the
     * `data-analytics` attribute on the link
     * Intended for an outside
     * library to capture data.
     */
    analyticsString?: string;
    /**
     * Deprecated.
     * The Footer API supports using this
     * or `analyticsString` but
     * using `analyticsString` is
     * preferred.
     */
    analytics?: string;
  }>;
}

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
export interface ISprkFooterGlobalLink {
  /**
   * Value for the `src` attribute of the image.
   */
  imgSrc: string;
  /**
   * Value for the `alt` attribute of the image.
   */
  imgAlt: string;
  /**
   * Expects a space separated string
   * of classes to be added to the
   * image if `imgSrc` has a value.
   */
  imgCSS?: string;
  /**
   * Name of the icon.
   */
  icon: string;
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
  /**
   * The text rendered inside the link.
   */
  text: string;
  /**
   * The `href` value for the link.
   */
  href?: string;
  /**
   * The `routerLink` value for the link.
   */
  routerLink?: string;
  /**
   * The value supplied will be assigned to the
   * `data-analytics` attribute on the link
   * Intended for an outside
   * library to capture data.
   */
  analyticsString?: string;
  /**
   * Deprecated.
   * The Footer API supports using this
   * or `analyticsString` but
   * using `analyticsString` is
   * preferred.
   */
  analytics?: string;
}

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
export interface ISprkFooterBadgeLink {
  /**
   * Name of the icon.
   */
  icon: string;
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
  /**
   * The text rendered inside the link.
   */
  text?: string;
  /**
   * The `href` value for the link.
   */
  href?: string;
  /**
   * The `routerLink` value for the link.
   */
  routerLink?: string;
  /**
   * The value supplied will be assigned to the
   * `data-analytics` attribute on the link
   * Intended for an outside
   * library to capture data.
   */
  analyticsString?: string;
  /**
   * Deprecated.
   * The Footer API supports using this
   * or `analyticsString` but
   * using `analyticsString` is
   * preferred.
   */
  analytics?: string;
}

/**
 * An image that is wrapped with a link.
 */
export interface ISprkFooterAward {
  /**
   * The text rendered inside the link.
   */
  text?: string;
  /**
   * The `href` value for the link.
   */
  href?: string;
  /**
   * The `routerLink` value for the link.
   */
  routerLink?: string;
  /**
   * The value supplied will be assigned to the
   * `data-analytics` attribute on the link
   * Intended for an outside
   * library to capture data.
   */
  analyticsString?: string;
  /**
   * Deprecated.
   * The Footer API supports using this
   * or `analyticsString` but
   * using `analyticsString` is
   * preferred.
   */
  analytics?: string;
  /**
   * Value for the `src` attribute of the image.
   */
  imgSrc: string;
  /**
   * Value for the `alt` attribute of the image.
   */
  imgAlt: string;
  /**
   * Expects a space separated string
   * of classes to be added to the
   * image if `imgSrc` has a value.
   */
  imgCSS?: string;
}
