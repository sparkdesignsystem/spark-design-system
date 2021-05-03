import {
  Component,
  AfterViewInit,
  HostListener,
  Input,
  Output,
  ViewChild,
  EventEmitter,
  Renderer2,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { uniqueId } from 'lodash';

@Component({
  selector: 'sprk-tooltip',
  template: `
    <span
      [ngClass]="{
        'sprk-c-Tooltip__container': true,
        'sprk-c-Tooltip__container--top': verticalAlignment === 'top',
        'sprk-c-Tooltip__container--middle': verticalAlignment === 'middle',
        'sprk-c-Tooltip__container--bottom': verticalAlignment === 'bottom',
        'sprk-c-Tooltip__container--baseline': verticalAlignment === 'baseline'
      }"
      [attr.data-id]="idString"
      #containerElement
    >
      <button
        type="button"
        [ngClass]="{
          'sprk-c-Tooltip__trigger': true,
          'sprk-c-Tooltip--toggled': isToggled
        }"
        [attr.aria-expanded]="isToggled ? 'true' : 'false'"
        [attr.data-analytics]="analyticsString"
        [attr.aria-labelledby]="id"
        type="button"
        #triggerElement
      >
        <sprk-icon
          [iconType]="iconNameToUse"
          [additionalClasses]="iconAdditionalClasses"
          ariaHidden="true"
        ></sprk-icon>
      </button>
      <span
        [ngClass]="getTooltipClasses()"
        [attr.id]="id"
        ariaHidden="true"
        role="tooltip"
        #tooltipElement
      >
        <ng-content></ng-content>
      </span>
    </span>
  `,
})
export class SprkTooltipComponent implements AfterViewInit, OnChanges {
  constructor(private renderer: Renderer2) {}
  /**
   * Whether or not the tooltip is toggled open.
   */
  @Input()
  isToggled = false;
  /**
   * Deprecated - use `triggerIconName` instead. The icon to use for the
   * trigger element.
   */
  @Input()
  triggerIconType = 'question-filled';
  /**
   * The vertical alignment of the tooltip.
   */
  @Input()
  verticalAlignment: 'baseline' | 'top' | 'middle' | 'bottom';
  /**
   * The icon to use for the trigger element.
   */
  @Input()
  triggerIconName = 'question-filled';
  /**
   * The value supplied will be assigned to the `data-analytics` attribute on
   * the trigger element. Intended for an outside library to capture data.
   */
  @Input()
  analyticsString: string;
  /**
   * Expects a space separated string of classes to be added to the tooltip
   * element.
   */
  @Input()
  additionalClasses: string;
  /**
   * Expects a space separated string of classes to be added to the svg icon.
   */
  @Input()
  iconAdditionalClasses: string;
  /**
   * The value supplied will be assigned to the `data-id` attribute on the
   * container element. This is intended to be used as a selector for
   * automated tools. This value should be unique per page.
   */
  @Input()
  idString: string;
  /**
   * Optional: the unique ID to use for the tooltip element. If an ID is not
   * provided, a unique ID will be created automatically.
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
  iconNameToUse: string = 'question-filled';

  /**
   * @ignore
   */
  @HostListener('document:keydown', ['$event'])
  onKeydown($event) {
    if (this.isToggled) {
      if (
        $event.key === 'Escape' ||
        $event.key === 'Esc' ||
        $event.keyCode === 27
      ) {
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
    if (
      this.containerElement &&
      !this.containerElement.nativeElement.contains(event.target) &&
      this.isToggled
    ) {
      this.isToggled = false;
      this.closedEvent.emit();
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
    this.toggle();
  }

  /**
   * @ignore
   */
  setPositioningClass(): void {
    if (typeof window !== 'undefined') {
      const trigger = this.triggerElement.nativeElement;
      let positioningClass = 'sprk-c-Tooltip--bottom-right';

      const elemX = trigger.getBoundingClientRect().left;
      const elemY = trigger.getBoundingClientRect().top;

      const viewportWidth = document.documentElement.clientWidth;
      const viewportHeight = document.documentElement.clientHeight;

      const maxWidth = 328;
      const triggerWidth = 16;
      const tooltipSpacing = 16;
      const tooltipBorderWidth = 16;
      let calculatedWidth = maxWidth;

      if (elemX > viewportWidth / 2) {
        calculatedWidth =
          elemX + triggerWidth + tooltipBorderWidth - tooltipSpacing;
        if (elemY > viewportHeight / 2) {
          positioningClass = 'sprk-c-Tooltip--top-left';
        } else {
          positioningClass = 'sprk-c-Tooltip--bottom-left';
        }
      } else {
        calculatedWidth =
          viewportWidth - elemX + tooltipBorderWidth - tooltipSpacing;
        if (elemY > viewportHeight / 2) {
          positioningClass = 'sprk-c-Tooltip--top-right';
        } else {
          positioningClass = 'sprk-c-Tooltip--bottom-right';
        }
      }

      if (calculatedWidth < maxWidth) {
        // overwrite the width if there's not enough room to display it
        this.renderer.setAttribute(
          this.tooltipElement.nativeElement,
          'style',
          'width:' + calculatedWidth + 'px',
        );
      }

      this.renderer.removeClass(
        this.tooltipElement.nativeElement,
        'sprk-c-Tooltip--top-left',
      );
      this.renderer.removeClass(
        this.tooltipElement.nativeElement,
        'sprk-c-Tooltip--top-right',
      );
      this.renderer.removeClass(
        this.tooltipElement.nativeElement,
        'sprk-c-Tooltip--bottom-right',
      );
      this.renderer.removeClass(
        this.tooltipElement.nativeElement,
        'sprk-c-Tooltip--bottom-left',
      );
      this.renderer.addClass(
        this.tooltipElement.nativeElement,
        positioningClass,
      );
    }
  }

  /**
   * @ignore
   */
  toggle(): void {
    this.isToggled = !this.isToggled;

    if (this.isToggled) {
      this.openedEvent.emit();
    } else {
      this.closedEvent.emit();
    }
  }

  /**
   * @ignore
   */
  getTooltipClasses(): string {
    const classArray: string[] = [
      'sprk-c-Tooltip',
      'sprk-c-Tooltip--bottom-right',
    ];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }

  ngAfterViewInit(): void {
    this.setPositioningClass();
  }

  ngOnChanges(changes: SimpleChanges) {
    // triggerIconName should always be preferred over triggerIconType
    // TODO - remove triggerIconType as part of Issue 1166
    if (changes['triggerIconName'] && changes['triggerIconType']) {
      const deprecatedInputValue = changes['triggerIconType'].currentValue;
      console.warn(
        `Spark Design System - conflicting Inputs found in sprk-tooltip. triggerIconType has been deprecated; please use triggerIconName instead. Deprecated Input with value "` +
          deprecatedInputValue +
          `" will be ignored.`,
      );
    }

    if (changes['triggerIconName']) {
      this.iconNameToUse = changes['triggerIconName'].currentValue;
    }

    if (changes['triggerIconType'] && !changes['triggerIconName']) {
      this.iconNameToUse = changes['triggerIconType'].currentValue;
    }
  }
}
