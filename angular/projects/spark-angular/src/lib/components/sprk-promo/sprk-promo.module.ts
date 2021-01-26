import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkLinkDirectiveModule } from '../../directives/sprk-link/sprk-link.module';
import { SprkPromoComponent } from './sprk-promo.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SprkIconModule,
    SprkLinkDirectiveModule,
  ],
  declarations: [SprkPromoComponent],
  exports: [SprkPromoComponent],
})
export class SprkPromoModule {}
