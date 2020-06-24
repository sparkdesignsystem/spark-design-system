import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SprkFieldsetDirective } from './sprk-fieldset.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [SprkFieldsetDirective],
  exports: [SprkFieldsetDirective],
})
export class SprkFieldsetModule {}
