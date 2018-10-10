import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SparkIconModule } from '../sprk-icon/sprk-icon.module';

import { SparkAccordionItemComponent } from './sprk-accordion-item.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    SparkIconModule
  ],
  declarations: [SparkAccordionItemComponent],
  exports: [SparkAccordionItemComponent]
})
export class SparkAccordionItemModule {}
