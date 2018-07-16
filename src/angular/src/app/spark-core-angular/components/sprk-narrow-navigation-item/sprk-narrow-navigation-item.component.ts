import { Component, Input } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'sprk-narrow-navigation-item',
  template: `
    <li [ngClass]="getClasses()">
      <div *ngIf="subNav != null; then menu; else link;"></div> 
      <ng-template #link>
        <a [attr.aria-controls]="controls_id" class="sprk-c-Accordion__summary" [routerLink]="href">
          <span class="sprk-b-TypeBodyTwo sprk-c-Accordion__heading ">
            {{ text }}
          </span>
        </a>
      </ng-template>
      <ng-template #menu>
        <a [attr.aria-controls]="controls_id" class="sprk-c-Accordion__summary" href="#nogo"
        (click)="toggleAccordion($event)">
          <span class="sprk-b-TypeBodyTwo sprk-c-Accordion__heading ">
            {{ text }}
          </span>
          <sprk-icon [iconType]="iconType" additionalClasses="sprk-c-Accordion__icon"></sprk-icon>
        </a>
        <ul [id]="controls_id" *ngIf="isOpen" class="sprk-b-List sprk-b-List--bare sprk-c-Accordion__details sprk-u-HideWhenJs" data-sprk-toggle="content">
          <li *ngFor="let navItem of subNav">
            <a class="sprk-b-Link sprk-b-Link--standalone sprk-u-pam" [routerLink]="navItem.href">{{ navItem.text }}</a>
          </li>
        </ul>
      </ng-template>
    </li>`,
  styles: ['']
})

export class SparkNarrowNavigationItemComponent {
  @Input() additionalClasses: string;
  @Input() href: string;
  @Input() text: string;
  @Input() subNav: Object;
  @Input() isOpen: boolean = false;

  iconType: string = 'chevron-down';
  componentID = _.uniqueId();
  controls_id = `sprk-narrow-navigation-item__${this.componentID}`;

  getClasses(): string {
    let classArray: Array<String> = [
      'sprk-c-Accordion__item'
    ];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      })
    }

    return classArray.join(' ');
  }

  toggleAccordion(event): void {
    event.preventDefault();
    this.isOpen = !this.isOpen;
    if(this.iconType === 'chevron-down') {
      this.iconType = 'chevron-up';
    } else {
      this.iconType = 'chevron-down';
    }
  }
}
