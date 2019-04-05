import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SparkStepperComponent } from './sprk-stepper.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SparkStepperComponent],
  exports: [SparkStepperComponent]
})
export class SparkStepperComponentModule {}
