import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SprkTextModule } from './sprk-text.module';
import { SprkTextDirective } from './sprk-text.directive';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Foundations/Typography',
  component: SprkTextDirective,
  decorators: [
    storyWrapper(
      (storyContent) => `<div class="sprk-o-Box">${storyContent}<div>`,
    ),
  ],
  parameters: {
    info: `
${markdownDocumentationLinkBuilder('typography', 'foundations')}

##### Line-height Collision

By default, line height on type will create extra
whitespace around the top and bottom of the text.
When the text is in a container that has padding applied,
it appears larger than intended, due to this extra
whitespace.

Spark automatically removes this whitespace from headings,
but it will only be removed on body copy if the Spark
body classes are used.

For details on how we remove the whitespace, please see this article:
[Cropping Away Negative Impacts of Line Height](https://medium.com/eightshapes-llc/cropping-away-negative-impacts-of-line-height-84d744e016ce)

The type sizes defined in Spark all have this extra
whitespace removed. Heading elements have this cropping
automatically applied, where body copy will need the
correct type classes applied.
`,
    docs: { iframeHeight: 200 },
  },
};

const modules = {
  imports: [SprkTextModule],
};

export const bodyOne = () => ({
  moduleMetadata: modules,
  template: `
    <p sprkText variant="bodyOne">
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Sed gravida urna quis
      nulla ultrices, sed efficitur risus
      elementum. Vivamus semper ex a
      lorem sodales, rhoncus rhoncus augue cursus.
      Sed vestibulum felis vel euismod aliquet.
       Suspendisse sit amet euismod nibh, eget
       fermentum arcu. Aliquam lacinia, sem eu
       ultricies auctor, velit nunc commodo
       sapien, pharetra maximus augue dui
       eget dui.
    </p>
  `,
});

bodyOne.parameters = {
  jest: ['sprk-text.directive'],
};

export const bodyTwo = () => ({
  moduleMetadata: modules,
  template: `
    <p sprkText variant="bodyTwo">
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Sed gravida urna quis
      nulla ultrices, sed efficitur risus
      elementum. Vivamus semper ex a
      lorem sodales, rhoncus rhoncus augue cursus.
      Sed vestibulum felis vel euismod aliquet.
       Suspendisse sit amet euismod nibh, eget
       fermentum arcu. Aliquam lacinia, sem eu
       ultricies auctor, velit nunc commodo
       sapien, pharetra maximus augue dui
       eget dui.
    </p>
  `,
});

bodyTwo.parameters = {
  jest: ['sprk-text.directive'],
};

export const bodyThree = () => ({
  moduleMetadata: modules,
  template: `
    <p sprkText variant="bodyThree">
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Sed gravida urna quis
      nulla ultrices, sed efficitur risus
      elementum. Vivamus semper ex a
      lorem sodales, rhoncus rhoncus augue cursus.
      Sed vestibulum felis vel euismod aliquet.
       Suspendisse sit amet euismod nibh, eget
       fermentum arcu. Aliquam lacinia, sem eu
       ultricies auctor, velit nunc commodo
       sapien, pharetra maximus augue dui
       eget dui.
    </p>
  `,
});

bodyThree.parameters = {
  jest: ['sprk-text.directive'],
};

export const bodyFour = () => ({
  moduleMetadata: modules,
  template: `
    <p sprkText variant="bodyFour">
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Sed gravida urna quis
      nulla ultrices, sed efficitur risus
      elementum. Vivamus semper ex a
      lorem sodales, rhoncus rhoncus augue cursus.
      Sed vestibulum felis vel euismod aliquet.
       Suspendisse sit amet euismod nibh, eget
       fermentum arcu. Aliquam lacinia, sem eu
       ultricies auctor, velit nunc commodo
       sapien, pharetra maximus augue dui
       eget dui.
    </p>
  `,
});

bodyFour.parameters = {
  jest: ['sprk-text.directive'],
};
