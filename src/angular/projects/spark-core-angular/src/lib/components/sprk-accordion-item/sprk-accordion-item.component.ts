import { Component, Input } from '@angular/core';
import * as _ from 'lodash';
import {
  trigger,
  state,
  style,
  animate,
  transition
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

      <div [@toggleContent]="animState">
        <p [id]="accordion_controls_id" class="sprk-c-Accordion__content sprk-b-TypeBodyTwo">
          <ng-content></ng-content>
        </p>
      </div>
    </li>`,
  animations: [
    trigger('toggleContent', [
      state(
        'closed',
        style({
          height: '0',
          display: 'none',
          overflow: 'hidden'
        })
      ),
      state(
        'open',
        style({
          height: '*',
          display: 'block'
        })
      ),
      transition('closed => open', animate('300ms ease-in')),
      transition('open => closed', animate('300ms ease-out'))
    ])
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
  public animState = 'closed';

  toggleAccordion(event): void {
    event.preventDefault();
    this.isOpen = !this.isOpen;

    this.isOpen === false
      ? (this.animState = 'closed')
      : (this.animState = 'open');

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
