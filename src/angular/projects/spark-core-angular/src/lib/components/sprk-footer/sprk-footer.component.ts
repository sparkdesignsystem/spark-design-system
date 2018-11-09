import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sprk-footer',
  template: `
  <footer [ngClass]="getClasses()" role="contentinfo" [attr.data-id]="idString">
    <div class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium sprk-o-Stack--split@m">
      <div *ngIf="globalLinks" class="sprk-o-Stack__item sprk-o-Stack__item--fourth@m sprk-o-Stack sprk-o-Stack--large sprk-o-Box">
        <h3 class="sprk-o-Stack__item sprk-b-TypeBodyOne sprk-u-TextTransform--uppercase">
          {{ globalHeading }}
        </h3>

        <div *ngFor="let item of globalLinks" class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium">
          <a class="sprk-o-Stack__item sprk-b-Link sprk-b-Link--plain" href="{{ item.href }}" attr.data-analytics="{{ item.analytics }}">
            <sprk-icon *ngIf="item.icon" iconType="{{ item.icon }}" additionalClasses="{{ item.iconCSS }}" idString="icon-{{ item.icon }}-1"></sprk-icon>
            <span *ngIf="item.icon" class="sprk-u-ScreenReaderText">{{ item.iconScreenReaderText }}</span>
            <img *ngIf="item.imgSrc" src="{{ item.imgSrc }}" alt="{{ item.imgAlt }}" class="{{ item.imgCSS }}">
          </a>

          <p class="sprk-o-Stack__item sprk-b-TypeBodyTwo">
            {{ item.text }}
          </p>
        </div>
      </div>

      <div class="sprk-o-Stack__item sprk-o-Stack__item--three-fourths@m sprk-o-Stack sprk-o-Stack--medium">
        <div *ngIf="localLinks" class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--split@m">
          <div *ngFor="let item of localLinks" class="sprk-o-Stack__item sprk-o-Stack__item--third@m sprk-o-Box sprk-o-Stack sprk-o-Stack--large">
            <h3 class="sprk-o-Stack__item sprk-b-TypeBodyOne sprk-u-TextTransform--uppercase">
              {{ item.heading }}
            </h3>

            <ul class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium sprk-b-List sprk-b-List--bare">
              <li class="sprk-o-Stack__item" *ngFor="let link of item.links">
                <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone sprk-u-FontWeight--normal" href="{{ link.href }}">
                  {{ link.text }}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--large sprk-o-Box">
          <h3 class="sprk-o-Stack__item sprk-b-TypeBodyOne">
            CONNECT WITH US
          </h3>

          <div class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium sprk-o-Stack--split@m">
            <ul class="sprk-o-Stack__item sprk-o-Stack__item--flex@m sprk-o-Stack sprk-o-Stack--split@xxs sprk-o-Stack--medium sprk-b-List sprk-b-List--bare">
              <li class="sprk-o-Stack__item">
                <a class="sprk-b-Link sprk-b-Link--plain" href="#">
                  <sprk-icon iconType="facebook" additionalClasses="sprk-c-Icon--current-color sprk-c-Icon--l" idString="icon-facebook-1"></sprk-icon>
                  <span class="sprk-u-ScreenReaderText">Facebook</span>
                </a>
              </li>

              <li class="sprk-o-Stack__item">
                <a class="sprk-b-Link sprk-b-Link--plain" href="#">
                  <sprk-icon iconType="instagram" additionalClasses="sprk-c-Icon--current-color sprk-c-Icon--l" idString="icon-instagram-1"></sprk-icon>

                  <span class="sprk-u-ScreenReaderText">Instagram</span>
                </a>
              </li>

              <li class="sprk-o-Stack__item">
                <a class="sprk-b-Link sprk-b-Link--plain" href="#">
                  <sprk-icon iconType="twitter" additionalClasses="sprk-c-Icon--current-color sprk-c-Icon--l" idString="icon-twitter-1"></sprk-icon>

                  <span class="sprk-u-ScreenReaderText">Twitter</span>
                </a>
              </li>

              <li class="sprk-o-Stack__item">
                <a class="sprk-b-Link sprk-b-Link--plain" href="#">
                  <sprk-icon iconType="youtube" additionalClasses="sprk-c-Icon--current-color sprk-c-Icon--l" idString="icon-youtube-1"></sprk-icon>

                  <span class="sprk-u-ScreenReaderText">Youtube</span>
                </a>
              </li>
            </ul>

            <ul class="sprk-o-Stack__item sprk-o-Stack__item--flex@m sprk-o-Stack sprk-o-Stack--end-row@m sprk-o-Stack--split@xxs sprk-o-Stack--medium sprk-b-List sprk-b-List--bare">
              <li class="sprk-o-Stack__item">
                <a class="sprk-b-Link sprk-b-Link--plain" href="#">
                  <sprk-icon iconType="townhouse" additionalClasses="sprk-c-Icon--current-color sprk-c-Icon--l" idString="icon-townhouse-1"></sprk-icon>

                  <span class="sprk-u-ScreenReaderText">Townhouse</span>
                </a>
              </li>

              <li class="sprk-o-Stack__item">
                <a class="sprk-b-Link sprk-b-Link--plain" href="#">
                  <sprk-icon iconType="townhouse" additionalClasses="sprk-c-Icon--current-color sprk-c-Icon--l" idString="icon-townhouse-2"></sprk-icon>

                  <span class="sprk-u-ScreenReaderText">Townhouse</span>
                </a>
              </li>

              <li class="sprk-o-Stack__item">
                <a class="sprk-b-Link sprk-b-Link--plain" href="#">
                  <sprk-icon iconType="townhouse" additionalClasses="sprk-c-Icon--current-color sprk-c-Icon--l" idString="icon-townhouse-3"></sprk-icon>

                  <span class="sprk-u-ScreenReaderText">Townhouse</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--large sprk-o-Box">
      <div class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium" data-id="award-1">
        <h3 class="sprk-o-Stack__item sprk-b-TypeBodyOne sprk-u-TextTransform--uppercase">
          Awards
        </h3>

        <div class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium sprk-o-Stack--split@s">
          <a class="sprk-o-Stack__item" href="">
            <div class="drizzle-c-Logo-placeholder"></div>
          </a>

          <a class="sprk-o-Stack__item" href="">
            <div class="drizzle-c-Logo-placeholder"></div>
          </a>
        </div>
      </div>

      <div class="sprk-o-Stack__item">
        <sprk-toggle
          title="My Disclaimer"
          body="This is some copy for the toggle about toggle things."
          analyticsString="My disclaimer Title"
          idString="toggle-1">
        </sprk-toggle>
      </div>

      <p class="sprk-o-Stack__item sprk-b-TypeBodyFour">
        &#42;Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
      </p>

      <p class="sprk-o-Stack__item sprk-b-TypeBodyFour">
        Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        Lorem ipsum dolor sit amet, consectetur.
      </p>

      <p class="sprk-o-Stack__item sprk-b-TypeBodyFour">
        &#42;&#42;Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
      </p>

      <p class="sprk-o-Stack__item sprk-b-TypeBodyFour">
        Lorem ipsum dolor sit amet, consectetur.
      </p>
    </div>
  </footer>
  `
})
export class SparkFooterComponent implements OnInit {
  @Input()
  additionalClasses: string;
  @Input()
  idString: string;
  @Input()
  globalHeading: string;
  @Input()
  globalLinks: object[];
  @Input()
  localLinks: object[];
  @Input()
  connectIcons: object[];
  @Input()
  badgeIcons: object[];

  getClasses(): string {
    const classArray: string[] = ['sprk-o-Stack sprk-o-Stack--medium'];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }

  ngOnInit() {
    // console.log(`Boolean attribute is ${this.globalSection}`);
  }
}
