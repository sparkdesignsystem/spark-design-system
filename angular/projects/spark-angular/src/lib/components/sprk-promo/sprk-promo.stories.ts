import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SprkPromoModule } from './sprk-promo.module';

export default {
  title: 'Components|Promo',
  decorators: [
    storyWrapper(
      storyContent => (
        `<div class="sprk-o-Box">${storyContent}<div>`
      )
    )
  ],
};

const modules = {
  imports: [
    SprkPromoModule,
  ],
};

export const defaultStory = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-promo
      title="Title"
      subtitle="Subtitle"
      cta="button"
      ctaLinkHref="foo"
      ctaText="Learn More"
      hasBorder="true"
      idString="promo-1"
    >
      Lorem ipsum dolor. Sit amet pede. Tempus donec et. Suspendisse id
      inventore integer eum non enim diam habitant. Maecenas nunc per lacus
      neque egestas. Diam quod curabitur.
    </sprk-promo>
  `,
});

defaultStory.story = {
  name: 'Default'
};
