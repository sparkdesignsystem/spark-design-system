import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SparkIconModule } from '../../../spark-core-angular/components/sprk-icon/sprk-icon.module';

import { SparkAccordionItemComponent } from './sprk-accordion-item.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SparkIconModule
  ],
  declarations: [
    SparkAccordionItemComponent,
  ],
  exports: [
    SparkAccordionItemComponent,
  ],
})
export class SparkAccordionItemModule { }
