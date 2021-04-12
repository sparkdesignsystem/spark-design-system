import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkCardContentModule } from './directives/sprk-card-content/sprk-card-content.module';
import { SprkCardHeaderModule } from './directives/sprk-card-header/sprk-card-header.module';
import { SprkCardMediaModule } from './directives/sprk-card-media/sprk-card-media.module';
import { SprkLinkDirectiveModule } from '../../directives/sprk-link/sprk-link.module';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkStackModule } from '../sprk-stack/sprk-stack.module';
import { SprkStackItemModule } from '../../directives/sprk-stack-item/sprk-stack-item.module';
import { SprkCardComponent } from './sprk-card.component';
import { SprkTextModule } from '../../directives/sprk-text/sprk-text.module';
import { SprkHeadingModule } from '../../directives/sprk-heading/sprk-heading.module';

@NgModule({
  imports: [
    CommonModule,
    SprkIconModule,
    SprkLinkDirectiveModule,
    SprkCardContentModule,
    SprkCardHeaderModule,
    SprkStackModule,
    SprkStackItemModule,
    SprkCardMediaModule,
    SprkTextModule,
    SprkHeadingModule,
    RouterModule,
  ],
  declarations: [SprkCardComponent],
  exports: [
    SprkCardComponent,
    SprkCardMediaModule,
    SprkCardContentModule,
    SprkCardHeaderModule,
    SprkIconModule,
    SprkStackModule,
    SprkStackItemModule,
    SprkTextModule,
    SprkHeadingModule,
    SprkLinkDirectiveModule,
  ],
})
export class SprkCardModule {}
