import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkIconModule } from '../../icons/angular/sprk-icon.module';
import { SprkLinkModule } from '../../../base/links/angular/sprk-link.module';
import { SprkAccordionComponent } from './sprk-accordion.component';

@NgModule({
  imports: [CommonModule, RouterModule, SprkIconModule, SprkLinkModule],
  declarations: [SprkAccordionComponent],
  exports: [SprkAccordionComponent]
})
export class SprkAccordionModule {}
