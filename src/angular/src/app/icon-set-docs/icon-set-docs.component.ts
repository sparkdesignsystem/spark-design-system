import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'sprk-icon-set-docs',
  template: `
    <div class="drizzle-o-ContentGrouping" *ngFor="let icon of icons">
      <h2 class="drizzle-b-h2">
        {{ icon }}
      </h2>
      <sprk-icon iconType="{{ icon }}" additionalClasses="sprk-c-Icon--l"></sprk-icon>
    </div>
  `,
  styles: ['']
})
export class IconSetDocsComponent implements OnInit {
  constructor() { }


   icons = [
     'check',
     'bell',
     'facebook',
     'twitter'
   ];

   ngOnInit() {

   }

}
