export interface ISprkLink {
  /**
   * The text rendered inside the link.
   */
  text: string;
  /**
   * The `href` value for the link.
   * If omitted, the href will
   * be set to `#` by the `SprkLink`
   * component.
   */
  href?: string;
  /**
   * The value supplied will be assigned to the
   * `data-analytics` attribute on the link
   * Intended for an outside
   * library to capture data.
   */
  analyticsString?: string;
}
