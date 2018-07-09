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
     'twitter',
     'calculator',
     'calendar',
     'chat',
     'chevron-down',
     'chevron-left',
     'chevron-right',
     'chevron-up',
     'clock',
     'cloud-download',
     'cog',
     'computer-screen',
     'document',
     'download',
     'envelope',
     'exclamation',
     'home',
     'info',
     'instagram',
     'lock',
     'paper-plane',
     'payment',
     'pencil',
     'phone',
     'play',
     'plus',
     'print',
     'question',
     'rocket',
     'bars',
     'times',
     'upload',
     'update',
     'youtube',
   ];

   ngOnInit() {

   }

}
