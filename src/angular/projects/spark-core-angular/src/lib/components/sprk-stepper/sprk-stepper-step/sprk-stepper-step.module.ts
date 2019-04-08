import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SparkStepperStepComponent } from './sprk-stepper-step.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SparkStepperStepComponent],
  exports: [SparkStepperStepComponent]
})
export class SparkStepperStepModule {}
