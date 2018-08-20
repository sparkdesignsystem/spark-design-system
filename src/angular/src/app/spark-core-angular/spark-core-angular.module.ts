import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { SparkAlertComponent } from './components/sprk-alert/sprk-alert.component';
import { SparkButtonComponent } from './components/sprk-button/sprk-button.component';
import { SparkLinkComponent } from './components/sprk-link/sprk-link.component';
import { SparkIconSetComponent } from './components/sprk-icon-set/sprk-icon-set.component';
import { SparkIconComponent } from './components/sprk-icon/sprk-icon.component';
import { SparkWideNavigationComponent } from './components/sprk-wide-navigation/sprk-wide-navigation.component';
import { SparkNarrowNavigationComponent } from './components/sprk-narrow-navigation/sprk-narrow-navigation.component';
import { SparkSecondaryNavigationComponent} from './components/sprk-secondary-navigation/sprk-secondary-navigation.component';
import { SparkSecondaryNavigationItemComponent} from './components/sprk-secondary-navigation-item/sprk-secondary-navigation-item.component';
import { SparkNarrowNavigationItemComponent } from './components/sprk-narrow-navigation-item/sprk-narrow-navigation-item.component';
import { SparkAccordionComponent } from './components/sprk-accordion/sprk-accordion.component';
import { SparkAccordionItemComponent } from './components/sprk-accordion-item/sprk-accordion-item.component';
import { SparkModalComponent } from './components/sprk-modal/sprk-modal.component';
import { SparkDividerComponent } from './components/sprk-divider/sprk-divider.component';
import { SparkListComponent } from './components/sprk-list/sprk-list.component';
import { SparkListItemComponent } from './components/sprk-list-item/sprk-list-item.component';
import { SparkInputContainerComponent } from './components/inputs/sprk-input-container/sprk-input-container.component';
import { SparkSelectionContainerComponent } from './components/inputs/sprk-selection-container/sprk-selection-container.component';
import { SparkSelectionItemContainerComponent } from './components/inputs/sprk-selection-item-container/sprk-selection-item-container.component';
import { SparkMastheadComponent } from './components/sprk-masthead/sprk-masthead.component';
import { SparkStackComponent } from './components/sprk-stack/sprk-stack.component';
import { SprkDatepickerDirective } from './directives/inputs/sprk-datepicker/sprk-datepicker.directive';
import { SprkLabelDirective } from './directives/inputs/sprk-label/sprk-label.directive';
import { SprkSelectionLabelDirective } from './directives/inputs/sprk-selection-label/sprk-selection-label.directive';
import { SprkInputDirective } from './directives/inputs/sprk-input/sprk-input.directive';
import { SprkSelectionInputDirective } from './directives/inputs/sprk-selection-input/sprk-selection-input.directive';
import { SprkHelperTextDirective} from './directives/inputs/sprk-helper-text/sprk-helper-text.directive';
import { SprkFieldErrorDirective } from './directives/inputs/sprk-field-error/sprk-field-error.directive';

import { SprkFormatterPhoneNumberDirective } from './directives/inputs/formatters/sprk-formatter-phone-number/sprk-formatter-phone-number.directive';
import { SprkFormatterDateDirective } from './directives/inputs/formatters/sprk-formatter-date/sprk-formatter-date.directive';
import { SprkFormatterMonetaryDirective } from './directives/inputs/formatters/sprk-formatter-monetary/sprk-formatter-monetary.directive';
import { SprkFormatterSsnDirective } from './directives/inputs/formatters/sprk-formatter-ssn/sprk-formatter-ssn.directive';

