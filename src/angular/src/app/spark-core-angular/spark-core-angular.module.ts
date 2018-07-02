import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SparkAlertComponent } from './components/sprk-alert/sprk-alert.component';
import { SparkButtonComponent } from './components/sprk-button/sprk-button.component';
import { SparkLinkComponent } from './components/sprk-link/sprk-link.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    SparkAlertComponent,
    SparkButtonComponent,
    SparkLinkComponent,
  ],
  exports: [
    SparkAlertComponent,
    SparkButtonComponent,
    SparkLinkComponent
  ],
})
export class SparkCoreAngularModule { }
