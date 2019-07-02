import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkStepperComponent } from './sprk-stepper.component';
import { SprkStepperStepItemComponent } from './sprk-stepper-step-item/sprk-stepper-step-item.component';
import { SprkStepperSliderComponent } from './sprk-stepper-slider/sprk-stepper-slider.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    SprkStepperComponent,
    SprkStepperStepItemComponent,
    SprkStepperSliderComponent
  ],
  exports: [SprkStepperComponent]
})
export class SprkStepperModule {}
