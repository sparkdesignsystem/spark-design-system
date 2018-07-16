import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'sprk-modal',
  template: `
    <div *ngIf="isVisible"
         class="sprk-c-Modal"
         role="dialog"
         tabindex="1"
         [attr.aria-labelledby]="heading_id"
         aria-modal="true"
         [attr.aria-describedby]="content_id">
      <header class="sprk-c-Modal__header">
        <h2 class="sprk-c-Modal__heading sprk-b-TypeDisplayFive"
            [id]="heading_id">{{ title }}</h2>

        <div *ngIf="modalType != 'wait'; then dismissButton; else waitSpinner;"></div>

        <ng-template #dismissButton>
          <button class="sprk-c-Modal__icon"
                  type="button"
                  aria-label="Close Modal"
                  (click)="closeModal($event)">
              <sprk-icon iconType="times" additionalClasses="sprk-c-Icon--l"></sprk-icon>
          </button>
        </ng-template>

        <ng-template #waitSpinner>
          <div class="sprk-c-Modal__icon">
            <div class="sprk-c-Spinner sprk-c-Spinner--circle sprk-c-Spinner--large"></div>
          </div>
        </ng-template>
      </header>

      <div class="sprk-c-Modal__body">
        <p class="sprk-b-TypeBodyTwo" [id]="content_id">
          <ng-content></ng-content>
        </p>
      </div>

      <footer *ngIf="modalType === 'choice'" class="sprk-c-Modal__footer">
        <button class="sprk-c-Button sprk-u-mrm"
                [attr.data-analytics]="confirmAnalyticsString"
                (click)="emitConfirmClick($event)">
          {{ confirmText }}
        </button>

        <a href="#nogo"
           class="sprk-b-Link sprk-b-Link--standalone"
           [attr.data-analytics]="cancelAnalyticsString"
           (click)="emitCancelClick($event)">
          {{ cancelText }}
        </a>
      </footer>
    </div>

    <div *ngIf="isVisible"
         class="sprk-c-ModalMask"
         tabindex="-1"
         (click)="closeModal($event)"></div>
  `
})
export class SparkModalComponent {
  @Input() title: string;
  @Input() modalType: string;
  @Input() confirmText: string = 'Confirm';
  @Input() cancelText: string = 'Cancel';
  @Input() confirmAnalyticsString: string;
  @Input() cancelAnalyticsString: string;
  @Input() isVisible: boolean = false;
  @Output() hide = new EventEmitter<any>();
  @Output() confirmClick= new EventEmitter<any>();
  @Output() cancelClick= new EventEmitter<any>();

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if(this.isVisible && event.key === 'Escape') {
      this.closeModal(event);
    }
  }

  componentID = _.uniqueId();
  heading_id = `modalHeading__${this.componentID}`;
  content_id = `modalContent__${this.componentID}`;

  constructor() { }

  closeModal(event): void {
    if (this.modalType != 'wait') {
      event.preventDefault();
      this.hide.emit(event);
    }
  }

  emitConfirmClick(event): void {
    this.confirmClick.emit(event);
  }

  emitCancelClick(event): void {
    event.preventDefault();
    this.cancelClick.emit(event);
    this.closeModal(event);
  }
}
