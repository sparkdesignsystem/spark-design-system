import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkLinkModule } from '../../../base/links/angular/sprk-link.module';
import { SprkIconModule } from '../../icons/angular/sprk-icon.module';
import { SprkCardComponent } from './sprk-card.component';

@NgModule({
  imports: [CommonModule, RouterModule, SprkIconModule, SprkLinkModule],
  declarations: [SprkCardComponent],
  exports: [SprkCardComponent]
})
export class SprkCardModule {}
