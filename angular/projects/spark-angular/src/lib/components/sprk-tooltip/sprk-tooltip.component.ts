import {
  Component,
  HostListener,
  Input,
  Output,
  ViewChild,
  EventEmitter
} from '@angular/core';
import { uniqueId } from 'lodash';

@Component({
  selector: 'sprk-tooltip',
  template: `
  <span class="sprk-c-Tooltip__container" #containerElement>
    <button
      [ngClass]="{
        'sprk-c-Tooltip__trigger' : true,
        'sprk-c-Tooltip--toggled' : isToggled
      }"
      [attr.aria-expanded]="isToggled ? 'true' : 'false'"
      [attr.data-analytics]="analyticsString"
      [attr.data-id]="idString"
      [attr.aria-labelledby]="id"
      #triggerElement
    >
      <sprk-icon
        [iconType]="triggerIconType"
        [additionalClasses]="iconAdditionalClasses"
        aria-hidden="true"
      ></sprk-icon>
    </button>
    <span
    [ngClass]="getTooltipClasses()"
    [attr.id]="id"
    aria-hidden="true"
    role="tooltip"
    #tooltipElement
    >
    <ng-content></ng-content>
    </span>
    </span>
    `
})
export class SprkTooltipComponent {

  /**
   * Whether or not the tooltip is toggled open.
   */
  @Input()
  isToggled = false;
  /**
   * The name of the icon to use
   */
  @Input()
  triggerIconType: string = 'question-filled';
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
   * component container.
   */
  @Input()
  additionalClasses: string;
  /**
   * Expects a space separated string
   * of classes to be added to the
   * svg icon.
   */
  @Input()
  iconAdditionalClasses: string;
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
   * Optional: the unique ID to use for the tooltip element
   */
  @Input()
  id = uniqueId(`sprk_tooltip_`);

  /**
   * Emitted when the tooltip is toggled open
   */
  @Output()
  openedEvent = new EventEmitter<any>();

  /**
   * Emitted when the tooltip is toggled closed
   */
  @Output()
  closedEvent = new EventEmitter<any>();

  @ViewChild('triggerElement') triggerElement;
  @ViewChild('tooltipElement') tooltipElement;
  @ViewChild('containerElement') containerElement;

  /**
   * @ignore
   */
  @HostListener('document:keydown', ['$event'])
  onKeydown($event) {
    if (this.isToggled) {
      if ($event.key === 'Escape' || $event.key === 'Esc' || $event.keyCode === 27) {
        this.isToggled = false;
        this.closedEvent.emit();
      }
    }
  }

  /**
   * @ignore
   */
  @HostListener('document:click', ['$event'])
  onDocumentClick(event): void {
    if (this.containerElement && !this.containerElement.nativeElement.contains(event.target)) {
      if (this.isToggled) {
        this.isToggled = false;
        this.closedEvent.emit();
      }
    }
  }

  /**
   * @ignore
   */
  @HostListener('focusin')
  onFocusIn() {
    this.positioningClass = this.calculatePositioningClass();
  }

  /**
   * @ignore
   */
  @HostListener('mouseover')
  onMouseOver() {
    this.positioningClass = this.calculatePositioningClass();
  }

  /**
   * @ignore
   */
  @HostListener('click', ['$event'])
  onClick(event) {
    if (
      this.triggerElement &&
      this.triggerElement.nativeElement.contains(event.target)
    ) {
      this.toggle()
    }
  }

  /**
   * @ignore
   */
  public positioningClass = 'sprk-c-Tooltip--bottom-right';

  /**
   * @ignore
   */
  calculatePositioningClass(): string {
    var trigger = this.triggerElement.nativeElement;

    const elemX = trigger.getBoundingClientRect().left;
    const elemY = trigger.getBoundingClientRect().top;

    let viewportWidth = 0;
    let viewportHeight = 0;

    if (window) {
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
  toggle(): void {
    this.isToggled = !this.isToggled;

    if (this.isToggled)
      this.openedEvent.emit();
    else
      this.closedEvent.emit();
  }

  /**
   * @ignore
   */
  getTooltipClasses(): string {
    const classArray: string[] = [
      'sprk-c-Tooltip',
      this.positioningClass,
    ];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }
}
