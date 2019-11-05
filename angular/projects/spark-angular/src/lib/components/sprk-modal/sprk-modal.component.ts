import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output
} from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'sprk-modal',
  template: `
    <div
      *ngIf="isVisible"
      [ngClass]="{
        'sprk-c-Modal': true,
        'sprk-c-Modal--wait': modalType === 'wait'
      }"
      role="dialog"
      tabindex="1"
      [attr.aria-labelledby]="heading_id"
      aria-modal="true"
      [attr.aria-describedby]="content_id"
      [attr.data-id]="idString"
    >
      <div class="sprk-o-Stack sprk-o-Stack--large">
        <header class="sprk-o-Stack__item sprk-c-Modal__header">
          <h2
            class="sprk-c-Modal__heading sprk-b-TypeDisplayFour"
            [id]="heading_id"
          >
            {{ title }}
          </h2>

          <button
            *ngIf="modalType != 'wait'"
            class="sprk-c-Modal__icon"
            type="button"
            aria-label="Close Modal"
            (click)="closeModal($event)"
          >
            <sprk-icon
              iconType="close"
              additionalClasses="sprk-c-Icon--stroke-current-color"
            ></sprk-icon>
          </button>
        </header>

        <div
          class="sprk-o-Stack__item sprk-c-Modal__body sprk-o-Stack sprk-o-Stack--medium"
        >
          <div
            *ngIf="modalType == 'wait'"
            class="sprk-o-Stack__item sprk-c-Spinner sprk-c-Spinner--circle sprk-c-Spinner--large sprk-c-Spinner--dark"
          ></div>
          <ng-content></ng-content>
        </div>

        <footer
          *ngIf="modalType === 'choice'"
          class="sprk-o-Stack__item sprk-c-Modal__footer"
        >
          <button
            class="sprk-c-Button sprk-u-mrm"
            [attr.data-analytics]="confirmAnalyticsString"
            (click)="emitConfirmClick($event)"
          >
            {{ confirmText }}
          </button>

          <button
            class="sprk-c-Button sprk-c-Button--tertiary"
            [attr.data-analytics]="cancelAnalyticsString"
            (click)="emitCancelClick($event)"
          >
            {{ cancelText }}
          </button>
        </footer>
      </div>
    </div>

    <div
      *ngIf="isVisible"
      class="sprk-c-ModalMask"
      tabindex="-1"
      (click)="closeModal($event)"
    ></div>
  `
})
export class SprkModalComponent {
  @Input()
  title: string;
  @Input()
  modalType: string;
  @Input()
  confirmText = 'Confirm';
  @Input()
  cancelText = 'Cancel';
  @Input()
  confirmAnalyticsString: string;
  @Input()
  cancelAnalyticsString: string;
  /**
   * The value supplied will be assigned
   * to the `data-id` attribute on the
   * component. This is intended to be
   * used as a selector for automated
   * tools. This value should be unique
   * per page.
   */
  @Input()
  idString: string;
  @Input()
  isVisible = false;
  @Output()
  hide = new EventEmitter<any>();
  @Output()
  confirmClick = new EventEmitter<any>();
  @Output()
  cancelClick = new EventEmitter<any>();

  componentID = _.uniqueId();
  heading_id = `modalHeading__${this.componentID}`;
  content_id = `modalContent__${this.componentID}`;

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (this.isVisible && event.key === 'Escape') {
      this.closeModal(event);
    }
  }

  constructor() {}

  closeModal(event): void {
    if (this.modalType !== 'wait') {
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
