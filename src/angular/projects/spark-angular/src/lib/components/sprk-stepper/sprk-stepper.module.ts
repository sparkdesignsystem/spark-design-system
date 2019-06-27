import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkStepperStepModule } from './sprk-stepper-step/sprk-stepper-step.module';
import { SprkStepperComponent } from './sprk-stepper.component';

@NgModule({
  imports: [CommonModule, RouterModule, SprkStepperStepModule],
  declarations: [SprkStepperComponent],
  exports: [SprkStepperComponent]
})
export class SprkStepperModule {}
