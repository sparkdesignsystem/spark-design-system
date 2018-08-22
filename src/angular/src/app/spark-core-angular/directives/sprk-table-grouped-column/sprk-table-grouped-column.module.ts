import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SprkTableGroupedColumnDirective } from './sprk-table-grouped-column.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    SprkTableGroupedColumnDirective,
  ],
  exports: [
    SprkTableGroupedColumnDirective,
  ],
})
export class SprkTableGroupedColumnModule { }
