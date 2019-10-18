import { useEffect } from '@storybook/client-api';
import { dropdowns } from './dropdown';

export default {
  title: 'Components|Dropdown',
};

export const defaultDropdown = () => {
  useEffect(() => {
    dropdowns();
  }, []);

  return `
    <a
      class="sprk-b-Link sprk-b-Link--plain"
      href="#nogo"
      data-sprk-dropdown-trigger="dropdown01"
      aria-haspopup="true"
      role="combobox"
    >
      <svg class="sprk-c-Icon sprk-u-mls" viewBox="0 0 100 100">
        <use xlink:href="#settings" />
      </svg>
    </a>

    <div
      class="sprk-c-Dropdown sprk-u-Display--none"
      data-sprk-dropdown="dropdown01"
      data-id="dropdown-1"
    >
      <div class="sprk-c-Dropdown__header">
        <h2 class="sprk-c-Dropdown__title">My Choices</h2>
      </div>

      <ul class="sprk-c-Dropdown__links">
        <li
          class="sprk-c-Dropdown__item"
          role="option"
        >
          <a class="sprk-c-Dropdown__link" href="#nogo">
            Choice 1
          </a>
        </li>

        <li
          class="sprk-c-Dropdown__item"
          role="option"
        >
          <a class="sprk-c-Dropdown__link" href="#nogo">
            Choice 2
          </a>
        </li>
      </ul>
    </div>
  `;
};

defaultDropdown.story = {
  name: 'Default',
};

export const informationalDropdown = () => {
  useEffect(() => {
    dropdowns();
  }, []);

  return `
    <a
      class="sprk-b-Link sprk-b-Link--plain sprk-u-mrs"
      href="#nogo"
      data-sprk-dropdown-trigger="dropdown02"
      aria-haspopup="true"
      data-analytics="object.action.event">
        <span
          data-sprk-dropdown-trigger-text-container=""
          role="combobox">Make a selection...</span>
        <svg
          class="sprk-c-Icon sprk-c-Icon--stroke-current-color sprk-u-mls"
          viewBox="0 0 100 100">
          <use xlink:href="#chevron-down" />
        </svg>
    </a>

    <div
      class="sprk-c-Dropdown sprk-u-Display--none"
      data-sprk-dropdown="dropdown02"
      data-id="dropdown-2"
    >
      <div class="sprk-c-Dropdown__header">
        <h2 class="sprk-c-Dropdown__title sprk-b-TypeBodyTwo">
          My Choices
        </h2>
      </div>

      <ul class="sprk-c-Dropdown__links">
        <li class="sprk-c-Dropdown__item">
          <a
            class="sprk-c-Dropdown__link"
            href="#nogo" data-sprk-dropdown-choice="Choice Title 1"
            role="option"
          >
            <p class="sprk-b-TypeBodyOne">
              Choice Title
            </p>

            <p class="sprk-b-TypeBodyTwo">
              Information about this choice
            </p>

            <p class="sprk-b-TypeBodyTwo">
              More information
            </p>
          </a>
        </li>

        <li
          class="sprk-c-Dropdown__item"
          data-sprk-dropdown-choice="Choice Title 2"
        >
          <a class="sprk-c-Dropdown__link" href="#nogo" role="option">
            <p class="sprk-b-TypeBodyOne">Choice Title</p>
            <p class="sprk-b-TypeBodyTwo">Information about this choice</p>
            <p class="sprk-b-TypeBodyTwo">More information</p>
          </a>
        </li>
      </ul>

      <div
        class="sprk-c-Dropdown__footer sprk-u-TextAlign--center"
      >
        <a class="sprk-c-Button sprk-c-Button--tertiary" href="#nogo">
          Go Elsewhere
        </a>
      </div>
    </div>
  `;
};

informationalDropdown.story = {
  name: 'Informational',
};
