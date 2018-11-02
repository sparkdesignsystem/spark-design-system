import { Component, Input, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'sprk-toggle',
  template: `
    <div class="{{ additionalClasses }}">
      <a
        class="sprk-b-TypeBodyThree sprk-b-Link sprk-b-Link--standalone sprk-b-Link--plain"
        href="#"
        (click)="toggle($event)"
        [attr.aria-expanded]="isOpen ? 'true' : 'false'"
        [attr.data-analytics]="analyticsString">
        <sprk-icon iconType="chevron-down" additionalClasses="sprk-u-mrs sprk-c-Icon--toggle {{ iconStateClass }}"></sprk-icon>
          {{ title }}
      </a>

      <div [@toggleContent]="animState" data-sprk-toggle="content">
        <p class="sprk-b-TypeBodyFour sprk-u-pts">
          {{ body }}
        </p>
      </div>
    </div>
  `,
  animations: [
    trigger('toggleContent', [
      state(
        'closed',
        style({
          height: '0',
          display: 'none',
          overflow: 'hidden'
        })
      ),
      state(
        'open',
        style({
          height: '*',
          display: 'block'
        })
      ),
      transition('closed => open', animate('300ms ease-in')),
      transition('open => closed', animate('300ms ease-out'))
    ])
  ]
})
export class SparkToggleComponent implements OnInit {
  @Input()
  analyticsString: string;
  @Input()
  additionalClasses: string;
  @Input()
  title: string;
  @Input()
  body: string;

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
