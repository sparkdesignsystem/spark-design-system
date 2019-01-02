import { Component, Input, OnInit } from '@angular/core';
import * as _ from 'lodash';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'sprk-narrow-navigation-item',
  template: `
    <li
      [ngClass]="getClasses()"
      routerLinkActive="sprk-c-Accordion__item--active"
      [attr.data-id]="idString"
    >
      <div *ngIf="subNav != null; then: menu; else: link"></div>
      <ng-template #link>
        <a
          [attr.aria-controls]="controls_id"
          class="sprk-c-Accordion__summary"
          [routerLink]="href"
          [attr.data-analytics]="analyticsString"
        >
          <span class="sprk-b-TypeBodyTwo sprk-c-Accordion__heading ">
            {{ text }}
          </span>
        </a>
      </ng-template>
      <ng-template #menu>
        <a
          [attr.aria-controls]="controls_id"
          class="sprk-c-Accordion__summary"
          href="#nogo"
          [attr.data-analytics]="analyticsString"
          (click)="toggleAccordion($event)"
        >
          <span class="sprk-b-TypeBodyTwo sprk-c-Accordion__heading ">
            {{ text }}
          </span>
          <sprk-icon
            [iconType]="iconType"
            additionalClasses="sprk-c-Icon--l sprk-c-Accordion__icon"
          ></sprk-icon>
        </a>
        <div [@toggleContent]="animState">
          <ul
            [id]="controls_id"
            class="sprk-b-List sprk-b-List--bare sprk-c-Accordion__details sprk-u-HideWhenJs"
          >
            <li *ngFor="let navItem of subNav">
              <a
                class="sprk-b-Link sprk-b-Link--simple sprk-u-pam"
                [routerLink]="navItem.href"
                [attr.data-analytics]="navItem.analyticsString"
                >{{ navItem.text }}</a
              >
            </li>
          </ul>
        </div>
      </ng-template>
    </li>
  `,
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
export class SparkNarrowNavigationItemComponent implements OnInit {
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
  @Input()
  idString: string;

  iconType = 'chevron-down';
  componentID = _.uniqueId();
  controls_id = `sprk-narrow-navigation-item__${this.componentID}`;
  public iconStateClass = '';
  public animState = 'closed';

  accordionState(): void {
    this.isOpen === false
      ? (this.animState = 'closed')
      : (this.animState = 'open');

    this.isOpen === false
      ? (this.iconType = 'chevron-down')
      : (this.iconType = 'chevron-up');

    this.isOpen === false
      ? (this.iconStateClass = '')
      : (this.iconStateClass = 'sprk-c-Icon--open');
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

  ngOnInit() {
    this.accordionState();
  }

  toggleAccordion(event): void {
    event.preventDefault();
    this.isOpen = !this.isOpen;
    this.accordionState();
  }
}
