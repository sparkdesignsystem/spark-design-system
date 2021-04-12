import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SprkPromoContentDirective } from './sprk-promo-content.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [SprkPromoContentDirective],
  exports: [SprkPromoContentDirective],
})
export class SprkPromoContentModule {}
