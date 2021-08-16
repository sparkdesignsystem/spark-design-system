// prettier-ignore
// @ts-ignore
import { moduleMetadata, Meta, componentWrapperDecorator } from '@storybook/angular';
import { SprkPromoModule } from './sprk-promo.module';
import { SprkPromoComponent } from './sprk-promo.component';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

export default {
  title: 'Components/Promo',
  component: SprkPromoComponent,
  decorators: [
    moduleMetadata({
      imports: [
        SprkPromoModule,
        RouterModule.forRoot([
          {
            path: 'iframe.html',
            component: SprkPromoComponent,
          },
        ]),
      ],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
    componentWrapperDecorator((story) => `${story}`),
  ],
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
      iframeHeight: 430,
      description: {
        component: `${markdownDocumentationLinkBuilder('promo')}`,
      },
    },
  },
} as Meta;

export const defaultStory = () => ({
  template: `
    <sprk-promo idString="default-promo" hasBorder="true">
      <div sprkStackItem sprkPromoContent>
        <sprk-stack itemSpacing="large">
          <h3
            sprkHeading
            variant="displayFive"
            sprkPromoHeading
            sprkStackItem
          >
            Title
          </h3>

          <p sprkStackItem sprkPromoSubheading sprkText variant="bodyOne">
            Subtitle
          </p>

          <p sprkText variant="bodyTwo" sprkStackItem>
            Lorem ipsum dolor. Sit amet pede. Tempus donec et. Suspendisse id
            inventore integer eum non enim diam habitant. Maecenas nunc per lacus
            neque egestas. Diam quod curabitur.
          </p>

          <div sprkStackItem class="sprk-o-Stack__item--end-column">
            <a
              sprkLink
              variant="unstyled"
              href="#nogo"
              class="sprk-c-Button"
              analyticsString="default-promo-cta"
            >
              Learn More
            </a>
          </div>
        </sprk-stack>
      </div>
    </sprk-promo>
  `,
});

defaultStory.storyName = 'Default';

defaultStory.parameters = {
  jest: ['sprk-promo.component'],
};

export const flag = () => ({
  template: `
    <sprk-promo idString="flag-promo" hasBorder="true" isFlag="true" additionalClasses="sprk-o-Stack--split@s">
      <a href="#nogo" sprkStackItem class="sprk-o-Stack__item--fourth@s">
        <img
          sprkPromoMedia
          isFlag="true"
          alt="Learn more about Spark Design System."
          src="https://spark-assets.netlify.app/spark-logo-updated.svg"
        >
      </a>

      <div sprkStackItem sprkPromoContent class="sprk-o-Stack__item--three-fourths@s">
        <sprk-stack itemSpacing="large">
          <div sprkStackItem>
            <p sprkText variant="bodyTwo">
              Lorem ipsum dolor. Sit amet pede. Tempus donec et. Suspendisse id
              inventore integer eum non enim diam habitant. Maecenas nunc per lacus
              neque egestas. Diam quod curabitur.
            </p>
          </div>
        </sprk-stack>
      </div>
    </sprk-promo>
  `,
});

flag.parameters = {
  docs: { iframeHeight: 300 },
  jest: ['sprk-promo.component'],
};

export const withImage = () => ({
  template: `
    <sprk-promo idString="image-promo" hasBorder="true" additionalClasses="sprk-o-Stack--split@s">
      <a href="#nogo" sprkStackItem class="sprk-o-Stack__item--half@s">
        <img
          sprkPromoMedia
          alt="Additional insights about this property."
          src="https://spark-assets.netlify.app/house.jpg"
        >
      </a>

      <div sprkStackItem sprkPromoContent class="sprk-o-Stack__item--half@s">
        <sprk-stack itemSpacing="large">
          <h3
            sprkHeading
            variant="displayFive"
            sprkPromoHeading
            sprkStackItem
          >
            Title
          </h3>

          <p sprkPromoSubheading sprkText variant="bodyOne" sprkStackItem>
            Subtitle
          </p>

          <p sprkText variant="bodyTwo" sprkStackItem>
            Lorem ipsum dolor. Sit amet pede. Tempus donec et. Suspendisse id
            inventore integer eum non enim diam habitant. Maecenas nunc per lacus
            neque egestas. Diam quod curabitur.
          </p>

          <div sprkStackItem>
            <a
              sprkLink
              variant="unstyled"
              href="#nogo"
              class="sprk-c-Button"
              analyticsString="image-promo-cta"
            >
              Learn More
            </a>
          </div>
        </sprk-stack>
      </div>
    </sprk-promo>
  `,
});

withImage.parameters = {
  jest: ['sprk-promo.component'],
};

export const withReversedImage = () => ({
  template: `
    <sprk-promo idString="rev-image-promo" hasBorder="true" additionalClasses="sprk-o-Stack--split@s">
      <div sprkStackItem sprkPromoContent class="sprk-o-Stack__item--half@s">
        <sprk-stack itemSpacing="large">
          <h3
            sprkHeading
            variant="displayFive"
            sprkPromoHeading
            sprkStackItem
          >
            Title
          </h3>

          <p sprkPromoSubheading sprkText variant="bodyOne" sprkStackItem>
            Subtitle
          </p>

          <p sprkText variant="bodyTwo" sprkStackItem>
            Lorem ipsum dolor. Sit amet pede. Tempus donec et. Suspendisse id
            inventore integer eum non enim diam habitant. Maecenas nunc per lacus
            neque egestas. Diam quod curabitur.
          </p>

          <div sprkStackItem>
            <a
              sprkLink
              variant="unstyled"
              href="#nogo"
              class="sprk-c-Button"
              analyticsString="rev-image-promo-cta"
            >
              Learn More
            </a>
          </div>
        </sprk-stack>
      </div>

      <a href="#nogo" sprkStackItem class="sprk-o-Stack__item--half@s">
        <img
          sprkPromoMedia
          alt="Additional insights about this property."
          src="https://spark-assets.netlify.app/house.jpg"
        >
      </a>
    </sprk-promo>
  `,
});

withReversedImage.parameters = {
  jest: ['sprk-promo.component'],
};
