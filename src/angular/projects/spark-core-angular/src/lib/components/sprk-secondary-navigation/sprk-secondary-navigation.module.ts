import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SparkSecondaryNavigationComponent } from './sprk-secondary-navigation.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SparkSecondaryNavigationComponent],
  exports: [SparkSecondaryNavigationComponent]
})
export class SparkSecondaryNavigationModule {}
