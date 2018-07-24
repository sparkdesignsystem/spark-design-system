import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { RouterModule } from '@angular/router';
import { SparkModalComponent } from './components/sprk-modal/sprk-modal.component';
import { SparkDividerComponent } from './components/sprk-divider/sprk-divider.component';
import { SparkListComponent } from './components/sprk-list/sprk-list.component';
import { SparkListItemComponent } from './components/sprk-list-item/sprk-list-item.component';
import { SparkMastheadComponent } from './components/sprk-masthead/sprk-masthead.component';
import { SparkStackComponent } from './components/sprk-stack/sprk-stack.component';
import { SparkStackItemComponent } from './components/sprk-stack-item/sprk-stack-item.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
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
<<<<<<< HEAD
    SparkMastheadComponent
=======
    SparkStackComponent,
    SparkStackItemComponent
>>>>>>> stack object
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
<<<<<<< HEAD
    SparkNarrowNavigationItemComponent,
    SparkSecondaryNavigationComponent,
    SparkSecondaryNavigationItemComponent,
    SparkMastheadComponent
=======
    SparkNarrowNavigationItemComponent
    SparkStackComponent,
    SparkStackItemComponent
>>>>>>> stack object
  ],
})
export class SparkCoreAngularModule { }
