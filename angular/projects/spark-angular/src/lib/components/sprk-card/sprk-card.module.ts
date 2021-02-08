import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkLinkDirectiveModule } from '../../directives/sprk-link/sprk-link.module';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkCardComponent } from './sprk-card.component';

@NgModule({
  imports: [
    CommonModule,
    SprkIconModule,
    SprkLinkDirectiveModule,
    RouterModule,
  ],
  declarations: [SprkCardComponent],
  exports: [SprkCardComponent],
})
export class SprkCardModule {}
