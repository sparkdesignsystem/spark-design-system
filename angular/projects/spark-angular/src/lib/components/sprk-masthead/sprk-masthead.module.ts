import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkLinkDirectiveModule } from '../../directives/sprk-link/sprk-link.module';
import { SprkMastheadAccordionModule } from './components/sprk-masthead-accordion/sprk-masthead-accordion.module';
import { SprkMastheadAccordionItemModule } from './components/sprk-masthead-accordion-item/sprk-masthead-accordion-item.module';
import { SprkMastheadComponent } from './sprk-masthead.component';
import { SprkMastheadSelectorModule } from './components/sprk-masthead-selector/sprk-masthead-selector.module';
import { SprkDropdownModule } from '../sprk-dropdown/sprk-dropdown.module';
import { SprkAccordionModule } from '../sprk-accordion/sprk-accordion.module';
import { SprkAccordionItemModule } from '../sprk-accordion-item/sprk-accordion-item.module';
import { SprkStackModule } from '../sprk-stack/sprk-stack.module';
import { SprkStackItemModule } from '../../directives/sprk-stack-item/sprk-stack-item.module';
import { SprkMastheadBrandingModule } from './directives/sprk-masthead-branding/sprk-masthead-branding.module';
import { SprkMastheadContentModule } from './directives/sprk-masthead-content/sprk-masthead-content.module';
import { SprkMastheadNavBarModule } from './directives/sprk-masthead-nav-bar/sprk-masthead-nav-bar.module';
import { SprkMastheadNavCollapsibleModule } from './directives/sprk-masthead-nav-collapsible/sprk-masthead-nav-collapsible.module';
import { SprkMastheadNavCollapsibleButtonModule } from './components/sprk-masthead-nav-collapsible-button/sprk-masthead-nav-collapsible-button.module';
import { SprkMastheadNavItemsModule } from './directives/sprk-masthead-nav-items/sprk-masthead-nav-items.module';
import { SprkMastheadNavItemModule } from './directives/sprk-masthead-nav-item/sprk-masthead-nav-item.module';

@NgModule({
  imports: [
    CommonModule,
    SprkIconModule,
    RouterModule,
    SprkMastheadAccordionModule,
    SprkMastheadAccordionItemModule,
    SprkMastheadSelectorModule,
    SprkDropdownModule,
    SprkAccordionModule,
    SprkAccordionItemModule,
    SprkLinkDirectiveModule,
    SprkStackModule,
    SprkStackItemModule,
    SprkMastheadNavItemsModule,
    SprkMastheadNavCollapsibleButtonModule,
    SprkMastheadNavCollapsibleModule,
    SprkMastheadNavBarModule,
    SprkMastheadContentModule,
    SprkMastheadBrandingModule,
    SprkMastheadNavItemModule,
  ],
  declarations: [SprkMastheadComponent],
  exports: [
    SprkMastheadComponent,
    SprkMastheadAccordionModule,
    SprkMastheadAccordionItemModule,
    SprkMastheadSelectorModule,
    SprkDropdownModule,
    SprkAccordionModule,
    SprkAccordionItemModule,
    SprkLinkDirectiveModule,
    SprkIconModule,
    SprkStackModule,
    SprkStackItemModule,
    SprkMastheadNavItemsModule,
    SprkMastheadNavCollapsibleButtonModule,
    SprkMastheadNavCollapsibleModule,
    SprkMastheadNavBarModule,
    SprkMastheadContentModule,
    SprkMastheadBrandingModule,
    SprkMastheadNavItemModule,
  ],
})
export class SprkMastheadModule {}
