import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SparkIconModule } from '../sprk-icon/sprk-icon.module';
import { SparkLinkModule } from '../sprk-link/sprk-link.module';
import { SparkMastheadAccordionModule } from './sprk-masthead-accordion/sprk-masthead-accordion.module';
import { SparkMastheadAccordionItemModule } from './sprk-masthead-accordion-item/sprk-masthead-accordion-item.module';
import { SparkMastheadComponent } from './sprk-masthead.component';
import { SparkDropdownModule } from '../sprk-dropdown/sprk-dropdown.module';
import { SparkAccordionModule } from '../sprk-accordion/sprk-accordion.module';
import { SparkAccordionItemModule } from '../sprk-accordion-item/sprk-accordion-item.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SparkIconModule,
    SparkMastheadAccordionModule,
    SparkMastheadAccordionItemModule,
    SparkDropdownModule,
    SparkAccordionModule,
    SparkAccordionItemModule,
    SparkLinkModule
  ],
  declarations: [SparkMastheadComponent],
  exports: [SparkMastheadComponent]
})
export class SparkMastheadModule {}
