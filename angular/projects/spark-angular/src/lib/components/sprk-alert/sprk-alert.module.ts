import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkAlertComponent } from './sprk-alert.component';

@NgModule({
  imports: [CommonModule, RouterModule, SprkIconModule],
  declarations: [SprkAlertComponent],
  exports: [SprkAlertComponent]
})
export class SprkAlertModule {}
