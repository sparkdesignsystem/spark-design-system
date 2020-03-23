import { Component, Input, OnInit } from '@angular/core';
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
            additionalClasses="sprk-c-Icon--stroke-current-color sprk-c-Icon--l sprk-u-mrs"
            *ngIf="leadingIcon"
          ></sprk-icon>
          {{ title }}
        </span>

        <sprk-icon
          additionalClasses="sprk-c-Accordion__icon sprk-c-Icon--toggle sprk-c-Icon--l {{
            iconStateClass
          }}"
          [iconType]="currentIconType"
        ></sprk-icon>
      </button>

      <div [@toggleContent]="animState">
        <div
          [id]="accordion_controls_id"
          class="sprk-c-Accordion__content sprk-b-TypeBodyTwo"
        >
          <ng-content></ng-content>
        </div>
      </div>
    </li>
  `,
  animations: [toggleAnimations.toggleContent]
})
export class SprkAccordionItemComponent implements OnInit {
  /**
   * The value supplied will be rendered
   * inside the title area of the Accordion item.
   */
  @Input()
  title: string;
  /**
   * The value supplied will be assigned to the
   * `data-analytics` attribute on the component.
   * Intended for an outside
   * library to capture data.
   */
  @Input()
  analyticsString: string;
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
   * Expects a space separated string
   * of classes to be added to the
   * component.
   */
  @Input()
  additionalClasses: string;
  /**
   * Expects a space separated string
   * of classes to be added to the
   * heading in the Accordion item.
   */
  @Input()
  additionalHeadingClasses: string;
  /**
   * The Accordion item will use this to decide
   * if it should be open or closed on first render.
   * (Interacting with the toggle will override this input.)
   */
  @Input()
  isOpen = false;
  /**
   * If `true`, the active CSS class
   * will be applied to the item.
   */
  @Input()
  isActive: boolean;
  /**
   * The name of the icon to use for
   * a closed Accordion item.
   */
  @Input()
  iconTypeClosed = 'chevron-up-circle-two-color';
  /**
   * The name of the icon to use for
   * an open Accordion item.
   */
  @Input()
  iconTypeOpen = 'chevron-up-circle-two-color';
  /**
   * The name of the icon to use before
   * the title in the Accordion item.
   * This is optional.
   */
  @Input()
  leadingIcon: string;

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
  accordionState(): void {
    this.isOpen === false
      ? (this.animState = 'closed')
      : (this.animState = 'open');

    this.isOpen === false
      ? (this.currentIconType = this.iconTypeClosed)
      : (this.currentIconType = this.iconTypeOpen);

    this.isOpen === false
      ? (this.iconStateClass = '')
      : (this.iconStateClass = 'sprk-c-Icon--open');
  }

  /**
   * @ignore
   */
  toggleAccordion(event): void {
    event.preventDefault();
    this.isOpen = !this.isOpen;
    this.accordionState();
  }

  /**
   * @ignore
   */
  getClasses(): string {
    const classArray: string[] = [
      'sprk-c-Accordion__item',
      'sprk-u-Overflow--hidden'
    ];

    if (this.isOpen) {
      classArray.push('sprk-c-Accordion__item--open');
    }

    if (this.isActive) {
      classArray.push('sprk-c-Accordion__item--active');
    }

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }

  /**
   * @ignore
   */
  getHeadingClasses(): string {
    const classArray: string[] = ['sprk-c-Accordion__heading'];

    if (this.additionalHeadingClasses) {
      this.additionalHeadingClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }

  ngOnInit() {
    this.accordionState();
  }
}
