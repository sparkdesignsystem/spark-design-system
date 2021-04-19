import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SprkPromoMediaDirective } from './sprk-promo-media.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [SprkPromoMediaDirective],
  exports: [SprkPromoMediaDirective],
})
export class SprkPromoMediaModule {}
