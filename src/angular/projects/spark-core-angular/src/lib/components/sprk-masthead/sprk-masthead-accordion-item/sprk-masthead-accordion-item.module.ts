import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SparkIconModule } from '../../sprk-icon/sprk-icon.module';
import { SparkMastheadAccordionItemComponent } from './sprk-masthead-accordion-item.component';
import { SparkLinkModule } from '../../sprk-link/sprk-link.module';

@NgModule({
  imports: [CommonModule, RouterModule, SparkIconModule, SparkLinkModule],
  declarations: [SparkMastheadAccordionItemComponent],
  exports: [SparkMastheadAccordionItemComponent]
})
export class SparkMastheadAccordionItemModule {}
