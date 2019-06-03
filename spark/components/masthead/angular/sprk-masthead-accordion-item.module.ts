import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkIconModule } from '../../icons/angular/sprk-icon.module';
import { SprkMastheadAccordionItemComponent } from './sprk-masthead-accordion-item.component';
import { SprkLinkModule } from '../../../base/links/angular/sprk-link.module';

@NgModule({
  imports: [CommonModule, RouterModule, SprkIconModule, SprkLinkModule],
  declarations: [SprkMastheadAccordionItemComponent],
  exports: [SprkMastheadAccordionItemComponent]
})
export class SprkMastheadAccordionItemModule {}
