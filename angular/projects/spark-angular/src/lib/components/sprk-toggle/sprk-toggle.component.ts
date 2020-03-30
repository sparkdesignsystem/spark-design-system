import { Component, Input, OnInit } from '@angular/core';
import { toggleAnimations } from './sprk-toggle-animations';
import { generateAriaControls } from '../../../../../../../html/utilities/generateAriaControls';

@Component({
  selector: 'sprk-toggle',
  template: `
    <div
      class="sprk-u-Overflow--hidden {{ additionalClasses }}"
      [attr.data-id]="idString"
    >
      <button
        sprkLink
        variant="icon"
        [ngClass]="getClasses()"
        (click)="toggle($event)"
        [attr.aria-expanded]="isOpen ? 'true' : 'false'"
        [analyticsString]="analyticsString"
        href="#"
        data-sprk-toggle="trigger"
      >
        <sprk-icon
          iconType="chevron-down-circle-two-color"
          additionalClasses="{{
            iconClass
          }} sprk-c-Icon--l sprk-u-mrs sprk-c-Icon--toggle {{ iconStateClass }}"
        ></sprk-icon>
        {{ title }}
      </button>

      <div
        [@toggleContent]="animState"
        data-sprk-toggle="content"
      >
        <div class="sprk-u-pts sprk-u-pbs">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `,
  animations: [toggleAnimations.toggleContent]
})
export class SprkToggleComponent implements OnInit {
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
  /**
   * The value supplied will be
   * rendered as the main Toggle link text.
   */
  @Input()
  title: string;
  /**
   * The value supplied will be assigned as a
   * CSS class on the icon used in the Toggle.
   * This is intended for overrides.
   */
  @Input()
  iconClass: string;
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
      this.titleFontClass,
      'sprk-u-TextCrop--none',
      'sprk-u-BareButton',
    ];
    return classArray.join(' ');
  }


  ngOnInit() {
    this.toggleState();

    // Get the toggle's trigger and content elements
    const toggleTrigger = document.querySelector('[data-sprk-toggle="trigger"]');
    const toggleContent = document.querySelector('[data-sprk-toggle="content"]');
    generateAriaControls(toggleTrigger, toggleContent, 'toggle');
  }
}
