import { Component, Input, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { toggleAnimations } from '../sprk-toggle/sprk-toggle-animations';

@Component({
  selector: 'sprk-accordion-item',
  template: `
    <li [ngClass]="getClasses()">
      <sprk-link
        linkType="unstyled"
        [ariaControls]="accordion_controls_id"
        additionalClasses="sprk-c-Accordion__summary"
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
      </sprk-link>

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
  @Input()
  title: string;
  @Input()
  analyticsString: string;
  /**
   * The value supplied will be assigned
   * to the 'data-id' attribute on the
   * component. This is intended to be
   * used as a selector for automated
   * tools. This value should be unique
   * per page.
   */
  @Input()
  idString: string;
  @Input()
  additionalClasses: string;
  @Input()
  additionalHeadingClasses: string;
  @Input()
  isOpen = false;
  @Input()
  isActive: boolean;
  @Input()
  iconTypeClosed = 'chevron-up-circle-two-color';
  @Input()
  iconTypeOpen = 'chevron-up-circle-two-color';
  @Input()
  leadingIcon: string;

  componentID = _.uniqueId();
  accordion_controls_id = `accordionHeading__${this.componentID}`;
  public currentIconType = this.iconTypeClosed;
  public iconStateClass = '';
  public animState = 'closed';

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

  toggleAccordion(event): void {
    event.preventDefault();
    this.isOpen = !this.isOpen;
    this.accordionState();
  }

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
