import { environment } from './src/environment/environment';
window['sprk'] = { version: { angular: environment.version } } || {};

import { NgModule } from '@angular/core';
import { SprkFormatterDateModule } from '../../../spark/base/inputs/angular/formatters/sprk-formatter-date.module';
import { SprkFormatterMonetaryModule } from '../../../spark/base/inputs/angular/formatters/sprk-formatter-monetary.module';
import { SprkFormatterPhoneNumberModule } from '../../../spark/base/inputs/angular/formatters/sprk-formatter-phone-number.module';
import { SprkFormatterSsnModule } from '../../../spark/base/inputs/angular/formatters/sprk-formatter-ssn.module';
import { SprkDatepickerModule } from '../../../spark/base/inputs/angular/sprk-datepicker.module';
import { SprkFieldErrorModule } from '../../../spark/base/inputs/angular/sprk-field-error.module';
import { SprkHelperTextModule } from '../../../spark/base/inputs/angular/sprk-helper-text.module';
import { SprkInputModule } from '../../../spark/base/inputs/angular/sprk-input.module';
import { SprkLabelModule } from '../../../spark/base/inputs/angular/sprk-label.module';
import { SprkSelectionInputModule } from '../../../spark/base/inputs/angular/sprk-selection-input.module';
import { SprkSelectionLabelModule } from '../../../spark/base/inputs/angular/sprk-selection-label.module';
import { SprkStackItemModule } from '../../../spark/objects/stack/angular/components/sprk-stack-item.module';
import { SprkTableEmptyHeadingModule } from '../../../spark/base/tables/angular/components/sprk-table-empty-heading.module';
import { SprkTableGroupedColumnModule } from '../../../spark/base/tables/angular/components/sprk-table-grouped-column.module';
import { SprkTableHeadModule } from '../../../spark/base/tables/angular/components/sprk-table-head.module';
import { SprkTableRowHeadingModule } from '../../../spark/base/tables/angular/components/sprk-table-row-heading.module';
import { SprkTabbedNavigationPanelModule } from '../../../spark/components/tabs/angular/components/sprk-tabbed-navigation-panel.module';
import { SprkTabbedNavigationTabModule } from '../../../spark/components/tabs/angular/components/sprk-tabbed-navigation-tab.module';
import { SparkInputContainerModule } from '../../../spark/base/inputs/angular/sprk-input-container.module';
import { SprkHugeInputContainerModule } from '../../../spark/base/inputs/angular/sprk-huge-input-container.module';
import { SprkTextareaContainerModule } from '../../../spark/base/inputs/angular/sprk-textarea-container.module';
import { SprkIconInputContainerModule } from '../../../spark/base/inputs/angular/sprk-icon-input-container.module';
import { SprkSelectionContainerModule } from '../../../spark/base/inputs/angular/sprk-selection-container.module';
import { SprkSelectionItemContainerModule } from '../../../spark/base/inputs/angular//sprk-selection-item-container.module';
import { SprkAccordionItemModule } from '../../../spark/components/accordions/angular/components/sprk-accordion-item.module';
import { SprkAccordionModule } from '../../../spark/components/accordions/angular/sprk-accordion.module';
import { SprkAlertModule } from '../../../spark/components/alerts/angular/sprk-alert.module';
import { SprkDividerModule } from '../../../spark/components/dividers/angular/sprk-divider.module';
import { SprkDropdownModule } from '../../../spark/components/dropdown/angular/sprk-dropdown.module';
import { SprkFooterModule } from '../../../spark/components/footer/angular/sprk-footer.module';
import { SprkIconModule } from '../../../spark/components/icons/angular/sprk-icon.module';
import { SprkLinkModule } from '../../../spark/base/links/angular/sprk-link.module';
import { SprkListItemModule } from '../../../spark/base/lists/angular/components/sprk-list-item.module';
import { SprkMastheadModule } from '../../../spark/components/masthead/angular/sprk-masthead.module';
import { SprkModalModule } from '../../../spark/components/modals/angular/sprk-modal.module';
import { SprkOrderedListModule } from '../../../spark/base/lists/angular/sprk-ordered-list.module';
import { SprkPaginationModule } from '../../../spark/components/pagination/angular/sprk-pagination.module';
import { SprkPromoModule } from '../../../spark/components/promo/angular/sprk-promo.module';
import { SprkStackModule } from '../../../spark/objects/stack/angular/sprk-stack.module';
import { SprkTabbedNavigationModule } from '../../../spark/components/tabs/angular/sprk-tabbed-navigation.module';
import { SprkTableModule } from '../../../spark/base/tables/angular/sprk-table.module';
import { SprkToggleModule } from '../../../spark/components/toggle/angular/sprk-toggle.module';
import { SprkUnorderedListModule } from '../../../spark/base/lists/angular/sprk-unordered-list.module';
import { SprkButtonModule } from '../../../spark/components/buttons/angular/sprk-button.module';
import { SprkAwardModule } from '../../../spark/components/awards/angular/sprk-award.module';
import { SprkCardModule } from '../../../spark/components/card/angular/sprk-card.module';
import { SprkDictionaryModule } from '../../../spark/components/dictionary/angular/sprk-dictionary.module';
import { SprkHighlightBoardModule } from '../../../spark/components/highlight-board/angular/sprk-highlight-board.module';

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
    SprkHugeInputContainerModule,
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
