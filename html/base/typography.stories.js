export default {
  title: 'Fundamentals|Typography',
  decorators: [
    story => `
      <div class="sprk-o-Box sb-decorate">${story()}</div>
    `,
  ],
};

export const pageTitle = () => `
  <h1 class="sprk-b-TypeDisplayTwo sprk-b-PageTitle">The Quick Brown Fox Jumps Over the Lazy Dog</h1>
`;

pageTitle.story = {
  name: 'Page Title',
};

export const displayOne = () => `
  <h1 class="sprk-b-TypeDisplayOne">The Quick Brown Fox Jumps Over the Lazy Dog</h1>
`;

displayOne.story = {
  name: 'Display One',
};

export const displayTwo = () => `
  <h1 class="sprk-b-TypeDisplayTwo">The Quick Brown Fox Jumps Over the Lazy Dog</h1>
`;

displayTwo.story = {
  name: 'Display Two',
};

export const displayThree = () => `
  <h2 class="sprk-b-TypeDisplayThree">The Quick Brown Fox Jumps Over the Lazy Dog</h2>
`;

displayThree.story = {
  name: 'Display Three',
};

export const displayFour = () => `
  <h3 class="sprk-b-TypeDisplayFour">The Quick Brown Fox Jumps Over the Lazy Dog</h3>
`;

displayFour.story = {
  name: 'Display Four',
};

export const displayFive = () => `
  <h4 class="sprk-b-TypeDisplayFive">The Quick Brown Fox Jumps Over the Lazy Dog</h4>
`;

displayFive.story = {
  name: 'Display Five',
};

export const displaySix = () => `
  <h5 class="sprk-b-TypeDisplaySix">The Quick Brown Fox Jumps Over the Lazy Dog</h5>
`;

displaySix.story = {
  name: 'Display Six',
};

export const displaySeven = () => `
  <h6 class="sprk-b-TypeDisplaySeven">The Quick Brown Fox Jumps Over the Lazy Dog</h6>
`;

displaySeven.story = {
  name: 'Display Seven',
};

export const bodyOne = () => `
  <p class="sprk-b-TypeBodyOne">Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Sed gravida urna quis nulla ultrices, sed efficitur risus elementum. Vivamus
    semper ex a lorem sodales, rhoncus rhoncus augue cursus. Sed vestibulum felis vel euismod
    aliquet. Suspendisse sit amet euismod nibh, eget fermentum arcu. Aliquam lacinia, sem eu
    ultricies auctor, velit nunc commodo sapien, pharetra maximus augue dui eget dui.</p>
`;

bodyOne.story = {
  name: 'Body One',
};

export const bodyTwo = () => `
  <p class="sprk-b-TypeBodyTwo">Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Sed gravida urna quis nulla ultrices, sed efficitur risus elementum. Vivamus
    semper ex a lorem sodales, rhoncus rhoncus augue cursus. Sed vestibulum felis vel euismod
    aliquet. Suspendisse sit amet euismod nibh, eget fermentum arcu. Aliquam lacinia, sem eu
    ultricies auctor, velit nunc commodo sapien, pharetra maximus augue dui eget dui.</p>
`;

bodyTwo.story = {
  name: 'Body Two',
};

export const bodyThree = () => `
  <p class="sprk-b-TypeBodyThree">Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Sed gravida urna quis nulla ultrices, sed efficitur risus elementum. Vivamus
    semper ex a lorem sodales, rhoncus rhoncus augue cursus. Sed vestibulum felis vel euismod
    aliquet. Suspendisse sit amet euismod nibh, eget fermentum arcu. Aliquam lacinia, sem eu
    ultricies auctor, velit nunc commodo sapien, pharetra maximus augue dui eget dui.</p>
`;

bodyThree.story = {
  name: 'Body Three',
};

export const bodyFour = () => `
  <p class="sprk-b-TypeBodyFour">Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Sed gravida urna quis nulla ultrices, sed efficitur risus elementum. Vivamus
    semper ex a lorem sodales, rhoncus rhoncus augue cursus. Sed vestibulum felis vel euismod
    aliquet. Suspendisse sit amet euismod nibh, eget fermentum arcu. Aliquam lacinia, sem eu
    ultricies auctor, velit nunc commodo sapien, pharetra maximus augue dui eget dui.</p>
`;

bodyFour.story = {
  name: 'Body Four',
};
