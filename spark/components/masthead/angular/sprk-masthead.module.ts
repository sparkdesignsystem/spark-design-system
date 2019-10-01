import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkIconModule } from '../../icons/angular/sprk-icon.module';
import { SprkLinkModule } from '../../../base/links/angular/sprk-link.module';
import { SprkMastheadAccordionModule } from './components/sprk-masthead-accordion.module';
import { SprkMastheadAccordionItemModule } from './components/sprk-masthead-accordion-item.module';
import { SprkMastheadComponent } from './sprk-masthead.component';
import { SprkDropdownModule } from '../../dropdown/angular/sprk-dropdown.module';
import { SprkAccordionModule } from '../../accordions/angular/sprk-accordion.module';
import { SprkAccordionItemModule } from '../../accordions/angular/components/sprk-accordion-item.module';

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
