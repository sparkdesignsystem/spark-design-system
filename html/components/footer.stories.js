import { useEffect } from '@storybook/client-api';
import { toggle } from './toggle';
import '../utilities/polyfills/classListSVG';
import { markdownDocumentationLinkBuilder } from '../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Footer',
  decorators: [(story) => `<div>${story()}</div>`],
  parameters: {
    info: `
${markdownDocumentationLinkBuilder('footer')}
- The Footer is a navigation landmark for
accessibility tools. The attribute \`role=”contentinfo”\`
must be present.
    `,
    docs: { iframeHeight: 800 },
  },
};

export const defaultStory = () => {
  useEffect(() => {
    toggle();
  }, []);

  return `
    <div class="sprk-o-Box sprk-o-Box--large sprk-c-Footer">
      <footer
        class="
          sprk-o-CenteredColumn
          sprk-o-Stack
          sprk-o-Stack--misc-b
        "
        role="contentinfo"
        data-id="footer-1"
      >
        <div
          class="
            sprk-o-Stack__item
            sprk-o-Stack
            sprk-o-Stack--medium
            sprk-o-Stack--split@m
          ">
          <div
            class="
              sprk-o-Stack__item
              sprk-o-Stack__item--three-tenths@m
              sprk-o-Stack
              sprk-o-Stack--misc-b
              sprk-c-Footer__global-links
            ">
            <h3
              class="
                sprk-o-Stack__item
                sprk-b-TypeBodyOne
                sprk-c-Footer__text
              ">
              Our Sister Companies
            </h3>

            <div class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium">
              <div class="sprk-o-Stack__item">
                <a class="sprk-b-Link sprk-b-Link--plain" href="#nogo">
                  <img src="https://spark-assets.netlify.app/rocket-by-ql-white.svg" alt="Rocket Mortgage by Quicken Loans Logo">
                </a>
              </div>

              <p
                class="
                  sprk-o-Stack__item
                  sprk-b-TypeBodyFour
                  sprk-c-Footer__text
                ">
                Buy a home, refinance, or manage your mortgage online with
                America's largest mortgage lender
              </p>
            </div>

            <div class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium">
              <div class="sprk-o-Stack__item">
                <a class="sprk-b-Link sprk-b-Link--plain" href="#nogo">
                  <img src="https://spark-assets.netlify.app/rocket-loans-white.svg" alt="Rocket Loans Logo">
                </a>
              </div>

              <p
                class="
                  sprk-o-Stack__item
                  sprk-b-TypeBodyFour
                  sprk-c-Footer__text
                ">
                Get a personal loan to consolidate debt, renovate
                your home and more
              </p>
            </div>

            <div class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium">
              <div class="sprk-o-Stack__item">
                <a class="sprk-b-Link sprk-b-Link--plain" href="#nogo">
                  <img src="https://spark-assets.netlify.app/rocket-homes-white.svg" alt="Rocket Homes Logo">
                </a>
              </div>

              <p
                class="
                  sprk-o-Stack__item
                  sprk-b-TypeBodyFour
                  sprk-c-Footer__text
                ">
                Get a real estate agent handpicked for you and
                search the latest home listings
              </p>
            </div>

            <div class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium">
              <div class="sprk-o-Stack__item">
                <a class="sprk-b-Link sprk-b-Link--plain" href="#nogo">
                  <img src="https://spark-assets.netlify.app/rocket-hq-white.svg" alt="Rocket HQ Logo">
                </a>
              </div>

              <p
                class="
                  sprk-o-Stack__item
                  sprk-b-TypeBodyFour
                  sprk-c-Footer__text
                ">
                Access tools and articles that can help
                you reach your financial goals
              </p>
            </div>
          </div>

          <div
            class="
              sprk-o-Stack__item
              sprk-o-Stack__item--seven-tenths@m
              sprk-o-Stack sprk-o-Stack--medium
            ">
            <div
              class="
                sprk-o-Stack__item
                sprk-o-Stack
                sprk-o-Stack--medium
                sprk-o-Stack--split@m
              ">
              <div
                class="
                  sprk-o-Stack__item
                  sprk-o-Stack__item--third@m
                  sprk-c-Footer__local-links
                  sprk-o-Stack
                  sprk-o-Stack--large
                ">
                <h3
                  class="
                    sprk-o-Stack__item
                    sprk-b-TypeBodyOne
                    sprk-c-Footer__text
                  ">
                  Site Links
                </h3>

                <ul
                  class="
                    sprk-o-Stack__item
                    sprk-o-Stack
                    sprk-o-Stack--misc-a
                    sprk-b-List
                    sprk-b-List--bare
                  ">
                  <li class="sprk-o-Stack__item">
                    <a
                      class="
                        sprk-c-Footer__link
                        sprk-b-Link
                        sprk-b-Link--light
                      "
                      href="#nogo">
                      About This
                    </a>
                  </li>

                  <li class="sprk-o-Stack__item">
                    <a
                      class="
                        sprk-c-Footer__link
                        sprk-b-Link
                        sprk-b-Link--light
                      "
                      href="#nogo">
                      About This Other Thing
                    </a>
                  </li>

                  <li class="sprk-o-Stack__item">
                    <a
                      class="
                        sprk-c-Footer__link
                        sprk-b-Link
                        sprk-b-Link--light
                      "
                      href="#nogo">
                      About That
                    </a>
                  </li>

                  <li class="sprk-o-Stack__item">
                    <a
                      class="
                        sprk-c-Footer__link
                        sprk-b-Link
                        sprk-b-Link--light
                      "
                      href="#nogo">
                      Link Item
                    </a>
                  </li>

                  <li class="sprk-o-Stack__item">
                    <a
                      class="
                        sprk-c-Footer__link
                        sprk-b-Link
                        sprk-b-Link--light
                      "
                      href="#nogo">
                      This Link Item
                    </a>
                  </li>
                </ul>
              </div>

              <div
                class="
                  sprk-o-Stack__item
                  sprk-o-Stack__item--third@m
                  sprk-o-Box
                  sprk-o-Stack
                  sprk-o-Stack--large
                ">
                <h3
                  class="
                    sprk-o-Stack__item
                    sprk-b-TypeBodyOne
                    sprk-c-Footer__text
                  ">
                  Learn More
                </h3>

                <ul
                  class="
                    sprk-o-Stack__item
                    sprk-o-Stack
                    sprk-o-Stack--misc-a
                    sprk-b-List sprk-b-List--bare
                  ">
                  <li class="sprk-o-Stack__item">
                    <a
                      class="
                        sprk-c-Footer__link
                        sprk-b-Link
                        sprk-b-Link--light
                      "
                      href="#nogo">
                      About This Other Thing
                    </a>
                  </li>

                  <li class="sprk-o-Stack__item">
                    <a
                      class="
                        sprk-c-Footer__link
                        sprk-b-Link
                        sprk-b-Link--light
                        "
                      href="#nogo">
                      About This
                    </a>
                  </li>

                  <li class="sprk-o-Stack__item">
                    <a
                      class="
                        sprk-c-Footer__link
                        sprk-b-Link
                        sprk-b-Link--light
                      "
                      href="#nogo">
                      About That
                    </a>
                  </li>

                  <li class="sprk-o-Stack__item">
                    <a
                      class="
                        sprk-c-Footer__link
                        sprk-b-Link
                        sprk-b-Link--light
                      "
                      href="#nogo">
                      Link Item
                    </a>
                  </li>
                </ul>
              </div>

              <div
                class="
                  sprk-o-Stack__item
                  sprk-o-Stack__item--third@m
                  sprk-o-Box
                  sprk-o-Stack
                  sprk-o-Stack--large
                ">
                <h3
                  class="
                    sprk-o-Stack__item
                    sprk-b-TypeBodyOne
                    sprk-c-Footer__text
                  ">
                  Support
                </h3>

                <ul
                  class="
                    sprk-o-Stack__item
                    sprk-o-Stack
                    sprk-o-Stack--misc-a
                    sprk-b-List
                    sprk-b-List--bare
                  ">
                  <li class="sprk-o-Stack__item">
                    <a
                      class="
                        sprk-c-Footer__link
                        sprk-b-Link
                        sprk-b-Link--light
                      "
                      href="#nogo">
                      Share Your Screen
                    </a>
                  </li>
                  <li class="sprk-o-Stack__item">
                    <a
                      class="
                        sprk-c-Footer__link
                        sprk-b-Link
                        sprk-b-Link--light
                      "
                      href="#nogo">
                      Opt Out
                    </a>
                  </li>
                  <li class="sprk-o-Stack__item">
                    <a
                      class="
                        sprk-c-Footer__link
                        sprk-b-Link
                        sprk-b-Link--light
                      "
                      href="#nogo">
                      Disclosures and Other Things
                    </a>
                  </li>
                  <li class="sprk-o-Stack__item">
                    <a
                      class="
                        sprk-c-Footer__link
                        sprk-b-Link
                        sprk-b-Link--light
                      "
                      href="#nogo">
                      We Want Your Feedback
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div
              class="
                sprk-o-Stack__item
                sprk-o-Stack
                sprk-o-Stack--large
                sprk-o-Box
              ">
              <h3
                class="
                  sprk-o-Stack__item sprk-b-TypeBodyOne sprk-c-Footer__text">
                Connect With Us
              </h3>

              <div
                class="
                  sprk-o-Stack__item
                  sprk-o-Stack
                  sprk-o-Stack--large
                  sprk-o-Stack--split@m
                ">
                <ul
                  class="
                    sprk-o-Stack__item
                    sprk-o-Stack__item--flex@m
                    sprk-o-Stack
                    sprk-o-Stack--split@xxs
                    sprk-o-Stack--medium
                    sprk-b-List
                    sprk-b-List--bare
                  ">
                  <li class="sprk-o-Stack__item">
                    <a class="sprk-b-Link sprk-b-Link--plain" href="#nogo">
                      <svg
                        class="
                          sprk-c-Footer__icon
                          sprk-c-Icon
                          sprk-c-Icon--filled-current-color
                          sprk-c-Icon--xl
                          "
                          viewBox="0 0 64 64">
                        <use xlink:href="#facebook" />
                      </svg>
                      <span class="sprk-u-ScreenReaderText">Facebook</span>
                    </a>
                  </li>

                  <li class="sprk-o-Stack__item">
                    <a class="sprk-b-Link sprk-b-Link--plain" href="#nogo">
                      <svg
                        class="
                          sprk-c-Footer__icon
                          sprk-c-Icon
                          sprk-c-Icon--filled-current-color
                          sprk-c-Icon--xl
                        "
                        viewBox="0 0 64 64">
                        <use xlink:href="#instagram" />
                      </svg>
                      <span class="sprk-u-ScreenReaderText">Instagram</span>
                    </a>
                  </li>

                  <li class="sprk-o-Stack__item">
                    <a class="sprk-b-Link sprk-b-Link--plain" href="#nogo">
                      <svg
                        class="
                          sprk-c-Footer__icon
                          sprk-c-Icon
                          sprk-c-Icon--filled-current-color
                          sprk-c-Icon--xl
                        "
                        viewBox="0 0 64 64">
                        <use xlink:href="#twitter" />
                      </svg>
                      <span class="sprk-u-ScreenReaderText">Twitter</span>
                    </a>
                  </li>

                  <li class="sprk-o-Stack__item">
                    <a class="sprk-b-Link sprk-b-Link--plain" href="#nogo">
                      <svg
                        class="
                          sprk-c-Footer__icon
                          sprk-c-Icon
                          sprk-c-Icon--filled-current-color
                          sprk-c-Icon--xl
                        "
                      viewBox="0 0 64 64">
                        <use xlink:href="#youtube"/>
                      </svg>
                      <span class="sprk-u-ScreenReaderText">Youtube</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <span
          class="
            sprk-c-Divider
            sprk-c-Footer__divider
          "
          data-id="divider-1">
        </span>

        <div
          class="
            sprk-o-Stack__item
            sprk-o-Stack
            sprk-o-Stack--misc-b
            sprk-c-Footer__awards
          ">
          <div
            class="
              sprk-o-Stack__item
              sprk-o-Stack
              sprk-o-Stack--large
            "
            data-id="award-1"
          >
            <h3
              class="
                sprk-o-Stack__item
                sprk-b-TypeBodyOne
                sprk-c-Footer__text
              ">
              Awards Heading Title
            </h3>

            <div
              class="
                sprk-o-Stack__item
                sprk-o-Stack
                sprk-o-Stack--medium
                sprk-o-Stack--split@s
                sprk-c-Footer__awards-media
              ">
              <div class="sprk-o-Stack__item">
                <a href="#nogo">
                  <img
                    src="https://spark-assets.netlify.app/spark-logo-mark.svg"
                    alt="spark logo">
                </a>
              </div>

              <div class="sprk-o-Stack__item">
                <a href="#nogo">
                  <img
                    src="https://spark-assets.netlify.app/spark-logo-mark.svg"
                    alt="spark logo">
                </a>
              </div>
            </div>

            <div class="sprk-o-Stack__item">
              <div data-sprk-toggle="container">
                <button
                  class="
                    sprk-c-Footer__trigger
                    sprk-c-Toggle__trigger
                    sprk-c-Toggle__trigger--small
                  "
                  data-sprk-toggle="trigger">
                  <svg
                    class="
                      sprk-c-Footer__icon
                      sprk-c-Icon
                      sprk-c-Icon--xl
                      sprk-c-Icon--toggle
                      sprk-c-Toggle__trigger-icon
                    "
                    data-sprk-toggle="icon" viewBox="0 0 100 100">
                    <use xlink:href="#chevron-down-circle"></use>
                  </svg>
                  My Award Disclaimer
                </button>

                <div class="sprk-c-Toggle__content" data-sprk-toggle="content">
                  <p
                    class="
                      sprk-b-TypeBodyFour
                      sprk-c-Footer__text
                    ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam in laoreet ante, non feugiat neque. Suspendisse
                    et ipsum leo. Quisque non consectetur justo.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p class="sprk-o-Stack__item sprk-b-TypeBodyFour sprk-c-Footer__text">
            &#42;Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam.
          </p>

          <p class="sprk-o-Stack__item sprk-b-TypeBodyFour sprk-c-Footer__text">
            Incididunt ut labore et dolore magna aliqua.
            Ut enim ad
            <a
              href="#nogo"
              class="sprk-b-Link sprk-b-Link--inline-light"
            >
              inline link
            </a>
            minim veniam. Lorem ipsum dolor sit
            amet, consectetur.
          </p>

          <p class="sprk-o-Stack__item sprk-b-TypeBodyFour sprk-c-Footer__text">
            &#42;&#42;Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam.
          </p>

          <p class="sprk-o-Stack__item sprk-b-TypeBodyFour sprk-c-Footer__text">
            Lorem ipsum dolor sit amet, consectetur.
          </p>

          <ul
            class="
              sprk-o-Stack__item
              sprk-o-Stack__item--flex@m
              sprk-o-Stack
              sprk-o-Stack--split@xxs
              sprk-o-Stack--medium
              sprk-b-List
              sprk-b-List--bare
            ">
            <li class="sprk-o-Stack__item">
              <a class="sprk-b-Link sprk-b-Link--plain" href="#nogo">
                <svg
                  class="
                    sprk-c-Footer__icon
                    sprk-c-Icon
                    sprk-c-Icon--filled-current-color
                    sprk-c-Icon--xl
                  "
                  viewBox="0 0 64 64">
                  <use xlink:href="#townhouse" />
                </svg>
                <span class="sprk-u-ScreenReaderText">Townhouse</span>
              </a>
            </li>

            <li class="sprk-o-Stack__item">
              <a class="sprk-b-Link sprk-b-Link--plain" href="#nogo">
                <svg
                  class="
                    sprk-c-Footer__icon
                    sprk-c-Icon
                    sprk-c-Icon--filled-current-color
                    sprk-c-Icon--xl
                  "
                  viewBox="0 0 64 64">
                  <use xlink:href="#townhouse" />
                </svg>
                <span class="sprk-u-ScreenReaderText">Townhouse</span>
              </a>
            </li>

            <li class="sprk-o-Stack__item">
              <a class="sprk-b-Link sprk-b-Link--plain" href="#nogo">
                <svg
                  class="
                    sprk-c-Footer__icon
                    sprk-c-Icon
                    sprk-c-Icon--filled-current-color
                    sprk-c-Icon--xl
                  "
                  viewBox="0 0 64 64">
                  <use xlink:href="#townhouse" />
                </svg>
                <span class="sprk-u-ScreenReaderText">Townhouse</span>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  `;
};

defaultStory.story = {
  name: 'Default',
};
