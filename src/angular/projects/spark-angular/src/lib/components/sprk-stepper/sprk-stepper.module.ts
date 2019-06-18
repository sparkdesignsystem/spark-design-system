import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CdkStepperModule } from '@angular/cdk/stepper';

import { SprkStepperComponent } from './sprk-stepper.component';
import { SprkStepperStepComponent } from './sprk-stepper-step/sprk-stepper-step.component';
import { SprkStepperSliderComponent } from './sprk-stepper-slider/sprk-stepper-slider.component';

@NgModule({
  imports: [CommonModule, RouterModule, CdkStepperModule],
  declarations: [
    SprkStepperComponent,
    SprkStepperStepComponent,
    SprkStepperSliderComponent
  ],
  exports: [SprkStepperComponent]
})
export class SprkStepperModule {}
