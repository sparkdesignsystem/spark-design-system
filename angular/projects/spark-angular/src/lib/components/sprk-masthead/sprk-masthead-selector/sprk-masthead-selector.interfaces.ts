/**
 * This choice object is used to
 * construct a selectable
 * choice item in the masthead selector.
 */
export interface ISprkMastheadSelectorChoice {
  /**
   * The text rendered inside the link.
   * If `content` is supplied, then the
   * value for `title` is used instead
   * of this.
   */
  text?: string;
  /**
   * The `href` value for the link.
   * If omitted, the href will
   * be set to `#` by the `SprkLink`
   * component.
   */
  href?: string;
  /**
   * The value is assigned to the
   * `data-analytics` attribute on the link.
   * Intended for an outside
   * library to capture data.
   */
  analyticsString?: string;
  /**
   * If `true`, the dropdown choice item
   * will have active styles applied.
   * The Input of `isOpen` also needs
   * to be set to `true` for the dropdown
   * box to be open and show the choice
   * item with active styles.
   */
  active?: boolean;
  /**
   * The value that will emit from the selector component
   * on click.
   */
  value?: string;
  /**
   * If `isDefault` is set to `true` and `variant` is set to `informational`
   * then `triggerText` will be automatically changed to this choice `value`
   */
  isDefault?: boolean;
  /**
   * The dropdown choice can be a standard
   * link or it can be a link with optional
   * extra content. The `content` object
   * expects the extra content to render
   * for the choice.
   */
  content?: {
    /**
     * The text for the choice.
     * The `title` is not optional if
     * the `content` object is supplied
     * because it is needed
     * for the user to know what the choice item is.
     */
    title: string;
    /**
     * Value is rendered in a paragraph tag
     * underneath the `title` of the choice.
     * Use this to give information about the choice item.
     * If the `content` object is supplied then `infoLine1`
     * is required. If there is no extra information about
     * the choice, then do not use the `content` object.
     */
    infoLine1: string;
    /**
     * Value is rendered in a paragraph tag
     * underneath the `infoLine1` paragraph.
     * Use to give extra information about the choice item.
     */
    infoLine2?: string;
  };
}
