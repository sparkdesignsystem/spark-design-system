import { useEffect } from '@storybook/client-api';
import { masthead, toggleScrollEvent } from './masthead';
import { toggle } from './toggle';
import { dropdowns } from './dropdown';
import isElementVisible from '../utilities/isElementVisible';
import { markdownDocumentationLinkBuilder } from '../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Masthead',
  decorators: [(story) => `<div>${story()}</div><div data-sprk-main></div>`],
  parameters: {
    docs: { iframeHeight: 300 },
    info: `
${markdownDocumentationLinkBuilder('masthead')}
- You should configure the size of your own logo.
By default, the logo will be automatically sized
between the \`$sprk-masthead-logo-min-width\` (174px)
and \`$sprk-masthead-logo-max-width\` (192px).
You can additionally override those min and max
settings by resetting the variables in your own Sass file.
- The default height of the Masthead on narrow
viewports is 81px. Your logo might require you to
update this value in your application’s Sass file using the
\`$sprk-masthead-narrow-height\` variable. To get the
correct value, put your logo in the Masthead and view
the total height at a narrow viewport size. This
will ensure your navigation items are lined up correctly.
- Because of the differences in Masthead design between
narrow and wide viewports, each viewport has its own HTML.
You must duplicate the HTML for your navigation in both places.
- The default breakpoint between narrow and wide viewports
is 54rem (864px). If the content needs of your application
require this breakpoint to be larger or smaller, it can be
changed in your application’s Sass file with the
variable \`$sprk-masthead-breakpoint\`.
- In Default Masthead the little nav is the section to the
right of the logo, containing the navigation links and utility
items. When the number of navigation items is too large to
fit in one row, the Extended Masthead utilizes a second row,
the big nav, to display the navigation items.
- The Masthead is a navigation landmark for accessibility
tools. The attribute \`role=”banner”\` must be present.
- The Masthead will be "sticky" on small viewports in all browsers
except for IE11.
- To see how Masthead fits into the page as a whole, see
our \`kitchen-sink\` starter repo for examples:
  - [Masthead](https://github.com/sparkdesignsystem/spark-starter-html/blob/kitchen-sink/src/pages/masthead.html)
  - [Masthead Extended](https://github.com/sparkdesignsystem/spark-starter-html/blob/kitchen-sink/src/pages/masthead-extended.html)
`,
  },
};

