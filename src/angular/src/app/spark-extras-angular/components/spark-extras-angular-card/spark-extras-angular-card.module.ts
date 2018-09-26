import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SparkCoreAngularModule } from '@sparkdesignsystem/spark-core-angular';
import { SparkCardComponent } from './spark-extras-angular-card.component';

@NgModule({
  imports: [CommonModule, RouterModule, SparkCoreAngularModule],
  declarations: [SparkCardComponent],
  exports: [SparkCardComponent]
})
export class SparkCardModule {}
