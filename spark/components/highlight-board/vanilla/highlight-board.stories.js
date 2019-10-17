export default {
  title: 'Components|Highlight Board',
};

export const defaultHighlightBoard = () => `
    <div
     class="sprk-c-HighlightBoard sprk-c-HighlightBoard--has-image sprk-u-mbm"
     data-id="highlightboard-1"
    >
      <img
        class="sprk-c-HighlightBoard__image"
        src="/images/desktop.jpg"
        alt="desktop"
      >

      <div class="
        sprk-c-HighlightBoard__content
        sprk-o-Stack
        sprk-o-Stack--large"
      >
        <h1 class="
          sprk-b-TypeDisplayOne
          sprk-c-HighlightBoard__heading
          sprk-o-Stack__item"
        >
          Hello, Welcome To Spark Design System
        </h1>

        <div class="
          sprk-o-Stack__item
          sprk-o-Stack
          sprk-o-Stack--medium
          sprk-o-Stack--split@xs
          sprk-o-Stack--center-column"
        >
          <div class="sprk-o-Stack__item sprk-c-HighlightBoard__cta">
            <a class="sprk-c-Button sprk-c-Button--full@s" href="http://www.sparkdesignsystem.com">
              Designers
            </a>
          </div>

          <div class="sprk-o-Stack__item sprk-c-HighlightBoard__cta">
            <a class="sprk-c-Button sprk-c-Button--full@s sprk-c-Button--secondary" href="http://www.sparkdesignsystem.com">
              Developers
            </a>
          </div>
        </div>
      </div>
    </div>
`;

defaultHighlightBoard.story = {
  name: 'Default',
};

export const noImage = () => `
  <div
   class="sprk-c-HighlightBoard sprk-u-mbm"
   data-id="highlightboard-2"
  >
    <div class="
      sprk-c-HighlightBoard__content
      sprk-o-Stack
      sprk-o-Stack--large">
      <h1 class="
        sprk-b-TypeDisplayTwo
        sprk-c-HighlightBoard__heading
        sprk-o-Stack__item">
        Hello, Welcome To Spark Design System
      </h1>

      <div class="
        sprk-o-Stack__item
        sprk-o-Stack
        sprk-o-Stack--medium
        sprk-o-Stack--split@xs
        sprk-o-Stack--center-column
        sprk-o-Stack--center-row">
        <div class="sprk-o-Stack__item sprk-c-HighlightBoard__cta">
          <a class="
            sprk-c-Button
            sprk-c-Button--full@s" href="http://www.sparkdesignsystem.com">
            Designers
          </a>
        </div>

        <div class="sprk-o-Stack__item sprk-c-HighlightBoard__cta">
          <a
            class="sprk-c-Button sprk-c-Button--full@s sprk-c-Button--secondary"
            href="http://www.sparkdesignsystem.com">
            Developers
          </a>
        </div>
      </div>
    </div>
  </div>
`;

noImage.story = {
  name: 'No Image',
};

export const stacked = () => `
  <div
   class="
     sprk-c-HighlightBoard
     sprk-c-HighlightBoard--has-image
     sprk-c-HighlightBoard--stacked
     sprk-u-mbm"
   data-id="highlightboard-3"
  >
    <img
      class="sprk-c-HighlightBoard__image"
      src="/images/desktop.jpg" alt="desktop">

    <div class="
      sprk-c-HighlightBoard__content
      sprk-o-Stack sprk-o-Stack--large">
      <h1 class="
        sprk-b-TypeDisplayOne
        sprk-c-HighlightBoard__heading
        sprk-o-Stack__item">
        Hello, Welcome To Spark Design System
      </h1>

      <div class="
        sprk-o-Stack__item
        sprk-o-Stack
        sprk-o-Stack--medium
        sprk-o-Stack--split@xs
        sprk-o-Stack--center-column
        sprk-o-Stack--center-row"
        >
        <div class="sprk-o-Stack__item sprk-c-HighlightBoard__cta">
          <a class="sprk-c-Button sprk-c-Button--full@s" href="http://www.sparkdesignsystem.com">
            Designers
          </a>
        </div>

        <div class="sprk-o-Stack__item sprk-c-HighlightBoard__cta">
          <a
            class="sprk-c-Button sprk-c-Button--full@s sprk-c-Button--secondary"
            href="http://www.sparkdesignsystem.com">
            Developers
          </a>
        </div>
      </div>
    </div>
  </div>
`;

stacked.story = {
  name: 'Stacked',
};
