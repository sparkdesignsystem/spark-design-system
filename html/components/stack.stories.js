export default {
  title: 'Components|Stack',
  decorators: [
    story => `
      <div class="sprk-o-Box sb-decorate">${story()}</div>
    `,
  ],
};

export const defaultStory = () => (
  `
    <div class="sprk-o-Stack">
      <div class="sprk-o-Stack__item">
      </div>

      <div class="sprk-o-Stack__item">
      </div>
    </div>
  `
);

defaultStory.story = {
  name: 'Default',
};

export const stackSplit = () => (
  `
  <div class="sprk-o-Stack sprk-o-Stack--medium sprk-o-Stack--split@s">
    <div class="sprk-o-Stack__item">Item One</div>
    <div class="sprk-o-Stack__item">Item Two</div>
  </div>
  `
);

stackSplit.story = {
  name: 'With Split Items and Spacing',
};

export const stackSplitTwoCol = () => (
  `
    <div class="sprk-o-Stack sprk-o-Stack--split@xs">
      <div class="sprk-o-Stack__item sprk-o-Stack__item--half@xs"></div>
      <div class="sprk-o-Stack__item sprk-o-Stack__item--half@xs"></div>
    </div>
  `
);

stackSplitTwoCol.story = {
  name: 'Split - Two Column',
};

export const stackSplitThreeCol = () => (
  `
    <div class="sprk-o-Stack sprk-o-Stack--split@xs">
      <div class="sprk-o-Stack__item sprk-o-Stack__item--third@xs"></div>
      <div class="sprk-o-Stack__item sprk-o-Stack__item--third@xs"></div>
      <div class="sprk-o-Stack__item sprk-o-Stack__item--third@xs"></div>
    </div>
  `
);

stackSplitThreeCol.story = {
  name: 'Split - Three Column',
};

export const stackSplitFourCol = () => (
  `
  <div class="sprk-o-Stack sprk-o-Stack--split@xs">
    <div class="sprk-o-Stack__item sprk-o-Stack__item--fourth@xs"></div>
    <div class="sprk-o-Stack__item sprk-o-Stack__item--fourth@xs"></div>
    <div class="sprk-o-Stack__item sprk-o-Stack__item--fourth@xs"></div>
    <div class="sprk-o-Stack__item sprk-o-Stack__item--fourth@xs"></div>
  </div>
  `
);

stackSplitFourCol.story = {
  name: 'Split - Four Column',
};

export const stackSplitFiveCol = () => (
  `
    <div class="sprk-o-Stack sprk-o-Stack--split@xs">
      <div class="sprk-o-Stack__item sprk-o-Stack__item--fifth@xs"></div>
      <div class="sprk-o-Stack__item sprk-o-Stack__item--fifth@xs"></div>
      <div class="sprk-o-Stack__item sprk-o-Stack__item--fifth@xs"></div>
      <div class="sprk-o-Stack__item sprk-o-Stack__item--fifth@xs"></div>
      <div class="sprk-o-Stack__item sprk-o-Stack__item--fifth@xs"></div>
    </div>
  `
);

stackSplitFiveCol.story = {
  name: 'Split - Five Column',
};

export const stackSplitSixCol = () => (
  `
  <div class="sprk-o-Stack sprk-o-Stack--split@xs">
    <div class="sprk-o-Stack__item sprk-o-Stack__item--sixth@xs"></div>
    <div class="sprk-o-Stack__item sprk-o-Stack__item--sixth@xs"></div>
    <div class="sprk-o-Stack__item sprk-o-Stack__item--sixth@xs"></div>
    <div class="sprk-o-Stack__item sprk-o-Stack__item--sixth@xs"></div>
    <div class="sprk-o-Stack__item sprk-o-Stack__item--sixth@xs"></div>
    <div class="sprk-o-Stack__item sprk-o-Stack__item--sixth@xs"></div>
  </div>
  `
);

stackSplitSixCol.story = {
  name: 'Split - Six Column',
};

export const stackSplitLayoutThreeFourths = () => (
  `
  <div class="sprk-o-Stack sprk-o-Stack--split@xs">
    <div class="sprk-o-Stack__item sprk-o-Stack__item--three-fourths@xs"></div>
    <div class="sprk-o-Stack__item sprk-o-Stack__item--fourth@xs"></div>
  </div>
  `
);

stackSplitSixCol.story = {
  name: 'Split - 75/25 Layout',
};

export const stackSplitLayoutThreeFifths = () => (
  `
  <div class="sprk-o-Stack sprk-o-Stack--split@xs">
    <div class="sprk-o-Stack__item sprk-o-Stack__item--three-fifths@xs"></div>
    <div class="sprk-o-Stack__item sprk-o-Stack__item--two-fifths@xs"></div>
  </div>
  `
);

stackSplitSixCol.story = {
  name: 'Split - 60/40 Layout',
};

