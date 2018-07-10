import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-narrow-navigation',
  template: `
    <nav role="navigation">
      <ul class="sprk-c-Accordion sprk-c-Accordion--navigation sprk-b-List sprk-b-List--bare">
        <li class="sprk-c-Accordion__item " data-sprk-toggle="container">
          <a aria-controls="details1" class="sprk-c-Accordion__summary " data-sprk-toggle="trigger" data-sprk-toggle-type="accordion" href="#">
            <span class="sprk-b-TypeBodyTwo sprk-c-Accordion__heading ">
              Item 1
            </span>

            <svg class="sprk-c-Icon sprk-c-Accordion__icon" data-sprk-toggle="icon" viewBox="0 0 448 512">
              <use xlink:href="#chevron-down"></use>
            </svg>
          </a>
          <ul class="sprk-b-List sprk-b-List--bare sprk-c-Accordion__details sprk-u-HideWhenJs" data-sprk-toggle="content">
            <li>
              <a class="sprk-b-Link sprk-b-Link--standalone sprk-u-pam" href="">Item 1</a>
            </li>
            <li>
              <a class="sprk-b-Link sprk-b-Link--standalone sprk-u-pam" href="">Item 2</a>
            </li>
            <li>
              <a class="sprk-b-Link sprk-b-Link--standalone sprk-u-pam" href="">Item 3</a>
            </li>
          </ul>
        </li>

        <li class="sprk-c-Accordion__item ">
          <a aria-controls="details1" class="sprk-c-Accordion__summary " href="#">
            <span class="sprk-b-TypeBodyTwo sprk-c-Accordion__heading ">
              Item 2
            </span>
          </a>
        </li>

        <li class="sprk-c-Accordion__item " data-sprk-toggle="container">
          <a aria-controls="details1" class="sprk-c-Accordion__summary " data-sprk-toggle="trigger" data-sprk-toggle-type="accordion" href="#">
            <span class="sprk-b-TypeBodyTwo sprk-c-Accordion__heading ">
              Item 3
            </span>

            <svg class="sprk-c-Icon sprk-c-Accordion__icon" data-sprk-toggle="icon" viewBox="0 0 448 512">
              <use xlink:href="#chevron-down"></use>
            </svg>
          </a>
          <ul class="sprk-b-List sprk-b-List--bare sprk-c-Accordion__details sprk-u-HideWhenJs" data-sprk-toggle="content">
            <li>
              <a class="sprk-b-Link sprk-b-Link--standalone sprk-u-pam" href="">Item 1</a>
            </li>
            <li>
              <a class="sprk-b-Link sprk-b-Link--standalone sprk-u-pam" href="">Item 2</a>
            </li>
            <li>
              <a class="sprk-b-Link sprk-b-Link--standalone sprk-u-pam" href="">Item 3</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>`,
  styles: ['']
})

export class SparkNarrowNavigationComponent {
  @Input() additionalClasses: string;

  getClasses(): string {
    let classArray: Array<String> = [
      'sprk-c-Alert__icon'
    ];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      })
    }

    return classArray.join(' ');
  }
}
