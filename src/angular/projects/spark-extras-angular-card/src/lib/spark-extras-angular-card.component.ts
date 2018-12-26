import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-card',
  template: `
    <div
      [ngClass]="getClassesCard()"
      *ngIf="cardType === 'teaser'"
      [attr.data-id]="idString"
    >
      <a
        *ngIf="media === 'img'"
        [routerLink]="imgHref"
        class="sprk-o-Stack__item"
        [attr.data-analytics]="imgLinkAnalytics"
      >
        <img
          class="sprk-c-Card__media"
          [attr.alt]="imgAlt"
          [attr.src]="imgSrc"
        />
      </a>

      <div
        [ngClass]="{
          'sprk-o-Stack__item': true,
          'sprk-c-Card__content': true,
          'sprk-o-Stack': true,
          'sprk-o-Stack--medium': true,
          'sprk-u-TextAlign--center': media === 'icon'
        }"
      >
        <a
          *ngIf="media === 'icon'"
          [routerLink]="iconHref"
          class="sprk-o-Stack__item sprk-u-AbsoluteCenter"
          [attr.data-analytics]="iconLinkAnalytics"
        >
          <sprk-icon
            [iconType]="iconType"
            [additionalClasses]="additionalClassesIcon"
          ></sprk-icon>
        </a>

        <h3 class="sprk-b-TypeDisplayFive sprk-o-Stack__item">{{ title }}</h3>

        <p class="sprk-b-TypeBodyTwo sprk-o-Stack__item">{{ body }}</p>

        <div class="sprk-o-Stack__item">
          <a
            [routerLink]="ctaHref"
            [ngClass]="getClassesCta()"
            [attr.data-analytics]="ctaAnalytics"
          >
            {{ ctaText }}
          </a>
        </div>
      </div>
    </div>

    <div
      [ngClass]="getClassesCard()"
      *ngIf="cardType === 'base'"
      [attr.data-id]="idString"
    >
      <ng-content></ng-content>
    </div>

    <div
      [ngClass]="getClassesCard()"
      *ngIf="cardType === 'teaserHeading'"
      [attr.data-id]="idString"
    >
      <h3
        class="sprk-o-Stack__item sprk-c-Card__content sprk-b-TypeDisplayFive"
      >
        {{ title }}
      </h3>

      <div
        class="sprk-o-Stack__item sprk-c-Card__content sprk-o-Stack sprk-o-Stack--medium"
      >
        <a
          *ngIf="media === 'img'"
          [routerLink]="imgHref"
          class="sprk-o-Stack__item"
          [attr.data-analytics]="imgLinkAnalytics"
        >
          <img [attr.alt]="imgAlt" [attr.src]="imgSrc" />
        </a>

        <a
          *ngIf="media === 'icon'"
          [routerLink]="iconHref"
          class="sprk-o-Stack__item sprk-o-Stack__item--center"
          [attr.data-analytics]="iconLinkAnalytics"
        >
          <sprk-icon
            [iconType]="iconType"
            [additionalClasses]="additionalClassesIcon"
          ></sprk-icon>
        </a>

        <p class="sprk-b-TypeBodyTwo sprk-o-Stack__item">{{ body }}</p>

        <div class="sprk-o-Stack__item">
          <a
            [routerLink]="ctaHref"
            [ngClass]="getClassesCta()"
            [attr.data-analytics]="ctaAnalytics"
          >
            {{ ctaText }}
          </a>
        </div>
      </div>
    </div>
  `
})
export class SparkCardComponent {
  @Input()
  cardType = 'base';
  @Input()
  body: string;
  @Input()
  media: string;
  @Input()
  additionalClassesIcon: string;
  @Input()
  title: string;
  @Input()
  imgSrc: string;
  @Input()
  imgAlt: string;
  @Input()
  iconType: string;
  @Input()
  iconHref: string;
  @Input()
  imgHref: string;
  @Input()
  ctaType = 'link';
  @Input()
  ctaText: string;
  @Input()
  ctaAnalytics: string;
  @Input()
  imgLinkAnalytics: string;
  @Input()
  iconLinkAnalytics: string;
  @Input()
  ctaHref: string;
  @Input()
  additionalClasses: string;
  @Input()
  additionalCtaClasses: string;
  @Input()
  idString: string;

  getClassesCta(): string {
    const ctaClassArray: string[] = [];

    if (this.ctaType === 'button') {
      ctaClassArray.push('sprk-c-Button');
    } else {
      ctaClassArray.push('sprk-b-Link');
    }

    if (this.additionalCtaClasses) {
      this.additionalCtaClasses.split(' ').forEach(className => {
        ctaClassArray.push(className);
      });
    }

    return ctaClassArray.join(' ');
  }

  getClassesCard(): string {
    const classArray: string[] = ['sprk-c-Card', 'sprk-o-Stack'];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }
}
