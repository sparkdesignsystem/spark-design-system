import { Component, Input, AfterViewInit } from '@angular/core';
// import { toggleAnimations } from './sprk-toggle-animations';
// import { uniqueId } from 'lodash';
// import 'focus-visible';

@Component({
  selector: 'sprk-tooltip',
  template: `
  <span class="sprk-c-Tooltip__container">
    <button class="sprk-c-Tooltip__trigger" aria-labelledby="tooltip_1">
      <svg
        class="sprk-c-Icon sprk-c-Icon--filled"
        aria-hidden="true"
      >
        <use xlink:href="#question-filled" />
      </svg>
    </button>
    <span
      class="sprk-c-Tooltip"
      aria-hidden="true"
      id="tooltip_1"
      role="tooltip"
    >
      <ng-content></ng-content>
    </span>
  </span>
  `
})
export class SprkTooltipComponent implements AfterViewInit {

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

  /**
   * @ignore
   */
  public isOpen = false;

  /**
   * @ignore
   */
  toggleState(): void {
    // this.isOpen === false
    //   ? (this.animState = 'closed')
    //   : (this.animState = 'open');

    // this.isOpen === false
    //   ? (this.iconStateClass = '')
    //   : (this.iconStateClass = 'sprk-c-Icon--open');
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
      // 'sprk-c-Toggle__trigger sprk-u-TextCrop--none',
      // this.titleFontClass,
    ];
    return classArray.join(' ');
  }

  ngAfterViewInit() {
    this.toggleState();
  }
}
