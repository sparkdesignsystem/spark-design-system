import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-docs',
  template: `
    <div class="sprk-u-mbm">
      <sprk-button triggerModal="choiceModal">Choice Modal</sprk-button>
    </div>
    <div class="sprk-u-mbm">
      <sprk-button triggerModal="infoModal">Info Modal</sprk-button>
    </div>
    <div class="sprk-u-mbm">
      <sprk-button triggerModal="waitModal">Wait Modal</sprk-button>
    </div>
    <sprk-modal name="choiceModal"></sprk-modal>
    <sprk-modal name="infoModal"></sprk-modal>
    <sprk-modal name="waitModal"></sprk-modal>
  `
})
export class ModalDocsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
