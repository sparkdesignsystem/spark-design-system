import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SparkIconModule } from '../../../spark-core-angular/components/sprk-icon/sprk-icon.module';
import { SparkCardComponent } from './sprk-card.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SparkIconModule
  ],
  declarations: [
    SparkCardComponent,
  ],
  exports: [
    SparkCardComponent,
  ],
})
export class SparkCardModule { }
