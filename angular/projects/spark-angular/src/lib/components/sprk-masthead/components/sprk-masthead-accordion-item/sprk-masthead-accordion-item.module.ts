import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SprkIconModule } from '../../../sprk-icon/sprk-icon.module';
import { SprkMastheadAccordionItemComponent } from './sprk-masthead-accordion-item.component';
import { SprkStackItemModule } from '../../../../directives/sprk-stack-item/sprk-stack-item.module';

@NgModule({
  imports: [CommonModule, SprkIconModule, SprkStackItemModule],
  declarations: [SprkMastheadAccordionItemComponent],
  exports: [
    SprkMastheadAccordionItemComponent,
    SprkIconModule,
    SprkStackItemModule,
  ],
})
export class SprkMastheadAccordionItemModule {}