export const stackSplitLayoutThreeTenths = () => (
  `
  <div class="sprk-o-Stack sprk-o-Stack--split@xs">
    <div class="sprk-o-Stack__item sprk-o-Stack__item--three-tenths@xs"></div>
    <div class="sprk-o-Stack__item sprk-o-Stack__item--seven-tenths@xs"></div>
  </div>
  `
);

stackSplitSixCol.story = {
  name: 'Split - 30/70 Layout',
};

export const stackSplitLayoutMixed = () => (
  `
    <div class="sprk-o-Stack sprk-o-Stack--split@xs">
      <div class="sprk-o-Stack__item sprk-o-Stack__item--fourth@xs sprk-u-AbsoluteCenter">
        <p class="sprk-b-TypeBodyOne">
          fourth
        </p>
      </div>
      <div class="sprk-o-Stack__item sprk-o-Stack__item--half@xs sprk-u-AbsoluteCenter">
        <p class="sprk-b-TypeBodyOne">
          half
        </p>
      </div>
      <div class="sprk-o-Stack__item sprk-o-Stack__item--fourth@xs sprk-u-AbsoluteCenter">
        <p class="sprk-b-TypeBodyOne">
          fourth
        </p>
      </div>
    </div>

    <div class="sprk-o-Stack sprk-o-Stack--split@xs">
      <div class="sprk-o-Stack__item sprk-o-Stack__item--sixth@xs sprk-u-AbsoluteCenter">
        <p class="sprk-b-TypeBodyOne">
          sixth
        </p>
      </div>
      <div class="sprk-o-Stack__item sprk-o-Stack__item--sixth@xs sprk-u-AbsoluteCenter">
        <p class="sprk-b-TypeBodyOne">
          sixth
        </p>
      </div>
      <div class="sprk-o-Stack__item sprk-o-Stack__item--sixth@xs sprk-u-AbsoluteCenter">
        <p class="sprk-b-TypeBodyOne">
          sixth
        </p>
      </div>
      <div class="sprk-o-Stack__item sprk-o-Stack__item--flex@xs sprk-u-AbsoluteCenter">
        <p class="sprk-b-TypeBodyOne">
          flex
        </p>
      </div>
    </div>

    <div class="sprk-o-Stack sprk-o-Stack--split@xs">
      <div class="sprk-o-Stack__item sprk-o-Stack__item--two-fifths@xs sprk-u-AbsoluteCenter">
        <p class="sprk-b-TypeBodyOne">
          two-fifths
        </p>
      </div>
      <div class="sprk-o-Stack__item sprk-o-Stack__item--fifth@xs sprk-u-AbsoluteCenter">
        <p class="sprk-b-TypeBodyOne">
          fifth
        </p>
      </div>
      <div class="sprk-o-Stack__item sprk-o-Stack__item--fifth@xs sprk-u-AbsoluteCenter">
        <p class="sprk-b-TypeBodyOne">
          fifth
        </p>
      </div>
      <div class="sprk-o-Stack__item sprk-o-Stack__item--fifth@xs sprk-u-AbsoluteCenter">
        <p class="sprk-b-TypeBodyOne">
          fifth
        </p>
      </div>
    </div>

    <div class="sprk-o-Stack sprk-o-Stack--split@xs">
      <div class="sprk-o-Stack__item sprk-o-Stack__item--half@xs">
        <div class="sprk-o-Stack sprk-o-Stack--meduim sprk-o-Stack--split@xs">
          <div class="sprk-o-Stack__item sprk-o-Stack__item--flex@xs sprk-u-AbsoluteCenter">
            <p class="sprk-b-TypeBodyOne">
              Nested Item (flex)
            </p>
          </div>
          <div class="sprk-o-Stack__item sprk-o-Stack__item--flex@xs sprk-u-AbsoluteCenter">
            <p class="sprk-b-TypeBodyOne">
              Nested Item (flex)
            </p>
          </div>
        </div>
      </div>
      <div class="sprk-o-Stack__item sprk-o-Stack__item--half@xs sprk-u-AbsoluteCenter">
        <p class="sprk-b-TypeBodyOne">
          half
        </p>
      </div>
    </div>

    <div class="sprk-o-Stack sprk-o-Stack--split@xs">
      <div class="sprk-o-Stack__item sprk-o-Stack__item--two-fifths@xs sprk-u-AbsoluteCenter">
        <p class="sprk-b-TypeBodyOne">
          two-fifths
        </p>
      </div>
      <div class="sprk-o-Stack__item sprk-o-Stack__item--three-fifths@xs sprk-u-AbsoluteCenter">
        <p class="sprk-b-TypeBodyOne">
          three-fifths
        </p>
      </div>
    </div>
  `
);

stackSplitSixCol.story = {
  name: 'Split - Mixed Column Layout',
};