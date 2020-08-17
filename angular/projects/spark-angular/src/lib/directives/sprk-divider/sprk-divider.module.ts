import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SprkDividerDirective } from './sprk-divider.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [SprkDividerDirective],
  exports: [SprkDividerDirective],
})
export class SprkDividerDirectiveModule {}
