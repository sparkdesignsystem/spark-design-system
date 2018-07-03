import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SparkButtonComponent } from './components/sprk-button/sprk-button.component';
import { SparkLinkComponent } from './components/sprk-link/sprk-link.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    SparkButtonComponent,
    SparkLinkComponent,
  ],
  exports: [
    SparkButtonComponent,
    SparkLinkComponent
  ],
})
export class SparkCoreAngularModule { }
