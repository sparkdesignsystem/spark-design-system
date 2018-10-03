import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SparkIconModule } from '../sprk-icon/sprk-icon.module';
import { SparkAccordionComponent } from './sprk-accordion.component';

@NgModule({
  imports: [CommonModule, RouterModule, SparkIconModule],
  declarations: [SparkAccordionComponent],
  exports: [SparkAccordionComponent]
})
export class SparkAccordionModule {}