export const defaultStory = () => {
  useEffect(() => {
    toggle();
    masthead();

    // Our masthead.js applies load event to `window`,
    // but doesn't work in storybook iframes
    // This useEffect runs this code when component mounts
    const isMenuVisibleSB = isElementVisible('.sprk-c-Masthead__menu');
    toggleScrollEvent(isMenuVisibleSB);
  }, []);
  return `
    <header
      class="sprk-c-Masthead sprk-o-Stack"
      role="banner"
      idString="masthead-1"
      data-sprk-masthead
    >
      <div
        class="
            sprk-c-Masthead__content
            sprk-o-Stack__item
            sprk-o-Stack
            sprk-o-Stack--split@xxs
        "
      >
        <div class="
          sprk-c-Masthead__menu
          sprk-o-Stack__item
          sprk-o-Stack__item--center-column@xxs
        ">
          <button
            class="sprk-c-Menu"
            type="button"
            aria-expanded="false"
            data-sprk-mobile-nav-trigger="mobileNav"
          >
            <span class="sprk-u-ScreenReaderText">
              Toggle Navigation
            </span>
            <svg
              class="sprk-c-Icon sprk-c-Icon--xl sprk-c-Menu__icon"
              aria-hidden="true"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  class="sprk-c-Menu__line sprk-c-Menu__line--two"
                  d="m8 32h48"
                />
                <path
                  class="sprk-c-Menu__line sprk-c-Menu__line--one"
                  d="m8 18.68h48"
                />
                <path
                  class="sprk-c-Menu__line sprk-c-Menu__line--three"
                  d="m8 45.32h48"
                />
              </g>
            </svg>
          </button>
        </div>

        <div
          class="
            sprk-c-Masthead__branding
            sprk-o-Stack__item
            sprk-o-Stack__item--center-column@xxs
          "
        >
          <a href="#nogo">
            <svg class="sprk-c-Masthead__logo" xmlns="http://www.w3.org/2000/svg" width="365.4" height="48" viewBox="0 0 365.4 101.35"><title>spark-red-full-outlines</title><path d="M126.15,53.65l5.76-9.25a20.84,20.84,0,0,0,13.34,5c4.37,0,6.56-1.75,6.56-4.89s-2.55-4.44-9.77-6.78c-7.58-2.48-13.85-6.19-13.85-15,0-10,7.51-15.89,18.37-15.89a27.64,27.64,0,0,1,15.75,4.73l-5.47,9.33a18.14,18.14,0,0,0-10.35-3.57c-3.94,0-6.34,1.68-6.34,4.81,0,3.28,3.21,4.16,9.47,6.27,7.88,2.63,14.22,5.83,14.22,15.31,0,10.28-7.66,16.33-19.32,16.33C136.65,60.07,129.94,57,126.15,53.65Z"/><path d="M211.37,25.44c0,9.26-6.64,18.59-21.58,18.59h-5.25V59.34H172.66V7.59h17.28C204.81,7.59,211.37,16,211.37,25.44Zm-12.4.3c0-5.84-4.22-8.53-9.84-8.53h-4.59v17.2h4.59C194.75,34.41,199,31.57,199,25.74Z"/><path d="M244.46,49.86h-19.9l-3.2,9.48h-12L228.28,7.59h13l19,51.75H247.67Zm-3.21-9.33-6.77-20-6.78,20Z"/><path d="M311.23,59.34h-14L281.93,40.1l-3.35-4.45V59.34H266.7V7.59h22.88c12,0,18.45,6.85,18.45,15.3,0,7.36-4.52,14.14-13.49,16.4ZM287.32,31c4.52,0,8.31-2.4,8.31-7s-3.64-6.78-8.16-6.78h-8.89V31Z"/><path d="M349.87,59.34,328.51,34.41V59.34H316.63V7.59h11.88V31.2L349,7.59h14.95L341.49,32.3l23.91,27Z"/><path d="M145.34,83.09c0,6.53-4.86,11.18-12.18,11.18h-6.47v-22h6.47C140.48,72.28,145.34,76.68,145.34,83.09Zm-2.39,0c0-5.24-3.87-8.74-9.82-8.74H129V92.16h4.09C139.08,92.16,143,88.45,143,83.12Z"/><path d="M150.61,72.28h14v2.1H152.93v7.81h11v2.08h-11v7.89h11.9v2.11H150.61Z"/><path d="M168.61,92.1l1.33-1.89a8.59,8.59,0,0,0,5.95,2.23c2.85,0,4.64-1.39,4.64-3.93s-2-3.35-5.05-4.4c-2.66-.93-6.13-2.14-6.13-6.2,0-3.68,2.85-6,7-6a10,10,0,0,1,5.76,1.7l-1.08,2a8.19,8.19,0,0,0-4.71-1.55c-2.88,0-4.68,1.43-4.68,3.78s2,3.22,4.84,4.28c3.22,1.14,6.35,2.17,6.35,6.25s-3,6.2-7.13,6.2A10.58,10.58,0,0,1,168.61,92.1Z"/><path d="M188.13,72.28h2.32v22h-2.32Z"/><path d="M195.72,83.27A11.18,11.18,0,0,1,207.08,72a12.24,12.24,0,0,1,7.72,2.6l-1.36,1.89a10.44,10.44,0,0,0-6.36-2.26,9.07,9.07,0,0,0-.34,18.12A9.52,9.52,0,0,0,213,90.24V85H207V83h8.3v8.4a12.81,12.81,0,0,1-8.52,3.19A11.07,11.07,0,0,1,195.72,83.27Z"/><path d="M239.27,72.28v22h-1.64L223.35,76V94.27h-2.29v-22h2.2L237,89.78V72.28Z"/><path d="M252.29,92.1l1.33-1.89a8.59,8.59,0,0,0,5.95,2.23c2.85,0,4.64-1.39,4.64-3.93s-2-3.35-5-4.4C256.5,83.18,253,82,253,77.91c0-3.68,2.85-6,7-6a10,10,0,0,1,5.76,1.7l-1.08,2A8.19,8.19,0,0,0,260,74.07c-2.88,0-4.68,1.43-4.68,3.78s1.95,3.22,4.84,4.28c3.22,1.14,6.35,2.17,6.35,6.25s-3,6.2-7.13,6.2A10.58,10.58,0,0,1,252.29,92.1Z"/><path d="M278.4,85.47v8.8h-2.29v-8.8l-7.84-13.19h2.61l6.47,10.9,6.44-10.9h2.45Z"/><path d="M287.67,92.1,289,90.21A8.61,8.61,0,0,0,295,92.44c2.85,0,4.64-1.39,4.64-3.93s-2-3.35-5-4.4c-2.67-.93-6.14-2.14-6.14-6.2,0-3.68,2.85-6,7-6a10,10,0,0,1,5.76,1.7l-1.08,2a8.19,8.19,0,0,0-4.71-1.55c-2.88,0-4.68,1.43-4.68,3.78s2,3.22,4.84,4.28c3.22,1.14,6.35,2.17,6.35,6.25s-3,6.2-7.13,6.2A10.58,10.58,0,0,1,287.67,92.1Z"/><path d="M321,74.38h-7.62V94.27h-2.32V74.38h-7.78v-2.1H321Z"/><path d="M324.41,72.28h14v2.1H326.73v7.81h11v2.08h-11v7.89h11.9v2.11H324.41Z"/><path d="M343.87,72.28h2.54l7.56,11,7.65-11h2.57v22H361.9V75.78l-7.56,10.81h-.72l-7.46-10.81V94.27h-2.29Z"/><path d="M90.36,93l19.77-34.47a16.46,16.46,0,0,0,0-16.42l-5.54-9.53L90.77,56.26A18.38,18.38,0,0,1,80.1,74.63L64.63,101.26l11.53,0A16.48,16.48,0,0,0,90.36,93Z" fill="#a31e28"/><path d="M80.1,74.63a1.19,1.19,0,0,1-.16.08L45.86,90.3l-6.42,11,25.19-.08Z" fill="#b6202d"/><path d="M91.2,12.25l-16,27.53A18.21,18.21,0,0,1,90.77,56.26l13.77-23.7L93.45,13.47A2.47,2.47,0,0,0,91.2,12.25Z" fill="#b6202d"/><path d="M44.7,90.83,32.6,96.36a2.47,2.47,0,0,0,.56,4.66,15.71,15.71,0,0,0,3.22.33h3.06l6.42-11Z" fill="#c7202f"/><path d="M75.21,39.78l16-27.53a2.31,2.31,0,0,0-.88.21l-7.63,3.38L57.47,27,43.84,50.5l20.91-9.33A18.68,18.68,0,0,1,75.21,39.78Z" fill="#c7202f"/><path d="M36.83,36.18a8.11,8.11,0,0,0-4.26,10.41A8,8,0,0,0,43.16,50.8l.68-.3L57.47,27Z" fill="#cd2442"/><path d="M79.73,54.75a8,8,0,0,0-10.59-4.2l-.25.11L55.26,74.12l20.2-9A8.1,8.1,0,0,0,79.73,54.75Z" fill="#b6202d"/><path d="M37.39,61.6,21.45,89.05a3.56,3.56,0,0,0,.53-.16l7.63-3.39L55.26,74.12,68.89,50.66,47.55,60.17A18.57,18.57,0,0,1,37.39,61.6Z" fill="#c7202f"/><path d="M67.6,10.52,79.7,5A2.47,2.47,0,0,0,79.14.32,16.46,16.46,0,0,0,75.91,0H73.18l-6.3,10.84Z" fill="#c7202f"/><path d="M23.11,51.11a18.5,18.5,0,0,1-1.54-5.52L7.92,69.08l10.93,18.8a2.47,2.47,0,0,0,2.61,1.17L37.41,61.6A18.36,18.36,0,0,1,23.11,51.11Z" fill="#cd2442"/><polygon points="32.66 26.49 66.9 10.84 73.19 0.01 48.01 0.08 32.66 26.49" fill="#cd2442"/><path d="M22.64,37a18.29,18.29,0,0,1,9.72-10.32l.28-.12L48,.08,36.14.12a16.44,16.44,0,0,0-14.2,8.25L2.17,42.83a16.48,16.48,0,0,0,.05,16.43l5.69,9.8,13.66-23.5A18.31,18.31,0,0,1,22.64,37Z" fill="#d23c54"/></svg>
          </a>
        </div>
        <div
          class="
            sprk-c-Masthead__nav-item
            sprk-o-Stack__item
            sprk-o-Stack__item--center-column@xxs
          "
        >
          <a
            class="
              sprk-b-Link
              sprk-b-Link--simple
              sprk-c-Masthead__link
            "
            href="#nogo"
          >
            Sign In
          </a>
        </div>

        <nav
          role="navigation"
          class="
            sprk-c-Masthead__little-nav
            sprk-o-Stack__item
            sprk-o-Stack__item--flex@xxs
            sprk-o-Stack
            sprk-o-Stack--misc-a
            sprk-o-Stack--split@xxs
            sprk-o-Stack--end-row
          "
        >
          <ul
            class="
              sprk-c-Masthead__site-links
              sprk-o-Stack__item
              sprk-o-HorizontalList
              sprk-o-HorizontalList--spacing-large
              sprk-o-Stack__item--center-column
            "
          >
            <li>
              <a
                class="
                  sprk-b-Link
                  sprk-b-Link--simple
                  sprk-c-Masthead__link
                "
                href="#nogo"
              >
                Item 1
              </a>
            </li>

            <li>
              <a
                class="
                  sprk-b-Link
                  sprk-b-Link--simple
                  sprk-c-Masthead__link
                "
                href="#nogo"
              >
                Item 2
              </a>
            </li>
          </ul>

          <ul
            class="
              sprk-o-Stack__item
              sprk-o-HorizontalList
              sprk-o-HorizontalList--spacing-large
              sprk-o-Stack--center-column
            "
          >
            <li>
              <a
                class="
                  sprk-b-Link
                  sprk-b-Link--simple
                  sprk-c-Masthead__link
                "
                href="tel:555-555-5555"
              >
                (555) 555-5555
              </a>
            </li>

            <li>
              <a
                class="
                  sprk-b-Link
                  sprk-b-Link--simple
                  sprk-c-Masthead__link
                "
                href="#nogo"
              >
                Talk To Us
              </a>
            </li>

            <li>
              <a
                class="
                  sprk-c-Button
                  sprk-c-Button--secondary
                  sprk-c-Button--compact
                "
                href="#nogo"
              >
                Sign In
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <nav
        class="sprk-c-Masthead__narrow-nav sprk-u-Display--none"
        data-sprk-mobile-nav="mobileNav"
        role="navigation"
        data-id="navigation-narrow-1"
      >
        <ul class="sprk-c-MastheadAccordion sprk-b-List sprk-b-List--bare">
          <li
            class="sprk-c-MastheadAccordion__item"
            data-sprk-toggle="container"
          >
            <button
              class="sprk-c-MastheadAccordion__summary"
              data-sprk-toggle="trigger"
              data-sprk-toggle-type="masthead-accordion"
            >
              <span
                class="
                  sprk-b-TypeBodyOne
                  sprk-c-MastheadAccordion__heading
                "
              >
                Item 1
              </span>

              <svg
                class="
                  sprk-c-Icon
                  sprk-c-Icon--filled-current-color
                  sprk-c-Icon--stroke-current-color
                  sprk-c-MastheadAccordion__icon
                "
                data-sprk-toggle="icon"
                viewBox="0 0 64 64"
              >
                <use xlink:href="#chevron-down"></use>
              </svg>
            </button>

            <ul
              class="
                sprk-b-List
                sprk-b-List--bare
                sprk-c-MastheadAccordion__details
              "
              data-sprk-toggle="content"
            >
              <li>
                <a
                  class="sprk-b-Link sprk-b-Link--plain sprk-c-Masthead__link"
                  href="#nogo"
                >
                  Item 1
                </a>
              </li>

              <li>
                <a
                  class="sprk-b-Link sprk-b-Link--plain sprk-c-Masthead__link"
                  href="#nogo"
                >
                  Item 2
                </a>
              </li>

              <li>
                <a
                  class="sprk-b-Link sprk-b-Link--plain sprk-c-Masthead__link"
                  href="#nogo"
                >
                  Item 3
                </a>
              </li>
            </ul>
          </li>

          <li
            class="
              sprk-c-MastheadAccordion__item
              sprk-c-MastheadAccordion__item--active
            "
          >
            <a
              class="sprk-c-MastheadAccordion__summary"
              href="#nogo"
            >
              <span
                class="
                  sprk-b-TypeBodyOne
                  sprk-c-MastheadAccordion__heading
                ">
                Item 2
              </span>
            </a>
          </li>

          <li class="sprk-c-MastheadAccordion__item">
            <a
              class="
                sprk-c-MastheadAccordion__summary
              "
              href="tel:555-555-5555"
            >
              <span
                class="
                  sprk-b-TypeBodyOne
                  sprk-c-MastheadAccordion__heading
                "
              >
                <svg
                  class="
                    sprk-c-Icon
                    sprk-c-Icon--xl
                    sprk-c-Icon--filled-current-color
                    sprk-c-Icon--stroke-current-color
                    sprk-u-mrs
                  "
                  viewBox="0 0 64 64"
                >
                  <use xlink:href="#landline" />
                </svg>
                (555) 555-5555
              </span>
              </a>
          </li>

          <li class="sprk-c-MastheadAccordion__item">
            <a
              class="sprk-c-MastheadAccordion__summary"
              href="#nogo"
            >
              <span
                class="
                  sprk-b-TypeBodyOne
                  sprk-c-MastheadAccordion__heading
                "
              >
                <svg
                  class="
                    sprk-c-Icon
                    sprk-c-Icon--xl
                    sprk-c-Icon--filled-current-color
                    sprk-c-Icon--stroke-current-color
                    sprk-u-mrs
                  "
                  viewBox="0 0 64 64"
                >
                  <use xlink:href="#call-team-member" />
                </svg>
                Talk To Us
              </span>
            </a>
          </li>

          <li class="sprk-c-MastheadAccordion__item sprk-o-Box">
            <a
              class="
                sprk-c-Button
                sprk-c-Button--secondary
                sprk-c-Button--compact
                sprk-c-Button--full@s
              "
              href="#nogo"
            >
              Sign In
            </a>
          </li>
        </ul>
      </nav>
    </header>
  `;
};

