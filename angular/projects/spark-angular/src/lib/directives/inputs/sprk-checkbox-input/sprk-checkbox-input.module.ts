import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkCheckboxInputDirective } from './sprk-checkbox-input.directive';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SprkCheckboxInputDirective],
  exports: [SprkCheckboxInputDirective]
})
export class SprkCheckboxInputModule {}
