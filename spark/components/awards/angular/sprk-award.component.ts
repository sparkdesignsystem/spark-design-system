import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-award',
  template: `
    <sprk-stack
      itemSpacing="medium"
      additionalClasses="{{ additionalClasses }}"
    >
      <h2
        sprkStackItem
        [attr.data-id]="idString"
        class="
        sprk-o-Stack__item
        sprk-b-TypeDisplayFive
        sprk-b-Measure sprk-b-Measure--narrow
        sprk-u-TextAlign--center
        sprk-o-Stack__item--center-column"
      >
        {{ title }}
      </h2>

      <div sprkStackItem [ngClass]="getClasses()">
        <sprk-link
          linkType="unstyled"
          additionalClasses="sprk-o-Stack__item sprk-o-Stack__item--flex@s sprk-o-Stack"
          [href]="imgOneHref"
          [analyticsString]="analyticsStringImgOne"
        >
          <img
            [ngClass]="getClassesImgOne()"
            alt="{{ imgOneAlt }}"
            src="{{ imgOneSrc }}"
          />
        </sprk-link>

        <sprk-link
          linkType="unstyled"
          additionalClasses="sprk-o-Stack__item sprk-o-Stack__item--flex@s sprk-o-Stack"
          [href]="imgTwoHref"
          [analyticsString]="analyticsStringImgTwo"
        >
          <img
            [ngClass]="getClassesImgTwo()"
            alt="{{ imgTwoAlt }}"
            src="{{ imgTwoSrc }}"
          />
        </sprk-link>
      </div>

      <sprk-toggle
        *ngIf="disclaimer !== 'false'"
        sprkStackItem
        additionalClasses="sprk-o-Stack__item--start-column"
        toggleType="base"
        title="{{ disclaimerTitle }}"
        analyticsString="{{ analyticsStringDisclaimer }}"
      >
        <p class="sprk-b-TypeBodyFour">{{ disclaimerCopy }}</p>
      </sprk-toggle>
    </sprk-stack>
  `,
  styles: ['']
})
export class SprkAwardComponent {
  @Input()
  splitAt: string;
  @Input()
  imgOneAlt: string;
  @Input()
  imgOneHref: string;
  @Input()
  imgTwoHref: string;
  @Input()
  imgTwoAlt: string;
  @Input()
  imgOneSrc: string;
  @Input()
  imgTwoSrc: string;
  @Input()
  analyticsStringImgOne: string;
  @Input()
  analyticsStringImgTwo: string;
  @Input()
  analyticsStringDisclaimer: string;
  @Input()
  additionalClasses: string;
  @Input()
  additionalClassesImgOne: string;
  @Input()
  additionalClassesImgTwo: string;
  @Input()
  title: string;
  @Input()
  disclaimerTitle: string;
  @Input()
  disclaimerCopy: string;
  @Input()
  disclaimer: string;
  @Input()
  idString: string;

  getClasses(): string {
    const classArray: string[] = [
      'sprk-o-Stack sprk-o-Stack--medium sprk-o-Stack__item sprk-o-Stack__item--center-column'
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

    return classArray.join(' ');
  }

  getClassesImgOne(): string {
    const classArray: string[] = [
      'sprk-o-Stack__item sprk-o-Stack__item--center-column'
    ];

    if (this.additionalClassesImgOne) {
      this.additionalClassesImgOne.split(' ').forEach(className => {
        classArray.push(className);
      });
    }
    return classArray.join(' ');
  }

  getClassesImgTwo(): string {
    const classArray: string[] = [
      'sprk-o-Stack__item sprk-o-Stack__item--center-column'
    ];

    if (this.additionalClassesImgTwo) {
      this.additionalClassesImgTwo.split(' ').forEach(className => {
        classArray.push(className);
      });
    }
    return classArray.join(' ');
  }
}
