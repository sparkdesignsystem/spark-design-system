import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-flag',
  template: `
  <div class="sprk-o-Flag sprk-o-Flag--stacked">
    <div class="sprk-o-Flag__figure">
      <ng-content select="[figure-slot]"></ng-content>
    </div>
    <div class="sprk-o-Flag__body">
      <ng-content select="[body-slot]"></ng-content>
    </div>
  </div>
  `
})

export class SprkFlagComponent {

}
