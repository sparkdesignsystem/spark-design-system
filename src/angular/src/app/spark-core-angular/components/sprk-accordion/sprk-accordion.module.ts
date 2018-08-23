import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SparkIconModule } from '../../../spark-core-angular/components/sprk-icon/sprk-icon.module';
import { SparkAccordionComponent } from './sprk-accordion.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SparkIconModule
  ],
  declarations: [
    SparkAccordionComponent,
  ],
  exports: [
    SparkAccordionComponent,
  ],
})
export class SparkAccordionModule { }
