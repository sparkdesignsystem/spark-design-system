import { Component, Input } from '@angular/core';
import { SparkIconComponent } from '../sprk-icon/sprk-icon.component';

@Component({
  selector: 'sprk-promo',
  template: `
  <div [ngClass]="getClasses()">
    <a
      *ngIf="media === 'img' && !mediaRev"
      [routerLink]="imgHref"
      [attr.data-analytics]="imgLinkAnalytics"
      [ngClass]="getClassesImg()">
      <img
        alt="{{ imgAlt }}"
        src="{{ imgSrc }}">
    </a>

    <a
      *ngIf="media === 'icon' && !mediaRev"
      [routerLink]="iconHref"
      [ngClass]="getClassesIcon()"
      [attr.data-analytics]="iconLinkAnalytics">
        <sprk-icon [iconType]="iconType" [additionalClasses]="additionalClassesIcon"></sprk-icon>
    </a>

    <div class="sprk-o-Stack__item sprk-o-Stack__item--equal@s sprk-o-Stack sprk-o-Stack--medium">
      <h3 class="sprk-b-TypeDisplayFive sprk-o-Stack__item">
        {{ title }}
      </h3>

      <p class="sprk-b-TypeBodyTwo sprk-o-Stack__item">
        <ng-content></ng-content>
      </p>

      <div *ngIf="cta === 'button'" class="sprk-o-Stack__item">
        <a
          [routerLink]="buttonHref"
          class="sprk-c-Button"
          [attr.data-analytics]="ctaButtonAnalytics">
          {{ ctaText }}
        </a>
      </div>

      <a
        *ngIf="cta === 'link'"
        [routerLink]="linkHref"
        class="sprk-o-Stack__item sprk-b-Link sprk-b-Link--standalone"
        [attr.data-analytics]="ctaLinkAnalytics">
        {{ ctaText }}
      </a>
    </div>

    <a
      *ngIf="media === 'img' && mediaRev === 'yes'"
      [routerLink]="imgHref"
      class="sprk-o-Stack__item"
      [attr.data-analytics]="imgLinkAnalytics"
      [ngClass]="getClassesImg()">
      <img
        alt="{{ imgAlt }}"
        src="{{ imgSrc }}">
    </a>

    <a
      *ngIf="media === 'icon' && mediaRev === 'yes'"
      [routerLink]="iconHref"
      class="sprk-o-Stack__item"
      [attr.data-analytics]="iconLinkAnalytics">
        <sprk-icon [iconType]="iconType" [additionalClasses]="additionalClassesIcon"></sprk-icon>
    </a>
  </div>
  `,
  styles: ['']
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
  linkHref: string;
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
  mediaRev: string; // 'yes' or omitted

  getClasses(): string {
    const classArray: string[] = [
      'sprk-o-Stack',
      'sprk-o-Stack--split@s',
      'sprk-o-Stack--medium'
    ];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }
    return classArray.join(' ');
  }

  getClassesImg(): string {
    const classArray: string[] = ['sprk-o-Stack__item'];

    if (this.additionalClassesImgLink) {
      this.additionalClassesImgLink.split(' ').forEach(className => {
        classArray.push(className);
      });
    }
    return classArray.join(' ');
  }

  getClassesIcon(): string {
    const classArray: string[] = ['sprk-o-Stack__item'];

    if (this.additionalClassesIconLink) {
      this.additionalClassesIconLink.split(' ').forEach(className => {
        classArray.push(className);
      });
    }
    return classArray.join(' ');
  }
}
