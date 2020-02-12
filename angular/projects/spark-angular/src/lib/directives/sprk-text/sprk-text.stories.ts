import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SprkTextModule } from './sprk-text.module';
import { SprkTextDirective } from './sprk-text.directive';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Text',
  component: SprkTextDirective,
  decorators: [
    storyWrapper(
      storyContent => (
        `<div class="sprk-o-Box">${storyContent}<div>`
      )
    )
  ],
  parameters: {
    info: `${markdownDocumentationLinkBuilder('divider')}`,
    docs: { iframeHeight: 200 },
  },
};

const modules = {
  imports: [
    SprkTextModule,
  ],
};

export const bodyOne = () => ({
  moduleMetadata: modules,
  template: `
    <p sprkText variant="one">
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
  `
});

export const bodyTwo = () => ({
  moduleMetadata: modules,
  template: `
    <p sprkText variant="two">
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
  `
});

export const bodyThree = () => ({
  moduleMetadata: modules,
  template: `
    <p sprkText variant="three">
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
  `
});

export const bodyFour = () => ({
  moduleMetadata: modules,
  template: `
    <p sprkText variant="four">
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
  `
});

