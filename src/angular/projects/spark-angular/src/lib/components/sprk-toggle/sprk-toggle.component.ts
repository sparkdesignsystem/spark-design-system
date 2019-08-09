import { Component, Input, OnInit } from '@angular/core';
import { toggleAnimations } from './sprk-toggle-animations';

@Component({
  selector: 'sprk-toggle',
  template: `
    <div
      class="sprk-u-Overflow--hidden {{ additionalClasses }}"
      [attr.data-id]="idString"
    >
      <sprk-link
        linkType="simple"
        additionalClasses="{{ titleFontClass }} sprk-b-Link--has-icon"
        (click)="toggle($event)"
        [ariaExpanded]="isOpen ? 'true' : 'false'"
        [analyticsString]="analyticsString"
      >
        <sprk-icon
          iconType="chevron-down-circle-two-color"
          additionalClasses="{{
            iconClass
          }} sprk-c-Icon--l sprk-u-mrs sprk-c-Icon--toggle {{ iconStateClass }}"
        ></sprk-icon>
        {{ title }}
      </sprk-link>

      <div [@toggleContent]="animState">
        <div class="sprk-u-pts sprk-u-pbs"><ng-content></ng-content></div>
      </div>
    </div>
  `,
  animations: [toggleAnimations.toggleContent]
})
export class SprkToggleComponent implements OnInit {
  @Input()
  analyticsString: string;
  @Input()
  additionalClasses: string;
  @Input()
  title: string;
  @Input()
  iconClass: string;
  @Input()
  titleFontClass = 'sprk-b-TypeBodyThree';
  @Input()
  idString: string;

  public isOpen = false;
  public iconStateClass = '';
  public animState = 'closed';

  toggleState(): void {
    this.isOpen === false
      ? (this.animState = 'closed')
      : (this.animState = 'open');

    this.isOpen === false
      ? (this.iconStateClass = '')
      : (this.iconStateClass = 'sprk-c-Icon--open');
  }

  toggle(event): void {
    event.preventDefault();
    this.isOpen = !this.isOpen;
    this.toggleState();
  }

  ngOnInit() {
    this.toggleState();
  }
}
