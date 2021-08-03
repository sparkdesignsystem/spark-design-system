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

export const pageTitle = () => `
  <h1 class="sprk-b-TypeDisplayOne sprk-u-mbl">
    DisplayOne The spectacle before us was indeed sublime. Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.
  </h1>
  <h2 class="sprk-b-TypeDisplayTwo sprk-u-mbl">
    DisplayTwo The spectacle before us was indeed sublime. Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.
  </h2>
  <h3 class="sprk-b-TypeDisplayThree sprk-u-mbl">
    DisplayThree The spectacle before us was indeed sublime. Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.
  </h3>
  <h4 class="sprk-b-TypeDisplayFour sprk-u-mbl">
    DisplayFour The spectacle before us was indeed sublime. Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.
  </h4>
  <h5 class="sprk-b-TypeDisplayFive sprk-u-mbl">
    DisplayFive The spectacle before us was indeed sublime. Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.
  </h5>
  <h6 class="sprk-b-TypeDisplaySix sprk-u-mbl">
    DisplaySix The spectacle before us was indeed sublime. Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.
  </h6>
  <h6 class="sprk-b-TypeDisplaySeven sprk-u-mbl">
    DisplaySeven The spectacle before us was indeed sublime. Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.
  </h6>
  <p class="sprk-b-TypeBodyOne sprk-u-mbl">
    BodyOne The spectacle before us was indeed sublime. Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.
  </p>
  <p class="sprk-b-TypeBodyTwo sprk-u-mbl">
    BodyTwo The spectacle before us was indeed sublime. Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.
  </p>
  <p class="sprk-b-TypeBodyThree sprk-u-mbl">
    BodyThree The spectacle before us was indeed sublime. Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.
  </p>
  <p class="sprk-b-TypeBodyFour sprk-u-mbl">
    BodyFour The spectacle before us was indeed sublime. Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.
  </p>
`;

pageTitle.story = {
  name: 'Page Title',
};

export const displayOne = () => `
  <h1 class="sprk-b-TypeDisplayOne">
    The spectacle before us was indeed sublime. Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.
  </h1>
`;

displayOne.story = {
  name: 'Display One',
};

export const displayTwo = () => `
  <h1 class="sprk-b-TypeDisplayTwo">
    The spectacle before us was indeed sublime. Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.
  </h1>
`;

displayTwo.story = {
  name: 'Display Two',
};

export const displayThree = () => `
  <h2 class="sprk-b-TypeDisplayThree">
    The spectacle before us was indeed sublime. Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.
  </h2>
`;

displayThree.story = {
  name: 'Display Three',
};

export const displayFour = () => `
  <h3 class="sprk-b-TypeDisplayFour">
    The spectacle before us was indeed sublime. Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.
  </h3>
`;

displayFour.story = {
  name: 'Display Four',
};

export const displayFive = () => `
  <h4 class="sprk-b-TypeDisplayFive">
    The spectacle before us was indeed sublime. Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.
  </h4>
`;

displayFive.story = {
  name: 'Display Five',
};

export const displaySix = () => `
  <h5 class="sprk-b-TypeDisplaySix">
    The spectacle before us was indeed sublime. Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.
  </h5>
`;

displaySix.story = {
  name: 'Display Six',
};

export const displaySeven = () => `
  <h6 class="sprk-b-TypeDisplaySeven">
    The spectacle before us was indeed sublime. Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.
  </h6>
`;

displaySeven.story = {
  name: 'Display Seven',
};

export const bodyOne = () => `
  <p class="sprk-b-TypeBodyOne">Lorem ipsum dolor sit amet, consectetur
  adipiscing elit. Sed gravida urna quis nulla ultrices, sed efficitur
  risus elementum. Vivamus semper ex a lorem sodales, rhoncus rhoncus
  augue cursus. Sed vestibulum felis vel euismod aliquet. Suspendisse
  sit amet euismod nibh, eget fermentum arcu. Aliquam lacinia, sem eu
  ultricies auctor, velit nunc commodo sapien, pharetra maximus augue
  dui eget dui.</p>
`;

bodyOne.story = {
  name: 'Body One',
};

export const bodyTwo = () => `
  <p class="sprk-b-TypeBodyTwo">Lorem ipsum dolor sit amet, consectetur
  adipiscing elit. Sed gravida urna quis nulla ultrices, sed efficitur
  risus elementum. Vivamus semper ex a lorem sodales, rhoncus rhoncus
  augue cursus. Sed vestibulum felis vel euismod aliquet. Suspendisse
  sit amet euismod nibh, eget fermentum arcu. Aliquam lacinia, sem eu
  ultricies auctor, velit nunc commodo sapien, pharetra maximus augue
  dui eget dui.</p>
`;

bodyTwo.story = {
  name: 'Body Two',
};

export const bodyThree = () => `
  <p class="sprk-b-TypeBodyThree">Lorem ipsum dolor sit amet, consectetur
  adipiscing elit. Sed gravida urna quis nulla ultrices, sed efficitur
  risus elementum. Vivamus semper ex a lorem sodales, rhoncus rhoncus
  augue cursus. Sed vestibulum felis vel euismod aliquet. Suspendisse
  sit amet euismod nibh, eget fermentum arcu. Aliquam lacinia, sem eu
  ultricies auctor, velit nunc commodo sapien, pharetra maximus augue
  dui eget dui.</p>
`;

bodyThree.story = {
  name: 'Body Three',
};

export const bodyFour = () => `
  <p class="sprk-b-TypeBodyFour">Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Sed gravida urna quis nulla ultrices, sed efficitur
    risus elementum. Vivamus semper ex a lorem sodales, rhoncus rhoncus
    augue cursus. Sed vestibulum felis vel euismod aliquet. Suspendisse
    sit amet euismod nibh, eget fermentum arcu. Aliquam lacinia, sem eu
    ultricies auctor, velit nunc commodo sapien, pharetra maximus augue
    dui eget dui.</p>
`;

bodyFour.story = {
  name: 'Body Four',
};
