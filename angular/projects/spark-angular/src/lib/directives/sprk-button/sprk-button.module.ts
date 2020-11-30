import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkButtonDirective } from './sprk-button.directive';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SprkButtonDirective],
  exports: [SprkButtonDirective],
})
export class SprkButtonModule {}
