import { Component } from '@angular/core';

@Component({
  selector: 'sprk-modal-docs',
  template: `
    <div class="sprk-u-mbm">
      <button
        (click)="toggleChoiceModal($event)"
        additionalClasses="choice-button"
        sprkButton>
        Choice Modal
      </button>
    </div>
    <div class="sprk-u-mbm">
      <button
        (click)="toggleInfoModal($event)"
        additionalClasses="info-button"
        sprkButton>
        Info Modal
      </button>
    </div>
    <div>
      <button
        (click)="toggleWaitModal($event)"
        additionalClasses="wait-button"
        sprkButton>
        Wait Modal
      </button>
    </div>
    <sprk-modal
      [(isVisible)]="choiceVisible"
      title="Are you sure?"
      (hide)="toggleChoiceModal($event)"
      modalType="choice"
      idString="modal-choice-1">This is some modal content.</sprk-modal>
    <sprk-modal
      [(isVisible)]="infoVisible"
      title="For Your Information"
      (hide)="toggleInfoModal($event)"
      modalType="info"
      idString="modal-info-1">This is some modal content.</sprk-modal>
    <sprk-modal
      [(isVisible)]="waitVisible"
      title="Please wait..."
      (hide)="toggleWaitModal($event)"
      modalType="wait"
      idString="modal-wait-1">This is some modal content.</sprk-modal>
  `
})
export class ModalDocsComponent {
  choiceVisible = false;
  waitVisible = false;
  infoVisible = false;

  toggleChoiceModal(event) {
    event.preventDefault();
    this.choiceVisible = !this.choiceVisible;
  }

  toggleWaitModal(event) {
    this.waitVisible = !this.waitVisible;
  }

  toggleInfoModal(event) {
    this.infoVisible = !this.infoVisible;
  }
}
