import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SparkCoreAngularModule } from '@sparkdesignsystem/spark-core-angular';
import { SparkAwardComponent } from './spark-extras-angular-award.component';

@NgModule({
  imports: [CommonModule, RouterModule, SparkCoreAngularModule],
  declarations: [SparkAwardComponent],
  exports: [SparkAwardComponent]
})
export class SparkAwardModule {}
