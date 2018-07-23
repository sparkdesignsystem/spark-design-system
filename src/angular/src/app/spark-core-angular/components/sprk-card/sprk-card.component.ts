import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-card',
  template: `
    <div [ngClass]="getClassesCard()" *ngIf="cardType === 'teaser'">
      <a
        href="#"
        class="sprk-o-Stack__item">
        <img
          alt="{{ imgAlt }}"
          src="{{ imgSrc }}">
      </a>

      <div
        class="sprk-o-Stack__item sprk-c-Card__content sprk-o-Stack sprk-o-Stack--medium">
        <h3 class="sprk-b-TypeDisplayFive sprk-o-Stack__item">
          {{ title }}
        </h3>

        <p class="sprk-b-TypeBodyTwo sprk-o-Stack__item">
          {{ body }}
        </p>

        <div class="sprk-o-Stack__item">
          <a href="#" [ngClass]="getClassesCta()" [attr.data-analytics]="ctaAnalytics">
            {{ ctaText }}
          </a>
        </div>
      </div>
    </div>

    <div [ngClass]="getClassesCard()" *ngIf="cardType === 'base'">
      <ng-content></ng-content>
    </div>

    <div [ngClass]="getClassesCard()" *ngIf="cardType === 'teaserHeading'">
      <h3 class="sprk-o-Stack__item sprk-c-Card__content sprk-b-TypeDisplayFive">
        {{ title }}
      </h3>

      <a
        href="#"
        class="sprk-o-Stack__item">
        <img
          alt="{{ imgAlt }}"
          src="{{ imgSrc }}">
      </a>

      <div class="sprk-o-Stack__item sprk-c-Card__content sprk-o-Stack sprk-o-Stack--medium">
        <p class="sprk-b-TypeBodyTwo sprk-o-Stack__item">
          {{ body }}
        </p>

        <div class="sprk-o-Stack__item">
          <a href="#" [ngClass]="getClassesCta()">
            {{ ctaText }}
          </a>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['sprk-card.component.scss']
})

export class SparkCardComponent {
  @Input() cardType: string = 'base';
  @Input() body: string;
  @Input() title: string;
  @Input() imgSrc: string;
  @Input() imgAlt: string;
  @Input() imgHref: string;
  @Input() ctaType: string = 'link';
  @Input() ctaText: string;
  @Input() ctaAnalytics: string;
  @Input() ctaHref: string;
  @Input() additionalClasses: string;
  @Input() additionalCtaClasses: string;

  getClassesCta(): string {
    let ctaClassArray: Array<String> = [''];

    if (this.ctaType === 'button') {
      ctaClassArray.push('sprk-c-Button');
    } else {
      ctaClassArray.push('sprk-b-Link');
    }

    if (this.additionalCtaClasses) {
      this.additionalCtaClasses.split(' ').forEach((className) => {
        ctaClassArray.push(className);
      })
    }

    return ctaClassArray.join(' ');
  }

  getClassesCard(): string {
    let classArray: Array<String> = [
      'sprk-c-Card sprk-o-Stack'
    ];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      })
    }

    return classArray.join(' ');
  }
}
