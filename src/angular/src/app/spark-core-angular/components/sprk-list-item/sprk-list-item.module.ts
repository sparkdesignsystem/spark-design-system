import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SparkListItemComponent } from './sprk-list-item.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    SparkListItemComponent,
  ],
  exports: [
    SparkListItemComponent,
  ],
})
export class SparkListItemModule { }
