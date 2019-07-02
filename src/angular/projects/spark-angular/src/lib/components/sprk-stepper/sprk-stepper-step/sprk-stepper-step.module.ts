import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkStepperStepComponent } from './sprk-stepper-step.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SprkStepperStepComponent],
  exports: [SprkStepperStepComponent]
})
export class SprkStepperStepModule {}
