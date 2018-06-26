import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SparkButtonComponent } from './components/button/button.component';

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
