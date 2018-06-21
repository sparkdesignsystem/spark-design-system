//TODO: remove the direct reference after publishing
import { NgModule } from '../../src/angular/node_modules/@angular/core';
import { CommonModule } from '../../src/angular/node_modules/@angular/common';
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
