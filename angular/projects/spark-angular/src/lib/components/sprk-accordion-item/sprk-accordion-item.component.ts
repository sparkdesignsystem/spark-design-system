import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import * as _ from 'lodash';
import { toggleAnimations } from '../sprk-toggle/sprk-toggle-animations';

@Component({
  selector: 'sprk-accordion-item',
  template: `
    <li [ngClass]="getClasses()">
      <button
        sprkLink
        variant="unstyled"
        href="#"
        [attr.aria-controls]="accordion_controls_id"
        [attr.aria-expanded]="isOpen"
        class="sprk-c-Accordion__summary"
        [analyticsString]="analyticsString"
        [idString]="idString"
        (click)="toggleAccordion($event)"
      >
        <span [ngClass]="getHeadingClasses()">
          <sprk-icon
            [iconType]="leadingIcon"
            additionalClasses="
              sprk-c-Icon--filled-current-color
              sprk-c-Icon--xl
              sprk-u-mrs"
            *ngIf="leadingIcon"
          ></sprk-icon>
          {{ heading || title }}
        </span>

        <sprk-icon
          [additionalClasses]="getIconClasses()"
          [iconType]="currentIconType"
        ></sprk-icon>
      </button>

      <div [@toggleContent]="animState">
        <div [id]="accordion_controls_id" [ngClass]="getContentClasses()">
          <ng-content></ng-content>
        </div>
      </div>
    </li>
  `,
  animations: [toggleAnimations.toggleContent],
})
export class SprkAccordionItemComponent implements OnInit {
  /**
   * Deprecated: use `heading` instead. The value supplied will be
   * rendered inside the heading area of the Accordion item.
   */
  @Input()
  title: string;
  /**
   * The value supplied will be rendered inside the heading area of the
   * Accordion item.
   */
  @Input()
  heading: string;
  /**
   * The value supplied will be assigned to the `data-analytics` attribute
   * on the component. Intended for an outside library to capture data.
   */
  @Input()
  analyticsString: string;
  /**
   * The value supplied will be assigned to the `data-id` attribute on the
   * component. This is intended to be used as a selector for automated tools.
   * This value should be unique per page.
   */
  @Input()
  idString: string;
  /**
   * Expects a space separated string of classes to be added to the component.
   */
  @Input()
  additionalClasses: string;
  /**
   * Deprecated - use `headingAdditionalClasses` instead. Expects a space
   * separated string of classes to be added to the heading in the Accordion
   * item.
   */
  @Input()
  additionalHeadingClasses: string;
  /**
   * Expects a space separated string of classes to be added to the heading in
   * the Accordion item.
   */
  @Input()
  headingAdditionalClasses: string;
  /**
   * The Accordion item will use this to decide if it should be open or closed
   * on first render. (Interacting with the toggle will override this input.)
   */
  @Input()
  isOpen = false;
  /**
   * If `true`, the active CSS class will be applied to the item.
   */
  @Input()
  isActive: boolean;
  // TODO - Remove this input and move the default value to iconNameClosed
  // as part of issue XXXX
  /**
   * Deprecated - use `iconNameClosed` instead. The name of the icon to use for
   * a closed Accordion item.
   */
  @Input()
  iconTypeClosed = 'chevron-up-circle';
  /**
   * The name of the icon to use for a closed Accordion item.
   */
  @Input()
  iconNameClosed;
  // TODO - Remove this input and move the default value to iconNameOpen
  // as part of issue XXXX
  /**
   * Deprecated - use `iconNameOpen` instead. The name of the icon to use for
   * an open Accordion item.
   */
  @Input()
  iconTypeOpen = 'chevron-up-circle';
  /**
   * The name of the icon to use for an open Accordion item.
   */
  @Input()
  iconNameOpen;
  /**
   * The name of the icon to use before the heading in the Accordion item.
   * This is optional.
   */
  @Input()
  leadingIcon: string;
  /**
   * Expects a space separated string of classes to be added to the accordion
   * item icon.
   */
  @Input()
  iconAdditionalClasses: string;
  /**
   * Expects a space separated string of classes to be added to the accordion
   * item content container.
   */
  @Input()
  contentAdditionalClasses: string;

  /**
   * This event will be emitted when the accordion item is opened.
   */
  @Output()
  openedEvent = new EventEmitter<any>();
  /**
   * This event will be emitted when the accordion item is closed.
   */
  @Output()
  closedEvent = new EventEmitter<any>();

  /**
   * @ignore
   */
  componentID = _.uniqueId();
  /**
   * @ignore
   */
  accordion_controls_id = `accordionHeading__${this.componentID}`;
  /**
   * @ignore
   */
  public currentIconType = this.iconTypeClosed;
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
      this.currentIconType = this.iconNameOpen || this.iconTypeOpen;
      this.iconStateClass = 'sprk-c-Icon--open';
    } else {
      this.animState = 'closed';
      this.currentIconType = this.iconNameClosed || this.iconTypeClosed;
      this.iconStateClass = '';
    }
  }

  /**
   * @ignore
   */
  toggleAccordion(event): void {
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
  getClasses(): string {
    const classArray: string[] = [
      'sprk-c-Accordion__item',
      'sprk-u-Overflow--hidden',
    ];

    if (this.isOpen) {
      classArray.push('sprk-c-Accordion__item--open');
    }

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }

  /**
   * @ignore
   */
  getHeadingClasses(): string {
    const classArray: string[] = [
      'sprk-c-Accordion__heading',
      'sprk-b-TypeDisplaySeven',
    ];

    const additionalClasses =
      this.headingAdditionalClasses || this.additionalHeadingClasses;

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
  getIconClasses(): string {
    const classArray: string[] = [
      'sprk-c-Accordion__icon',
      'sprk-c-Icon--xl',
      'sprk-c-Icon--toggle',
      this.iconStateClass,
    ];

    if (this.iconAdditionalClasses) {
      this.iconAdditionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }

  /**
   * @ignore
   */
  getContentClasses(): string {
    const classArray: string[] = ['sprk-c-Accordion__content'];

    if (this.contentAdditionalClasses) {
      this.contentAdditionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }

  ngOnInit() {
    this.toggleState();
  }
}
