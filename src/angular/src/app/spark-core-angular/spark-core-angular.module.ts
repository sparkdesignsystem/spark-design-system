import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SparkButtonComponent } from './components/sprk-button/sprk-button.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    SparkButtonComponent,
  ],
  exports: [
    SparkButtonComponent
  ],
})
export class SparkCoreAngularModule { }
