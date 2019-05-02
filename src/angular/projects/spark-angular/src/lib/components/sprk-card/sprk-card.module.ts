import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SparkAngularModule } from '@sparkdesignsystem/spark-angular';
import { SparkCardComponent } from './sprk-card.component';

@NgModule({
  imports: [CommonModule, RouterModule, SparkAngularModule],
  declarations: [SparkCardComponent],
  exports: [SparkCardComponent]
})
export class SprkCardModule {}
