import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkCheckboxLabelDirective } from './sprk-checkbox-label.directive';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SprkCheckboxLabelDirective],
  exports: [SprkCheckboxLabelDirective]
})
export class SprkCheckboxLabelModule {}
