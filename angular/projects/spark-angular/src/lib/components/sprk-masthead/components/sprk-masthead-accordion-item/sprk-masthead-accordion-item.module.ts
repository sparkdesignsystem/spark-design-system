import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SprkIconModule } from '../../../sprk-icon/sprk-icon.module';
import { SprkMastheadAccordionItemComponent } from './sprk-masthead-accordion-item.component';

@NgModule({
  imports: [CommonModule, SprkIconModule],
  declarations: [SprkMastheadAccordionItemComponent],
  exports: [SprkMastheadAccordionItemComponent, SprkIconModule],
})
export class SprkMastheadAccordionItemModule {}
