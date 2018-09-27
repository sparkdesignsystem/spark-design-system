import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SparkOrderedListComponent } from './sprk-ordered-list.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SparkOrderedListComponent],
  exports: [SparkOrderedListComponent]
})
export class SparkOrderedListModule {}
