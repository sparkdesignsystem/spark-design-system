import { useEffect } from '@storybook/client-api';
import { autocomplete } from './autocomplete';
import { markdownDocumentationLinkBuilder } from '../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Autocomplete',
  decorators: [(story) => `<div class="sprk-o-Box">${story()}</div>`],
  parameters: {
    info: `
${markdownDocumentationLinkBuilder('autocomplete')}
- autocompletes complete automatically
    `,
    docs: { iframeHeight: 200 },
  },
};

export const defaultStory = () => {
  useEffect(() => {
    autocomplete();
  }, []);

  return `
    <div data-sprk-autocomplete="container">
      <div aria-live="polite" data-sprk-autocomplete="announcement"></div>

      <div class="sprk-b-InputContainer">
        <label
          for="autocomplete-input"
          class="sprk-b-Label sprk-b-Label--with-icon sprk-u-ScreenReaderText"
        >
          Search
        </label>

        <div class="sprk-b-TextInputIconContainer">
          <svg
            class="sprk-c-Icon sprk-c-Icon--filled-current-color sprk-c-Icon--stroke-current-color"
            viewBox="0 0 64 64"
          >
            <use xlink:href="#search" />
          </svg>

          <input
            data-sprk-autocomplete="input"
            class="
              sprk-b-TextInput
              sprk-b-TextInput--has-svg-icon
              sprk-u-Width-100
            "
            id="autocomplete-input"
            type="text"
            aria-describedby="input--error-container"
          >
        </div>




        <ul
          data-sprk-autocomplete="filtered"
          class="sprk-c-Autocomplete__results sprk-u-Display--none"
        >
          <span class="sprk-c-Autocomplete__results_header">
            Filtered Results
          </span>
          <li
            id="filtered_1"
            data-sprk-autocomplete-value="AK"
            data-sprk-autocomplete-text="Alaska"
          >
            Alaska
          </li>
          <li
            id="filtered_2"
            data-sprk-autocomplete-value="AL"
            data-sprk-autocomplete-text="Alabama"
          >
            Alabama
          </li>
          <li
            id="filtered_3"
            data-sprk-autocomplete-value="AR"
            data-sprk-autocomplete-text="Arkansas"
          >
            Arkansas
          </li>
          <li
            id="filtered_4"
            data-sprk-autocomplete-value="MI"
            data-sprk-autocomplete-text="Michigan"
          >
            Michigan
          </li>
        </ul>

        <ul
          data-sprk-autocomplete="recents"
          class="sprk-c-Autocomplete__results sprk-u-Display--none"
        >
          <span class="sprk-c-Autocomplete__results_header"
            data-todo="TODO spans are not valid children of ul"
          >
            Recent Results
          </span>
          <li
            id="recents_1"
            data-sprk-autocomplete-value="afebbraro"
            data-sprk-autocomplete-text="Amber Febrraro"
          >
            <div class="sprk-u-FontWeight--bold">Amber</div>
            <div class="sprk-u-FontStyle--italic">Febbraro</div>
          </li>
          </span>
          <li
            id="recents_1"
            data-sprk-autocomplete-value="rcopeland"
            data-sprk-autocomplete-text="Rob Copeland"
          >
            <div class="sprk-u-FontWeight--bold">Rob</div>
            <div class="sprk-u-FontStyle--italic">Copeland</div>
          </li>
          </span>
          <li
            id="recents_1"
            data-sprk-autocomplete-value="rmendoza"
            data-sprk-autocomplete-text="RV Mendoza"
          >
            <div class="sprk-u-FontWeight--bold">RV</div>
            <div class="sprk-u-FontStyle--italic">Mendoza</div>
          </li>
          </span>
          <li
            id="recents_1"
            data-sprk-autocomplete-value="kguernsey"
            data-sprk-autocomplete-text="Katie Guernsey"
          >
            <div class="sprk-u-FontWeight--bold">Katie</div>
            <div class="sprk-u-FontStyle--italic">Guernsey</div>
          </li>
          </span>
          <li
            id="recents_1"
            data-sprk-autocomplete-value="driquelme"
            data-sprk-autocomplete-text="Diana Riquelme"
          >
            <div class="sprk-u-FontWeight--bold">Diana</div>
            <div class="sprk-u-FontStyle--italic">Riquelme</div>
          </li>
          </span>
          <li
            data-sprk-autocomplete-value="bwise"
            data-sprk-autocomplete-text="Bob Wise"
          >
            <div class="sprk-u-FontWeight--bold">Bob</div>
            <div class="sprk-u-FontStyle--italic">Wise</div>
          </li>
        </ul>

        <div
          class="sprk-b-ErrorContainer"
          id="input--error-container"
        ></div>
      </div>




    </div>
  `;
};

defaultStory.story = {
  name: 'Default',
  parameters: {
    jest: ['autocomplete'],
  },
};
