import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CdkStepperModule } from '@angular/cdk/stepper';

import { SprkStepperComponent } from './sprk-stepper.component';
import { SprkStepperStepComponent } from './sprk-stepper-step/sprk-stepper-step.component';

@NgModule({
  imports: [CommonModule, RouterModule, CdkStepperModule],
  declarations: [SprkStepperComponent, SprkStepperStepComponent],
  exports: [SprkStepperComponent]
})
export class SprkStepperModule {}
