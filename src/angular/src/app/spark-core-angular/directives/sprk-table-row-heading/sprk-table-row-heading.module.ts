import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkTableRowHeadingDirective } from './sprk-table-row-heading.directive';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SprkTableRowHeadingDirective],
  exports: [SprkTableRowHeadingDirective]
})
export class SprkTableRowHeadingModule {}
