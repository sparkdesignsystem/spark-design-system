import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { SparkAlertComponent } from './components/sprk-alert/sprk-alert.component';
import { SparkButtonComponent } from './components/sprk-button/sprk-button.component';
import { SparkCardComponent } from './components/sprk-card/sprk-card.component';
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
import { SparkInputMaskContainerComponent } from './components/inputs/sprk-input-mask-container/sprk-input-mask-container.component';
import { SparkMastheadComponent } from './components/sprk-masthead/sprk-masthead.component';
import { SparkStackComponent } from './components/sprk-stack/sprk-stack.component';

import { SprkDatepickerDirective } from './directives/inputs/sprk-datepicker/sprk-datepicker.directive';
import { SparkStackItemDirective } from './components/sprk-stack-item/sprk-stack-item.directive';
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


@NgModule({
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
    SparkCardComponent,
    SparkLinkComponent,
    SparkIconSetComponent,
    SparkIconComponent,
    SparkWideNavigationComponent,
    SparkNarrowNavigationComponent,
    SparkNarrowNavigationItemComponent,
    SparkSecondaryNavigationComponent,
    SparkSecondaryNavigationItemComponent,
    SparkIconComponent,
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
    SparkInputMaskContainerComponent,
    SparkListItemComponent,
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
  ],
  exports: [
    SparkAlertComponent,
    SparkAccordionComponent,
    SparkAccordionItemComponent,
    SparkButtonComponent,
    SparkCardComponent,
    SparkDividerComponent,
    SparkLinkComponent,
    SparkModalComponent,
    SparkLinkComponent,
    SparkIconSetComponent,
    SparkIconComponent,
    SparkListComponent,
    SparkListItemComponent,
    SparkIconComponent,
    SparkWideNavigationComponent,
    SparkNarrowNavigationComponent,
    SparkNarrowNavigationItemComponent,
    SparkInputContainerComponent,
    SparkSelectionContainerComponent,
    SparkSelectionItemContainerComponent,
    SparkInputMaskContainerComponent,
    SparkNarrowNavigationItemComponent,
    SparkSecondaryNavigationComponent,
    SparkSecondaryNavigationItemComponent,
    SparkMastheadComponent,
    SparkStackComponent,
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
  ],
})
export class SparkCoreAngularModule { }
