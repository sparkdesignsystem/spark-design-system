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
  /**
   * The relative size of the viewport that
   * the Award component should switch
   * from a stacked layout to a side by side
   * layout. You will need to experiment
   * with your content to see which value
   * is the best fit.
   */
  @Input()
  splitAt: string;
  /**
   * The alt text that will be applied to the first image.
   */
  @Input()
  imgOneAlt: string;
  /**
   * The image href value that will be
   * applied to the first image.
   */
  @Input()
  imgOneHref: string;
  /**
   * The image href value that will be
   * applied to the second image.
   */
  @Input()
  imgTwoHref: string;
  /**
   * The alt text that will be applied to the second image.
   */
  @Input()
  imgTwoAlt: string;
  /**
   * The image source that will be applied to the first image.
   */
  @Input()
  imgOneSrc: string;
  /**
   * The image source that will be applied to the second image.
   */
  @Input()
  imgTwoSrc: string;
  /**
   * The string that will be assigned to the
   * `data-analytics` attribute of the first image.
   */
  @Input()
  analyticsStringImgOne: string;
  /**
   * The string that will be assigned to the
   * `data-analytics` attribute of the second image.
   */
  @Input()
  analyticsStringImgTwo: string;
  /**
   * The string that will be assigned to the
   * `data-analytics` attribute of
   * the clickable disclaimer.
   */
  @Input()
  analyticsStringDisclaimer: string;
  /**
   * Expects a space separated string
   * of classes to be added to the
   * component.
   */
  @Input()
  additionalClasses: string;
  /**
   * Expects a space separated string
   * of classes to be added to the
   * first image.
   */
  @Input()
  additionalClassesImgOne: string;
  /**
   * Expects a space separated string
   * of classes to be added to the
   * second image.
   */
  @Input()
  additionalClassesImgTwo: string;
  /**
   * The text that appears above the
   * images and serves as the heading
   * for the Award.
   */
  @Input()
  title: string;
  /**
   * The text that will be the clickable
   * title of the disclaimer toggle.
   */
  @Input()
  disclaimerTitle: string;
  /**
   * The text that will be inside the
   * disclaimer toggle.
   */
  @Input()
  disclaimerCopy: string;
  /**
   * If false, the disclaimer
   * toggle will not be rendered.
   */
  @Input()
  disclaimer: string;
  /**
   * The value supplied will be assigned
   * to the `data-id` attribute on the
   * component. This is intended to be
   * used as a selector for automated
   * tools. This value should be unique
   * per page.
   */
  @Input()
  idString: string;

  /**
   * @ignore
   */
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

  /**
   * @ignore
   */
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

  /**
   * @ignore
   */
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
