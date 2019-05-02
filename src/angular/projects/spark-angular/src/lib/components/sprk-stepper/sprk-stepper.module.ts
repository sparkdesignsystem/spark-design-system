import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SparkStepperStepModule } from './sprk-stepper-step/sprk-stepper-step.module';
import { SparkStepperComponent } from './sprk-stepper.component';

@NgModule({
  imports: [CommonModule, RouterModule, SparkStepperStepModule],
  declarations: [SparkStepperComponent],
  exports: [SparkStepperComponent]
})
export class SparkStepperModule {}
