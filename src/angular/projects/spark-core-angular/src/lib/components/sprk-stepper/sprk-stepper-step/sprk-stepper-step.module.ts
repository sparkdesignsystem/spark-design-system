import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SparkStepperStepComponent } from './sprk-stepper-step.component';
import { SparkLinkModule } from '../../sprk-link/sprk-link.module';

@NgModule({
  imports: [CommonModule, RouterModule, SparkLinkModule],
  declarations: [SparkStepperStepComponent],
  exports: [SparkStepperStepComponent]
})
export class SparkStepperStepModule {}
