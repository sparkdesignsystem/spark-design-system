import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkCardContentModule } from './directives/sprk-card-content/sprk-card-content.module';
import { SprkCardHeaderModule } from './directives/sprk-card-header/sprk-card-header.module';
import { SprkCardMediaModule } from './directives/sprk-card-media/sprk-card-media.module';
import { SprkLinkDirectiveModule } from '../../directives/sprk-link/sprk-link.module';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkCardComponent } from './sprk-card.component';

@NgModule({
  imports: [
    CommonModule,
    SprkIconModule,
    SprkLinkDirectiveModule,
    SprkCardContentModule,
    SprkCardHeaderModule,
    SprkCardMediaModule,
    RouterModule,
  ],
  declarations: [SprkCardComponent],
  exports: [SprkCardComponent],
})
export class SprkCardModule {}
