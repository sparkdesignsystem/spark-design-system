import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkStepperStepComponent } from './sprk-stepper-step.component';
import { SprkLinkModule } from '../../sprk-link/sprk-link.module';

@NgModule({
  imports: [CommonModule, RouterModule, SprkLinkModule],
  declarations: [SprkStepperStepComponent],
  exports: [SprkStepperStepComponent]
})
export class SprkStepperStepModule {}
