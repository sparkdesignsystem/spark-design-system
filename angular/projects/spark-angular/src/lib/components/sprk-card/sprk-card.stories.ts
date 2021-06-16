import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { SprkCardModule } from './sprk-card.module';
import { SprkCardComponent } from './sprk-card.component';
import { SprkCardContentDirective } from './directives/sprk-card-content/sprk-card-content.directive';
import { SprkCardMediaDirective } from './directives/sprk-card-media/sprk-card-media.directive';
import { SprkCardHeaderDirective } from './directives/sprk-card-header/sprk-card-header.directive';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';
// prettier-ignore
// @ts-ignore
import { moduleMetadata, Meta, componentWrapperDecorator } from '@storybook/angular';

export default {
  title: 'Components/Card',
  component: SprkCardComponent,
  decorators: [
    moduleMetadata({
      imports: [
        SprkCardModule,
        RouterModule.forRoot([
          {
            path: 'iframe.html',
            component: SprkCardComponent,
          },
        ]),
      ],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
    componentWrapperDecorator(
      (story) => `<div class="sprk-o-Box">${story}</div>`,
    ),
  ],
  parameters: {
    subcomponents: {
      SprkCardContentDirective,
      SprkCardHeaderDirective,
      SprkCardMediaDirective,
    },
    docs: {
      source: {
        type: 'code',
      },
      description: {
        component: `${markdownDocumentationLinkBuilder('card')}`,
      },
      iframeHeight: 200,
    },
  },
} as Meta;

export const defaultStory = () => ({
  template: `
    <sprk-card idString="default">
      <sprk-stack sprkCardContent sprkStackItem itemSpacing="medium">
        <p sprkStackItem sprkText variant="bodyTwo">
          Default Card
        </p>
      </sprk-stack>
    </sprk-card>
  `,
});

defaultStory.storyName = 'Default';

defaultStory.parameters = {
  jest: [
    'sprk-card.component',
    'sprk-card-content.directive',
    'sprk-stack.component',
    'sprk-stack-item.directive',
    'sprk-text.directive',
  ],
};

export const standout = () => ({
  template: `
    <sprk-card idString="standout" isStandout="true">
      <sprk-stack sprkCardContent sprkStackItem itemSpacing="medium">
        <p sprkStackItem sprkText variant="bodyTwo">
          Standout Card
        </p>
      </sprk-stack>
    </sprk-card>
  `,
});

standout.parameters = {
  jest: [
    'sprk-card.component',
    'sprk-card-content.directive',
    'sprk-stack.component',
    'sprk-stack-item.directive',
    'sprk-text.directive',
  ],
};

export const highlightedHeader = () => ({
  template: `
    <sprk-card idString="highlighted-header" isStandout="true">
      <sprk-stack sprkCardHeader sprkStackItem itemSpacing="medium">
        <h3
          sprkHeading
          sprkStackItem
          variant="displaySeven"
          class="sprk-u-Color--white"
        >
          Description
        </h3>

        <h4
          sprkHeading
          sprkStackItem
          variant="displayFive"
          class="sprk-u-Color--white"
        >
          Card Title
        </h4>
      </sprk-stack>

      <sprk-stack sprkCardContent sprkStackItem itemSpacing="medium">
        <p sprkStackItem sprkText variant="bodyTwo">
          Lorem ipsum dolor sit amet, doctus invenire vix te. Facilisi
          perpetua an pri, errem commune mea at, mei prima tantas
          signiferumque at. Numquam.
        </p>
      </sprk-stack>
    </sprk-card>
  `,
});

highlightedHeader.parameters = {
  docs: { iframeHeight: 300 },
  jest: [
    'sprk-card.component',
    'sprk-card-header.component',
    'sprk-card-content.directive',
    'sprk-stack.component',
    'sprk-stack-item.directive',
    'sprk-text.directive',
    'sprk-heading.directive',
  ],
};

export const teaser = () => ({
  template: `
    <sprk-card idString="teaser">
      <a
        sprkLink
        variant="unstyled"
        href="#nogo"
        sprkStackItem
        analyticsString="teaser-media"
      >
        <img
          sprkCardMedia
          alt="Learn more"
          src="https://spark-assets.netlify.app/desktop.jpg"
        />
      </a>

      <sprk-stack sprkCardContent itemSpacing="medium" sprkStackItem>
        <h3 sprkHeading variant="displayFive" sprkStackItem>
          Title
        </h3>

        <p sprkText variant="bodyTwo" sprkStackItem>
          Lorem ipsum dolor sit amet, doctus
          invenirevix te. Facilisi perpetua.
        </p>

        <sprk-stack
          additionalClasses="sprk-o-Stack--end-column"
          sprkStackItem
        >
          <div sprkStackItem>
            <a
              sprkLink
              variant="unstyled"
              href="#nogo"
              class="sprk-c-Button sprk-c-Button--secondary"
              analyticsString="teaser-cta"
            >
              Learn More
            </a>
          </div>
        </sprk-stack>
      </sprk-stack>
    </sprk-card>
 `,
});

teaser.parameters = {
  docs: { iframeHeight: 550 },
  jest: [
    'sprk-card.component',
    'sprk-card-content.directive',
    'sprk-card-media.directive',
    'sprk-stack.component',
    'sprk-stack-item.directive',
    'sprk-text.directive',
    'sprk-heading.directive',
    'sprk-link.directive',
  ],
};

export const teaserIcon = () => ({
  template: `
    <sprk-card idString="teaser-icon">
      <sprk-stack
        sprkCardContent
        itemSpacing="large"
        sprkStackItem
        additionalClasses="sprk-u-TextAlign--center"
      >
        <a
          sprkLink
          variant="unstyled"
          href="#nogo"
          sprkStackItem
          aria-label="Title"
          analyticsString="teaser-icon-media"
          class="sprk-u-AbsoluteCenter"
        >
          <sprk-icon
            iconName="call-team-member"
            ariaHidden="true"
            additionalClasses="sprk-c-Icon--xl"
          ></sprk-icon>
        </a>

        <h3 sprkHeading variant="displayFive" sprkStackItem>
          Title
        </h3>

        <p sprkText variant="bodyTwo" sprkStackItem>
          Lorem ipsum dolor sit amet, doctus
          invenirevix te. Facilisi perpetua an
          pri, errem communemea at, mei prima
          tantas signiferumque at.
        </p>

        <div sprkStackItem>
          <a
            sprkLink
            variant="unstyled"
            href="#nogo"
            class="sprk-c-Button sprk-c-Button--secondary"
            analyticsString="teaser-icon-cta"
          >
            Learn More
          </a>
        </div>
      </sprk-stack>
    </sprk-card>
 `,
});

teaserIcon.storyName = 'Teaser With Icon';

teaserIcon.parameters = {
  docs: { iframeHeight: 550 },
  jest: [
    'sprk-card.component',
    'sprk-card-content.directive',
    'sprk-stack.component',
    'sprk-stack-item.directive',
    'sprk-text.directive',
    'sprk-heading.directive',
    'sprk-link.directive',
    'sprk-icon.component',
  ],
};

export const teaserWithDifferentElementOrder = () => ({
  template: `
    <sprk-card idString="teaser-diff-order">
      <h3 sprkHeading sprkCardContent variant="displayFive" sprkStackItem>
        Title
      </h3>

      <a
        sprkLink
        variant="unstyled"
        href="#nogo"
        sprkStackItem
        analyticsString="teaser-diff-order-media"
      >
        <img
          alt="Learn more"
          src="https://spark-assets.netlify.app/desktop.jpg"
        />
      </a>

      <sprk-stack sprkCardContent itemSpacing="large" sprkStackItem>
        <p sprkText variant="bodyTwo" sprkStackItem>
          Lorem ipsum dolor sit amet, doctus
          invenirevix te. Facilisi perpetua.
        </p>

        <sprk-stack
          additionalClasses="sprk-o-Stack--end-column"
          sprkStackItem
        >
          <div sprkStackItem>
            <a
              sprkLink
              variant="unstyled"
              href="#nogo"
              class="sprk-c-Button sprk-c-Button--secondary"
              analyticsString="teaser-diff-order-cta"
            >
              Learn More
            </a>
          </div>
        </sprk-stack>
      </sprk-stack>
    </sprk-card>
  `,
});

teaserWithDifferentElementOrder.storyName =
  'Teaser With Different Element Order';

teaserWithDifferentElementOrder.parameters = {
  docs: { iframeHeight: 550 },
  jest: [
    'sprk-card.component',
    'sprk-card-content.directive',
    'sprk-card-media.directive',
    'sprk-stack.component',
    'sprk-stack-item.directive',
    'sprk-text.directive',
    'sprk-heading.directive',
    'sprk-link.directive',
  ],
};

export const twoUpCards = () => ({
  template: `
    <sprk-stack
      itemSpacing="large"
      splitAt="large"
      additionalClasses="sprk-o-Stack--center-row"
    >
      <div
        class="sprk-c-Card__container sprk-o-Stack__item--flex@l"
        sprkStackItem
      >
        <sprk-card sprkStackItem>
          <a
            sprkLink
            variant="unstyled"
            analyticsString="two-up-media"
            href="#nogo"
            sprkStackItem
          >
            <img
              sprkCardMedia
              alt="Learn more"
              src="https://spark-assets.netlify.app/desktop.jpg"
            />
          </a>

          <sprk-stack sprkCardContent itemSpacing="medium" sprkStackItem>
            <h3 sprkHeading variant="displayFive" sprkStackItem>
              Title
            </h3>

            <p sprkText variant="bodyTwo" sprkStackItem>
              This Lorem ipsum dolor sit amet, doctus invenire vix te.
              Facilisi perpetua an pri, errem commune mea at, mei prima
              tantas signiferumque at. Numquam.
            </p>

            <sprk-stack
              additionalClasses="sprk-o-Stack--end-column"
              sprkStackItem
            >
              <div sprkStackItem>
                <a
                  sprkLink
                  variant="unstyled"
                  href="#nogo"
                  class="sprk-c-Button sprk-c-Button--secondary"
                  analyticsString="two-up-cta"
                >
                  Learn More
                </a>
              </div>
            </sprk-stack>
          </sprk-stack>
        </sprk-card>
      </div>

      <div
        class="sprk-c-Card__container sprk-o-Stack__item--flex@l"
        sprkStackItem
      >
        <sprk-card sprkStackItem>
          <a
            sprkLink
            variant="unstyled"
            href="#nogo"
            sprkStackItem
            analyticsString="two-up-media-2"
          >
            <img
              sprkCardMedia
              alt="Learn more"
              src="https://spark-assets.netlify.app/desktop.jpg"
            />
          </a>

          <sprk-stack sprkCardContent itemSpacing="medium" sprkStackItem>
            <h3 sprkHeading variant="displayFive" sprkStackItem>
              Title
            </h3>

            <p sprkText variant="bodyTwo" sprkStackItem>
              This Lorem ipsum dolor sit amet, doctus invenire vix te.
              Facilisi perpetua an pri, errem commune mea at, mei prima
              tantas signiferumque at. Numquam.
            </p>

            <sprk-stack
              additionalClasses="sprk-o-Stack--end-column"
              sprkStackItem
            >
              <div sprkStackItem>
                <a
                  sprkLink
                  variant="unstyled"
                  href="#nogo"
                  class="sprk-c-Button sprk-c-Button--secondary"
                  analyticsString="two-up-cta-2"
                >
                  Learn More
                </a>
              </div>
            </sprk-stack>
          </sprk-stack>
        </sprk-card>
      </div>
    </sprk-stack>
  `,
});

twoUpCards.storyName = 'Card Layout - Two Up';

twoUpCards.parameters = {
  docs: { iframeHeight: 550 },
  jest: [
    'sprk-card.component',
    'sprk-card-media.directive',
    'sprk-card-content.directive',
    'sprk-stack.component',
    'sprk-stack-item.directive',
    'sprk-text.directive',
    'sprk-heading.directive',
    'sprk-link.directive',
  ],
};

export const threeUpCards = () => ({
  template: `
    <sprk-stack
      itemSpacing="large"
      splitAt="large"
      additionalClasses="sprk-o-Stack--center-row"
    >
      <div
        class="sprk-c-Card__container sprk-o-Stack__item--flex@l"
        sprkStackItem
      >
        <sprk-card sprkStackItem>
          <a
            sprkLink
            variant="unstyled"
            href="#nogo"
            analyticsString="three-up-media"
            sprkStackItem
          >
            <img
              sprkCardMedia
              alt="Learn more"
              src="https://spark-assets.netlify.app/desktop.jpg"
            />
          </a>

          <sprk-stack sprkCardContent itemSpacing="medium" sprkStackItem>
            <h3 sprkHeading variant="displayFive" sprkStackItem>
              Title
            </h3>

            <p sprkText variant="bodyTwo" sprkStackItem>
              This Lorem ipsum dolor sit amet, doctus invenire vix te.
              Facilisi perpetua an pri, errem commune mea at, mei prima
              tantas signiferumque at. Numquam.
            </p>

            <sprk-stack
              additionalClasses="sprk-o-Stack--end-column"
              sprkStackItem
            >
              <div sprkStackItem>
                <a
                  sprkLink
                  variant="unstyled"
                  href="#nogo"
                  analyticsString="three-up-cta"
                  class="sprk-c-Button sprk-c-Button--secondary"
                >
                  Learn More
                </a>
              </div>
            </sprk-stack>
          </sprk-stack>
        </sprk-card>
      </div>

      <div
        class="sprk-c-Card__container sprk-o-Stack__item--flex@l"
        sprkStackItem
      >
        <sprk-card sprkStackItem>
          <a
            sprkLink
            variant="unstyled"
            href="#nogo"
            sprkStackItem
            analyticsString="three-up-media-2"
          >
            <img
              sprkCardMedia
              alt="Learn more"
              src="https://spark-assets.netlify.app/desktop.jpg"
            />
          </a>

          <sprk-stack sprkCardContent itemSpacing="medium" sprkStackItem>
            <h3 sprkHeading variant="displayFive" sprkStackItem>
              Title
            </h3>

            <p sprkText variant="bodyTwo" sprkStackItem>
              This Lorem ipsum dolor sit amet, doctus invenire vix te.
              Facilisi perpetua an pri, errem commune mea at, mei prima
              tantas signiferumque at. Numquam.
            </p>

            <sprk-stack
              additionalClasses="sprk-o-Stack--end-column"
              sprkStackItem
            >
              <div sprkStackItem>
                <a
                  sprkLink
                  variant="unstyled"
                  href="#nogo"
                  analyticsString="three-up-cta-2"
                  class="sprk-c-Button sprk-c-Button--secondary"
                >
                  Learn More
                </a>
              </div>
            </sprk-stack>
          </sprk-stack>
        </sprk-card>
      </div>

      <div
        class="sprk-c-Card__container sprk-o-Stack__item--flex@l"
        sprkStackItem
      >
        <sprk-card sprkStackItem>
          <a
            sprkLink
            variant="unstyled"
            href="#nogo"
            analyticsString="three-up-media-3"
            sprkStackItem
          >
            <img
              sprkCardMedia
              alt="Learn more"
              src="https://spark-assets.netlify.app/desktop.jpg"
            />
          </a>

          <sprk-stack sprkCardContent itemSpacing="medium" sprkStackItem>
            <h3 sprkHeading variant="displayFive" sprkStackItem>
              Title
            </h3>

            <p sprkText variant="bodyTwo" sprkStackItem>
              This Lorem ipsum dolor sit amet, doctus invenire vix te.
              Facilisi perpetua an pri, errem commune mea at, mei prima
              tantas signiferumque at. Numquam.
            </p>

            <sprk-stack
              additionalClasses="sprk-o-Stack--end-column"
              sprkStackItem
            >
              <div sprkStackItem>
                <a
                  sprkLink
                  variant="unstyled"
                  href="#nogo"
                  analyticsString="three-up-cta-3"
                  class="sprk-c-Button sprk-c-Button--secondary"
                >
                  Learn More
                </a>
              </div>
            </sprk-stack>
          </sprk-stack>
        </sprk-card>
      </div>
    </sprk-stack>
  `,
});

threeUpCards.storyName = 'Card Layout - Three Up';

threeUpCards.parameters = {
  docs: { iframeHeight: 600 },
  jest: [
    'sprk-card.component',
    'sprk-card-media.directive',
    'sprk-card-content.directive',
    'sprk-stack.component',
    'sprk-stack-item.directive',
    'sprk-text.directive',
    'sprk-heading.directive',
    'sprk-link.directive',
  ],
};

export const fourUpCards = () => ({
  template: `
    <sprk-stack
      itemSpacing="large"
      splitAt="large"
      additionalClasses="sprk-o-Stack--center-row"
    >
      <div
        class="sprk-c-Card__container sprk-o-Stack__item--flex@l"
        sprkStackItem
      >
        <sprk-card sprkStackItem>
          <a
            sprkLink
            variant="unstyled"
            href="#nogo"
            analyticsString="four-up-media"
            sprkStackItem
          >
            <img
              sprkCardMedia
              alt="Learn more"
              src="https://spark-assets.netlify.app/desktop.jpg"
            />
          </a>

          <sprk-stack sprkCardContent itemSpacing="medium" sprkStackItem>
            <h3 sprkHeading variant="displayFive" sprkStackItem>
              Title
            </h3>

            <p sprkText variant="bodyTwo" sprkStackItem>
              This Lorem ipsum dolor sit amet, doctus invenire vix te.
              Facilisi perpetua an pri, errem commune mea at, mei prima
              tantas signiferumque at. Numquam.
            </p>

            <sprk-stack
              additionalClasses="sprk-o-Stack--end-column"
              sprkStackItem
            >
              <div sprkStackItem>
                <a
                  sprkLink
                  variant="unstyled"
                  href="#nogo"
                  analyticsString="four-up-cta"
                  class="sprk-c-Button sprk-c-Button--secondary"
                >
                  Learn More
                </a>
              </div>
            </sprk-stack>
          </sprk-stack>
        </sprk-card>
      </div>

      <div
        class="sprk-c-Card__container sprk-o-Stack__item--flex@l"
        sprkStackItem
      >
        <sprk-card sprkStackItem>
          <a
            sprkLink
            variant="unstyled"
            href="#nogo"
            sprkStackItem
            analyticsString="four-up-media-2"
          >
            <img
              sprkCardMedia
              alt="Learn more"
              src="https://spark-assets.netlify.app/desktop.jpg"
            />
          </a>

          <sprk-stack sprkCardContent itemSpacing="medium" sprkStackItem>
            <h3 sprkHeading variant="displayFive" sprkStackItem>
              Title
            </h3>

            <p sprkText variant="bodyTwo" sprkStackItem>
              This Lorem ipsum dolor sit amet, doctus invenire vix te.
              Facilisi perpetua an pri, errem commune mea at, mei prima
              tantas signiferumque at. Numquam.
            </p>

            <sprk-stack
              additionalClasses="sprk-o-Stack--end-column"
              sprkStackItem
            >
              <div sprkStackItem>
                <a
                  sprkLink
                  variant="unstyled"
                  href="#nogo"
                  analyticsString="four-up-cta-2"
                  class="sprk-c-Button sprk-c-Button--secondary"
                >
                  Learn More
                </a>
              </div>
            </sprk-stack>
          </sprk-stack>
        </sprk-card>
      </div>

      <div
        class="sprk-c-Card__container sprk-o-Stack__item--flex@l"
        sprkStackItem
      >
        <sprk-card sprkStackItem>
          <a
            sprkLink
            variant="unstyled"
            href="#nogo"
            analyticsString="four-up-media-3"
            sprkStackItem
          >
            <img
              sprkCardMedia
              alt="Learn more"
              src="https://spark-assets.netlify.app/desktop.jpg"
            />
          </a>

          <sprk-stack sprkCardContent itemSpacing="medium" sprkStackItem>
            <h3 sprkHeading variant="displayFive" sprkStackItem>
              Title
            </h3>

            <p sprkText variant="bodyTwo" sprkStackItem>
              This Lorem ipsum dolor sit amet, doctus invenire vix te.
              Facilisi perpetua an pri, errem commune mea at, mei prima
              tantas signiferumque at. Numquam.
            </p>

            <sprk-stack
              additionalClasses="sprk-o-Stack--end-column"
              sprkStackItem
            >
              <div sprkStackItem>
                <a
                  sprkLink
                  variant="unstyled"
                  analyticsString="four-up-cta-3"
                  href="#nogo"
                  class="sprk-c-Button sprk-c-Button--secondary"
                >
                  Learn More
                </a>
              </div>
            </sprk-stack>
          </sprk-stack>
        </sprk-card>
      </div>

      <div
        class="sprk-c-Card__container sprk-o-Stack__item--flex@l"
        sprkStackItem
      >
        <sprk-card sprkStackItem>
          <a
            sprkLink
            variant="unstyled"
            href="#nogo"
            sprkStackItem
            analyticsString="four-up-media-4"
          >
            <img
              sprkCardMedia
              alt="Learn more"
              src="https://spark-assets.netlify.app/desktop.jpg"
            />
          </a>

          <sprk-stack sprkCardContent itemSpacing="medium" sprkStackItem>
            <h3 sprkHeading variant="displayFive" sprkStackItem>
              Title
            </h3>

            <p sprkText variant="bodyTwo" sprkStackItem>
              This Lorem ipsum dolor sit amet, doctus invenire vix te.
              Facilisi perpetua an pri, errem commune mea at, mei prima
              tantas signiferumque at. Numquam.
            </p>

            <sprk-stack
              additionalClasses="sprk-o-Stack--end-column"
              sprkStackItem
            >
              <div sprkStackItem>
                <a
                  sprkLink
                  variant="unstyled"
                  href="#nogo"
                  analyticsString="four-up-cta-4"
                  class="sprk-c-Button sprk-c-Button--secondary"
                >
                  Learn More
                </a>
              </div>
            </sprk-stack>
          </sprk-stack>
        </sprk-card>
      </div>
    </sprk-stack>
  `,
});

threeUpCards.storyName = 'Card Layout - Four Up';

threeUpCards.parameters = {
  docs: { iframeHeight: 600 },
  jest: [
    'sprk-card.component',
    'sprk-card-media.directive',
    'sprk-card-content.directive',
    'sprk-stack.component',
    'sprk-stack-item.directive',
    'sprk-text.directive',
    'sprk-heading.directive',
    'sprk-link.directive',
  ],
};