import TinyDatePicker from 'tiny-date-picker';
import { SparkStackItemDirective } from './directives/sprk-stack-item/sprk-stack-item.directive';
import { SparkPromoComponent } from './components/sprk-promo/sprk-promo.component';
import { SparkFooterComponent } from './components/sprk-footer/sprk-footer.component';
import { SparkToggleComponent } from './components/sprk-toggle/sprk-toggle.component';
import { SparkTableComponent } from './components/sprk-table/sprk-table.component';
import { SprkTableHeadDirective } from './directives/sprk-table-head/sprk-table-head.directive';
import { SprkTableGroupedColumnDirective } from './directives/sprk-table-grouped-column/sprk-table-grouped-column.directive';
import { SprkTableEmptyHeadingDirective } from './directives/sprk-table-empty-heading/sprk-table-empty-heading.directive';
import { SprkTableRowHeadingDirective } from './directives/sprk-table-row-heading/sprk-table-row-heading.directive';
import { SparkTabbedNavigationComponent } from './components/sprk-tabbed-navigation/sprk-tabbed-navigation.component';
import { SprkTabbedNavigationTabDirective } from './directives/tabbed-navigation/sprk-tabbed-navigation-tab/sprk-tabbed-navigation-tab.directive';
import { SprkTabbedNavigationPanelDirective } from './directives/tabbed-navigation/sprk-tabbed-navigation-panel/sprk-tabbed-navigation-panel.directive';
import { SparkPaginationComponent } from './components/sprk-pagination/sprk-pagination.component';

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
  ],
  declarations: [
    SparkAlertComponent,
    SparkAccordionComponent,
    SparkAccordionItemComponent,
    SparkButtonComponent,
    SparkLinkComponent,
    SparkIconSetComponent,
    SparkIconComponent,
    SparkWideNavigationComponent,
    SparkNarrowNavigationComponent,
    SparkNarrowNavigationItemComponent,
    SparkSecondaryNavigationComponent,
    SparkSecondaryNavigationItemComponent,
    SparkModalComponent,
    SparkDividerComponent,
    SparkListComponent,
    SparkListItemComponent,
    SparkMastheadComponent,
    SparkStackComponent,
    SparkStackItemDirective,
    SparkInputContainerComponent,
    SparkSelectionContainerComponent,
    SparkSelectionItemContainerComponent,
    SparkMastheadComponent,
    SprkInputDirective,
    SprkSelectionInputDirective,
    SprkHelperTextDirective,
    SprkLabelDirective,
    SprkSelectionLabelDirective,
    SprkFieldErrorDirective,
    SprkFormatterPhoneNumberDirective,
    SprkFormatterDateDirective,
    SprkFormatterMonetaryDirective,
    SprkFormatterSsnDirective,
    SprkDatepickerDirective,
    SparkStackItemDirective,
    SparkPromoComponent,
    SparkFooterComponent,
    SparkTableComponent,
    SprkTableHeadDirective,
    SprkTableGroupedColumnDirective,
    SprkTableEmptyHeadingDirective,
    SprkTableRowHeadingDirective,
    SparkToggleComponent,
    SparkTabbedNavigationComponent,
    SprkTabbedNavigationTabDirective,
    SprkTabbedNavigationPanelDirective,
    SparkToggleComponent,
    SparkPaginationComponent
  ],
  exports: [
    SparkAlertComponent,
    SparkAccordionComponent,
    SparkAccordionItemComponent,
    SparkButtonComponent,
    SparkDividerComponent,
    SparkLinkComponent,
    SparkModalComponent,
    SparkLinkComponent,
    SparkIconSetComponent,
    SparkIconComponent,
    SparkListComponent,
    SparkListItemComponent,
    SparkWideNavigationComponent,
    SparkNarrowNavigationComponent,
    SparkNarrowNavigationItemComponent,
    SparkInputContainerComponent,
    SparkSelectionContainerComponent,
    SparkSelectionItemContainerComponent,
    SparkNarrowNavigationItemComponent,
    SparkSecondaryNavigationComponent,
    SparkSecondaryNavigationItemComponent,
    SparkMastheadComponent,
    SparkStackComponent,
    SparkStackItemDirective,
    SparkPromoComponent,
    SparkStackItemDirective,
    SparkMastheadComponent,
    SprkInputDirective,
    SprkSelectionInputDirective,
    SprkHelperTextDirective,
    SprkLabelDirective,
    SprkSelectionLabelDirective,
    SprkFieldErrorDirective,
    SprkFormatterPhoneNumberDirective,
    SprkFormatterDateDirective,
    SprkFormatterMonetaryDirective,
    SprkFormatterSsnDirective,
    SprkDatepickerDirective,
    SparkPromoComponent,
    SparkFooterComponent,
    SparkToggleComponent,
    SparkTableComponent,
    SprkTableHeadDirective,
    SprkTableGroupedColumnDirective,
    SprkTableEmptyHeadingDirective,
    SprkTableRowHeadingDirective,
    SparkToggleComponent,
    SparkTabbedNavigationComponent,
    SprkTabbedNavigationTabDirective,
    SprkTabbedNavigationPanelDirective,
    SparkToggleComponent,
    SparkPaginationComponent
  ],
})
export class SparkCoreAngularModule { }
