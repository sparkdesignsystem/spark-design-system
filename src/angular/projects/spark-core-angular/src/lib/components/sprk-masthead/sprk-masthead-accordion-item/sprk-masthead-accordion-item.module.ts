import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SparkIconModule } from '../../sprk-icon/sprk-icon.module';
import { SparkMastheadAccordionItemComponent } from './sprk-masthead-accordion-item.component';

@NgModule({
  imports: [CommonModule, RouterModule, SparkIconModule],
  declarations: [SparkMastheadAccordionItemComponent],
  exports: [SparkMastheadAccordionItemComponent]
})
export class SparkMastheadAccordionItemModule {}
