import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SparkTabbedNavigationComponent } from './sprk-tabbed-navigation.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    SparkTabbedNavigationComponent,
  ],
  exports: [
    SparkTabbedNavigationComponent,
  ],
})
export class SparkTabbedNavigationModule { }
