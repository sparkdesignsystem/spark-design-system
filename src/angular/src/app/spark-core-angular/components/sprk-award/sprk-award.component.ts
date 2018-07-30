import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-award',
  template: `
  <div [ngClass]="getClasses()">
    <h2 class="sprk-o-Stack__item sprk-o-Stack__item--center sprk-b-TypeDisplayFive sprk-b-Measure sprk-b-Measure--narrow sprk-u-TextAlign--center">
      {{ title }}
    </h2>

    <div class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium sprk-o-Stack--split@s">
      <a
        class="sprk-o-Stack__item sprk-o-Stack__item--equal@s sprk-o-Stack"
        [routerLink]="imgOneHref"
        [attr.data-analytics]="analyticsStringImgOne">
        <img
          class="sprk-o-Stack__item sprk-o-Stack__item--center"
          alt="{{ imgOneAlt }}"
          src="{{ imgOneSrc }}" />
      </a>

      <a
        class="sprk-o-Stack__item sprk-o-Stack__item--equal@s sprk-o-Stack"
        [routerLink]="imgTwoHref"
        [attr.data-analytics]="analyticsStringImgTwo">
        <img
          class="sprk-o-Stack__item sprk-o-Stack__item--center"
          alt="{{ imgTwoAlt }}"
          src="{{ imgTwoSrc }}" />
      </a>
    </div>

    <!-- TODO: Make toggle component and include here -->
    <div class="sprk-o-Stack__item" data-sprk-toggle="container">
      <a class="sprk-b-TypeBodyThree sprk-b-Link sprk-b-Link--standalone" data-sprk-toggle="trigger" href="#">
          <svg class="sprk-c-Icon sprk-u-mrs" data-sprk-toggle="icon" viewBox="0 0 448 512">
            <use xlink:href="#chevron-down"></use>
          </svg>
          {{ disclaimerTitle }}
      </a>

      <p class="sprk-b-TypeBodyFour sprk-u-pts sprk-u-HideWhenJs" data-sprk-toggle="content">
        {{ disclaimerCopy }}
      </p>
    </div>
    </div>
  `,
  styles: ['']
})

export class SparkAwardComponent {
  @Input() splitAt: string;
  @Input() imgOneAlt: string;
  @Input() imgOneHref: string;
  @Input() imgTwoHref: string;
  @Input() imgTwoAlt: string;
  @Input() imgOneSrc: string;
  @Input() imgTwoSrc: string;
  @Input() analyticsStringImgOne: string;
  @Input() analyticsStringImgTwo: string;
  @Input() additionalClasses: string;
  @Input() title: string;
  @Input() disclaimerTitle: string;
  @Input() disclaimerCopy: string;

  getClasses(): string {
    let classArray: Array<String> = [
      'sprk-o-Stack sprk-o-Stack--medium'
    ];

    // Handle the choice of item split breakpoint by adding CSS class
    switch (this.splitAt) {
      case 'tiny':
        classArray.push('sprk-o-Stack--split@xs');
        break;
      case 'small':
        classArray.push('sprk-o-Stack--split@s');
        break;
      case 'medium':
        classArray.push('sprk-o-Stack--split@m');
        break;
      case 'large':
        classArray.push('sprk-o-Stack--split@l');
        break;
      case 'huge':
        classArray.push('sprk-o-Stack--split@xl');
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