defaultStory.story = {
  name: 'Default',
  parameters: {
    jest: ['masthead'],
  },
};

export const extended = () => {
  useEffect(() => {
    toggle();
    masthead();
    dropdowns();

    // Our masthead.js applies load event to `window`,
    // but doesn't work in storybook iframes
    // This useEffect runs this code when component mounts
    const isMenuVisibleSB = isElementVisible('.sprk-c-Masthead__menu');
    toggleScrollEvent(isMenuVisibleSB);
  }, []);
  return `
    <header
      class="sprk-c-Masthead sprk-o-Stack"
      role="banner"
      idstring="masthead-2"
      data-sprk-masthead
    >
      <div
        class="
          sprk-c-Masthead__content
          sprk-o-Stack__item
          sprk-o-Stack
          sprk-o-Stack--split@xxs
        ">
        <div
          class="
            sprk-c-Masthead__menu
            sprk-o-Stack__item
            sprk-o-Stack__item--center-column@xxs
          "
        >
          <button
            class="sprk-c-Menu"
            type="button"
            aria-expanded="false"
            data-sprk-mobile-nav-trigger="mobileNav2"
          >
            <span class="sprk-u-ScreenReaderText">Toggle Navigation</span>
            <svg class="sprk-c-Icon sprk-c-Icon--xl sprk-c-Menu__icon" aria-hidden="true" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <g>
                <path
                  class="sprk-c-Menu__line sprk-c-Menu__line--two"
                  d="m8 32h48"
                >
                </path>
                <path
                  class="sprk-c-Menu__line sprk-c-Menu__line--one"
                  d="m8 18.68h48"
                >
                </path>
                <path
                  class="sprk-c-Menu__line sprk-c-Menu__line--three"
                  d="m8 45.32h48"
                >
                </path>
              </g>
            </svg>
          </button>
        </div>

        <div
          class="
            sprk-c-Masthead__branding
            sprk-o-Stack__item
            sprk-o-Stack__item--center-column@xxs
          "
        >
          <a href="#nogo">
            <svg class="sprk-c-Masthead__logo" xmlns="http://www.w3.org/2000/svg" width="365.4" height="48" viewBox="0 0 365.4 101.35"><title>spark-red-full-outlines</title><path d="M126.15,53.65l5.76-9.25a20.84,20.84,0,0,0,13.34,5c4.37,0,6.56-1.75,6.56-4.89s-2.55-4.44-9.77-6.78c-7.58-2.48-13.85-6.19-13.85-15,0-10,7.51-15.89,18.37-15.89a27.64,27.64,0,0,1,15.75,4.73l-5.47,9.33a18.14,18.14,0,0,0-10.35-3.57c-3.94,0-6.34,1.68-6.34,4.81,0,3.28,3.21,4.16,9.47,6.27,7.88,2.63,14.22,5.83,14.22,15.31,0,10.28-7.66,16.33-19.32,16.33C136.65,60.07,129.94,57,126.15,53.65Z"/><path d="M211.37,25.44c0,9.26-6.64,18.59-21.58,18.59h-5.25V59.34H172.66V7.59h17.28C204.81,7.59,211.37,16,211.37,25.44Zm-12.4.3c0-5.84-4.22-8.53-9.84-8.53h-4.59v17.2h4.59C194.75,34.41,199,31.57,199,25.74Z"/><path d="M244.46,49.86h-19.9l-3.2,9.48h-12L228.28,7.59h13l19,51.75H247.67Zm-3.21-9.33-6.77-20-6.78,20Z"/><path d="M311.23,59.34h-14L281.93,40.1l-3.35-4.45V59.34H266.7V7.59h22.88c12,0,18.45,6.85,18.45,15.3,0,7.36-4.52,14.14-13.49,16.4ZM287.32,31c4.52,0,8.31-2.4,8.31-7s-3.64-6.78-8.16-6.78h-8.89V31Z"/><path d="M349.87,59.34,328.51,34.41V59.34H316.63V7.59h11.88V31.2L349,7.59h14.95L341.49,32.3l23.91,27Z"/><path d="M145.34,83.09c0,6.53-4.86,11.18-12.18,11.18h-6.47v-22h6.47C140.48,72.28,145.34,76.68,145.34,83.09Zm-2.39,0c0-5.24-3.87-8.74-9.82-8.74H129V92.16h4.09C139.08,92.16,143,88.45,143,83.12Z"/><path d="M150.61,72.28h14v2.1H152.93v7.81h11v2.08h-11v7.89h11.9v2.11H150.61Z"/><path d="M168.61,92.1l1.33-1.89a8.59,8.59,0,0,0,5.95,2.23c2.85,0,4.64-1.39,4.64-3.93s-2-3.35-5.05-4.4c-2.66-.93-6.13-2.14-6.13-6.2,0-3.68,2.85-6,7-6a10,10,0,0,1,5.76,1.7l-1.08,2a8.19,8.19,0,0,0-4.71-1.55c-2.88,0-4.68,1.43-4.68,3.78s2,3.22,4.84,4.28c3.22,1.14,6.35,2.17,6.35,6.25s-3,6.2-7.13,6.2A10.58,10.58,0,0,1,168.61,92.1Z"/><path d="M188.13,72.28h2.32v22h-2.32Z"/><path d="M195.72,83.27A11.18,11.18,0,0,1,207.08,72a12.24,12.24,0,0,1,7.72,2.6l-1.36,1.89a10.44,10.44,0,0,0-6.36-2.26,9.07,9.07,0,0,0-.34,18.12A9.52,9.52,0,0,0,213,90.24V85H207V83h8.3v8.4a12.81,12.81,0,0,1-8.52,3.19A11.07,11.07,0,0,1,195.72,83.27Z"/><path d="M239.27,72.28v22h-1.64L223.35,76V94.27h-2.29v-22h2.2L237,89.78V72.28Z"/><path d="M252.29,92.1l1.33-1.89a8.59,8.59,0,0,0,5.95,2.23c2.85,0,4.64-1.39,4.64-3.93s-2-3.35-5-4.4C256.5,83.18,253,82,253,77.91c0-3.68,2.85-6,7-6a10,10,0,0,1,5.76,1.7l-1.08,2A8.19,8.19,0,0,0,260,74.07c-2.88,0-4.68,1.43-4.68,3.78s1.95,3.22,4.84,4.28c3.22,1.14,6.35,2.17,6.35,6.25s-3,6.2-7.13,6.2A10.58,10.58,0,0,1,252.29,92.1Z"/><path d="M278.4,85.47v8.8h-2.29v-8.8l-7.84-13.19h2.61l6.47,10.9,6.44-10.9h2.45Z"/><path d="M287.67,92.1,289,90.21A8.61,8.61,0,0,0,295,92.44c2.85,0,4.64-1.39,4.64-3.93s-2-3.35-5-4.4c-2.67-.93-6.14-2.14-6.14-6.2,0-3.68,2.85-6,7-6a10,10,0,0,1,5.76,1.7l-1.08,2a8.19,8.19,0,0,0-4.71-1.55c-2.88,0-4.68,1.43-4.68,3.78s2,3.22,4.84,4.28c3.22,1.14,6.35,2.17,6.35,6.25s-3,6.2-7.13,6.2A10.58,10.58,0,0,1,287.67,92.1Z"/><path d="M321,74.38h-7.62V94.27h-2.32V74.38h-7.78v-2.1H321Z"/><path d="M324.41,72.28h14v2.1H326.73v7.81h11v2.08h-11v7.89h11.9v2.11H324.41Z"/><path d="M343.87,72.28h2.54l7.56,11,7.65-11h2.57v22H361.9V75.78l-7.56,10.81h-.72l-7.46-10.81V94.27h-2.29Z"/><path d="M90.36,93l19.77-34.47a16.46,16.46,0,0,0,0-16.42l-5.54-9.53L90.77,56.26A18.38,18.38,0,0,1,80.1,74.63L64.63,101.26l11.53,0A16.48,16.48,0,0,0,90.36,93Z" fill="#a31e28"/><path d="M80.1,74.63a1.19,1.19,0,0,1-.16.08L45.86,90.3l-6.42,11,25.19-.08Z" fill="#b6202d"/><path d="M91.2,12.25l-16,27.53A18.21,18.21,0,0,1,90.77,56.26l13.77-23.7L93.45,13.47A2.47,2.47,0,0,0,91.2,12.25Z" fill="#b6202d"/><path d="M44.7,90.83,32.6,96.36a2.47,2.47,0,0,0,.56,4.66,15.71,15.71,0,0,0,3.22.33h3.06l6.42-11Z" fill="#c7202f"/><path d="M75.21,39.78l16-27.53a2.31,2.31,0,0,0-.88.21l-7.63,3.38L57.47,27,43.84,50.5l20.91-9.33A18.68,18.68,0,0,1,75.21,39.78Z" fill="#c7202f"/><path d="M36.83,36.18a8.11,8.11,0,0,0-4.26,10.41A8,8,0,0,0,43.16,50.8l.68-.3L57.47,27Z" fill="#cd2442"/><path d="M79.73,54.75a8,8,0,0,0-10.59-4.2l-.25.11L55.26,74.12l20.2-9A8.1,8.1,0,0,0,79.73,54.75Z" fill="#b6202d"/><path d="M37.39,61.6,21.45,89.05a3.56,3.56,0,0,0,.53-.16l7.63-3.39L55.26,74.12,68.89,50.66,47.55,60.17A18.57,18.57,0,0,1,37.39,61.6Z" fill="#c7202f"/><path d="M67.6,10.52,79.7,5A2.47,2.47,0,0,0,79.14.32,16.46,16.46,0,0,0,75.91,0H73.18l-6.3,10.84Z" fill="#c7202f"/><path d="M23.11,51.11a18.5,18.5,0,0,1-1.54-5.52L7.92,69.08l10.93,18.8a2.47,2.47,0,0,0,2.61,1.17L37.41,61.6A18.36,18.36,0,0,1,23.11,51.11Z" fill="#cd2442"/><polygon points="32.66 26.49 66.9 10.84 73.19 0.01 48.01 0.08 32.66 26.49" fill="#cd2442"/><path d="M22.64,37a18.29,18.29,0,0,1,9.72-10.32l.28-.12L48,.08,36.14.12a16.44,16.44,0,0,0-14.2,8.25L2.17,42.83a16.48,16.48,0,0,0,.05,16.43l5.69,9.8,13.66-23.5A18.31,18.31,0,0,1,22.64,37Z" fill="#d23c54"/></svg>
          </a>
        </div>
        <div
          class="
            sprk-c-Masthead__nav-item
            sprk-o-Stack__item
            sprk-o-Stack__item--center-column@xxs
          "
        >
          <a
            class="
              sprk-b-Link
              sprk-b-Link--simple
              sprk-c-Masthead__link
            "
            href="#nogo"
          >
            Sign In
          </a>
        </div>

        <nav
          class="
            sprk-c-Masthead__little-nav
            sprk-o-Stack__item
            sprk-o-Stack__item--flex@xxs
            sprk-o-Stack
            sprk-o-Stack--large
            sprk-o-Stack--end-row sprk-o-Stack--split@s
          "
          role="navigation"
        >
          <div
            class="
              sprk-o-Stack__item
              sprk-o-Stack__item--flex@xxs
              sprk-o-Stack
              sprk-o-Stack--center-column sprk-o-Stack--center-row
            "
          >
            <div class="sprk-o-Stack__item sprk-u-Position--relative">
              <a
                class="
                  sprk-c-Masthead__selector
                  sprk-b-Link
                  sprk-b-Link--plain
                  sprk-o-Stack
                  sprk-o-Stack--split@xxs
                  sprk-o-Stack--center-column
                "
                href="#nogo"
                data-sprk-dropdown-trigger="dropdown-selector-wide"
                aria-haspopup="true"
                data-id="link-1"
              >
                <span
                  class="sprk-o-Stack__item sprk-o-Stack__item--flex@xxs"
                  data-sprk-dropdown-trigger-text-container
                  role="combobox"
                >
                  Choose One
                </span>
                <svg
                  class="
                    sprk-c-Icon
                    sprk-c-Icon--toggle
                    sprk-Stack__item
                  "
                  viewBox="0 0 100 100"
                >
                  <use xlink:href="#chevron-down"></use>
                </svg>
              </a>

              <div
                class="sprk-c-Masthead__selector-dropdown sprk-u-Display--none"
                data-sprk-dropdown="dropdown-selector-wide"
                >
                <div class="sprk-c-Masthead__selector-dropdown-header">
                  <a
                    class="
                      sprk-c-Masthead__selector-dropdown-header-link
                      sprk-b-Link
                      sprk-b-Link--plain
                      sprk-o-Stack
                      sprk-o-Stack--split@xxs
                      sprk-o-Stack--center-column
                      sprk-u-Width-100
                    "
                    href="#nogo"
                    aria-haspopup="true"
                    data-sprk-selector-dropdown-trigger="dropdown-selector-wide"
                  >
                    <span
                      class="
                        sprk-c-Masthead__selector-dropdown-title
                        sprk-b-TypeBodyTwo
                        sprk-o-Stack__item
                        sprk-o-Stack__item--flex@xxs
                      "
                    >
                      Choose One
                    </span>
                    <svg
                      class="
                        sprk-c-Icon
                        sprk-c-Icon--toggle
                        sprk-Stack__item
                      "
                      viewBox="0 0 100 100"
                    >
                      <use xlink:href="#chevron-up"></use>
                    </svg>
                  </a>
                </div>

                <ul class="sprk-c-Masthead__selector-dropdown-links">
                  <li class="sprk-c-Masthead__selector-dropdown-item">
                    <a
                      class="sprk-c-Masthead__selector-dropdown-link sprk-u-ptm"
                      href="#nogo"
                      data-sprk-dropdown-choice="Selection Choice Title 1"
                      role="option"
                    >
                      <p class="sprk-b-TypeBodyOne">Selection Choice Title 1</p>
                      <p>Additional Information</p>
                    </a>
                  </li>

                  <li
                    class="sprk-c-Masthead__selector-dropdown-item"
                    data-sprk-dropdown-choice="Selection Choice Title 2"
                  >
                    <a
                      class="sprk-c-Masthead__selector-dropdown-link"
                      href="#nogo"
                      role="option"
                    >
                      <p class="sprk-b-TypeBodyOne">Selection Choice Title 2</p>
                      <p>Additional Information</p>
                    </a>
                  </li>
                </ul>

                <div
                  class="
                    sprk-c-Masthead__selector-footer
                    sprk-u-TextAlign--center
                  "
                >
                  <a
                    class="
                      sprk-c-Button
                      sprk-c-Button--compact
                      sprk-c-Button--secondary
                    "
                    href="#nogo"
                  >
                    Placeholder
                  </a>
                </div>
              </div>
            </div>
          </div>

          <ul
            class="
              sprk-o-Stack__item
              sprk-o-HorizontalList
              sprk-o-HorizontalList--spacing-medium
              sprk-o-Stack--center-column
            "
          >
            <li>
              <a
                class="
                  sprk-b-Link
                  sprk-b-Link--simple
                  sprk-c-Masthead__link
                "
                href="#nogo"
              >
                Talk To Us
              </a>
            </li>

            <li>
              <a
                class="sprk-b-Link sprk-b-Link--plain sprk-c-Masthead__link"
                href="#nogo"
                data-sprk-dropdown-trigger="dropdown02"
                aria-haspopup="true"
                role="combobox"
              >
                <svg
                  class="
                    sprk-c-Icon
                    sprk-c-Icon--xl
                    sprk-c-Icon--filled-current-color
                  "
                  viewBox="0 0 100 100"
                >
                  <use xlink:href="#user"></use>
                </svg>
                <span class="sprk-u-ScreenReaderText">User Account</span>
              </a>

              <div
                class="
                  sprk-c-Dropdown
                  sprk-u-Display--none
                  sprk-u-Right--zero
                  sprk-u-mrm
                "
                data-sprk-dropdown="dropdown02"
              >
                <div class="sprk-c-Dropdown__header">
                  <h2 class="sprk-c-Dropdown__title sprk-b-TypeBodyTwo">
                    My Account
                  </h2>
                </div>

                <ul class="sprk-c-Dropdown__links">
                  <li class="sprk-c-Dropdown__item" role="option">
                    <a class="sprk-c-Dropdown__link" href="#nogo">
                      Change Username
                    </a>
                  </li>

                  <li class="sprk-c-Dropdown__item" role="option">
                    <a class="sprk-c-Dropdown__link" href="#nogo">
                      Change Password
                    </a>
                  </li>

                  <li class="sprk-c-Dropdown__item" role="option">
                    <a class="sprk-c-Dropdown__link" href="#nogo">
                      Sign Out
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </div>

      <div class="sprk-o-Stack__item">
        <nav class="sprk-c-Masthead__big-nav" role="navigation">
          <ul
            class="
              sprk-c-Masthead__big-nav-items
              sprk-o-Stack
              sprk-o-Stack--misc-a
              sprk-o-Stack--center-row
              sprk-o-Stack--split@xxs
              sprk-b-List
              sprk-b-List--bare
            "
            data-sprk-navigation="big"
          >
            <li
              class="
                sprk-c-Masthead__big-nav-item
                sprk-o-Stack__item
                sprk-c-Masthead__big-nav-item--active
              "
            >
              <a
                class="
                  sprk-b-Link
                  sprk-b-Link--simple
                  sprk-c-Masthead__link
                  sprk-c-Masthead__link--big-nav
                "
                href="#nogo"
                data-sprk-dropdown-trigger="dropdown03"
                aria-haspopup="true"
                role="combobox"
              >
                Navigation Item

                <svg
                  class="
                    sprk-c-Icon
                    sprk-c-Icon--filled-current-color
                    sprk-c-Icon--stroke-current-color
                    sprk-u-mls
                  "
                  viewBox="0 0 64 64"
                >
                  <use xlink:href="#chevron-down"></use>
                </svg>
              </a>

              <div
                class="
                  sprk-c-Dropdown
                  sprk-u-Display--none
                  sprk-u-TextAlign--left
                "
                data-sprk-dropdown="dropdown03"
              >
                <ul class="sprk-c-Dropdown__links">
                  <li class="sprk-c-Dropdown__item" role="option">
                    <a class="sprk-c-Dropdown__link" href="#nogo">
                      Placeholder
                    </a>
                  </li>

                  <li class="sprk-c-Dropdown__item" role="option">
                    <a class="sprk-c-Dropdown__link" href="#nogo">
                      Item
                    </a>
                  </li>

                  <li class="sprk-c-Dropdown__item" role="option">
                    <a class="sprk-c-Dropdown__link" href="#nogo">
                      Sub Menu Item
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li class="sprk-c-Masthead__big-nav-item sprk-o-Stack__item">
              <a
                class="
                  sprk-b-Link
                  sprk-b-Link--simple
                  sprk-c-Masthead__link
                  sprk-c-Masthead__link--big-nav
                "
                href="#nogo-link"
              >
                Your Item
              </a>
            </li>

            <li class="sprk-c-Masthead__big-nav-item sprk-o-Stack__item">
              <a
                class="
                  sprk-b-Link
                  sprk-b-Link--simple
                  sprk-c-Masthead__link
                  sprk-c-Masthead__link--big-nav
                "
                href="#nogo"
              >
                Nav Item
              </a>
            </li>

            <li class="sprk-c-Masthead__big-nav-item sprk-o-Stack__item">
              <a
                class="
                  sprk-b-Link
                  sprk-b-Link--simple
                  sprk-c-Masthead__link
                  sprk-c-Masthead__link--big-nav
                "
                href="#nogo"
                data-sprk-dropdown-trigger="dropdown04"
                aria-haspopup="true"
                role="combobox"
              >
                Navigation Item

                <svg
                  class="
                    sprk-c-Icon
                    sprk-c-Icon--filled-current-color
                    sprk-c-Icon--stroke-current-color
                    sprk-u-mls
                  "
                  viewBox="0 0 64 64"
                >
                  <use xlink:href="#chevron-down"></use>
                </svg>
              </a>

              <div
                class="
                  sprk-c-Dropdown
                  sprk-u-Display--none
                  sprk-u-TextAlign--left
                "
                data-sprk-dropdown="dropdown04"
              >
                <ul class="sprk-c-Dropdown__links">
                  <li class="sprk-c-Dropdown__item" role="option">
                    <a class="sprk-c-Dropdown__link" href="#nogo">
                      Dropdown Item
                    </a>
                  </li>

                  <li class="sprk-c-Dropdown__item" role="option">
                    <a class="sprk-c-Dropdown__link" href="#nogo">
                      Placeholder
                    </a>
                  </li>

                  <li class="sprk-c-Dropdown__item" role="option">
                    <a class="sprk-c-Dropdown__link" href="#nogo">
                      Dropdown Placeholder Item
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li class="sprk-c-Masthead__big-nav-item sprk-o-Stack__item">
              <a
                class="
                  sprk-b-Link
                  sprk-b-Link--simple
                  sprk-c-Masthead__link
                  sprk-c-Masthead__link--big-nav
                "
                href="#nogo"
              >
                Item
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <nav
        class="
          sprk-c-Masthead__narrow-nav
          sprk-u-Display--none
        "
        data-sprk-mobile-nav="mobileNav2"
        role="navigation"
        data-id="navigation-narrow-2"
      >
        <div data-sprk-masthead-mask="">
          <div class="sprk-o-Box">
            <a
              class="
                sprk-c-Masthead__selector
                sprk-b-Link
                sprk-b-Link--plain
                sprk-o-Stack
                sprk-o-Stack--split@xxs
                sprk-o-Stack--center-column
              "
              href="#nogo"
              data-sprk-dropdown-trigger="dropdown-selector"
              aria-haspopup="true"
            >
              <span
                class="sprk-o-Stack__item sprk-o-Stack__item--flex@xxs"
                data-sprk-dropdown-trigger-text-container
                role="combobox"
              >
                Choose One
              </span>
              <svg
                class="
                  sprk-c-Icon
                  sprk-c-Icon--toggle
                  sprk-Stack__item
                "
                viewBox="0 0 100 100"
              >
                <use xlink:href="#chevron-down"></use>
              </svg>
            </a>
          </div>

          <div
            class="sprk-c-Masthead__selector-dropdown sprk-u-Display--none"
            data-sprk-dropdown="dropdown-selector"
          >
            <div class="sprk-c-Masthead__selector-dropdown-header">
              <a
                class="
                  sprk-c-Masthead__selector-dropdown-header-link
                  sprk-b-Link
                  sprk-b-Link--plain
                  sprk-o-Stack
                  sprk-o-Stack--split@xxs
                  sprk-o-Stack--center-column
                  sprk-u-Width-100
                "
                href="#nogo"
                aria-haspopup="true"
                data-sprk-selector-dropdown-trigger="dropdown-selector"
              >
                <span
                  class="
                    sprk-c-Masthead__selector-dropdown-title
                    sprk-b-TypeBodyTwo
                    sprk-o-Stack__item
                    sprk-o-Stack__item--flex@xxs
                  "
                >
                  Choose One
                </span>
                <svg
                  class="
                    sprk-c-Icon
                    sprk-c-Icon--toggle
                    sprk-Stack__item
                  "
                  viewBox="0 0 100 100"
                >
                  <use xlink:href="#chevron-up"></use>
                </svg>
              </a>
            </div>

            <ul class="sprk-c-Masthead__selector-dropdown-links">
              <li class="sprk-c-Masthead__selector-dropdown-item">
                <a
                  class="sprk-c-Masthead__selector-dropdown-link"
                  href="#nogo"
                  data-sprk-dropdown-choice="Selection Choice Title 1"
                  role="option"
                >
                  <p class="sprk-b-TypeBodyOne">Selection Choice Title 1</p>
                  <p>Additional Information</p>
                </a>
              </li>

              <li
                class="sprk-c-Masthead__selector-dropdown-item"
                data-sprk-dropdown-choice="Selection Choice Title 2"
              >
                <a
                  class="sprk-c-Masthead__selector-dropdown-link"
                  href="#nogo"
                  role="option"
                >
                  <p class="sprk-b-TypeBodyOne">Selection Choice Title 2</p>
                  <p>Additional Information</p>
                </a>
              </li>
            </ul>

            <div class="sprk-c-Masthead__selector-footer">
              <a
                class="
                  sprk-c-Button
                  sprk-c-Button--compact
                  sprk-c-Button--secondary
                "
                href="#nogo"
              >
                Placeholder
              </a>
            </div>
          </div>
        </div>

        <ul class="sprk-c-MastheadAccordion sprk-b-List sprk-b-List--bare">
          <li
            class="sprk-c-MastheadAccordion__item"
            data-sprk-toggle="container"
          >
            <button
              class="sprk-c-MastheadAccordion__summary"
              data-sprk-toggle="trigger"
              data-sprk-toggle-type="masthead-accordion"
              aria-expanded="false"
            >
              <span class="sprk-c-MastheadAccordion__heading">
                Navigation Item
              </span>

              <svg
                class="
                  sprk-c-Icon
                  sprk-c-Icon--toggle
                  sprk-c-Icon--filled-current-color
                  sprk-c-Icon--stroke-current-color
                  sprk-c-MastheadAccordion__icon
                  sprk-u-mls
                "
                data-sprk-toggle="icon"
                viewBox="0 0 64 64"
              >
                <use xlink:href="#chevron-down"></use>
              </svg>
            </button>

            <ul
              class="
                sprk-b-List
                sprk-b-List--bare
                sprk-c-MastheadAccordion__details
              "
              data-sprk-toggle="content"
              style="display: none;"
            >
              <li>
                <a
                  class="sprk-b-Link sprk-b-Link--plain sprk-c-Masthead__link"
                  href="#nogo"
                >
                  Item 1
                </a>
              </li>

              <li>
                <a
                  class="sprk-b-Link sprk-b-Link--plain sprk-c-Masthead__link"
                  href="#nogo"
                >
                  Item 2
                </a>
              </li>

              <li>
                <a
                  class="sprk-b-Link sprk-b-Link--plain sprk-c-Masthead__link"
                  href="#nogo"
                >
                  Item 3
                </a>
              </li>
            </ul>
          </li>

          <li
            class="
              sprk-c-MastheadAccordion__item
              sprk-c-MastheadAccordion__item--active
            "
          >
            <a class="sprk-c-MastheadAccordion__summary" href="#nogo">
              <span class="sprk-c-MastheadAccordion__heading">
                Your Item
              </span>
            </a>
          </li>

          <li class="sprk-c-MastheadAccordion__item">
            <a class="sprk-c-MastheadAccordion__summary" href="#nogo">
              <span class="sprk-c-MastheadAccordion__heading">
                Nav Item
              </span>
            </a>
          </li>

          <li
            class="sprk-c-MastheadAccordion__item"
            data-sprk-toggle="container"
          >
            <a
              aria-controls="details3"
              class="sprk-c-MastheadAccordion__summary"
              data-sprk-toggle="trigger"
              data-sprk-toggle-type="masthead-accordion"
              href="#nogo"
              aria-expanded="false"
            >
              <span class="sprk-c-MastheadAccordion__heading">
                Navigation Item
              </span>

              <svg
                class="
                  sprk-c-Icon
                  sprk-c-Icon--toggle
                  sprk-c-Icon--filled-current-color
                  sprk-c-Icon--stroke-current-color
                  sprk-c-MastheadAccordion__icon
                "
                data-sprk-toggle="icon"
                 viewBox="0 0 64 64"
              >
                <use xlink:href="#chevron-down"></use>
              </svg>
            </a>

            <ul
              id="details3"
              class="
                sprk-b-List
                sprk-b-List--bare
                sprk-c-MastheadAccordion__details
              "
              data-sprk-toggle="content"
              style="display: none;"
            >
              <li>
                <a
                  class="
                    sprk-b-Link
                    sprk-b-Link--plain
                    sprk-c-Masthead__link
                  "
                  href="#nogo"
                >
                  Item 1
                </a>
              </li>

              <li>
                <a
                  class="
                    sprk-b-Link
                    sprk-b-Link--plain
                    sprk-c-Masthead__link
                  "
                  href="#nogo"
                >
                  Item 2
                </a>
              </li>

              <li>
                <a
                  class="
                    sprk-b-Link
                    sprk-b-Link--plain
                    sprk-c-Masthead__link
                  "
                  href="#nogo"
                >
                  Item 3
                </a>
              </li>
            </ul>
          </li>

          <li class="sprk-c-MastheadAccordion__item">
            <a class="sprk-c-MastheadAccordion__summary" href="#nogo">
              <span class="sprk-c-MastheadAccordion__heading">
                Item
              </span>
            </a>
          </li>
        </ul>

        <span class="sprk-c-Divider" data-id="divider-1"></span>

        <ul class="sprk-c-MastheadAccordion sprk-b-List sprk-b-List--bare">
          <li class="sprk-c-MastheadAccordion__item">
            <a class="sprk-c-MastheadAccordion__summary" href="#nogo">
              <span class="sprk-c-MastheadAccordion__heading">
                <svg
                  class="
                    sprk-c-Icon
                    sprk-c-Icon--xl
                    sprk-c-Icon--filled-current-color
                    sprk-u-mrs
                  "
                  viewBox="0 0 64 64"
                >
                  <use xlink:href="#call-team-member"></use>
                </svg>
                Talk To Us
              </span>
            </a>
          </li>

          <li class="sprk-c-MastheadAccordion__item">
            <a class="sprk-c-MastheadAccordion__summary" href="#nogo">
              <span class="sprk-c-MastheadAccordion__heading">
                <svg
                  class="
                    sprk-c-Icon
                    sprk-c-Icon--xl
                    sprk-c-Icon--filled-current-color
                    sprk-u-mrs
                  "
                  viewBox="0 0 64 64"
                >
                  <use xlink:href="#settings"></use>
                </svg>
                Settings
              </span>
            </a>
          </li>

          <li
            class="sprk-c-MastheadAccordion__item"
            data-sprk-toggle="container"
          >
            <a
              aria-controls="details4"
              class="sprk-c-MastheadAccordion__summary"
              data-sprk-toggle="trigger"
              data-sprk-toggle-type="accordion"
              href="#nogo"
              aria-expanded="false"
            >
              <span class="sprk-c-MastheadAccordion__heading">
                <svg
                  class="
                    sprk-c-Icon
                    sprk-c-Icon--xl
                    sprk-c-Icon--filled-current-color
                    sprk-u-mrs
                  "
                  viewBox="0 0 64 64"
                >
                  <use xlink:href="#user"></use>
                </svg>
                My Account
              </span>

              <svg
                class="
                  sprk-c-Icon
                  sprk-c-Icon--toggle
                  sprk-c-Icon--filled-current-color
                  sprk-c-Icon--stroke-current-color
                  sprk-c-MastheadAccordion__icon
                "
                data-sprk-toggle="icon"
                viewBox="0 0 64 64"
              >
                <use xlink:href="#chevron-down"></use>
              </svg>
            </a>

            <ul
              id="details4"
              class="
                sprk-b-List sprk-b-List--bare sprk-c-MastheadAccordion__details
              "
              data-sprk-toggle="content"
              style="display: none;"
            >
              <li>
                <a
                  class="
                    sprk-b-Link sprk-b-Link--plain sprk-c-Masthead__link
                  "
                  href="#nogo"
                >
                  Change Username
                </a>
              </li>

              <li>
                <a
                  class="sprk-b-Link sprk-b-Link--plain sprk-c-Masthead__link"
                  href="#nogo"
                >
                  Change Password
                </a>
              </li>

              <li>
                <a
                  class="sprk-b-Link sprk-b-Link--plain sprk-c-Masthead__link"
                  href="#nogo"
                >
                  Sign Out
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  `;
};

extended.story = {
  parameters: {
    docs: { iframeHeight: 450 },
    jest: ['masthead'],
  },
};
