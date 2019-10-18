import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkTableComponent } from './sprk-table.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SprkTableComponent],
  exports: [SprkTableComponent]
})
export class SprkTableModule {}
