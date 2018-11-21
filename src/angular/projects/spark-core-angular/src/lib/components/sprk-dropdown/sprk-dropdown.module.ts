import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SparkDropdownComponent } from './sprk-dropdown.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SparkDropdownComponent],
  exports: [SparkDropdownComponent]
})
export class SparkDropdownModule {}
