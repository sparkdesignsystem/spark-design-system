import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-docs',
  template: `
    <div class="sprk-u-mbm">
      <sprk-button (click)="toggleChoiceModal($event)">Choice Modal</sprk-button>
    </div>
    <div class="sprk-u-mbm">
      <sprk-button (click)="toggleInfoModal($event)">Info Modal</sprk-button>
    </div>
    <div>
      <sprk-button (click)="toggleWaitModal($event)">Wait Modal</sprk-button>
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

  toggleChoiceModal(payload: string) {
    this.choiceVisible = !this.choiceVisible;
  }

  toggleWaitModal(payload: string) {
    this.waitVisible = !this.waitVisible;
  }

  toggleInfoModal(payload: string) {
    this.infoVisible = !this.infoVisible;
  }
}
