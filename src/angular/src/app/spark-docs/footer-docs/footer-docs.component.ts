import { Component } from '@angular/core';

@Component({
  selector: 'sprk-footer-docs',
  template: `
    <div class="sprk-o-CenteredColumn sprk-u-mbh">
      <h2 class="drizzle-b-h2">
        Base
      </h2>

      <sprk-footer>
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
            <p class="sprk-o-Stack__item sprk-b-TypeBodyFour">
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
      </sprk-footer>
    </div>

    <div class="sprk-o-CenteredColumn sprk-u-mbh">
      <h2 class="drizzle-b-h2">
        Base With Award Component
      </h2>

      <sprk-footer>
        <div class="sprk-o-Stack__item sprk-o-Stack__item--three-fifths@s">
          <div class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--split@s">
            <div class="sprk-o-Stack__item sprk-o-Stack__item--flex@s sprk-o-Box">
              <ul class="sprk-o-Stack sprk-o-Stack--medium sprk-b-List sprk-b-List--bare">
                <li class="sprk-o-Stack__item">
                  <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#nogo">Item 1</a>
                </li>
                <li class="sprk-o-Stack__item">
                  <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#nogo">Item 2</a>
                </li>
                <li class="sprk-o-Stack__item">
                  <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#nogo">Item 3</a>
                </li>
                <li class="sprk-o-Stack__item">
                  <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#nogo">Item 4</a>
                </li>
                <li class="sprk-o-Stack__item">
                  <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#nogo">Item 5</a>
                </li>
              </ul>
            </div>

            <div class="sprk-o-Stack__item sprk-o-Stack__item--flex@s sprk-o-Stack sprk-o-Stack--medium sprk-o-Box">
              <ul class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--split@xs sprk-o-Stack--medium sprk-b-List sprk-b-List--bare">
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

              <ul class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium sprk-b-List sprk-b-List--bare">
                <li class="sprk-o-Stack__item">
                  <a class="sprk-b-Link sprk-b-Link--standalone sprk-b-Link--muted sprk-u-WhiteSpace--nowrap" href="#">
                    <svg class="sprk-c-Icon sprk-c-Icon--l sprk-u-mrs" viewBox="0 0 512 512">
                      <use xlink:href="#paper-plane" />
                    </svg>

                    Provide Feedback
                  </a>
                </li>

                <li class="sprk-o-Stack__item">
                  <a class="sprk-b-Link sprk-b-Link--standalone sprk-b-Link--muted sprk-u-WhiteSpace--nowrap" href="#">
                    <svg class="sprk-c-Icon sprk-c-Icon--l sprk-u-mrs" viewBox="0 0 512 512">
                      <use xlink:href="#computer-screen" />
                    </svg>

                    Share Your Screen
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="sprk-u-mlm sprk-u-mrm sprk-c-Divider"></div>

          <div class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--large sprk-o-Box">
            <p class="sprk-o-Stack__item sprk-b-TypeBodyFour">
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
        </div>

        <div class="sprk-o-Stack__item sprk-o-Stack__item--two-fifths@s sprk-o-Box sprk-o-Stack sprk-o-Stack--medium">
          <h2 class="sprk-o-Stack__item sprk-b-TypeDisplaySix sprk-u-TextAlign--center">
            Award Stacked Pattern Inside Footer
          </h2>

          <div class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium sprk-o-Stack--center-column">
            <a class="sprk-o-Stack__item" href="#">
              <img
                class="drizzle-c-Logo-placeholder drizzle-c-Logo-placeholder--large"
                alt="Spark placeholder image"
                src="https://staging.sparkdesignsystem.com/assets/toolkit/images/spark-placeholder.jpg" />
            </a>

            <a class="sprk-o-Stack__item" href="#">
              <img
                class="drizzle-c-Logo-placeholder drizzle-c-Logo-placeholder--large"
                alt="Spark placeholder image"
                src="https://staging.sparkdesignsystem.com/assets/toolkit/images/spark-placeholder.jpg" />
            </a>
          </div>

          <ul class="sprk-o-Stack__item sprk-b-List sprk-b-List--bare sprk-o-Stack sprk-o-Stack--split@xs sprk-o-Stack--medium sprk-o-Stack--center-row sprk-o-Stack--center-column">
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
      </sprk-footer>
    </div>


    <div class="sprk-o-CenteredColumn sprk-u-mbh">
      <h2 class="drizzle-b-h2">
        Base With Columns of Links
      </h2>

      <sprk-footer>
        <div class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--split@m">
          <div class="sprk-o-Stack__item sprk-o-Stack__item--three-fourths@m sprk-o-Stack sprk-o-Stack--split@s">
            <div class="sprk-o-Stack__item sprk-o-Stack__item--third@s sprk-o-Box">
              <h2 class="sprk-b-TypeDisplaySix sprk-u-mbs">
                One
              </h2>

              <ul class="sprk-o-Stack sprk-o-Stack--small sprk-b-List sprk-b-List--bare">
                <li class="sprk-o-Stack__item">
                  <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#">Link Text 1</a>
                </li>

                <li class="sprk-o-Stack__item">
                  <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#">Link Text 2</a>
                </li>

                <li class="sprk-o-Stack__item">
                  <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#">Link Text 3</a>
                </li>

                <li class="sprk-o-Stack__item">
                  <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#">Link Text 4</a>
                </li>

                <li class="sprk-o-Stack__item">
                  <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#">Link Text 5</a>
                </li>

                <li class="sprk-o-Stack__item">
                  <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#">Link Text 6</a>
                </li>

                <li class="sprk-o-Stack__item">
                  <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#">Link Text 7</a>
                </li>

                <li class="sprk-o-Stack__item">
                  <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#">Link Text 8</a>
                </li>

                <li class="sprk-o-Stack__item">
                  <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#">Link Text 9</a>
                </li>

                <li class="sprk-o-Stack__item">
                  <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#">Link Text 10</a>
                </li>
              </ul>
            </div>

            <div class="sprk-o-Stack__item sprk-o-Stack__item--third@s sprk-o-Box">
              <h2 class="sprk-b-TypeDisplaySix sprk-u-mbs">
                Two
              </h2>

              <ul class="sprk-o-Stack sprk-o-Stack--small sprk-b-List sprk-b-List--bare">
                <li class="sprk-o-Stack__item">
                  <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#">
                    Link 1
                  </a>
                </li>

                <li class="sprk-o-Stack__item">
                  <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#">
                    Link 2
                  </a>
                </li>

                <li class="sprk-o-Stack__item">
                  <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#">
                    Link 3
                  </a>
                </li>

                <li class="sprk-o-Stack__item">
                  <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#">
                    Link 4
                  </a>
                </li>

                <li class="sprk-o-Stack__item">
                  <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#">
                    Link 5
                  </a>
                </li>

                <li class="sprk-o-Stack__item">
                  <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#">
                    Link 6
                  </a>
                </li>

                <li class="sprk-o-Stack__item">
                  <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#">
                    Link 7
                  </a>
                </li>

                <li class="sprk-o-Stack__item">
                  <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#">
                    Link 8
                  </a>
                </li>

                <li class="sprk-o-Stack__item">
                  <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#">
                    Link 9
                  </a>
                </li>

                <li class="sprk-o-Stack__item">
                  <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#">
                    Link 10
                  </a>
                </li>
              </ul>
            </div>

            <div class="sprk-o-Stack__item sprk-o-Stack__item--third@s sprk-o-Box">
              <h2 class="sprk-b-TypeDisplaySix sprk-u-mbs">
                Three
              </h2>

              <ul class="sprk-o-Stack sprk-o-Stack--small sprk-b-List sprk-b-List--bare">
                <li class="sprk-o-Stack__item">
                  <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#">
                    Link 1
                  </a>
                </li>

                <li class="sprk-o-Stack__item">
                  <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#">
                    Link 2
                  </a>
                </li>

                <li class="sprk-o-Stack__item">
                  <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#">
                    Link 3
                  </a>
                </li>

                <li class="sprk-o-Stack__item">
                  <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#">
                    Link 4
                  </a>
                </li>

                <li class="sprk-o-Stack__item">
                  <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#">
                    Link 5
                  </a>
                </li>

                <li class="sprk-o-Stack__item">
                  <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#">
                    Link 6
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="sprk-o-Stack__item sprk-o-Stack__item--fourth@m sprk-o-Stack sprk-o-Stack--medium sprk-o-Box">
            <ul class="sprk-o-Stack__item sprk-o-Stack--end-row@m sprk-o-Stack sprk-o-Stack--split@xs sprk-o-Stack--medium sprk-b-List sprk-b-List--bare">
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

            <ul class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium sprk-b-List sprk-b-List--bare">
              <li class="sprk-o-Stack__item sprk-o-Stack__item--end-column@m">
                <a class="sprk-b-Link sprk-b-Link--standalone sprk-b-Link--muted sprk-u-WhiteSpace--nowrap" href="#">
                  <svg class="sprk-c-Icon sprk-c-Icon--l sprk-u-mrs" viewBox="0 0 512 512">
                    <use xlink:href="#paper-plane" />
                  </svg>

                  Provide Feedback
                </a>
              </li>

              <li class="sprk-o-Stack__item sprk-o-Stack__item--end-column@m">
                <a class="sprk-b-Link sprk-b-Link--standalone sprk-b-Link--muted sprk-u-WhiteSpace--nowrap" href="#">
                  <svg class="sprk-c-Icon sprk-c-Icon--l sprk-u-mrs" viewBox="0 0 512 512">
                    <use xlink:href="#computer-screen" />
                  </svg>

                  Share Your Screen
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="sprk-u-mlm sprk-u-mrm sprk-c-Divider"></div>

        <div class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--large sprk-o-Box">
          <div class="sprk-o-Stack__item">
            <ul class="sprk-o-HorizontalList sprk-o-HorizontalList--spacing-medium sprk-o-HorizontalList--delimited-split-distribution">
              <li data-delimiter="|"><a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#nogo">Item 1</a></li>
              <li data-delimiter="|"><a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#nogo">Item 2</a></li>
              <li data-delimiter="|"><a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#nogo">Item 3</a></li>
              <li data-delimiter="|"><a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#nogo">Item 4</a></li>
              <li><a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#nogo">Item 5</a></li>
            </ul>
          </div>

          <p class="sprk-o-Stack__item sprk-b-TypeBodyFour">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in laoreet ante,
            non feugiat neque. Suspendisse et ipsum leo. Quisque non consectetur justo.
          </p>

          <div class="sprk-o-Stack__item">
            <ul class="sprk-b-List sprk-b-List--bare sprk-o-Stack sprk-o-Stack--split@s sprk-o-Stack--medium">
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
      </sprk-footer>
    </div>

    <div class="sprk-o-CenteredColumn sprk-u-mbh">
      <h2 class="drizzle-b-h2">
        Base Footer With Link Columns And Award Pattern
      </h2>

      <sprk-footer>
        <div class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--split@m">
          <div class="sprk-o-Stack__item sprk-o-Stack__item--three-fourths@m sprk-o-Stack sprk-o-Stack--split@s">
            <div class="sprk-o-Stack__item sprk-o-Stack__item--third@s sprk-o-Box">
              <h2 class="sprk-b-TypeDisplaySix sprk-u-mbs">
                One
              </h2>

              <ul class="sprk-o-Stack sprk-o-Stack--small sprk-b-List sprk-b-List--bare">
                <li class="sprk-o-Stack__item">
                  <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#">Link Text 1</a>
                </li>

                <li class="sprk-o-Stack__item">
                  <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#">Link Text 2</a>
                </li>

                <li class="sprk-o-Stack__item">
                  <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#">Link Text 3</a>
                </li>

                <li class="sprk-o-Stack__item">
                  <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#">Link Text 4</a>
                </li>

                <li class="sprk-o-Stack__item">
                  <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#">Link Text 5</a>
                </li>

                <li class="sprk-o-Stack__item">
                  <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#">Link Text 6</a>
                </li>

                <li class="sprk-o-Stack__item">
                  <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#">Link Text 7</a>
                </li>

                <li class="sprk-o-Stack__item">
                  <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#">Link Text 8</a>
                </li>

                <li class="sprk-o-Stack__item">
                  <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#">Link Text 9</a>
                </li>

                <li class="sprk-o-Stack__item">
                  <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#">Link Text 10</a>
                </li>
              </ul>
            </div>

            <div class="sprk-o-Stack__item sprk-o-Stack__item--third@s sprk-o-Box">
              <h2 class="sprk-b-TypeDisplaySix sprk-u-mbs">
                Two
              </h2>

              <ul class="sprk-o-Stack sprk-o-Stack--small sprk-b-List sprk-b-List--bare">
                <li class="sprk-o-Stack__item">
                  <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#">
                    Link 1
                  </a>
                </li>

                <li class="sprk-o-Stack__item">
                  <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#">
                    Link 2
                  </a>
                </li>

                <li class="sprk-o-Stack__item">
                  <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#">
                    Link 3
                  </a>
                </li>

                <li class="sprk-o-Stack__item">
                  <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#">
                    Link 4
                  </a>
                </li>

                <li class="sprk-o-Stack__item">
                  <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#">
                    Link 5
                  </a>
                </li>

                <li class="sprk-o-Stack__item">
                  <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#">
                    Link 6
                  </a>
                </li>

                <li class="sprk-o-Stack__item">
                  <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#">
                    Link 7
                  </a>
                </li>

                <li class="sprk-o-Stack__item">
                  <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#">
                    Link 8
                  </a>
                </li>

                <li class="sprk-o-Stack__item">
                  <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#">
                    Link 9
                  </a>
                </li>

                <li class="sprk-o-Stack__item">
                  <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#">
                    Link 10
                  </a>
                </li>
              </ul>
            </div>

            <div class="sprk-o-Stack__item sprk-o-Stack__item--third@s sprk-o-Box">
              <h2 class="sprk-b-TypeDisplaySix sprk-u-mbs">
                Three
              </h2>

              <ul class="sprk-o-Stack sprk-o-Stack--small sprk-b-List sprk-b-List--bare">
                <li class="sprk-o-Stack__item">
                  <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#">
                    Link 1
                  </a>
                </li>

                <li class="sprk-o-Stack__item">
                  <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#">
                    Link 2
                  </a>
                </li>

                <li class="sprk-o-Stack__item">
                  <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#">
                    Link 3
                  </a>
                </li>

                <li class="sprk-o-Stack__item">
                  <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#">
                    Link 4
                  </a>
                </li>

                <li class="sprk-o-Stack__item">
                  <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#">
                    Link 5
                  </a>
                </li>

                <li class="sprk-o-Stack__item">
                  <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#">
                    Link 6
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="sprk-o-Stack__item sprk-o-Stack__item--fourth@m sprk-o-Stack sprk-o-Stack--medium sprk-o-Box">
            <ul class="sprk-o-Stack__item sprk-o-Stack--end-row@m sprk-o-Stack sprk-o-Stack--split@xs sprk-o-Stack--medium sprk-b-List sprk-b-List--bare">
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

            <ul class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium sprk-b-List sprk-b-List--bare">
              <li class="sprk-o-Stack__item sprk-o-Stack__item--end-column@m">
                <a class="sprk-b-Link sprk-b-Link--standalone sprk-b-Link--muted sprk-u-WhiteSpace--nowrap" href="#">
                  <svg class="sprk-c-Icon sprk-c-Icon--l sprk-u-mrs" viewBox="0 0 512 512">
                    <use xlink:href="#paper-plane" />
                  </svg>

                  Provide Feedback
                </a>
              </li>

              <li class="sprk-o-Stack__item sprk-o-Stack__item--end-column@m">
                <a class="sprk-b-Link sprk-b-Link--standalone sprk-b-Link--muted sprk-u-WhiteSpace--nowrap" href="#">
                  <svg class="sprk-c-Icon sprk-c-Icon--l sprk-u-mrs" viewBox="0 0 512 512">
                    <use xlink:href="#computer-screen" />
                  </svg>

                  Share Your Screen
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="sprk-u-mlm sprk-u-mrm sprk-c-Divider"></div>

        <div class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--large sprk-o-Box">
          <div class="sprk-o-Stack__item">
            <ul class="sprk-o-HorizontalList sprk-o-HorizontalList--spacing-medium sprk-o-HorizontalList--delimited-split-distribution">
              <li data-delimiter="|"><a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#nogo">Item 1</a></li>
              <li data-delimiter="|"><a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#nogo">Item 2</a></li>
              <li data-delimiter="|"><a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#nogo">Item 3</a></li>
              <li data-delimiter="|"><a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#nogo">Item 4</a></li>
              <li><a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#nogo">Item 5</a></li>
            </ul>
          </div>

          <p class="sprk-o-Stack__item sprk-b-TypeBodyFour">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in laoreet ante,
            non feugiat neque. Suspendisse et ipsum leo. Quisque non consectetur justo.
          </p>

          <div class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium">
            <h2 class="sprk-o-Stack__item sprk-b-TypeDisplaySix">
              Award Pattern Inside Footer
            </h2>

            <div class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--split@xl sprk-o-Stack--medium">
              <a class="sprk-o-Stack__item" href="#">
                <img
                  class="drizzle-c-Logo-placeholder drizzle-c-Logo-placeholder--large"
                  alt="Spark placeholder image"
                  src="https://staging.sparkdesignsystem.com/assets/toolkit/images/spark-placeholder.jpg" />
              </a>

              <a class="sprk-o-Stack__item" href="#">
                <img
                  class="drizzle-c-Logo-placeholder drizzle-c-Logo-placeholder--large"
                  alt="Spark placeholder image"
                  src="https://staging.sparkdesignsystem.com/assets/toolkit/images/spark-placeholder.jpg" />
              </a>

              <ul class="sprk-o-Stack__item sprk-o-Stack__item--end-column@m sprk-b-List sprk-b-List--bare sprk-o-Stack sprk-o-Stack--split@s sprk-o-Stack--medium">
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
        </div>

        <sprk-toggle
          title="My Disclaimer"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          analyticsString="My disclaimer Title"
          sprkStackItem>
        </sprk-toggle>
      </sprk-footer>
    </div>


    <div class="sprk-o-CenteredColumn sprk-u-mbh">
      <h2 class="drizzle-b-h2">
        Base Footer With Award Pattern And Products
      </h2>

      <sprk-footer>
        <div class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--split@m">
          <div class="sprk-o-Stack__item sprk-o-Stack__item--fourth@m sprk-o-Box">
            <h2 class="sprk-b-TypeDisplaySix sprk-u-mbm">
              Site Links
            </h2>
            <ul class="sprk-o-Stack sprk-o-Stack--medium sprk-b-List sprk-b-List--bare">
              <li class="sprk-o-Stack__item">
                <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#nogo">Item 1</a>
              </li>
              <li class="sprk-o-Stack__item">
                <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#nogo">Item 2</a>
              </li>
              <li class="sprk-o-Stack__item">
                <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#nogo">Item 3</a>
              </li>
              <li class="sprk-o-Stack__item">
                <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#nogo">Item 4</a>
              </li>
              <li class="sprk-o-Stack__item">
                <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#nogo">Item 5</a>
              </li>
              <li class="sprk-o-Stack__item">
                <a class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone" href="#nogo">Item 6</a>
              </li>
            </ul>
          </div>

          <div class="sprk-o-Stack__item sprk-o-Stack__item--three-fourths@m sprk-o-Stack">
            <h2 class="sprk-o-Stack__item sprk-b-TypeDisplaySix sprk-o-Box">
              Our Products
            </h2>

            <div class="sprk-o-Stack sprk-o-Stack--split@m">
              <div class="sprk-o-Stack__item sprk-o-Stack__item--half@m sprk-o-Stack">
                <div class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--small sprk-o-Box">
                  <div class="sprk-o-Stack__item drizzle-c-Logo-placeholder"></div>
                  <p class="sprk-o-Stack__item sprk-b-TypeBodyFour">
                    Some information about this.
                  </p>
                </div>

                <div class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--small sprk-o-Box">
                  <div class="sprk-o-Stack__item drizzle-c-Logo-placeholder"></div>
                  <p class="sprk-o-Stack__item sprk-b-TypeBodyFour">
                    Some information about this specific product offering.
                  </p>
                </div>
              </div>

              <div class="sprk-o-Stack__item sprk-o-Stack__item--half@m sprk-o-Stack">
                <div class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--small sprk-o-Box">
                  <div class="sprk-o-Stack__item drizzle-c-Logo-placeholder"></div>
                  <p class="sprk-o-Stack__item sprk-b-TypeBodyFour">
                    Some information about this.
                  </p>
                </div>

                <div class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--small sprk-o-Box">
                  <div class="sprk-o-Stack__item drizzle-c-Logo-placeholder"></div>
                  <p class="sprk-o-Stack__item sprk-b-TypeBodyFour">
                    Some information about this specific product offering.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="sprk-u-mlm sprk-u-mrm sprk-c-Divider"></div>

        <div class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--large sprk-o-Box">
          <div class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--split@s sprk-o-Stack--medium">
            <ul class="sprk-o-Stack__item sprk-o-Stack__item--flex@s sprk-o-Stack sprk-o-Stack--split@xs sprk-o-Stack--medium sprk-b-List sprk-b-List--bare">
              <li class="sprk-o-Stack__item sprk-o-Stack__item--end-column@m">
                <a class="sprk-b-Link sprk-b-Link--standalone sprk-b-Link--muted sprk-u-WhiteSpace--nowrap" href="#">
                  <svg class="sprk-c-Icon sprk-c-Icon--l sprk-u-mrs" viewBox="0 0 512 512">
                    <use xlink:href="#paper-plane" />
                  </svg>

                  Provide Feedback
                </a>
              </li>

              <li class="sprk-o-Stack__item sprk-o-Stack__item--end-column@m">
                <a class="sprk-b-Link sprk-b-Link--standalone sprk-b-Link--muted sprk-u-WhiteSpace--nowrap" href="#">
                  <svg class="sprk-c-Icon sprk-c-Icon--l sprk-u-mrs" viewBox="0 0 512 512">
                    <use xlink:href="#computer-screen" />
                  </svg>

                  Share Your Screen
                </a>
              </li>
            </ul>

            <ul class="sprk-o-Stack__item sprk-o-Stack__item--flex@s sprk-o-Stack--end-row@m sprk-o-Stack sprk-o-Stack--split@xs sprk-o-Stack--medium sprk-b-List sprk-b-List--bare">
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

          <p class="sprk-o-Stack__item sprk-b-TypeBodyFour">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in laoreet ante,
            non feugiat neque. Suspendisse et ipsum leo. Quisque non consectetur justo.
          </p>

          <div class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium">
            <h2 class="sprk-o-Stack__item sprk-b-TypeDisplaySix">
              Award Pattern Inside Footer
            </h2>

            <div class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--split@xl sprk-o-Stack--medium">
              <a class="sprk-o-Stack__item" href="#">
                <img
                  class="drizzle-c-Logo-placeholder drizzle-c-Logo-placeholder--large"
                  alt="Spark placeholder image"
                  src="https://staging.sparkdesignsystem.com/assets/toolkit/images/spark-placeholder.jpg" />
              </a>

              <a class="sprk-o-Stack__item" href="#">
                <img
                  class="drizzle-c-Logo-placeholder drizzle-c-Logo-placeholder--large"
                  alt="Spark placeholder image"
                  src="https://staging.sparkdesignsystem.com/assets/toolkit/images/spark-placeholder.jpg" />
              </a>

              <ul class="sprk-o-Stack__item sprk-o-Stack__item--end-column@m sprk-b-List sprk-b-List--bare sprk-o-Stack sprk-o-Stack--split@s sprk-o-Stack--medium">
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

          <sprk-toggle
            title="My Disclaimer"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in laoreet ante,
              non feugiat neque. Suspendisse et ipsum leo. Quisque non consectetur justo."
            analyticsString="My disclaimer Title"
            sprkStackItem>
          </sprk-toggle>

          <sprk-toggle
            title="My Disclaimer Two"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in laoreet ante,
              non feugiat neque. Suspendisse et ipsum leo. Quisque non consectetur justo."
            analyticsString="My disclaimer Title"
            sprkStackItem>
          </sprk-toggle>
        </div>
      </sprk-footer>
    </div>
  `
})
export class FooterDocsComponent {
  constructor() {}
}
