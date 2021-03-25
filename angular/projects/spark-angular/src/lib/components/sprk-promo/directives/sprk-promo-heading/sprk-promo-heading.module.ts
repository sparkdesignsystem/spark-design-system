import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SprkPromoHeadingDirective } from './sprk-promo-heading.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [SprkPromoHeadingDirective],
  exports: [SprkPromoHeadingDirective],
})
export class SprkPromoHeadingModule {}
