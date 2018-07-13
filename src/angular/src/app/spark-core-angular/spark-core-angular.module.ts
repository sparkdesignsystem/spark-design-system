import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SparkAlertComponent } from './components/sprk-alert/sprk-alert.component';
import { SparkButtonComponent } from './components/sprk-button/sprk-button.component';
import { SparkLinkComponent } from './components/sprk-link/sprk-link.component';
import { SparkIconSetComponent } from './components/sprk-icon-set/sprk-icon-set.component';
import { SparkIconComponent } from './components/sprk-icon/sprk-icon.component';
import { SparkModalComponent } from './components/sprk-modal/sprk-modal.component';
import { SparkDividerComponent } from './components/sprk-divider/sprk-divider.component';
import { SparkListComponent } from './components/sprk-list/sprk-list.component';
import { SparkListItemComponent } from './components/sprk-list-item/sprk-list-item.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    SparkAlertComponent,
    SparkButtonComponent,
    SparkLinkComponent,
    SparkIconSetComponent,
    SparkIconComponent,
    SparkModalComponent,
    SparkDividerComponent,
    SparkListComponent,
    SparkListItemComponent
  ],
  exports: [
    SparkAlertComponent,
    SparkButtonComponent,
    SparkDividerComponent,
    SparkLinkComponent,
    SparkModalComponent,
    SparkLinkComponent,
    SparkIconSetComponent,
    SparkIconComponent,
    SparkListComponent,
    SparkListItemComponent
  ],
})
export class SparkCoreAngularModule { }
