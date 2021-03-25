import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SprkPromoModule } from './sprk-promo.module';
import { SprkPromoComponent } from './sprk-promo.component';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

export default {
  title: 'Components/Promo',
  component: SprkPromoComponent,
  decorators: [
    storyWrapper(
      (storyContent) => `<div class="sprk-o-Box">${storyContent}<div>`,
    ),
  ],
  parameters: {
    info: `${markdownDocumentationLinkBuilder('promo')}`,
    docs: { iframeHeight: 430 },
  },
};

const modules = {
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
};

export const defaultStory = () => ({
  moduleMetadata: modules,
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

defaultStory.story = {
  name: 'Default',
  parameters: {
    jest: ['sprk-promo.component'],
  },
};

export const flag = () => ({
  moduleMetadata: modules,
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

flag.story = {
  parameters: {
    docs: { iframeHeight: 300 },
    jest: ['sprk-promo.component'],
  },
};

export const withImage = () => ({
  moduleMetadata: modules,
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

withImage.story = {
  parameters: {
    jest: ['sprk-promo.component'],
  },
};

export const withReversedImage = () => ({
  moduleMetadata: modules,
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

withReversedImage.story = {
  parameters: {
    jest: ['sprk-promo.component'],
  },
};
