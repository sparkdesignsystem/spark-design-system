import { Component, Input } from '@angular/core';
import {
  SprkFooterGlobalLink,
  SprkFooterLocalLinkColumn,
  SprkFooterSocialLink,
  SprkFooterAward,
  SprkFooterBadgeLink,
  SprkFooterDisclaimerText,
  SprkFooterDisclaimerToggle
} from './sprk-footer.interfaces';

@Component({
  selector: 'sprk-footer',
  template: `
    <div class="sprk-o-Box sprk-o-Box--large sprk-u-BackgroundColor--gray">
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
            class="sprk-o-Stack__item sprk-o-Stack__item--three-tenths@m sprk-o-Stack sprk-o-Stack--misc-b sprk-o-Box sprk-u-prh"
          >
            <h3 class="sprk-o-Stack__item sprk-b-TypeBodyOne">
              {{ globalHeading }}
            </h3>

            <div
              *ngFor="let item of globalLinks"
              class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium"
            >
              <div class="sprk-o-Stack__item">
                <sprk-link
                  linkType="plain"
                  href="{{ item.href }}"
                  analyticsString="{{ item.analytics || item.analyticsString }}"
                >
                  <sprk-icon
                    *ngIf="item.icon"
                    iconType="{{ item.icon }}"
                    additionalClasses="{{ item.iconCSS }}"
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
                </sprk-link>
              </div>

              <p class="sprk-o-Stack__item sprk-b-TypeBodyFour">
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
                class="sprk-o-Stack__item sprk-o-Stack__item--third@m sprk-o-Box sprk-u-PaddingRight--a sprk-o-Stack sprk-o-Stack--large"
              >
                <h3 class="sprk-o-Stack__item sprk-b-TypeBodyOne">
                  {{ item.heading }}
                </h3>

                <ul
                  class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--misc-a sprk-b-List sprk-b-List--bare"
                >
                  <li
                    class="sprk-o-Stack__item"
                    *ngFor="let link of item.links"
                  >
                    <sprk-link
                      linkType="simple"
                      additionalClasses="sprk-u-FontWeight--normal"
                      href="{{ link.href }}"
                      analyticsString="{{ link.analyticsString || link.analytics }}"
                    >
                      {{ link.text }}
                    </sprk-link>
                  </li>
                </ul>
              </div>
            </div>

            <div
              *ngIf="socialLinks"
              class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--large sprk-o-Box"
            >
              <h3 class="sprk-o-Stack__item sprk-b-TypeBodyOne">
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
                    <sprk-link
                      linkType="plain"
                      href="{{ item.href }}"
                      analyticsString="{{ item.analytics || item.analyticsString }}"
                    >
                      <sprk-icon
                        *ngIf="item.icon"
                        iconType="{{ item.icon }}"
                        additionalClasses="{{ item.iconCSS }}"
                      ></sprk-icon>
                      <span *ngIf="item.icon" class="sprk-u-ScreenReaderText">{{
                        item.iconScreenReaderText
                      }}</span>
                    </sprk-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <span
          class="sprk-c-Divider sprk-u-mvn sprk-u-mhm"
          data-id="divider-1"
        ></span>

        <div
          class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--misc-b sprk-o-Box sprk-u-PaddingTop--b"
        >
          <div
            *ngIf="awards"
            class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--large"
          >
            <h3 class="sprk-o-Stack__item sprk-b-TypeBodyOne">
              {{ awardsHeading }}
            </h3>

            <div
              class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium sprk-o-Stack--split@s sprk-u-mbm"
            >
              <div class="sprk-o-Stack__item" *ngFor="let award of awards">
                <sprk-link
                  additionalClasses="sprk-o-Stack__item"
                  href="{{ award.href }}"
                  analyticsString="{{ award.analytics || award.analyticsString }}"
                >
                  <img
                    *ngIf="award.imgSrc"
                    src="{{ award.imgSrc }}"
                    alt="{{ award.imgAlt }}"
                    class="{{ award.imgCSS }}"
                  />
                </sprk-link>
              </div>
            </div>

            <div
              *ngFor="let toggle of disclaimerToggle"
              class="sprk-o-Stack__item"
            >
              <sprk-toggle
                title="{{ toggle.title }}"
                analyticsString="{{ toggle.analytics || toggle.analyticsString }}"
                iconClass="sprk-c-Icon--stroke-current-color"
                titleFontClass="sprk-b-TypeBodyFour"
              >
                <p class="sprk-b-TypeBodyFour">{{ toggle.body }}</p>
              </sprk-toggle>
            </div>
          </div>

          <div
            *ngIf="disclaimerText"
            class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--large"
          >
            <p
              *ngFor="let disclaimer of disclaimerText"
              class="sprk-o-Stack__item sprk-b-TypeBodyFour"
            >
              {{ disclaimer.text }}
            </p>
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
              <sprk-link
                linkType="plain"
                href="{{ item.href }}"
                analyticsString="{{ item.analytics || item.analyticsString }}"
              >
                <sprk-icon
                  *ngIf="item.icon"
                  iconType="{{ item.icon }}"
                  additionalClasses="{{ item.iconCSS }}"
                ></sprk-icon>
                <span *ngIf="item.icon" class="sprk-u-ScreenReaderText">{{
                  item.iconScreenReaderText
                }}</span>
              </sprk-link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  `
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
   * [SprkFooterGlobalLink](https://github.com/sparkdesignsystem/spark-design-system/tree/master/src/angular/projects/spark-angular/src/lib/components/sprk-footer/sprk-footer.interfaces.ts)
   * used to build the
   * links in the "Global" section.
   */
  @Input()
  globalLinks: SprkFooterGlobalLink[];
  /**
   * Array of
   * [SprkFooterLocalLinkColumn](https://github.com/sparkdesignsystem/spark-design-system/tree/master/src/angular/projects/spark-angular/src/lib/components/sprk-footer/sprk-footer.interfaces.ts)
   * used to build
   * the columns of links
   * in the "Site Links" section.
   */
  @Input()
  localLinks: SprkFooterLocalLinkColumn[];
  /**
   * Array of
   * [SprkFooterSocialLink](https://github.com/sparkdesignsystem/spark-design-system/tree/master/src/angular/projects/spark-angular/src/lib/components/sprk-footer/sprk-footer.interfaces.ts)
   * used to build the
   * icon links in the "Connect With Us section".
   */
  @Input()
  socialLinks: SprkFooterSocialLink[];
  /**
   * Array of
   * [SprkFooterAward](https://github.com/sparkdesignsystem/spark-design-system/tree/master/src/angular/projects/spark-angular/src/lib/components/sprk-footer/sprk-footer.interfaces.ts)
   * used to build the
   * awards in the "Awards" section.
   */
  @Input()
  awards: SprkFooterAward[];
  /**
   * Array of
   * [SprkFooterBadgeLink](https://github.com/sparkdesignsystem/spark-design-system/tree/master/src/angular/projects/spark-angular/src/lib/components/sprk-footer/sprk-footer.interfaces.ts)
   * used to build the
   * icon links in the icon
   * section in the bottom
   * of the Footer.
   */
  @Input()
  badgeLinks: SprkFooterBadgeLink[];
  /**
   * Array of
   * [SprkFooterDisclaimerText](https://github.com/sparkdesignsystem/spark-design-system/tree/master/src/angular/projects/spark-angular/src/lib/components/sprk-footer/sprk-footer.interfaces.ts)
   * used to build disclaimer text in the
   * of the Footer.
   */
  @Input()
  disclaimerText: SprkFooterDisclaimerText[];
  /**
   * Array of
   * [SprkFooterDisclaimerToggle](https://github.com/sparkdesignsystem/spark-design-system/tree/master/src/angular/projects/spark-angular/src/lib/components/sprk-footer/sprk-footer.interfaces.ts)
   * used to build
   * the disclamer toggle(s) in
   * the the Footer.
   */
  @Input()
  disclaimerToggle: SprkFooterDisclaimerToggle[];

  /**
   * @ignore
   */
  getClasses(): string {
    const classArray: string[] = [
      'sprk-o-CenteredColumn sprk-o-Stack sprk-o-Stack--misc-b'
    ];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }
}
