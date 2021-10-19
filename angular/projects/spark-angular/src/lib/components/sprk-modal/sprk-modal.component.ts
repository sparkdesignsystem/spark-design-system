import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { uniqueId } from 'lodash';

@Component({
  selector: 'sprk-modal',
  template: `
    <div
      *ngIf="isVisible"
      [ngClass]="getClasses()"
      role="dialog"
      tabindex="-1"
      [attr.aria-labelledby]="heading_id"
      aria-modal="true"
      [attr.aria-describedby]="content_id"
      [attr.data-id]="idString"
    >
      <div class="sprk-o-Stack sprk-o-Stack--large">
        <header class="sprk-c-Modal__header" sprkStackItem>
          <h2
            class="sprk-c-Modal__heading"
            [id]="heading_id"
            sprkHeading
            variant="displayFour"
          >
            {{ title }}
          </h2>

          <button
            *ngIf="modalType != 'wait'"
            class="sprk-c-Modal__icon"
            type="button"
            aria-label="Close Modal"
            [attr.data-analytics]="closeAnalyticsString"
            (click)="closeModal($event)"
          >
            <sprk-icon iconName="close"></sprk-icon>
          </button>
        </header>

        <div
          class="sprk-c-Modal__body sprk-o-Stack sprk-o-Stack--medium"
          sprkStackItem
        >
          <div
            *ngIf="modalType == 'wait'"
            sprkStackItem
            sprkSpinner
            variant="primary"
            size="large"
          ></div>
          <ng-content></ng-content>
        </div>

        <footer
          *ngIf="modalType === 'choice'"
          sprkStackItem
          class="
            sprk-c-Modal__footer
            sprk-o-Stack
            sprk-o-Stack--split@xs
            sprk-o-Stack--end-row
            sprk-o-Stack--medium"
        >
          <div sprkStackItem>
            <button
              sprkButton
              variant="tertiary"
              analyticsString="cancelAnalyticsString"
              (click)="emitCancelClick($event)"
              additionalClasses="sprk-c-Button--full@xs"
            >
              {{ cancelText }}
            </button>
          </div>
          <div sprkStackItem>
            <button
              sprkButton
              analyticsString="confirmAnalyticsString"
              (click)="emitConfirmClick($event)"
              additionalClasses="sprk-c-Button--full@xs"
            >
              {{ confirmText }}
            </button>
          </div>
        </footer>
      </div>
    </div>

    <div
      *ngIf="isVisible"
      class="sprk-c-ModalMask"
      tabindex="-1"
      (click)="closeModal($event)"
    ></div>
  `,
})
export class SprkModalComponent {
  /**
   * Expects a space separated string
   * of classes to be added to the
   * component.
   */
  @Input()
  additionalClasses: string;
  /**
   * The value supplied will be
   * rendered as the text for the Modal title.
   */
  @Input()
  title: string;
  /**
   * This determines the variant of the Modal.
   * Can be `choice`, `info`, or `wait`.
   */
  @Input()
  modalType: string;
  /**
   * The value supplied will be
   * rendered as the text for the confirm button.
   */
  @Input()
  confirmText = 'Confirm';
  /**
   * The value supplied will be rendered
   * as the text for the cancel button.
   */
  @Input()
  cancelText = 'Cancel';
  /**
   * The value supplied will be assigned to the
   * `data-analytics` attribute
   * on the confirm button. Intended
   * for an outside library to capture data.
   */
  @Input()
  confirmAnalyticsString: string;
  /**
   * The value supplied will be assigned to the
   * `data-analytics` attribute
   * on the cancel button. Intended
   * for an outside library to capture data.
   */
  @Input()
  cancelAnalyticsString: string;
  /**
   * The value supplied will be assigned to the
   * `data-analytics` attribute
   * on the close button. Intended
   * for an outside library to capture data.
   */
  @Input()
  closeAnalyticsString: string;
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
  /**
   * If `true`, the Modal will be shown.
   * If `false`, the modal will not be shown.
   */
  @Input()
  isVisible = false;
  /**
   * When the Modal is closed the hide event is
   * emitted and a callback function can
   * be triggered if supplied.
   */
  @Output()
  hide = new EventEmitter<any>();
  /**
   * Available when the Modal type is `choice`.
   * The Modal will emit a confirm click event
   * when the confirmation button is clicked.
   * A callback function can be triggered if
   * supplied.
   */
  @Output()
  confirmClick = new EventEmitter<any>();
  /**
   * Available when the Modal type is `choice`.
   * The Modal will emit a cancel click event
   * when the cancel link is clicked.
   * A callback function can be triggered if supplied.
   */
  @Output()
  cancelClick = new EventEmitter<any>();
  /**
   * @ignore
   */
  componentID = uniqueId();
  /**
   * @ignore
   */
  heading_id = `modalHeading__${this.componentID}`;
  /**
   * @ignore
   */
  content_id = `modalContent__${this.componentID}`;

  /**
   * @ignore
   */
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (this.isVisible && event.key === 'Escape') {
      this.closeModal(event);
    }
  }

  /**
   * @ignore
   */
  constructor() {}

  /**
   * @ignore
   */
  closeModal(event): void {
    if (this.modalType !== 'wait') {
      event.preventDefault();
      this.hide.emit(event);
    }
  }

  /**
   * Emits an event when the confirmation
   * button is clicked.
   */
  emitConfirmClick(event): void {
    this.confirmClick.emit(event);
  }

  /**
   * Emits an event when the cancel
   * link is clicked.
   */
  emitCancelClick(event): void {
    event.preventDefault();
    this.cancelClick.emit(event);
    this.closeModal(event);
  }

  /**
   * @ignore
   */
  getClasses(): string {
    const classArray: string[] = ['sprk-c-Modal'];
    if (this.modalType === 'wait') {
      classArray.push('sprk-c-Modal--wait');
    }

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }
}
