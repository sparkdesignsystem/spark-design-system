import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-accordion-item',
  template: `
      <li class="sprk-c-Accordion__item " data-sprk-toggle="container">
        <a aria-controls="details1" class="sprk-c-Accordion__summary " data-sprk-toggle="trigger" data-sprk-toggle-type="accordion" href="#">
            <h3 class="sprk-b-TypeBodyOne sprk-c-Accordion__heading ">
            {{ title }}
            </h3>

            <svg class="sprk-c-Icon sprk-c-Accordion__icon" data-sprk-toggle="icon" viewBox="0 0 448 512">
              <use xlink:href="#chevron-down"></use>
            </svg>
        </a>

        <p id="details1" class="sprk-c-Accordion__details  sprk-b-TypeBodyTwo sprk-u-HideWhenJs" data-sprk-toggle="content">
          <ng-content></ng-content>
        </p>
      </li>`,
  styles: ['']
})

export class SparkAccordionItemComponent {
  @Input() title: string;
  @Input() analyticsString: string;
  @Input() additionalClasses: string;

  public icon: string;

  getClasses(): string {
    let classArray: Array<String> = [
      'sprk-c-Accordion'
    ];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      })
    }

    return classArray.join(' ');
  }
}
