import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SparkIconModule } from '../sprk-icon/sprk-icon.module';
import { SparkAlertComponent } from './sprk-alert.component';

@NgModule({
  imports: [CommonModule, RouterModule, SparkIconModule],
  declarations: [SparkAlertComponent],
  exports: [SparkAlertComponent]
})
export class SparkAlertModule {}
