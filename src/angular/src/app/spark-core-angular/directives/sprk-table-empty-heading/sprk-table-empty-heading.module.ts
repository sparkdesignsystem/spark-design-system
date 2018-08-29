import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkTableEmptyHeadingDirective } from './sprk-table-empty-heading.directive';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SprkTableEmptyHeadingDirective],
  exports: [SprkTableEmptyHeadingDirective]
})
export class SprkTableEmptyHeadingModule {}
