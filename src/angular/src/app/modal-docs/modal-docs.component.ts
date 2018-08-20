import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-docs',
  template: `
    <div class="sprk-u-mbm">
      <sprk-button (click)="toggleChoiceModal($event)" additionalClasses="choice-button">Choice Modal</sprk-button>
    </div>
    <div class="sprk-u-mbm">
      <sprk-button (click)="toggleInfoModal($event)" additionalClasses="info-button">Info Modal</sprk-button>
    </div>
    <div>
      <sprk-button (click)="toggleWaitModal($event)" additionalClasses="wait-button">Wait Modal</sprk-button>
    </div>
    <sprk-modal
      [(isVisible)]="choiceVisible"
      title="Are you sure?"
      (hide)="toggleChoiceModal($event)"
      modalType="choice">This is some modal content.</sprk-modal>
    <sprk-modal
      [(isVisible)]="infoVisible"
      title="For Your Information"
      (hide)="toggleInfoModal($event)"
      modalType="info">This is some modal content.</sprk-modal>
    <sprk-modal
      [(isVisible)]="waitVisible"
      title="Please wait..."
      (hide)="toggleWaitModal($event)"
      modalType="wait">This is some modal content.</sprk-modal>
  `
})
export class ModalDocsComponent {
  choiceVisible: boolean = false;
  waitVisible: boolean = false;
  infoVisible: boolean = false;

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
