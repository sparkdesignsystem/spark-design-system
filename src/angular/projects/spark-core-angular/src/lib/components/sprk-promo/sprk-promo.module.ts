import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SparkIconModule } from '../sprk-icon/sprk-icon.module';
import { SparkLinkModule } from '../sprk-link/sprk-link.module';
import { SparkPromoComponent } from './sprk-promo.component';

@NgModule({
  imports: [CommonModule, RouterModule, SparkIconModule, SparkLinkModule],
  declarations: [SparkPromoComponent],
  exports: [SparkPromoComponent]
})
export class SparkPromoModule {}
