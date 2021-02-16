import { Component, Input, OnInit } from '@angular/core';

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
          additionalClasses="sprk-o-Stack--center-column {{ centerBtns }}"
        >
          <div sprkStackItem class="sprk-c-HighlightBoard__cta">
            <a
              *ngIf="!ctaRouterLink"
              sprkLink
              variant="unstyled"
              [attr.href]="ctaHref"
              class="sprk-c-Button sprk-c-Button--primary sprk-c-Button--full@sm"
              [analyticsString]="analyticsStringCta"
            >
              {{ ctaText }}
            </a>
            <a
              *ngIf="ctaRouterLink"
              sprkLink
              variant="unstyled"
              [routerLink]="ctaRouterLink"
              class="sprk-c-Button sprk-c-Button--primary sprk-c-Button--full@sm"
              [analyticsString]="analyticsStringCta"
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
              *ngIf="!ctaRouterLink2"
              sprkLink
              variant="unstyled"
              [attr.href]="ctaHref2"
              class="sprk-c-Button sprk-c-Button--secondary sprk-c-Button--full@sm"
              [analyticsString]="analyticsStringCta2"
            >
              {{ ctaText2 }}
            </a>
            <a
              *ngIf="ctaRouterLink2"
              sprkLink
              variant="unstyled"
              [routerLink]="ctaRouterLink2"
              class="sprk-c-Button sprk-c-Button--secondary sprk-c-Button--full@sm"
              [analyticsString]="analyticsStringCta2"
            >
              {{ ctaText2 }}
            </a>
          </div>
        </sprk-stack>
      </sprk-stack>
    </div>
  `,
})
export class SprkHighlightBoardComponent implements OnInit {
  /**
   * The value supplied will be rendered as the heading.
   */
  @Input()
  heading: string;
  /**
   * The Highlight Board will use this as the
   * source for the main image.
   */
  @Input()
  imgSrc: string;
  /**
   * The `alt` text for the main image. If the image used is decorative and
   * does not present any important content, set this property to "" so
   * the image will be hidden from assistive technology.
   */
  @Input()
  imgAlt: string;
  /**
   * The Highlight Board will use this as
   * the text for the main call to action.
   */
  @Input()
  ctaText: string;
  /**
   * The Highlight Board will use this as the
   * `href` for the main call to action.
   */
  @Input()
  ctaHref: string;
  /**
   * The Highlight Board will use this as the
   * `routerLink` for the main call to action.
   */
  @Input()
  ctaRouterLink: string;
  /**
   * The Highlight Board will use this as
   * the text for the secondary call to action.
   */
  @Input()
  ctaText2: string;
  /**
   * The Highlight Board will use this
   * as the `href` for the secondary
   * call to action.
   */
  @Input()
  ctaHref2: string;
  /**
   * The Highlight Board will use this
   * as the `routerLink` for the secondary
   * call to action.
   */
  @Input()
  ctaRouterLink2: string;
  /**
   * The value supplied will be assigned to
   * the `data-analytics` attribute on the call to action.
   * Intended for an outside library to capture data.
   */
  @Input()
  analyticsStringCta: string;
  /**
   * The value supplied will be assigned to the
   * `data-analytics` attribute on the second
   * call to action. Intended for an outside
   * library to capture data.
   */
  @Input()
  analyticsStringCta2: string;
  /**
   * Expects a space separated string
   * of classes to be added to the
   * component.
   */
  @Input()
  additionalClasses: string;
  /**
   * The variation of the
   * Highlight Board that is rendered.
   * Can be `noImage`, `stacked` or not
   * set at all. The default if not set
   * is the default variation of the Highlight Board.
   */
  @Input()
  type: string;
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

  ngOnInit() {
    if (!this.ctaText && this.ctaText2) {
      console.warn(`
        Spark Design System Warning - <sprk-highlight-board> Component:
        A secondary call-to-action (CTA)
        should not exist without a primary CTA.
        If there is only one CTA, it must be set on
        ctaText and ctaHref.
      `);
    }
  }

  /**
   * @ignore
   */
  public centerBtns = '';
  /**
   * @ignore
   */
  getClasses(): string {
    const classArray: string[] = ['sprk-c-HighlightBoard'];

    switch (this.type) {
      case 'noImage':
        this.centerBtns = 'sprk-o-Stack--center-row';
        break;
      case 'stacked':
        this.centerBtns = 'sprk-o-Stack--center-row';
        classArray.push(
          'sprk-c-HighlightBoard--has-image sprk-c-HighlightBoard--stacked',
        );
        break;
      default:
        classArray.push('sprk-c-HighlightBoard--has-image');
        break;
    }

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }
}
