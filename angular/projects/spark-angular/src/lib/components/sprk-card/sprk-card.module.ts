import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SprkLinkDirectiveModule } from '../../directives/sprk-link/sprk-link.module';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkCardComponent } from './sprk-card.component';

@NgModule({
  imports: [CommonModule, SprkIconModule, SprkLinkDirectiveModule],
  declarations: [SprkCardComponent],
  exports: [SprkCardComponent]
})
export class SprkCardModule {}
