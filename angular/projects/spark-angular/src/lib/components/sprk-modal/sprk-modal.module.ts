import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkModalComponent } from './sprk-modal.component';

@NgModule({
  imports: [CommonModule, RouterModule, SprkIconModule],
  declarations: [SprkModalComponent],
  exports: [SprkModalComponent]
})
export class SprkModalModule {}
