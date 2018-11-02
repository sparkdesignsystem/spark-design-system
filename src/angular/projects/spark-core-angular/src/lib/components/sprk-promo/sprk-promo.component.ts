import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-promo',
  template: `
    <div [ngClass]="getClasses()">
      <a
        *ngIf="isFlag && !mediaRev"
        [routerLink]="imgHref"
        [ngClass]="getClassesFlag()"
        [attr.data-analytics]="flagLinkAnalytics">
        <img class="sprk-c-Promo__image--flag"
          alt="{{ imgAlt }}"
          src="{{ imgSrc }}">
      </a>
      <a
        *ngIf="imgSrc && !mediaRev && !isFlag"
        [routerLink]="imgHref"
        [attr.data-analytics]="imgLinkAnalytics"
        [ngClass]="getClassesImg()">
        <img class="sprk-c-Promo__image"
          alt="{{ imgAlt }}"
          src="{{ imgSrc }}">
      </a>

      <div [ngClass]="getClassesContent()">

        <h3 *ngIf="title" class="sprk-b-TypeDisplayFive sprk-o-Stack__item sprk-c-Promo__title">
          {{ title }}
        </h3>

        <div *ngIf="subtitle" class="sprk-c-Promo__subtitle sprk-o-Stack__item">
          {{ subtitle }}
        </div>

        <div class="sprk-b-TypeBodyTwo sprk-o-Stack__item">
          <ng-content></ng-content>
        </div>

        <div *ngIf="cta === 'button'" class="sprk-o-Stack__item">
          <a
            [routerLink]="buttonHref"
            class="sprk-c-Button"
            [attr.data-analytics]="buttonLinkAnalytics">
            {{ ctaText }}
          </a>
        </div>

        <a
          *ngIf="cta === 'link'"
          [routerLink]="ctaLinkHref"
          class="sprk-o-Stack__item sprk-b-Link sprk-b-Link--standalone"
          [attr.data-analytics]="ctaLinkAnalytics">
          {{ ctaText }}
        </a>
      </div>

      <a
        *ngIf="isFlag && mediaRev"
        [routerLink]="imgHref"
        [ngClass]="getClassesFlag()"
        [attr.data-analytics]="flagLinkAnalytics">
        <img class="sprk-c-Promo__image--flag"
          alt="{{ imgAlt }}"
          src="{{ imgSrc }}">
      </a>

      <a
        *ngIf="imgSrc && mediaRev && !isFlag"
        [routerLink]="imgHref"
        [attr.data-analytics]="imgLinkAnalytics"
        [ngClass]="getClassesImg()">
        <img class="sprk-c-Promo__image"
          alt="{{ imgAlt }}"
          src="{{ imgSrc }}">
      </a>
  </div>
  `
})
export class SparkPromoComponent {
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
  @Input()
  additionalClasses: string;
  @Input()
  additionalClassesContent: string;
  @Input()
  isFlag: boolean; // if true, use the flag variant
  @Input()
  additionalClassesFlagLink: string;
  @Input()
  flagLinkAnalytics: string;
  @Input()
  imgSrc: string;
  @Input()
  imgAlt: string;
  @Input()
  imgHref: string;
  @Input()
  imgLinkAnalytics: string;
  @Input()
  additionalClassesImgLink: string;
  @Input()
  mediaRev: boolean;
  @Input()
  hasBorder: boolean;

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
