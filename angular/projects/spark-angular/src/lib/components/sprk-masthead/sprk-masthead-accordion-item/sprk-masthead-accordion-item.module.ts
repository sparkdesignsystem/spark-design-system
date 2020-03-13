import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SprkIconModule } from '../../sprk-icon/sprk-icon.module';
import {
  SprkMastheadAccordionItemComponent
} from './sprk-masthead-accordion-item.component';
import { SprkLinkDirectiveModule } from '../../../directives/sprk-link/sprk-link.module';

@NgModule({
  imports: [CommonModule, SprkIconModule, SprkLinkDirectiveModule],
  declarations: [SprkMastheadAccordionItemComponent],
  exports: [SprkMastheadAccordionItemComponent]
})
export class SprkMastheadAccordionItemModule {}
