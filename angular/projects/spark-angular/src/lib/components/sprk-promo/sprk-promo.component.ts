import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-promo',
  template: `
    <div [ngClass]="getClasses()" [attr.data-id]="idString">
      <sprk-link
        linkType="unstyled"
        *ngIf="isFlag && !mediaRev"
        [additionalClasses]="getClassesFlag()"
        [href]="imgHref"
        [analyticsString]="flagLinkAnalytics"
      >
        <img
          class="sprk-c-Promo__image--flag"
          alt="{{ imgAlt }}"
          src="{{ imgSrc }}"
        />
      </sprk-link>
      <sprk-link
        linkType="unstyled"
        *ngIf="imgSrc && !mediaRev && !isFlag"
        [href]="imgHref"
        [analyticsString]="imgLinkAnalytics"
        [additionalClasses]="getClassesImg()"
      >
        <img
          class="sprk-c-Promo__image"
          alt="{{ imgAlt }}"
          src="{{ imgSrc }}"
        />
      </sprk-link>

      <div [ngClass]="getClassesContent()">
        <h3
          *ngIf="title"
          class="sprk-b-TypeDisplayFive sprk-o-Stack__item sprk-c-Promo__title"
        >
          {{ title }}
        </h3>

        <div *ngIf="subtitle" class="sprk-c-Promo__subtitle sprk-o-Stack__item">
          {{ subtitle }}
        </div>

        <div class="sprk-b-TypeBodyTwo sprk-o-Stack__item">
          <ng-content></ng-content>
        </div>

        <div *ngIf="cta === 'button'" class="sprk-o-Stack__item">
          <sprk-link
            linkType="unstyled"
            [href]="buttonHref"
            additionalClasses="sprk-c-Button"
            [analyticsString]="buttonLinkAnalytics"
          >
            {{ ctaText }}
          </sprk-link>
        </div>

        <sprk-link
          linkType="simple"
          *ngIf="cta === 'link'"
          [href]="ctaLinkHref"
          additionalClasses="sprk-o-Stack__item"
          [analyticsString]="ctaLinkAnalytics"
        >
          {{ ctaText }}
        </sprk-link>
      </div>

      <sprk-link
        linkType="unstyled"
        *ngIf="isFlag && mediaRev"
        [href]="imgHref"
        [additionalClasses]="getClassesFlag()"
        [analyticsString]="flagLinkAnalytics"
      >
        <img
          class="sprk-c-Promo__image--flag"
          alt="{{ imgAlt }}"
          src="{{ imgSrc }}"
        />
      </sprk-link>

      <sprk-link
        linkType="unstyled"
        *ngIf="imgSrc && mediaRev && !isFlag"
        [href]="imgHref"
        [analyticsString]="imgLinkAnalytics"
        [additionalClasses]="getClassesImg()"
      >
        <img
          class="sprk-c-Promo__image"
          alt="{{ imgAlt }}"
          src="{{ imgSrc }}"
        />
      </sprk-link>
    </div>
  `
})
export class SprkPromoComponent {
  @Input()
  title: string;
  @Input()
  subtitle: string;
  @Input()
  cta: string; // 'link' or 'button'
  @Input()
  ctaText: string;
  @Input()
  buttonHref: string;
  @Input()
  buttonLinkAnalytics: string;
  @Input()
  ctaLinkHref: string;
  @Input()
  ctaLinkAnalytics: string;
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
   * content container.
   */
  @Input()
  additionalClassesContent: string;
  @Input()
  isFlag: boolean; // if true, use the flag variant
  /**
   * Expects a space separated string
   * of classes to be added to the
   * link surrounding the image in the Flag variant.
   */
  @Input()
  additionalClassesFlagLink: string;
  @Input()
  flagLinkAnalytics: string;
  /**
   * The source value for the Promo image.
   */
  @Input()
  imgSrc: string;
  /**
   * The alt text for the Promo image.
   */
  @Input()
  imgAlt: string;
  /**
   * The href value for the Promo image.
   */
  @Input()
  imgHref: string;
  @Input()
  imgLinkAnalytics: string;
  /**
   * If imgSrc is true and isFlag is false,
   * this string of additional classes will
   * be added to the anchor containing the Promo
   * image. This is intended for overrides.
   */
  @Input()
  additionalClassesImgLink: string;
  /**
   * If true, the media will render
   * on the right side of the Promo content.
   */
  @Input()
  mediaRev: boolean;
  /**
   * If true, the Promo will be rendered
   * with a border.
   */
  @Input()
  hasBorder: boolean;
  /**
   * The value supplied will be assigned
   * to the 'data-id' attribute on the
   * component. This is intended to be
   * used as a selector for automated
   * tools. This value should be unique
   * per page.
   */
  @Input()
  idString: string;

  getClasses(): string {
    const classArray: string[] = [
      'sprk-c-Promo',
      'sprk-o-Stack',
      'sprk-o-Stack--split@s'
    ];

    if (this.isFlag) {
      classArray.push('sprk-c-Promo--flag');
    }

    if (this.hasBorder) {
      classArray.push('sprk-c-Promo--bordered');
    }

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }
    return classArray.join(' ');
  }

  getClassesFlag(): string {
    const classArray: string[] = [
      'sprk-o-Stack__item--fourth@s',
      'sprk-o-Stack__item'
    ];

    if (this.additionalClassesFlagLink) {
      this.additionalClassesFlagLink.split(' ').forEach(className => {
        classArray.push(className);
      });
    }
    return classArray.join(' ');
  }

  getClassesImg(): string {
    const classArray: string[] = [
      'sprk-o-Stack__item',
      'sprk-o-Stack__item--half@s'
    ];

    if (this.additionalClassesImgLink) {
      this.additionalClassesImgLink.split(' ').forEach(className => {
        classArray.push(className);
      });
    }
    return classArray.join(' ');
  }

  getClassesContent(): string {
    const classArray: string[] = [
      'sprk-c-Promo__content',
      'sprk-o-Stack__item',
      'sprk-o-Stack',
      'sprk-o-Stack--large'
    ];

    if (this.isFlag) {
      classArray.push('sprk-o-Stack__item--three-fourths@s');
    } else {
      if (this.imgSrc) {
        classArray.push('sprk-o-Stack__item--half@s');
      }
    }

    if (this.additionalClassesContent) {
      this.additionalClassesContent.split(' ').forEach(className => {
        classArray.push(className);
      });
    }
    return classArray.join(' ');
  }
}
