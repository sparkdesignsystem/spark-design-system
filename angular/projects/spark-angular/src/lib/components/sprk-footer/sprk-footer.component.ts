import { Component, Input } from '@angular/core';
import {
  ISprkFooterGlobalLink,
  ISprkFooterLocalLinkColumn,
  ISprkFooterSocialLink,
  ISprkFooterAward,
  ISprkFooterBadgeLink,
  ISprkDisclaimerText,
  ISprkDisclaimerToggle,
} from './sprk-footer.interfaces';

@Component({
  selector: 'sprk-footer',
  template: `
    <div class="sprk-o-Box sprk-o-Box--large sprk-c-Footer">
      <footer
        [ngClass]="getClasses()"
        role="contentinfo"
        [attr.data-id]="idString"
      >
        <div
          class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium sprk-o-Stack--split@m"
        >
          <div
            *ngIf="globalLinks"
            class="
              sprk-o-Stack__item
              sprk-o-Stack__item--three-tenths@m
              sprk-o-Stack
              sprk-o-Stack--misc-b
              sprk-c-Footer__global-links
            "
          >
            <h3
              class="sprk-o-Stack__item sprk-b-TypeBodyOne sprk-c-Footer__text"
            >
              {{ globalHeading }}
            </h3>

            <div
              *ngFor="let item of globalLinks"
              class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium"
            >
              <div class="sprk-o-Stack__item">
                <a
                  *ngIf="!item.routerLink"
                  sprkLink
                  variant="plain"
                  href="{{ item.href }}"
                  analyticsString="{{ item.analytics || item.analyticsString }}"
                >
                  <sprk-icon
                    *ngIf="item.icon"
                    iconType="{{ item.icon }}"
                    additionalClasses="{{ item.iconCSS }} sprk-c-Footer__icon"
                  ></sprk-icon>
                  <span *ngIf="item.icon" class="sprk-u-ScreenReaderText">{{
                    item.iconScreenReaderText
                  }}</span>
                  <img
                    *ngIf="item.imgSrc"
                    src="{{ item.imgSrc }}"
                    alt="{{ item.imgAlt }}"
                    class="{{ item.imgCSS }}"
                  />
                </a>
                <a
                  *ngIf="item.routerLink"
                  sprkLink
                  variant="plain"
                  [routerLink]="item.routerLink"
                  analyticsString="{{ item.analytics || item.analyticsString }}"
                >
                  <sprk-icon
                    *ngIf="item.icon"
                    iconType="{{ item.icon }}"
                    additionalClasses="{{ item.iconCSS }} sprk-c-Footer__icon"
                  ></sprk-icon>
                  <span *ngIf="item.icon" class="sprk-u-ScreenReaderText">{{
                    item.iconScreenReaderText
                  }}</span>
                  <img
                    *ngIf="item.imgSrc"
                    src="{{ item.imgSrc }}"
                    alt="{{ item.imgAlt }}"
                    class="{{ item.imgCSS }}"
                  />
                </a>
              </div>

              <p
                class="sprk-o-Stack__item sprk-b-TypeBodyFour sprk-c-Footer__text"
              >
                {{ item.text }}
              </p>
            </div>
          </div>

          <div
            class="sprk-o-Stack__item sprk-o-Stack__item--seven-tenths@m sprk-o-Stack sprk-o-Stack--medium"
          >
            <div
              *ngIf="localLinks"
              class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium sprk-o-Stack--split@m"
            >
              <div
                *ngFor="let item of localLinks"
                class="
                  sprk-o-Stack__item
                  sprk-o-Stack__item--third@m
                  sprk-c-Footer__local-links
                  sprk-o-Stack
                  sprk-o-Stack--large
                "
              >
                <h3
                  class="sprk-o-Stack__item sprk-b-TypeBodyOne sprk-c-Footer__text"
                >
                  {{ item.heading }}
                </h3>

                <ul
                  class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--misc-a sprk-b-List sprk-b-List--bare"
                >
                  <li
                    class="sprk-o-Stack__item"
                    *ngFor="let link of item.links"
                  >
                    <a
                      *ngIf="!link.routerLink"
                      sprkLink
                      variant="light"
                      class="sprk-c-Footer__link"
                      href="{{ link.href }}"
                      analyticsString="{{
                        link.analyticsString || link.analytics
                      }}"
                    >
                      {{ link.text }}
                    </a>
                    <a
                      *ngIf="link.routerLink"
                      sprkLink
                      variant="light"
                      class="sprk-c-Footer__link"
                      [routerLink]="link.routerLink"
                      analyticsString="{{
                        link.analyticsString || link.analytics
                      }}"
                    >
                      {{ link.text }}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div
              *ngIf="socialLinks"
              class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--large sprk-o-Box"
            >
              <h3
                class="sprk-o-Stack__item sprk-b-TypeBodyOne sprk-c-Footer__text"
              >
                {{ connectHeading }}
              </h3>

              <div
                class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--large sprk-o-Stack--split@m"
              >
                <ul
                  *ngIf="socialLinks"
                  class="
                    sprk-o-Stack__item
                    sprk-o-Stack__item--flex@m
                    sprk-o-Stack
                    sprk-o-Stack--split@xxs
                    sprk-o-Stack--medium
                    sprk-b-List
                    sprk-b-List--bare"
                >
                  <li
                    *ngFor="let item of socialLinks"
                    class="sprk-o-Stack__item"
                  >
                    <a
                      *ngIf="!item.routerLink"
                      sprkLink
                      variant="plain"
                      href="{{ item.href }}"
                      analyticsString="{{
                        item.analytics || item.analyticsString
                      }}"
                    >
                      <sprk-icon
                        *ngIf="item.icon"
                        iconType="{{ item.icon }}"
                        additionalClasses="{{
                          item.iconCSS
                        }} sprk-c-Footer__icon"
                      ></sprk-icon>
                      <span *ngIf="item.icon" class="sprk-u-ScreenReaderText">{{
                        item.iconScreenReaderText
                      }}</span>
                    </a>
                    <a
                      *ngIf="item.routerLink"
                      sprkLink
                      variant="plain"
                      [routerLink]="item.routerLink"
                      analyticsString="{{
                        item.analytics || item.analyticsString
                      }}"
                    >
                      <sprk-icon
                        *ngIf="item.icon"
                        iconType="{{ item.icon }}"
                        additionalClasses="{{
                          item.iconCSS
                        }} sprk-c-Footer__icon"
                      ></sprk-icon>
                      <span *ngIf="item.icon" class="sprk-u-ScreenReaderText">{{
                        item.iconScreenReaderText
                      }}</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <ng-content select="[appStoreLinksSlot]"></ng-content>
          </div>
        </div>
        <span
          sprkDivider
          class="sprk-c-Footer__divider"
          data-id="divider-1"
        ></span>

        <div
          class="
            sprk-o-Stack__item
            sprk-o-Stack
            sprk-o-Stack--misc-b
            sprk-c-Footer__awards
          "
        >
          <div
            *ngIf="awards"
            class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--large"
          >
            <h3
              class="sprk-o-Stack__item sprk-b-TypeBodyOne sprk-c-Footer__text"
            >
              {{ awardsHeading }}
            </h3>

            <div
              class="
                sprk-o-Stack__item
                sprk-o-Stack
                sprk-o-Stack--medium
                sprk-o-Stack--split@s
                sprk-c-Footer__awards-media
              "
            >
              <div class="sprk-o-Stack__item" *ngFor="let award of awards">
                <a
                  *ngIf="!award.routerLink"
                  sprkLink
                  variant="plain"
                  class="sprk-o-Stack__item"
                  href="{{ award.href }}"
                  analyticsString="{{
                    award.analytics || award.analyticsString
                  }}"
                >
                  <img
                    *ngIf="award.imgSrc"
                    src="{{ award.imgSrc }}"
                    alt="{{ award.imgAlt }}"
                    class="{{ award.imgCSS }}"
                  />
                </a>
                <a
                  *ngIf="award.routerLink"
                  sprkLink
                  variant="plain"
                  class="sprk-o-Stack__item"
                  [routerLink]="award.routerLink"
                  analyticsString="{{
                    award.analytics || award.analyticsString
                  }}"
                >
                  <img
                    *ngIf="award.imgSrc"
                    src="{{ award.imgSrc }}"
                    alt="{{ award.imgAlt }}"
                    class="{{ award.imgCSS }}"
                  />
                </a>
              </div>
            </div>

            <div
              *ngFor="let toggle of disclaimerToggle"
              class="sprk-o-Stack__item"
            >
              <sprk-toggle
                title="{{ toggle.title }}"
                analyticsString="{{
                  toggle.analytics || toggle.analyticsString
                }}"
                iconClass="sprk-c-Footer__icon"
                titleFontClass="sprk-b-TypeBodyFour sprk-c-Footer__trigger"
              >
                <p class="sprk-b-TypeBodyFour sprk-c-Footer__text">
                  {{ toggle.body }}
                </p>
              </sprk-toggle>
            </div>
          </div>

          <div
            *ngIf="disclaimerText"
            class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--large"
          >
            <p
              *ngFor="let disclaimer of disclaimerText"
              class="sprk-o-Stack__item sprk-b-TypeBodyFour sprk-c-Footer__text"
            >
              {{ disclaimer.text }}
            </p>
            <ng-content select="[additional-disclaimer-slot]"></ng-content>
          </div>
          <ul
            *ngIf="badgeLinks"
            class="
              sprk-o-Stack__item
              sprk-o-Stack__item--flex@m
              sprk-o-Stack
              sprk-o-Stack--split@xxs
              sprk-o-Stack--medium
              sprk-b-List
              sprk-b-List--bare"
          >
            <li *ngFor="let item of badgeLinks" class="sprk-o-Stack__item">
              <a
                *ngIf="!item.routerLink"
                sprkLink
                variant="plain"
                href="{{ item.href }}"
                analyticsString="{{ item.analytics || item.analyticsString }}"
              >
                <sprk-icon
                  *ngIf="item.icon"
                  iconType="{{ item.icon }}"
                  additionalClasses="{{ item.iconCSS }} sprk-c-Footer__icon"
                ></sprk-icon>
                <span *ngIf="item.icon" class="sprk-u-ScreenReaderText">{{
                  item.iconScreenReaderText
                }}</span>
              </a>
              <a
                *ngIf="item.routerLink"
                sprkLink
                variant="plain"
                [routerLink]="item.routerLink"
                analyticsString="{{ item.analytics || item.analyticsString }}"
              >
                <sprk-icon
                  *ngIf="item.icon"
                  iconType="{{ item.icon }}"
                  additionalClasses="{{ item.iconCSS }} sprk-c-Footer__icon"
                ></sprk-icon>
                <span *ngIf="item.icon" class="sprk-u-ScreenReaderText">{{
                  item.iconScreenReaderText
                }}</span>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  `,
})
export class SprkFooterComponent {
  /**
   * Expects a space separated string
   * of classes to be added to the
   * component.
   */
  @Input()
  additionalClasses: string;
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
   * The heading for the "Global" section.
   */
  @Input()
  globalHeading: string;
  /**
   * The heading for the "Awards" section.
   */
  @Input()
  awardsHeading: string;
  /**
   * The heading for the "Connect With Us" section.
   */
  @Input()
  connectHeading: string;
  /**
   * Array of
   * [ISprkFooterGlobalLink](https://github.com/sparkdesignsystem/spark-design-system/blob/main/angular/projects/spark-angular/src/lib/components/sprk-footer/sprk-footer.interfaces.ts)
   *  used to build the
   * links in the "Global" section.
   */
  @Input()
  globalLinks: ISprkFooterGlobalLink[];
  /**
   * Array of
   * [ISprkFooterLocalLinkColumn](https://github.com/sparkdesignsystem/spark-design-system/blob/main/angular/projects/spark-angular/src/lib/components/sprk-footer/sprk-footer.interfaces.ts)
   *  used to build
   * the columns of links
   * in the "Site Links" section.
   */
  @Input()
  localLinks: ISprkFooterLocalLinkColumn[];
  /**
   * Array of
   * [ISprkFooterSocialLink](https://github.com/sparkdesignsystem/spark-design-system/blob/main/angular/projects/spark-angular/src/lib/components/sprk-footer/sprk-footer.interfaces.ts)
   *  used to build the
   * icon links in the "Connect With Us section".
   */
  @Input()
  socialLinks: ISprkFooterSocialLink[];
  /**
   * Array of
   * [ISprkFooterAward](https://github.com/sparkdesignsystem/spark-design-system/blob/main/angular/projects/spark-angular/src/lib/components/sprk-footer/sprk-footer.interfaces.ts)
   *  used to build the
   * awards in the "Awards" section.
   */
  @Input()
  awards: ISprkFooterAward[];
  /**
   * Array of
   * [ISprkFooterBadgeLink](https://github.com/sparkdesignsystem/spark-design-system/blob/main/angular/projects/spark-angular/src/lib/components/sprk-footer/sprk-footer.interfaces.ts)
   *  used to build the
   * icon links in the icon
   * section in the bottom
   * of the Footer.
   */
  @Input()
  badgeLinks: ISprkFooterBadgeLink[];
  /**
   * Array of
   * [ISprkDisclaimerText](https://github.com/sparkdesignsystem/spark-design-system/blob/main/angular/projects/spark-angular/src/lib/components/sprk-footer/sprk-footer.interfaces.ts)
   *  used to build disclaimer text in the
   * of the Footer.
   */
  @Input()
  disclaimerText: ISprkDisclaimerText[];
  /**
   * Array of
   * [ISprkDisclaimerToggle](https://github.com/sparkdesignsystem/spark-design-system/blob/main/angular/projects/spark-angular/src/lib/components/sprk-footer/sprk-footer.interfaces.ts)
   *  used to build
   * the disclamer toggle(s) in
   * the the Footer.
   */
  @Input()
  disclaimerToggle: ISprkDisclaimerToggle[];

  /**
   * @ignore
   */
  getClasses(): string {
    const classArray: string[] = [
      'sprk-o-CenteredColumn sprk-o-Stack sprk-o-Stack--misc-b sprk-c-Footer',
    ];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }
}
