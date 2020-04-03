import { useEffect } from '@storybook/client-api';
import { toggle } from '../components/toggle';
import '../utilities/polyfills/classListSVG';
import { markdownDocumentationLinkBuilder } from '../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Footer',
  decorators: [
    story => `<div class="sprk-o-Box">${story()}</div>`,
  ],
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
    <div class="sprk-o-Box sprk-o-Box--large sprk-u-BackgroundColor--gray">
      <footer class="sprk-o-CenteredColumn sprk-o-Stack sprk-o-Stack--misc-b" role="contentinfo" data-id="footer-1">
        <div class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium sprk-o-Stack--split@m">
          <div class="sprk-o-Stack__item sprk-o-Stack__item--three-tenths@m sprk-o-Stack sprk-o-Stack--misc-b sprk-o-Box sprk-u-prh">
            <h3 class="sprk-o-Stack__item sprk-b-TypeBodyOne">
              Our Sister Companies
            </h3>

            <div class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium">
              <div class="sprk-o-Stack__item">
                <a class="sprk-b-Link sprk-b-Link--plain" href="#nogo">
                  <img src="https://spark-assets.netlify.app/rocket_by_ql.svg" alt="Rocket Mortgage by Quicken Loans Logo">
                </a>
              </div>

              <p class="sprk-o-Stack__item sprk-b-TypeBodyFour">
                Buy a home, refinance, or manage your mortgage online with
                America's largest mortgage lender
              </p>
            </div>

            <div class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium">
              <div class="sprk-o-Stack__item">
                <a class="sprk-b-Link sprk-b-Link--plain" href="#nogo">
                  <img src="https://spark-assets.netlify.app/rocket_loans.svg" alt="Rocket Loans Logo">
                </a>
              </div>

              <p class="sprk-o-Stack__item sprk-b-TypeBodyFour">
                Get a personal loan to consolidate debt, renovate
                your home and more
              </p>
            </div>

            <div class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium">
              <div class="sprk-o-Stack__item">
                <a class="sprk-b-Link sprk-b-Link--plain" href="#nogo">
                  <img src="https://spark-assets.netlify.app/rocket_homes.svg" alt="Rocket Homes Logo">
                </a>
              </div>

              <p class="sprk-o-Stack__item sprk-b-TypeBodyFour">
                Get a real estate agent handpicked for you and
                search the latest home listings
              </p>
            </div>

            <div class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium">
              <div class="sprk-o-Stack__item">
                <a class="sprk-b-Link sprk-b-Link--plain" href="#nogo">
                  <img src="https://spark-assets.netlify.app/rocket_hq.svg" alt="Rocket HQ Logo">
                </a>
              </div>

              <p class="sprk-o-Stack__item sprk-b-TypeBodyFour">
                Access tools and articles that can help
                you reach your financial goals
              </p>
            </div>
          </div>

          <div class="sprk-o-Stack__item sprk-o-Stack__item--seven-tenths@m sprk-o-Stack sprk-o-Stack--medium">
            <div class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium sprk-o-Stack--split@m">
              <div class="sprk-o-Stack__item sprk-o-Stack__item--third@m sprk-o-Box sprk-u-PaddingRight--a sprk-o-Stack sprk-o-Stack--large">
                <h3 class="sprk-o-Stack__item sprk-b-TypeBodyOne">
                  Site Links
                </h3>

                <ul class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--misc-a sprk-b-List sprk-b-List--bare">
                  <li class="sprk-o-Stack__item">
                    <a class="sprk-b-Link sprk-b-Link--simple sprk-u-FontWeight--normal" href="#nogo">
                      About This
                    </a>
                  </li>

                  <li class="sprk-o-Stack__item">
                    <a class="sprk-b-Link sprk-b-Link--simple sprk-u-FontWeight--normal" href="#nogo">
                      About This Other Thing
                    </a>
                  </li>

                  <li class="sprk-o-Stack__item">
                    <a class="sprk-b-Link sprk-b-Link--simple sprk-u-FontWeight--normal" href="#nogo">
                      About That
                    </a>
                  </li>

                  <li class="sprk-o-Stack__item">
                    <a class="sprk-b-Link sprk-b-Link--simple sprk-u-FontWeight--normal" href="#nogo">
                      Link Item
                    </a>
                  </li>

                  <li class="sprk-o-Stack__item">
                    <a class="sprk-b-Link sprk-b-Link--simple sprk-u-FontWeight--normal" href="#nogo">
                      This Link Item
                    </a>
                  </li>
                </ul>
              </div>

              <div class="sprk-o-Stack__item sprk-o-Stack__item--third@m sprk-o-Box sprk-u-PaddingRight--a sprk-o-Stack sprk-o-Stack--large">
                <h3 class="sprk-o-Stack__item sprk-b-TypeBodyOne">
                  Learn More
                </h3>

                <ul class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--misc-a sprk-b-List sprk-b-List--bare">
                  <li class="sprk-o-Stack__item">
                    <a class="sprk-b-Link sprk-b-Link--simple sprk-u-FontWeight--normal" href="#nogo">
                      About This Other Thing
                    </a>
                  </li>

                  <li class="sprk-o-Stack__item">
                    <a class="sprk-b-Link sprk-b-Link--simple sprk-u-FontWeight--normal" href="#nogo">
                      About This
                    </a>
                  </li>

                  <li class="sprk-o-Stack__item">
                    <a class="sprk-b-Link sprk-b-Link--simple sprk-u-FontWeight--normal" href="#nogo">
                      About That
                    </a>
                  </li>

                  <li class="sprk-o-Stack__item">
                    <a class="sprk-b-Link sprk-b-Link--simple sprk-u-FontWeight--normal" href="#nogo">
                      Link Item
                    </a>
                  </li>
                </ul>
              </div>

              <div class="sprk-o-Stack__item sprk-o-Stack__item--third@m sprk-o-Box sprk-o-Stack sprk-o-Stack--large">
                <h3 class="sprk-o-Stack__item sprk-b-TypeBodyOne">
                  Support
                </h3>

                <ul class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--misc-a sprk-b-List sprk-b-List--bare">
                  <li class="sprk-o-Stack__item">
                    <a class="sprk-b-Link sprk-b-Link--simple sprk-u-FontWeight--normal" href="#nogo">
                      Share Your Screen
                    </a>
                  </li>
                  <li class="sprk-o-Stack__item">
                    <a class="sprk-b-Link sprk-b-Link--simple sprk-u-FontWeight--normal" href="#nogo">
                      Opt Out
                    </a>
                  </li>
                  <li class="sprk-o-Stack__item">
                    <a class="sprk-b-Link sprk-b-Link--simple sprk-u-FontWeight--normal" href="#nogo">
                      Disclosures and Other Things
                    </a>
                  </li>
                  <li class="sprk-o-Stack__item">
                    <a class="sprk-b-Link sprk-b-Link--simple sprk-u-FontWeight--normal" href="#nogo">
                      We Want Your Feedback
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--large sprk-o-Box">
              <h3 class="sprk-o-Stack__item sprk-b-TypeBodyOne">
                Connect With Us
              </h3>

              <div class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--large sprk-o-Stack--split@m">
                <ul class="sprk-o-Stack__item sprk-o-Stack__item--flex@m sprk-o-Stack sprk-o-Stack--split@xxs sprk-o-Stack--medium sprk-b-List sprk-b-List--bare">
                  <li class="sprk-o-Stack__item">
                    <a class="sprk-b-Link sprk-b-Link--plain" href="#nogo">
                      <svg class="sprk-c-Icon sprk-c-Icon--stroke-current-color sprk-c-Icon--l" viewBox="0 0 64 64">
                        <use xlink:href="#facebook-two-color" />
                      </svg>
                      <span class="sprk-u-ScreenReaderText">Facebook</span>
                    </a>
                  </li>

                  <li class="sprk-o-Stack__item">
                    <a class="sprk-b-Link sprk-b-Link--plain" href="#nogo">
                      <svg class="sprk-c-Icon sprk-c-Icon--stroke-current-color sprk-c-Icon--l" viewBox="0 0 64 64">
                        <use xlink:href="#instagram-two-color" />
                      </svg>
                      <span class="sprk-u-ScreenReaderText">Instagram</span>
                    </a>
                  </li>

                  <li class="sprk-o-Stack__item">
                    <a class="sprk-b-Link sprk-b-Link--plain" href="#nogo">
                      <svg class="sprk-c-Icon sprk-c-Icon--stroke-current-color sprk-c-Icon--l" viewBox="0 0 64 64">
                        <use xlink:href="#twitter-two-color" />
                      </svg>
                      <span class="sprk-u-ScreenReaderText">Twitter</span>
                    </a>
                  </li>

                  <li class="sprk-o-Stack__item">
                    <a class="sprk-b-Link sprk-b-Link--plain" href="#nogo">
                      <svg class="sprk-c-Icon sprk-c-Icon--stroke-current-color sprk-c-Icon--l" viewBox="0 0 64 64">
                        <use xlink:href="#youtube-two-color" />
                      </svg>
                      <span class="sprk-u-ScreenReaderText">Youtube</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <span class="sprk-c-Divider sprk-u-mvn sprk-u-mhm" data-id="divider-1"></span>

        <div class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--misc-b sprk-o-Box sprk-u-PaddingTop--b">
          <div class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--large" data-id="award-1">
            <h3 class="sprk-o-Stack__item sprk-b-TypeBodyOne">
              Awards Heading Title
            </h3>

            <div class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium sprk-o-Stack--split@s sprk-u-mbm">
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
                    sprk-c-Toggle__trigger
                    sprk-c-Toggle__trigger--small
                  "
                    data-sprk-toggle="trigger"
                >
                  <svg class="sprk-c-Icon sprk-c-Icon--l sprk-c-Icon--stroke-current-color sprk-c-Icon--toggle sprk-u-mrs" data-sprk-toggle="icon" viewBox="0 0 64 64">
                    <use xlink:href="#chevron-down-circle-two-color"></use>
                  </svg>
                  My Award Disclaimer
                </button>

                <div data-sprk-toggle="content">
                  <p class="sprk-b-TypeBodyFour sprk-u-pts sprk-u-pbs">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in laoreet ante,
                    non feugiat neque. Suspendisse et ipsum leo. Quisque non consectetur justo.
                  </p>
                </div>
              </div>
            </div>
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

          <ul class="sprk-o-Stack__item sprk-o-Stack__item--flex@m sprk-o-Stack sprk-o-Stack--split@xxs sprk-o-Stack--medium sprk-b-List sprk-b-List--bare">
            <li class="sprk-o-Stack__item">
              <a class="sprk-b-Link sprk-b-Link--plain" href="#nogo">
                <svg class="sprk-c-Icon sprk-c-Icon--stroke-current-color sprk-c-Icon--l" viewBox="0 0 64 64">
                  <use xlink:href="#townhouse" />
                </svg>
                <span class="sprk-u-ScreenReaderText">Townhouse</span>
              </a>
            </li>

            <li class="sprk-o-Stack__item">
              <a class="sprk-b-Link sprk-b-Link--plain" href="#nogo">
                <svg class="sprk-c-Icon sprk-c-Icon--stroke-current-color sprk-c-Icon--l" viewBox="0 0 64 64">
                  <use xlink:href="#townhouse" />
                </svg>
                <span class="sprk-u-ScreenReaderText">Townhouse</span>
              </a>
            </li>

            <li class="sprk-o-Stack__item">
              <a class="sprk-b-Link sprk-b-Link--plain" href="#nogo">
                <svg class="sprk-c-Icon sprk-c-Icon--stroke-current-color sprk-c-Icon--l" viewBox="0 0 64 64">
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
