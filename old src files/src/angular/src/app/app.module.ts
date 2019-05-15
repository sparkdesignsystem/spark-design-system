import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

// Collected Spark Import
import { SparkAngularModule } from '@sparkdesignsystem/spark-angular';

// Docs Site Component Imports
import { AccordionDocsComponent } from './spark-docs/accordion-docs/accordion-docs.component';
import { AlertDocsComponent } from './spark-docs/alert-docs/alert-docs.component';
import { AwardDocsComponent } from './spark-docs/award-docs/award-docs.component';
import { ButtonDocsComponent } from './spark-docs/button-docs/button-docs.component';
import { CardDocsComponent } from './spark-docs/card-docs/card-docs.component';
import { DictionaryDocsComponent } from './spark-docs/dictionary-docs/dictionary-docs.component';
import { DividerDocsComponent } from './spark-docs/divider-docs/divider-docs.component';
import { DropdownDocsComponent } from './spark-docs/dropdown-docs/dropdown-docs.component';
import { FooterDocsComponent } from './spark-docs/footer-docs/footer-docs.component';
import { HighlightBoardDocsComponent } from './spark-docs/highlight-board-docs/highlight-board-docs.component';
import { IconSetDocsComponent } from './spark-docs/icon-set-docs/icon-set-docs.component';
import { IconSetComponent } from './spark-docs/icon-set/icon-set.component';
import { InputDocsComponent } from './spark-docs/input-docs/input-docs.component';
import { IntroDocsComponent } from './spark-docs/intro-docs/intro-docs.component';
import { LinkDocsComponent } from './spark-docs/link-docs/link-docs.component';
import { ListDocsComponent } from './spark-docs/list-docs/list-docs.component';
import { MastheadDocsComponent } from './spark-docs/masthead-docs/masthead-docs.component';
import { MastheadExtendedDocsComponent } from './spark-docs/masthead-extended-docs/masthead-extended-docs.component';
import { ModalDocsComponent } from './spark-docs/modal-docs/modal-docs.component';
import { PageNotFoundComponent } from './spark-docs/page-not-found/page-not-found.component';
import { PaginationDocsComponent } from './spark-docs/pagination-docs/pagination-docs.component';
import { PromoDocsComponent } from './spark-docs/promo-docs/promo-docs.component';
import { StackDocsComponent } from './spark-docs/stack-docs/stack-docs.component';
import { TabbedNavigationDocsComponent } from './spark-docs/tabbed-navigation-docs/tabbed-navigation-docs.component';
import { TableDocsComponent } from './spark-docs/table-docs/table-docs.component';
import { ToggleDocsComponent } from './spark-docs/toggle-docs/toggle-docs.component';

const appRoutes: Routes = [
  { path: 'alerts', component: AlertDocsComponent },
  { path: 'cards', component: CardDocsComponent },
  { path: 'icons', component: IconSetDocsComponent },
  { path: 'buttons', component: ButtonDocsComponent },
  { path: 'links', component: LinkDocsComponent },
  { path: 'accordions', component: AccordionDocsComponent },
  { path: 'lists', component: ListDocsComponent },
  { path: 'modals', component: ModalDocsComponent },
  { path: 'dividers', component: DividerDocsComponent },
  { path: 'dropdowns', component: DropdownDocsComponent },
  { path: 'masthead', component: MastheadDocsComponent },
  { path: 'masthead-extended', component: MastheadExtendedDocsComponent },
  { path: 'inputs', component: InputDocsComponent },
  { path: 'stack', component: StackDocsComponent },
  { path: 'promo', component: PromoDocsComponent },
  { path: 'footer', component: FooterDocsComponent },
  { path: 'award', component: AwardDocsComponent },
  { path: 'toggle', component: ToggleDocsComponent },
  { path: 'tables', component: TableDocsComponent },
  { path: 'tabbed-navigation', component: TabbedNavigationDocsComponent },
  { path: 'dictionary', component: DictionaryDocsComponent },
  { path: 'pagination', component: PaginationDocsComponent },
  { path: 'highlight-board', component: HighlightBoardDocsComponent },
  { path: '', component: IntroDocsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AlertDocsComponent,
    AccordionDocsComponent,
    ButtonDocsComponent,
    CardDocsComponent,
    PageNotFoundComponent,
    IntroDocsComponent,
    LinkDocsComponent,
    ModalDocsComponent,
    IconSetComponent,
    IconSetDocsComponent,
    DividerDocsComponent,
    DropdownDocsComponent,
    MastheadDocsComponent,
    MastheadExtendedDocsComponent,
    InputDocsComponent,
    ListDocsComponent,
    StackDocsComponent,
    PromoDocsComponent,
    AwardDocsComponent,
    FooterDocsComponent,
    ToggleDocsComponent,
    TableDocsComponent,
    TabbedNavigationDocsComponent,
    DictionaryDocsComponent,
    PaginationDocsComponent,
    HighlightBoardDocsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, {
      anchorScrolling: 'enabled'
    }),
    BrowserModule,
    SparkAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
