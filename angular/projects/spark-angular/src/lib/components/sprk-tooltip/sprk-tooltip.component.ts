import {
  Component,
  AfterViewInit,
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
  <span
    class="sprk-c-Tooltip__container"
    [attr.data-id]="idString"
    #containerElement
  >
    <button
      [ngClass]="{
        'sprk-c-Tooltip__trigger' : true,
        'sprk-c-Tooltip--toggled' : isToggled
      }"
      [attr.aria-expanded]="isToggled ? 'true' : 'false'"
      [attr.data-analytics]="analyticsString"
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
export class SprkTooltipComponent implements AfterViewInit {
  /**
   * Whether or not the tooltip is toggled open.
   */
  @Input()
  isToggled = false;
  /**
   * The icon to use for the trigger element.
   */
  @Input()
  triggerIconType: string = 'question-filled';
  /**
   * The value supplied will be assigned to the
   * `data-analytics` attribute on the trigger element.
   * Intended for an outside
   * library to capture data.
   */
  @Input()
  analyticsString: string;
  /**
   * Expects a space separated string
   * of classes to be added to the
   * tooltip element.
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
   * container element. This is intended to be
   * used as a selector for automated
   * tools. This value should be unique
   * per page.
   */
  @Input()
  idString: string;
  /**
   * Optional: the unique ID to use for the tooltip element.
   * If an ID is not provided, a unique ID will be created
   * automatically.
   */
  @Input()
  id = uniqueId(`sprk_tooltip_`);

  /**
   * Emitted when the tooltip is toggled open.
   */
  @Output()
  openedEvent = new EventEmitter<any>();

  /**
   * Emitted when the tooltip is toggled closed.
   */
  @Output()
  closedEvent = new EventEmitter<any>();

  /**
   * @ignore
   */
  @ViewChild('triggerElement') triggerElement;

  /**
   * @ignore
   */
  @ViewChild('tooltipElement') tooltipElement;

  /**
   * @ignore
   */
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
    this.setPositioningClass();
  }

  /**
   * @ignore
   */
  @HostListener('mouseover')
  onMouseOver() {
    this.setPositioningClass();
  }

  /**
   * @ignore
   */
  @HostListener('click', ['$event'])
  onClick(event) {
    this.toggle()
  }

  /**
   * @ignore
   */
  public positioningClass = 'sprk-c-Tooltip--bottom-right';

  /**
   * @ignore
   */
  setPositioningClass(): void {
    var trigger = this.triggerElement.nativeElement;

    const elemX = trigger.getBoundingClientRect().left;
    const elemY = trigger.getBoundingClientRect().top;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // 328 is the default max-width
    var maxWidth = 328;
    var calculatedWidth = maxWidth;

    if (elemX > viewportWidth / 2) {
      // the left edge of the button + the width of the button + the border
      calculatedWidth = elemX + 16 + 16;
      if (elemY > viewportHeight / 2) {
        this.positioningClass = 'sprk-c-Tooltip--top-left';
      } else {
        this.positioningClass = 'sprk-c-Tooltip--bottom-left';
      }
    } else {
      // the width of the viewport less the left edge of the button + the border
      calculatedWidth = viewportWidth - elemX + 16;
      if (elemY > viewportHeight / 2) {
        this.positioningClass = 'sprk-c-Tooltip--top-right';
      } else {
        this.positioningClass = 'sprk-c-Tooltip--bottom-right';
      }
    }

    if (calculatedWidth < maxWidth){
      // overwrite the width if there's not enough room to display it
      this.tooltipElement.nativeElement.setAttribute('style', 'width:' + calculatedWidth + "px");
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

  ngAfterViewInit(): void {
    this.setPositioningClass();
  }
}
