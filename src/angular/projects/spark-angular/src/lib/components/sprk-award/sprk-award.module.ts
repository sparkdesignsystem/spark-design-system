import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SparkAngularModule } from '@sparkdesignsystem/spark-angular';
import { SprkAwardComponent } from './sprk-award.component';

@NgModule({
  imports: [CommonModule, RouterModule, SparkAngularModule],
  declarations: [SprkAwardComponent],
  exports: [SprkAwardComponent]
})
export class SprkAwardModule {}
