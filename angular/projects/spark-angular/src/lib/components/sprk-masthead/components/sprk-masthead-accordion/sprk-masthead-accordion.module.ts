import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SprkIconModule } from '../../../sprk-icon/sprk-icon.module';
import { SprkMastheadAccordionComponent } from './sprk-masthead-accordion.component';

@NgModule({
  imports: [CommonModule, SprkIconModule],
  declarations: [SprkMastheadAccordionComponent],
  exports: [SprkMastheadAccordionComponent, SprkIconModule],
})
export class SprkMastheadAccordionModule {}
