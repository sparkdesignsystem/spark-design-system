import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SparkIconModule } from '../../../spark-core-angular/components/sprk-icon/sprk-icon.module';

import { SparkModalComponent } from './sprk-modal.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SparkIconModule
  ],
  declarations: [
    SparkModalComponent,
  ],
  exports: [
    SparkModalComponent,
  ],
})
export class SparkModalModule { }
