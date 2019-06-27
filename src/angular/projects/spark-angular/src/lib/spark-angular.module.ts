import { NgModule } from '@angular/core';
import { SprkFormatterDateModule } from './directives/inputs/formatters/sprk-formatter-date/sprk-formatter-date.module';
import { SprkFormatterMonetaryModule } from './directives/inputs/formatters/sprk-formatter-monetary/sprk-formatter-monetary.module';
import { SprkFormatterPhoneNumberModule } from './directives/inputs/formatters/sprk-formatter-phone-number/sprk-formatter-phone-number.module';
import { SprkFormatterSsnModule } from './directives/inputs/formatters/sprk-formatter-ssn/sprk-formatter-ssn.module';
import { SprkDatepickerModule } from './directives/inputs/sprk-datepicker/sprk-datepicker.module';
import { SprkFieldErrorModule } from './directives/inputs/sprk-field-error/sprk-field-error.module';
import { SprkHelperTextModule } from './directives/inputs/sprk-helper-text/sprk-helper-text.module';
import { SprkInputModule } from './directives/inputs/sprk-input/sprk-input.module';
import { SprkLabelModule } from './directives/inputs/sprk-label/sprk-label.module';
import { SprkSelectionInputModule } from './directives/inputs/sprk-selection-input/sprk-selection-input.module';
import { SprkSelectionLabelModule } from './directives/inputs/sprk-selection-label/sprk-selection-label.module';
import { SprkStackItemModule } from './directives/sprk-stack-item/sprk-stack-item.module';
import { SprkTableEmptyHeadingModule } from './directives/sprk-table-empty-heading/sprk-table-empty-heading.module';
import { SprkTableGroupedColumnModule } from './directives/sprk-table-grouped-column/sprk-table-grouped-column.module';
import { SprkTableHeadModule } from './directives/sprk-table-head/sprk-table-head.module';
import { SprkTableRowHeadingModule } from './directives/sprk-table-row-heading/sprk-table-row-heading.module';
import { SprkTabbedNavigationPanelModule } from './directives/tabbed-navigation/sprk-tabbed-navigation-panel/sprk-tabbed-navigation-panel.module';
import { SprkTabbedNavigationTabModule } from './directives/tabbed-navigation/sprk-tabbed-navigation-tab/sprk-tabbed-navigation-tab.module';
import { SparkInputContainerModule } from './components/inputs/sprk-input-container/sprk-input-container.module';
import { SprkTextareaContainerModule } from './components/inputs/sprk-textarea-container/sprk-textarea-container.module';
import { SprkIconInputContainerModule } from './components/inputs/sprk-icon-input-container/sprk-icon-input-container.module';
import { SprkSelectionContainerModule } from './components/inputs/sprk-selection-container/sprk-selection-container.module';
import { SprkSelectionItemContainerModule } from './components/inputs/sprk-selection-item-container/sprk-selection-item-container.module';
import { SprkAccordionItemModule } from './components/sprk-accordion-item/sprk-accordion-item.module';
import { SprkAccordionModule } from './components/sprk-accordion/sprk-accordion.module';
import { SprkAlertModule } from './components/sprk-alert/sprk-alert.module';
import { SprkDividerModule } from './components/sprk-divider/sprk-divider.module';
import { SprkDropdownModule } from './components/sprk-dropdown/sprk-dropdown.module';
import { SprkFooterModule } from './components/sprk-footer/sprk-footer.module';
import { SprkIconModule } from './components/sprk-icon/sprk-icon.module';
import { SprkLinkModule } from './components/sprk-link/sprk-link.module';
import { SprkListItemModule } from './components/sprk-list-item/sprk-list-item.module';
import { SprkMastheadModule } from './components/sprk-masthead/sprk-masthead.module';
import { SprkModalModule } from './components/sprk-modal/sprk-modal.module';
import { SprkOrderedListModule } from './components/sprk-ordered-list/sprk-ordered-list.module';
import { SprkPaginationModule } from './components/sprk-pagination/sprk-pagination.module';
import { SprkPromoModule } from './components/sprk-promo/sprk-promo.module';
import { SprkStackModule } from './components/sprk-stack/sprk-stack.module';
import { SprkTabbedNavigationModule } from './components/sprk-tabbed-navigation/sprk-tabbed-navigation.module';
import { SprkTableModule } from './components/sprk-table/sprk-table.module';
import { SprkToggleModule } from './components/sprk-toggle/sprk-toggle.module';
import { SprkUnorderedListModule } from './components/sprk-unordered-list/sprk-unordered-list.module';
import { SprkButtonModule } from './directives/inputs/sprk-button/sprk-button.module';
import { SprkAwardModule } from './components/sprk-award/sprk-award.module';
import { SprkCardModule } from './components/sprk-card/sprk-card.module';
import { SprkDictionaryModule } from './components/sprk-dictionary/sprk-dictionary.module';
import { SprkHighlightBoardModule } from './components/sprk-highlight-board/sprk-highlight-board.module';

@NgModule({
  exports: [
    SprkAlertModule,
    SprkAccordionModule,
    SprkAccordionItemModule,
    SprkAwardModule,
    SprkButtonModule,
    SprkCardModule,
    SprkDictionaryModule,
    SprkDividerModule,
    SprkDropdownModule,
    SprkLinkModule,
    SprkHighlightBoardModule,
    SprkModalModule,
    SprkOrderedListModule,
    SprkUnorderedListModule,
    SprkListItemModule,
    SparkInputContainerModule,
    SprkTextareaContainerModule,
    SprkIconInputContainerModule,
    SprkSelectionContainerModule,
    SprkSelectionItemContainerModule,
    SprkMastheadModule,
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
    SprkPromoModule,
    SprkTableModule,
    SprkTableHeadModule,
    SprkTableGroupedColumnModule,
    SprkTableEmptyHeadingModule,
    SprkTableRowHeadingModule,
    SprkTabbedNavigationTabModule,
    SprkTabbedNavigationPanelModule,
    SprkPaginationModule,
    SprkStackModule,
    SprkStackItemModule,
    SprkToggleModule,
    SprkIconModule,
    SprkFooterModule,
    SprkTabbedNavigationModule
  ]
})
export class SparkAngularModule {}
