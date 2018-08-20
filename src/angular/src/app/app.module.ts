import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SparkCoreAngularModule } from './spark-core-angular/spark-core-angular.module';
import { ButtonDocsComponent } from './button-docs/button-docs.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { IntroDocsComponent } from './intro-docs/intro-docs.component';
import { LinkDocsComponent } from './link-docs/link-docs.component';
import { AlertDocsComponent } from './alert-docs/alert-docs.component';
import { AccordionDocsComponent } from './accordion-docs/accordion-docs.component';
import { IconSetDocsComponent } from './icon-set-docs/icon-set-docs.component';
import { ModalDocsComponent } from './modal-docs/modal-docs.component';
import { DividerDocsComponent } from './divider-docs/divider-docs.component';
import { ListDocsComponent } from './list-docs/list-docs.component';
import { NavigationDocsComponent } from './navigation-docs/navigation-docs.component';
import { MastheadDocsComponent } from './masthead-docs/masthead-docs.component';
import { InputDocsComponent } from './input-docs/input-docs.component';
import { CardDocsComponent } from './card-docs/card-docs.component';
import { StackDocsComponent } from './stack-docs/stack-docs.component';
import { PromoDocsComponent } from './promo-docs/promo-docs.component';
import { FooterDocsComponent } from './footer-docs/footer-docs.component';
import { AwardDocsComponent } from './award-docs/award-docs.component';
import { ToggleDocsComponent } from './toggle-docs/toggle-docs.component';
import { TabbedNavigationDocsComponent } from './tabbed-navigation-docs/tabbed-navigation-docs.component';
import { DictionaryDocsComponent } from './dictionary-docs/dictionary-docs.component';
import { TableDocsComponent } from './table-docs/table-docs.component';
import { PaginationDocsComponent } from './pagination-docs/pagination-docs.component';

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
  { path: 'tabbed-navigation', component: TabbedNavigationDocsComponent},
  { path: 'dictionary', component: DictionaryDocsComponent },
  { path: 'pagination', component: PaginationDocsComponent },
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
    FooterDocsComponent,
    AwardDocsComponent,
    ToggleDocsComponent,
    TableDocsComponent,
    TabbedNavigationDocsComponent,
    DictionaryDocsComponent,
    PaginationDocsComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { }
    ),
    BrowserModule,
    SparkCoreAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
