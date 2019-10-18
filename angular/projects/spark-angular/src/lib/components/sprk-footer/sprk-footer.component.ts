import { Component, Input } from '@angular/core';

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
                  analyticsString="{{ item.analytics }}"
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
                      analyticsString="{{ item.analytics }}"
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
                  analyticsString="{{ award.analytics }}"
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
                analyticsString="{{ toggle.analytics }}"
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
                analyticsString="{{ item.analytics }}"
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
  @Input()
  additionalClasses: string;
  @Input()
  idString: string;
  @Input()
  globalHeading: string;
  @Input()
  awardsHeading: string;
  @Input()
  connectHeading: string;
  @Input()
  globalLinks: object[];
  @Input()
  localLinks: object[];
  @Input()
  socialLinks: object[];
  @Input()
  awards: object[];
  @Input()
  badgeLinks: object[];
  @Input()
  disclaimerText: object[];
  @Input()
  disclaimerToggle: object[];

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
