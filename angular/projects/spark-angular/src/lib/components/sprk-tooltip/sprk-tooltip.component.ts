import { Component, HostListener, Input, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'sprk-tooltip',
  template: `
  <span class="sprk-c-Tooltip__container">
    <button
      class="sprk-c-Tooltip__trigger"
      [ngClass]="{
        'sprk-c-Tooltip__trigger' : true,
        'sprk-c-Tooltip--toggled' : isOpen
      }"
      aria-labelledby="tooltip_1"
      [attr.aria-expanded]="isOpen ? 'true' : 'false'"
      (click)="toggle($event)"
      #triggerElement
    >
      <svg
        class="sprk-c-Icon sprk-c-Icon--filled"
        aria-hidden="true"
      >
        <use xlink:href="#question-filled" />
      </svg>
    </button>
    <span
      [ngClass]="{
        'sprk-c-Tooltip': true
      }"
      class="sprk-c-Tooltip"
      aria-hidden="true"
      id="tooltip_1"
      role="tooltip"
      #tooltipElement
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

  @ViewChild('triggerElement') triggerElement;
  @ViewChild('tooltipElement') tooltipElement;

  /**
   * @ignore
   */
  @HostListener('document:keydown', ['$event'])
  onKeydown($event) {
    if ($event.key === 'Escape' || $event.key === 'Esc' || $event.keyCode === 27){
      this.isOpen = false;
    }
  }

  @HostListener('document:click', ['$event'])
  onClick(event): void {
    if (
      // TODO - doesn't work. This lets me click onto other tooltips
      !event.target.classList.contains('sprk-c-Tooltip__trigger') &&
      !event.target.classList.contains('sprk-c-Tooltip')
    ) {
      this.isOpen = false;
    }
  }

  /**
   * @ignore
   */
  public isOpen = false;

  /**
   * @ignore
   */
  calculatePositionClass(trigger): string {
    const elemX = trigger.getBoundingClientRect().left;
    const elemY = trigger.getBoundingClientRect().top;

    let viewportWidth = 0;
    let viewportHeight = 0;

    if (window){
      viewportWidth = window.innerWidth ? window.innerWidth : 0;
      viewportHeight = window.innerHeight ? window.innerHeight : 0;
    }

    if (elemX > viewportWidth / 2) {
      if (elemY > viewportHeight / 2) {
        return 'sprk-c-Tooltip--top-left';
      } else {
        return 'sprk-c-Tooltip--bottom-left';
      }
    } else {
      if (elemY > viewportHeight / 2) {
        return 'sprk-c-Tooltip--top-right';
      } else {
        return 'sprk-c-Tooltip--bottom-right';
      }
    }
  };

  /**
   * @ignore
   */
  toggle(event): void {
    event.preventDefault();
    // should calc it and save it in a variable like isOpen
    // then use that variable in ngClass
    // this.addPositioningClass(this.triggerElement, this.tooltipElement);
    this.isOpen = !this.isOpen;
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
    // this.toggleState();
  }
}
