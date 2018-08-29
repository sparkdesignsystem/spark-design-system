import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sprk-button-docs',
  template: `<div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">Standard Buttons</h2>
      <sprk-button>Hello, World.</sprk-button>
      <sprk-button buttonType="secondary">Hello, World.</sprk-button>
      <sprk-button buttonType="tertiary">Hello, World.</sprk-button>
      <sprk-button buttonType="removal">Hello, World.</sprk-button>
      <sprk-button isDisabled="true">Hello, World.</sprk-button>
      <sprk-button analyticsString="Product: Feature: Action 1">Hello, Analytics.</sprk-button>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">Spinner Buttons</h2>
      <sprk-button spinner="true">Spinner Button</sprk-button>
      <sprk-button spinner="true" buttonType="secondary">Spinner Button</sprk-button>
      <sprk-button spinner="true" buttonType="tertiary">Spinner Button</sprk-button>
      <sprk-button spinner="true" buttonType="removal">Spinner Button</sprk-button>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">Fire Custom Event</h2>
      <sprk-button buttonType="primary" fireEvent="customEventName">Fire Event</sprk-button>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">Additional Classes</h2>
      <sprk-button additionalClasses="sprk-u-mbm">Margin Bottom</sprk-button>
      <sprk-button buttonType="secondary" additionalClasses="sprk-u-pas">Small Padding</sprk-button>
    </div>`
})
export class ButtonDocsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
