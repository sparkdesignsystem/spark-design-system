import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SparkIconModule } from '../../sprk-icon/sprk-icon.module';
import { SparkMastheadAccordionComponent } from './sprk-masthead-accordion.component';

@NgModule({
  imports: [CommonModule, RouterModule, SparkIconModule],
  declarations: [SparkMastheadAccordionComponent],
  exports: [SparkMastheadAccordionComponent]
})
export class SparkMastheadAccordionModule {}
