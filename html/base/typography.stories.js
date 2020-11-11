import { markdownDocumentationLinkBuilder } from '../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Foundations/Typography',
  decorators: [
    (story) => `
      <div class="sprk-o-Box sb-decorate">${story()}</div>
    `,
  ],
  parameters: {
    info: `
${markdownDocumentationLinkBuilder('typography', 'foundations')}

- Heading elements have Typography settings automatically applied,
but the classes can be used to change the style of a heading
without affecting the page outline by modifying the heading
element that is used.
- All body copy will automatically have the style and size
applied by Spark. Use the classes to modify the default.

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
    docs: { iframeHeight: 180 },
  },
};

/* eslint-disable max-len */
export const pageTitle = () => `
  <h1 class="sprk-b-TypeDisplayTwo sprk-b-PageTitle">The Quick Brown Fox Jumps Over the Lazy Dog</h1>
`;
/* eslint-enable max-len */

pageTitle.story = {
  name: 'Page Title',
};

/* eslint-disable max-len */
export const displayOne = () => `
  <h1 class="sprk-b-TypeDisplayOne">The Quick Brown Fox Jumps Over the Lazy Dog</h1>
`;
/* eslint-enable max-len */

displayOne.story = {
  name: 'Display One',
};

/* eslint-disable max-len */
export const displayTwo = () => `
  <h1 class="sprk-b-TypeDisplayTwo">The Quick Brown Fox Jumps Over the Lazy Dog</h1>
`;
/* eslint-enable max-len */

displayTwo.story = {
  name: 'Display Two',
};

/* eslint-disable max-len */
export const displayThree = () => `
  <h2 class="sprk-b-TypeDisplayThree">The Quick Brown Fox Jumps Over the Lazy Dog</h2>
`;
/* eslint-enable max-len */

displayThree.story = {
  name: 'Display Three',
};

/* eslint-disable max-len */
export const displayFour = () => `
  <h3 class="sprk-b-TypeDisplayFour">The Quick Brown Fox Jumps Over the Lazy Dog</h3>
`;
/* eslint-enable max-len */

displayFour.story = {
  name: 'Display Four',
};

/* eslint-disable max-len */
export const displayFive = () => `
  <h4 class="sprk-b-TypeDisplayFive">The Quick Brown Fox Jumps Over the Lazy Dog</h4>
`;
/* eslint-enable max-len */

displayFive.story = {
  name: 'Display Five',
};

/* eslint-disable max-len */
export const displaySix = () => `
  <h5 class="sprk-b-TypeDisplaySix">The Quick Brown Fox Jumps Over the Lazy Dog</h5>
`;
/* eslint-enable max-len */

displaySix.story = {
  name: 'Display Six',
};

/* eslint-disable max-len */
export const displaySeven = () => `
  <h6 class="sprk-b-TypeDisplaySeven">The Quick Brown Fox Jumps Over the Lazy Dog</h6>
`;
/* eslint-enable max-len */

displaySeven.story = {
  name: 'Display Seven',
};

/* eslint-disable max-len */
export const bodyOne = () => `
  <p class="sprk-b-TypeBodyOne">Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Sed gravida urna quis nulla ultrices, sed efficitur risus elementum. Vivamus
    semper ex a lorem sodales, rhoncus rhoncus augue cursus. Sed vestibulum felis vel euismod
    aliquet. Suspendisse sit amet euismod nibh, eget fermentum arcu. Aliquam lacinia, sem eu
    ultricies auctor, velit nunc commodo sapien, pharetra maximus augue dui eget dui.</p>
`;
/* eslint-enable max-len */

bodyOne.story = {
  name: 'Body One',
};

/* eslint-disable max-len */
export const bodyTwo = () => `
  <p class="sprk-b-TypeBodyTwo">Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Sed gravida urna quis nulla ultrices, sed efficitur risus elementum. Vivamus
    semper ex a lorem sodales, rhoncus rhoncus augue cursus. Sed vestibulum felis vel euismod
    aliquet. Suspendisse sit amet euismod nibh, eget fermentum arcu. Aliquam lacinia, sem eu
    ultricies auctor, velit nunc commodo sapien, pharetra maximus augue dui eget dui.</p>
`;
/* eslint-enable max-len */

bodyTwo.story = {
  name: 'Body Two',
};

/* eslint-disable max-len */
export const bodyThree = () => `
  <p class="sprk-b-TypeBodyThree">Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Sed gravida urna quis nulla ultrices, sed efficitur risus elementum. Vivamus
    semper ex a lorem sodales, rhoncus rhoncus augue cursus. Sed vestibulum felis vel euismod
    aliquet. Suspendisse sit amet euismod nibh, eget fermentum arcu. Aliquam lacinia, sem eu
    ultricies auctor, velit nunc commodo sapien, pharetra maximus augue dui eget dui.</p>
`;
/* eslint-enable max-len */

bodyThree.story = {
  name: 'Body Three',
};

/* eslint-disable max-len */
export const bodyFour = () => `
  <p class="sprk-b-TypeBodyFour">Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Sed gravida urna quis nulla ultrices, sed efficitur risus elementum. Vivamus
    semper ex a lorem sodales, rhoncus rhoncus augue cursus. Sed vestibulum felis vel euismod
    aliquet. Suspendisse sit amet euismod nibh, eget fermentum arcu. Aliquam lacinia, sem eu
    ultricies auctor, velit nunc commodo sapien, pharetra maximus augue dui eget dui.</p>
`;
/* eslint-enable max-len */

bodyFour.story = {
  name: 'Body Four',
};
