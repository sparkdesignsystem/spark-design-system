import { configure, addDecorator, addParameters } from '@storybook/angular';
import { withA11y } from '@storybook/addon-a11y';
import sparkTheme from "../../storybook-spark-theme";

const storyWrapper = templateFn => storyFn => {
  const story = storyFn();
  return {
    ...story,
    template: templateFn(story.template)
  };
};

addDecorator(
  storyWrapper(storyContent => (
    `<div class="sprk-o-Box">${ storyContent }<div>`)
  )
);

addDecorator(withA11y);

// Option defaults.
addParameters({
  options: {
    theme: sparkTheme,
  },
});

configure(require.context('../../spark', true, /\/angular\/.*\.stories\.(js|ts|tsx|mdx)$/), module);
