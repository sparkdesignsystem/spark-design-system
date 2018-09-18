import { Component, Input } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'sprk-narrow-navigation-item',
  template: `
    <li [ngClass]="getClasses()">
      <div *ngIf="subNav != null; then menu; else link;"></div>
      <ng-template #link>
        <a [attr.aria-controls]="controls_id"
           class="sprk-c-Accordion__summary"
           [routerLink]="href"
           [attr.data-analytics]="analyticsString">
          <span class="sprk-b-TypeBodyTwo sprk-c-Accordion__heading ">
            {{ text }}
          </span>
        </a>
      </ng-template>
      <ng-template #menu>
        <a [attr.aria-controls]="controls_id"
           class="sprk-c-Accordion__summary"
           href="#nogo"
           [attr.data-analytics]="analyticsString"
           (click)="toggleAccordion($event)">
          <span class="sprk-b-TypeBodyTwo sprk-c-Accordion__heading ">
            {{ text }}
          </span>
          <sprk-icon [iconType]="iconType" additionalClasses="sprk-c-Accordion__icon"></sprk-icon>
        </a>
        <ul [id]="controls_id" *ngIf="isOpen" class="sprk-b-List sprk-b-List--bare sprk-c-Accordion__details sprk-u-HideWhenJs">
          <li *ngFor="let navItem of subNav">
            <a class="sprk-b-Link sprk-b-Link--standalone sprk-u-pam"
               [routerLink]="navItem.href"
               [attr.data-analytics]="navItem.analyticsString"
               >{{ navItem.text }}</a>
          </li>
        </ul>
      </ng-template>
    </li>`,
  styles: ['']
})
export class SparkNarrowNavigationItemComponent {
  @Input()
  additionalClasses: string;
  @Input()
  analyticsString: string;
  @Input()
  href: string;
  @Input()
  text: string;
  @Input()
  subNav: object;
  @Input()
  isOpen = false;

  iconType = 'chevron-down';
  componentID = _.uniqueId();
  controls_id = `sprk-narrow-navigation-item__${this.componentID}`;

  getClasses(): string {
    const classArray: string[] = ['sprk-c-Accordion__item'];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }

  toggleAccordion(event): void {
    event.preventDefault();
    this.isOpen = !this.isOpen;
    this.iconType === 'chevron-down'
      ? (this.iconType = 'chevron-up')
      : (this.iconType = 'chevron-down');
  }
}
