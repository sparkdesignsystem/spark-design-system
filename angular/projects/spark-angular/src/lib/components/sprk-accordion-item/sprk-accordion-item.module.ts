import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkLinkDirectiveModule } from '../../directives/sprk-link/sprk-link.module';
import { SprkAccordionItemComponent } from './sprk-accordion-item.component';

@NgModule({
  imports: [CommonModule, SprkIconModule, SprkLinkDirectiveModule],
  declarations: [SprkAccordionItemComponent],
  exports: [SprkAccordionItemComponent]
})
export class SprkAccordionItemModule {}
