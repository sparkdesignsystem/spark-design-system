import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-accordion-item',
  template: `
      <li [ngClass]="getClasses()">
        <a aria-controls="details1" 
           [ngClass]="{
             'sprk-c-Accordion__summary': true, 
             'sprk-c-Accordion__summary--open': isOpen
             }"
           href="#nogo"
           [attr.data-analytics]="analyticsString"
           (click)="toggleAccordion($event)"
           >
            <h3 class="sprk-b-TypeBodyOne sprk-c-Accordion__heading ">
            {{ title }}
            </h3>

            <sprk-icon additionalClasses="sprk-c-Accoridion__icon" [iconType]="iconType"></sprk-icon>
        </a>

        <p *ngIf="isOpen" id="details1" class="sprk-c-Accordion__details  sprk-b-TypeBodyTwo sprk-u-HideWhenJs" data-sprk-toggle="content">
          <ng-content></ng-content>
        </p>
      </li>`,
  styles: ['']
})

export class SparkAccordionItemComponent {
  @Input() title: string;
  @Input() analyticsString: string;
  @Input() additionalClasses: string;

  public isOpen: boolean = false;
  public iconType: string = 'chevron-down';

  toggleAccordion(event): void {
    event.preventDefault();
    this.isOpen = !this.isOpen;
    if(this.iconType === 'chevron-down') {
      this.iconType = 'chevron-up';
    } else {
      this.iconType = 'chevron-down';
    }
  }

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
}
