import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkIconModule } from '../../../icons/angular/sprk-icon.module';
import { SprkLinkModule } from '../../../../base/links/angular/sprk-link.module';
import { SprkAccordionItemComponent } from './sprk-accordion-item.component';

@NgModule({
  imports: [CommonModule, RouterModule, SprkIconModule, SprkLinkModule],
  declarations: [SprkAccordionItemComponent],
  exports: [SprkAccordionItemComponent]
})
export class SprkAccordionItemModule {}
