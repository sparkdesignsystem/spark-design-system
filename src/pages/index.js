import React from 'react';
import {
  SprkStack,
  SprkStackItem,
  SprkCard,
  SprkLink,
  SprkHeading,
  SprkText,
} from '@sparkdesignsystem/spark-react';
import Layout from '../components/layouts/Layout';
import componentsMedia from '../images/components.svg';
import developersMedia from '../images/developers.svg';
import designersMedia from '../images/designers.svg';
import foundationsMedia from '../images/foundations.svg';
import newsMedia from '../images/news-and-updates.svg';
import utilitiesMedia from '../images/utilities.svg';
import guidesMedia from '../images/guides.svg';

const spacingBtwSections = 'huge';
const spacingBtwHeadingAndContent = 'large';

const IndexPage = () => (
  <Layout hasSideBar={false}>
    <SprkStack itemSpacing={spacingBtwSections}>
      <SprkStackItem>
        <SprkStack itemSpacing={spacingBtwHeadingAndContent}>
          <SprkStackItem>
            <h1 className="sprk-b-TypeDisplayOne sprk-u-Color--red">
              Spark Design System
            </h1>
          </SprkStackItem>

          <SprkStackItem>
            <p className="sprk-b-TypeBodyTwo sprk-u-Measure">
              Spark Design System is where we collect our best solutions for how
              to design and build unified digital experiences for the Rocket
              brands.
            </p>
          </SprkStackItem>
        </SprkStack>
      </SprkStackItem>

      <SprkStackItem>
        <div className="docs-o-Grid docs-o-Grid--home-page docs-o-Grid--large">
          <SprkCard additionalClasses="docs-c-Card">
            <SprkStackItem>
              <SprkLink
                variant="unstyled"
                href="/principles/design-principles"
                analyticsString="teaser-media"
              >
                <img
                  className="sprk-c-Card__media"
                  alt="Go to Designer Basics"
                  src={designersMedia}
                />
              </SprkLink>
            </SprkStackItem>

            <SprkStack
              additionalClasses="sprk-o-Stack__item sprk-c-Card__content"
              itemSpacing="large"
            >
              <SprkStackItem>
                <SprkHeading element="h3" variant="displayFive">
                  Designer Basics
                </SprkHeading>
              </SprkStackItem>

              <SprkStackItem>
                <SprkText variant="bodyTwo">
                  Get started with Design by reading the principles that we use
                  that we use in Spark Design System.
                </SprkText>
              </SprkStackItem>

              <SprkStack
                additionalClasses="
                  sprk-o-Stack__item
                  sprk-o-Stack--end-column"
              >
                <SprkStackItem>
                  <SprkLink
                    variant="unstyled"
                    additionalClasses="sprk-c-Button sprk-c-Button--secondary"
                    href="/principles/design-principles"
                  >
                    Go To Designer Basics
                  </SprkLink>
                </SprkStackItem>
              </SprkStack>
            </SprkStack>
          </SprkCard>

          <SprkCard additionalClasses="docs-c-Card">
            <SprkStackItem>
              <SprkLink
                variant="unstyled"
                href="/installing-spark"
                analyticsString="teaser-media"
              >
                <img
                  className="sprk-c-Card__media"
                  alt="Go to Developer Basics"
                  src={developersMedia}
                />
              </SprkLink>
            </SprkStackItem>

            <SprkStack
              additionalClasses="sprk-o-Stack__item sprk-c-Card__content"
              itemSpacing="large"
            >
              <SprkStackItem>
                <SprkHeading element="h3" variant="displayFive">
                  Developer Basics
                </SprkHeading>
              </SprkStackItem>

              <SprkStackItem>
                <SprkText variant="bodyTwo">
                  Learn how to install Spark’s npm packages into the build of
                  your application. You’ll also find support for setting up
                  Sass, React, Angular, and more.
                </SprkText>
              </SprkStackItem>

              <SprkStack
                additionalClasses="
                  sprk-o-Stack__item
                  sprk-o-Stack--end-column"
              >
                <SprkStackItem>
                  <SprkLink
                    variant="unstyled"
                    additionalClasses="sprk-c-Button sprk-c-Button--secondary"
                    href="/installing-spark"
                  >
                    Go To Developer Basics
                  </SprkLink>
                </SprkStackItem>
              </SprkStack>
            </SprkStack>
          </SprkCard>

          <SprkCard additionalClasses="docs-c-Card">
            <SprkStackItem>
              <SprkLink
                variant="unstyled"
                href="/using-spark/components/button"
                analyticsString="teaser-media"
              >
                <img
                  className="sprk-c-Card__media"
                  alt="Go To Components"
                  src={componentsMedia}
                />
              </SprkLink>
            </SprkStackItem>

            <SprkStack
              additionalClasses="sprk-o-Stack__item sprk-c-Card__content"
              itemSpacing="large"
            >
              <SprkStackItem>
                <SprkHeading element="h3" variant="displayFive">
                  Components
                </SprkHeading>
              </SprkStackItem>

              <SprkStackItem>
                <SprkText variant="bodyTwo">
                  Explore the library of Spark components and supporting
                  documentation, including design guidelines, code samples, and
                  configuration options.
                </SprkText>
              </SprkStackItem>

              <SprkStack
                additionalClasses="
                  sprk-o-Stack__item
                  sprk-o-Stack--end-column"
              >
                <SprkStackItem>
                  <SprkLink
                    variant="unstyled"
                    additionalClasses="sprk-c-Button sprk-c-Button--secondary"
                    href="/using-spark/components/button"
                  >
                    Go To Components
                  </SprkLink>
                </SprkStackItem>
              </SprkStack>
            </SprkStack>
          </SprkCard>

          <SprkCard additionalClasses="docs-c-Card">
            <SprkStackItem>
              <SprkLink
                variant="unstyled"
                href="/using-spark/guides"
                analyticsString="teaser-media"
              >
                <img
                  className="sprk-c-Card__media"
                  alt="Explore Guides"
                  src={guidesMedia}
                />
              </SprkLink>
            </SprkStackItem>

            <SprkStack
              additionalClasses="sprk-o-Stack__item sprk-c-Card__content"
              itemSpacing="large"
            >
              <SprkStackItem>
                <SprkHeading element="h3" variant="displayFive">
                  &apos;How To&apos; Guides
                </SprkHeading>
              </SprkStackItem>

              <SprkStackItem>
                <SprkText variant="bodyTwo">
                  Guidance on how to make design choices that prioritize user
                  experience. Get answers on topics like layout, messaging, and
                  placement.
                </SprkText>
              </SprkStackItem>

              <SprkStack
                additionalClasses="
                  sprk-o-Stack__item
                  sprk-o-Stack--end-column"
              >
                <SprkStackItem>
                  <SprkLink
                    variant="unstyled"
                    additionalClasses="sprk-c-Button sprk-c-Button--secondary"
                    href="/using-spark/guides"
                  >
                    Explore Guides
                  </SprkLink>
                </SprkStackItem>
              </SprkStack>
            </SprkStack>
          </SprkCard>

          <SprkCard additionalClasses="docs-c-Card">
            <SprkStackItem>
              <SprkLink
                variant="unstyled"
                href="/using-spark/foundations/color"
                analyticsString="teaser-media"
              >
                <img
                  className="sprk-c-Card__media"
                  alt="Go To Foundations"
                  src={foundationsMedia}
                />
              </SprkLink>
            </SprkStackItem>

            <SprkStack
              additionalClasses="sprk-o-Stack__item sprk-c-Card__content"
              itemSpacing="large"
            >
              <SprkStackItem>
                <SprkHeading element="h3" variant="displayFive">
                  Foundations
                </SprkHeading>
              </SprkStackItem>

              <SprkStackItem>
                <SprkText variant="bodyTwo">
                  Looking for our brand color palette, typography guidelines,
                  element spacing, and other foundational style elements? Start
                  here.
                </SprkText>
              </SprkStackItem>

              <SprkStack
                additionalClasses="
                  sprk-o-Stack__item
                  sprk-o-Stack--end-column"
              >
                <SprkStackItem>
                  <SprkLink
                    variant="unstyled"
                    additionalClasses="sprk-c-Button sprk-c-Button--secondary"
                    href="/using-spark/foundations/color"
                  >
                    Go To Foundations
                  </SprkLink>
                </SprkStackItem>
              </SprkStack>
            </SprkStack>
          </SprkCard>

          <SprkCard additionalClasses="docs-c-Card">
            <SprkStackItem>
              <SprkLink
                variant="unstyled"
                href="/using-spark/foundations/css-utilities"
              >
                <img
                  className="sprk-c-Card__media"
                  alt="Go To Utilities"
                  src={utilitiesMedia}
                />
              </SprkLink>
            </SprkStackItem>

            <SprkStack
              additionalClasses="sprk-o-Stack__item sprk-c-Card__content"
              itemSpacing="large"
            >
              <SprkStackItem>
                <SprkHeading element="h3" variant="displayFive">
                  Utilities
                </SprkHeading>
              </SprkStackItem>

              <SprkStackItem>
                <SprkText variant="bodyTwo">
                  CSS class utilities for overriding values, enhancing
                  accessibility, theming, and more.
                </SprkText>
              </SprkStackItem>

              <SprkStack
                additionalClasses="
                  sprk-o-Stack__item
                  sprk-o-Stack--end-column"
              >
                <SprkStackItem>
                  <SprkLink
                    variant="unstyled"
                    additionalClasses="sprk-c-Button sprk-c-Button--secondary"
                    href="/using-spark/foundations/css-utilities"
                  >
                    Go To Utilities
                  </SprkLink>
                </SprkStackItem>
              </SprkStack>
            </SprkStack>
          </SprkCard>

          <SprkCard additionalClasses="docs-c-Card">
            <SprkStackItem>
              <SprkLink
                variant="unstyled"
                href="https://github.com/sparkdesignsystem/spark-design-system/releases"
              >
                <img
                  className="sprk-c-Card__media"
                  alt="Go To News"
                  src={newsMedia}
                />
              </SprkLink>
            </SprkStackItem>

            <SprkStack
              additionalClasses="sprk-o-Stack__item sprk-c-Card__content"
              itemSpacing="large"
            >
              <SprkStackItem>
                <SprkHeading element="h3" variant="displayFive">
                  News And Updates
                </SprkHeading>
              </SprkStackItem>

              <SprkStackItem>
                <SprkText variant="bodyTwo">
                  Get the latest release notes and updates, as well as previous
                  news and notes.
                </SprkText>
              </SprkStackItem>

              <SprkStack
                additionalClasses="
                  sprk-o-Stack__item
                  sprk-o-Stack--end-column"
              >
                <SprkStackItem>
                  <SprkLink
                    variant="unstyled"
                    additionalClasses="sprk-c-Button sprk-c-Button--secondary"
                    href="https://github.com/sparkdesignsystem/spark-design-system/releases"
                  >
                    Go To News
                  </SprkLink>
                </SprkStackItem>
              </SprkStack>
            </SprkStack>
          </SprkCard>
        </div>
      </SprkStackItem>

      <SprkStackItem>
        <SprkStack itemSpacing={spacingBtwHeadingAndContent}>
          <SprkStackItem>
            <SprkHeading element="h2" variant="displayTwo">
              Want To Contribute?
            </SprkHeading>
          </SprkStackItem>

          <SprkStackItem>
            <SprkLink href="https://github.com/sparkdesignsystem/spark-design-system/blob/main/CONTRIBUTING.md">
              Learn More
            </SprkLink>
          </SprkStackItem>
        </SprkStack>
      </SprkStackItem>
    </SprkStack>
  </Layout>
);

export default IndexPage;
