import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-toggle',
  template: `
    <div data-sprk-toggle="container" [ngClass]="getClasses()">
      <a
        class="sprk-b-TypeBodyThree sprk-b-Link sprk-b-Link--standalone"
        data-sprk-toggle="trigger"
        href="#">
          <svg class="sprk-c-Icon sprk-u-mrs" data-sprk-toggle="icon" viewBox="0 0 448 512">
            <use xlink:href="#chevron-down"></use>
          </svg>
          {{ title }}
      </a>

      <p class="sprk-b-TypeBodyFour sprk-u-pts sprk-u-HideWhenJs" data-sprk-toggle="content">
        {{ body }}
      </p>
    </div>
  `,
  styles: ['']
})

export class SparkToggleComponent {
  @Input() toggleType: string;
  @Input() analyticsString: string;
  @Input() additionalClasses: string;
  @Input() title: string;
  @Input() body: string;

  getClasses(): string {
    let classArray: Array<String> = [
      ''
    ];

    switch (this.toggleType) {
      case 'base':
        classArray.push('');
        break;
      default:
        break;
    }

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      })
    }

    return classArray.join(' ');
  }
}
