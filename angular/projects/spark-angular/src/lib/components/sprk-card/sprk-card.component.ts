import { Component, Input } from '@angular/core';

/**
 * TODO: Remove all inner template code except for lines 116-122
 * and the Inputs that are unused as part of
 * the deprecation removal Issue #3897.
 */
@Component({
  selector: 'sprk-card',
  template: `
    <div
      [ngClass]="getClassesCard()"
      *ngIf="cardType === 'teaser'"
      [attr.data-id]="idString"
    >
      <a
        sprkLink
        variant="unstyled"
        *ngIf="media === 'img' && !imgRouterLink"
        [href]="imgHref"
        class="sprk-o-Stack__item"
        [analyticsString]="imgLinkAnalytics"
      >
        <img
          class="sprk-c-Card__media"
          [attr.alt]="imgAlt"
          [attr.src]="imgSrc"
        />
      </a>
      <a
        sprkLink
        variant="unstyled"
        *ngIf="media === 'img' && imgRouterLink"
        [routerLink]="imgRouterLink"
        class="sprk-o-Stack__item"
        [analyticsString]="imgLinkAnalytics"
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
          sprkLink
          variant="unstyled"
          *ngIf="media === 'icon' && !iconRouterLink"
          [attr.href]="iconHref"
          class="sprk-o-Stack__item sprk-u-AbsoluteCenter"
          [analyticsString]="iconLinkAnalytics"
        >
          <sprk-icon
            [iconType]="iconType"
            [additionalClasses]="additionalClassesIcon"
          ></sprk-icon>
        </a>
        <a
          sprkLink
          variant="unstyled"
          *ngIf="media === 'icon' && iconRouterLink"
          [routerLink]="iconRouterLink"
          class="sprk-o-Stack__item sprk-u-AbsoluteCenter"
          [analyticsString]="iconLinkAnalytics"
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
            *ngIf="!ctaRouterLink"
            sprkLink
            variant="unstyled"
            [attr.href]="ctaHref"
            [ngClass]="getClassesCta()"
            [analyticsString]="ctaAnalytics"
          >
            {{ ctaText }}
            <sprk-icon
              *ngIf="ctaIcon && ctaType === 'link'"
              [iconType]="ctaIcon"
            ></sprk-icon>
          </a>
          <a
            *ngIf="ctaRouterLink"
            sprkLink
            variant="unstyled"
            [routerLink]="ctaRouterLink"
            [ngClass]="getClassesCta()"
            [analyticsString]="ctaAnalytics"
          >
            {{ ctaText }}
            <sprk-icon
              *ngIf="ctaIcon && ctaType === 'link'"
              [iconType]="ctaIcon"
            ></sprk-icon>
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
          sprkLink
          variant="unstyled"
          *ngIf="media === 'img' && !imgRouterLink"
          [attr.href]="imgHref"
          class="sprk-o-Stack__item"
          [analyticsString]="imgLinkAnalytics"
        >
          <img [attr.alt]="imgAlt" [attr.src]="imgSrc" />
        </a>
        <a
          sprkLink
          variant="unstyled"
          *ngIf="media === 'img' && imgRouterLink"
          [routerLink]="imgRouterLink"
          class="sprk-o-Stack__item"
          [analyticsString]="imgLinkAnalytics"
        >
          <img [attr.alt]="imgAlt" [attr.src]="imgSrc" />
        </a>

        <a
          sprkLink
          *ngIf="media === 'icon' && !iconRouterLink"
          [attr.href]="iconHref"
          variant="unstyled"
          class="sprk-o-Stack__item sprk-o-Stack__item--center"
          [analyticsString]="iconLinkAnalytics"
        >
          <sprk-icon
            [iconType]="iconType"
            [additionalClasses]="additionalClassesIcon"
          ></sprk-icon>
        </a>
        <a
          sprkLink
          *ngIf="media === 'icon' && iconRouterLink"
          [routerLink]="iconRouterLink"
          variant="unstyled"
          class="sprk-o-Stack__item sprk-o-Stack__item--center"
          [analyticsString]="iconLinkAnalytics"
        >
          <sprk-icon
            [iconType]="iconType"
            [additionalClasses]="additionalClassesIcon"
          ></sprk-icon>
        </a>

        <p class="sprk-b-TypeBodyTwo sprk-o-Stack__item">{{ body }}</p>

        <div class="sprk-o-Stack__item">
          <a
            *ngIf="!ctaRouterLink"
            sprkLink
            variant="unstyled"
            [attr.href]="ctaHref"
            [ngClass]="getClassesCta()"
            [analyticsString]="ctaAnalytics"
          >
            {{ ctaText }}
            <sprk-icon
              *ngIf="ctaIcon && ctaType === 'link'"
              [iconType]="ctaIcon"
            ></sprk-icon>
          </a>
          <a
            *ngIf="ctaRouterLink"
            sprkLink
            variant="unstyled"
            [routerLink]="ctaRouterLink"
            [ngClass]="getClassesCta()"
            [analyticsString]="ctaAnalytics"
          >
            {{ ctaText }}
            <sprk-icon
              *ngIf="ctaIcon && ctaType === 'link'"
              [iconType]="ctaIcon"
            ></sprk-icon>
          </a>
        </div>
      </div>
    </div>
  `,
})
export class SprkCardComponent {
  /**
   * Deprecated - this is no longer needed.
   * The type of Card variant to render.
   * The available values are `base`, `teaser`, and `teaserHeading`.
   */
  @Input()
  cardType: 'base' | 'teaser' | 'teaserHeading' = 'base';
  /**
   * If `true`, the Card will receive
   * the standout design styles.
   */
  @Input()
  isStandout: boolean;
  /**
   * Deprecated - this is no longer needed.
   * The main content
   * of the Card. Placed between
   * the title and call to action.
   */
  @Input()
  body: string;
  /**
   * Deprecated - this is no longer needed.
   * Determines which type of media will be rendered.
   * The available values are `image` and `icon`.
   */
  @Input()
  media: string;
  /**
   * Deprecated - this is no longer needed.
   * Expects a space separated string
   * of classes to be added to the
   * icon if the media type is icon.
   */
  @Input()
  additionalClassesIcon: string;
  /**
   * Deprecated - this is no longer needed.
   * The title of the Card.
   */
  @Input()
  title: string;
  /**
   * Deprecated - this is no longer needed.
   * If the `media` input is set to `image`,
   * this is the text that will be applied to the
   * `src` attribute of the image.
   */
  @Input()
  imgSrc: string;
  /**
   * Deprecated - this is no longer needed.
   * If the `media` input is set to `image`,
   * this is the text that is applied to
   * the `alt` attribute of the image.
   */
  @Input()
  imgAlt: string;
  /**
   * Deprecated - this is no longer needed.
   * If the `media` input is set to `icon`, this
   * is used to supply the name of the icon to use.
   */
  @Input()
  iconType: string;
  /**
   * Deprecated - this is no longer needed.
   * If the `media` input is set to `icon`, this
   * is used to supply the `href` for the icon.
   */
  @Input()
  iconHref: string;
  /**
   * Deprecated - this is no longer needed.
   * If the `media` input is set to `icon`, this
   * is used to supply the `routerLink` for the icon.
   */
  @Input()
  iconRouterLink: string;
  /**
   * Deprecated - this is no longer needed.
   * If the `media` input is set to `img`, this
   * is used to supply the `href` of the image.
   */
  @Input()
  imgHref: string;
  /**
   * Deprecated - this is no longer needed.
   * If the `media` input is set to `img`, this
   * is used to supply the `routerLink` of the image.
   */
  @Input()
  imgRouterLink: string;
  /**
   * Deprecated - this is no longer needed.
   * Determines what icon `sprk-icon` renders
   * next to the call-to-action link.
   */
  @Input()
  ctaIcon: string;
  /**
   * Deprecated - this is no longer needed.
   * Determines which type of call to action is rendered.
   * The available values are `link` and `button`.
   */
  @Input()
  ctaType: 'link' | 'button' = 'link';
  /**
   * Deprecated - this is no longer needed.
   * The text content of the call to action.
   */
  @Input()
  ctaText: string;
  /**
   * Deprecated - this is no longer needed.
   * The text that will be applied to the `data-analytics` attribute
   * of the call to action.
   */
  @Input()
  ctaAnalytics: string;
  /**
   * Deprecated - this is no longer needed.
   * The text that will be applied to the `data-analytics` attribute
   * of the link surrounding the image.
   */
  @Input()
  imgLinkAnalytics: string;
  /**
   * Deprecated - this is no longer needed.
   * The text that will be applied to the `data-analytics` attribute
   * of the link surrounding the icon.
   */
  @Input()
  iconLinkAnalytics: string;
  /**
   * Deprecated - this is no longer needed.
   * The `href` value for the call to action.
   */
  @Input()
  ctaHref: string;
  /**
   * Deprecated - this is no longer needed.
   * The `routerLink` value for the call to action.
   */
  @Input()
  ctaRouterLink: string;
  /**
   * Expects a space separated string
   * of classes to be added to the
   * component.
   */
  @Input()
  additionalClasses: string;
  /**
   * Deprecated - this is no longer needed.
   * Expects a space separated string
   * of classes to be added to the
   * call to action.
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
   * TODO: Remove as part of Issue #3897.
   */
  getClassesCta(): string {
    const ctaClassArray: string[] = [];

    if (this.ctaType === 'button') {
      ctaClassArray.push('sprk-c-Button');
    } else {
      ctaClassArray.push('sprk-b-Link');
      if (this.ctaIcon) {
        ctaClassArray.push('sprk-b-Link--simple');
        ctaClassArray.push('sprk-b-Link--has-icon');
      }
    }

    if (this.additionalCtaClasses) {
      this.additionalCtaClasses.split(' ').forEach((className) => {
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

    if (this.isStandout) {
      classArray.push('sprk-c-Card--standout');
    }

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }
}
