import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkLinkModule } from '../sprk-link/sprk-link.module';
import { SprkMastheadAccordionModule } from './sprk-masthead-accordion/sprk-masthead-accordion.module';
import { SprkMastheadAccordionItemModule } from './sprk-masthead-accordion-item/sprk-masthead-accordion-item.module';
import { SprkMastheadComponent } from './sprk-masthead.component';
import { SprkDropdownModule } from '../sprk-dropdown/sprk-dropdown.module';
import { SprkAccordionModule } from '../sprk-accordion/sprk-accordion.module';
import { SprkAccordionItemModule } from '../sprk-accordion-item/sprk-accordion-item.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SprkIconModule,
    SprkMastheadAccordionModule,
    SprkMastheadAccordionItemModule,
    SprkDropdownModule,
    SprkAccordionModule,
    SprkAccordionItemModule,
    SprkLinkModule
  ],
  declarations: [SprkMastheadComponent],
  exports: [SprkMastheadComponent]
})
export class SprkMastheadModule {}
