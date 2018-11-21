import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-dropdown',
  template: `
    <a
      class="sprk-b-Link sprk-b-Link--plain"
      href="#nogo"
      data-sprk-dropdown-trigger="dropdown01"
      aria-haspopup="true"
      >Trigger Dropdown</a
    >
    <div
      class="sprk-c-Dropdown sprk-u-Display--none"
      data-sprk-dropdown="dropdown01"
    >
      <div class="sprk-c-Dropdown__header">
        <h2 class="sprk-c-Dropdown__title sprk-b-TypeDisplayEight">
          My Choices
        </h2>
      </div>
      <ul class="sprk-c-Dropdown__links">
        <li class="sprk-c-Dropdown__item">
          <a class="sprk-c-Dropdown__link" href="#nogo">
            <p class="sprk-b-TypeBodyOne">Choice Title</p>
            <p>Information about this choice</p>
            <p>More information</p>
          </a>
        </li>
        <li class="sprk-c-Dropdown__item">
          <a
            class="sprk-c-Dropdown__link sprk-c-Dropdown__link--active"
            href="#nogo"
          >
            <p class="sprk-b-TypeBodyOne">Choice Title</p>
            <p>Information about this choice</p>
            <p>More information</p>
          </a>
        </li>
      </ul>
      <div class="sprk-c-Dropdown__footer sprk-u-TextAlign--center">
        <a class="sprk-c-Button sprk-c-Button--tertiary" href="#nogo">
          Go Elsewhere
        </a>
      </div>
    </div>
  `
})
export class SparkDropdownComponent {
  @Input()
  additionalClasses: string;
  @Input()
  idString: string;

  getClasses(): string {
    const classArray: string[] = ['sprk-c-Divider'];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }
}
