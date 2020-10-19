import { Component, Input, AfterViewInit } from '@angular/core';
import { toggleAnimations } from './sprk-toggle-animations';
import { uniqueId } from 'lodash';
import 'focus-visible';

// TODO: Remove `title` in issue #issueNumber
@Component({
  selector: 'sprk-toggle',
  template: `
    <div
      class="sprk-c-Toggle {{ additionalClasses }}"
      [attr.data-id]="idString"
    >
      <button
        variant="icon"
        [ngClass]="getClasses()"
        (click)="toggle($event)"
        [attr.aria-expanded]="isOpen ? 'true' : 'false'"
        [attr.data-analytics]="analyticsString"
        [attr.aria-controls]="contentId"
        type="button"
      >
        <sprk-icon
          iconType="chevron-down-circle"
          [additionalClasses]="getIconClasses()"
        ></sprk-icon>
        {{ triggerText || title }}
      </button>

      <div [@toggleContent]="animState" [id]="contentId">
        <div class="sprk-u-pts sprk-u-pbs sprk-c-Toggle__content">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `,
  animations: [toggleAnimations.toggleContent],
})
export class SprkToggleComponent implements AfterViewInit {
  /**
   * The value supplied will be assigned to the
   * `data-analytics` attribute on the component.
   * Intended for an outside
   * library to capture data.
   */
  @Input()
  analyticsString: string;
  /**
   * Expects a space separated string
   * of classes to be added to the
   * component.
   */
  @Input()
  additionalClasses: string;
  // TODO: Remove `title` in issue #issueNumber
  /**
   * Deprecated - Use `triggerText` instead.
   * The value supplied will be
   * rendered as the main Toggle link text.
   */
  @Input()
  title: string;
  /**
   * The value supplied will be
   * rendered as the main Toggle link text.
   */
  @Input()
  triggerText: string;
  // TODO: Remove `iconClass` in issue #issueNumber
  /**
   * Deprecated - Use `iconAdditionalClasses` instead.
   * The value supplied will be assigned as a
   * CSS class on the icon used in the Toggle.
   * This is intended for overrides.
   */
  @Input()
  iconClass: string;
  /**
   * Expects a space separated string
   * of classes to be added to the
   * icon.
   */
  @Input()
  iconAdditionalClasses: string;
  /**
   * The value supplied will be assigned as a CSS class
   * on the clickable title text used in the Toggle.
   * This is intended for overrides.
   */
  @Input()
  titleFontClass = 'sprk-b-TypeBodyThree';
  /**
   * The value supplied will be assigned
   * to the `data-id` attribute on the
   * component. This is intended to be
   * used as a selector for automated
   * tools. This value should be unique
   * per page.
   */
  @Input()
  idString: string;
  /**
   * A string that is used to set the `id` on the content
   * and the `aria-controls` for the toggle trigger button.
   */
  @Input()
  contentId = uniqueId(`sprk_toggle_content_`);

  /**
   * @ignore
   */
  public isOpen = false;
  /**
   * @ignore
   */
  public iconStateClass = '';
  /**
   * @ignore
   */
  public animState = 'closed';

  /**
   * @ignore
   */
  toggleState(): void {
    this.isOpen === false
      ? (this.animState = 'closed')
      : (this.animState = 'open');

    this.isOpen === false
      ? (this.iconStateClass = '')
      : (this.iconStateClass = 'sprk-c-Icon--open');
  }

  /**
   * @ignore
   */
  toggle(event): void {
    event.preventDefault();
    this.isOpen = !this.isOpen;
    this.toggleState();
  }

  /**
   * @ignore
   */
  getClasses(): string {
    const classArray: string[] = [
      'sprk-c-Toggle__trigger sprk-u-TextCrop--none',
      this.titleFontClass,
    ];
    return classArray.join(' ');
  }

  /**
   * @ignore
   */
  getIconClasses(): string {
    // TODO: Remove `iconClass` in issue #issueNumber
    const additionalClasses = this.iconAdditionalClasses || this.iconClass;
    const classArray: string[] = [
      'sprk-c-Icon--xl sprk-u-mrs sprk-c-Icon--toggle',
      this.iconStateClass,
    ];
    if (additionalClasses) {
      additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      });
    }
    return classArray.join(' ');
  }

  ngAfterViewInit() {
    this.toggleState();
  }
}
