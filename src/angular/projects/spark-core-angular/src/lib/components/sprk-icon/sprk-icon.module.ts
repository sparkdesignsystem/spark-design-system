import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SparkIconSetModule } from '../sprk-icon-set/sprk-icon-set.module';
import { SparkIconComponent } from './sprk-icon.component';

@NgModule({
  imports: [CommonModule, RouterModule, SparkIconSetModule],
  declarations: [SparkIconComponent],
  exports: [SparkIconComponent]
})
export class SparkIconModule {}
