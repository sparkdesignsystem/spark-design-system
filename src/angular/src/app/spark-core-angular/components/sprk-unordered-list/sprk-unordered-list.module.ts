import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SparkUnorderedListComponent } from './sprk-unordered-list.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SparkUnorderedListComponent],
  exports: [SparkUnorderedListComponent]
})
export class SparkUnorderedListModule {}
