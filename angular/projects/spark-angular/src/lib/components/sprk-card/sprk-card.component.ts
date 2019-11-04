import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-card',
  template: `
    <div
      [ngClass]="getClassesCard()"
      *ngIf="cardType === 'teaser'"
      [attr.data-id]="idString"
    >
      <sprk-stack>
        <div sprkStackItem>
          <sprk-link
            linkType="unstyled"
            *ngIf="media === 'img'"
            [href]="imgHref"
            class="sprk-o-Stack__item"
            [analyticsString]="imgLinkAnalytics"
          >
            <img
              class="sprk-c-Card__media"
              [attr.alt]="imgAlt"
              [attr.src]="imgSrc"
            />
          </sprk-link>
        </div>

        <div sprkStackItem>
          <div
            [ngClass]="{
              'sprk-c-Card__content': true,
              'sprk-u-TextAlign--center': media === 'icon'
            }"
          >
            <sprk-stack itemSpacing="medium">
              <div sprkStackItem>
                <sprk-link
                  linkType="unstyled"
                  *ngIf="media === 'icon'"
                  [href]="iconHref"
                  additionalClasses="sprk-u-AbsoluteCenter"
                  [analyticsString]="iconLinkAnalytics"
                >
                  <sprk-icon
                    [iconType]="iconType"
                    [additionalClasses]="additionalClassesIcon"
                  ></sprk-icon>
                </sprk-link>
              </div>

              <div sprkStackItem>
              <h3 class="sprk-b-TypeDisplayFive">
                {{ title }}
              </h3>
              </div>

              <div sprkStackItem>
                <p class="sprk-b-TypeBodyTwo">
                  {{ body }}
                </p>
              </div>

              <div sprkStackItem>
                <sprk-link
                  linkType="unstyled"
                  [href]="ctaHref"
                  [additionalClasses]="getClassesCta()"
                  [analyticsString]="ctaAnalytics"
                >
                  {{ ctaText }}
                </sprk-link>
              </div>
            </sprk-stack>

          </div>
        </div>
      </sprk-stack>
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
        <sprk-link
          linkType="unstyled"
          *ngIf="media === 'img'"
          [href]="imgHref"
          additionalClasses="sprk-o-Stack__item"
          [analyticsString]="imgLinkAnalytics"
        >
          <img [attr.alt]="imgAlt" [attr.src]="imgSrc" />
        </sprk-link>

        <sprk-link
          *ngIf="media === 'icon'"
          [href]="iconHref"
          linkType="unstyled"
          additionalClasses="sprk-o-Stack__item sprk-o-Stack__item--center"
          [analyticsString]="iconLinkAnalytics"
        >
          <sprk-icon
            [iconType]="iconType"
            [additionalClasses]="additionalClassesIcon"
          ></sprk-icon>
        </sprk-link>

        <p class="sprk-b-TypeBodyTwo sprk-o-Stack__item">{{ body }}</p>

        <div class="sprk-o-Stack__item">
          <sprk-link
            linkType="unstyled"
            [href]="ctaHref"
            [additionalClasses]="getClassesCta()"
            [analyticsString]="ctaAnalytics"
          >
            {{ ctaText }}
          </sprk-link>
        </div>
      </div>
    </div>
  `
})
export class SprkCardComponent {
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
    const classArray: string[] = ['sprk-c-Card'];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }
}
