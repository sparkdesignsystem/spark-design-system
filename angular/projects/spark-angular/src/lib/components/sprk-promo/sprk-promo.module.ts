import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkLinkDirectiveModule } from '../../directives/sprk-link/sprk-link.module';
import { SprkPromoComponent } from './sprk-promo.component';
import { SprkPromoContentModule } from './directives/sprk-promo-content/sprk-promo-content.module';
import { SprkPromoHeadingModule } from './directives/sprk-promo-heading/sprk-promo-heading.module';
import { SprkPromoMediaModule } from './directives/sprk-promo-media/sprk-promo-media.module';
import { SprkPromoSubheadingModule } from './directives/sprk-promo-subheading/sprk-promo-subheading.module';
import { SprkStackModule } from '../../components/sprk-stack/sprk-stack.module';
import { SprkStackItemModule } from '../../directives/sprk-stack-item/sprk-stack-item.module';
import { SprkHeadingModule } from '../../directives/sprk-heading/sprk-heading.module';
import { SprkTextModule } from '../../directives/sprk-text/sprk-text.module';

@NgModule({
  imports: [
    CommonModule,
    SprkIconModule,
    SprkLinkDirectiveModule,
    SprkPromoContentModule,
    SprkPromoHeadingModule,
    SprkPromoSubheadingModule,
    SprkPromoMediaModule,
    SprkStackModule,
    SprkStackItemModule,
    SprkHeadingModule,
    SprkTextModule,
    RouterModule,
  ],
  declarations: [SprkPromoComponent],
  exports: [
    SprkPromoComponent,
    SprkIconModule,
    SprkLinkDirectiveModule,
    SprkPromoMediaModule,
    SprkPromoContentModule,
    SprkPromoHeadingModule,
    SprkPromoSubheadingModule,
    SprkStackModule,
    SprkStackItemModule,
    SprkTextModule,
    SprkHeadingModule,
  ],
})
export class SprkPromoModule {}
