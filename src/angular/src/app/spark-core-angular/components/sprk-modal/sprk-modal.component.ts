import { Component, Input, Output, EventEmitter, HostListener, ElementRef, ViewChild } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'sprk-modal',
  template: `
    <div *ngIf="isVisible" class="sprk-c-Modal" role="dialog" tabindex="1" [attr.aria-labelledby]="heading_id" aria-modal="true" [attr.aria-describedby]="content_id">
      <header class="sprk-c-Modal__header">
        <h2 class="sprk-c-Modal__heading sprk-b-TypeDisplayFive" [id]="heading_id">{{ title }}</h2>
 
        <button *ngIf="modalType != 'wait'; then modalFooter; else waitSpinner;" class="sprk-c-Modal__icon" type="button" aria-label="Close Modal">
          <svg class="sprk-c-Icon sprk-c-Icon--l" viewBox="0 0 384 512" aria-hidden="true" focusable="false">
            <use xlink:href="#times"></use>
          </svg>
        </button>
        
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
        <button class="sprk-c-Button sprk-u-mrm" [attr.data-analytics]="confirmAnalyticsString" (click)="emitConfirmClick($event)" #confirmButton>
          {{ confirmText }}
        </button>

        <a href="" class="sprk-b-Link sprk-b-Link--standalone" [attr.data-analytics]="cancelAnalyticsString" 
        (click)="emitCancelClick($event)">
          {{ cancelText }}
        </a>
      </footer>
    </div>

    <div *ngIf="isVisible" class="sprk-c-ModalMask" tabindex="-1" (click)="closeModal($event)"></div>
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

  @ViewChild('confirmButton') confirmButton: ElementRef;

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
