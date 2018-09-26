import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

// Individual Spark Extras Imports
import { SparkAwardModule } from '@sparkdesignsystem/spark-extras-angular-award';
import { SparkCardModule } from '@sparkdesignsystem/spark-extras-angular-card';
import { SparkDictionaryModule } from '@sparkdesignsystem/spark-extras-angular-dictionary';
import { SparkHighlightBoardModule } from '@sparkdesignsystem/spark-extras-angular-highlight-board';

// Collected Spark Core Import
import { SparkCoreAngularModule } from '@sparkdesignsystem/spark-core-angular';

// Docs Site Component Imports
import { AccordionDocsComponent } from './spark-docs/accordion-docs/accordion-docs.component';
import { AlertDocsComponent } from './spark-docs/alert-docs/alert-docs.component';
import { AwardDocsComponent } from './spark-docs/award-docs/award-docs.component';
import { ButtonDocsComponent } from './spark-docs/button-docs/button-docs.component';
import { CardDocsComponent } from './spark-docs/card-docs/card-docs.component';
import { DictionaryDocsComponent } from './spark-docs/dictionary-docs/dictionary-docs.component';
import { DividerDocsComponent } from './spark-docs/divider-docs/divider-docs.component';
import { FooterDocsComponent } from './spark-docs/footer-docs/footer-docs.component';
import { HighlightBoardDocsComponent } from './spark-docs/highlight-board-docs/highlight-board-docs.component';
import { IconSetDocsComponent } from './spark-docs/icon-set-docs/icon-set-docs.component';
import { InputDocsComponent } from './spark-docs/input-docs/input-docs.component';
import { IntroDocsComponent } from './spark-docs/intro-docs/intro-docs.component';
import { LinkDocsComponent } from './spark-docs/link-docs/link-docs.component';
import { ListDocsComponent } from './spark-docs/list-docs/list-docs.component';
import { MastheadDocsComponent } from './spark-docs/masthead-docs/masthead-docs.component';
import { ModalDocsComponent } from './spark-docs/modal-docs/modal-docs.component';
import { NavigationDocsComponent } from './spark-docs/navigation-docs/navigation-docs.component';
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
  { path: 'navigation', component: NavigationDocsComponent },
  { path: 'accordions', component: AccordionDocsComponent },
  { path: 'lists', component: ListDocsComponent },
  { path: 'modals', component: ModalDocsComponent },
  { path: 'dividers', component: DividerDocsComponent },
  { path: 'masthead', component: MastheadDocsComponent },
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
    IconSetDocsComponent,
    NavigationDocsComponent,
    DividerDocsComponent,
    MastheadDocsComponent,
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
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, {}),
    BrowserModule,
    SparkAwardModule,
    SparkCardModule,
    SparkHighlightBoardModule,
    SparkDictionaryModule,
    SparkCoreAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
