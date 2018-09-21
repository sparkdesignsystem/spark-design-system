import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SparkIconModule } from '../sprk-icon/sprk-icon.module';
import { SparkModalComponent } from './sprk-modal.component';

@NgModule({
  imports: [CommonModule, RouterModule, SparkIconModule],
  declarations: [SparkModalComponent],
  exports: [SparkModalComponent]
})
export class SparkModalModule {}
