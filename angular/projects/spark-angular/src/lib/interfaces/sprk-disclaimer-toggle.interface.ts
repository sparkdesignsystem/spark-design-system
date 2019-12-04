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
   * TODO: Deprecate this.
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