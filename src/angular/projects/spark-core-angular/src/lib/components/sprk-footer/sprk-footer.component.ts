import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-footer',
  template: `
    <footer [ngClass]="getClasses()" role="contentinfo">
      <div class="sprk-o-Stack__item sprk-o-Box">
        <ul class="sprk-o-HorizontalList sprk-o-HorizontalList--spacing-medium sprk-o-HorizontalList--delimited-split-distribution">
          <li data-delimiter="|"><a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#nogo">Item 1</a></li>
          <li data-delimiter="|"><a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#nogo">Item 2</a></li>
          <li data-delimiter="|"><a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#nogo">Item 3</a></li>
          <li data-delimiter="|"><a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#nogo">Item 4</a></li>
          <li><a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#nogo">Item 5</a></li>
        </ul>
      </div>

      <div class="sprk-o-Stack sprk-o-Stack--split@xs sprk-o-Stack__item">
        <div class="sprk-o-Box sprk-o-Stack__item sprk-o-Stack__item--three-fifths@xs">
          <ul class="sprk-b-List sprk-b-List--bare sprk-o-Stack sprk-o-Stack--split@s sprk-o-Stack--medium">
            <li class="sprk-o-Stack__item">
              <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#">
                <svg class="sprk-c-Icon sprk-c-Icon--l sprk-u-mrs" viewBox="0 0 512 512">
                  <use xlink:href="#paper-plane" />
                </svg>
                Provide Feedback
              </a>
            </li>

            <li class="sprk-o-Stack__item">
              <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#">
                <svg class="sprk-c-Icon sprk-c-Icon--l sprk-u-mrs" viewBox="0 0 512 512">
                  <use xlink:href="#computer-screen" />
                </svg>
                Share Your Screen
              </a>
            </li>
          </ul>
        </div>

        <div class="sprk-o-Box sprk-o-Stack__item sprk-o-Stack__item--two-fifths@xs">
          <ul class="sprk-b-List sprk-b-List--bare sprk-o-Stack sprk-o-Stack--split@xs sprk-o-Stack--medium sprk-o-Stack--end-row">
            <li class="sprk-o-Stack__item">
              <a class="sprk-b-Link sprk-b-Link--muted" href="#">
                <svg class="sprk-c-Icon sprk-c-Icon--l" viewBox="0 0 448 512">
                  <use xlink:href="#facebook" />
                </svg>
              </a>
            </li>

            <li class="sprk-o-Stack__item">
              <a class="sprk-b-Link sprk-b-Link--muted" href="#">
                <svg class="sprk-c-Icon sprk-c-Icon--l" viewBox="0 0 448 512">
                  <use xlink:href="#instagram" />
                </svg>
              </a>
            </li>

            <li class="sprk-o-Stack__item">
              <a class="sprk-b-Link sprk-b-Link--muted" href="#">
                <svg class="sprk-c-Icon sprk-c-Icon--l" viewBox="0 0 448 512">
                  <use xlink:href="#twitter" />
                </svg>
              </a>
            </li>

            <li class="sprk-o-Stack__item">
              <a class="sprk-b-Link sprk-b-Link--muted" href="#">
                <svg class="sprk-c-Icon sprk-c-Icon--l" viewBox="0 0 448 512">
                  <use xlink:href="#youtube" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="sprk-u-mlm sprk-u-mrm sprk-c-Divider"></div>

      <div class="sprk-o-Stack sprk-o-Stack--split@s sprk-o-Stack__item">
        <div class="sprk-o-Box sprk-o-Stack sprk-o-Stack--large sprk-o-Stack__item sprk-o-Stack__item--three-fifths@s">
          <p class="sprk-o-Stack__item sprk-b-TypeBodyTwo">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in laoreet ante,
            non feugiat neque. Suspendisse et ipsum leo. Quisque non consectetur justo.
          </p>

          <sprk-toggle
            title="My Disclaimer"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in laoreet ante,
              non feugiat neque. Suspendisse et ipsum leo. Quisque non consectetur justo."
            analyticsString="My disclaimer Title"
            sprkStackItem>
          </sprk-toggle>
        </div>

        <div class="sprk-o-Box sprk-o-Stack__item sprk-o-Stack__item--two-fifths@s">
          <ul class="sprk-b-List sprk-b-List--bare sprk-o-Stack sprk-o-Stack--split@s sprk-o-Stack--medium sprk-o-Stack--end-row">
            <li class="sprk-o-Stack__item">
              <a href="#">
                <div class="drizzle-c-Logo-placeholder drizzle-c-Logo-placeholder--small"></div>
              </a>
            </li>

            <li class="sprk-o-Stack__item">
              <a href="#">
                <div class="drizzle-c-Logo-placeholder drizzle-c-Logo-placeholder--small"></div>
              </a>
            </li>

            <li class="sprk-o-Stack__item">
              <a href="#">
                <div class="drizzle-c-Logo-placeholder drizzle-c-Logo-placeholder--small"></div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  `
})
export class SparkFooterComponent {
  @Input()
  splitAt: string;
  @Input()
  additionalClassesBadges: string;
  @Input()
  additionalClasses: string;
  @Input()
  badges: object;
  @Input()
  navLinks: object;
  @Input()
  socialLinks: object;
  @Input()
  feedbackLinks: object;
  @Input()
  siteLinkCols: object;
  @Input()
  disclaimer: string;
  @Input()
  disclaimerTitle: string;
  @Input()
  disclaimerCopy: string;
  @Input()
  analyticsStringDisclaimer: string;

  getClasses(): string {
    const classArray: string[] = ['sprk-o-Stack'];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }

  getClassesBadges(): string {
    const classArray: string[] = ['sprk-o-Stack__item'];

    if (this.additionalClassesBadges) {
      this.additionalClassesBadges.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }
}
