import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';


import { SparkAlertModule } from './components/sprk-alert/sprk-alert.module';
import { SparkButtonModule } from './components/sprk-button/sprk-button.module';
import { SparkLinkModule } from './components/sprk-link/sprk-link.module';
import { SparkIconSetModule } from './components/sprk-icon-set/sprk-icon-set.module';
import { SparkIconModule } from './components/sprk-icon/sprk-icon.module';
import { SparkWideNavigationModule } from './components/sprk-wide-navigation/sprk-wide-navigation.module';
import { SparkNarrowNavigationModule } from './components/sprk-narrow-navigation/sprk-narrow-navigation.module';
import { SparkSecondaryNavigationModule} from './components/sprk-secondary-navigation/sprk-secondary-navigation.module';
import { SparkSecondaryNavigationItemModule} from './components/sprk-secondary-navigation-item/sprk-secondary-navigation-item.module';
import { SparkNarrowNavigationItemModule } from './components/sprk-narrow-navigation-item/sprk-narrow-navigation-item.module';
import { SparkAccordionModule } from './components/sprk-accordion/sprk-accordion.module';
import { SparkAccordionItemModule } from './components/sprk-accordion-item/sprk-accordion-item.module';
import { SparkModalModule } from './components/sprk-modal/sprk-modal.module';
import { SparkDividerModule } from './components/sprk-divider/sprk-divider.module';
import { SparkListModule } from './components/sprk-list/sprk-list.module';
import { SparkListItemModule } from './components/sprk-list-item/sprk-list-item.module';
import { SparkInputContainerModule } from './components/inputs/sprk-input-container/sprk-input-container.module';
import { SparkSelectionContainerModule } from './components/inputs/sprk-selection-container/sprk-selection-container.module';
import { SparkSelectionItemContainerModule } from './components/inputs/sprk-selection-item-container/sprk-selection-item-container.module';
import { SparkMastheadModule } from './components/sprk-masthead/sprk-masthead.module';
import { SparkStackModule } from './components/sprk-stack/sprk-stack.module';
import { SprkDatepickerModule } from './directives/inputs/sprk-datepicker/sprk-datepicker.module';
import { SprkLabelModule } from './directives/inputs/sprk-label/sprk-label.module';
import { SprkSelectionLabelModule } from './directives/inputs/sprk-selection-label/sprk-selection-label.module';
import { SprkInputModule } from './directives/inputs/sprk-input/sprk-input.module';
import { SprkSelectionInputModule } from './directives/inputs/sprk-selection-input/sprk-selection-input.module';
import { SprkHelperTextModule} from './directives/inputs/sprk-helper-text/sprk-helper-text.module';
import { SprkFieldErrorModule } from './directives/inputs/sprk-field-error/sprk-field-error.module';

import { SprkFormatterPhoneNumberModule } from './directives/inputs/formatters/sprk-formatter-phone-number/sprk-formatter-phone-number.module';
import { SprkFormatterDateModule } from './directives/inputs/formatters/sprk-formatter-date/sprk-formatter-date.module';
import { SprkFormatterMonetaryModule } from './directives/inputs/formatters/sprk-formatter-monetary/sprk-formatter-monetary.module';
import { SprkFormatterSsnModule } from './directives/inputs/formatters/sprk-formatter-ssn/sprk-formatter-ssn.module';

import TinyDatePicker from 'tiny-date-picker';
import { SparkStackItemModule } from './directives/sprk-stack-item/sprk-stack-item.module';
import { SparkPromoModule } from './components/sprk-promo/sprk-promo.module';
import { SparkFooterModule } from './components/sprk-footer/sprk-footer.module';
import { SparkToggleModule } from './components/sprk-toggle/sprk-toggle.module';
import { SparkTableModule } from './components/sprk-table/sprk-table.module';
import { SprkTableHeadModule } from './directives/sprk-table-head/sprk-table-head.module';
import { SprkTableGroupedColumnModule } from './directives/sprk-table-grouped-column/sprk-table-grouped-column.module';
import { SprkTableEmptyHeadingModule } from './directives/sprk-table-empty-heading/sprk-table-empty-heading.module';
import { SprkTableRowHeadingModule } from './directives/sprk-table-row-heading/sprk-table-row-heading.module';
import { SparkTabbedNavigationModule } from './components/sprk-tabbed-navigation/sprk-tabbed-navigation.module';
import { SprkTabbedNavigationTabModule } from './directives/tabbed-navigation/sprk-tabbed-navigation-tab/sprk-tabbed-navigation-tab.module';
import { SprkTabbedNavigationPanelModule } from './directives/tabbed-navigation/sprk-tabbed-navigation-panel/sprk-tabbed-navigation-panel.module';
import { SparkPaginationModule } from './components/sprk-pagination/sprk-pagination.module';

@NgModule({
  providers: [{
    provide: 'TinyDatePicker',
    useValue: TinyDatePicker
  }],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    SparkStackModule,
    SparkStackItemModule,
    SparkToggleModule,
    SparkIconModule,
    SparkIconSetModule,
    SparkFooterModule,
    SparkSecondaryNavigationModule,
    SparkSecondaryNavigationItemModule,
    SparkTabbedNavigationModule
  ],
  exports: [
    SparkAlertModule,
    SparkAccordionModule,
    SparkAccordionItemModule,
    SparkButtonModule,
    SparkDividerModule,
    SparkLinkModule,
    SparkModalModule,
    SparkListModule,
    SparkListItemModule,
    SparkWideNavigationModule,
    SparkNarrowNavigationModule,
    SparkNarrowNavigationItemModule,
    SparkInputContainerModule,
    SparkSelectionContainerModule,
    SparkSelectionItemContainerModule,
    SparkMastheadModule,
    SprkInputModule,
    SprkSelectionInputModule,
    SprkHelperTextModule,
    SprkLabelModule,
    SprkSelectionLabelModule,
    SprkFieldErrorModule,
    SprkFormatterPhoneNumberModule,
    SprkFormatterDateModule,
    SprkFormatterMonetaryModule,
    SprkFormatterSsnModule,
    SprkDatepickerModule,
    SparkPromoModule,
    SparkTableModule,
    SprkTableHeadModule,
    SprkTableGroupedColumnModule,
    SprkTableEmptyHeadingModule,
    SprkTableRowHeadingModule,
    SprkTabbedNavigationTabModule,
    SprkTabbedNavigationPanelModule,
    SparkPaginationModule,
    SparkStackModule, // Start module exports
    SparkStackItemModule,
    SparkToggleModule,
    SparkIconModule,
    SparkIconSetModule,
    SparkFooterModule,
    SparkSecondaryNavigationModule,
    SparkSecondaryNavigationItemModule,
    SparkTabbedNavigationModule
  ],
})
export class SparkCoreAngularModule { }
