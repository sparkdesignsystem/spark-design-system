import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-footer',
  template: `
  <footer [ngClass]="getClasses()" role="contentinfo" [attr.data-id]="idString">
    <div class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium sprk-o-Stack--split@m">
      <div
        *ngIf="globalLinks"
        class="sprk-o-Stack__item sprk-o-Stack__item--fourth@m sprk-o-Stack sprk-o-Stack--large sprk-o-Box">
        <h3 class="sprk-o-Stack__item sprk-b-TypeBodyOne sprk-u-TextTransform--uppercase">
          {{ globalHeading }}
        </h3>

        <div *ngFor="let item of globalLinks" class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium">
          <a
            class="sprk-o-Stack__item sprk-b-Link sprk-b-Link--plain"
            href="{{ item.href }}"
            attr.data-analytics="{{ item.analytics }}">
            <sprk-icon
              *ngIf="item.icon"
              iconType="{{ item.icon }}"
              additionalClasses="{{ item.iconCSS }}"></sprk-icon>
            <span *ngIf="item.icon" class="sprk-u-ScreenReaderText">{{ item.iconScreenReaderText }}</span>
            <img
              *ngIf="item.imgSrc"
              src="{{ item.imgSrc }}"
              alt="{{ item.imgAlt }}"
              class="{{ item.imgCSS }}">
          </a>

          <p class="sprk-o-Stack__item sprk-b-TypeBodyTwo">
            {{ item.text }}
          </p>
        </div>
      </div>

      <div class="sprk-o-Stack__item sprk-o-Stack__item--three-fourths@m sprk-o-Stack sprk-o-Stack--medium">
        <div
          *ngIf="localLinks"
          class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--split@m">
          <div
            *ngFor="let item of localLinks"
            class="sprk-o-Stack__item sprk-o-Stack__item--third@m sprk-o-Box sprk-o-Stack sprk-o-Stack--large">
            <h3
              class="sprk-o-Stack__item sprk-b-TypeBodyOne sprk-u-TextTransform--uppercase">
              {{ item.heading }}
            </h3>

            <ul class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium sprk-b-List sprk-b-List--bare">
              <li class="sprk-o-Stack__item" *ngFor="let link of item.links">
                <a
                  class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone sprk-u-FontWeight--normal"
                  href="{{ link.href }}">
                  {{ link.text }}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--large sprk-o-Box">
          <h3 *ngIf="socialLinks" class="sprk-o-Stack__item sprk-b-TypeBodyOne sprk-u-TextTransform--uppercase">
            {{ connectHeading }}
          </h3>

          <div
            class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium sprk-o-Stack--split@m">
            <ul
              *ngIf="socialLinks"
              class="sprk-o-Stack__item sprk-o-Stack__item--flex@m sprk-o-Stack sprk-o-Stack--split@xxs sprk-o-Stack--medium sprk-b-List sprk-b-List--bare">
              <li
                *ngFor="let item of socialLinks"
                class="sprk-o-Stack__item">
                <a
                  class="sprk-b-Link sprk-b-Link--plain"
                  href="{{ item.href }}"
                  attr.data-analytics="{{ item.analytics }}">
                  <sprk-icon
                    *ngIf="item.icon"
                    iconType="{{ item.icon }}"
                    additionalClasses="{{ item.iconCSS }}"></sprk-icon>
                  <span *ngIf="item.icon" class="sprk-u-ScreenReaderText">{{ item.iconScreenReaderText }}</span>
                </a>
              </li>
            </ul>

            <ul
              *ngIf="badgeLinks"
              class="sprk-o-Stack__item sprk-o-Stack__item--flex@m sprk-o-Stack sprk-o-Stack--end-row@m sprk-o-Stack--split@xxs sprk-o-Stack--medium sprk-b-List sprk-b-List--bare">
              <li
                *ngFor="let item of badgeLinks"
                class="sprk-o-Stack__item">
                <a
                  class="sprk-b-Link sprk-b-Link--plain"
                  href="{{ item.href }}"
                  attr.data-analytics="{{ item.analytics }}">
                  <sprk-icon
                    *ngIf="item.icon"
                    iconType="{{ item.icon }}"
                    additionalClasses="{{ item.iconCSS }}"></sprk-icon>
                  <span *ngIf="item.icon" class="sprk-u-ScreenReaderText">{{ item.iconScreenReaderText }}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div
      class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--large sprk-o-Box">
      <div *ngIf="awards" class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium">
        <h3 class="sprk-o-Stack__item sprk-b-TypeBodyOne sprk-u-TextTransform--uppercase">
          {{ awardsHeading }}
        </h3>

        <div
          class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium sprk-o-Stack--split@s">
          <a
            *ngFor="let award of awards"
            class="sprk-o-Stack__item"
            href="{{ award.href }}"
            attr.data-analytics="{{ award.analytics }}">
            <img
              *ngIf="award.imgSrc"
              src="{{ award.imgSrc }}"
              alt="{{ award.imgAlt }}"
              class="{{ award.imgCSS }}">
          </a>
        </div>
      </div>

      <div *ngFor="let toggle of disclaimerToggle" class="sprk-o-Stack__item">
        <sprk-toggle
          title="{{ toggle.title }}"
          body="{{ toggle.body }}"
          analyticsString="{{ toggle.analytics }}">
        </sprk-toggle>
      </div>

      <div *ngIf="disclaimerText" class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--large">
        <p *ngFor="let disclaimer of disclaimerText" class="sprk-o-Stack__item sprk-b-TypeBodyFour">
          {{ disclaimer.text }}
        </p>
      </div>
    </div>
  </footer>
  `
})
export class SparkFooterComponent {
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
    const classArray: string[] = ['sprk-o-Stack sprk-o-Stack--medium'];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }
}
