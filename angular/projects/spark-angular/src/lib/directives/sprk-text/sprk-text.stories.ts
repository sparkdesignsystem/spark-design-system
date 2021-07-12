import { SprkTextModule } from './sprk-text.module';

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
