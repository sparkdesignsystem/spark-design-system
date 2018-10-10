import { Component, Input } from '@angular/core';
import * as _ from 'lodash';
import {
  trigger,
  state,
  style,
  animate,
  transition
  // ...
} from '@angular/animations';

@Component({
  selector: 'sprk-accordion-item',
  template: `
    <li [ngClass]="getClasses()">
      <a [attr.aria-controls]="accordion_controls_id"
         [ngClass]="{
           'sprk-c-Accordion__summary': true
           }"
         href="#nogo"
         [attr.data-analytics]="analyticsString"
         (click)="toggleAccordion($event)">
          <h3 class="sprk-c-Accordion__heading sprk-b-TypeBodyTwo">
            {{ title }}
          </h3>

          <sprk-icon additionalClasses="sprk-c-Accordion__icon sprk-c-Icon--toggle sprk-c-Icon--l {{ iconStateClass }}" [iconType]="iconType"></sprk-icon>
      </a>

      <div *ngIf="isOpen">
        <p [id]="accordion_controls_id" class="sprk-c-Accordion__content sprk-b-TypeBodyTwo">
          <ng-content></ng-content>
        </p>
      </div>
    </li>`,
  animations: [
    // animation triggers go here
  ]
})
export class SparkAccordionItemComponent {
  @Input()
  title: string;
  @Input()
  analyticsString: string;
  @Input()
  additionalClasses: string;
  @Input()
  isOpen = false;

  componentID = _.uniqueId();
  accordion_controls_id = `accordionHeading__${this.componentID}`;
  public iconType = 'chevron-down';
  public iconStateClass = '';

  toggleAccordion(event): void {
    event.preventDefault();
    this.isOpen = !this.isOpen;
    this.iconType === 'chevron-down'
      ? (this.iconType = 'chevron-up')
      : (this.iconType = 'chevron-down');

    this.isOpen === true
      ? (this.iconStateClass = 'sprk-c-Icon--open')
      : (this.iconStateClass = '');
  }

  getClasses(): string {
    const classArray: string[] = ['sprk-c-Accordion__item'];

    if (this.isOpen) {
      classArray.push('sprk-c-Accordion__item--open');
    }

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }
}
