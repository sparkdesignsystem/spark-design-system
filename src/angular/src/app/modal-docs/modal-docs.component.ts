import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-docs',
  template: `
    <div class="sprk-u-mbm">
      <sprk-button triggerModal="choiceModal">Choice Modal</sprk-button>
    </div>
    <sprk-modal 
      name="choiceModal" 
      title="Are you sure?" 
      modalType="choice">This is some modal content.</sprk-modal>
  `
})
export class ModalDocsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
