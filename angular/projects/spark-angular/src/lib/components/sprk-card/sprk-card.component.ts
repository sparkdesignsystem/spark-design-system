import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-card',
  template: `
    <div
      [ngClass]="getClassesCard()"
      *ngIf="cardType === 'teaser'"
      [attr.data-id]="idString"
    >
      <sprk-link
        linkType="unstyled"
        *ngIf="media === 'img'"
        [href]="imgHref"
        additionalClasses="sprk-o-Stack__item"
        [analyticsString]="imgLinkAnalytics"
      >
        <img
          class="sprk-c-Card__media"
          [attr.alt]="imgAlt"
          [attr.src]="imgSrc"
        />
      </sprk-link>

      <div
        [ngClass]="{
          'sprk-o-Stack__item': true,
          'sprk-c-Card__content': true,
          'sprk-o-Stack': true,
          'sprk-o-Stack--medium': true,
          'sprk-u-TextAlign--center': media === 'icon'
        }"
      >
        <sprk-link
          linkType="unstyled"
          *ngIf="media === 'icon'"
          [href]="iconHref"
          additionalClasses="sprk-o-Stack__item sprk-u-AbsoluteCenter"
          [analyticsString]="iconLinkAnalytics"
        >
          <sprk-icon
            [iconType]="iconType"
            [additionalClasses]="additionalClassesIcon"
          ></sprk-icon>
        </sprk-link>

        <h3 class="sprk-b-TypeDisplayFive sprk-o-Stack__item">{{ title }}</h3>

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
  /**
   * The type of Card variant to render.
   * The available values are `base`, `teaser`, and `teaserHeading`.
   */
  @Input()
  cardType = 'base';
  /**
   * The main content
   * of the Card. Placed between
   * the title and call-to-action.
   */
  @Input()
  body: string;
  /**
   * Determines which type of media will be rendered.
   * The available values are `image` and `icon`.
   */
  @Input()
  media: string;
  /**
   * Expects a space separated string
   * of classes to be added to the
   * icon if the media type is icon.
   */
  @Input()
  additionalClassesIcon: string;
  /**
   * The title of the Card.
   */
  @Input()
  title: string;
  /**
   * If the media input is set to `image`,
   * this is the text that will be applied to the
   * `src` attribute of the image.
   */
  @Input()
  imgSrc: string;
  /**
   * If the media input is set to `image`,
   * this is the text that is applied to
   * the `alt` attribute of the image.
   */
  @Input()
  imgAlt: string;
  /**
   * If the media input is set to `icon`, this
   * is used to supply the name of the icon to use.
   */
  @Input()
  iconType: string;
  /**
   * If the media input is set to `icon`, this
   * is used to supply the href for the icon.
   */
  @Input()
  iconHref: string;
  /**
   * If the media input is set to `img`, this
   * is used to supply the href of the image.
   */
  @Input()
  imgHref: string;
  /**
   * Determines which type of call-to-action is rendered.
   * The available values are `link` and `button`.
   */
  @Input()
  ctaType = 'link';
  /**
   * The text content of the call-to-action.
   */
  @Input()
  ctaText: string;
  /**
   * The text that will be applied to the `data-analytics` attribute
   * of the call-to-action.
   */
  @Input()
  ctaAnalytics: string;
  /**
   * The text that will be applied to the `data-analytics` attribute
   * of the link surrounding the image.
   */
  @Input()
  imgLinkAnalytics: string;
  /**
   * The text that will be applied to the `data-analytics` attribute
   * of the link surrounding the icon.
   */
  @Input()
  iconLinkAnalytics: string;
  /**
   * The href value for the call-to-action.
   */
  @Input()
  ctaHref: string;
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
   * call-to-action.
   */
  @Input()
  additionalCtaClasses: string;
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

  /**
   * @ignore
   */
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

  /**
   * @ignore
   */
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
