import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-highlight-board',
  template: `
    <div [ngClass]="getClasses()" [attr.data-id]="idString">
      <img
        *ngIf="type !== 'noImage'"
        class="sprk-c-HighlightBoard__image"
        src="{{ imgSrc }}"
        alt="{{ imgAlt }}"
      />

      <sprk-stack
        sprkStackItem
        itemSpacing="large"
        additionalClasses="sprk-c-HighlightBoard__content"
      >
        <h1
          sprkStackItem
          [ngClass]="{
            'sprk-b-TypeDisplayTwo': type === 'noImage',
            'sprk-b-TypeDisplayOne': type !== 'noImage',
            'sprk-c-HighlightBoard__heading': true
          }"
        >
          {{ heading }}
        </h1>

        <sprk-stack
          sprkStackItem
          *ngIf="ctaText"
          itemSpacing="medium"
          splitAt="tiny"
          additionalClasses="sprk-o-Stack--center-column {{centerBtns}}"
        >
          <div sprkStackItem class="sprk-c-HighlightBoard__cta">
            <a
              [routerLink]="ctaHref"
              class="sprk-c-Button sprk-c-Button--primary sprk-c-Button--full@sm"
              [attr.data-analytics]="analyticsStringCta"
            >
              {{ ctaText }}
            </a>
          </div>

          <div
            sprkStackItem
            *ngIf="ctaText2"
            class="sprk-c-HighlightBoard__cta"
          >
            <a
              [routerLink]="ctaHref2"
              class="sprk-c-Button sprk-c-Button--secondary sprk-c-Button--full@sm"
              [attr.data-analytics]="analyticsStringCta2"
            >
              {{ ctaText2 }}
            </a>
          </div>
        </sprk-stack>
      </sprk-stack>
    </div>
  `,
  styles: ['']
})
export class SparkHighlightBoardComponent {
  @Input()
  heading: string;
  @Input()
  imgSrc: string;
  @Input()
  imgAlt: string;
  @Input()
  ctaText: string;
  @Input()
  ctaHref: string;
  @Input()
  ctaText2: string;
  @Input()
  ctaHref2: string;
  @Input()
  analyticsStringCta: string;
  @Input()
  analyticsStringCta2: string;
  @Input()
  additionalClasses: string;
  @Input()
  type: string;
  @Input()
  idString: string;

  public centerBtns = '';

  getClasses(): string {
    const classArray: string[] = ['sprk-c-HighlightBoard'];

    switch (this.type) {
      case 'noImage':
        this.centerBtns = 'sprk-o-Stack--center-row';
        break;
      case 'stacked':
        this.centerBtns = 'sprk-o-Stack--center-row';
        classArray.push(
          'sprk-c-HighlightBoard--has-image sprk-c-HighlightBoard--stacked'
        );
        break;
      case 'fullWidth':
        classArray.push(
          'sprk-c-HighlightBoard--has-image sprk-c-HighlightBoard--has-image'
        );
        break;
      default:
        classArray.push('sprk-c-HighlightBoard--has-image');
        break;
    }

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }
}
