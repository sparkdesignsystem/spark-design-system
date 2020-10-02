import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { A11yModule } from '@angular/cdk/a11y';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkModalComponent } from './sprk-modal.component';

@NgModule({
  imports: [CommonModule, RouterModule, A11yModule, SprkIconModule],
  declarations: [SprkModalComponent],
  exports: [SprkModalComponent]
})
export class SprkModalModule {}
