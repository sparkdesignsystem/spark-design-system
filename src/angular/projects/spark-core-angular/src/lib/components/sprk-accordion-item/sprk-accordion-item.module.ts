import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SparkIconModule } from '../sprk-icon/sprk-icon.module';

import { SparkAccordionItemComponent } from './sprk-accordion-item.component';

@NgModule({
  imports: [CommonModule, RouterModule, SparkIconModule],
  declarations: [SparkAccordionItemComponent],
  exports: [SparkAccordionItemComponent]
})
export class SparkAccordionItemModule {}
