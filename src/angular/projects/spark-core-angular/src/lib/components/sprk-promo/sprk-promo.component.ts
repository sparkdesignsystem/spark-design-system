import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-promo',
  template: `
    <div [ngClass]="getClasses()">
      <a
        *ngIf="media === 'icon' && !mediaRev"
        [routerLink]="iconHref"
        [ngClass]="getClassesIcon()"
        [attr.data-analytics]="iconLinkAnalytics">
          <sprk-icon [iconType]="iconType" [additionalClasses]="additionalClassesIcon"></sprk-icon>
      </a>
      <a
        *ngIf="media === 'img' && !mediaRev"
        [routerLink]="imgHref"
        [attr.data-analytics]="imgLinkAnalytics"
        [ngClass]="getClassesImg()">
        <img class="sprk-c-Promo__image"
          alt="{{ imgAlt }}"
          src="{{ imgSrc }}">
      </a>
      <div [ngClass]="getContentClasses()">
        <h3 class="sprk-b-TypeDisplayFive sprk-o-Stack__item sprk-c-Promo__title">
          {{ title }}
        </h3>
        <div class="sprk-c-Promo__subtitle sprk-o-Stack__item">
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
        *ngIf="media === 'img' && mediaRev"
        [routerLink]="imgHref"
        [attr.data-analytics]="imgLinkAnalytics"
        [ngClass]="getClassesImg()">
        <img class="sprk-c-Promo__image"
          alt="{{ imgAlt }}"
          src="{{ imgSrc }}">
      </a>

      <a
        *ngIf="media === 'icon' && mediaRev"
        [routerLink]="iconHref"
        [ngClass]="getClassesIcon()"
        [attr.data-analytics]="iconLinkAnalytics">
          <sprk-icon [iconType]="iconType" [additionalClasses]="additionalClassesIcon"></sprk-icon>
      </a>
  </div>
  `
})
export class SparkPromoComponent {
  @Input()
  additionalClasses: string;
  @Input()
  additionalClassesImgLink: string;
  @Input()
  additionalClassesIcon: string;
  @Input()
  additionalClassesIconLink: string;
  @Input()
  cta: string; // 'link' or 'button'
  @Input()
  media: string; // 'img' or 'icon'
  @Input()
  title: string;
  @Input()
  subtitle: string;
  @Input()
  ctaLinkAnalytics: string;
  @Input()
  buttonLinkAnalytics: string;
  @Input()
  imgLinkAnalytics: string;
  @Input()
  iconLinkAnalytics: string;
  @Input()
  ctaText: string;
  @Input()
  ctaLinkHref: string;
  @Input()
  imgHref: string;
  @Input()
  iconHref: string;
  @Input()
  iconType: string;
  @Input()
  buttonHref: string;
  @Input()
  imgAlt: string;
  @Input()
  imgSrc: string;
  @Input()
  mediaRev: boolean; // 'yes' or omitted

  getClasses(): string {
    const classArray: string[] = [
      'sprk-c-Promo',
      'sprk-o-Stack',
      'sprk-o-Stack--split@s'
    ];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach(className => {
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

  getClassesIcon(): string {
    const classArray: string[] = [
      'sprk-o-Stack__item--half@s',
      'sprk-o-Stack__item',
      'sprk-c-Promo__icon'
    ];

    if (this.additionalClassesIconLink) {
      this.additionalClassesIconLink.split(' ').forEach(className => {
        classArray.push(className);
      });
    }
    return classArray.join(' ');
  }

  getContentClasses(): string {
    const classArray: string[] = [
      'sprk-o-Stack__item',
      'sprk-c-Promo__content',
      'sprk-o-Stack',
      'sprk-o-Stack--large'
    ];

    if (this.media === 'img' || this.media === 'icon') {
      classArray.push('sprk-o-Stack__item--half@s');
    }

    if (this.additionalClassesIconLink) {
      this.additionalClassesIconLink.split(' ').forEach(className => {
        classArray.push(className);
      });
    }
    return classArray.join(' ');
  }
}
