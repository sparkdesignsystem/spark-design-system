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
            *ngIf="leadingIcon"
            [iconName]="leadingIcon"
            [additionalClasses]="getLeadingIconClasses()"
          ></sprk-icon>
          <ng-content select="[sprkAccordionHeading]"></ng-content>
        </span>

        <sprk-icon
          [additionalClasses]="getIconClasses()"
          [iconName]="currentIconName"
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
   * Expects a space separated string of classes to be added to the heading in
   * the Accordion Item.
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
   * The name of the icon to use for a closed Accordion Item.
   */
  @Input()
  iconNameClosed = 'chevron-down-circle';
  /**
   * The name of the icon to use for an open Accordion Item.
   */
  @Input()
  iconNameOpen = 'chevron-down-circle';
  /**
   * The name of the icon to use before the heading in the Accordion Item.
   */
  @Input()
  leadingIcon: string;
  /**
   * Expects a space separated string of classes to be added to the leading
   * icon before the heading in the Accordion Item.
   */
  @Input()
  leadingIconAdditionalClasses: string;
  /**
   * Expects a space separated string of classes to be added to the Accordion
   * Item icon.
   */
  @Input()
  iconAdditionalClasses: string;
  /**
   * Expects a space separated string of classes to be added to the Accordion
   * Item content container.
   */
  @Input()
  contentAdditionalClasses: string;

  /**
   * This event will be emitted when the Accordion Item is opened.
   */
  @Output()
  openedEvent = new EventEmitter<any>();
  /**
   * This event will be emitted when the Accordion Item is closed.
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
  public currentIconName = this.iconNameClosed;
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
      this.currentIconName = this.iconNameOpen;
      this.iconStateClass = 'sprk-c-Icon--open';
    } else {
      this.animState = 'closed';
      this.currentIconName = this.iconNameClosed;
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
    const classArray: string[] = ['sprk-c-Accordion__item'];

    if (this.isOpen) {
      classArray.push('sprk-c-Accordion__item--open');
    }

    // if (this.isActive) {
    //   classArray.push('sprk-c-Accordion__item--active');
    // }

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

    const additionalClasses = this.headingAdditionalClasses;

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
  getLeadingIconClasses(): string {
    const classArray: string[] = [
      'sprk-c-Icon--filled-current-color',
      'sprk-c-Icon--xl',
      'sprk-c-Accordion__icon',
      'sprk-c-Accordion__icon--leading',
    ];

    if (this.leadingIconAdditionalClasses) {
      this.leadingIconAdditionalClasses.split(' ').forEach((className) => {
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
