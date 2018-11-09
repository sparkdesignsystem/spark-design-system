import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sprk-footer',
  template: `
  <footer [ngClass]="getClasses()" role="contentinfo" [attr.data-id]="idString">
    <div class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium sprk-o-Stack--split@m">
      <div *ngIf="globalSection" class="sprk-o-Stack__item sprk-o-Stack__item--fourth@m sprk-o-Stack sprk-o-Stack--large sprk-o-Box">
        <h3 class="sprk-o-Stack__item sprk-b-TypeBodyOne sprk-u-TextTransform--uppercase">
          {{ globalHeading }}
        </h3>

        <div *ngFor="let item in globalLinks" class="sprk-o-Stack__item">
          <a class="sprk-b-Link sprk-b-Link--plain sprk-u-Display--block" href="{{ item.href }}" [attr.data-analytics]="{{ item.analytics }}">
            <sprk-icon iconType="{{ item.icon }}" additionalClasses="sprk-c-Icon--current-color sprk-c-Icon--xl" idString="icon-{{ item.icon }}-1"></sprk-icon>
            <span class="sprk-u-ScreenReaderText">{{ item.icon }}</span>
          </a>

          <p class="sprk-b-TypeBodyTwo">
            {{ item.text }}
          </p>
        </div>
      </div>

      <div class="sprk-o-Stack__item sprk-o-Stack__item--three-fourths@m sprk-o-Stack sprk-o-Stack--medium">
        <div class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--split@m">
          <div class="sprk-o-Stack__item sprk-o-Stack__item--third@m sprk-o-Box sprk-o-Stack sprk-o-Stack--large">
            <h3 class="sprk-o-Stack__item sprk-b-TypeBodyOne sprk-u-TextTransform--uppercase">
              SITE LINKS
            </h3>

            <ul class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium sprk-b-List sprk-b-List--bare">
              <li class="sprk-o-Stack__item">
                <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone sprk-u-FontWeight--normal" href="#nogo">
                  About This
                </a>
              </li>

              <li class="sprk-o-Stack__item">
                <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone sprk-u-FontWeight--normal" href="#nogo">
                  About This Other Thing
                </a>
              </li>

              <li class="sprk-o-Stack__item">
                <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone sprk-u-FontWeight--normal" href="#nogo">
                  About That
                </a>
              </li>

              <li class="sprk-o-Stack__item">
                <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone sprk-u-FontWeight--normal" href="#nogo">
                  Link Item
                </a>
              </li>

              <li class="sprk-o-Stack__item">
                <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone sprk-u-FontWeight--normal" href="#nogo">
                  This Link Item
                </a>
              </li>
            </ul>
          </div>

          <div class="sprk-o-Stack__item sprk-o-Stack__item--third@m sprk-o-Box sprk-o-Stack sprk-o-Stack--large">
            <h3 class="sprk-o-Stack__item sprk-b-TypeBodyOne sprk-u-TextTransform--uppercase">
              LEARN MORE
            </h3>

            <ul class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium sprk-b-List sprk-b-List--bare">
              <li class="sprk-o-Stack__item">
                <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone sprk-u-FontWeight--normal" href="#nogo">
                  About This Other Thing
                </a>
              </li>

              <li class="sprk-o-Stack__item">
                <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone sprk-u-FontWeight--normal" href="#nogo">
                  About This
                </a>
              </li>

              <li class="sprk-o-Stack__item">
                <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone sprk-u-FontWeight--normal" href="#nogo">
                  About That
                </a>
              </li>

              <li class="sprk-o-Stack__item">
                <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone sprk-u-FontWeight--normal" href="#nogo">
                  Link Item
                </a>
              </li>
            </ul>
          </div>

          <div class="sprk-o-Stack__item sprk-o-Stack__item--third@m sprk-o-Box sprk-o-Stack sprk-o-Stack--large">
            <h3 class="sprk-o-Stack__item sprk-b-TypeBodyOne sprk-u-TextTransform--uppercase">
              SUPPORT
            </h3>

            <ul class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium sprk-b-List sprk-b-List--bare">
              <li class="sprk-o-Stack__item">
                <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone sprk-u-FontWeight--normal" href="#nogo">
                  Share Your Screen
                </a>
              </li>
              <li class="sprk-o-Stack__item">
                <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone sprk-u-FontWeight--normal" href="#nogo">
                  Opt Out
                </a>
              </li>
              <li class="sprk-o-Stack__item">
                <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone sprk-u-FontWeight--normal" href="#nogo">
                  Disclosures and Other Things
                </a>
              </li>
              <li class="sprk-o-Stack__item">
                <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone sprk-u-FontWeight--normal" href="#nogo">
                  We Want Your Feedback
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
            <ul class="sprk-o-Stack__item sprk-o-Stack__item--flex@m sprk-o-Stack sprk-o-Stack--split@xs sprk-o-Stack--medium sprk-b-List sprk-b-List--bare">
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

            <ul class="sprk-o-Stack__item sprk-o-Stack__item--flex@m sprk-o-Stack sprk-o-Stack--end-row@m sprk-o-Stack--split@xs sprk-o-Stack--medium sprk-b-List sprk-b-List--bare">
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
  globalSection: boolean;
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
    console.log(`Boolean attribute is ${this.globalSection}`);
  }
}
