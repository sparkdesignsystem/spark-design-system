import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sprk-masthead-nav-collapsible-button',
  template: `
    <button
      [ngClass]="getClasses()"
      type="button"
      [attr.aria-expanded]="isOpen ? true : false"
      (click)="toggleCollapsibleNav($event)"
      [attr.aria-controls]="collapsibleNavId"
      [attr.data-analytics]="analyticsString"
      [attr.data-id]="idString"
    >
      <span class="sprk-u-ScreenReaderText">{{ screenReaderText }}</span>
      <svg
        [ngClass]="{
          'sprk-c-Icon': true,
          'sprk-c-Icon--xl': true,
          'sprk-c-Menu__icon': true,
          'sprk-c-Menu__icon--open': isOpen
        }"
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path class="sprk-c-Menu__line sprk-c-Menu__line--two" d="m8 32h48" />
          <path
            class="sprk-c-Menu__line sprk-c-Menu__line--one"
            d="m8 18.68h48"
          />
          <path
            class="sprk-c-Menu__line sprk-c-Menu__line--three"
            d="m8 45.32h48"
          />
        </g>
      </svg>
    </button>
  `,
})
export class SprkMastheadNavCollapsibleButtonComponent {
  /**
   * @ignore
   */
  constructor() {}

  /**
   * The value supplied will be used
   * as the screen reader text that describes
   * the button.
   */
  @Input()
  screenReaderText = 'Toggle Navigation';

  /**
   * The value supplied will be assigned to the
   * `data-analytics` attribute on the component.
   * Intended for an outside
   * library to capture data.
   */
  @Input()
  analyticsString: string;

  /**
   * If `true`, the button
   * will be open when it is rendered.
   */
  @Input()
  isOpen = false;

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
   * The value supplied will be assigned
   * to the aria-controls attribute on the button.
   * This associates the button with the navigation.
   */
  @Input()
  collapsibleNavId: string;

  /**
   * Expects a space separated string
   * of classes to be added to the
   * component.
   */
  @Input()
  additionalClasses: string;

  /**
   * When the button is closed this event will be emitted.
   */
  @Output()
  sprkCollapsibleNavButtonClicked = new EventEmitter<any>();

  /**
   * Emits an event when the button is clicked.
   */
  toggleCollapsibleNav(event: { preventDefault: () => void }): void {
    event.preventDefault();
    this.sprkCollapsibleNavButtonClicked.emit();
  }

  /**
   * @ignore
   */
  getClasses(): string {
    const classArray: string[] = ['sprk-c-Menu'];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }
}
