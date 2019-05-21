import { NgModule } from '@angular/core';
import { SprkFormatterDateModule } from '../../base/inputs/angular/sprk-formatter-date.module';
import { SprkFormatterMonetaryModule } from '../../base/inputs/angular/sprk-formatter-monetary.module';
import { SprkFormatterPhoneNumberModule } from '../../base/inputs/angular/sprk-formatter-phone-number.module';
import { SprkFormatterSsnModule } from '../../base/inputs/angular/sprk-formatter-ssn.module';
import { SprkDatepickerModule } from '../../base/inputs/angular/sprk-datepicker.module';
import { SprkFieldErrorModule } from '../../base/inputs/angular/sprk-field-error.module';
import { SprkHelperTextModule } from '../../base/inputs/angular/sprk-helper-text.module';
import { SprkInputModule } from '../../base/inputs/angular/sprk-input.module';
import { SprkLabelModule } from '../../base/inputs/angular/sprk-label.module';
import { SprkSelectionInputModule } from '../../base/inputs/angular/sprk-selection-input.module';
import { SprkSelectionLabelModule } from '../../base/inputs/angular/sprk-selection-label.module';
import { SprkStackItemModule } from '../../objects/stack/angular/sprk-stack-item.module';
import { SprkTableEmptyHeadingModule } from '../../base/tables/angular/sprk-table-empty-heading.module';
import { SprkTableGroupedColumnModule } from '../../base/tables/angular/sprk-table-grouped-column.module';
import { SprkTableHeadModule } from '../../base/tables/angular/sprk-table-head.module';
import { SprkTableRowHeadingModule } from '../../base/tables/angular/sprk-table-row-heading.module';
import { SprkTabbedNavigationPanelModule } from '../../components/tabs/angular/sprk-tabbed-navigation-panel.module';
import { SprkTabbedNavigationTabModule } from '../../components/tabs/angular/sprk-tabbed-navigation-tab.module';
import { SparkInputContainerModule } from '../../base/inputs/angular/sprk-input-container.module';
import { SprkTextareaContainerModule } from '../../base/inputs/angular/sprk-textarea-container.module';
import { SprkIconInputContainerModule } from '../../base/inputs/angular/sprk-icon-input-container.module';
import { SprkSelectionContainerModule } from '../../base/inputs/angular/sprk-selection-container.module';
import { SprkSelectionItemContainerModule } from '../../base/inputs/angular/sprk-selection-item-container.module';
import { SprkAccordionItemModule } from '../../components/accordions/angular/sprk-accordion-item.module';
import { SprkAccordionModule } from '../../components/accordions/angular/sprk-accordion.module';
import { SprkAlertModule } from '../../components/alerts/angular/sprk-alert.module';
import { SprkDividerModule } from '../../components/dividers/angular/sprk-divider.module';
import { SprkDropdownModule } from '../../components/dropdown/angular/sprk-dropdown.module';
import { SprkFooterModule } from '../../components/footer/angular/sprk-footer.module';
import { SprkIconModule } from '../../components/icons/angular/sprk-icon.module';
import { SprkLinkModule } from '../../base/links/angular/sprk-link.module';
import { SprkListItemModule } from '../../base/lists/angular/sprk-list-item.module';
import { SprkMastheadModule } from '../../components/masthead/angular/sprk-masthead.module';
import { SprkModalModule } from '../../components/modals/angular/sprk-modal.module';
import { SprkOrderedListModule } from '../../base/lists/angular/sprk-ordered-list.module';
import { SprkPaginationModule } from '../../components/pagination/angular/sprk-pagination.module';
import { SprkPromoModule } from '../../components/promo/angular/sprk-promo.module';
import { SprkStackModule } from '../../objects/stack/angular/sprk-stack.module';
import { SprkTabbedNavigationModule } from '../../components/tabs/angular/sprk-tabbed-navigation.module';
import { SprkTableModule } from '../../base/tables/angular/sprk-table.module';
import { SprkToggleModule } from '../../components/toggle/angular/sprk-toggle.module';
import { SprkUnorderedListModule } from '../../base/lists/angular/sprk-unordered-list.module';
import { SprkButtonModule } from '../../components/buttons/angular/sprk-button.module';
import { SprkAwardModule } from '../../components/awards/angular/sprk-award.module';
import { SprkCardModule } from '../../components/card/angular/sprk-card.module';
import { SprkDictionaryModule } from '../../components/dictionary/angular/sprk-dictionary.module';
import { SprkHighlightBoardModule } from '../../components/highlight-board/angular/sprk-highlight-board.module';

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
