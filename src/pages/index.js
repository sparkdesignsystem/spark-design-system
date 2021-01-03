import React from 'react';
import { SprkStack, SprkStackItem } from '@sparkdesignsystem/spark-react';
import Layout from '../components/layouts/Layout';
import componentsMedia from '../images/components.svg';
import developersMedia from '../images/developers.svg';
import designersMedia from '../images/designers.svg';
import foundationsMedia from '../images/foundations.svg';
import newsMedia from '../images/news-and-updates.svg';
import utilitiesMedia from '../images/utilities.svg';

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
          <div className="sprk-c-Card sprk-o-Stack docs-c-Card">
            <a
              href="/principles/design-principles"
              className="sprk-o-Stack__item"
            >
              <img
                className="sprk-c-Card__media"
                alt="Go to Designer Basics"
                src={designersMedia}
              />
            </a>

            <div
              className="
                sprk-o-Stack__item
                sprk-c-Card__content
                sprk-o-Stack
                sprk-o-Stack--large
              "
            >
              <h2 className="sprk-b-TypeDisplayFive sprk-o-Stack__item">
                Designer Basics
              </h2>

              <p className="sprk-b-TypeBodyTwo sprk-o-Stack__item">
                Get started with Design by reading the principles that we use in
                Spark Design System.
              </p>

              <div className="sprk-o-Stack__item">
                <a
                  href="/principles/design-principles"
                  className="sprk-c-Button sprk-c-Button--tertiary"
                >
                  Go To Designer Basics
                </a>
              </div>
            </div>
          </div>

          <div className="sprk-c-Card sprk-o-Stack docs-c-Card">
            <a href="/installing-spark" className="sprk-o-Stack__item">
              <img
                className="sprk-c-Card__media"
                alt="Go to Developer Basics"
                src={developersMedia}
              />
            </a>

            <div
              className="
                sprk-o-Stack__item
                sprk-c-Card__content
                sprk-o-Stack sprk-o-Stack--large
              "
            >
              <h2 className="sprk-b-TypeDisplayFive sprk-o-Stack__item">
                Developer Basics
              </h2>

              <p className="sprk-b-TypeBodyTwo sprk-o-Stack__item">
                Learn how to install Spark’s npm packages into the build of your
                application. You’ll also find support for setting up Sass,
                React, Angular, and more.
              </p>

              <div className="sprk-o-Stack__item">
                <a
                  href="/installing-spark"
                  className="sprk-c-Button sprk-c-Button--tertiary"
                >
                  Go To Developer Basics
                </a>
              </div>
            </div>
          </div>

          <div className="sprk-c-Card sprk-o-Stack docs-c-Card">
            <a
              href="/using-spark/components/button"
              className="sprk-o-Stack__item"
            >
              <img
                className="sprk-c-Card__media"
                alt="Go to Components"
                src={componentsMedia}
              />
            </a>

            <div
              className="
                sprk-o-Stack__item
                sprk-c-Card__content
                sprk-o-Stack sprk-o-Stack--large
              "
            >
              <h2 className="sprk-b-TypeDisplayFive sprk-o-Stack__item">
                Components
              </h2>

              <p className="sprk-b-TypeBodyTwo sprk-o-Stack__item">
                Explore the library of Spark components and supporting
                documentation, including design guidelines, code samples, and
                configuration options.
              </p>

              <div className="sprk-o-Stack__item">
                <a
                  href="/using-spark/components/button"
                  className="sprk-c-Button sprk-c-Button--tertiary"
                >
                  Go To Components
                </a>
              </div>
            </div>
          </div>

          <div className="sprk-c-Card sprk-o-Stack docs-c-Card">
            <a
              href="/using-spark/foundations/color"
              className="sprk-o-Stack__item"
            >
              <img
                className="sprk-c-Card__media"
                alt="Go to Foundations"
                src={foundationsMedia}
              />
            </a>

            <div
              className="
                sprk-o-Stack__item
                sprk-c-Card__content
                sprk-o-Stack
                sprk-o-Stack--large
              "
            >
              <h2 className="sprk-b-TypeDisplayFive sprk-o-Stack__item">
                Foundations
              </h2>

              <p className="sprk-b-TypeBodyTwo sprk-o-Stack__item">
                Looking for our brand color palette, typography guidelines,
                element spacing, and other foundational style elements? Start
                here.
              </p>

              <div className="sprk-o-Stack__item">
                <a
                  href="/using-spark/foundations/color"
                  className="sprk-c-Button sprk-c-Button--tertiary"
                >
                  Go To Foundations
                </a>
              </div>
            </div>
          </div>

          <div className="sprk-c-Card sprk-o-Stack docs-c-Card">
            <a
              href="/using-spark/foundations/css-utilities"
              className="sprk-o-Stack__item"
            >
              <img
                className="sprk-c-Card__media"
                alt="Go to Utilities"
                src={utilitiesMedia}
              />
            </a>

            <div
              className="
                sprk-o-Stack__item
                sprk-c-Card__content
                sprk-o-Stack sprk-o-Stack--large
              "
            >
              <h2 className="sprk-b-TypeDisplayFive sprk-o-Stack__item">
                Utilities
              </h2>

              <p className="sprk-b-TypeBodyTwo sprk-o-Stack__item">
                CSS class utilities for overriding values, enhancing
                accessibility, theming, and more.
              </p>

              <div className="sprk-o-Stack__item">
                <a
                  href="/using-spark/foundations/css-utilities"
                  className="sprk-c-Button sprk-c-Button--tertiary"
                >
                  Go To Utilities
                </a>
              </div>
            </div>
          </div>

          <div className="sprk-c-Card sprk-o-Stack docs-c-Card">
            <a
              href="https://github.com/sparkdesignsystem/spark-design-system/releases"
              className="sprk-o-Stack__item"
            >
              <img
                className="sprk-c-Card__media"
                alt="Go to News"
                src={newsMedia}
              />
            </a>

            <div
              className="
                sprk-o-Stack__item
                sprk-c-Card__content
                sprk-o-Stack sprk-o-Stack--large
              "
            >
              <h2 className="sprk-b-TypeDisplayFive sprk-o-Stack__item">
                News and Updates
              </h2>

              <p className="sprk-b-TypeBodyTwo sprk-o-Stack__item">
                Get the latest release notes and updates, as well as previous
                news and notes.
              </p>

              <div className="sprk-o-Stack__item">
                <a
                  href="https://github.com/sparkdesignsystem/spark-design-system/releases"
                  className="sprk-c-Button sprk-c-Button--tertiary"
                >
                  Go To News
                </a>
              </div>
            </div>
          </div>
        </div>
      </SprkStackItem>

      <SprkStackItem>
        <SprkStack itemSpacing={spacingBtwHeadingAndContent}>
          <SprkStackItem>
            <h2 className="sprk-b-TypeDisplayTwo">Want To Contribute?</h2>
          </SprkStackItem>

          <SprkStackItem>
            <a
              href="https://github.com/sparkdesignsystem/spark-design-system/blob/master/CONTRIBUTING.md"
              className="sprk-c-Button sprk-c-Button--secondary"
            >
              Learn More
            </a>
          </SprkStackItem>
        </SprkStack>
      </SprkStackItem>
    </SprkStack>
  </Layout>
);

export default IndexPage;
