import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkLabelDirective } from './sprk-label.directive';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SprkLabelDirective],
  exports: [SprkLabelDirective]
})
export class SprkLabelModule {}
