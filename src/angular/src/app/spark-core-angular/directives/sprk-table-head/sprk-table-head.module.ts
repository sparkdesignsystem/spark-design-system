import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkTableHeadDirective } from './sprk-table-head.directive';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SprkTableHeadDirective],
  exports: [SprkTableHeadDirective]
})
export class SprkTableHeadModule {}
