import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkIconModule } from '../../icons/angular/sprk-icon.module';
import { SprkLinkModule } from '../../../base/links/angular/sprk-link.module';
import { SprkPromoComponent } from './sprk-promo.component';

@NgModule({
  imports: [CommonModule, RouterModule, SprkIconModule, SprkLinkModule],
  declarations: [SprkPromoComponent],
  exports: [SprkPromoComponent]
})
export class SprkPromoModule {}
