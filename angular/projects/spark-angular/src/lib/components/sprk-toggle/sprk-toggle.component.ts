import {
  Component,
  Input,
  AfterContentInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { toggleAnimations } from './sprk-toggle-animations';
import { uniqueId } from 'lodash';
import 'focus-visible';

// TODO: Remove `title` in issue #1305
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
          [iconName]="toggleIconName"
          [additionalClasses]="getIconClasses()"
        ></sprk-icon>
        {{ triggerText || title }}
      </button>

      <div [@toggleContent]="animState" [id]="contentId">
        <div [ngClass]="getContentClasses()">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `,
  animations: [toggleAnimations.toggleContent],
})
export class SprkToggleComponent implements AfterContentInit {
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
  // TODO: Remove `title` in issue #1305
  /**
   * Deprecated - Use `triggerText` instead.
   * The value supplied will be
   * rendered as the main Toggle button text.
   */
  @Input()
  title: string;
  /**
   * The value supplied will be
   * rendered as the main Toggle button text.
   */
  @Input()
  triggerText: string;
  // TODO: Remove `iconClass` in issue #1305
  /**
   * Deprecated - Use `iconAdditionalClasses` instead.
   * Expects a space separated string
   * of classes to be added to the
   * icon.
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
   * Determines which icon is rendered.
   * Expects the value to match the exact name
   * of the icon found in the docs
   * (i.e. `chevron-down`, instead of `chevron down`).
   */
  @Input()
  toggleIconName = 'chevron-down-circle';
  /**
   * Expects a space separated string
   * of classes to be added to the
   * content.
   */
  @Input()
  contentAdditionalClasses: string;
  // TODO: Remove `titleFontClass` in future issue #1305.
  /**
   * Deprecated - Use `triggerTextAdditionalClasses` instead.
   * Expects a space separated string
   * of classes to be added to the
   * trigger text.
   */
  @Input()
  titleFontClass = 'sprk-b-TypeBodyThree';
  // TODO: Move the default value from titleFontClass to
  // triggerTextAdditionalClasses in future issue #1305.
  /**
   * Expects a space separated string
   * of classes to be added to the
   * trigger text.
   */
  @Input()
  triggerTextAdditionalClasses: string;
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
   * When the toggle is opened this event will be emitted.
   */
  @Output()
  openedEvent = new EventEmitter<any>();
  /**
   * When the toggle is closed this event will be emitted.
   */
  @Output()
  closedEvent = new EventEmitter<any>();
  /**
   * If `true`, the Toggle will be open when rendered.
   */
  @Input()
  isOpen = false;

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
    if (this.isOpen) {
      this.animState = 'open';
      this.iconStateClass = 'sprk-c-Icon--open';
    } else {
      this.animState = 'closed';
      this.iconStateClass = '';
    }
  }

  /**
   * @ignore
   */
  toggle(event): void {
    event.preventDefault();
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.openedEvent.emit();
    } else {
      this.closedEvent.emit();
    }
    this.toggleState();
  }

  /**
   * @ignore
   */
  // TODO: Remove `titleFontClass` in future issue #1305.
  getClasses(): string {
    const additionalClasses =
      this.triggerTextAdditionalClasses || this.titleFontClass;
    const classArray: string[] = [
      'sprk-c-Toggle__trigger sprk-b-Type--crop-none',
      additionalClasses,
    ];
    return classArray.join(' ');
  }

  /**
   * @ignore
   */
  getIconClasses(): string {
    // TODO: Remove `iconClass` in issue #1305
    const additionalClasses = this.iconAdditionalClasses || this.iconClass;
    const classArray: string[] = [
      'sprk-c-Icon--xl sprk-c-Toggle__trigger-icon sprk-c-Icon--toggle',
      this.iconStateClass,
    ];
    if (additionalClasses) {
      additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      });
    }
    return classArray.join(' ');
  }

  /**
   * @ignore
   */
  getContentClasses(): string {
    const classArray: string[] = [
      'sprk-c-Toggle__content',
    ];
    if (this.contentAdditionalClasses) {
      this.contentAdditionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      });
    }
    return classArray.join(' ');
  }

  ngAfterContentInit() {
    this.toggleState();
  }
}
