import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-highlight-board',
  template: `
  <div [ngClass]="getClasses()">
    <img
      *ngIf="type !== 'noImage'"
      class="sprk-c-HighlightBoard__image"
      src="{{ imgSrc }}"
      alt="{{ imgAlt }}">

    <div
      [ngClass]="{
        'sprk-c-HighlightBoard__content': true,
        'sprk-c-HighlightBoard__content--light': type === 'default' || !type || type === 'fullWidth'
      }">
      <div class="sprk-u-mbl">
        <h1 class="sprk-b-TypeDisplayThree sprk-c-HighlightBoard__primary-heading sprk-u-mbs">
          {{ heading }}
        </h1>

        <h4 class="sprk-b-TypeDisplayFour sprk-c-HighlightBoard__sub-heading sprk-u-mbm">
          {{ subHeading }}
        </h4>
      </div>

      <sprk-stack
        itemSpacing="medium"
        splitAt="small"
        additionalClasses="sprk-c-HighlightBoard__cta-container">
        <div sprk-stack-item>
          <a
            [routerLink]="ctaHref"
            class="sprk-c-HighlightBoard__cta sprk-c-Button sprk-c-Button--primary sprk-c-Button--full@sm"
            [attr.data-analytics]="analyticsString">
            {{ ctaText }}
          </a>
        </div>

        <div
          sprk-stack-item
          *ngIf="ctaTwoText">
          <a
            [routerLink]="ctaTwoHref"
            class="sprk-c-HighlightBoard__cta sprk-c-Button sprk-c-Button--primary sprk-c-Button--full@sm"
            [attr.data-analytics]="analyticsStringCta2">
            {{ ctaTwoText }}
          </a>
        </div>
      </sprk-stack>
    </div>
  </div>
  `,
  styles: ['']
})

export class SparkHighlightBoardComponent {
  @Input() heading: string;
  @Input() subHeading: string;
  @Input() imgSrc: string;
  @Input() imgAlt: string;
  @Input() ctaText: string;
  @Input() ctaHref: string;
  @Input() ctaTwoText: string;
  @Input() ctaTwoHref: string;
  @Input() analyticsString: string;
  @Input() analyticsStringCta2: string;
  @Input() additionalClasses: string;
  @Input() type: string;

  getClasses(): string {
    let classArray: Array<String> = [
      'sprk-c-HighlightBoard'
    ];

    switch (this.type) {
      case 'noImage':
        break;
      case 'stacked':
        classArray.push('sprk-c-HighlightBoard--has-image sprk-c-HighlightBoard--stacked');
        break;
      case 'fullWidth':
        classArray.push('sprk-c-HighlightBoard--has-image sprk-c-HighlightBoard--has-image');
        break;
      default:
        classArray.push('sprk-c-HighlightBoard--has-image');
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
