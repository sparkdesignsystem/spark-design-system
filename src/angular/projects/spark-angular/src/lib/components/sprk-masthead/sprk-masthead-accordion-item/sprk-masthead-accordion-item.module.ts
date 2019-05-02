import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkIconModule } from '../../sprk-icon/sprk-icon.module';
import { SprkMastheadAccordionItemComponent } from './sprk-masthead-accordion-item.component';
import { SprkLinkModule } from '../../sprk-link/sprk-link.module';

@NgModule({
  imports: [CommonModule, RouterModule, SprkIconModule, SprkLinkModule],
  declarations: [SprkMastheadAccordionItemComponent],
  exports: [SprkMastheadAccordionItemComponent]
})
export class SprkMastheadAccordionItemModule {}
